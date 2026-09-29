import type { ImageKey } from "@/lib/media";

export type Value = {
  title: string;
  text: string;
  image: ImageKey;
  detail: ImageKey;
};

export const values: Value[] = [
  {
    title: "Integrity",
    text: "We lead with honesty and accountability in every decision, and we tell owners what they need to hear — not only what they want to.",
    image: "interiorSunset",
    detail: "travertineEntrance",
  },
  {
    title: "Precision",
    text: "Every inspection is recorded, every invoice checked, every contractor accompanied. Care is a matter of detail.",
    image: "limestoneWall",
    detail: "interiorAtrium",
  },
  {
    title: "Community",
    text: "Good buildings make good neighbours. We foster respectful relationships between residents, owners and the streets they share.",
    image: "whiteGables",
    detail: "gardenCottage",
  },
  {
    title: "Sustainability",
    text: "We favour repair over replacement and plan for energy-efficient upgrades that protect both value and the long-term wellbeing of a place.",
    image: "zenCourt",
    detail: "firepitTerrace",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Owning the house used to be a second job. Now it is simply a home we look forward to returning to. Nothing is missed.",
    name: "Helena Voss",
    role: "Owner, Blankenese",
  },
  {
    quote:
      "Their reports are the clearest I have ever received. I know the condition of every room without having to ask.",
    name: "Marc Aubert",
    role: "Owner, Neuilly-sur-Seine",
  },
  {
    quote:
      "As residents we felt looked after from the first viewing. Requests are answered within the hour, always kindly.",
    name: "Sofie Lind",
    role: "Resident, Hellerup",
  },
];

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 14, label: "Years of quiet, careful management" },
  { value: 320, suffix: "+", label: "Homes and buildings in our care" },
  { value: 97, suffix: "%", label: "Owners who renew with us each year" },
  { value: 1, prefix: "< ", suffix: " hr", label: "Average response to residents" },
];

export type Step = {
  title: string;
  text: string;
};

export const process: Step[] = [
  { title: "Survey", text: "We walk the property with you and record its condition, room by room." },
  { title: "Plan", text: "A care calendar written for its materials, systems and the way you live." },
  { title: "Tend", text: "Inspections, maintenance and residents, handled by one accountable team." },
  { title: "Report", text: "Clear monthly reporting, so you always know — without needing to ask." },
];
