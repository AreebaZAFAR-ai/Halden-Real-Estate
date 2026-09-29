"use client";

import { useState } from "react";
import { site } from "@/lib/data/site";
import { ArrowRight } from "@/components/ui/Icons";
import styles from "./contact.module.css";

const propertyTypes = ["Private residence", "Apartment", "Holiday home", "Portfolio", "Other"];

/**
 * Enquiry form. There is no backend yet: on submit it opens the visitor's
 * email client with the enquiry pre-filled, so nothing is silently lost.
 */
export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "—"}`,
      `Property: ${data.get("type")} — ${data.get("location") || "—"}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `Enquiry from ${data.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Name</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Telephone (optional)</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className={styles.field}>
          <span>Property type</span>
          <select name="type" defaultValue={propertyTypes[0]}>
            {propertyTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>
      <label className={styles.field}>
        <span>Location</span>
        <input name="location" placeholder="City or region" />
      </label>
      <label className={styles.field}>
        <span>How can we help?</span>
        <textarea name="message" rows={5} required />
      </label>

      <div className={styles.submitRow}>
        <button type="submit" className={styles.submit}>
          Send enquiry <ArrowRight />
        </button>
        <p className={styles.status} role="status">
          {sent ? "Your email app should now be open with the enquiry ready to send." : ""}
        </p>
      </div>
    </form>
  );
}
