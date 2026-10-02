import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, insights } from "@/lib/data/insights";
import { PageHero } from "@/components/ui/PageHero";
import { Media } from "@/components/ui/Media";
import { ArrowRight } from "@/components/ui/Icons";
import { CTA } from "@/components/home/CTA";
import inner from "../inner.module.css";
import styles from "./insights.module.css";

export const metadata: Metadata = {
  title: "Insights",
  description: "Notes on caring for considered homes — materials, maintenance, lettings and ownership.",
};

export default function InsightsPage() {
  const [feature, ...rest] = insights;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        topLabel
        title="Notes on caring for considered homes"
        lead="Short, practical writing from our team on materials, maintenance and the quieter side of ownership."
      />

      <section className={`theme-light ${inner.sectionTight}`} data-nav-theme="light" aria-label="Articles">
        <div className="container">
          <article className={`grid ${styles.feature}`}>
            <Link href={`/insights/${feature.slug}`} className={styles.featureLink}>
              <Media image={feature.image} sizes="(min-width: 1024px) 60vw, 100vw" className={styles.featureMedia} />
              <div className={styles.featureText}>
                <p className={styles.meta}>
                  {feature.category} · <time dateTime={feature.date}>{formatDate(feature.date)}</time>
                </p>
                <h2 className={styles.featureTitle}>{feature.title}</h2>
                <p className={styles.excerpt}>{feature.excerpt}</p>
                <span className={styles.read}>
                  Read · {feature.readTime} <ArrowRight />
                </span>
              </div>
            </Link>
          </article>

          <ol className={styles.list}>
            {rest.map((post) => (
              <li key={post.slug} data-reveal>
                <Link href={`/insights/${post.slug}`} className={styles.row}>
                  <Media image={post.image} sizes="160px" className={styles.thumb} reveal={false} />
                  <p className={styles.meta}>
                    {post.category}
                    <br />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </p>
                  <h2 className={styles.rowTitle}>{post.title}</h2>
                  <ArrowRight className={styles.arrow} />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA />
    </>
  );
}
