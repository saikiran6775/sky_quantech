import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { capabilities, industries, process } from "@/lib/site";

/* --------------------------------- Hero --------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full blur-3xl"
        style={{ background: "var(--glow)" }}
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-14 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            AI · Asset intelligence · Automation
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
            Intelligent technology, built around your business
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We combine artificial intelligence, asset intelligence, automation and
            software engineering to turn complex operational challenges into
            dependable, production-grade systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/solutions">
                Explore our solutions <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Talk to our experts</Link>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { n: "4", l: "Core capabilities" },
              { n: "6", l: "Industries served" },
              { n: "5", l: "Step delivery" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-3xl font-bold tabular-nums">{s.n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Signature moment: inspection viewport with a scanning sweep */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-accent shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/img/img-f2ad7f6884.jpg"
              className="h-full w-full object-cover"
              src="/vid/Drone_video.mp4"
            />
            <div className="grid-bg absolute inset-0 opacity-30 mix-blend-overlay" aria-hidden="true" />
            {/* scanning line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" aria-hidden="true" />
            {/* corner ticks + readout */}
            <div className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-primary/70" aria-hidden="true" />
            <div className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-primary/70" aria-hidden="true" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-background/85 px-3 py-1.5 text-xs font-medium backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary" />
              AI-powered visual inspection
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------- Capabilities ----------------------------- */
function Capabilities() {
  const [feature, ...rest] = capabilities;
  return (
    <section id="capabilities" className="border-b border-border py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="One team, many capabilities"
            intro="You're broader than a single product. We deliver across AI, asset management, automation and consulting — with one accountable engineering team."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Feature capability — horizontal, larger */}
          <Reveal className="lg:col-span-12">
            <Link
              href="/solutions"
              className="group grid overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary md:grid-cols-2"
            >
              <div className="relative min-h-56 overflow-hidden md:min-h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={feature.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent md:bg-gradient-to-r" />
              </div>
              <div className="flex flex-col justify-center gap-4 p-8 lg:p-10">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon name={feature.icon} className="size-5" />
                </span>
                <h3 className="font-display text-2xl font-bold">{feature.title}</h3>
                <p className="max-w-md text-muted-foreground">{feature.detail}</p>
                <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Learn more <ArrowUpRight className="size-4" />
                </span>
              </div>
            </Link>
          </Reveal>

          {rest.map((c, i) => (
            <Reveal key={c.slug} delay={i * 80} className="lg:col-span-4">
              <Link
                href="/solutions"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/55 to-transparent" />
                  <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-lg bg-background/90 text-primary backdrop-blur">
                    <Icon name={c.icon} className="size-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="font-display text-lg font-bold">{c.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.blurb}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Learn more <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* --------------------------- Intelligent computing --------------------------- */
function Computing() {
  const points = [
    { t: "Artificial Intelligence", d: "Analyze information and solve complex business challenges." },
    { t: "Computer Vision", d: "Image and visual data analysis for real operational applications." },
    { t: "Machine Learning", d: "Transform data into useful, intelligent insight." },
    { t: "Data & Analytics", d: "Insight that supports better decisions." },
  ];
  return (
    <section className="relative overflow-hidden border-b border-border bg-accent py-20 text-accent-foreground lg:py-28">
      <div className="grid-bg absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "var(--glow)" }}
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow text-primary-foreground/70">Intelligent computing</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Intelligence that turns complexity into opportunity
          </h2>
          <p className="mt-5 max-w-xl text-lg text-accent-foreground/75">
            Artificial intelligence helps us turn complex information and business
            challenges into practical, intelligent technology solutions.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <div
                key={p.t}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-primary"
              >
                <h3 className="font-display text-base font-semibold">{p.t}</h3>
                <p className="mt-1 text-sm text-accent-foreground/70">{p.d}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6" delay={100}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/img-4c2661dad6.jpg"
              alt="Intelligent computing environment"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Data → Processing → Intelligence → Action
            </div>
          </div>
        </Reveal>
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
              <p className="text-sm leading-relaxed text-muted-foreground">{ind.blurb}</p>
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
        <ol className="mt-14 grid gap-6 md:grid-cols-5">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 70} as="li" className="relative">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary font-display text-sm font-bold text-primary">
                  {i + 1}
                </span>
                {i < process.length - 1 && (
                  <span className="hidden h-px flex-1 bg-border md:block" />
                )}
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{p.step}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {p.detail}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ---------------------------- Featured solution ---------------------------- */
function Featured() {
  const points = [
    "Visual data analysis & pattern identification",
    "Operational workflow support & notification",
    "Adaptable software architecture",
  ];
  return (
    <section className="border-b border-border py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="order-2 lg:order-1 lg:col-span-6">
          <p className="eyebrow">Featured solution</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Intelligent visual inspection
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            AI-powered computer vision helps organizations analyze visual information
            and support inspection and monitoring workflows across infrastructure and
            operational assets.
          </p>
          <ul className="mt-7 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm font-medium">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Button asChild className="mt-9">
            <Link href="/case-studies">
              See case studies <ArrowUpRight />
            </Link>
          </Button>
        </Reveal>
        <Reveal className="order-1 lg:order-2 lg:col-span-6" delay={100}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/case_studies_new.jpg"
              alt="AI-powered infrastructure inspection dashboard"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Computing />
      <Industries />
      <Process />
      <Featured />
      <CtaBand />
    </>
  );
}
