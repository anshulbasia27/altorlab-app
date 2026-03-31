import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildFaqJsonLd } from "@/lib/geo";
import { getRoomBySlug, ROOMS, STYLES } from "@/lib/seo-data";

interface RoomPageProps {
  params: Promise<{ room: string }>;
}

interface RoomFaq {
  question: string;
  answer: string;
}

interface RoomNarrative {
  intro: string;
  layouts: string[];
  problems: string[];
  aiComparison: string;
  marketContext: string;
  faqs: RoomFaq[];
}

const ROOM_DETAILS: Record<string, RoomNarrative> = {
  bedroom: {
    intro:
      "A bedroom redesign should do more than look good in photos. It should help you sleep better, store more, and feel calmer at the end of the day. In American homes, bedrooms often carry more than one function: sleeping, dressing, studying, watching TV, or even handling occasional work calls. That creates design pressure in a relatively compact area. AI bedroom redesign helps by turning your actual room photo into a realistic concept before you spend on wardrobes, paint, curtains, or beds. Instead of guessing whether a lighter palette, better storage, or a new layout will work, you can see it first. That reduces decision fatigue and helps you plan improvements in the right order.",
    layouts: [
      "Bed centered on the longest wall with two slim side tables and full-height storage opposite for typical studio apartments and 1-bedroom homes.",
      "Queen bed plus study ledge under the window for dual-use bedrooms in compact apartments.",
      "Storage bed with loft cabinets and one vertical dresser for rooms that need maximum utility without losing floor space.",
    ],
    problems: [
      "Bulky wardrobes and dark laminates making the room feel smaller than it is.",
      "Too many functions squeezed into one room, leading to clutter around the bed.",
      "Poor lighting layers, so the room feels flat at night and harsh in the morning.",
    ],
    aiComparison:
      "Traditional bedroom design projects in American cities can quickly reach $5,000 or far more once consultation, furniture changes, ceiling work, and soft furnishings are included. AltorLab lets you preview your bedroom redesign from $9, which is useful when you want design clarity before committing to a bigger spend.",
    marketContext:
      "For American bedrooms, prioritize wardrobe planning, blackout curtains for hotter cities, and finishes that handle dust and daily use. If the room is compact, use a lighter palette and keep circulation around the bed open. AI previews also help couples align on style before buying the biggest pieces.",
    faqs: [
      {
        question: "Can AI redesign help me plan a small bedroom?",
        answer:
          "Yes. AI previews are especially useful in small bedrooms because layout, wardrobe size, and color choice have an outsized impact on how spacious the room feels.",
      },
      {
        question: "What is the best layout for an American studio and 1-bedroom bedroom?",
        answer:
          "A centered bed, full-height wardrobe, and minimal side furniture usually works best because it preserves circulation while maximizing storage.",
      },
      {
        question: "Is $9 enough to get useful bedroom design direction?",
        answer:
          "Yes. The goal is not full execution drawings, but a strong visual direction you can use before spending on furniture, paint, or renovation.",
      },
    ],
  },
  "living-room": {
    intro:
      "The living room is the most public room in most homes, which is why redesign decisions here feel higher stakes. It needs to impress guests, support daily family routines, and often connect visually with dining areas, balconies, or entry passages. In American homes, this room is also where awkward TV walls, mismatched sofas, excess furniture, and poor lighting become most visible. AI living room redesign helps you test a cleaner, more intentional direction with your real space instead of mood boards from homes that do not resemble yours. You can validate layout, see whether a different style fits, and decide if the room needs small updates or a bigger furniture reset.",
    layouts: [
      "Straight sofa facing a TV wall with one accent chair and nested tables for compact urban apartments.",
      "L-shaped sectional zoning the lounge area while preserving a walkway to the dining space in open-plan homes.",
      "Two-seater plus lounge chair around a rug for narrow living rooms where every inch of circulation matters.",
    ],
    problems: [
      "Oversized sofas and display units making the room feel crowded and dated.",
      "TV walls, shoe storage, and entry clutter competing inside the same visual field.",
      "One harsh ceiling light instead of layered lighting for conversation, TV viewing, and evening ambience.",
    ],
    aiComparison:
      "A living room redesign with a traditional designer can easily start at $5,000 and rise much higher if you replace seating, wall treatments, lighting, and storage. AltorLab gives you an AI preview from $9, so you can confidently choose a direction before spending on the larger living-room budget.",
    marketContext:
      "American living rooms benefit from durable upholstery, easy-clean surfaces, and storage that hides daily clutter fast. If you host often, prioritize flexible seating and a layout that keeps the entry and TV wall visually calm. AI previews help you compare these options without moving furniture physically.",
    faqs: [
      {
        question: "Can AI redesign show me a better living room layout?",
        answer:
          "Yes. It helps you understand whether your current sofa size, TV placement, and circulation are working or if a different arrangement would feel more open.",
      },
      {
        question: "Why is living room planning so important in American homes?",
        answer:
          "Because the living room often handles guests, family time, dining spillover, and the first impression of the home all at once.",
      },
      {
        question: "Should I redesign the living room before buying a new sofa?",
        answer:
          "Yes. A preview first prevents the most expensive mistake in living rooms: buying a large piece that does not suit the room's true scale or layout.",
      },
    ],
  },
  kitchen: {
    intro:
      "Kitchen design is one of the hardest areas to visualize because utility matters as much as appearance. A kitchen can look attractive in isolation and still feel frustrating every day if workflow, storage, and counter space are wrong. In American homes, kitchens also need to handle heavy daily use, spices, pressure cooking, water exposure, and often a mix of open and closed storage. AI kitchen redesign is valuable because it lets you see a new look before taking on one of the most expensive renovation categories in the home. Whether you want a modular refresh or simply a better color and finish direction, the preview reduces uncertainty early.",
    layouts: [
      "Parallel kitchen with clear wet and dry zones for apartments where width is limited but efficiency matters.",
      "L-shaped kitchen with a compact dining ledge for small family homes that need extra prep space.",
      "Straight-line modular kitchen with tall storage at one end for studio apartments and narrow layouts.",
    ],
    problems: [
      "Insufficient overhead storage leading to visible clutter on countertops.",
      "Dark finishes and poor task lighting making the kitchen feel cramped.",
      "Layouts that interrupt the movement between stove, sink, and fridge during daily cooking.",
    ],
    aiComparison:
      "Kitchen projects often cross $5,000 very quickly because cabinetry, countertops, hardware, backsplash, and appliances add up fast. AltorLab gives you a visual redesign direction from $9 so you can test style and layout thinking before starting expensive modular work.",
    marketContext:
      "For American kitchens, choose finishes that are easy to wipe, prioritize chimney and ventilation planning, and keep high-use items near the cooking zone. AI previews are useful for comparing light versus dark laminates and for deciding whether open shelves actually suit your maintenance habits.",
    faqs: [
      {
        question: "Can AI redesign help with kitchen color decisions?",
        answer:
          "Yes. It lets you compare laminates, backsplash moods, and overall lightness before making expensive modular choices.",
      },
      {
        question: "What layout is common in American apartment kitchens?",
        answer:
          "Parallel and L-shaped kitchens are especially common because they balance storage, workflow, and compact footprints well.",
      },
      {
        question: "Why use AI before a kitchen renovation?",
        answer:
          "Because kitchens are expensive to change later. A preview helps you commit to the right direction before materials and modular units are ordered.",
      },
    ],
  },
  bathroom: {
    intro:
      "Bathroom redesign is high impact because even small changes can dramatically shift how clean, modern, and premium the space feels. At the same time, bathrooms are expensive and disruptive to renovate, so choosing the wrong tile tone, vanity finish, or layout logic becomes painful very quickly. In American homes, many bathrooms are compact and need to balance wet and dry zones, storage, ventilation, and easy cleaning. AI bathroom redesign helps you test the visual direction before you break tiles or order fittings. That makes it easier to decide whether the right move is a light spa-like look, a darker hotel mood, or a simple materials upgrade inside the existing layout.",
    layouts: [
      "Straight vanity opposite the WC with a shower partition at the far end for rectangular bathrooms.",
      "Compact wall-hung vanity with corner shower zone for small apartment bathrooms.",
      "Combined bath and dressing flow for larger master bathrooms with better storage and mirror planning.",
    ],
    problems: [
      "Bathrooms feeling cramped due to dark tiles, bulky vanities, or poor mirror placement.",
      "Limited storage for toiletries and cleaning supplies, which creates visible clutter fast.",
      "Weak lighting and ventilation making the room feel dull or harder to maintain.",
    ],
    aiComparison:
      "A bathroom redesign can exceed $5,000 once tiles, sanitaryware, plumbing changes, and vanity work are involved. AltorLab provides an AI preview from $9, which is a smart first step when you want to validate the overall look before committing to expensive execution.",
    marketContext:
      "For American bathrooms, moisture resistance, anti-skid flooring, and practical storage matter as much as aesthetics. If the bathroom is small, use larger-looking tile patterns, better mirrors, and lighter tones to stretch the space visually. AI previews help you decide that quickly.",
    faqs: [
      {
        question: "Can AI redesign make a small bathroom look bigger?",
        answer:
          "Yes. It can visualize lighter tiles, improved mirrors, slimmer vanities, and better zoning so you understand what changes would open the room up.",
      },
      {
        question: "Is bathroom redesign worth planning before renovation?",
        answer:
          "Definitely. Bathrooms are costly and messy to redo, so a visual preview is one of the safest ways to avoid regret.",
      },
      {
        question: "What matters most in an American bathroom design?",
        answer:
          "Moisture-friendly materials, storage, anti-skid safety, ventilation, and an easy-to-clean layout matter just as much as style.",
      },
    ],
  },
  "home-office": {
    intro:
      "A home office is no longer a temporary setup in the corner. For many people it is a daily work environment that affects focus, posture, video-call confidence, and how clearly work is separated from the rest of home life. In American homes, home offices are often carved out of bedrooms, living rooms, or spare corners, which means the design challenge is about efficiency as much as aesthetics. AI home office redesign helps you see whether a better desk position, a calmer backdrop, or more tailored storage could transform the room without major work. It is especially useful if you are tired of generic work-from-home hacks and want a setup that genuinely feels intentional.",
    layouts: [
      "Desk facing a wall with upper storage and a side bookshelf for bedrooms converted into workspaces.",
      "Window-side desk with a secondary storage credenza for natural light and video-call friendliness.",
      "Compact study nook with floating desk and overhead cabinets for multi-use apartments.",
    ],
    problems: [
      "Poor ergonomics from makeshift desks and chairs that were never designed for full workdays.",
      "Messy backgrounds and visible clutter that affect video calls and concentration.",
      "Insufficient storage for devices, papers, and chargers, causing the workspace to spill into other rooms.",
    ],
    aiComparison:
      "A custom home office by a traditional designer can cross $5,000 once joinery, ergonomic furniture, lighting, and cabinetry are included. AltorLab gives you a redesign preview from $9 so you can lock the visual direction and prioritize what is actually worth spending on.",
    marketContext:
      "In American homes, a successful home office should consider fan placement, daylight glare, outlet access, and whether the room also serves another purpose. AI previews help you test calm backdrops, smarter storage, and layout logic before you invest in custom furniture.",
    faqs: [
      {
        question: "Can AI redesign help me create a better work-from-home setup?",
        answer:
          "Yes. It can visualize better desk placement, cleaner backgrounds, and storage solutions that make the workspace feel more professional and less improvised.",
      },
      {
        question: "What is the biggest mistake in small home offices?",
        answer:
          "Using oversized furniture or ignoring storage. Both reduce comfort quickly and make the workspace look chaotic.",
      },
      {
        question: "Is a dedicated home office worth redesigning in the US?",
        answer:
          "Yes, especially if you work remotely often. Better focus, comfort, and video-call presentation can justify the improvement immediately.",
      },
    ],
  },
  "kids-room": {
    intro:
      "A kids room has to evolve faster than almost any other space in the house. What works for a toddler can feel restrictive a few years later, and what delights a child today may become impractical once study needs, storage volume, and play patterns change. In American homes, kids rooms also need to stay manageable for parents, fit into apartment-sized layouts, and sometimes support siblings sharing the same room. AI kids room redesign helps because it shows how a more organized, age-flexible setup would look before you buy beds, study desks, storage units, or wall decor. That makes it easier to aim for a room that feels fun without becoming chaotic.",
    layouts: [
      "Single bed plus study desk and wardrobe wall for school-age children in standard studio and 1-bedroom homes.",
      "Bunk-bed or trundle-bed layout with a shared study ledge for siblings sharing one room.",
      "Play-and-study zoning with open floor area in the center and tall storage on one side for flexible daily use.",
    ],
    problems: [
      "Toy, book, and clothing storage quickly overwhelming the room and making it look messy.",
      "Furniture choices that age badly and need replacing too soon.",
      "Poor balance between playful design and the need for focus during homework or quiet time.",
    ],
    aiComparison:
      "A custom kids room can cross $5,000 once themed carpentry, wardrobes, study units, and decor layers are added. AltorLab gives you an AI redesign preview from $9, making it easier to choose a more timeless direction before committing to expensive built-ins.",
    marketContext:
      "For American kids rooms, prioritize durable finishes, rounded edges, washable fabrics, and storage that children can use independently. If siblings share the room, AI previews help you test whether bunk beds, a shared desk, or zone-based planning makes the most sense for the available size.",
    faqs: [
      {
        question: "Can AI redesign help plan a shared kids room?",
        answer:
          "Yes. It helps you compare bunk-bed, trundle-bed, and shared-study layouts before spending on furniture or carpentry.",
      },
      {
        question: "How do I make a kids room future-proof?",
        answer:
          "Use neutral large furniture, flexible storage, and update the personality through art, bedding, and accessories rather than permanent themes.",
      },
      {
        question: "What matters most in an American kids room?",
        answer:
          "Storage, safety, durability, and enough open space for movement matter most, especially in compact bedrooms.",
      },
    ],
  },
};

function getRoomFaqJsonLd(room: string) {
  return buildFaqJsonLd(ROOM_DETAILS[room].faqs);
}

export function generateStaticParams() {
  return ROOMS.map((room) => ({ room: room.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const { room } = await params;
  const roomData = getRoomBySlug(room);

  if (!roomData) {
    return {};
  }

  return {
    title: { absolute: `AI ${roomData.name} Redesign from $9 | AltorLab` },
    description: `See AI ${roomData.name.toLowerCase()} redesign ideas for American homes, compare layouts and design costs, and preview your room from $9 with AltorLab.`,
    openGraph: {
      title: `AI ${roomData.name} Redesign from $9 | AltorLab`,
      description: `Explore layouts, design problems, and affordable AI previews for your ${roomData.name.toLowerCase()}.`,
      url: `https://app.altorlab.org/rooms/${roomData.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `AI ${roomData.name} Redesign from $9 | AltorLab`,
      description: `Preview your ${roomData.name.toLowerCase()} redesign with AI before spending on a traditional interior project.`,
    },
  };
}

export default async function RoomSeoPage({ params }: RoomPageProps) {
  const { room } = await params;
  const roomData = getRoomBySlug(room);

  if (!roomData) {
    notFound();
  }

  const details = ROOM_DETAILS[roomData.slug];
  const faqJsonLd = getRoomFaqJsonLd(roomData.slug);

  return (
    <main className="min-h-screen bg-slate-900 text-slate-300">
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>

      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-sm font-medium text-indigo-300">
              {roomData.name}
            </span>
            <span className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400">
              Secondary Hindi label: {roomData.secondaryHindiLabel}
            </span>
            <span className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400">
              Avg size: {roomData.avgSize}
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            AI {roomData.name} Redesign — See Your {roomData.name} Transformed
          </h1>
          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-slate-400">{details.intro}</p>
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
          <h2 className="mb-4 text-2xl font-bold text-white">Popular {roomData.name.toLowerCase()} layouts for American homes</h2>
          <p className="mb-6 leading-8 text-slate-400">
            Most {roomData.name.toLowerCase()} redesigns succeed when layout decisions come first. The room size in many American homes is limited, so every bed, desk, sofa, vanity, or storage unit affects circulation. These layout patterns are common because they balance practicality with visual clarity.
          </p>
          <ul className="space-y-3">
            {details.layouts.map((layout) => (
              <li key={layout} className="rounded-2xl border border-slate-800 bg-slate-800/40 p-5 leading-7 text-slate-300">
                {layout}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-white">Common {roomData.name.toLowerCase()} design problems</h2>
          <p className="mb-6 leading-8 text-slate-400">
            Before choosing colors or décor, it helps to identify what is actually not working. Many room redesigns fail because homeowners solve the visible symptom instead of the structural issue. AI previews make these issues easier to spot because you see your current room with a completely different design logic applied to it.
          </p>
          <ul className="space-y-3">
            {details.problems.map((problem) => (
              <li key={problem} className="rounded-2xl border border-slate-800 bg-slate-800/40 p-5 leading-7 text-slate-300">
                {problem}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-white">AI redesign vs interior designer cost</h2>
          <p className="leading-8 text-slate-400">{details.aiComparison}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">AltorLab AI preview</h3>
              <p className="text-3xl font-bold text-indigo-300">$9</p>
              <p className="mt-3 leading-7 text-indigo-100">
                Fast visual direction using your actual room photo. Ideal for deciding whether to proceed and what style or layout direction to pursue.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">Traditional designer route</h3>
              <p className="text-3xl font-bold text-slate-200">$5,000+</p>
              <p className="mt-3 leading-7 text-slate-400">
                Higher-cost route that can include consultations, custom furniture, site work, execution coordination, and larger commitment before you have visual certainty.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-white">US-specific planning tips</h2>
          <p className="leading-8 text-slate-400">{details.marketContext}</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-white">Styles that pair well with this room type</h2>
          <p className="mb-6 leading-8 text-slate-400">
            Once the room logic is clear, style becomes easier to choose. Browse these popular style directions to understand how your {roomData.name.toLowerCase()} could look in different moods before you upload your photo.
          </p>
          <div className="flex flex-wrap gap-3">
            {STYLES.map((style) => (
              <Link
                key={style.slug}
                href={`/styles/${style.slug}`}
                className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-indigo-400 hover:text-indigo-300"
              >
                {style.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-indigo-500/20 bg-indigo-500/10 p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Ready to see your {roomData.name.toLowerCase()} transformed?</h2>
          <p className="mb-6 leading-8 text-indigo-100">
            Upload your current room photo and get an AI redesign preview from $9. It is the fastest way to explore a better {roomData.name.toLowerCase()} without jumping straight into a $5,000+ traditional project.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/room-redesign"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 transition-colors hover:bg-slate-100"
            >
              Start your redesign →
            </Link>
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/30 px-6 py-3 font-semibold text-indigo-100 transition-colors hover:border-indigo-200/50 hover:text-white"
            >
              Compare room types
            </Link>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold text-white">Frequently asked questions about AI {roomData.name.toLowerCase()} redesign</h2>
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
