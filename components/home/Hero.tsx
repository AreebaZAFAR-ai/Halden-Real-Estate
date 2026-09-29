"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { videos } from "@/lib/media";
import { primaryNav, site } from "@/lib/data/site";
import { BackgroundVideo } from "@/components/ui/BackgroundVideo";
import { Cusp } from "@/components/ui/Cusp";
import { ArrowDown, ArrowUpRight, LogoMark } from "@/components/ui/Icons";
import { getLenis } from "@/components/motion/MotionController";
import styles from "./Hero.module.css";

const leftNav = primaryNav.slice(0, 3);
const rightNav = primaryNav.slice(3, 5);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const q = gsap.utils.selector(root);

      // Entrance: the wordmark rises letter by letter, then the rest settles in.
      const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
      intro
        .from(q("[data-letter]"), { yPercent: 105, duration: 1.6, stagger: 0.06 }, 0.1)
        .from(q("[data-media]"), { scale: 1.12, duration: 2.4 }, 0)
        .from(q("[data-fade]"), { opacity: 0, y: 24, duration: 1.4, stagger: 0.08 }, 0.6)
        .from(q("[data-guide]"), { scaleY: 0, duration: 1.6, stagger: 0.1 }, 0.4);

      // Scroll: the image sinks and deepens while the wordmark lifts away.
      const scroll = { trigger: root.current, start: "top top", end: "bottom top", scrub: true };
      gsap.to(q("[data-media]"), { yPercent: 18, ease: "none", scrollTrigger: scroll });
      gsap.to(q("[data-wordmark]"), { yPercent: -30, ease: "none", scrollTrigger: scroll });
      gsap.to(q("[data-content]"), { yPercent: -40, opacity: 0, ease: "none", scrollTrigger: { ...scroll, end: "60% top" } });
    });
    return () => mm.revert();
  }, []);

  const scrollToStory = () => {
    const target = document.getElementById("story");
    const lenis = getLenis();
    if (lenis && target) lenis.scrollTo(target, { duration: 1.6 });
    else target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={root} className={styles.hero} data-hero data-nav-theme="image" aria-labelledby="hero-title">
      <div className={styles.media} data-media>
        <BackgroundVideo video={videos.villaDusk} className={styles.video} eager position="50% 22%" />
      </div>
      <div className={styles.scrimTop} aria-hidden="true" />
      <div className={styles.scrimBottom} aria-hidden="true" />

      <div className={`container ${styles.frame}`}>
        <p className={styles.wordmark} data-wordmark aria-hidden="true">
          {site.name.toUpperCase().split("").map((letter, i) => (
            <span key={i} className={styles.letterMask}>
              <span className={styles.letter} data-letter>
                {letter}
              </span>
            </span>
          ))}
        </p>

        <nav className={styles.nav} aria-label="Primary" data-fade>
          <ul className={styles.navGroup}>
            {leftNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <ul className={`${styles.navGroup} ${styles.navRight}`}>
            {rightNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className={styles.enquire}>
                Enquire <ArrowUpRight />
              </Link>
            </li>
          </ul>
        </nav>

        <span className={`${styles.guide} ${styles.guideLeft}`} data-guide aria-hidden="true" />
        <span className={`${styles.guide} ${styles.guideRight}`} data-guide aria-hidden="true" />

        <div className={styles.content} data-content>
          <LogoMark className={styles.mark} data-fade />
          <h1 id="hero-title" className={styles.title} data-fade>
            Thoughtful care for
            <br /> properties that matter.
          </h1>
          <p className={styles.sub} data-fade>
            Private residences &amp; considered buildings, managed since {site.established}.
          </p>
        </div>

        <button type="button" className={styles.scroll} onClick={scrollToStory} data-fade>
          <span>Scroll down</span>
          <ArrowDown className={styles.scrollArrow} />
        </button>

        <Cusp shape="down" className={styles.cuspFloat} />
        <Cusp shape="up" className={styles.cuspEdge} />
      </div>
    </section>
  );
}
