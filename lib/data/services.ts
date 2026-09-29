import type { ImageKey } from "@/lib/media";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  includes: string[];
  image: ImageKey;
};

export const services: Service[] = [
  {
    slug: "property-management",
    title: "Property management",
    summary: "Day-to-day stewardship of your home, handled with the care you would give it yourself.",
    intro:
      "One team, one point of contact and a clear record of everything that happens at your property — so ownership feels simple again.",
    includes: [
      "A dedicated property manager",
      "Scheduled inspections with photographic reports",
      "Key holding and accompanied access",
      "Utilities, insurance and compliance oversight",
    ],
    image: "glassStoneHouse",
  },
  {
    slug: "tenant-and-owner-care",
    title: "Tenant & owner care",
    summary: "Careful placement and a relationship that stays considerate long after move-in.",
    intro:
      "We find residents who will look after your home, and we look after them in turn — responsive, discreet and always clear.",
    includes: [
      "Marketing with editorial photography",
      "Thorough referencing and viewings",
      "Tenancy agreements and renewals",
      "One-hour response for residents",
    ],
    image: "interiorIvory",
  },
  {
    slug: "financial-stewardship",
    title: "Financial stewardship",
    summary: "Transparent accounts, predictable costs and reporting you can read in a minute.",
    intro:
      "Rent collection, supplier payments and budgets managed with precision, reported monthly in plain language.",
    includes: [
      "Rent collection and reconciliation",
      "Annual budgets and service-charge planning",
      "Monthly owner statements",
      "Year-end packs for your accountant",
    ],
    image: "travertineTower",
  },
  {
    slug: "maintenance-coordination",
    title: "Maintenance coordination",
    summary: "Preventive care and trusted specialists, so small things never become large ones.",
    intro:
      "A maintenance calendar written for your building's materials, and a network of craftspeople we have worked with for years.",
    includes: [
      "Planned preventive maintenance",
      "Vetted, insured contractors",
      "24-hour emergency response",
      "Project management for refurbishments",
    ],
    image: "lanternSteps",
  },
  {
    slug: "property-advisory",
    title: "Property advisory",
    summary: "Independent guidance on acquisitions, lettings strategy and long-term value.",
    intro:
      "Measured advice before you buy, let, renovate or sell — grounded in how buildings actually age.",
    includes: [
      "Pre-purchase condition reviews",
      "Rental valuations and positioning",
      "Refurbishment scoping",
      "Long-term asset planning",
    ],
    image: "stoneVillaDusk",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
