import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { CtaBand } from "@/components/cta-band";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Technology applied across healthcare, education, manufacturing, retail, finance and government.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Domain expertise"
        title="Technology that adapts to your industry"
        intro="The same engineering discipline, shaped to the operational reality of each sector we work in."
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal
                key={ind.name}
                delay={(i % 3) * 70}
                className="group flex flex-col gap-3 bg-card p-8 transition-colors hover:bg-secondary/40"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon name={ind.icon} className="size-6" />
                </span>
                <h2 className="font-display text-xl font-semibold">{ind.name}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {ind.blurb}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Don't see your sector?"
        intro="Our approach transfers across domains. Tell us about your operations and we'll take it from there."
      />
    </>
  );
}
