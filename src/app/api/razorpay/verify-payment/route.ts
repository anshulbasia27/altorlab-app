import { verifySignature, paymentStore } from "@/lib/razorpay";

interface VerifyPaymentBody {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export async function POST(req: Request): Promise<Response> {
  let body: VerifyPaymentBody;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = body;

  if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
    return Response.json(
      { verified: false, error: "Missing required payment fields" },
      { status: 400 }
    );
  }

  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret) {
    console.error("[razorpay/verify-payment] RAZORPAY_KEY_SECRET not set");
    return Response.json(
      { verified: false, error: "Payment verification unavailable" },
      { status: 503 }
    );
  }

  const isValid = verifySignature(
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    secret
  );

  if (!isValid) {
    return Response.json({ verified: false, error: "Invalid payment signature" });
  }

  const existing = paymentStore.get(razorpay_order_id);
  paymentStore.set(razorpay_order_id, {
    paymentId: razorpay_payment_id,
    verified: true,
    predictionId: existing?.predictionId,
  });

  return Response.json({ verified: true, paymentId: razorpay_payment_id });
}
