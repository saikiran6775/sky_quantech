import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { FeatureGrid, StageFlow } from "@/components/sections";
import { Parallax } from "@/components/parallax";
import { industriesContent } from "@/lib/content";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Technology applied across healthcare, education, manufacturing, retail, finance and government.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero {...industriesContent.hero} />

      {/* Intro + sector index */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{industriesContent.intro.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              {industriesContent.intro.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {industriesContent.intro.detail}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal
                key={ind.name}
                delay={(i % 3) * 60}
                className="group flex items-center gap-4 bg-card p-6 transition-colors hover:bg-secondary/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon name={ind.icon} className="size-5" />
                </span>
                <div>
                  <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-base font-semibold">{ind.name}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Cross-domain composite banner */}
      <section className="border-b border-border">
        <Parallax strength={36} className="relative h-[52vh] min-h-[380px] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/industries_image.png"
            alt="Cross-domain capabilities across rail, energy, manufacturing, healthcare, education and government"
            className="h-[calc(100%+80px)] w-full -translate-y-10 object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/70 via-accent/10 to-accent/30" />
          <Container className="absolute inset-x-0 bottom-0">
            <Reveal className="max-w-2xl pb-14 text-white">
              <h2 className="font-display text-2xl font-bold drop-shadow sm:text-3xl">
                One technology core, applied across six sectors
              </h2>
            </Reveal>
          </Container>
        </Parallax>
      </section>

      {/* Per-sector detail */}
      <div className="divide-y divide-border">
        {industriesContent.sectors.map((s) => (
          <section key={s.name} id={s.name.toLowerCase()} className="py-20 lg:py-24">
            <Container>
              <Reveal className="max-w-3xl">
                <p className="eyebrow">{s.kicker}</p>
                <h2 className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {s.intro}
                </p>
              </Reveal>
              <div className="mt-10">
                <FeatureGrid items={s.items} columns={4} />
              </div>
            </Container>
          </section>
        ))}
      </div>

      {/* Foundation */}
      <section className="border-y border-border py-20 lg:py-28">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{industriesContent.foundation.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              {industriesContent.foundation.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {industriesContent.foundation.detail}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Methodology */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={industriesContent.methodology.eyebrow}
              title={industriesContent.methodology.title}
            />
          </Reveal>
          <div className="mt-14">
            <StageFlow stages={industriesContent.methodology.stages} />
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{industriesContent.philosophy.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              {industriesContent.philosophy.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {industriesContent.philosophy.detail}
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Have an industry challenge?"
        intro="Let's explore how AI, software, and automation can support your organization's specific technical and operational needs."
      />
    </>
  );
}
