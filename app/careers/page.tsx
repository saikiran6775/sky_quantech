import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { LeadForm } from "@/components/lead-form";
import { FeatureGrid, StageFlow, TagList } from "@/components/sections";
import { careers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build technology that solves real problems. Share your profile with our AI, computer vision, software and automation teams.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero {...careers.hero} />

      {/* People */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{careers.people.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              {careers.people.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {careers.people.detail}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Areas of work */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={careers.areas.eyebrow}
              title={careers.areas.title}
              intro={careers.areas.intro}
            />
          </Reveal>
          <div className="mt-12">
            <FeatureGrid items={careers.areas.items} columns={3} />
          </div>
        </Container>
      </section>

      {/* What we look for */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={careers.values.eyebrow}
              title={careers.values.title}
              intro={careers.values.intro}
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {careers.values.items.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 60} className="bg-card p-8">
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Capability landscape */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{careers.landscape.eyebrow}</p>
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
              {careers.landscape.title}
            </h2>
            <div className="mt-7">
              <TagList tags={careers.landscape.tags} />
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {careers.landscape.note}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* How we hire */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={careers.hiring.eyebrow}
              title={careers.hiring.title}
              intro={careers.hiring.intro}
            />
          </Reveal>
          <div className="mt-14">
            <StageFlow stages={careers.hiring.steps} />
          </div>
        </Container>
      </section>

      {/* Apply */}
      <section className="py-20 lg:py-28">
        <Container className="mx-auto max-w-3xl">
          <Reveal className="rounded-2xl border border-border bg-card p-6 sm:p-10">
            <h2 className="font-display text-2xl font-bold">Share your profile</h2>
            <p className="mt-2 text-muted-foreground">
              Tell us about yourself and where you&apos;d like to contribute.
            </p>
            <div className="mt-8">
              <LeadForm variant="careers" />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
