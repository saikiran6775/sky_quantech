import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";

/* Reusable renderers for the recovered site copy. */

/** Numbered stage flow — for sequences (approach, lifecycle, methodology, hiring). */
export function StageFlow({
  stages,
}: {
  stages: { label: string; detail: string; tag?: string }[];
}) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stages.map((s, i) => (
        <Reveal key={s.label} as="li" delay={i * 90} variant="rise" className="group">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary bg-background font-display text-sm font-bold text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            {i < stages.length - 1 && (
              <span className="hidden h-px flex-1 overflow-hidden bg-border sm:block">
                <span
                  className="block h-full w-0 bg-primary transition-[width] duration-700 ease-out group-hover:w-full"
                />
              </span>
            )}
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold">{s.label}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {s.detail}
          </p>
          {s.tag && (
            <p className="mt-3 text-[11px] uppercase tracking-wider text-primary">
              {s.tag}
            </p>
          )}
        </Reveal>
      ))}
    </ol>
  );
}

/** Grid of title/detail cards, optional icon and tag. */
export function FeatureGrid({
  items,
  columns = 4,
  className,
}: {
  items: { title: string; detail: string; tag?: string; icon?: string }[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];
  return (
    <div className={cn("grid gap-5", cols, className)}>
      {items.map((it, i) => (
        <Reveal
          key={it.title}
          delay={(i % 4) * 70}
          variant="scale"
          className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
        >
          {it.icon && (
            <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon name={it.icon} className="size-5" />
            </span>
          )}
          <h3 className="font-display text-base font-semibold">{it.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {it.detail}
          </p>
          {it.tag && (
            <p className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground">
              {it.tag}
            </p>
          )}
        </Reveal>
      ))}
    </div>
  );
}

/** Large statement block — vision, mission, philosophy. */
export function Statement({
  eyebrow,
  title,
  detail,
  tag,
  quote = false,
  className,
}: {
  eyebrow: string;
  title?: string;
  detail: string;
  tag?: string;
  quote?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "rounded-2xl border border-border bg-card p-8 lg:p-10",
        className
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      {quote ? (
        <blockquote className="mt-5 font-display text-2xl font-bold leading-snug sm:text-3xl">
          “{detail}”
        </blockquote>
      ) : (
        <>
          {title && (
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl">
              {title}
            </h2>
          )}
          <p className="mt-4 leading-relaxed text-muted-foreground">{detail}</p>
        </>
      )}
      {tag && (
        <p className="mt-5 text-[11px] uppercase tracking-wider text-primary">
          {tag}
        </p>
      )}
    </Reveal>
  );
}

/** Pill list of tags. */
export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <li
          key={t}
          className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
