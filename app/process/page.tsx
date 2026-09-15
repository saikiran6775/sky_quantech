import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { process } from "@/lib/site";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How we work: consultation, analysis, development, implementation and ongoing support.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Systematic delivery"
        title="From challenge to solution"
        intro="Five stages that take a business requirement through to a working, supported solution."
      />

      <section className="py-20 lg:py-28">
        <Container className="max-w-3xl">
          <ol className="relative border-l border-border">
            {process.map((p, i) => (
              <Reveal
                key={p.step}
                as="li"
                delay={i * 60}
                className="relative pb-12 pl-10 last:pb-0"
              >
                <span className="absolute -left-[21px] grid h-10 w-10 place-items-center rounded-full border border-primary bg-background font-display text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <h2 className="font-display text-xl font-semibold">{p.step}</h2>
                <p className="mt-2 text-muted-foreground">{p.detail}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
