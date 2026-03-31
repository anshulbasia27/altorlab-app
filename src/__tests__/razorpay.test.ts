import crypto from "node:crypto";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { verifySignature } from "@/lib/razorpay";

function makeHmac(orderId: string, paymentId: string, secret: string): string {
  return crypto
    .createHmac("sha256", secret)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");
}

describe("verifySignature", () => {
  it("returns true for a valid HMAC signature", () => {
    const orderId = "order_test123";
    const paymentId = "pay_test456";
    const secret = "test_secret";
    const sig = makeHmac(orderId, paymentId, secret);

    expect(verifySignature(orderId, paymentId, sig, secret)).toBe(true);
  });

  it("returns false for a tampered signature", () => {
    expect(
      verifySignature("order_test123", "pay_test456", "bad_sig", "test_secret")
    ).toBe(false);
  });

  it("returns false when orderId does not match", () => {
    const secret = "test_secret";
    const sig = makeHmac("order_A", "pay_123", secret);
    expect(verifySignature("order_B", "pay_123", sig, secret)).toBe(false);
  });

  it("returns false when paymentId does not match", () => {
    const secret = "test_secret";
    const sig = makeHmac("order_A", "pay_123", secret);
    expect(verifySignature("order_A", "pay_999", sig, secret)).toBe(false);
  });

  it("returns false when secret is wrong", () => {
    const sig = makeHmac("order_A", "pay_123", "correct_secret");
    expect(verifySignature("order_A", "pay_123", sig, "wrong_secret")).toBe(false);
  });
});

describe("POST /api/razorpay/create-order", () => {
  beforeEach(() => {
    vi.resetModules();
    process.env.RAZORPAY_KEY_ID = "rzp_test_key";
    process.env.RAZORPAY_KEY_SECRET = "test_secret";
  });

  it("returns 400 when required fields are missing", async () => {
    vi.doMock("razorpay", () => ({
      default: vi.fn().mockImplementation(() => ({
        orders: { create: vi.fn() },
      })),
    }));

    const { POST } = await import("@/app/api/razorpay/create-order/route");
    const req = new Request("http://localhost/api/razorpay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "test@example.com" }),
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("required");
  });

  it("returns 503 when Razorpay env vars are missing", async () => {
    delete process.env.RAZORPAY_KEY_ID;
    delete process.env.RAZORPAY_KEY_SECRET;

    vi.doMock("razorpay", () => ({
      default: vi.fn().mockImplementation(() => ({
        orders: { create: vi.fn() },
      })),
    }));

    const { POST } = await import("@/app/api/razorpay/create-order/route");
    const req = new Request("http://localhost/api/razorpay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "a@b.com", style: "modern", roomType: "living" }),
    });

    const res = await POST(req);
    expect(res.status).toBe(503);
  });

  it("returns orderId, amount=900, currency=USD on success", async () => {
    vi.doMock("razorpay", () => ({
      default: vi.fn().mockImplementation(() => ({
        orders: {
          create: vi.fn().mockResolvedValue({
            id: "order_mock123",
            amount: 900,
            currency: "USD",
          }),
        },
      })),
    }));

    const { POST } = await import("@/app/api/razorpay/create-order/route");
    const req = new Request("http://localhost/api/razorpay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "user@test.com", style: "modern", roomType: "living" }),
    });

    const res = await POST(req);
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body.orderId).toBe("order_mock123");
    expect(body.amount).toBe(900);
    expect(body.currency).toBe("USD");
  });

  it("stores predictionId in paymentStore when provided", async () => {
    vi.doMock("razorpay", () => ({
      default: vi.fn().mockImplementation(() => ({
        orders: {
          create: vi.fn().mockResolvedValue({ id: "order_pred999" }),
        },
      })),
    }));

    const { POST } = await import("@/app/api/razorpay/create-order/route");
    const { paymentStore } = await import("@/lib/razorpay");

    const req = new Request("http://localhost/api/razorpay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "a@b.com",
        style: "modern",
        roomType: "bedroom",
        predictionId: "pred_abc",
      }),
    });

    await POST(req);
    const record = paymentStore.get("order_pred999");
    expect(record?.predictionId).toBe("pred_abc");
    expect(record?.verified).toBe(false);
  });

  it("returns 500 when Razorpay order creation throws", async () => {
    vi.doMock("razorpay", () => ({
      default: vi.fn().mockImplementation(() => ({
        orders: {
          create: vi.fn().mockRejectedValue(new Error("API error")),
        },
      })),
    }));

    const { POST } = await import("@/app/api/razorpay/create-order/route");
    const req = new Request("http://localhost/api/razorpay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "a@b.com", style: "modern", roomType: "living" }),
    });

    const res = await POST(req);
    expect(res.status).toBe(500);
  });
});

describe("POST /api/razorpay/verify-payment", () => {
  beforeEach(() => {
    vi.resetModules();
    process.env.RAZORPAY_KEY_SECRET = "test_verify_secret";
  });

  it("returns 400 when payment fields are missing", async () => {
    const { POST } = await import("@/app/api/razorpay/verify-payment/route");
    const req = new Request("http://localhost/api/razorpay/verify-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ razorpay_payment_id: "pay_123" }),
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.verified).toBe(false);
  });

  it("returns 503 when RAZORPAY_KEY_SECRET is not set", async () => {
    delete process.env.RAZORPAY_KEY_SECRET;
    const { POST } = await import("@/app/api/razorpay/verify-payment/route");
    const req = new Request("http://localhost/api/razorpay/verify-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        razorpay_payment_id: "pay_1",
        razorpay_order_id: "order_1",
        razorpay_signature: "sig",
      }),
    });
    const res = await POST(req);
    expect(res.status).toBe(503);
  });

  it("returns verified: false for a tampered signature", async () => {
    const { POST } = await import("@/app/api/razorpay/verify-payment/route");
    const req = new Request("http://localhost/api/razorpay/verify-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        razorpay_payment_id: "pay_123",
        razorpay_order_id: "order_456",
        razorpay_signature: "tampered",
      }),
    });
    const res = await POST(req);
    const body = await res.json();
    expect(body.verified).toBe(false);
    expect(body.error).toBeDefined();
  });

  it("returns verified: true and paymentId for a valid signature", async () => {
    const secret = "test_verify_secret";
    const orderId = "order_valid_789";
    const paymentId = "pay_valid_xyz";
    const sig = makeHmac(orderId, paymentId, secret);

    const { POST } = await import("@/app/api/razorpay/verify-payment/route");
    const req = new Request("http://localhost/api/razorpay/verify-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        razorpay_payment_id: paymentId,
        razorpay_order_id: orderId,
        razorpay_signature: sig,
      }),
    });
    const res = await POST(req);
    const body = await res.json();
    expect(body.verified).toBe(true);
    expect(body.paymentId).toBe(paymentId);
  });

  it("updates paymentStore to verified on successful verification", async () => {
    const secret = "test_verify_secret";
    const orderId = "order_store_test";
    const paymentId = "pay_store_abc";
    const sig = makeHmac(orderId, paymentId, secret);

    const { POST } = await import("@/app/api/razorpay/verify-payment/route");
    const { paymentStore } = await import("@/lib/razorpay");

    await POST(
      new Request("http://localhost/api/razorpay/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          razorpay_payment_id: paymentId,
          razorpay_order_id: orderId,
          razorpay_signature: sig,
        }),
      })
    );

    const record = paymentStore.get(orderId);
    expect(record?.verified).toBe(true);
    expect(record?.paymentId).toBe(paymentId);
  });
});
