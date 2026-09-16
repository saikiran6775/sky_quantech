"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "rise" | "scale" | "blur" | "left" | "right";

const hidden: Record<Variant, string> = {
  rise: "translate-y-6 opacity-0",
  scale: "scale-[0.96] opacity-0",
  blur: "translate-y-4 opacity-0 blur-[6px]",
  left: "-translate-x-6 opacity-0",
  right: "translate-x-6 opacity-0",
};

const shownCls =
  "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0";

/**
 * Reveal-on-scroll. Hidden only once mounted (so no-JS shows content), then
 * animates in when it enters the viewport. Honors reduced motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "rise",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
  as?: React.ElementType;
}) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [shown, setShown] = React.useState(false);
  const [armed, setArmed] = React.useState(false);

  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(true);
      return;
    }
    setArmed(true);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        armed &&
          "transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
        armed && !shown && hidden[variant],
        armed && shown && shownCls,
        className
      )}
    >
      {children}
    </Tag>
  );
}
