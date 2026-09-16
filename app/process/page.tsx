import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { FeatureGrid } from "@/components/sections";
import { processContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How we work: consultation, analysis, development, implementation and ongoing support.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero {...processContent.hero} />

      {/* Discovery foundations */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={processContent.discovery.eyebrow}
              title={processContent.discovery.title}
              intro={processContent.discovery.intro}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {processContent.discovery.items.map((d, i) => (
              <Reveal
                key={d.label}
                delay={i * 70}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <span className="font-display text-4xl font-bold text-primary">
                  {d.label}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {d.detail}
                </p>
                <p className="mt-5 border-t border-border pt-4 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {d.focus}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Delivery lifecycle — the five stages, expanded */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={processContent.lifecycle.eyebrow}
              title={processContent.lifecycle.title}
              intro={processContent.lifecycle.intro}
            />
          </Reveal>

          <ol className="mt-14 space-y-5">
            {processContent.lifecycle.stages.map((s, i) => (
              <Reveal
                key={s.step}
                as="li"
                delay={(i % 3) * 60}
                className="grid gap-6 rounded-2xl border border-border bg-card p-8 lg:grid-cols-12 lg:p-10"
              >
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary font-display text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-bold">{s.step}</h3>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <p className="font-display text-lg font-semibold">{s.headline}</p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {s.detail}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Engagement model */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={processContent.engagement.eyebrow}
              title={processContent.engagement.title}
              intro={processContent.engagement.intro}
            />
          </Reveal>
          <div className="mt-12">
            <FeatureGrid items={processContent.engagement.items} columns={3} />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
