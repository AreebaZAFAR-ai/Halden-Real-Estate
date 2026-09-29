"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

let lenis: Lenis | null = null;

export const getLenis = () => lenis;

/**
 * Owns smooth scrolling and the attribute-driven reveals used across the site:
 *   [data-reveal]         fade + rise
 *   [data-reveal-image]   fade in while the inner image settles from a slight zoom
 *   [data-parallax="n"]   image drifts n% while its section scrolls past
 * Runs once per route. Nothing here is required to read the page.
 */
export function MotionController() {
  const pathname = usePathname();

  // Smooth scroll — created once for the lifetime of the app.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.9, anchors: { offset: -80 } });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis?.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  // Reveals — rebuilt for each page.
  const firstRender = useRef(true);
  useEffect(() => {
    if (!firstRender.current) lenis?.scrollTo(0, { immediate: true, force: true });
    firstRender.current = false;

    const root = document.documentElement;
    if (!root.classList.contains("motion")) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "expo.out",
            stagger: 0.09,
            overwrite: true,
          }),
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-image]").forEach((wrap) => {
        const media = wrap.querySelector("img, video");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: wrap, start: "top 92%", once: true },
        });
        tl.to(wrap, { opacity: 1, duration: 1.1, ease: "power2.out" }, 0);
        if (media) tl.to(media, { scale: 1, duration: 1.8, ease: "expo.out" }, 0);
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 8;
        gsap.fromTo(
          el,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    });

    // Images and fonts change layout after first paint.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
