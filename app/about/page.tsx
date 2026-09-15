import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { differentiators } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who we are and how we work: AI solutions, software development, automation and technology consulting built around real business needs.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Sky Quantech AI"
        title="Technology built around real business challenges"
        intro="We provide AI solutions, software development, automation and technology consulting designed around real business needs — reliable foundations that support your objectives."
      />

      <section className="border-b border-border py-20 lg:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-border shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/about_hero.png"
                alt="Sky Quantech AI team and technology"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={100}>
            <SectionHeading
              eyebrow="Who we are"
              title="A collaborative engineering team"
            />
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>
                We work collaboratively to build reliable, practical technology
                foundations. Our focus is understanding operational context so the
                solutions we design and implement address specific requirements,
                reduce friction and deliver tangible results.
              </p>
              <p>
                We emphasize practical utility and dependable execution across every
                initiative, keeping implementations aligned with your strategic
                priorities and the value they need to deliver over time.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we value"
              title="Principles that shape our work"
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal
                key={d.title}
                delay={(i % 3) * 70}
                className="bg-card p-8"
              >
                <h3 className="font-display text-lg font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
