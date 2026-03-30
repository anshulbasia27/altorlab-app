import { beforeEach, describe, expect, it, vi } from "vitest";

const createPredictionMock = vi.fn();
const getPredictionMock = vi.fn();

vi.mock("replicate", () => ({
  default: vi.fn().mockImplementation(() => ({
    predictions: {
      create: createPredictionMock,
      get: getPredictionMock,
    },
  })),
}));

const { POST } = await import("@/app/api/redesign/route");
const { GET } = await import("@/app/api/redesign/[id]/route");
const {
  buildPrompt,
  REDESIGN_TIMEOUT_MS,
  resetPredictionStore,
  SDXL_MODEL_VERSION,
  setPredictionRecordForTest,
} = await import("@/lib/redesign");

function makePostRequest(body: unknown): Request {
  return new Request("http://localhost/api/redesign", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

function makeGetContext(id: string): { params: Promise<{ id: string }> } {
  return { params: Promise.resolve({ id }) };
}

describe("room redesign API routes", () => {
  beforeEach(() => {
    process.env.REPLICATE_API_TOKEN = "test-token";
    createPredictionMock.mockReset();
    getPredictionMock.mockReset();
    resetPredictionStore();
  });

  it("returns 400 when imageUrl is missing", async () => {
    const response = await POST(
      makePostRequest({ style: "modern", roomType: "living_room" })
    );
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toEqual({
      error: "imageUrl is required",
      code: "MISSING_IMAGE_URL",
    });
  });

  it("returns 400 when style is invalid", async () => {
    const response = await POST(
      makePostRequest({
        imageUrl: "https://example.com/room.jpg",
        style: "traditional",
        roomType: "living_room",
      })
    );
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.code).toBe("INVALID_STYLE");
    expect(body.error).toContain("modern");
  });

  it("starts a prediction and returns 202 with predictionId", async () => {
    createPredictionMock.mockResolvedValue({ id: "pred-123", status: "starting" });

    const response = await POST(
      makePostRequest({
        imageUrl: "https://example.com/room.jpg",
        style: "modern",
        roomType: "living_room",
      })
    );
    const body = await response.json();

    expect(response.status).toBe(202);
    expect(body).toEqual({ predictionId: "pred-123", status: "starting" });
    expect(createPredictionMock).toHaveBeenCalledWith({
      version: SDXL_MODEL_VERSION,
      input: {
        image: "https://example.com/room.jpg",
        prompt: buildPrompt("modern", "living_room"),
        prompt_strength: 0.8,
        negative_prompt: "ugly, blurry, low quality, distorted, deformed",
        num_inference_steps: 30,
        guidance_scale: 7.5,
      },
    });
  });

  it("returns processing status while prediction is still running", async () => {
    setPredictionRecordForTest("pred-processing", {
      status: "starting",
      startedAt: Date.now(),
    });
    getPredictionMock.mockResolvedValue({
      id: "pred-processing",
      status: "processing",
    });

    const response = await GET(
      new Request("http://localhost/api/redesign/pred-processing"),
      makeGetContext("pred-processing")
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      status: "processing",
      predictionId: "pred-processing",
    });
  });

  it("returns outputUrl when prediction succeeds", async () => {
    setPredictionRecordForTest("pred-success", {
      status: "processing",
      startedAt: Date.now(),
    });
    getPredictionMock.mockResolvedValue({
      id: "pred-success",
      status: "succeeded",
      output: ["https://replicate.delivery/output.png"],
    });

    const response = await GET(
      new Request("http://localhost/api/redesign/pred-success"),
      makeGetContext("pred-success")
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      status: "succeeded",
      predictionId: "pred-success",
      outputUrl: "https://replicate.delivery/output.png",
    });
  });

  it("returns failed status and error when prediction fails", async () => {
    setPredictionRecordForTest("pred-failed", {
      status: "processing",
      startedAt: Date.now(),
    });
    getPredictionMock.mockResolvedValue({
      id: "pred-failed",
      status: "failed",
      error: "Model crashed",
    });

    const response = await GET(
      new Request("http://localhost/api/redesign/pred-failed"),
      makeGetContext("pred-failed")
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      status: "failed",
      predictionId: "pred-failed",
      error: "Model crashed",
    });
  });

  it("marks prediction as failed after 60 seconds without polling Replicate", async () => {
    setPredictionRecordForTest("pred-timeout", {
      status: "starting",
      startedAt: Date.now() - REDESIGN_TIMEOUT_MS - 1,
    });

    const response = await GET(
      new Request("http://localhost/api/redesign/pred-timeout"),
      makeGetContext("pred-timeout")
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      status: "failed",
      predictionId: "pred-timeout",
      error: "Prediction timed out after 60 seconds",
    });
    expect(getPredictionMock).not.toHaveBeenCalled();
  });
});
