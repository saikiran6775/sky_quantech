import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function CtaBand({
  title = "Let's build what's next",
  intro = "Have a business challenge or a technology idea? Let's explore how intelligent technology can help.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-accent text-accent-foreground">
      {/* Drifting aurora motion graphic */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="animate-aurora absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: "var(--glow)" }}
        />
        <div
          className="animate-aurora absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full blur-3xl [animation-delay:-9s]"
          style={{ background: "radial-gradient(circle, rgba(80,140,255,0.20) 0%, transparent 70%)" }}
        />
      </div>
      <div className="grid-bg absolute inset-0 opacity-50" aria-hidden="true" />
      <Container className="relative py-20 text-center lg:py-28">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center">
          <p className="eyebrow text-primary-foreground/70">Start the conversation</p>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl text-lg text-accent-foreground/75">{intro}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="light" size="lg">
              <Link href="/contact">
                Talk to our experts <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/25 text-accent-foreground hover:border-primary hover:text-primary-foreground"
            >
              <Link href="/solutions">Explore our solutions</Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
