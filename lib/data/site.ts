export type NavItem = { label: string; href: string };

export const site = {
  name: "Modisch",
  legalName: "Modisch Property Care",
  tagline: "Thoughtful care for properties that matter.",
  description:
    "Modisch manages private residences and considered buildings with precision, discretion and genuine care — protecting value and simplifying ownership.",
  established: 2012,
  contact: {
    email: "hello@modisch.studio",
    phone: "+49 40 2286 1140",
    phoneHref: "+494022861140",
    address: ["Elbchaussee 118", "22763 Hamburg"],
    hours: "Mon – Fri, 9:00 – 18:00",
  },
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
  ],
} as const;

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Properties", href: "/properties" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Privacy", href: "/contact#privacy" },
  { label: "Terms", href: "/contact#terms" },
];
