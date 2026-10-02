import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Story } from "@/components/home/Story";
import { Values } from "@/components/home/Values";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About",
  description: "A small team that manages private residences and considered buildings with precision and genuine care.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        topLabel
        title="Property management, considered differently."
        lead="Since 2012 we have looked after homes as if they were our own — quietly, precisely, and with the owner always in the picture."
        image="interiorAtrium"
        split
      />
      <Story />
      <Values />
      <CTA title="Let’s talk about your home" />
    </>
  );
}
