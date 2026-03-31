declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, params);
}

export function trackPageView(path: string) {
  trackEvent("page_view", { page_path: path });
}

export function trackImageUpload() {
  trackEvent("image_upload");
}

export function trackStyleSelect(style: string) {
  trackEvent("style_select", { style });
}

export function trackCheckoutStart(style: string, roomType: string) {
  trackEvent("checkout_start", { style, room_type: roomType });
}

export function trackPurchaseComplete(paymentId: string, amount: number) {
  trackEvent("purchase", {
    transaction_id: paymentId,
    value: amount / 100, // cents to dollars
    currency: "USD",
    items: [{ item_name: "AI Room Redesign", price: amount / 100 }],
  });
}
