export interface StyleSeoItem {
  slug: string;
  name: string;
  hindi: string;
  colors: string[];
  description: string;
}

export interface RoomSeoItem {
  slug: string;
  name: string;
  hindi: string;
  avgSize: string;
}

export const STYLES: StyleSeoItem[] = [
  {
    slug: "modern",
    name: "Modern",
    hindi: "मॉडर्न",
    colors: ["White", "Grey", "Black", "Chrome"],
    description: "Clean lines, neutral palette, functional furniture",
  },
  {
    slug: "scandinavian",
    name: "Scandinavian",
    hindi: "स्कैंडिनेवियन",
    colors: ["White", "Light Wood", "Soft Grey", "Pale Blue"],
    description: "Light, airy spaces with natural materials",
  },
  {
    slug: "minimalist",
    name: "Minimalist",
    hindi: "मिनिमलिस्ट",
    colors: ["White", "Beige", "Light Grey", "Natural"],
    description: "Less is more — essential furniture only",
  },
  {
    slug: "industrial",
    name: "Industrial",
    hindi: "इंडस्ट्रियल",
    colors: ["Dark Grey", "Brick Red", "Metal", "Raw Wood"],
    description: "Exposed materials, urban warehouse aesthetic",
  },
  {
    slug: "bohemian",
    name: "Bohemian",
    hindi: "बोहेमियन",
    colors: ["Terracotta", "Teal", "Mustard", "Sage Green"],
    description: "Eclectic, layered, colorful and textured",
  },
];

export const ROOMS: RoomSeoItem[] = [
  {
    slug: "bedroom",
    name: "Bedroom",
    hindi: "बेडरूम",
    avgSize: "120-150 sq ft (Indian 2BHK)",
  },
  {
    slug: "living-room",
    name: "Living Room",
    hindi: "लिविंग रूम",
    avgSize: "180-250 sq ft (Indian 2BHK)",
  },
  {
    slug: "kitchen",
    name: "Kitchen",
    hindi: "किचन",
    avgSize: "60-100 sq ft (Indian apartment)",
  },
  {
    slug: "bathroom",
    name: "Bathroom",
    hindi: "बाथरूम",
    avgSize: "35-50 sq ft (Indian standard)",
  },
  {
    slug: "home-office",
    name: "Home Office",
    hindi: "होम ऑफिस",
    avgSize: "80-120 sq ft",
  },
  {
    slug: "kids-room",
    name: "Kids Room",
    hindi: "किड्स रूम",
    avgSize: "100-130 sq ft (Indian 2BHK)",
  },
];

export function getStyleBySlug(slug: string): StyleSeoItem | null {
  return STYLES.find((style) => style.slug === slug) ?? null;
}

export function getRoomBySlug(slug: string): RoomSeoItem | null {
  return ROOMS.find((room) => room.slug === slug) ?? null;
}
