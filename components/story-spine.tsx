"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import {
  Panel,
  PanelChrome,
  StatusChip,
  DataRow,
  Meter,
  DetectionImage,
  IllustrativeNote,
  type Detection,
} from "@/components/ui/panel";

/* ---------------------------------------------------------------------------
   The scrollytelling spine: Data Input → Processing Layer → Intelligent Output.
   Copy reused from the existing site; panels are illustrative interfaces.
--------------------------------------------------------------------------- */

type Step = {
  kicker: string;
  title: string;
  detail: string;
  panel: React.ReactNode;
};

const detections: Detection[] = [
  { label: "Insulator", x: 12, y: 22, w: 22, h: 26 },
  { label: "Catenary clamp", x: 46, y: 46, w: 26, h: 22 },
  { label: "Conductor", x: 68, y: 16, w: 24, h: 20 },
];

function CapturePanel() {
  return (
    <Panel>
      <PanelChrome path={["Corridor", "Section 04", "Span A-17"]} />
      <DetectionImage
        src="/img/img-f2ad7f6884.jpg"
        alt="Aerial inspection imagery with detected components highlighted"
        detections={detections}
        className="aspect-[16/10]"
      />
      <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
        <StatusChip label="Capture complete" tone="ok" />
        <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
          1,248 frames
        </span>
      </div>
    </Panel>
  );
}

function AnalyzePanel() {
  return (
    <Panel>
      <PanelChrome path={["Corridor", "Section 04", "Analysis"]} />
      <div className="grid gap-4 p-4 sm:grid-cols-2">
        <div className="space-y-2.5">
          <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Component readout
          </span>
          <div>
            <DataRow label="Assets identified" value="312" />
            <DataRow label="Flagged for review" value="7" accent />
            <DataRow label="Classification" value="Automated" />
            <DataRow label="Pass rate" value="97.8%" />
          </div>
        </div>
        <div className="space-y-4">
          <Meter label="Coverage" value="100%" percent={100} />
          <Meter label="Model confidence" value="94%" percent={94} />
          <Meter label="Review queue" value="7 items" percent={22} />
        </div>
      </div>
      <div className="flex items-center gap-2 border-t border-border px-4 py-3">
        <StatusChip label="Processing" tone="info" />
        <StatusChip label="7 anomalies" tone="warn" />
      </div>
    </Panel>
  );
}

function ActPanel() {
  const rows = [
    { id: "SEC-04-017", zone: "2", score: "0.91", tone: "warn" as const },
    { id: "SEC-04-032", zone: "1", score: "0.64", tone: "neutral" as const },
    { id: "SEC-04-048", zone: "3", score: "0.28", tone: "ok" as const },
  ];
  return (
    <Panel>
      <PanelChrome path={["Corridor", "Work queue"]} />
      <div className="p-4">
        <div className="mb-2 grid grid-cols-[1fr_auto_auto] gap-4 border-b border-border pb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          <span>Asset</span>
          <span>Zone</span>
          <span>Priority</span>
        </div>
        {rows.map((r) => (
          <div
            key={r.id}
            className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-border/60 py-2.5 last:border-0"
          >
            <span className="font-mono text-[11px] text-foreground">{r.id}</span>
            <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
              {r.zone}
            </span>
            <StatusChip label={r.score} tone={r.tone} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-border px-4 py-3">
        <StatusChip label="Routed to field team" tone="ok" />
        <span className="font-mono text-[11px] text-muted-foreground">3 orders</span>
      </div>
    </Panel>
  );
}

const steps: Step[] = [
  {
    kicker: "Data flow",
    title: "Data Input",
    detail:
      "AI-powered computer vision can help organizations analyze visual information and support inspection and monitoring workflows.",
    panel: <CapturePanel />,
  },
  {
    kicker: "Analysis",
    title: "Processing Layer",
    detail:
      "Visual data analysis and pattern identification turn raw capture into structured, reviewable detail.",
    panel: <AnalyzePanel />,
  },
  {
    kicker: "Execution",
    title: "Intelligent Output",
    detail:
      "Operational workflow support and notification, built on an adaptable software architecture.",
    panel: <ActPanel />,
  },
];

export function StorySpine() {
  const [active, setActive] = React.useState(0);
  const refs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = refs.current.indexOf(e.target as HTMLDivElement);
            if (i >= 0) setActive(i);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="border-b border-border py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow">Intelligent computing</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Data → Processing → Intelligence → Action
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Artificial intelligence helps us turn complex information and business
            challenges into practical, intelligent technology solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Steps */}
          <div className="lg:col-span-5">
            {steps.map((s, i) => (
              <div
                key={s.title}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className="border-l-2 py-8 pl-6 transition-colors duration-500 lg:py-20"
                style={{
                  borderColor:
                    active === i ? "var(--color-primary)" : "var(--color-border)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "font-mono text-xs tabular-nums transition-colors duration-500",
                      active === i ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {s.kicker}
                  </span>
                </div>
                <h3
                  className={cn(
                    "mt-3 font-display text-2xl font-bold transition-colors duration-500 sm:text-3xl",
                    active === i ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {s.title}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                  {s.detail}
                </p>

                {/* Mobile: panel inline under its step */}
                <div className="mt-6 lg:hidden">{s.panel}</div>
              </div>
            ))}
          </div>

          {/* Desktop: sticky panel that swaps with the active step */}
          <div className="hidden lg:col-span-7 lg:block">
            <div className="sticky top-28">
              <div className="relative">
                {steps.map((s, i) => (
                  <div
                    key={s.title}
                    aria-hidden={active !== i}
                    className={cn(
                      "transition-all duration-500",
                      active === i
                        ? "relative opacity-100"
                        : "pointer-events-none absolute inset-0 translate-y-3 opacity-0"
                    )}
                  >
                    {s.panel}
                  </div>
                ))}
              </div>
              <IllustrativeNote className="mt-4" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
