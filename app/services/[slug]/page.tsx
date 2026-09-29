import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ServicesIndex } from "@/components/home/ServicesIndex";
import { CTA } from "@/components/home/CTA";
import styles from "../../inner.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  return service ? { title: service.title, description: service.summary } : {};
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} lead={service.intro} image={service.image}>
        <ArrowLink href="/services">All services</ArrowLink>
      </PageHero>

      <section className={`theme-light ${styles.sectionTight}`} data-nav-theme="light" aria-labelledby="included">
        <div className="container">
          <div className={`grid ${styles.head}`}>
            <SectionLabel className={styles.headLabel}>What’s included</SectionLabel>
            <h2 id="included" className={styles.headTitle} data-reveal>
              {service.summary}
            </h2>
          </div>
          <div className="grid">
            <ul className={`${styles.includes} ${styles.includesCol}`}>
              {service.includes.map((item, i) => (
                <li key={item} data-reveal>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`theme-dark ${styles.section}`} data-nav-theme="dark" aria-labelledby="more-services">
        <div className="container">
          <div className={`grid ${styles.head}`}>
            <SectionLabel className={styles.headLabel}>Also from us</SectionLabel>
            <h2 id="more-services" className={styles.headTitle} data-reveal>
              Other ways we can help
            </h2>
          </div>
          <ServicesIndex services={others} />
        </div>
      </section>

      <CTA />
    </>
  );
}
