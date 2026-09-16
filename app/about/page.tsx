import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { StageFlow, Statement } from "@/components/sections";
import { TagList } from "@/components/sections";
import { Parallax } from "@/components/parallax";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who we are and how we work: AI solutions, software development, automation and technology consulting built around real business needs.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero {...about.hero} />

      {/* Who we are */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6" variant="left">
            <Parallax
              strength={30}
              className="relative aspect-[5/4] rounded-2xl border border-border shadow-xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/about_hero.png"
                alt="Sky Quantech AI team and technology"
                className="h-[calc(100%+60px)] w-full -translate-y-8 object-cover"
              />
            </Parallax>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={100}>
            <SectionHeading
              eyebrow={about.whoWeAre.eyebrow}
              title={about.whoWeAre.title}
            />
            <div className="mt-5 space-y-4 text-muted-foreground">
              {about.whoWeAre.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Approach */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={about.approach.eyebrow}
              title={about.approach.title}
              intro={about.approach.intro}
            />
          </Reveal>
          <div className="mt-14">
            <StageFlow
              stages={about.approach.steps.map((s) => ({
                label: s.step,
                detail: s.detail,
                tag: s.tag,
              }))}
            />
          </div>
        </Container>
      </section>

      {/* Vision / Mission / Philosophy */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Statement {...about.vision} />
            <Statement {...about.mission} />
          </div>
          <Statement
            eyebrow={about.philosophy.eyebrow}
            detail={about.philosophy.quote}
            quote
            tag={about.philosophy.detail}
          />
        </Container>
      </section>

      {/* Values */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={about.values.eyebrow}
              title={about.values.title}
              intro={about.values.intro}
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {about.values.items.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 70} className="bg-card p-8">
                <span className="font-mono text-xs tabular-nums text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology focus */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={about.techFocus.eyebrow}
              title={about.techFocus.title}
              intro={about.techFocus.intro}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {about.techFocus.items.map((t, i) => (
              <Reveal
                key={t.title}
                delay={(i % 2) * 80}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="font-display text-xl font-bold">{t.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {t.detail}
                </p>
                <p className="mt-6 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {t.scopeLabel}
                </p>
                <div className="mt-3">
                  <TagList tags={t.scope} />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
