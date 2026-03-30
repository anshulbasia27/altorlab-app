export interface SeoStyle {
  slug: string;
  name: string;
  label: string;
  hindi: string;
  colors: string[];
  description: string;
  vibe: string;
  palette: string;
  materials: string;
  furniture: string;
  accent: string;
  lighting: string;
  storage: string;
  indiaNote: string;
}

export interface SeoRoom {
  slug: string;
  name: string;
  label: string;
  hindi: string;
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
    hindi: "मॉडर्न",
    colors: ["White", "Grey", "Black", "Chrome"],
    description: "clean, premium interiors with streamlined furniture and controlled contrast",
    vibe: "clean, airy, and intentionally uncluttered",
    palette: "warm whites, greige, soft taupe, charcoal, and muted black accents",
    materials: "matte laminates, oak veneer, glass, brushed metal, and large-format tiles",
    furniture: "low-profile silhouettes with straight lines, slim legs, and hidden storage",
    accent: "a single bold element like a ribbed panel headboard, statement pendant, or textured artwork",
    lighting: "layered cove lighting, wall washers, and warm 3000K task lights",
    storage: "flush wardrobes, floating consoles, and concealed drawers that keep visual noise low",
    indiaNote: "works especially well in Indian apartments with vitrified flooring because it softens shiny surfaces with matte textures and warm wood",
  },
  {
    slug: "scandinavian",
    name: "Scandinavian",
    label: "Scandinavian",
    hindi: "स्कैंडिनेवियन",
    colors: ["White", "Light Wood", "Soft Grey", "Pale Blue"],
    description: "bright, warm spaces with pale wood, soft textiles, and easy comfort",
    vibe: "bright, relaxed, and cosy without feeling heavy",
    palette: "off-white, pale beige, ash wood, muted sage, dusty blue, and soft terracotta",
    materials: "light oak, cane, boucle, linen, cotton, and matte ceramic finishes",
    furniture: "rounded furniture with simple joinery, tapered legs, and comfortable proportions",
    accent: "soft textiles, indoor plants, and handmade decor that add warmth without clutter",
    lighting: "diffused natural light, fabric shades, bedside sconces, and warm ambient pools",
    storage: "open-and-closed mixed storage with baskets, light wood cabinets, and bench seating",
    indiaNote: "is ideal for compact Indian homes because light colours reflect available daylight and make smaller rooms look calmer and larger",
  },
  {
    slug: "minimalist",
    name: "Minimalist",
    label: "Minimalist",
    hindi: "मिनिमलिस्ट",
    colors: ["White", "Beige", "Light Grey", "Natural"],
    description: "quiet rooms with less clutter, strong proportion, and tonal calm",
    vibe: "quiet, disciplined, and highly functional",
    palette: "ivory, sand, mushroom, stone grey, and tonal monochrome layers",
    materials: "micro-textured paint, natural wood, fluted panels, limewash, and brushed brass details",
    furniture: "essential pieces only, with crisp geometry and strong emphasis on proportion",
    accent: "one sculptural object, one premium fabric, or one statement light rather than many accessories",
    lighting: "precise recessed lighting, hidden LED strips, and focused bedside or desk lamps",
    storage: "full-height storage walls, under-bed drawers, and built-ins that disappear into the architecture",
    indiaNote: "helps Indian families manage multi-use rooms by prioritising circulation, easy cleaning, and concealed storage over decorative excess",
  },
  {
    slug: "industrial",
    name: "Industrial",
    label: "Industrial",
    hindi: "इंडस्ट्रियल",
    colors: ["Dark Grey", "Brick Red", "Metal", "Raw Wood"],
    description: "urban interiors with raw textures, metal accents, and dramatic contrast",
    vibe: "urban, textured, and slightly dramatic",
    palette: "charcoal, concrete grey, rust, tobacco brown, black, and weathered wood",
    materials: "distressed veneer, concrete textures, black metal, exposed grain wood, and leather",
    furniture: "heavier pieces with metal frames, visible joinery, and practical open shelving",
    accent: "factory-style pendants, brick-texture walls, or reclaimed wood furniture with patina",
    lighting: "warm Edison-style bulbs, spotlights over display zones, and focused task lighting",
    storage: "metal-and-wood shelves, sideboards with sliding shutters, and modular utility pieces",
    indiaNote: "pairs well with loft-style apartments or builder floors where you want character without expensive civil changes",
  },
  {
    slug: "bohemian",
    name: "Bohemian",
    label: "Bohemian",
    hindi: "बोहेमियन",
    colors: ["Terracotta", "Teal", "Mustard", "Sage Green"],
    description: "layered rooms full of craft, colour, plants, and relaxed personality",
    vibe: "layered, expressive, and full of personality",
    palette: "terracotta, clay, olive, mustard, plum, sand, and sun-washed neutrals",
    materials: "rattan, cane, jute, block-print cotton, aged wood, and handwoven textiles",
    furniture: "easy-going seating, mixed finishes, and flexible pieces that look collected over time",
    accent: "plants, patterned rugs, artisanal lamps, and globally inspired decor with story",
    lighting: "lantern-style pendants, warm fairy lights, fabric shades, and soft corner lamps",
    storage: "trunks, baskets, cane cabinets, and display-led storage that still feels curated",
    indiaNote: "feels naturally at home in Indian interiors because it embraces craft, colour, layering, and handmade materials already familiar to local homes",
  },
];

export const ROOMS: SeoRoom[] = [
  {
    slug: "living-room",
    name: "Living Room",
    label: "Living Room",
    hindi: "लिविंग रूम",
    avgSize: "10x14 to 12x16 ft",
    dimensions: "a typical Indian apartment living room of about 10x14 to 12x16 feet",
    focalPoint: "the sofa wall or TV wall usually becomes the visual anchor",
    layout: "keep at least 30 to 36 inches of circulation around the centre table and avoid blocking balcony access",
    furniture: "a 3-seater around 72 to 84 inches, two compact accent chairs, a nesting centre table, and a slim media unit",
    styling: "layer curtains, a rug slightly larger than the centre table zone, and one large artwork instead of many small frames",
    climate: "use washable fabrics and lighter colours if the room receives strong west-facing heat or dust from an open balcony",
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    label: "Bedroom",
    hindi: "बेडरूम",
    avgSize: "10x12 to 11x14 ft",
    dimensions: "most Indian bedrooms between 10x12 and 11x14 feet",
    focalPoint: "the bed wall should lead the composition, usually with a headboard or wall treatment",
    layout: "maintain 24 to 30 inches on both sides of the bed where possible and keep wardrobes easy to open without hitting side tables",
    furniture: "a queen bed at 60x78 inches, compact side tables, a 2-door or 3-door wardrobe, and a narrow bench if space allows",
    styling: "prioritise layered bedding, blackout-plus-sheer curtains, and soft bedside lighting over excess decor",
    climate: "choose breathable fabrics, matte finishes, and closed storage to reduce dust and keep the room restful through Indian summers",
  },
  {
    slug: "kitchen",
    name: "Kitchen",
    label: "Kitchen",
    hindi: "किचन",
    avgSize: "7x10 to 8x12 ft",
    dimensions: "many Indian kitchens fall in the 7x10 to 8x12 feet range",
    focalPoint: "the backsplash and overhead cabinetry define the room more than loose decor",
    layout: "protect the work triangle between hob, sink, and fridge, and reserve clear prep space near the stove",
    furniture: "base cabinets at about 34 inches height, wall cabinets up to ceiling level, and tall pantry storage where feasible",
    styling: "use durable quartz or granite counters, easy-clean dado tiles, and limited open shelves so daily cooking stays practical",
    climate: "humidity, masalas, and oil splatter make low-maintenance finishes far more valuable than delicate surfaces in Indian kitchens",
  },
  {
    slug: "bathroom",
    name: "Bathroom",
    label: "Bathroom",
    hindi: "बाथरूम",
    avgSize: "5x7 to 6x8 ft",
    dimensions: "common Indian bathrooms range from 5x7 to 6x8 feet",
    focalPoint: "the vanity mirror zone usually creates the first impression in a compact bathroom",
    layout: "separate wet and dry areas visually, keep at least a small ledge near the shower, and allow the door swing to remain clear",
    furniture: "a floating vanity 24 to 30 inches wide, mirrored storage, recessed niches, and wall-mounted accessories",
    styling: "stick to two finish families at most, use anti-skid flooring, and let lighting around the mirror do the heavy lifting",
    climate: "proper exhaust, stain-resistant grout, and moisture-friendly finishes matter more than trendy details in Indian bathrooms",
  },
  {
    slug: "home-office",
    name: "Home Office",
    label: "Home Office",
    hindi: "होम ऑफिस",
    avgSize: "6x8 to 8x10 ft",
    dimensions: "a spare corner, alcove, or room roughly 6x8 to 8x10 feet",
    focalPoint: "the desk backdrop matters because it affects both focus and video-call presence",
    layout: "keep natural light from the side when possible, maintain at least 36 inches behind the chair, and hide cable clutter",
    furniture: "a desk around 42 to 54 inches wide, ergonomic chair, floating shelves, and one closed cabinet for documents and tech",
    styling: "blend work lighting with softer ambient light so the room can shift from productive to relaxed after office hours",
    climate: "heat buildup from devices is common in Indian homes, so ventilation, blinds, and lighter finishes make long work hours easier",
  },
  {
    slug: "kids-room",
    name: "Kids Room",
    label: "Kids Room",
    hindi: "किड्स रूम",
    avgSize: "9x10 to 11x12 ft",
    dimensions: "many Indian kids rooms are about 9x10 to 11x12 feet",
    focalPoint: "the bed and study wall usually define the room first",
    layout: "protect an open play or movement zone while keeping the study desk and storage easy to access",
    furniture: "a single bed or bunk setup, study desk, wardrobe, and child-friendly storage bins or cabinets",
    styling: "use washable fabrics, playful but controlled colours, and decor that can evolve as the child grows",
    climate: "easy-clean finishes and durable storage matter because kids rooms in Indian homes handle high daily use",
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
