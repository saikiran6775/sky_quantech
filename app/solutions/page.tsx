import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { FeatureGrid, StageFlow } from "@/components/sections";
import { solutions } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "AI solutions, asset management, automation and technology consulting built around the problem you actually need to solve.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero {...solutions.hero} />

      {/* Overview — four ways we help */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={solutions.overview.eyebrow}
              title={solutions.overview.title}
              intro={solutions.overview.intro}
            />
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {solutions.overview.items.map((it, i) => (
              <Reveal
                key={it.title}
                as="li"
                delay={(i % 4) * 60}
                className="bg-card p-8"
              >
                <span className="font-mono text-xs tabular-nums text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {it.detail}
                </p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Deep dives */}
      {solutions.detail.map((d, i) => {
        const flip = i % 2 === 1;
        return (
          <section key={d.slug} id={d.slug} className="border-b border-border py-20 lg:py-28">
            <Container>
              <div className="grid items-center gap-14 lg:grid-cols-12">
                <Reveal className={cn("lg:col-span-5", flip && "lg:order-2")}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={d.image} alt="" className="h-full w-full object-cover" />
                  </div>
                </Reveal>
                <Reveal
                  className={cn("lg:col-span-7", flip && "lg:order-1")}
                  delay={100}
                >
                  <p className="eyebrow">{d.kicker}</p>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
                    {d.title}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    {d.intro}
                  </p>
                </Reveal>
              </div>

              <div className="mt-12">
                <FeatureGrid
                  items={d.items}
                  columns={d.items.length >= 5 ? 3 : 4}
                />
              </div>

              {"flow" in d && d.flow && (
                <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-10">
                  <p className="eyebrow">{d.flow.eyebrow}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold">
                    {d.flow.title}
                  </h3>
                  <div className="mt-10">
                    <StageFlow
                      stages={d.flow.stages.map((s) => ({
                        label: s.label,
                        detail: s.detail,
                      }))}
                    />
                  </div>
                </div>
              )}
            </Container>
          </section>
        );
      })}

      {/* Integration statement */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{solutions.integration.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              {solutions.integration.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {solutions.integration.intro}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Delivery lifecycle */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={solutions.lifecycle.eyebrow}
              title={solutions.lifecycle.title}
            />
          </Reveal>
          <ol className="mt-14 grid gap-6 md:grid-cols-5">
            {solutions.lifecycle.steps.map((s, i) => (
              <Reveal key={s.step} as="li" delay={i * 70}>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary font-display text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  {i < solutions.lifecycle.steps.length - 1 && (
                    <span className="hidden h-px flex-1 bg-border md:block" />
                  )}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">
                  {s.step}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.detail}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-wider text-primary">
                  {s.tag}
                </p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand
        title="Not sure where to start?"
        intro="Tell us the challenge. We'll help you find the most practical path forward."
      />
    </>
  );
}
