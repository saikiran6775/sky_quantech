import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { CtaBand } from "@/components/cta-band";
import { capabilities } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "AI solutions, asset management, automation and technology consulting built around the problem you actually need to solve.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Built around the problem you need to solve"
        intro="Four capabilities, one accountable engineering team. Each is delivered around your operational context — not around a generic template."
      />

      <div className="divide-y divide-border">
        {capabilities.map((c, i) => {
          const flip = i % 2 === 1;
          return (
            <section key={c.slug} className="py-20 lg:py-28">
              <Container className="grid items-center gap-14 lg:grid-cols-12">
                <Reveal
                  className={cn("lg:col-span-6", flip && "lg:order-2")}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.image} alt="" className="h-full w-full object-cover" />
                  </div>
                </Reveal>
                <Reveal
                  className={cn("lg:col-span-6", flip && "lg:order-1")}
                  delay={100}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
                    <Icon name={c.icon} className="size-6" />
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
                    {c.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">{c.blurb}</p>
                  <p className="mt-3 text-muted-foreground">{c.detail}</p>
                </Reveal>
              </Container>
            </section>
          );
        })}
      </div>

      <CtaBand title="Not sure where to start?" intro="Tell us the challenge. We'll help you find the most practical path forward." />
    </>
  );
}
