"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { primaryNav, site } from "@/lib/data/site";
import { getLenis } from "@/components/motion/MotionController";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Logo } from "./Logo";
import styles from "./Header.module.css";

type Theme = "light" | "dark" | "image";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

/**
 * Fixed header. On the homepage it stays out of the way while the hero's own
 * split navigation is on screen, then slides in. It always takes the colour of
 * the section beneath it (sections declare `data-nav-theme`), and tucks away
 * while scrolling down.
 */
export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const [theme, setTheme] = useState<Theme>("light");
  const [overHero, setOverHero] = useState(isHome);
  const [tucked, setTucked] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  // Track scroll position and the section under the header.
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const h = headerRef.current?.offsetHeight ?? 72;

      const hero = document.querySelector<HTMLElement>("[data-hero]");
      const heroEnd = hero ? hero.offsetTop + hero.offsetHeight - h : 0;
      setOverHero(Boolean(hero) && y < heroEnd * 0.9);

      setSolid(y > 8);
      if (Math.abs(y - lastY) > 4) {
        setTucked(y > lastY && y > window.innerHeight * 0.6);
        lastY = y;
      }

      const probe = document
        .elementsFromPoint(window.innerWidth / 2, h / 2)
        .find((el) => !headerRef.current?.contains(el))
        ?.closest<HTMLElement>("[data-nav-theme]");
      setTheme((probe?.dataset.navTheme as Theme) ?? "light");
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  const close = useCallback(() => setOpen(false), []);

  // Close the menu on navigation.
  useEffect(() => close(), [pathname, close]);

  // Menu: lock scroll, trap Escape, move focus in and back out.
  useEffect(() => {
    if (!open) return;
    const lenis = getLenis();
    lenis?.stop();
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();
    const toggle = toggleRef.current;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lenis?.start();
      toggle?.focus();
    };
  }, [open]);

  const state = open ? "open" : overHero ? "hero" : tucked ? "tucked" : "shown";

  return (
    <header
      ref={headerRef}
      className={styles.header}
      data-state={state}
      data-theme={open ? "dark" : theme}
      data-solid={solid && !overHero ? "" : undefined}
      data-home={isHome ? "" : undefined}
    >
      <div className={`container ${styles.bar}`}>
        <Logo className={styles.logo} onClick={close} />

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.links}>
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.link}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contact" className={styles.cta}>
          Enquire <ArrowUpRight />
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
          <span className={styles.toggleLabel} aria-hidden="true">
            {open ? "Close" : "Menu"}
          </span>
          <span className={styles.toggleLines} aria-hidden="true" />
        </button>
      </div>

      <div id="site-menu" ref={menuRef} className={styles.menu} hidden={!open} data-lenis-prevent>
        <nav aria-label="Mobile" className={`container ${styles.menuInner}`}>
          <ol className={styles.menuList}>
            {primaryNav.map((item, i) => (
              <li key={item.href} style={{ "--i": i } as React.CSSProperties}>
                <Link
                  href={item.href}
                  className={styles.menuLink}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  onClick={close}
                >
                  <span className={styles.menuIndex}>{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
          <div className={styles.menuFoot}>
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
