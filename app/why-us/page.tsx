import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { differentiators } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Innovation, expertise, a customer-focused approach, quality and reliability, and cost-effective solutions.",
};

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our value proposition"
        title="Why choose Sky Quantech AI"
        intro="We focus on practical, dependable technology implementations tailored to solve real organizational challenges and deliver measurable value."
      />

      <section className="border-b border-border py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Our core focus
            </h2>
            <p className="mt-4 text-muted-foreground">
              Reliable software, intelligent automation and AI solutions, delivered
              through direct collaboration with our engineering team — so the people
              building your solution are the people who understand it.
            </p>
          </Reveal>
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((d, i) => (
                <Reveal
                  key={d.title}
                  delay={(i % 2) * 80}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="font-display text-lg font-semibold">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {d.detail}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
