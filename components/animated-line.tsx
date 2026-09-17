"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * A horizontal hairline that "draws" left-to-right when scrolled into view.
 * Sits behind a row of steps. Reduced motion → drawn instantly.
 */
export function AnimatedLine({ className }: { className?: string }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [drawn, setDrawn] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDrawn(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("relative h-px overflow-hidden bg-border", className)}>
      <div
        className={cn(
          "absolute inset-y-0 left-0 bg-primary transition-[width] duration-[1400ms] ease-out",
          drawn ? "w-full" : "w-0"
        )}
      />
    </div>
  );
}
