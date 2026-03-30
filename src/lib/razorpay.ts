import crypto from "crypto";
import Razorpay from "razorpay";

export function getRazorpayClient(): Razorpay {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new Error("RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be set");
  }

  return new Razorpay({ key_id: keyId, key_secret: keySecret });
}

// Razorpay signs payment responses as HMAC-SHA256 of "orderId|paymentId" exactly.
export function verifySignature(
  orderId: string,
  paymentId: string,
  signature: string,
  secret: string
): boolean {
  const body = `${orderId}|${paymentId}`;
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");
  return expectedSignature === signature;
}

export interface PaymentRecord {
  paymentId: string;
  verified: boolean;
  predictionId?: string;
}

export const paymentStore = new Map<string, PaymentRecord>();
