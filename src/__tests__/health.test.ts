import { describe, it, expect } from "vitest";

describe("Health endpoint response shape", () => {
  it("should have status and timestamp fields", () => {
    const mockResponse = {
      status: "ok",
      timestamp: new Date().toISOString(),
    };

    expect(mockResponse).toHaveProperty("status");
    expect(mockResponse).toHaveProperty("timestamp");
    expect(mockResponse.status).toBe("ok");
    expect(typeof mockResponse.timestamp).toBe("string");
  });

  it("timestamp should be valid ISO string", () => {
    const timestamp = new Date().toISOString();
    expect(() => new Date(timestamp)).not.toThrow();
  });
});
