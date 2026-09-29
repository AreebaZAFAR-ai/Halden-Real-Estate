import { videos } from "@/lib/media";
import { process, stats } from "@/lib/data/content";
import { BackgroundVideo } from "@/components/ui/BackgroundVideo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Stats } from "./Stats";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section className={styles.wrap} data-nav-theme="dark" aria-labelledby="process-title">
      <div className={`theme-dark ${styles.process}`}>
        <div className={`container grid ${styles.grid}`}>
          <figure className={styles.figure} data-reveal-image>
            <BackgroundVideo video={videos.construction} className={styles.video} position="50% 60%" />
            <figcaption className={styles.caption}>From site to handover — every stage recorded.</figcaption>
          </figure>

          <div className={styles.content}>
            <SectionLabel>How we work</SectionLabel>
            <h2 id="process-title" className={styles.title} data-reveal>
              From the first walk-through to every month after
            </h2>
            <ol className={styles.steps}>
              {process.map((step, i) => (
                <li key={step.title} className={styles.step} data-reveal>
                  <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="container">
          <Stats stats={stats} />
        </div>
      </div>
    </section>
  );
}
