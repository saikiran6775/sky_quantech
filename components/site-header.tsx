"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav, primaryCta, company } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/container";

function Wordmark() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label={`${company.name} home`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-accent text-accent-foreground">
        <span className="font-display text-sm font-bold tracking-tight">SQ</span>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
      </span>
      <span className="font-display text-[15px] font-bold leading-none tracking-tight">
        SKY QUANTECH
        <span className="ml-1 text-primary">AI</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/85 backdrop-blur-md transition-shadow",
        scrolled ? "border-border shadow-sm" : "border-border/60"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Wordmark />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.slug}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.slug}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-sm font-medium",
                      active
                        ? "bg-secondary text-secondary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button asChild className="mt-2">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
