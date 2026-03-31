"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface AltorLabSession {
  predictionId: string;
  imageUrl: string;
  style: string;
  roomType: string;
  paymentId?: string;
  paidAt?: string;
}

const LOADING_MESSAGES = [
  "Preparing your redesign...",
  "AI is redesigning your room...",
  "Almost ready...",
];

export default function ResultPage() {
  const params = useParams();
  const paymentId = params.paymentId as string;

  const [session, setSession] = useState<AltorLabSession | null>(null);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loadingMsg, setLoadingMsg] = useState(LOADING_MESSAGES[0]);
  const [progressWidth, setProgressWidth] = useState(5);

  const abortControllerRef = useRef<AbortController | null>(null);

  const pollForRedesign = useCallback(async (predictionId: string, interval: ReturnType<typeof setInterval>) => {
    const maxAttempts = 30;
    let attempts = 0;
    const controller = abortControllerRef.current;

    const poll = async () => {
      if (controller?.signal.aborted) {
        clearInterval(interval);
        return;
      }
      attempts++;
      try {
        const res = await fetch(`/api/redesign/${predictionId}`, { signal: controller?.signal });
        if (res.ok) {
          const data = await res.json();

          if (data.status === "succeeded") {
            setOutputUrl(data.outputUrl);
            setStatus("success");
            clearInterval(interval);
            return;
          }

          if (data.status === "failed") {
            setErrorMsg(data.error || "Redesign failed. Please try again.");
            setStatus("error");
            clearInterval(interval);
            return;
          }
        }

        if (attempts >= maxAttempts) {
          clearInterval(interval);
          setStatus("error");
          setErrorMsg("Redesign timed out. Please try again.");
        } else {
          setTimeout(poll, 3000);
        }
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          clearInterval(interval);
          return;
        }
        if (attempts < maxAttempts) {
          setTimeout(poll, 3000);
        } else {
          clearInterval(interval);
          setStatus("error");
          setErrorMsg("Could not check redesign status. Please refresh the page.");
        }
      }
    };

    setTimeout(poll, 3000);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("altorlab_session");
    if (stored) {
      try {
        const data = JSON.parse(stored) as AltorLabSession;
        setSession(data);

        if (data.predictionId) {
          abortControllerRef.current?.abort();
          abortControllerRef.current = new AbortController();

          let msgIndex = 0;
          const interval = setInterval(() => {
            msgIndex = (msgIndex + 1) % LOADING_MESSAGES.length;
            setLoadingMsg(LOADING_MESSAGES[msgIndex]);
          }, 10000);

          pollForRedesign(data.predictionId, interval);

          return () => {
            clearInterval(interval);
            abortControllerRef.current?.abort();
          };
        } else {
          setStatus("error");
          setErrorMsg("No prediction ID found in session.");
        }
      } catch (e) {
        setStatus("error");
        setErrorMsg("Invalid session data.");
      }
    } else {
      setStatus("error");
      setErrorMsg("No session found. Please start a new redesign.");
    }
  }, [pollForRedesign]);

  useEffect(() => {
    if (status === "loading") {
      setProgressWidth(5);
      const timer = setInterval(() => {
        setProgressWidth((prev) => {
          if (prev >= 95) {
            clearInterval(timer);
            return 95;
          }
          return prev + (90 / 30);
        });
      }, 1000);
      return () => clearInterval(timer);
    } else if (status === "success") {
      setProgressWidth(100);
    }
  }, [status]);

  const handleDownload = async () => {
    if (!outputUrl || !session) return;
    try {
      const response = await fetch(outputUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `altorlab-room-redesign-${session.style.toLowerCase()}.jpg`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download image. Please try right-clicking and saving the image.");
    }
  };

  const shareText = encodeURIComponent("Just redesigned my room with AI on @AltorLab! 🏠✨ Try it at altorlab.org");
  const shareUrl = `https://twitter.com/intent/tweet?text=${shareText}`;

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <main className="max-w-5xl mx-auto px-4 py-12 sm:py-20">
        {status === "loading" && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-white border border-stone-200 rounded-2xl p-10 w-full max-w-md text-center shadow-sm">
              <div className="w-12 h-12 border-4 border-stone-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-6"></div>
              <h2 className="text-xl font-semibold mb-2 text-stone-900">
                {loadingMsg}
              </h2>
              <p className="text-stone-500 text-sm mb-6">
                This usually takes about 10-20 seconds.
              </p>
              <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-indigo-600 h-full rounded-full transition-all duration-1000 ease-linear"
                  style={{ width: `${progressWidth}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-10 w-full max-w-md text-center">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚠️
              </div>
              <h2 className="text-xl font-semibold mb-2 text-red-800">
                Something went wrong
              </h2>
              <p className="text-red-600 text-sm mb-6">
                {errorMsg}
              </p>
              <Link
                href="/room-redesign"
                className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-indigo-600 text-white font-medium transition-colors hover:bg-indigo-700"
              >
                Try Again
              </Link>
            </div>
          </div>
        )}

        {status === "success" && session && outputUrl && (
          <div className="animate-in fade-in duration-700">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full text-3xl mb-4">
                🎉
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-3">
                Your AI Room Redesign is Ready!
              </h1>
              <p className="text-lg text-stone-600">
                Here is your {session.roomType.toLowerCase()} in {session.style} style.
              </p>
            </div>

            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-stone-200 p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-stone-900">BEFORE</h3>
                    <span className="text-xs font-medium px-2 py-1 bg-stone-100 text-stone-600 rounded-md">
                      Original
                    </span>
                  </div>
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-stone-100 mt-auto">
                    <Image
                      src={session.imageUrl}
                      alt="Original room"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <p className="text-sm text-stone-500 mt-4 text-center">
                    Your room
                  </p>
                </div>

                <div className="w-full md:w-2/3 p-6 flex flex-col bg-stone-50/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-stone-900">AFTER</h3>
                    <span className="text-xs font-medium px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md">
                      {session.style} Style
                    </span>
                  </div>
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-stone-100 shadow-inner">
                    <Image
                      src={outputUrl}
                      alt="Redesigned room"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <p className="text-sm text-stone-500 mt-4 text-center">
                    AI-redesigned version
                  </p>
                </div>
              </div>

              <div className="p-6 border-t border-stone-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/room-redesign"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-2 order-2 sm:order-1"
                >
                  <span>←</span> Try Another Room
                </Link>
                
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto order-1 sm:order-2">
                  <a
                    href={shareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-stone-200 bg-white text-stone-900 font-medium transition-colors hover:bg-stone-50 w-full sm:w-auto"
                  >
                    <span>🐦</span> Share on Twitter
                  </a>
                  <button
                    type="button"
                    onClick={handleDownload}
                    className="flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-indigo-600 text-white font-medium transition-colors hover:bg-indigo-700 w-full sm:w-auto shadow-sm"
                  >
                    <span>⬇</span> Download Redesign
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-lg font-semibold text-stone-900 mb-4">
                Other AI tools coming soon
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/"
                  className="px-4 py-2 rounded-full border border-stone-200 text-sm text-stone-600 hover:border-stone-300 transition-colors"
                >
                  Explore AltorLab Hub
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
