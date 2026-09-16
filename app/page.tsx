import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { AnimatedLine } from "@/components/animated-line";
import { HomeHero } from "@/components/home-hero";
import { CapabilityAccordion } from "@/components/capability-accordion";
import { StorySpine } from "@/components/story-spine";
import { industries, process, differentiators } from "@/lib/site";
import { computingDisciplines } from "@/lib/content";

/* ---------------------------- Computing disciplines ---------------------------- */
function Disciplines() {
  return (
    <section className="border-b border-border py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Intelligent computing"
            title="The disciplines behind the work"
            intro="Artificial intelligence helps us turn complex information and business challenges into practical, intelligent technology solutions."
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {computingDisciplines.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 60} className="bg-card p-8">
              <h3 className="font-display text-lg font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {d.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------- Why us --------------------------------- */
function WhyUs() {
  return (
    <section className="border-b border-border py-20 lg:py-28">
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our value proposition"
            title="Why choose SKY QUANTECH AI?"
            intro="We focus on practical, dependable technology implementations tailored to solve real organizational challenges and deliver measurable business value."
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/why-us">
              More on our approach <ArrowUpRight />
            </Link>
          </Button>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <Reveal
              key={d.title}
              delay={(i % 3) * 60}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="font-mono text-xs tabular-nums text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-base font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {d.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------- Industries ------------------------------- */
function Industries() {
  return (
    <section className="border-b border-border py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Domain expertise"
            title="Industries we serve"
            intro="Technology solutions designed to adapt to the needs of different industries."
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal
              key={ind.name}
              delay={(i % 3) * 70}
              className="group flex flex-col gap-3 bg-card p-8 transition-colors hover:bg-secondary/40"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon name={ind.icon} className="size-5" />
              </span>
              <h3 className="font-display text-lg font-semibold">{ind.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {ind.blurb}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------- Process --------------------------------- */
function Process() {
  return (
    <section className="border-b border-border py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Systematic delivery"
            title="From challenge to solution"
            intro="Five stages that take a business requirement through to a working solution."
            className="mx-auto items-center"
          />
        </Reveal>
        <div className="relative mt-14">
          {/* draw-on-scroll connector behind the step markers (desktop) */}
          <AnimatedLine className="absolute left-[10%] right-[10%] top-5 hidden md:block" />
          <ol className="relative grid gap-6 md:grid-cols-5">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 70} as="li" className="relative">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary bg-background font-display text-sm font-bold text-primary">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{p.step}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {p.detail}
              </p>
            </Reveal>
          ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ Where it applies ------------------------------ */
const domains = [
  {
    title: "Railway overhead equipment",
    detail:
      "Computer vision applied to overhead line equipment — identifying components and flagging anomalies from aerial and track-side imagery.",
    image: "/img/img-f2ad7f6884.jpg",
  },
  {
    title: "Rolling stock inspection",
    detail:
      "Visual analysis of rolling stock to support condition monitoring and maintenance workflows at scale.",
    image: "/img/case_studies_new.jpg",
  },
  {
    title: "Power-grid infrastructure",
    detail:
      "Drone-captured imagery of transmission assets, structured into reviewable, trackable inspection data.",
    image: "/img/img-1e9c6c7276.jpg",
  },
];

function Applied() {
  return (
    <section className="border-b border-border py-20 lg:py-28">
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Where it applies"
            title="Intelligent inspection, applied"
            intro="Illustrative applications of our AI and computer-vision capabilities across infrastructure and industrial assets."
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/case-studies">
              See case studies <ArrowUpRight />
            </Link>
          </Button>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {domains.map((d, i) => (
            <Reveal
              key={d.title}
              delay={i * 80}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={d.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[11px] font-medium backdrop-blur">
                  Illustrative
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CapabilityAccordion />
      <StorySpine />
      <Disciplines />
      <Industries />
      <WhyUs />
      <Process />
      <Applied />
      <CtaBand />
    </>
  );
}
