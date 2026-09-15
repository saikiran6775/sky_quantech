import { Container } from "@/components/container";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-accent text-accent-foreground">
      <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "var(--glow)" }}
        aria-hidden="true"
      />
      <Container className="relative py-20 lg:py-28">
        <p className="eyebrow text-primary-foreground/70">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-accent-foreground/75">
          {intro}
        </p>
      </Container>
    </section>
  );
}
