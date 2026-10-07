import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" {...base} {...props}>
      <path d="M2 8h12M9.5 3.5 14 8l-4.5 4.5" />
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" {...base} {...props}>
      <path d="M8 2v12M3.5 9.5 8 14l4.5-4.5" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" {...base} {...props}>
      <path d="M4 12 12 4M5.5 4H12v6.5" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" {...base} {...props}>
      <path d="M8 2v12M2 8h12" />
    </svg>
  );
}

/** Small architectural glyph used beside eyebrow labels. */
export function BuildingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" {...base} {...props}>
      <path d="M2.5 14h11M4 14V3.5h5V14M9 7h3v7M5.75 5.5h1.5M5.75 8h1.5M5.75 10.5h1.5" />
    </svg>
  );
}

/** Halden mark: an arched doorway set on a horizon, inside a ring. */
export function LogoMark(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" {...base} strokeWidth={1.4} {...props}>
      <circle cx="20" cy="20" r="18.5" />
      <path d="M13.5 29V19.5a6.5 6.5 0 0 1 13 0V29" />
      <path d="M20 29v-6.5" />
      <path d="M8 29h24" />
    </svg>
  );
}
