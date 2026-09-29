import Image from "next/image";
import { images } from "@/lib/media";
import { site } from "@/lib/data/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { LogoMark } from "@/components/ui/Icons";
import { Media } from "@/components/ui/Media";
import { GalleryStrip } from "./GalleryStrip";
import styles from "./Story.module.css";

export function Story() {
  return (
    <section id="story" className={`theme-light ${styles.story}`} data-nav-theme="light" aria-labelledby="story-title">
      <div className={`container grid ${styles.grid}`}>
        <SectionLabel className={styles.label}>Our story</SectionLabel>

        <h2 id="story-title" className={styles.statement} data-reveal>
          At {site.name}, we pair precise property management with personal care{" "}
          <span className={styles.soft}>
            to protect value and simplify ownership, while keeping every home{" "}
            <span className={styles.chip} aria-hidden="true">
              <Image src={images.interiorSunset.src} alt="" fill sizes="96px" className={styles.chipImage} />
            </span>{" "}
            <span className={styles.chipMark} aria-hidden="true">
              <LogoMark />
            </span>{" "}
            ready for the life lived in it.
          </span>
        </h2>

        <Media image="gardenCottage" sizes="(min-width: 1024px) 22vw, 60vw" className={styles.pill} />

        <p className={`meta ${styles.since}`} data-reveal>
          \Established since {site.established}
        </p>

        <div className={styles.aside} data-reveal>
          <p className={styles.asideText}>
            We look after every property as if it were our own — with precision, discretion and transparency — so
            owners can enjoy the house rather than manage it.
          </p>
          <ArrowLink href="/about" variant="rule">
            Learn more about us
          </ArrowLink>
        </div>
      </div>

      <GalleryStrip />
    </section>
  );
}
