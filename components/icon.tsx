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
  Lightbulb,
  Users,
  ShieldCheck,
  Scale,
  Ear,
  Handshake,
  Code,
  LifeBuoy,
  Eye,
  RefreshCw,
  Database,
  Cpu,
  Sparkles,
  Zap,
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
  Lightbulb,
  Users,
  ShieldCheck,
  Scale,
  Ear,
  Handshake,
  Code,
  LifeBuoy,
  Eye,
  RefreshCw,
  Database,
  Cpu,
  Sparkles,
  Zap,
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
