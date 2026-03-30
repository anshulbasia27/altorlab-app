"use client";

import { useState } from "react";
import RoomUpload from "@/components/RoomUpload";
import StyleSelector, { RoomStyle } from "@/components/StyleSelector";
import RoomTypeSelector, { RoomType } from "@/components/RoomTypeSelector";
import PaymentCTA from "@/components/PaymentCTA";

export default function RoomRedesignPage() {
  const [file, setFile] = useState<File | null>(null);
  const [style, setStyle] = useState<RoomStyle>("modern");
  const [roomType, setRoomType] = useState<RoomType>("living room");
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Redesign Your Room with AI
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Upload a photo of your room, choose a style, and let our AI generate a stunning new interior design in seconds.
          </p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm">
          <div className="space-y-10">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h2 className="text-xl font-semibold text-white">Upload Photo</h2>
              </div>
              <RoomUpload onFileSelect={setFile} selectedFile={file} />
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h2 className="text-xl font-semibold text-white">Room Details</h2>
              </div>
              <RoomTypeSelector selectedType={roomType} onSelect={setRoomType} />
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h2 className="text-xl font-semibold text-white">Choose Style</h2>
              </div>
              <StyleSelector selectedStyle={style} onSelect={setStyle} />
            </section>

            <section className="pt-6 border-t border-slate-700">
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Where should we send your receipt? (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                />
              </div>

              <PaymentCTA file={file} style={style} roomType={roomType} email={email} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
