"use client";

import { useState, useEffect } from "react";
import { RoomStyle } from "./StyleSelector";
import { RoomType } from "./RoomTypeSelector";
import { trackCheckoutStart, trackPurchaseComplete } from "@/lib/tracking";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface PaymentCTAProps {
  file: File | null;
  style: RoomStyle;
  roomType: RoomType;
  email: string;
}

export default function PaymentCTA({ file, style, roomType, email }: PaymentCTAProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (document.getElementById("razorpay-script")) return;
    const script = document.createElement("script");
    script.id = "razorpay-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    if (!file) {
      setError("Please upload a room photo first.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const userEmail = email || `guest.${Date.now()}@altorlab.com`;

      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, style, roomType }),
      });

      if (!res.ok) {
        throw new Error("Failed to create order");
      }

      const { orderId, amount, currency } = await res.json();

      if (!window.Razorpay) {
        throw new Error("Razorpay SDK not available");
      }

      trackCheckoutStart(style, roomType);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount,
        currency,
        name: "AltorLab",
        description: `AI Room Redesign — ${style} style`,
        order_id: orderId,
        prefill: { email: userEmail },
        theme: { color: "#6366f1" },
        handler: async (response: any) => {
          try {
            const verifyRes = await fetch("/api/razorpay/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });

            if (!verifyRes.ok) {
              throw new Error("Verification failed");
            }

            const { verified } = await verifyRes.json();

            if (verified) {
              trackPurchaseComplete(response.razorpay_payment_id, amount);

              const formData = new FormData();
              formData.append("file", file);

              const uploadRes = await fetch("/api/upload", {
                method: "POST",
                body: formData,
              });

              if (!uploadRes.ok) {
                throw new Error("Failed to upload image");
              }

              const { url: imageUrl } = await uploadRes.json();

              const redesignRes = await fetch("/api/redesign", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ imageUrl, style, roomType }),
              });

              if (!redesignRes.ok) {
                throw new Error("Failed to start redesign");
              }

              const { predictionId } = await redesignRes.json();

              localStorage.setItem(
                "altorlab_session",
                JSON.stringify({
                  predictionId,
                  imageUrl,
                  style,
                  roomType,
                  paymentId: response.razorpay_payment_id,
                  paidAt: new Date().toISOString(),
                })
              );

              window.location.href = `/result/${response.razorpay_payment_id}`;
            } else {
              throw new Error("Payment not verified");
            }
          } catch (err) {
            console.error("Payment verification or redesign failed:", err);
            setError("Payment successful, but failed to start redesign. Please contact support.");
            setLoading(false);
          }
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment initiation failed:", err);
      setError("Could not start checkout. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full mt-8">
      <button
        type="button"
        onClick={handlePayment}
        disabled={loading || !file}
        className="w-full min-h-[52px] bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg py-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing...
          </>
        ) : (
          "Redesign My Room for ₹749"
        )}
      </button>

      {error && (
        <p className="mt-3 text-sm text-red-400 text-center flex items-center justify-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}

      <div className="flex items-center justify-center gap-4 mt-4 text-slate-400 text-xs">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Secure Payment
        </span>
        <span>•</span>
        <span>Powered by Razorpay</span>
        <span>•</span>
        <span>Results in 30 seconds</span>
      </div>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900 border-t border-slate-700 p-3">
        <button
          type="button"
          onClick={handlePayment}
          disabled={loading || !file}
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg font-semibold min-h-[52px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </>
          ) : (
            "Redesign My Room — ₹749"
          )}
        </button>
      </div>
      {/* Spacer for sticky CTA */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
