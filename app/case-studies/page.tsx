import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Illustrative AI and computer-vision inspection applications across railway overhead equipment, rolling stock and power-grid infrastructure.",
};

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

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Featured work"
        title="Intelligent inspection, applied"
        intro="Illustrative applications of our AI and computer-vision capabilities across infrastructure and industrial assets."
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
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
                  <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-medium backdrop-blur">
                    Illustrative
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-lg font-semibold">{d.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {d.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm text-muted-foreground">
            These examples illustrate the kinds of problems our computer-vision and
            software capabilities address. Contact us to discuss a specific
            implementation for your assets.
          </p>
        </Container>
      </section>

      <CtaBand
        title="Have an inspection challenge?"
        intro="Tell us about your assets and workflows, and we'll explore a practical approach."
      />
    </>
  );
}
