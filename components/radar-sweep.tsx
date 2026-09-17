import { cn } from "@/lib/utils";

/**
 * Decorative radar sweep — concentric rings, blips, and a rotating sweep arm.
 * Pure CSS/SVG motion graphic; the rotation stops under reduced motion (the
 * global rule zeroes animation durations). Sits over dark surfaces.
 */
export function RadarSweep({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none aspect-square", className)} aria-hidden="true">
      <div className="relative h-full w-full">
        {/* rings */}
        <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
          {[30, 55, 80, 98].map((r) => (
            <circle
              key={r}
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke="rgba(140,180,255,0.16)"
              strokeWidth="1"
            />
          ))}
          <line x1="100" y1="2" x2="100" y2="198" stroke="rgba(140,180,255,0.12)" />
          <line x1="2" y1="100" x2="198" y2="100" stroke="rgba(140,180,255,0.12)" />
          {/* blips */}
          <circle cx="140" cy="72" r="2.5" fill="#8CC2FF" className="animate-soft-pulse" />
          <circle cx="74" cy="128" r="2" fill="#8CC2FF" className="animate-soft-pulse [animation-delay:-1.5s]" />
          <circle cx="122" cy="140" r="1.8" fill="#8CC2FF" className="animate-soft-pulse [animation-delay:-3s]" />
        </svg>
        {/* rotating sweep arm */}
        <div
          className="animate-radar absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(80,140,255,0.28) 0deg, rgba(80,140,255,0) 60deg, rgba(80,140,255,0) 360deg)",
            maskImage: "radial-gradient(circle, #000 0%, #000 49%, transparent 50%)",
            WebkitMaskImage: "radial-gradient(circle, #000 0%, #000 49%, transparent 50%)",
          }}
        />
      </div>
    </div>
  );
}
