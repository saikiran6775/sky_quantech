import * as React from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------------------
   Faux product-UI kit — presentational only.
   Renders inspection-software-style surfaces (window chrome, status chips,
   data rows, detection overlays) so the story sections can *show* the work
   instead of describing it. Nothing here claims a real deployment; callers
   pair these with an "Illustrative" label.
--------------------------------------------------------------------------- */

export function Panel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card shadow-2xl",
        className
      )}
      {...props}
    />
  );
}

/** Window chrome bar with traffic lights and a breadcrumb path. */
export function PanelChrome({
  path,
  className,
}: {
  path: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 border-b border-border bg-muted/60 px-3 py-2.5",
        className
      )}
    >
      <div className="flex shrink-0 gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
      </div>
      <nav className="flex min-w-0 items-center gap-1 overflow-hidden text-[11px] text-muted-foreground">
        {path.map((seg, i) => (
          <React.Fragment key={seg}>
            {i > 0 && <span className="text-border">›</span>}
            <span
              className={cn(
                "truncate",
                i === path.length - 1 && "font-medium text-foreground"
              )}
            >
              {seg}
            </span>
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}

export function StatusChip({
  label,
  tone = "neutral",
  className,
}: {
  label: string;
  tone?: "ok" | "warn" | "info" | "neutral";
  className?: string;
}) {
  const tones = {
    ok: "bg-primary/10 text-primary ring-primary/25",
    warn: "bg-destructive/10 text-destructive ring-destructive/25",
    info: "bg-secondary text-secondary-foreground ring-border",
    neutral: "bg-muted text-muted-foreground ring-border",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium ring-1 ring-inset",
        tones[tone],
        className
      )}
    >
      {tone === "ok" && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
      {label}
    </span>
  );
}

/** Label/value row, tabular — the "spec sheet" look. */
export function DataRow({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border/60 py-1.5 last:border-0">
      <span className="text-[11px] text-muted-foreground">{label}</span>
      <span
        className={cn(
          "font-mono text-[11px] tabular-nums",
          accent ? "font-semibold text-primary" : "text-foreground"
        )}
      >
        {value}
      </span>
    </div>
  );
}

/** Horizontal meter — utilization / confidence / coverage. */
export function Meter({
  label,
  value,
  percent,
}: {
  label: string;
  value: string;
  percent: number;
}) {
  const pct = Math.max(0, Math.min(100, percent));
  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between">
        <span className="text-[11px] text-muted-foreground">{label}</span>
        <span className="font-mono text-[11px] font-semibold tabular-nums text-foreground">
          {value}
        </span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-full bg-muted"
        role="img"
        aria-label={`${label}: ${value}`}
      >
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/**
 * Image with detection-box overlays — the core "computer vision at work" visual.
 * Boxes are positioned in percentages so they scale with the image.
 */
export type Detection = {
  label: string;
  /** percentages: left, top, width, height */
  x: number;
  y: number;
  w: number;
  h: number;
};

export function DetectionImage({
  src,
  alt,
  detections = [],
  className,
}: {
  src: string;
  alt: string;
  detections?: Detection[];
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      <div className="absolute inset-0" aria-hidden="true">
        {detections.map((d) => (
          <div
            key={d.label}
            className="absolute rounded-sm border-2 border-primary/90 bg-primary/5"
            style={{
              left: `${d.x}%`,
              top: `${d.y}%`,
              width: `${d.w}%`,
              height: `${d.h}%`,
            }}
          >
            <span className="absolute -top-px left-0 -translate-y-full whitespace-nowrap rounded-sm bg-primary px-1.5 py-0.5 font-mono text-[10px] font-medium leading-tight text-primary-foreground">
              {d.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Small caption marking a panel as illustrative — keeps us honest. */
export function IllustrativeNote({ className }: { className?: string }) {
  return (
    <p className={cn("text-[11px] text-muted-foreground", className)}>
      Illustrative interface — not a live deployment.
    </p>
  );
}
