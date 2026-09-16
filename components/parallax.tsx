"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Subtle scroll parallax: translates its child a few percent as the element
 * moves through the viewport. Disabled for reduced motion. Keep `strength`
 * small (10–40px) so it reads as depth, not drift.
 */
export function Parallax({
  children,
  className,
  strength = 28,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const innerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    let raf = 0;
    let active = false;

    const apply = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progress: -1 (entering bottom) → 1 (leaving top)
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      inner.style.transform = `translate3d(0, ${clamped * strength}px, 0)`;
    };
    const onScroll = () => {
      if (active && !raf) raf = requestAnimationFrame(apply);
    };
    const io = new IntersectionObserver(
      (entries) => {
        active = entries[0]?.isIntersecting ?? false;
        if (active) onScroll();
      },
      { threshold: 0 }
    );
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div ref={innerRef} className="h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
