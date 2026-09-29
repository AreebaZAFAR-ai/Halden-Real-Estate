import { PageHero } from "@/components/ui/PageHero";
import { ArrowLink } from "@/components/ui/ArrowLink";

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="This room is not on the plan." lead="The page you were looking for has moved or never existed.">
      <ArrowLink href="/">Return home</ArrowLink>
    </PageHero>
  );
}
