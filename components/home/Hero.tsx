
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

import { gsap } from "@/lib/gsap";
import { images } from "@/lib/media";
import { primaryNav, site } from "@/lib/data/site";
import { Cusp } from "@/components/ui/Cusp";
import { ArrowUpRight } from "@/components/ui/Icons";

import styles from "./Hero.module.css";

const leftNav = primaryNav.slice(0, 3);
const rightNav = primaryNav.slice(3, 5);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const q = gsap.utils.selector(root);

      // Hero entrance animation
      const intro = gsap.timeline({
        defaults: {
          ease: "expo.out",
        },
      });

      intro
        .from(
          q("[data-media]"),
          {
            scale: 1.08,
            duration: 2.2,
          },
          0
        )
        .from(
          q("[data-letter]"),
          {
            yPercent: 105,
            duration: 1.6,
            stagger: 0.06,
          },
          0.15
        )
        .from(
          q("[data-nav]"),
          {
            opacity: 0,
            y: -15,
            duration: 1.1,
          },
          0.7
        )
        .from(
          q("[data-guide]"),
          {
            scaleY: 0,
            duration: 1.4,
            stagger: 0.1,
          },
          0.4
        );

      // Hero parallax on scroll
      const scrollTrigger = {
        trigger: root.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      };

      gsap.to(q("[data-media]"), {
        yPercent: 18,
        ease: "none",
        scrollTrigger,
      });

      gsap.to(q("[data-wordmark]"), {
        yPercent: -30,
        ease: "none",
        scrollTrigger,
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      className={styles.hero}
      data-hero
      data-nav-theme="image"
      aria-label={`${site.name} hero`}
    >
      {/* Hero Image */}
      <div className={styles.media} data-media>
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          quality={100}
          className={styles.image}
          style={{
            objectPosition: images.hero.position,
          }}
        />
      </div>

      {/* Top Navigation */}
      <div className={`container ${styles.frame}`}>
        <nav
          className={styles.nav}
          aria-label="Primary navigation"
          data-nav
        >
          <ul className={styles.navGroup}>
            {leftNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul
            className={`${styles.navGroup} ${styles.navRight}`}
          >
            {rightNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/contact"
                className={styles.enquire}
              >
                <span>Enquire</span>
                <ArrowUpRight />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Center MODISCH */}
        <div
          className={styles.wordmark}
          data-wordmark
          aria-label={site.name}
        >
          {site.name
            .toUpperCase()
            .split("")
            .map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className={styles.letterMask}
              >
                <span
                  className={styles.letter}
                  data-letter
                >
                  {letter}
                </span>
              </span>
            ))}
        </div>

        {/* Architectural Guides */}
        <span
          className={`${styles.guide} ${styles.guideLeft}`}
          data-guide
          aria-hidden="true"
        />

        <span
          className={`${styles.guide} ${styles.guideRight}`}
          data-guide
          aria-hidden="true"
        />

        {/* Cusp */}
        <Cusp
          shape="down"
          className={styles.cuspFloat}
        />

        <Cusp
          shape="up"
          className={styles.cuspEdge}
        />
      </div>
    </section>
  );
}

