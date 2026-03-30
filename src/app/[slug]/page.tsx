import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildFaqJsonLd } from "@/lib/geo";

const STYLES = [
  "modern",
  "scandinavian",
  "minimalist",
  "industrial",
  "bohemian",
] as const;

const ROOMS = [
  "living-room",
  "bedroom",
  "kitchen",
  "bathroom",
  "home-office",
] as const;

type Style = (typeof STYLES)[number];
type Room = (typeof ROOMS)[number];

interface StyleData {
  adjective: string;
  tagline: string;
  intro: string;
  whatIs: string;
  keyElements: string[];
  aiSteps: [string, string, string];
  ideas: string[];
  faqs: Array<{ q: string; a: string }>;
}

interface RoomData {
  label: string;
  intro: string;
  context: string;
  benefit: string;
}

const STYLE_DATA: Record<Style, StyleData> = {
  modern: {
    adjective: "Modern",
    tagline: "sleek sophistication through clean lines and functional beauty",
    intro:
      "Modern design strips away the superfluous and celebrates intentionality. Every piece of furniture serves a purpose; every surface is clean. If you crave order, breathing room, and a timeless aesthetic that never feels dated, modern is the language your space should speak.",
    whatIs:
      "Modern interior design emerged from the early 20th-century Modernist movement and is defined by a strict adherence to function over ornament. Neutral palettes — whites, warm grays, charcoal, and earthy beiges — dominate the color story. Furniture silhouettes are low, horizontal, and geometric, often elevated on tapered legs to create a sense of airiness. Materials like polished concrete, brushed steel, tempered glass, and smooth hardwood appear throughout. Clutter is the enemy: storage is integrated and hidden, and every decorative object earns its place. The result is a room that feels calm, purposeful, and endlessly photogenic.",
    keyElements: [
      "Clean geometric lines — no curves, no fussy moldings",
      "Neutral palette anchored by white, gray, and black with one warm accent tone",
      "Furniture with low profiles and minimalist silhouettes",
      "Statement lighting — recessed fixtures, pendant clusters, or a single sculptural floor lamp",
      "Natural materials: polished concrete, brushed steel, smooth hardwood, and tempered glass",
    ],
    aiSteps: [
      "Upload a clear photo of your existing room — our AI analyzes the architecture, natural light, and spatial proportions.",
      "Select the Modern style. The AI instantly maps clean geometric furniture, a neutral color palette, and layered lighting onto your actual room layout.",
      "Download your AI-redesigned preview and use it as a blueprint — share with a contractor, shop the looks, or simply enjoy the inspiration.",
    ],
    ideas: [
      "Swap out ornate frames and busy textiles for gallery-white walls and a single oversized abstract print in charcoal and cream.",
      "Replace a cluttered media console with a floating walnut shelf and hidden cable management for a sleek, magazine-worthy entertainment wall.",
      "Layer three neutral rugs — a large jute base, a gray wool mid-layer, and a small geometric accent — to add depth without visual noise.",
      "Introduce a single bold accent: a deep-navy sofa or burnt-orange armchair against an all-white backdrop for a modern pop of personality.",
    ],
    faqs: [
      {
        q: "Is modern design the same as contemporary design?",
        a: "Not quite. Modern design refers specifically to the mid-20th-century Modernist movement — think clean lines, Bauhaus influences, and form-follows-function philosophy. Contemporary design simply means what's fashionable right now and shifts over time. Modern is a fixed style; contemporary is a moving target.",
      },
      {
        q: "How do I add warmth to a modern room without losing the aesthetic?",
        a: "Layer in organic textures: a chunky wool throw, a live-edge wood coffee table, linen cushions, or a woven jute rug. Introduce warm-white (2700K–3000K) bulbs instead of cool white. These additions soften the look while keeping the clean geometric lines intact.",
      },
      {
        q: "Can modern design work in a small room?",
        a: "Absolutely — and it often excels there. The emphasis on minimal clutter, hidden storage, and light colors makes small rooms feel significantly larger. Choosing furniture with exposed legs and using mirrors strategically amplifies the effect.",
      },
    ],
  },

  scandinavian: {
    adjective: "Scandinavian",
    tagline: "hygge-inspired warmth, natural materials, and effortless simplicity",
    intro:
      "Scandinavian design is the art of making a room feel like a warm hug on a cold winter morning. Rooted in the Nordic concept of hygge — coziness, contentment, and quiet joy — it pairs light-washed woods, creamy whites, and soft textiles into spaces that feel both beautiful and deeply lived-in.",
    whatIs:
      "Scandinavian interior design originated in the Nordic countries of Denmark, Norway, Sweden, Finland, and Iceland. Long, dark winters drove a cultural obsession with maximizing natural light and creating cozy interiors. Pale birch, ash, and pine dominate furniture choices. Walls are typically white or very pale gray to bounce light. Textiles are generous — thick wool blankets, sheepskin throws, linen curtains, and chunky-knit cushions layer comfort upon comfort. Plants bring life indoors, compensating for the short outdoor seasons. The philosophy is functional simplicity: beautiful objects that also serve a purpose, bought once and kept for life.",
    keyElements: [
      "Light-toned woods — birch, ash, or pine — in natural or whitewashed finishes",
      "White or pale gray walls to maximize light reflection",
      "Generous textiles: wool throws, linen cushions, sheepskin rugs, and cotton curtains",
      "Indoor plants — fiddle-leaf figs, pothos, and hanging planters for organic vitality",
      "Simple, functional furniture with rounded edges and no superfluous decoration",
    ],
    aiSteps: [
      "Photograph your room in natural daylight — the AI reads the existing light quality, window positions, and spatial flow.",
      "Choose the Scandinavian style. The AI replaces furniture with pale-wood pieces, adds textural layers, introduces greenery, and brightens the palette to near-white.",
      "Review your AI preview, zoom in on material details, and take it shopping — most Scandinavian-style pieces are widely available and budget-friendly.",
    ],
    ideas: [
      "Paint the walls in a pure warm white (avoid cool blue-whites) and let natural wood floors or a pale oak rug become the room's tonal anchor.",
      "Create a dedicated hygge corner: an armchair draped with a chunky wool throw, a small side table, a candle, and a floor lamp with a warm-toned bulb.",
      "Display simple ceramics in muted clay tones on open shelving — odd-numbered groupings with a trailing plant feel naturally Scandinavian.",
      "Use sheer linen curtains instead of blinds to diffuse light softly across the room throughout the day.",
    ],
    faqs: [
      {
        q: "What is hygge and how does it apply to interior design?",
        a: "Hygge (pronounced HOO-gah) is a Danish-Norwegian concept that describes a quality of coziness, comfort, and convivial well-being. In design it translates to soft lighting, warm textiles, natural materials, and spaces that invite you to slow down — candles over harsh overhead lights, thick rugs over bare floors, and clutter-free surfaces over maximalist shelves.",
      },
      {
        q: "What colours go with Scandinavian design?",
        a: "The core palette is white, off-white, and pale gray as a base, with accents in dusty sage green, muted terracotta, soft blush, pale blue, and warm caramel. The key is to keep tones muted and earthy — never saturated or primary.",
      },
      {
        q: "Is Scandinavian the same as minimalist design?",
        a: "They overlap but differ. Minimalism is stark — it removes almost everything. Scandinavian keeps things simple but layers in warmth: textiles, plants, candles, and cherished personal objects. A Scandinavian room feels curated and cozy; a purely minimalist room can feel cold.",
      },
    ],
  },

  minimalist: {
    adjective: "Minimalist",
    tagline: "the art of less — where every object earns its place",
    intro:
      'Minimalist design is a commitment to intentionality. It asks a simple but profound question of every object in a room: "Does this need to be here?" What remains after that ruthless edit is a space of extraordinary calm — a visual exhale in a world drowning in stuff.',
    whatIs:
      "Minimalism as a design movement emerged in the 1960s, influenced by Japanese wabi-sabi philosophy and the De Stijl and Bauhaus schools. It takes the principles of modern design and pushes them further: fewer objects, more negative space, stricter colour control, and a near-obsessive attention to material quality. Minimalist rooms are typically monochromatic — a single hue across walls, floor, and furniture in varying shades and textures. Storage is not just hidden but eliminated where possible, forcing a lifestyle edit before the aesthetic can succeed. Lighting is precise: directional spots, a single elegant pendant, or a sculptural floor lamp. The effect is meditative, almost gallery-like.",
    keyElements: [
      "Monochromatic colour palette — one hue in multiple shades and textures",
      "Maximum negative space — furniture is sparse and deliberately positioned",
      "Hidden or eliminated storage to force a true lifestyle edit",
      "Precision lighting: directional spots, a single pendant, or an arc floor lamp",
      "Premium materials in small quantities: marble, aged brass, handmade ceramics",
    ],
    aiSteps: [
      "Take a wide-angle photo of your room so the AI can map out every surface, corner, and piece of furniture currently occupying the space.",
      "Select Minimalist. The AI digitally removes non-essential objects, replaces cluttered furniture with pared-back equivalents, and harmonises the colour palette into a single tonal family.",
      "Use the AI render to plan your real edit — identify exactly what to remove, what to replace, and what single statement piece to invest in.",
    ],
    ideas: [
      "Choose one wall colour and repeat it on the ceiling and skirting boards for a seamless, envelope-like effect that dissolves room boundaries.",
      "Replace open bookshelves with flush-fronted cabinetry in the same colour as the walls — the room immediately feels twice as large.",
      "Invest in one premium piece — a marble side table, a hand-thrown ceramic vase, or a cashmere throw — and let it be the room's sole decorative statement.",
      "Remove every item from your coffee table and replace it with one object: a single art book, a candle, or a small sculptural bowl.",
    ],
    faqs: [
      {
        q: "How do I make a minimalist room feel warm and not cold?",
        a: "Warmth in minimalism comes from material choice and light temperature. Use warm-toned neutrals (cream, sand, warm taupe) instead of cool grays and whites. Introduce natural wood, linen, and aged brass. Set lighting to 2700K–3000K colour temperature. A single well-chosen rug ties the room together without visual noise.",
      },
      {
        q: "Can families with children achieve a minimalist aesthetic?",
        a: "Yes, with the right storage strategy. Built-in cabinetry, furniture with integrated drawers, and disciplined toy rotation systems make minimalism liveable for families. The key is that clutter has a home and returns to it — minimalism is a habit as much as an aesthetic.",
      },
      {
        q: "What is the difference between minimalism and bare/empty rooms?",
        a: "Minimalism is intentional — every remaining object is chosen deliberately for its quality, beauty, or function. An empty room is accidental or incomplete. A well-executed minimalist room is rich in material quality and spatial drama; it just contains fewer objects than a conventional room.",
      },
    ],
  },

  industrial: {
    adjective: "Industrial",
    tagline: "raw character and urban grit transformed into sophisticated living spaces",
    intro:
      "Industrial design celebrates the beauty of the unfinished — the texture of exposed brick, the cool weight of steel, the warm patina of reclaimed timber. Born in converted factories and urban lofts, it transforms raw building materials from background noise into the starring cast of a deeply characterful room.",
    whatIs:
      "Industrial interior design emerged from the loft conversions of New York and London in the 1970s–80s, when artists began inhabiting abandoned factory and warehouse spaces. Rather than hiding structural elements, they celebrated them: exposed brick walls, bare concrete ceilings, steel I-beams, and ductwork became design features. The palette is deliberately muted — charcoals, blacks, raw umbers, and aged steels — punctuated by warm pools of Edison-bulb light. Furniture mixes function with character: reclaimed wood dining tables, leather Chesterfields, wire-frame chairs, and industrial shelving. The overall effect is effortlessly cool, deeply textured, and full of the kind of authentic character that brand-new showroom pieces can never replicate.",
    keyElements: [
      "Exposed structural elements: brick, concrete, timber beams, and steel columns",
      "Dark, muted palette — charcoal, black, raw umber, and aged metal tones",
      "Edison-bulb pendant clusters and industrial-cage wall sconces",
      "Reclaimed wood and distressed leather furniture with visible wear",
      "Open shelving in black steel with raw-wood shelves for functional display",
    ],
    aiSteps: [
      "Photograph your room including walls, ceiling, and any structural details — the AI uses every surface when reimagining the industrial aesthetic.",
      "Select Industrial style. The AI digitally reveals brick and concrete textures, ages surfaces, introduces steel-framed furniture and Edison lighting, and darkens the overall palette.",
      "Download the render and use it to prioritise real-world changes — which wall to strip back, which light fittings to source, and which furniture to replace first.",
    ],
    ideas: [
      "Install black steel pipe shelving against a white-painted brick or textured plaster wall for the quintessential industrial storage moment.",
      "Replace standard ceiling pendants with a cluster of Edison-bulb cage lights hung at varying heights over a dining table or kitchen island.",
      "Introduce a reclaimed oak herringbone floor or a faux-concrete floor treatment to anchor the industrial palette underfoot.",
      "Mix a battered leather Chesterfield sofa with a hairpin-leg coffee table and wire-frame accent chairs for that classic loft-living contrast.",
    ],
    faqs: [
      {
        q: "Can industrial design work in a modern apartment without real exposed brick?",
        a: "Absolutely. Exposed brick wallpaper or thin brick cladding tiles are high-quality alternatives. Concrete-effect wall paint and polished-concrete floor overlays mimic the real thing convincingly. Dark matte black pipework, Edison lighting, and reclaimed furniture complete the industrial story regardless of the underlying architecture.",
      },
      {
        q: "Is industrial design suitable for a home or only commercial spaces?",
        a: "Industrial design is extremely well-suited to residential use — it simply needs warmth-balancing. Counteract the hard materials with soft leather, aged wool textiles, warm candlelight, and indoor plants. The contrast between rough industrial surfaces and comfortable soft furnishings creates one of the most inviting home aesthetics possible.",
      },
      {
        q: "What lighting works best in an industrial interior?",
        a: "Edison-bulb pendants (ideally with black or antique-brass fittings), industrial cage wall sconces, and black steel floor lamps with exposed bulbs are the classics. Aim for warm white (2200K–2700K) bulbs to create that characteristic amber glow. Avoid recessed downlights — they feel too polished for the raw industrial aesthetic.",
      },
    ],
  },

  bohemian: {
    adjective: "Bohemian",
    tagline: "eclectic freedom, global soul, and layered beauty without rules",
    intro:
      "Bohemian design is the antithesis of the perfectly curated showroom. It is personal, layered, colourful, and gloriously free from rules. A boho room tells the story of its owner's travels, passions, and collected life — every pattern, plant, and vintage find holds a memory. If you've always felt that mainstream interiors are too careful, too matching, too safe — bohemian is your aesthetic home.",
    whatIs:
      "Bohemian interior design draws from the 19th-century bohemian counter-culture of artists, writers, and free thinkers who rejected mainstream conventions and embraced a nomadic, globally-influenced lifestyle. Today's boho interior is a maximalist celebration of colour, texture, and global pattern. Think Moroccan wedding blankets layered over Indian block-print cushions; macramé wall hangings beside gallery-wall clusters of mismatched frames; rattan chairs beside velvet sofas; trailing pothos and monstera plants weaving through every corner. Earthy terracotta, deep jewel tones, warm ochre, and forest green form the colour story. Nothing needs to match — it needs to feel alive and personally meaningful.",
    keyElements: [
      "Layered textiles: Moroccan rugs, Indian block prints, macramé, velvet, and woven blankets",
      "Rich jewel and earthy tones — terracotta, ochre, forest green, deep plum, and warm saffron",
      "Eclectic furniture mix: rattan, cane, reclaimed wood, and vintage upholstered pieces",
      "Abundant indoor plants — trailing, hanging, and statement floor-to-ceiling varieties",
      "Global decorative objects: pottery, woven baskets, brass lanterns, and world-market finds",
    ],
    aiSteps: [
      "Upload a photo of your room — even an empty or very conventional space works brilliantly as a blank canvas for the AI's bohemian transformation.",
      "Select Bohemian style. The AI layers patterns, introduces plants and hanging textiles, enriches the colour palette, and populates the room with eclectic decorative objects.",
      "Study the render for layering inspiration — identify which elements feel most 'you' and which vintage or handmade pieces to source first.",
    ],
    ideas: [
      "Cover one entire wall with a gallery of mismatched frames — vintage prints, travel photos, pressed botanicals, and children's artwork at varying heights with no grid required.",
      "Layer three or four rugs of different sizes and patterns over each other — a large kilim base, a Moroccan runner, and a small dhurrie accent create the quintessential boho floor.",
      "Hang a statement macramé wall hanging or a woven textile panel above a sofa or bed as the room's focal artwork — no picture rails or frames needed.",
      "Create a 'plant corner' with floor-standing fiddle-leaf figs, hanging trailing plants at window level, and a cluster of terracotta pots in varied sizes on a cane stool.",
    ],
    faqs: [
      {
        q: "How do I make bohemian design look intentional rather than cluttered?",
        a: "Colour cohesion is the secret. Even amid maximum eclecticism, anchor the room to a consistent tonal family — warm earthy tones or cool jewel tones — and the disparate pieces read as curated. Vary scale deliberately (large rug, medium throw, small cushion) and ensure there are a few 'breathing' spots of negative space between clusters.",
      },
      {
        q: "Can bohemian design work in a rented apartment?",
        a: "It is arguably the perfect rental aesthetic because it relies on moveable objects — rugs, textiles, plants, and decorative items — rather than permanent fixtures. No painting required. Layer rugs over existing flooring, hang tapestries on hooks, and fill every surface with plants and collected objects. The transformation is dramatic and entirely reversible.",
      },
      {
        q: "What is the difference between bohemian and maximalist design?",
        a: "Maximalism is defined by quantity and visual richness across any style. Bohemian is a specific aesthetic within maximalism: it is warm-toned, globally-influenced, plant-filled, and textile-heavy. A maximalist room could be ultra-formal with gilded antiques; a bohemian room is always relaxed, eclectic, and earthy.",
      },
    ],
  },
};

const ROOM_DATA: Record<Room, RoomData> = {
  "living-room": {
    label: "Living Room",
    intro:
      "The living room is the social heart of a home — the space where first impressions are made, guests are entertained, families gather, and individuals decompress after long days. Getting its design right matters more than any other room.",
    context:
      "As the primary social and relaxation space, the living room must simultaneously welcome guests and provide private sanctuary. It needs to accommodate TV viewing, conversation, reading, and sometimes working — all without feeling like it was designed for a hotel lobby.",
    benefit:
      "An AI redesign of your living room lets you visualise a complete transformation before spending a penny on furniture, paint, or redecorating.",
  },
  bedroom: {
    label: "Bedroom",
    intro:
      "The bedroom is your most personal space — the room where you begin and end every day. Quality of sleep, morning mood, and long-term wellbeing are all directly influenced by how your bedroom looks, feels, and functions.",
    context:
      "Unlike public rooms, the bedroom serves one person's (or one couple's) very specific needs for sleep, relaxation, dressing, and occasionally working. It should feel like a sanctuary: restorative, deeply personal, and free from the visual noise that characterises the rest of the home.",
    benefit:
      "An AI redesign preview lets you explore how your bedroom could look and feel before committing to any changes — no paint swatches pinned to walls, no furniture in the wrong corner.",
  },
  kitchen: {
    label: "Kitchen",
    intro:
      "The kitchen is called the heart of the home for good reason — it is where daily rituals happen, where families and friends gather most naturally, and where the aesthetic directly impacts how much you enjoy cooking and entertaining.",
    context:
      "Kitchen design must balance aesthetics with serious practical demands: adequate storage, efficient workflow triangles, durable surfaces, and adaptable lighting for cooking, dining, and socialising. A poorly designed kitchen is frustrating regardless of how beautiful it looks.",
    benefit:
      "An AI redesign preview for your kitchen is invaluable because kitchen renovations are among the most expensive home improvements — seeing the result before committing saves both money and regret.",
  },
  bathroom: {
    label: "Bathroom",
    intro:
      "The bathroom has evolved from purely functional necessity into one of the most luxurious and design-forward spaces in the modern home. A well-designed bathroom turns the daily ritual of cleansing into a small act of self-care.",
    context:
      "Bathroom design challenges include maximising limited square footage, choosing durable materials that resist moisture, maintaining adequate ventilation, and creating a space that feels both pristine and inviting. The margin between spa-like luxury and clinical utility is surprisingly narrow.",
    benefit:
      "An AI bathroom redesign preview is particularly valuable because bathroom renovations are high-cost and high-disruption — visualising the result first removes enormous uncertainty.",
  },
  "home-office": {
    label: "Home Office",
    intro:
      "The home office has moved from an afterthought to a primary design priority. Whether you work from home full-time or occasionally, a well-designed home office directly impacts focus, productivity, professional presence, and work-life psychological separation.",
    context:
      "Home office design must solve multiple competing challenges: ergonomic support for long working hours, sufficient storage for equipment and documents, lighting that flatters on video calls, acoustic management, and a visual design that inspires focus rather than distraction.",
    benefit:
      "An AI redesign of your home office can transform a spare-room compromise into a space that genuinely enhances your professional performance and daily energy.",
  },
};

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function toLabel(kebab: string): string {
  return kebab
    .split("-")
    .map(capitalize)
    .join(" ");
}

function parseSlug(slug: string): { style: Style; room: Room } | null {
  const inner = slug.replace(/^ai-/, "").replace(/-design$/, "");
  for (const style of STYLES) {
    if (inner === style || inner.startsWith(`${style}-`)) {
      const roomCandidate = inner.slice(style.length + 1);
      if (ROOMS.includes(roomCandidate as Room)) {
        return { style, room: roomCandidate as Room };
      }
    }
  }
  return null;
}

export function generateStaticParams() {
  return STYLES.flatMap((style) =>
    ROOMS.map((room) => ({ slug: `ai-${style}-${room}-design` }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return {};
  const { style, room } = parsed;
  const styleLabel = STYLE_DATA[style].adjective;
  const roomLabel = ROOM_DATA[room].label;
  return {
    title: `${styleLabel} ${roomLabel} Design Ideas — AI Room Redesign`,
    description: `Transform your ${roomLabel.toLowerCase()} with ${styleLabel} design. Upload your photo and get an AI-redesigned ${roomLabel.toLowerCase()} in seconds. From ₹749.`,
    openGraph: {
      title: `${styleLabel} ${roomLabel} Design Ideas — AI Room Redesign`,
      description: `Explore ${styleLabel.toLowerCase()} design ideas for your ${roomLabel.toLowerCase()} and see an instant AI transformation. From ₹749.`,
      url: `https://app.altorlab.org/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${styleLabel} ${roomLabel} Design Ideas — AI Room Redesign`,
      description: `AI-powered ${styleLabel.toLowerCase()} ${roomLabel.toLowerCase()} design from ₹749.`,
    },
  };
}

export default async function SEOPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) notFound();
  const { style, room } = parsed;

  const sd = STYLE_DATA[style];
  const rd = ROOM_DATA[room];
  const styleLabel = sd.adjective;
  const roomLabel = rd.label;

  const faqJsonLd = buildFaqJsonLd(
    sd.faqs.map(faq => ({ question: faq.q, answer: faq.a }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <section className="bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950 dark:to-zinc-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold uppercase tracking-wider mb-3">
            AI Room Redesign
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            {styleLabel} {roomLabel} Design Ideas —{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              AI-Powered Redesign
            </span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            {styleLabel} {roomLabel.toLowerCase()} design combines{" "}
            {sd.tagline}. {rd.intro} Whether you are renovating or simply
            exploring ideas, our AI room redesign tool transforms your existing{" "}
            {roomLabel.toLowerCase()} photo into a stunning {styleLabel.toLowerCase()} space
            in seconds.
          </p>
          <Link
            href="/room-redesign"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-base"
          >
            Try AI {styleLabel} {roomLabel} Redesign →
          </Link>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        <section>
          <h2 className="text-2xl font-bold mb-4">
            What is {styleLabel} {roomLabel} Design?
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {sd.whatIs}
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mt-4">
            {rd.context}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            What Are the Key Elements of {styleLabel} {roomLabel} Design?
          </h2>
          <ul className="space-y-3">
            {sd.keyElements.map((element, i) => (
              <li key={element} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-zinc-700 dark:text-zinc-300">{element}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            How Do I Achieve {styleLabel} {roomLabel} Design with AI?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            {rd.benefit} Here is how it works in three steps:
          </p>
          <ol className="space-y-5">
            {sd.aiSteps.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed pt-1">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            What {styleLabel} {roomLabel} Design Ideas Should I Try?
          </h2>
          <div className="grid gap-4">
            {sd.ideas.map((idea, i) => (
              <div
                key={idea}
                className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="text-indigo-500 font-bold text-lg mt-0.5">
                    {["✦", "◆", "▲", "●"][i % 4]}
                  </span>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {idea}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-indigo-600 rounded-2xl p-8 sm:p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            Ready to redesign your {roomLabel.toLowerCase()}?
          </h3>
          <p className="text-indigo-100 mb-6 text-base leading-relaxed">
            Upload your photo and see your {roomLabel.toLowerCase()} transformed in{" "}
            {styleLabel.toLowerCase()} style. AI-powered results in seconds,
            starting from ₹749.
          </p>
          <Link
            href="/room-redesign"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 font-bold px-8 py-3.5 rounded-xl transition-colors text-base"
          >
            Try AI {styleLabel} {roomLabel} Redesign →
          </Link>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">
            What Are Frequently Asked Questions About {styleLabel} {roomLabel} Design?
          </h2>
          <div className="space-y-6">
            {sd.faqs.map((faq) => (
              <div
                key={faq.q}
                className="border-b border-zinc-200 dark:border-zinc-800 pb-6 last:border-0"
              >
                <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
                  {faq.q}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-8">
          <p className="text-zinc-500 dark:text-zinc-400 mb-4">
            Explore other design styles and room types
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {STYLES.filter((s) => s !== style).map((s) => (
              <Link
                key={s}
                href={`/ai-${s}-${room}-design`}
                className="text-sm px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-indigo-400 dark:hover:border-indigo-500 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {toLabel(s)} {roomLabel}
              </Link>
            ))}
            {ROOMS.filter((r) => r !== room).map((r) => (
              <Link
                key={r}
                href={`/ai-${style}-${r}-design`}
                className="text-sm px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-indigo-400 dark:hover:border-indigo-500 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {styleLabel} {toLabel(r)}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
    </>
  );
}
