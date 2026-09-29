import { Hero } from "@/components/home/Hero";
import { Story } from "@/components/home/Story";
import { Services } from "@/components/home/Services";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { Values } from "@/components/home/Values";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Story />
      <Services />
      <FeaturedProperties />
      <Process />
      <Testimonials />
      <Values />
      <CTA />
    </>
  );
}
