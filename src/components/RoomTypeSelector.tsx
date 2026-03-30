"use client";

export type RoomType = "living room" | "bedroom" | "kitchen" | "bathroom" | "home office";

interface RoomTypeSelectorProps {
  selectedType: RoomType;
  onSelect: (type: RoomType) => void;
}

const roomTypes: { id: RoomType; name: string; icon: React.ReactNode }[] = [
  {
    id: "living room",
    name: "Living Room",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    id: "bedroom",
    name: "Bedroom",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: "kitchen",
    name: "Kitchen",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: "bathroom",
    name: "Bathroom",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "home office",
    name: "Home Office",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function RoomTypeSelector({ selectedType, onSelect }: RoomTypeSelectorProps) {
  return (
    <div className="w-full">
      <h3 className="text-lg font-medium text-slate-200 mb-4">Room Type</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {roomTypes.map((type) => (
          <button
            key={type.id}
            type="button"
            onClick={() => onSelect(type.id)}
            className={`flex items-center gap-3 p-3 min-h-[44px] rounded-xl border transition-all duration-200 ${
              selectedType === type.id
                ? "border-indigo-500 bg-indigo-500/10 text-indigo-400"
                : "border-slate-700 bg-slate-800/50 text-slate-300 hover:border-indigo-400 hover:bg-slate-800"
            }`}
          >
            <div className={`${selectedType === type.id ? "text-indigo-400" : "text-slate-400"}`}>
              {type.icon}
            </div>
            <span className="font-medium text-sm">{type.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
