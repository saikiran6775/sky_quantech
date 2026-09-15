"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { Icon } from "@/components/icon";
import { capabilities } from "@/lib/site";

export function CapabilityAccordion() {
  const [open, setOpen] = React.useState(0);

  return (
    <section id="capabilities" className="border-b border-border py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            One team, many capabilities
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Capabilities across AI, asset management, automation and consulting,
            delivered by one engineering team.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Accordion list */}
          <div className="lg:col-span-6">
            {capabilities.map((c, i) => {
              const isOpen = open === i;
              return (
                <div key={c.slug} className="border-b border-border">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(i)}
                      aria-expanded={isOpen}
                      aria-controls={`cap-panel-${c.slug}`}
                      className="group flex w-full items-center gap-4 py-6 text-left"
                    >
                      <span
                        className={cn(
                          "font-mono text-xs tabular-nums transition-colors",
                          isOpen ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-colors",
                          isOpen
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-primary group-hover:bg-primary/15"
                        )}
                      >
                        <Icon name={c.icon} className="size-5" />
                      </span>
                      <span
                        className={cn(
                          "flex-1 font-display text-xl font-bold transition-colors sm:text-2xl",
                          isOpen
                            ? "text-foreground"
                            : "text-muted-foreground group-hover:text-foreground"
                        )}
                      >
                        {c.title}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`cap-panel-${c.slug}`}
                    className={cn(
                      "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-7 pl-[4.5rem]">
                        <p className="leading-relaxed text-muted-foreground">
                          {c.blurb}
                        </p>
                        <p className="mt-3 leading-relaxed text-muted-foreground">
                          {c.detail}
                        </p>

                        {/* Mobile visual */}
                        <div className="mt-5 overflow-hidden rounded-xl border border-border lg:hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={c.image}
                            alt=""
                            className="aspect-[16/10] w-full object-cover"
                          />
                        </div>

                        <Link
                          href="/solutions"
                          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        >
                          Learn more <ArrowUpRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Swapping visual */}
          <div className="hidden lg:col-span-6 lg:block">
            <div className="sticky top-28 aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-2xl">
              {capabilities.map((c, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={c.slug}
                  src={c.image}
                  alt=""
                  aria-hidden={open !== i}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    open === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
                  )}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full bg-background/90 px-3.5 py-1.5 text-xs font-medium backdrop-blur">
                {capabilities[open].title}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
