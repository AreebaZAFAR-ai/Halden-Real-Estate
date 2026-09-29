import type { ImageKey } from "@/lib/media";

export type PropertyStatus = "Under management" | "Available to let" | "Recently placed";

export type Property = {
  slug: string;
  name: string;
  location: string;
  type: string;
  status: PropertyStatus;
  year: number;
  area: string;
  bedrooms: number;
  summary: string;
  description: string[];
  image: ImageKey;
  gallery: ImageKey[];
};

export const properties: Property[] = [
  {
    slug: "linden-house",
    name: "Linden House",
    location: "Blankenese, Hamburg",
    type: "Private residence",
    status: "Under management",
    year: 2019,
    area: "420 m²",
    bedrooms: 5,
    summary: "A travertine entrance court and timber soffit, kept exactly as its architects intended.",
    description: [
      "Linden House sits behind a low travertine wall on the Elbe slopes. We have looked after it since handover — seasonal façade care, landscape, and a quiet schedule of preventive maintenance.",
      "The owners live abroad for much of the year. Our role is to make the house feel lived in: aired, lit, tended and ready for their return.",
    ],
    image: "travertineEntrance",
    gallery: ["lanternSteps", "interiorSunset"],
  },
  {
    slug: "villa-serein",
    name: "Villa Serein",
    location: "Maó, Menorca",
    type: "Coastal villa",
    status: "Available to let",
    year: 2021,
    area: "360 m²",
    bedrooms: 4,
    summary: "An outdoor room built around fire and stone, open to the evening sea air.",
    description: [
      "A low villa arranged around a sunken terrace and fire pit. We manage seasonal lettings, guest arrival and every detail of the outdoor spaces.",
      "Between stays the house is inspected, serviced and photographed so its owners always know its condition.",
    ],
    image: "firepitTerrace",
    gallery: ["interiorIvory", "zenCourt"],
  },
  {
    slug: "halden-court",
    name: "Halden Court",
    location: "Hellerup, Copenhagen",
    type: "Courtyard house",
    status: "Under management",
    year: 2017,
    area: "310 m²",
    bedrooms: 4,
    summary: "A reflecting pool, a gravel garden and stone that asks for patient care.",
    description: [
      "Water, stone and planting define Halden Court. Keeping the pool clear and the stone unmarked is a year-round discipline we coordinate with trusted specialists.",
      "Every visit is logged, every contractor accompanied.",
    ],
    image: "zenCourt",
    gallery: ["limestoneWall", "interiorAtrium"],
  },
  {
    slug: "maison-arcade",
    name: "Maison Arcade",
    location: "Neuilly-sur-Seine, Paris",
    type: "Classical residence",
    status: "Recently placed",
    year: 2016,
    area: "540 m²",
    bedrooms: 6,
    summary: "A tall arched window, lit every evening, and a household that runs without friction.",
    description: [
      "A classical residence with a contemporary interior. We placed long-term tenants in spring and now manage the relationship between family, owner and household staff.",
      "Lighting, security and the timber deck are maintained on a fixed calendar.",
    ],
    image: "archedResidenceNight",
    gallery: ["archedResidenceDay", "interiorAtrium"],
  },
  {
    slug: "obsidian-house",
    name: "Obsidian House",
    location: "Döbling, Vienna",
    type: "Contemporary villa",
    status: "Under management",
    year: 2022,
    area: "480 m²",
    bedrooms: 5,
    summary: "Dark cantilevers over white stone — a house that shows every mark, and has none.",
    description: [
      "A crisp modern villa where upkeep is part of the architecture. Glazing, dark render and pale stone steps are cared for on a monthly cycle.",
      "We also coordinate the smart-home systems and the owners' contractor warranties.",
    ],
    image: "darkModernVilla",
    gallery: ["nightVilla", "interiorSunset"],
  },
  {
    slug: "stonewell-residence",
    name: "Stonewell Residence",
    location: "Küsnacht, Zürich",
    type: "Family home",
    status: "Available to let",
    year: 2020,
    area: "390 m²",
    bedrooms: 4,
    summary: "Hand-dressed limestone and wide stone steps, calm in every season.",
    description: [
      "A family home above the lake, clad in textured limestone. We are preparing it for a long-term let and will stay on to manage it for the owners.",
      "Viewings are by appointment and always accompanied.",
    ],
    image: "limestoneWall",
    gallery: ["glassStoneHouse", "interiorIvory"],
  },
];

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);
