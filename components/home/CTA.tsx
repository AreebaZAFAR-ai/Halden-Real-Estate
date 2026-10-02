import { videos } from "@/lib/media";
import { BackgroundVideo } from "@/components/ui/BackgroundVideo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import styles from "./CTA.module.css";

type CTAProps = {
  title?: string;
  text?: string;
  linkLabel?: string;
  href?: string;
};

/**
 * Closing section, centred: copy on the middle line and the portrait video in a
 * small arched frame — kept under its native width so it stays sharp.
 * Reused at the end of every page.
 */
export function CTA({
  title = "Take the complexity out of property ownership",
  text = "Tell us about your home, what matters to you and how you would like it cared for. We will take it from there — thoughtfully, and with care.",
  linkLabel = "Let’s get started",
  href = "/contact",
}: CTAProps) {
  return (
    <section className={`theme-dark ${styles.section}`} data-nav-theme="dark" aria-labelledby="cta-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <SectionLabel>Get started now</SectionLabel>
          <h2 id="cta-title" className={styles.title} data-reveal>
            {title}
          </h2>
          <p className={styles.text} data-reveal>
            {text}
          </p>
          <div className={styles.action} data-reveal>
            <ArrowLink href={href} variant="rule">
              {linkLabel}
            </ArrowLink>
          </div>
        </div>

        <div className={styles.frame}>
          <BackgroundVideo video={videos.desertResidence} className={styles.video} />
        </div>
      </div>
    </section>
  );
}
