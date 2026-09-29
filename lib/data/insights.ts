import type { ImageKey } from "@/lib/media";

export type Insight = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
  image: ImageKey;
};

export const insights: Insight[] = [
  {
    slug: "caring-for-natural-stone",
    title: "Caring for natural stone through the seasons",
    category: "Materials",
    date: "2026-09-02",
    readTime: "5 min",
    excerpt: "Travertine, limestone and slate age beautifully — if they are cleaned and sealed at the right moments.",
    body: [
      "Natural stone is forgiving until it is not. Most damage we see comes from the wrong cleaner used at the wrong time, or from a sealant that was never renewed.",
      "Our approach is simple: a gentle clean each quarter, a condition check after every hard frost, and resealing on a cycle set by the stone itself rather than by a calendar.",
      "The result is a surface that develops patina rather than staining — the difference between a house that ages and one that wears.",
    ],
    image: "limestoneWall",
  },
  {
    slug: "the-empty-house",
    title: "The empty house: keeping a home alive while you are away",
    category: "Ownership",
    date: "2026-07-18",
    readTime: "4 min",
    excerpt: "Unoccupied homes suffer quietly. A few small rituals keep them healthy between visits.",
    body: [
      "Still air, standing water and unused systems are the enemies of an empty home. Weekly airing, running taps and cycling heating prevent most problems before they begin.",
      "We pair these visits with a short photographic report, so owners abroad can see their home as it is — not as they remember it.",
    ],
    image: "interiorIvory",
  },
  {
    slug: "letting-a-design-led-home",
    title: "Letting a design-led home without compromising it",
    category: "Lettings",
    date: "2026-05-30",
    readTime: "6 min",
    excerpt: "Careful residents, clear agreements and an inventory that respects the architecture.",
    body: [
      "Architect-designed homes attract residents who appreciate them — but only if they are presented and placed with the same care that went into building them.",
      "We photograph editorially, write honest descriptions and meet every applicant. A detailed inventory, with materials and finishes noted, protects both parties.",
    ],
    image: "interiorSunset",
  },
  {
    slug: "planning-lighting-maintenance",
    title: "Why exterior lighting deserves a maintenance plan",
    category: "Maintenance",
    date: "2026-04-11",
    readTime: "3 min",
    excerpt: "Uplights and step lights define a house at night. They also fail quietly.",
    body: [
      "Exterior lighting is part of the architecture after dark. Failed fittings and yellowed lenses change a façade more than most owners notice.",
      "We check every fitting monthly, keep matched spares, and replace lamps in groups so colour temperature stays consistent.",
    ],
    image: "lanternSteps",
  },
];

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
