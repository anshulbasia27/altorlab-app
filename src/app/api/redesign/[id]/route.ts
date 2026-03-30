import { getPredictionStatus, hasReplicateToken, isPredictionTracked } from "@/lib/redesign";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "https://app.altorlab.org",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function jsonResponse(body: unknown, status: number): Response {
  return Response.json(body, { status, headers: CORS_HEADERS });
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
): Promise<Response> {
  const { id } = await context.params;

  if (!id) {
    return jsonResponse(
      { error: "predictionId is required", code: "MISSING_PREDICTION_ID" },
      400
    );
  }

  if (!isPredictionTracked(id)) {
    return jsonResponse(
      { error: "Prediction not found", code: "PREDICTION_NOT_FOUND" },
      404
    );
  }

  if (!hasReplicateToken()) {
    return jsonResponse(
      {
        error: "REPLICATE_API_TOKEN is not configured",
        code: "MISSING_REPLICATE_TOKEN",
      },
      500
    );
  }

  try {
    const prediction = await getPredictionStatus(id);

    if (!prediction) {
      return jsonResponse(
        { error: "Prediction not found", code: "PREDICTION_NOT_FOUND" },
        404
      );
    }

    if (prediction.status === "succeeded") {
      return jsonResponse(
        {
          status: prediction.status,
          predictionId: id,
          outputUrl: prediction.outputUrl,
        },
        200
      );
    }

    if (prediction.status === "failed") {
      return jsonResponse(
        {
          status: prediction.status,
          predictionId: id,
          error: prediction.error ?? "Prediction failed",
        },
        200
      );
    }

    return jsonResponse(
      {
        status: prediction.status,
        predictionId: id,
      },
      200
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(`[redesign] Failed to fetch prediction ${id}: ${message}`);

    return jsonResponse(
      { error: "Failed to fetch prediction status", code: "PREDICTION_FETCH_FAILED" },
      500
    );
  }
}
