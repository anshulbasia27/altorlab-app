import {
  hasReplicateToken,
  isValidRoomType,
  isValidStyle,
  SUPPORTED_ROOM_TYPES,
  SUPPORTED_STYLES,
  startPrediction,
} from "@/lib/redesign";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "https://app.altorlab.org",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

type RedesignRequest = {
  imageUrl?: unknown;
  style?: unknown;
  roomType?: unknown;
};

function jsonResponse(body: unknown, status: number): Response {
  return Response.json(body, { status, headers: CORS_HEADERS });
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function POST(req: Request): Promise<Response> {
  let body: RedesignRequest;

  try {
    body = (await req.json()) as RedesignRequest;
  } catch {
    return jsonResponse(
      { error: "Invalid JSON body", code: "INVALID_REQUEST" },
      400
    );
  }

  if (typeof body.imageUrl !== "string" || body.imageUrl.trim().length === 0) {
    return jsonResponse(
      { error: "imageUrl is required", code: "MISSING_IMAGE_URL" },
      400
    );
  }

  if (typeof body.style !== "string" || !isValidStyle(body.style)) {
    return jsonResponse(
      {
        error: `Invalid style. Must be one of: ${SUPPORTED_STYLES.join(", ")}`,
        code: "INVALID_STYLE",
      },
      400
    );
  }

  if (typeof body.roomType !== "string" || !isValidRoomType(body.roomType)) {
    return jsonResponse(
      {
        error: `Invalid room type. Must be one of: ${SUPPORTED_ROOM_TYPES.join(", ")}`,
        code: "INVALID_ROOM_TYPE",
      },
      400
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
    const predictionId = await startPrediction({
      imageUrl: body.imageUrl,
      style: body.style,
      roomType: body.roomType,
    });

    return jsonResponse({ predictionId, status: "starting" }, 202);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(`[redesign] Failed to start prediction: ${message}`);

    return jsonResponse(
      { error: "Failed to start room redesign", code: "PREDICTION_START_FAILED" },
      500
    );
  }
}
