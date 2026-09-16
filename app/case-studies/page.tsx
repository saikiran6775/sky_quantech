import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { FeatureGrid, TagList } from "@/components/sections";
import { caseStudies } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "AI and computer-vision inspection applications across railway overhead equipment, rolling stock and power-grid infrastructure.",
};

function Chain({ items }: { items: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
      {items.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium">
            {s}
          </span>
          {i < items.length - 1 && (
            <ChevronRight className="size-3.5 text-muted-foreground" aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero {...caseStudies.hero} />

      {/* Project index */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={caseStudies.overview.eyebrow}
              title={caseStudies.overview.title}
              intro={caseStudies.overview.intro}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <a
                  href={`#${p.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[11px] font-medium backdrop-blur">
                      Illustrative
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="font-mono text-[11px] tabular-nums text-primary">
                      {String(i + 1).padStart(2, "0")} · {p.kicker}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.detail}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Full project write-ups */}
      {caseStudies.features.map((f, idx) => (
        <section
          key={f.slug}
          id={f.slug}
          className="scroll-mt-24 border-b border-border py-20 lg:py-28"
        >
          <Container>
            <Reveal className="max-w-3xl">
              <p className="eyebrow">{f.kicker}</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
                {f.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {f.intro}
              </p>
            </Reveal>

            {/* Challenge */}
            <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
              <Reveal
                className={cn("lg:col-span-6", idx % 2 === 1 && "lg:order-2")}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.image} alt="" className="h-full w-full object-cover" />
                </div>
              </Reveal>
              <Reveal
                className={cn("lg:col-span-6", idx % 2 === 1 && "lg:order-1")}
                delay={100}
              >
                <p className="eyebrow">{f.challenge.label}</p>
                <h3 className="mt-3 font-display text-2xl font-bold">
                  {f.challenge.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {f.challenge.detail}
                </p>
                <p className="mt-6 rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
                  {f.challenge.note}
                </p>
              </Reveal>
            </div>

            {/* Pipeline */}
            <div className="mt-16">
              <Reveal>
                <p className="eyebrow">{f.pipeline.eyebrow}</p>
                <h3 className="mt-3 font-display text-2xl font-bold">
                  {f.pipeline.title}
                </h3>
              </Reveal>
              <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {f.pipeline.steps.map((s, i) => (
                  <Reveal
                    key={s.label}
                    as="li"
                    delay={(i % 3) * 60}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <span className="font-mono text-xs tabular-nums text-primary">
                      {String(i + 1).padStart(2, "0")} · {s.label}
                    </span>
                    <h4 className="mt-3 font-display text-base font-semibold">
                      {s.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.detail}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>

            {/* Taxonomy (OHE) */}
            {"taxonomy" in f && f.taxonomy && (
              <Reveal className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-10">
                <p className="eyebrow">{f.taxonomy.eyebrow}</p>
                <h3 className="mt-3 font-display text-2xl font-bold">
                  {f.taxonomy.title}
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                  {f.taxonomy.intro}
                </p>
                <div className="mt-7">
                  <TagList tags={f.taxonomy.items} />
                </div>
              </Reveal>
            )}

            {/* Hardware classes (power grid) */}
            {"classes" in f && f.classes && (
              <div className="mt-16">
                <Reveal>
                  <p className="eyebrow">{f.classes.eyebrow}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold">
                    {f.classes.title}
                  </h3>
                </Reveal>
                <div className="mt-10">
                  <FeatureGrid items={f.classes.items} columns={3} />
                </div>
              </div>
            )}

            {/* Notes */}
            {"notes" in f && f.notes && (
              <div className="mt-16 grid gap-6 lg:grid-cols-2">
                {f.notes.map((n) => (
                  <Reveal
                    key={n.title}
                    className="rounded-2xl border border-border bg-card p-8"
                  >
                    <p className="eyebrow">{n.eyebrow}</p>
                    <h3 className="mt-3 font-display text-lg font-semibold">
                      {n.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {n.detail}
                    </p>
                  </Reveal>
                ))}
              </div>
            )}

            {/* Evidence chain */}
            {"chain" in f && f.chain && (
              <Reveal className="mt-12">
                <Chain items={f.chain} />
              </Reveal>
            )}
          </Container>
        </section>
      ))}

      {/* Convergence */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{caseStudies.convergence.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              {caseStudies.convergence.title}
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              {caseStudies.convergence.detail}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.convergence.environments.map((e, i) => (
              <Reveal
                key={e}
                delay={i * 70}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  Environment {String.fromCharCode(65 + i)}
                </span>
                <p className="mt-2 font-display text-lg font-semibold">{e}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 rounded-2xl border border-border bg-card p-8 text-center">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
              Core computational engine
            </p>
            <div className="mt-5 flex justify-center">
              <TagList tags={caseStudies.convergence.core} />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Ecosystem */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={caseStudies.ecosystem.eyebrow}
              title={caseStudies.ecosystem.title}
              intro={caseStudies.ecosystem.note}
            />
          </Reveal>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.ecosystem.stages.map((s, i) => (
              <Reveal
                key={s.label}
                as="li"
                delay={(i % 3) * 60}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="font-mono text-xs tabular-nums text-primary">
                  {String(i + 1).padStart(2, "0")} · {s.label}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.detail}
                </p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand
        title="Have an inspection challenge?"
        intro="Tell us about your assets and workflows, and we'll explore a practical approach."
      />
    </>
  );
}
