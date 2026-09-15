import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

/* Cinematic full-bleed hero. Deliberately always dark (bg-accent reads dark in
   both themes), so the footage carries the frame and the type sits over it. */
export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-accent text-accent-foreground">
      {/* Footage */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/img/img-f2ad7f6884.jpg"
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src="/vid/Drone_video.mp4"
      />
      {/* Scrims: keep type legible over any frame */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-accent via-accent/85 to-accent/35"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-accent via-transparent to-accent/70"
        aria-hidden="true"
      />
      <div className="grid-bg absolute inset-0 -z-10 opacity-25" aria-hidden="true" />
      {/* Signature moment: a single slow scanning sweep */}
      <div
        className="animate-scan pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-primary/0 via-primary/25 to-primary/0"
        aria-hidden="true"
      />

      <Container className="relative flex min-h-[86vh] flex-col justify-center py-24 lg:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            AI · Asset intelligence · Automation
          </div>

          <h1 className="mt-8 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.03em]">
            Intelligent technology,
            <br />
            built around your business
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-accent-foreground/80 sm:text-xl">
            We combine artificial intelligence, asset intelligence, automation and
            software engineering to turn complex operational challenges into
            dependable, production-grade systems.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/solutions">
                Explore our solutions <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-accent-foreground hover:border-white hover:text-accent-foreground"
            >
              <Link href="/contact">Talk to our experts</Link>
            </Button>
          </div>
        </div>

        {/* Structural figures — honest counts, not performance claims */}
        <dl className="mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/15 pt-8">
          {[
            { n: "4", l: "Core capabilities" },
            { n: "6", l: "Industries served" },
            { n: "5", l: "Step delivery" },
          ].map((s) => (
            <div key={s.l}>
              <dt className="font-display text-4xl font-bold tabular-nums sm:text-5xl">
                {s.n}
              </dt>
              <dd className="mt-2 text-xs uppercase tracking-wider text-accent-foreground/65">
                {s.l}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
