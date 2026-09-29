import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate, getInsight, insights } from "@/lib/data/insights";
import { PageHero } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { CTA } from "@/components/home/CTA";
import styles from "../../inner.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getInsight((await params).slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function InsightPage({ params }: Props) {
  const post = getInsight((await params).slug);
  if (!post) notFound();

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} lead={post.excerpt} image={post.image}>
        <p className="meta muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime} read
        </p>
      </PageHero>

      <article className={`theme-light ${styles.sectionTight}`} data-nav-theme="light" aria-label={post.title}>
        <div className={`container grid ${styles.split}`}>
          <div className={styles.headLabel}>
            <SectionLabel>Insight</SectionLabel>
          </div>
          <div className={styles.prose}>
            {post.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ArrowLink href="/insights">All insights</ArrowLink>
          </div>
        </div>
      </article>

      <CTA />
    </>
  );
}
