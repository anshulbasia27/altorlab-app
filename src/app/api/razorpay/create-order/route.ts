import { getRazorpayClient, paymentStore } from "@/lib/razorpay";

interface CreateOrderBody {
  email: string;
  style: string;
  roomType: string;
  predictionId?: string;
}

const AMOUNT = 74900;
const CURRENCY = "INR";

export async function POST(req: Request): Promise<Response> {
  let body: CreateOrderBody;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { email, style, roomType, predictionId } = body;

  if (!email || !style || !roomType) {
    return Response.json(
      { error: "email, style, and roomType are required" },
      { status: 400 }
    );
  }

  let razorpay: ReturnType<typeof getRazorpayClient>;
  try {
    razorpay = getRazorpayClient();
  } catch (err) {
    const message = err instanceof Error ? err.message : "Configuration error";
    console.error(`[razorpay/create-order] ${message}`);
    return Response.json({ error: "Payment service unavailable" }, { status: 503 });
  }

  try {
    const order = await razorpay.orders.create({
      amount: AMOUNT,
      currency: CURRENCY,
      receipt: `design-${Date.now()}`,
      notes: {
        email,
        style,
        roomType,
        ...(predictionId && { predictionId }),
      },
    });

    if (predictionId) {
      paymentStore.set(order.id, {
        paymentId: "",
        verified: false,
        predictionId,
      });
    }

    return Response.json({ orderId: order.id, amount: AMOUNT, currency: CURRENCY });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error(`[razorpay/create-order] Order creation failed: ${message}`);
    return Response.json({ error: "Failed to create order" }, { status: 500 });
  }
}
