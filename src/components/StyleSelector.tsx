"use client";

import { trackStyleSelect } from "@/lib/tracking";

export type RoomStyle = "modern" | "scandinavian" | "minimalist" | "industrial" | "bohemian";

interface StyleSelectorProps {
  selectedStyle: RoomStyle;
  onSelect: (style: RoomStyle) => void;
}

const styles: { id: RoomStyle; name: string; gradient: string }[] = [
  {
    id: "modern",
    name: "Modern",
    gradient: "bg-gradient-to-br from-gray-100 to-gray-300",
  },
  {
    id: "scandinavian",
    name: "Scandinavian",
    gradient: "bg-gradient-to-br from-amber-50 to-stone-200",
  },
  {
    id: "minimalist",
    name: "Minimalist",
    gradient: "bg-gradient-to-br from-white to-gray-100",
  },
  {
    id: "industrial",
    name: "Industrial",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
  },
  {
    id: "bohemian",
    name: "Bohemian",
    gradient: "bg-gradient-to-br from-orange-200 to-rose-300",
  },
];

export default function StyleSelector({ selectedStyle, onSelect }: StyleSelectorProps) {
  return (
    <div className="w-full">
      <h3 className="text-lg font-medium text-stone-900 mb-4">Select a Style</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {styles.map((style) => (
           <button
             key={style.id}
             type="button"
             onClick={() => {
               trackStyleSelect(style.id);
               onSelect(style.id);
             }}
            className={`relative flex flex-col items-center justify-center p-4 min-h-[44px] rounded-xl border transition-all duration-200 overflow-hidden ${
              selectedStyle === style.id
                ? "border-indigo-500 ring-2 ring-indigo-500 ring-offset-2 ring-offset-white bg-indigo-50/50"
                : "border-stone-200 hover:border-indigo-400 bg-white hover:bg-stone-50"
            }`}
          >
            <div className={`w-full h-24 rounded-lg mb-3 ${style.gradient} shadow-inner`} />
            <span className={`font-medium ${selectedStyle === style.id ? "text-indigo-700" : "text-stone-600"}`}>
              {style.name}
            </span>
            {selectedStyle === style.id && (
              <div className="absolute top-2 right-2 bg-indigo-600 text-white rounded-full p-1 shadow-sm">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
