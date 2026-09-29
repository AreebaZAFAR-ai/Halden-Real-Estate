"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import type { ImageKey } from "@/lib/media";
import { Media } from "@/components/ui/Media";
import styles from "./GalleryStrip.module.css";

type Frame = { image: ImageKey; shape: "rect" | "circle" | "arch" | "leaf" | "pill"; width: "s" | "m" | "l" };

const frames: Frame[] = [
  { image: "whiteGables", shape: "rect", width: "m" },
  { image: "stoneVillaDusk", shape: "rect", width: "l" },
  { image: "nightVilla", shape: "circle", width: "m" },
  { image: "travertineTower", shape: "leaf", width: "m" },
  { image: "darkModernVilla", shape: "arch", width: "s" },
  { image: "glassStoneHouse", shape: "rect", width: "l" },
  { image: "colonialHouse", shape: "pill", width: "m" },
];

/** A band of photographs with varied masks that drifts sideways as you scroll. */
export function GalleryStrip() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 600px) and (prefers-reduced-motion: no-preference)", () => {
      const el = track.current;
      if (!el) return;
      gsap.fromTo(
        el,
        { x: 0 },
        {
          x: () => -(el.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        },
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={root} className={styles.strip}>
      <ul ref={track} className={styles.track} aria-label="Homes in our care">
        {frames.map((f) => (
          <li key={f.image} className={`${styles.item} ${styles[f.width]}`}>
            <Media image={f.image} sizes="(min-width: 1024px) 30vw, 70vw" className={`${styles.frame} ${styles[f.shape]}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
