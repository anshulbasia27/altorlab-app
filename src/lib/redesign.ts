import Replicate from "replicate";

export const SUPPORTED_STYLES = [
  "modern",
  "scandinavian",
  "minimalist",
  "industrial",
  "bohemian",
] as const;

export const SUPPORTED_ROOM_TYPES = [
  "living_room",
  "bedroom",
  "kitchen",
  "bathroom",
  "home_office",
] as const;

export type RedesignStyle = (typeof SUPPORTED_STYLES)[number];
export type RoomType = (typeof SUPPORTED_ROOM_TYPES)[number];
export type RedesignStatus = "starting" | "processing" | "succeeded" | "failed";

type PredictionRecord = {
  status: RedesignStatus;
  startedAt: number;
  outputUrl?: string;
  error?: string;
};

type ReplicatePrediction = {
  id: string;
  status?: string | null;
  output?: unknown;
  error?: string | null;
};

export const STYLE_PROMPTS: Record<RedesignStyle, string> = {
  modern: "modern interior design, clean lines, neutral colors, contemporary furniture",
  scandinavian: "scandinavian interior design, minimalist, light wood, white walls, cozy",
  minimalist: "minimalist interior design, simple, uncluttered, monochromatic, zen",
  industrial: "industrial interior design, exposed brick, metal accents, dark tones",
  bohemian: "bohemian interior design, eclectic, colorful, plants, layered textiles",
};

export const ROOM_LABELS: Record<RoomType, string> = {
  living_room: "living room",
  bedroom: "bedroom",
  kitchen: "kitchen",
  bathroom: "bathroom",
  home_office: "home office",
};

export const SDXL_MODEL_VERSION =
  "7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc";
export const REDESIGN_TIMEOUT_MS = 60_000;

const IN_PROGRESS_STATUSES = new Set<RedesignStatus>(["starting", "processing"]);

const predictions = new Map<string, PredictionRecord>();

export function isValidStyle(style: string): style is RedesignStyle {
  return (SUPPORTED_STYLES as readonly string[]).includes(style);
}

export function isValidRoomType(roomType: string): roomType is RoomType {
  return (SUPPORTED_ROOM_TYPES as readonly string[]).includes(roomType);
}

export function buildPrompt(style: RedesignStyle, roomType: RoomType): string {
  return `A photo of a ${STYLE_PROMPTS[style]} ${ROOM_LABELS[roomType]}, professional interior photography, high quality, realistic, preserve room layout and architecture`;
}

export function isPredictionTracked(predictionId: string): boolean {
  return predictions.has(predictionId);
}

export function hasReplicateToken(): boolean {
  return Boolean(process.env.REPLICATE_API_TOKEN);
}

export async function startPrediction(params: {
  imageUrl: string;
  style: RedesignStyle;
  roomType: RoomType;
}): Promise<string> {
  const replicate = createReplicateClient();
  const prediction = (await replicate.predictions.create({
    version: SDXL_MODEL_VERSION,
    input: {
      image: params.imageUrl,
      prompt: buildPrompt(params.style, params.roomType),
      prompt_strength: 0.8,
      negative_prompt: "ugly, blurry, low quality, distorted, deformed",
      num_inference_steps: 30,
      guidance_scale: 7.5,
    },
  })) as ReplicatePrediction;

  predictions.set(prediction.id, {
    status: normalizeStatus(prediction.status),
    startedAt: Date.now(),
  });

  return prediction.id;
}

export async function getPredictionStatus(
  predictionId: string
): Promise<PredictionRecord | null> {
  const current = predictions.get(predictionId);

  if (!current) {
    return null;
  }

  if (!IN_PROGRESS_STATUSES.has(current.status)) {
    return current;
  }

  if (Date.now() - current.startedAt > REDESIGN_TIMEOUT_MS) {
    const timedOut = {
      ...current,
      status: "failed" as const,
      error: "Prediction timed out after 60 seconds",
    };

    predictions.set(predictionId, timedOut);
    return timedOut;
  }

  const replicate = createReplicateClient();
  const prediction = (await replicate.predictions.get(predictionId)) as ReplicatePrediction;
  const nextStatus = normalizeStatus(prediction.status);

  if (nextStatus === "succeeded") {
    const outputUrl = extractOutputUrl(prediction.output);

    if (!outputUrl) {
      const missingOutput = {
        ...current,
        status: "failed" as const,
        error: "Prediction completed without an output URL",
      };

      predictions.set(predictionId, missingOutput);
      return missingOutput;
    }

    const succeeded = {
      ...current,
      status: "succeeded" as const,
      outputUrl,
      error: undefined,
    };

    predictions.set(predictionId, succeeded);
    return succeeded;
  }

  if (nextStatus === "failed") {
    const failed = {
      ...current,
      status: "failed" as const,
      error: prediction.error ?? "Prediction failed",
    };

    predictions.set(predictionId, failed);
    return failed;
  }

  const inProgress = {
    ...current,
    status: nextStatus,
  };

  predictions.set(predictionId, inProgress);
  return inProgress;
}

export function resetPredictionStore(): void {
  predictions.clear();
}

export function setPredictionRecordForTest(
  predictionId: string,
  record: PredictionRecord
): void {
  predictions.set(predictionId, record);
}

function createReplicateClient(): Replicate {
  return new Replicate({ auth: process.env.REPLICATE_API_TOKEN ?? "" });
}

function normalizeStatus(status: string | null | undefined): RedesignStatus {
  if (status === "processing") {
    return "processing";
  }

  if (status === "succeeded") {
    return "succeeded";
  }

  if (status === "failed" || status === "canceled") {
    return "failed";
  }

  return "starting";
}

function extractOutputUrl(output: unknown): string | undefined {
  if (typeof output === "string") {
    return output;
  }

  if (!Array.isArray(output)) {
    return undefined;
  }

  return output.find((item): item is string => typeof item === "string");
}
