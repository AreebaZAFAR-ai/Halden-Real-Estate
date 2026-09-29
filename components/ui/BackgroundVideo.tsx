"use client";

import { useEffect, useRef } from "react";
import type { VideoAsset } from "@/lib/media";

type BackgroundVideoProps = {
  video: VideoAsset;
  className?: string;
  /** Load eagerly (hero) rather than when scrolled near. */
  eager?: boolean;
  position?: string;
};

/**
 * Muted, looping ambient video. Plays only while visible, never plays for
 * reduced-motion users (they keep the poster frame), and is hidden from
 * assistive tech because it carries no information.
 */
export function BackgroundVideo({ video, className, eager, position = "50% 50%" }: BackgroundVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (el.preload !== "auto") el.preload = "auto";
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={video.poster}
      muted
      loop
      playsInline
      preload={eager ? "auto" : "none"}
      aria-hidden="true"
      tabIndex={-1}
      style={{ objectFit: "cover", objectPosition: position }}
    >
      <source src={video.src} type="video/mp4" />
    </video>
  );
}
