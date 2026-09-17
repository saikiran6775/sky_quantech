import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { ArrowRight, Check, Plus } from "lucide-react";
import { StageFlow } from "@/components/sections";
import { whyUs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Innovation, expertise, a customer-focused approach, quality and reliability, and cost-effective solutions.",
};

export default function WhyUsPage() {
  return (
    <>
      <PageHero {...whyUs.hero} />

      {/* Philosophy */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{whyUs.philosophy.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              {whyUs.philosophy.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {whyUs.philosophy.detail}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Five principles */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={whyUs.principles.eyebrow}
              title={whyUs.principles.title}
              intro={whyUs.principles.intro}
            />
          </Reveal>

          <Reveal className="mt-14 space-y-5">
            {whyUs.principles.items.map((p) => (
              <div
                key={p.kicker}
                className="grid gap-6 rounded-2xl border border-border bg-card p-8 lg:grid-cols-12 lg:p-10"
              >
                <div className="flex items-start gap-4 lg:col-span-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <Icon name={p.icon} className="size-5" />
                  </span>
                  <span className="pt-2.5 font-display text-base font-semibold">
                    {p.kicker}
                  </span>
                </div>
                <div className="lg:col-span-8">
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {p.detail}
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-wider text-primary">
                    {p.tag}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Engagement model */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={whyUs.engagement.eyebrow}
              title={whyUs.engagement.title}
              intro={whyUs.engagement.intro}
            />
          </Reveal>
          <div className="mt-14">
            <StageFlow stages={whyUs.engagement.steps} />
          </div>

          {/* Trust */}
          <Reveal className="mt-14 rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h3 className="font-display text-2xl font-bold">{whyUs.trust.title}</h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              {whyUs.trust.detail}
            </p>
            <ul className="mt-6 flex flex-wrap gap-4">
              {whyUs.trust.points.map((pt) => (
                <li key={pt} className="flex items-center gap-2 text-sm font-medium">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3" />
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Operational standards */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{whyUs.standards.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              {whyUs.standards.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {whyUs.standards.intro}
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {whyUs.standards.detail}
            </p>
          </Reveal>
          <ol className="mt-12 space-y-4">
            {whyUs.standards.items.map((it, i) => (
              <Reveal
                key={it.title}
                as="li"
                delay={(i % 3) * 50}
                className="flex gap-5 rounded-2xl border border-border bg-card p-6"
              >
                <span className="font-display text-2xl font-bold text-primary">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted-foreground">
                    {it.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Applied capabilities */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={whyUs.applied.eyebrow}
              title={whyUs.applied.title}
              intro={whyUs.applied.intro}
            />
          </Reveal>
          <div className="mt-12 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
            {whyUs.applied.combine.map((c, i) => (
              <Reveal
                key={c.label}
                delay={i * 70}
                className="flex flex-1 items-center gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon name={c.icon} className="size-5" />
                </span>
                <div>
                  <div className="font-display text-base font-semibold">{c.label}</div>
                  <p className="text-sm text-muted-foreground">{c.detail}</p>
                </div>
                {i < whyUs.applied.combine.length - 1 && (
                  <Plus className="ml-auto hidden size-4 shrink-0 text-muted-foreground lg:block" />
                )}
              </Reveal>
            ))}
          </div>
          <Reveal
            delay={200}
            className="mt-6 flex flex-col items-start justify-between gap-6 rounded-2xl border border-primary/30 bg-secondary/40 p-8 sm:flex-row sm:items-center"
          >
            <div>
              <h3 className="font-display text-xl font-bold">
                {whyUs.applied.outcome.title}
              </h3>
              <p className="mt-1 font-medium text-primary">
                {whyUs.applied.outcome.detail}
              </p>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                {whyUs.applied.outcome.note}
              </p>
            </div>
            <Button asChild variant="outline" className="shrink-0">
              <Link href="/case-studies">
                Explore case studies <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
