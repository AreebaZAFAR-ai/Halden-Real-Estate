import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Media } from "@/components/ui/Media";
import { EnquiryForm } from "./EnquiryForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your property. We reply within one working day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your home"
        lead="What it is, where it is, and how you would like it cared for. We reply within one working day."
      />

      <section className={`theme-light ${styles.section}`} data-nav-theme="light" aria-label="Enquiry">
        <div className={`container grid ${styles.grid}`}>
          <div className={styles.details}>
            <Media image="lanternSteps" sizes="(min-width: 1024px) 25vw, 100vw" className={styles.media} />
            <dl className={styles.list}>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                </dd>
              </div>
              <div>
                <dt>Telephone</dt>
                <dd>
                  <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Studio</dt>
                <dd>
                  {site.contact.address.join(", ")}
                  <br />
                  <span className="muted">{site.contact.hours}</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className={styles.formCol}>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className={`theme-light ${styles.legal}`} data-nav-theme="light" aria-label="Legal">
        <div className={`container grid ${styles.grid}`}>
          <div id="privacy" className={styles.legalBlock}>
            <SectionLabel as="h2">Privacy</SectionLabel>
            <p>
              We use the details you send only to reply to your enquiry. We never sell or share them, and we delete
              enquiries that do not lead to an engagement after twelve months.
            </p>
          </div>
          <div id="terms" className={styles.legalBlock}>
            <SectionLabel as="h2">Terms</SectionLabel>
            <p>
              Property details on this site are provided for information and do not form part of any contract. Full
              terms of engagement are shared with every management proposal.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
