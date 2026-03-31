export interface SeoStyle {
  slug: string;
  name: string;
  label: string;
  secondaryHindiLabel: string;
  colors: string[];
  description: string;
  vibe: string;
  palette: string;
  materials: string;
  furniture: string;
  accent: string;
  lighting: string;
  storage: string;
  marketNote: string;
}

export interface SeoRoom {
  slug: string;
  name: string;
  label: string;
  secondaryHindiLabel: string;
  avgSize: string;
  dimensions: string;
  focalPoint: string;
  layout: string;
  furniture: string;
  styling: string;
  climate: string;
}

export const STYLES: SeoStyle[] = [
  {
    slug: "modern",
    name: "Modern",
    label: "Modern",
    secondaryHindiLabel: "मॉडर्न",
    colors: ["White", "Grey", "Black", "Chrome"],
    description: "clean, premium interiors with streamlined furniture and controlled contrast",
    vibe: "clean, airy, and intentionally uncluttered",
    palette: "warm whites, greige, soft taupe, charcoal, and muted black accents",
    materials: "matte laminates, oak veneer, glass, brushed metal, and large-format tiles",
    furniture: "low-profile silhouettes with straight lines, slim legs, and hidden storage",
    accent: "a single bold element like a ribbed panel headboard, statement pendant, or textured artwork",
    lighting: "layered cove lighting, wall washers, and warm 3000K task lights",
    storage: "flush wardrobes, floating consoles, and concealed drawers that keep visual noise low",
    marketNote:
      "works especially well in American homes with builder-grade finishes because matte textures and warm wood make everyday rooms feel calmer and more elevated",
  },
  {
    slug: "scandinavian",
    name: "Scandinavian",
    label: "Scandinavian",
    secondaryHindiLabel: "स्कैंडिनेवियन",
    colors: ["White", "Light Wood", "Soft Grey", "Pale Blue"],
    description: "bright, warm spaces with pale wood, soft textiles, and easy comfort",
    vibe: "bright, relaxed, and cosy without feeling heavy",
    palette: "off-white, pale beige, ash wood, muted sage, dusty blue, and soft terracotta",
    materials: "light oak, cane, boucle, linen, cotton, and matte ceramic finishes",
    furniture: "rounded furniture with simple joinery, tapered legs, and comfortable proportions",
    accent: "soft textiles, indoor plants, and handmade decor that add warmth without clutter",
    lighting: "diffused natural light, fabric shades, bedside sconces, and warm ambient pools",
    storage: "open-and-closed mixed storage with baskets, light wood cabinets, and bench seating",
    marketNote:
      "is ideal for compact American homes because light colours reflect available daylight and make smaller rooms look calmer and larger",
  },
  {
    slug: "minimalist",
    name: "Minimalist",
    label: "Minimalist",
    secondaryHindiLabel: "मिनिमलिस्ट",
    colors: ["White", "Beige", "Light Grey", "Natural"],
    description: "quiet rooms with less clutter, strong proportion, and tonal calm",
    vibe: "quiet, disciplined, and highly functional",
    palette: "ivory, sand, mushroom, stone grey, and tonal monochrome layers",
    materials: "micro-textured paint, natural wood, fluted panels, limewash, and brushed brass details",
    furniture: "essential pieces only, with crisp geometry and strong emphasis on proportion",
    accent: "one sculptural object, one premium fabric, or one statement light rather than many accessories",
    lighting: "precise recessed lighting, hidden LED strips, and focused bedside or desk lamps",
    storage: "full-height storage walls, under-bed drawers, and built-ins that disappear into the architecture",
    marketNote:
      "helps American families manage multi-use rooms by prioritising circulation, easy cleaning, and concealed storage over decorative excess",
  },
  {
    slug: "industrial",
    name: "Industrial",
    label: "Industrial",
    secondaryHindiLabel: "इंडस्ट्रियल",
    colors: ["Dark Grey", "Brick Red", "Metal", "Raw Wood"],
    description: "urban interiors with raw textures, metal accents, and dramatic contrast",
    vibe: "urban, textured, and slightly dramatic",
    palette: "charcoal, concrete grey, rust, tobacco brown, black, and weathered wood",
    materials: "distressed veneer, concrete textures, black metal, exposed grain wood, and leather",
    furniture: "heavier pieces with metal frames, visible joinery, and practical open shelving",
    accent: "factory-style pendants, brick-texture walls, or reclaimed wood furniture with patina",
    lighting: "warm Edison-style bulbs, spotlights over display zones, and focused task lighting",
    storage: "metal-and-wood shelves, sideboards with sliding shutters, and modular utility pieces",
    marketNote:
      "pairs well with loft-style apartments, row homes, and converted spaces where you want character without a full structural remodel",
  },
  {
    slug: "bohemian",
    name: "Bohemian",
    label: "Bohemian",
    secondaryHindiLabel: "बोहेमियन",
    colors: ["Terracotta", "Teal", "Mustard", "Sage Green"],
    description: "layered rooms full of craft, colour, plants, and relaxed personality",
    vibe: "layered, expressive, and full of personality",
    palette: "terracotta, clay, olive, mustard, plum, sand, and sun-washed neutrals",
    materials: "rattan, cane, jute, block-print cotton, aged wood, and handwoven textiles",
    furniture: "easy-going seating, mixed finishes, and flexible pieces that look collected over time",
    accent: "plants, patterned rugs, artisanal lamps, and globally inspired decor with story",
    lighting: "lantern-style pendants, warm fairy lights, fabric shades, and soft corner lamps",
    storage: "trunks, baskets, cane cabinets, and display-led storage that still feels curated",
    marketNote:
      "feels naturally at home in American interiors because it embraces craft, colour, layering, and handmade materials already familiar to local homes",
  },
];

export const ROOMS: SeoRoom[] = [
  {
    slug: "living-room",
    name: "Living Room",
    label: "Living Room",
    secondaryHindiLabel: "लिविंग रूम",
    avgSize: "180-300 sq ft (US apartment living room)",
    dimensions: "a typical US apartment living room of about 12x15 to 15x20 feet",
    focalPoint: "the sofa wall or media wall usually becomes the visual anchor",
    layout: "keep at least 30 to 36 inches of circulation around the coffee table and avoid blocking windows or balcony doors",
    furniture: "a sofa around 78 to 96 inches, one or two accent chairs, a compact coffee table, and a low media unit",
    styling: "layer curtains, a rug slightly larger than the seating zone, and one large artwork instead of many small frames",
    climate: "use durable fabrics and lighter colours if the room gets strong afternoon sun or faces a dusty street",
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    label: "Bedroom",
    secondaryHindiLabel: "बेडरूम",
    avgSize: "120-180 sq ft (US apartment bedroom)",
    dimensions: "most US apartment bedrooms between 11x12 and 12x15 feet",
    focalPoint: "the bed wall should lead the composition, usually with a headboard or wall treatment",
    layout: "maintain 24 to 30 inches on both sides of the bed where possible and keep closet doors easy to open without hitting side tables",
    furniture: "a queen bed at 60x80 inches, compact side tables, a dresser or reach-in closet, and a narrow bench if space allows",
    styling: "prioritise layered bedding, blackout curtains, and soft bedside lighting over excess decor",
    climate: "choose breathable fabrics, matte finishes, and closed storage to reduce dust and keep the room restful through hot summers",
  },
  {
    slug: "kitchen",
    name: "Kitchen",
    label: "Kitchen",
    secondaryHindiLabel: "किचन",
    avgSize: "70-150 sq ft (US apartment kitchen)",
    dimensions: "many US apartment kitchens fall in the 8x10 to 10x15 feet range",
    focalPoint: "the backsplash and upper cabinetry define the room more than loose decor",
    layout: "protect the work triangle between range, sink, and fridge, and reserve clear prep space near the cooking zone",
    furniture: "base cabinets at about 34 inches high, upper cabinets sized to the ceiling where possible, and tall pantry storage when space allows",
    styling: "use durable quartz or stone counters, easy-clean backsplash tile, and limited open shelves so daily cooking stays practical",
    climate: "steam, splatter, and heavy daily use make low-maintenance finishes far more valuable than delicate surfaces in American kitchens",
  },
  {
    slug: "bathroom",
    name: "Bathroom",
    label: "Bathroom",
    secondaryHindiLabel: "बाथरूम",
    avgSize: "40-70 sq ft (US apartment bathroom)",
    dimensions: "common US bathrooms range from 5x8 to 8x10 feet",
    focalPoint: "the vanity mirror zone usually creates the first impression in a compact bathroom",
    layout: "separate wet and dry areas visually, keep at least a small ledge near the shower, and allow the door swing to remain clear",
    furniture: "a floating vanity 24 to 36 inches wide, mirrored storage, recessed niches, and wall-mounted accessories",
    styling: "stick to two finish families at most, use slip-resistant flooring, and let lighting around the mirror do the heavy lifting",
    climate: "proper exhaust, stain-resistant grout, and moisture-friendly finishes matter more than trendy details in American bathrooms",
  },
  {
    slug: "home-office",
    name: "Home Office",
    label: "Home Office",
    secondaryHindiLabel: "होम ऑफिस",
    avgSize: "60-120 sq ft (US home office)",
    dimensions: "a spare corner, alcove, or room roughly 7x9 to 10x12 feet",
    focalPoint: "the desk backdrop matters because it affects both focus and video-call presence",
    layout: "keep natural light from the side when possible, maintain at least 36 inches behind the chair, and hide cable clutter",
    furniture: "a desk around 42 to 60 inches wide, an ergonomic chair, floating shelves, and one closed cabinet for documents and tech",
    styling: "blend work lighting with softer ambient light so the room can shift from productive to relaxed after office hours",
    climate: "heat buildup from devices is common in American homes, so ventilation, blinds, and lighter finishes make long work hours easier",
  },
  {
    slug: "kids-room",
    name: "Kids Room",
    label: "Kids Room",
    secondaryHindiLabel: "किड्स रूम",
    avgSize: "90-140 sq ft (US kids bedroom)",
    dimensions: "many US kids rooms are about 10x10 to 12x12 feet",
    focalPoint: "the bed and study wall usually define the room first",
    layout: "protect an open play or movement zone while keeping the study desk and storage easy to access",
    furniture: "a twin bed or bunk setup, study desk, dresser or closet, and child-friendly storage bins or cabinets",
    styling: "use washable fabrics, playful but controlled colours, and decor that can evolve as the child grows",
    climate: "easy-clean finishes and durable storage matter because kids rooms in American homes handle high daily use",
  },
];

export type StyleSlug = (typeof STYLES)[number]["slug"];
export type RoomSlug = (typeof ROOMS)[number]["slug"];

export function getStyleBySlug(slug: string): SeoStyle | undefined {
  return STYLES.find((style) => style.slug === slug);
}

export function getRoomBySlug(slug: string): SeoRoom | undefined {
  return ROOMS.find((room) => room.slug === slug);
}
