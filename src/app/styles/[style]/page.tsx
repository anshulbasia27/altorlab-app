import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildFaqJsonLd } from "@/lib/geo";
import { getStyleBySlug, STYLES } from "@/lib/seo-data";

interface StylePageProps {
  params: Promise<{ style: string }>;
}

interface StyleFaq {
  question: string;
  answer: string;
}

interface StyleNarrative {
  intro: string;
  whatIs: string;
  palette: string;
  furniture: string;
  marketContext: string;
  faqs: StyleFaq[];
}

const STYLE_DETAILS: Record<string, StyleNarrative> = {
  modern: {
    intro:
      "Modern interior design is a reliable choice for homeowners who want rooms that look crisp, premium, and uncluttered without feeling sterile. It works especially well when you already have straightforward architecture, neutral flooring, or limited square footage, because the style turns simplicity into a strength. In American homes, modern rooms often feel more spacious because fewer visual interruptions means the eye can travel easily across the room. That helps compact bedrooms, small living rooms, and combined dining areas look more intentional even before any civil work starts. When paired with AI room redesign, modern style is easy to test because you can instantly see how clean-lined furniture, lighter wall colors, and better lighting would change the mood of your current room photo.",
    whatIs:
      "At its core, modern design is about function first. The goal is to remove unnecessary decoration and let proportion, finish, and layout do the work. For a modern room, think straight lines, smooth surfaces, streamlined wardrobes, low-profile sofas, floating TV units, sleek side tables, and lighting that feels architectural instead of ornamental. This style does not mean boring. It means every item has a purpose and every finish supports a calm visual language. For American homes, that often translates into better built-in storage, fewer bulky carved pieces, and a mix of soft neutrals with one confident accent. The result is a room that photographs well, feels easier to maintain, and adapts well to changing trends over time.",
    palette:
      "The strongest modern palettes begin with a controlled base and build contrast through texture rather than too many colors. On this page, the core palette is White, Grey, Black, and Chrome, which makes it ideal for marble-look tiles, matte laminates, charcoal upholstery, and brushed-metal lighting. In a modern American bedroom, white or warm-grey walls can balance darker wardrobes and create a hotel-like feel. In a living room, black-framed lighting or chrome table legs can sharpen the space without making it feel heavy. If your room receives harsh afternoon sun, lighter paint and curtains keep the mood airy. If the room feels flat, use charcoal cushions, black handles, or smoked-glass accessories to anchor the palette with depth.",
    furniture:
      "Furniture selection matters more than decoration in a modern room. Choose pieces with clean geometry, visible negative space, and practical proportions for daily life. A straight sofa, platform bed, simple fluted sideboard, or compact dining table with metal or slim wooden legs all fit naturally into a modern scheme. Avoid oversized traditional furniture that crowds circulation or overly ornate patterns that compete with the minimalist shell. Instead, layer texture through boucle chairs, ribbed veneers, matte finishes, and large-format rugs. A modern room also benefits from edited styling: one bold artwork, one sculptural lamp, and one or two plants can do more than ten small decorative items. When you use AI to preview the redesign, pay attention to how the room flows after reducing visual clutter and aligning furniture to the room’s architecture.",
    marketContext:
      "For American homes, modern design works best when it respects climate, storage pressure, and day-to-day maintenance. Use wipeable paints, laminates, and fabrics that handle dust and humidity better than delicate finishes. In studio and 1-bedroom apartments, a wall-mounted study ledge, shoe storage near the entry, and wardrobes with loft cabinets help maintain the clean modern look in real life. If you want the room to feel premium without a full renovation, swap heavy curtains for sleek sheers plus blackout layers, update warm-white lighting, and use neutral upholstery with darker base furniture to hide daily wear. Modern design also translates well across languages and preferences; whether someone calls it Modern or मॉडर्न, the appeal is the same: a room that feels current, organized, and easy to live in.",
    faqs: [
      {
        question: "Is modern interior design good for small American homes?",
        answer:
          "Yes. Modern design reduces visual clutter, uses lighter base colors, and prefers furniture with cleaner proportions, so compact flats often feel larger and more breathable.",
      },
      {
        question: "What colors make a modern room look expensive?",
        answer:
          "A restrained palette of white, grey, black, and metallic accents usually feels premium. Add warmth through wood, layered lighting, and texture instead of extra colors.",
      },
      {
        question: "Can I create a modern room without hiring an interior designer?",
        answer:
          "Yes. Use AI room redesign to visualize layout, palette, and furniture direction first, then buy or update pieces in phases instead of committing to a full designer package.",
      },
    ],
  },
  scandinavian: {
    intro:
      "Scandinavian design is one of the easiest styles to love because it combines visual simplicity with emotional warmth. Rooms feel brighter, softer, and more welcoming without becoming cluttered. For American homes, this is useful because many apartments need spaces that work for family life, work-from-home setups, and guest visits all at once. A Scandinavian room makes that mix feel calmer by relying on light finishes, breathable layouts, and natural materials. If your current room looks dark, crowded, or heavy, AI visualization can quickly show how Scandinavian design would open it up through pale wood, softer textiles, and more intentional furniture placement. It is practical, photogenic, and friendly to both new construction and rental apartments.",
    whatIs:
      "Scandinavian design grew from a need to make homes feel bright and comfortable during long Nordic winters, so its focus is on light, utility, and coziness. In design terms, that means simple furniture, gentle curves, minimal ornament, and lots of natural textures. Instead of high contrast or shiny glamour, Scandinavian rooms feel relaxed and lived-in. They use space carefully and give importance to comfort: a sofa should feel inviting, a dining corner should encourage daily use, and a bedroom should feel peaceful from the minute you enter. In American homes, Scandinavian style can be a smart middle ground between ultra-minimal and fully decorative interiors. It keeps the room edited, but it never feels cold because fabrics, wood, plants, and soft lighting add a human layer.",
    palette:
      "The Scandinavian palette from the shared data set includes White, Light Wood, Soft Grey, and Pale Blue. These colors are ideal for reflecting natural light and reducing the heaviness that darker furniture can create. White walls and light-wood finishes are the signature combination, but the room should not feel clinical. Soft grey upholstery, muted blue cushions, warm oak, and creamy textiles keep the palette balanced. In American cities where daylight changes dramatically by season, this palette helps a room feel consistently fresh. Pale blue can appear in rugs, art, or accent chairs, while white and light wood do most of the structural work through wardrobes, TV units, shelves, and tables. If you already have neutral tiles, Scandinavian design often feels like a seamless upgrade rather than a complete reset.",
    furniture:
      "Furniture in a Scandinavian room should be simple, useful, and comfortable. Think dining chairs with curved backs, pale wood coffee tables, storage benches, upholstered beds, and sofas with clean arms and soft cushions. Avoid bulky pieces with excessive carving or glossy lacquer. Instead, choose tactile materials that feel grounded: oak, ash, cane, cotton, wool-look fabrics, and matte ceramics. Layering is important. A Scandinavian room feels complete when you add linen curtains, a textured throw, a woven rug, and one or two healthy indoor plants. The style also benefits from good spacing between pieces. When you preview your room with AI, notice how much calmer the room becomes when circulation improves and furniture no longer presses heavily against every wall. That breathing room is part of the Scandinavian appeal.",
    marketContext:
      "In the US, Scandinavian design works especially well in apartments that need more light and softness without major renovation. If the room has dark tiles or standard builder finishes, use pale rugs, off-white paint, and warm wood furniture to shift the mood. For hot climates, choose cotton, linen-look fabrics, and breezier curtains so the room feels cool instead of layered in a heavy way. Storage remains essential, so combine the style’s open feel with practical closed cabinets for daily essentials. In family homes, a Scandinavian kids corner, study nook, or breakfast table can still look beautiful because the style supports functionality. Whether you call it Scandinavian or स्कैंडिनेवियन, the promise is similar: a room that feels brighter, friendlier, and easier to enjoy every single day.",
    faqs: [
      {
        question: "What is the difference between Scandinavian and minimalist interior design?",
        answer:
          "Scandinavian interiors are simple but cozy, using pale wood, layered textiles, and soft lighting. Minimalist spaces are more reduced and usually remove even more color and decoration.",
      },
      {
        question: "Does Scandinavian style work in warm American cities?",
        answer:
          "Yes. Its light palette, airy furniture, and natural fabrics suit warm climates well, especially when paired with cotton curtains, cross ventilation, and warm-white lighting.",
      },
      {
        question: "Which rooms look best in Scandinavian style?",
        answer:
          "Bedrooms, living rooms, home offices, and kids rooms often respond especially well because the style makes them feel calm, bright, and comfortable.",
      },
    ],
  },
  minimalist: {
    intro:
      "Minimalist interior design appeals to people who want their homes to feel quieter, more ordered, and easier to manage. In busy American cities, that can be more valuable than any decorative trend. When a room is filled with too many colors, shelves, and mismatched furniture, it can feel smaller and mentally exhausting. Minimalism solves that by narrowing attention to what matters: space, light, proportion, and essential function. It is not about making a room empty or lifeless. It is about choosing less so that every useful element stands out more clearly. AI room redesign is helpful here because it lets you preview what happens when a room becomes lighter, cleaner, and more intentional before you remove or replace anything.",
    whatIs:
      "Minimalist design builds on the idea that a good room should feel calm before it feels decorated. That means fewer furniture pieces, cleaner storage, limited visual noise, and stronger discipline around color. Surfaces stay open, styling is restrained, and furniture tends to have crisp outlines that do not distract from the larger shape of the room. In a minimalist bedroom, for example, the bed, side tables, and wardrobe may do almost all the visual work. In a minimalist living room, the sofa, rug, media console, and one statement chair can be enough. The style is powerful because it improves everyday usability. Cleaning is easier, circulation is better, and the room has a restful quality that many homeowners find hard to achieve when they rely on too many separate decor decisions.",
    palette:
      "According to the shared data, the minimalist palette centers on White, Beige, Light Grey, and Natural tones. That combination is excellent for creating continuity across walls, flooring, textiles, and furniture. White makes the room feel open, beige adds warmth, light grey prevents the scheme from becoming too flat, and natural wood keeps the space grounded. Instead of dramatic contrast, minimalist rooms look strongest when colors move gently from one tone to the next. This tonal approach works well in American bedrooms and living areas where you want the room to feel peaceful despite limited square footage. If you already own a few darker items, keep them as accents rather than the dominant note. A single natural-wood chair or beige upholstered headboard can soften the look while preserving the essential clean-line feeling.",
    furniture:
      "Minimalist furniture should solve problems quietly. Beds with integrated storage, slim wardrobes, floating desks, low media units, and nesting tables are often more useful than bigger, visually heavier pieces. The focus should be on proportion, finish, and hidden function. Avoid multiple small stools, extra side tables, and decorative shelving that collects clutter. Instead, think in zones: one bed zone, one seating zone, one work zone, one storage wall. The fewer interruptions in each zone, the more successful the minimalist effect. Texture replaces decoration here, so choose matte laminates, soft upholstery, fine-grain wood, and subtle rugs rather than loud patterns. AI previews are particularly helpful for minimalist rooms because they reveal how much stronger the room becomes when unnecessary items disappear and the remaining furniture aligns with the architecture.",
    marketContext:
      "In American homes, minimalist design succeeds only when storage is planned honestly. Daily essentials, seasonal clothes, school items, and guest bedding all need a place, or the style will collapse under real-life use. Use loft cabinets, under-bed storage, wardrobe organizers, and concealed study shelves to keep surfaces clear. Choose durable finishes that are easy to wipe, because the beauty of minimalism depends on maintaining clean planes. Warm-white lighting also matters; very cool lighting can make a minimalist room feel harsh. If you live in a rented apartment, start with curtains, bedding, a neutral rug, and one storage-focused furniture upgrade rather than trying to change everything at once. Whether people call it Minimalist or मिनिमलिस्ट, the goal is the same: a room that feels lighter on the eye and lighter on the mind.",
    faqs: [
      {
        question: "Does minimalist interior design mean an empty room?",
        answer:
          "No. A minimalist room still feels complete, but it uses fewer, better-chosen pieces and keeps surfaces, storage, and color more controlled.",
      },
      {
        question: "How do I keep a minimalist room practical for family life?",
        answer:
          "Use closed storage, multipurpose furniture, and clear zones for daily items. The style works well when clutter has a hidden place to go.",
      },
      {
        question: "Which colors are safest for a minimalist American home?",
        answer:
          "Warm white, beige, light grey, and natural wood tones are usually the easiest to maintain and the most calming in American homes and villas.",
      },
    ],
  },
  industrial: {
    intro:
      "Industrial interior design is for homeowners who want more character, contrast, and urban edge in their rooms. It takes inspiration from warehouse lofts, exposed materials, and practical craftsmanship, then adapts those ideas for residential spaces. In the US, industrial style can look striking because it breaks away from glossy showroom interiors and brings texture back into the room. A plain wall can become a concrete-look backdrop, a basic dining corner can feel like a studio loft, and black metal details can add structure without a full renovation. AI room redesign helps you test how far you want to go. You can preview a subtle industrial room with raw wood and dark accents, or a stronger concept with exposed textures, moody lighting, and bold metal framing.",
    whatIs:
      "Industrial design celebrates the bones of a space instead of hiding them. The style values raw finishes, visible structure, and furniture that feels honest about how it is made. That can include exposed brick textures, black-framed glass, pipe-inspired details, reclaimed wood, distressed leather, and matte metal. The overall impression is grounded and confident rather than polished in a conventional sense. In a home setting, industrial design works best when it is balanced. Too much darkness or too many rough materials can make the room feel heavy, but the right combination creates strong personality. American homeowners often use industrial style effectively in living rooms, home offices, and open kitchens because those spaces can handle deeper tones and statement lighting without sacrificing comfort.",
    palette:
      "The industrial palette in the SEO data includes Dark Grey, Brick Red, Metal, and Raw Wood. That gives you a strong framework for walls, flooring, furniture, and accents. Dark grey can shape the room through paint, sofas, or cabinets. Brick red appears beautifully in exposed-brick textures, terracotta decor, or warm leather. Metal shows up in frames, lights, handles, and shelving, while raw wood prevents the room from feeling too cold. In American homes, where many rooms already have beige or cream base finishes, industrial style often works best by adding contrast rather than replacing everything. A single dark TV wall, a black study desk, or a wood-and-metal bookshelf can shift the space immediately. The palette is bold, but when used thoughtfully it still feels livable.",
    furniture:
      "Industrial furniture tends to look sturdy, lean, and tactile. Coffee tables with metal frames, open shelving, leather or leather-look seating, reclaimed-wood tops, and black-framed partitions all fit naturally within the style. Lighting is especially important because industrial rooms come alive when shadows and warm pools of light create depth. Use hanging pendants, wall sconces, floor lamps, or track lights with warm bulbs to soften the raw finishes. Avoid too many delicate or decorative pieces that dilute the concept. Instead, aim for fewer but stronger items that establish the room quickly. AI previews are useful because they reveal whether your room can handle darker materials comfortably and how much texture you need. Often, one exposed wall treatment plus better lighting is enough to make the room feel intentionally industrial.",
    marketContext:
      "For American homes, industrial design should be adapted for comfort, climate, and maintenance. If the room gets hot, balance dark walls with lighter curtains, better ventilation, and wood or fabric surfaces that soften the visual weight. Use laminates or textured finishes that mimic concrete and brick instead of relying on high-maintenance raw materials everywhere. In apartments, industrial style works well in modular kitchens, study corners, and bachelor pads because it feels modern without being generic. It is also renter-friendly if you use movable shelving, art, rugs, and lighting rather than permanent civil work. Whether you say Industrial or इंडस्ट्रियल, the style delivers the same promise: a room with personality, depth, and a more confident urban identity than standard builder interiors.",
    faqs: [
      {
        question: "Can industrial interior design work in a regular apartment?",
        answer:
          "Yes. You do not need a real loft. Concrete-look finishes, black metal accents, warm lighting, and raw-wood furniture can create an industrial mood in a standard flat.",
      },
      {
        question: "How do I stop an industrial room from feeling too dark?",
        answer:
          "Balance dark grey and metal with warm wood, layered lighting, lighter curtains, and a few softer textiles so the room keeps character without becoming gloomy.",
      },
      {
        question: "Which rooms suit industrial style best?",
        answer:
          "Living rooms, home offices, dining areas, and kitchens usually suit industrial style best because they can handle stronger contrast and statement materials.",
      },
    ],
  },
  bohemian: {
    intro:
      "Bohemian interior design is ideal for people who want their rooms to feel expressive, layered, and full of personality. Instead of strict rules, boho spaces grow from collected objects, handcrafted textures, meaningful colors, and relaxed furniture layouts. That makes the style especially attractive in the US, where textiles, artisanal materials, plants, and cultural color already play a strong role in home life. A bohemian room does not need expensive uniform furniture to feel finished. It needs balance between color, comfort, and individuality. AI room redesign is useful here because boho styling can be hard to imagine from swatches alone. Seeing your actual room transformed with warmer tones, layered fabrics, cane furniture, and plant life makes it easier to decide how bold or subtle you want the final outcome to be.",
    whatIs:
      "Bohemian design values freedom over perfection. It mixes textures, patterns, and influences in a way that feels curated by life rather than staged by a catalog. You may see rattan furniture next to upholstered seating, patterned cushions over plain bedding, woven pendants above wooden tables, and art collected from travel, craft fairs, or family homes. The room should feel lived in, not overplanned. That said, good bohemian design still has structure. Repeating a color family, keeping circulation comfortable, and using a few anchor pieces prevents the room from becoming messy. In American homes, boho design often feels naturally compatible because materials like cane, jute, block prints, ceramics, brass, and terracotta already sit comfortably within the local design language.",
    palette:
      "The bohemian palette from the shared data set includes Terracotta, Teal, Mustard, and Sage Green. These colors create warmth and energy without feeling random. Terracotta grounds the room, teal adds cool contrast, mustard brings sunlight, and sage green connects the space to plants and natural fibers. In a boho bedroom, these tones can appear through bedding, throws, rugs, and art. In a living room, they work beautifully across upholstery, planters, wall accents, and cushions. The key is layering rather than matching exactly. Start with one earthy base, then introduce two or three supporting colors in different materials. If you already own wooden furniture or neutral tiles, the bohemian palette is easy to add gradually, making it practical for both homeowners and renters.",
    furniture:
      "Furniture in a bohemian room should feel relaxed and collected. Cane chairs, wooden trunks, low coffee tables, mixed side tables, upholstered headboards, poufs, and open shelves all work well. Comfort is important, so soft seating, layered rugs, and draped textiles help the room feel inviting. Decor should support the furniture rather than crowd it. Use plants, handmade pottery, woven baskets, books, and framed art to create personality at different heights. Avoid overfilling every surface. The strongest bohemian rooms still leave space to breathe between clusters. AI previews are helpful because they show how much layering your room can handle. Sometimes the ideal boho result is vibrant and eclectic; other times it is calmer, with just a few earthy accents and more natural textures doing the work.",
    marketContext:
      "Bohemian design is particularly adaptable for American homes because so many local materials already fit the style. Handloom cushions, flatweave rugs, cane lights, block-print bedding, brass accents, terracotta planters, and indoor plants all sit naturally inside a boho palette. If you live in a rental, use removable layers such as curtains, art, rugs, bedding, and lighting to create the look without renovation. In family homes, keep the room practical by choosing washable fabrics and using baskets or trunks for quick storage. Ceiling fans, natural ventilation, and lighter fabric choices help the room stay comfortable in warmer cities. Whether someone says Bohemian or बोहेमियन, the emotional payoff is similar: a room that feels warm, personal, creative, and unmistakably yours.",
    faqs: [
      {
        question: "How do I make a bohemian room look stylish instead of cluttered?",
        answer:
          "Repeat a focused color palette, use a few strong anchor furniture pieces, and create breathing room between decor clusters so the room feels layered but still intentional.",
      },
      {
        question: "Is bohemian interior design renter-friendly?",
        answer:
          "Yes. Rugs, curtains, cushions, plants, art, and movable furniture create most of the effect, so renters can build the look without structural changes.",
      },
      {
        question: "Which American materials suit bohemian interiors best?",
        answer:
          "Cane, jute, cotton, block prints, terracotta, brass, wood, and handloom textiles all work beautifully in bohemian rooms.",
      },
    ],
  },
};

function getStyleFaqJsonLd(style: string) {
  const details = STYLE_DETAILS[style];
  return buildFaqJsonLd(details.faqs);
}

export function generateStaticParams() {
  return STYLES.map((style) => ({ style: style.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: StylePageProps): Promise<Metadata> {
  const { style } = await params;
  const styleData = getStyleBySlug(style);

  if (!styleData) {
    return {};
  }

  return {
    title: {
      absolute: `${styleData.name} Room Design — AI Interior Redesign $9 | AltorLab`,
    },
    description: `${styleData.name} interior design ideas for American homes. Explore colors, furniture tips, and AI-powered room redesign from $9 with AltorLab.`,
    openGraph: {
      title: `${styleData.name} Room Design — AI Interior Redesign $9 | AltorLab`,
      description: `Plan a ${styleData.name.toLowerCase()} room with AI. See palette, furniture, and US-specific design tips before you redesign.`,
      url: `https://app.altorlab.org/styles/${styleData.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${styleData.name} Room Design — AI Interior Redesign $9 | AltorLab`,
      description: `See how ${styleData.name.toLowerCase()} interior design can transform your room with AI from $9.`,
    },
  };
}

export default async function StyleSeoPage({ params }: StylePageProps) {
  const { style } = await params;
  const styleData = getStyleBySlug(style);

  if (!styleData) {
    notFound();
  }

  const details = STYLE_DETAILS[styleData.slug];
  const faqJsonLd = getStyleFaqJsonLd(styleData.slug);

  return (
    <main className="min-h-screen bg-slate-900 text-slate-300">
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>

      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-sm font-medium text-indigo-300">
              {styleData.name}
            </span>
            <span className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400">
              Secondary Hindi label: {styleData.secondaryHindiLabel}
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {styleData.name} Interior Design — Transform Your Room with AI
          </h1>
          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            {details.intro}
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            {styleData.colors.map((color) => (
              <span
                key={color}
                className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300"
              >
                {color}
              </span>
            ))}
          </div>
          <Link
            href="/room-redesign"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            Try AI Room Redesign →
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-12 px-4 py-14 sm:px-6 lg:px-8">
        <section>
          <h2 className="mb-4 text-2xl font-bold text-white">What is {styleData.name} design?</h2>
          <p className="leading-8 text-slate-400">{details.whatIs}</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-white">
            {styleData.name} color palettes that work in real homes
          </h2>
          <p className="leading-8 text-slate-400">{details.palette}</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-white">Furniture and decor tips for a {styleData.name.toLowerCase()} room</h2>
          <p className="mb-6 leading-8 text-slate-400">{details.furniture}</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {styleData.colors.map((color) => (
              <li
                key={color}
                className="rounded-2xl border border-slate-800 bg-slate-800/40 p-4 text-sm leading-7 text-slate-300"
              >
                Use <span className="font-semibold text-white">{color}</span> as part of your {styleData.name.toLowerCase()} palette to support {styleData.description.toLowerCase()}.
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-white">US-specific tips for {styleData.name.toLowerCase()} interiors</h2>
          <p className="leading-8 text-slate-400">{details.marketContext}</p>
        </section>

        <section className="rounded-3xl border border-indigo-500/20 bg-indigo-500/10 p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">See your room in {styleData.name.toLowerCase()} style before you spend</h2>
          <p className="mb-6 leading-8 text-indigo-100">
            Upload your current room photo, choose {styleData.name}, and get an AI redesign preview from $9. It is the fastest way to validate whether this style fits your space, lighting, and furniture layout.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/room-redesign"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 transition-colors hover:bg-slate-100"
            >
              Start your redesign →
            </Link>
            <Link
              href="/styles"
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/30 px-6 py-3 font-semibold text-indigo-100 transition-colors hover:border-indigo-200/50 hover:text-white"
            >
              Compare all styles
            </Link>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold text-white">Frequently asked questions about {styleData.name.toLowerCase()} interior design</h2>
          <div className="space-y-5">
            {details.faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-800/30 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                <p className="leading-7 text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
