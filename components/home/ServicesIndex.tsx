import Link from "next/link";
import type { Service } from "@/lib/data/services";
import { Media } from "@/components/ui/Media";
import { ArrowRight } from "@/components/ui/Icons";
import styles from "./ServicesIndex.module.css";

/** Large numbered rows; each reveals its photograph on hover (desktop) or inline (mobile). */
export function ServicesIndex({ services, startAt = 0 }: { services: Service[]; startAt?: number }) {
  return (
    <ol className={styles.list}>
      {services.map((service, i) => (
        <li key={service.slug} className={styles.row} data-reveal>
          <Link href={`/services/${service.slug}`} className={styles.link}>
            <span className={styles.index}>{String(startAt + i + 1).padStart(2, "0")}</span>
            <span className={styles.title}>{service.title}</span>
            <span className={styles.summary}>{service.summary}</span>
            <ArrowRight className={styles.arrow} />
            <Media image={service.image} sizes="240px" className={styles.preview} reveal={false} decorative />
          </Link>
        </li>
      ))}
    </ol>
  );
}
