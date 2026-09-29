import type { Stat } from "@/lib/data/content";
import { CountUp } from "@/components/ui/CountUp";
import styles from "./Stats.module.css";

export function Stats({ stats }: { stats: Stat[] }) {
  return (
    <dl className={styles.stats}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.stat} data-reveal>
          <dt className={styles.label}>{stat.label}</dt>
          <dd className={styles.value}>
            <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
