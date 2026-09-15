import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build technology that solves real problems. Share your profile with our AI, computer vision, software and automation teams.",
};

const areas = [
  "Artificial intelligence & computer vision",
  "Software engineering",
  "Automation & data",
  "Technology consulting",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build technology that solves real problems"
        intro="We're a collaborative engineering team working across AI, software, automation and consulting. Share your profile and we'll be in touch."
      />

      <section className="py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Areas we hire across
            </h2>
            <ul className="mt-6 space-y-3">
              {areas.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              No specific role listed? We still want to hear from strong engineers and
              problem-solvers.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={100}>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">Share your profile</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Tell us about yourself and where you'd like to contribute.
              </p>
              <div className="mt-6">
                <LeadForm variant="careers" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
