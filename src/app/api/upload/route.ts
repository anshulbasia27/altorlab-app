import { put } from "@vercel/blob";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "https://app.altorlab.org",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"] as const;
type AllowedType = (typeof ALLOWED_TYPES)[number];

const ALLOWED_MAGIC: Record<AllowedType, number[]> = {
  "image/jpeg": [0xff, 0xd8, 0xff],
  "image/png": [0x89, 0x50, 0x4e, 0x47],
  "image/webp": [0x52, 0x49, 0x46, 0x46], // RIFF header
};

function isAllowedType(type: string): type is AllowedType {
  return (ALLOWED_TYPES as readonly string[]).includes(type);
}

async function hasMagicBytes(file: File, mimeType: AllowedType): Promise<boolean> {
  const magic = ALLOWED_MAGIC[mimeType];
  const buffer = await file.slice(0, magic.length).arrayBuffer();
  const bytes = new Uint8Array(buffer);
  return magic.every((byte, i) => bytes[i] === byte);
}

function corsResponse(body: unknown, status: number): Response {
  return Response.json(body, { status, headers: CORS_HEADERS });
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function POST(req: Request): Promise<Response> {
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return corsResponse(
      { error: "Invalid form data", code: "INVALID_REQUEST" },
      400
    );
  }

  const file = formData.get("image");

  if (!file || !(file instanceof File)) {
    return corsResponse(
      { error: "No file provided", code: "MISSING_FILE" },
      400
    );
  }

  if (file.size > MAX_FILE_SIZE) {
    return corsResponse(
      { error: "File too large. Maximum size is 10MB", code: "FILE_TOO_LARGE" },
      413
    );
  }

  if (!isAllowedType(file.type)) {
    return corsResponse(
      { error: "Invalid file type. Only JPG, PNG, WebP allowed", code: "INVALID_TYPE" },
      415
    );
  }

  const magicBytesValid = await hasMagicBytes(file, file.type);
  if (!magicBytesValid) {
    return corsResponse(
      { error: "Invalid file type. Only JPG, PNG, WebP allowed", code: "INVALID_TYPE" },
      415
    );
  }

  const filename = `upload-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const blob = await put(filename, file, {
        access: "public",
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });

      return corsResponse(
        { url: blob.url, filename, size: file.size, type: file.type },
        200
      );
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      console.error(`[upload] Vercel Blob upload failed: ${message}`);
      return corsResponse(
        { error: "Failed to store file", code: "STORAGE_ERROR" },
        500
      );
    }
  }

  const arrayBuffer = await file.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString("base64");
  const dataUrl = `data:${file.type};base64,${base64}`;

  return corsResponse(
    { url: dataUrl, filename, size: file.size, type: file.type },
    200
  );
}
