import {
  BrainCircuit,
  Radar,
  Workflow,
  Compass,
  HeartPulse,
  GraduationCap,
  Factory,
  Store,
  Landmark,
  Building2,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  BrainCircuit,
  Radar,
  Workflow,
  Compass,
  HeartPulse,
  GraduationCap,
  Factory,
  Store,
  Landmark,
  Building2,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? BrainCircuit;
  return <Cmp className={className} aria-hidden="true" />;
}
