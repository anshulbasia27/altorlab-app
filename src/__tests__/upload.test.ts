import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { POST, OPTIONS } from "@/app/api/upload/route";

vi.mock("@vercel/blob", () => ({
  put: vi.fn().mockResolvedValue({ url: "https://blob.vercel.com/test.jpg" }),
}));

function makeJpegFile(name = "photo.jpg", sizeBytes?: number): File {
  const magic = new Uint8Array([0xff, 0xd8, 0xff, 0xe0, 0x00, 0x10]);
  const padding = sizeBytes && sizeBytes > magic.length
    ? new Uint8Array(sizeBytes - magic.length)
    : new Uint8Array(0);
  return new File([magic, padding], name, { type: "image/jpeg" });
}

function makePngFile(name = "photo.png"): File {
  const magic = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a]);
  return new File([magic], name, { type: "image/png" });
}

function makeWebpFile(name = "photo.webp"): File {
  const magic = new Uint8Array([0x52, 0x49, 0x46, 0x46, 0x00, 0x00]);
  return new File([magic], name, { type: "image/webp" });
}

function makeRequest(file?: File): Request {
  const formData = new FormData();
  if (file) formData.append("image", file);
  return new Request("http://localhost/api/upload", {
    method: "POST",
    body: formData,
  });
}

describe("POST /api/upload", () => {
  beforeEach(() => {
    delete process.env.BLOB_READ_WRITE_TOKEN;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("returns 400 MISSING_FILE when no image field is provided", async () => {
    const req = makeRequest();
    const res = await POST(req);
    const body = await res.json();

    expect(res.status).toBe(400);
    expect(body.code).toBe("MISSING_FILE");
    expect(body.error).toBe("No file provided");
  });

  it("returns 413 FILE_TOO_LARGE when file exceeds 10MB", async () => {
    const file = makeJpegFile("big.jpg", 11 * 1024 * 1024);
    const req = makeRequest(file);
    const res = await POST(req);
    const body = await res.json();

    expect(res.status).toBe(413);
    expect(body.code).toBe("FILE_TOO_LARGE");
    expect(body.error).toMatch(/10MB/);
  });

  it("returns 415 INVALID_TYPE for unsupported MIME type", async () => {
    const file = new File([new Uint8Array([0x4d, 0x5a])], "virus.exe", {
      type: "application/octet-stream",
    });
    const req = makeRequest(file);
    const res = await POST(req);
    const body = await res.json();

    expect(res.status).toBe(415);
    expect(body.code).toBe("INVALID_TYPE");
  });

  it("returns 415 INVALID_TYPE when magic bytes mismatch declared MIME type", async () => {
    const pngBytes = new Uint8Array([0x89, 0x50, 0x4e, 0x47]);
    const spoofedFile = new File([pngBytes], "not-a-jpeg.jpg", {
      type: "image/jpeg",
    });
    const req = makeRequest(spoofedFile);
    const res = await POST(req);
    const body = await res.json();

    expect(res.status).toBe(415);
    expect(body.code).toBe("INVALID_TYPE");
  });

  it("returns 200 with base64 data URL for valid JPEG when no blob token", async () => {
    const file = makeJpegFile();
    const req = makeRequest(file);
    const res = await POST(req);
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.url).toMatch(/^data:image\/jpeg;base64,/);
    expect(body.filename).toMatch(/^upload-\d+-photo\.jpg$/);
    expect(body.size).toBeGreaterThan(0);
    expect(body.type).toBe("image/jpeg");
  });

  it("returns 200 with base64 data URL for valid PNG", async () => {
    const file = makePngFile();
    const req = makeRequest(file);
    const res = await POST(req);
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.url).toMatch(/^data:image\/png;base64,/);
    expect(body.type).toBe("image/png");
  });

  it("returns 200 with base64 data URL for valid WebP", async () => {
    const file = makeWebpFile();
    const req = makeRequest(file);
    const res = await POST(req);
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.url).toMatch(/^data:image\/webp;base64,/);
    expect(body.type).toBe("image/webp");
  });

  it("uses Vercel Blob when BLOB_READ_WRITE_TOKEN is set", async () => {
    const { put } = await import("@vercel/blob");
    process.env.BLOB_READ_WRITE_TOKEN = "test-token";

    const file = makeJpegFile();
    const req = makeRequest(file);
    const res = await POST(req);
    const body = await res.json();

    expect(res.status).toBe(200);
    expect(body.url).toBe("https://blob.vercel.com/test.jpg");
    expect(put).toHaveBeenCalledWith(
      expect.stringMatching(/^upload-\d+-photo\.jpg$/),
      file,
      { access: "public", token: "test-token" }
    );
  });

  it("sets CORS headers on all responses", async () => {
    const req = makeRequest();
    const res = await POST(req);

    expect(res.headers.get("Access-Control-Allow-Origin")).toBe(
      "https://app.altorlab.org"
    );
  });
});

describe("OPTIONS /api/upload", () => {
  it("returns 204 with CORS headers", async () => {
    const res = await OPTIONS();

    expect(res.status).toBe(204);
    expect(res.headers.get("Access-Control-Allow-Origin")).toBe(
      "https://app.altorlab.org"
    );
    expect(res.headers.get("Access-Control-Allow-Methods")).toContain("POST");
  });
});
