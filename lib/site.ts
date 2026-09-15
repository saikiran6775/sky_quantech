// Single source of truth for content repeated across the site.
// Ported from the legacy generator's site/data/site.mjs.

export const company = {
  name: "SKY QUANTECH AI",
  legalName: "SKY QUANTECH AI Pvt. Ltd.",
  tagline: "Intelligent technology, built around your business",
  services: ["AI Solutions", "Asset Management", "Automation", "Technology Consulting"],
};

export const contact = {
  email: "info@skyquantech.ai",
  phones: ["9985383863", "8885333344"],
  address: "Silicon Valley, Madhapur, Hyderabad",
  website: "www.skyquantech.ai",
  coordinates: "17.449458, 78.385876",
};

export const nav = [
  { slug: "about", label: "About", href: "/about" },
  { slug: "solutions", label: "Solutions", href: "/solutions" },
  { slug: "industries", label: "Industries", href: "/industries" },
  { slug: "why-us", label: "Why Us", href: "/why-us" },
  { slug: "process", label: "Process", href: "/process" },
  { slug: "case-studies", label: "Case Studies", href: "/case-studies" },
  { slug: "careers", label: "Careers", href: "/careers" },
  { slug: "contact", label: "Contact", href: "/contact" },
];

export const primaryCta = { label: "Talk to us", href: "/contact" };

export type Capability = {
  slug: string;
  title: string;
  blurb: string;
  detail: string;
  image: string;
  icon: string;
};

export const capabilities: Capability[] = [
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    blurb: "Intelligent systems that help organizations solve complex business and operational challenges.",
    detail:
      "We design applied AI — from computer vision to machine learning — around the specific problem you need to solve, not around a generic model.",
    image: "/img/img-ee834025dd.jpg",
    icon: "BrainCircuit",
  },
  {
    slug: "asset-management",
    title: "Asset Management",
    blurb: "Intelligent tracking, monitoring and predictive maintenance for critical operational assets.",
    detail:
      "Drone- and sensor-driven inspection combined with analytics to keep infrastructure and equipment visible, measured and maintained.",
    image: "/img/img-f2ad7f6884.jpg",
    icon: "Radar",
  },
  {
    slug: "automation",
    title: "Automation",
    blurb: "Workflow and business-process automation designed to improve efficiency.",
    detail:
      "We remove repetitive, error-prone steps from operational workflows so teams spend their time on judgement, not busywork.",
    image: "/img/img-69a66ffa3b.jpg",
    icon: "Workflow",
  },
  {
    slug: "consulting",
    title: "Technology Consulting",
    blurb: "Guidance focused on identifying practical opportunities for digital transformation.",
    detail:
      "Pragmatic technology strategy: where to invest, what to build, and how to make it dependable in production.",
    image: "/img/img-87dc51f04c.jpg",
    icon: "Compass",
  },
];

export type Industry = { name: string; blurb: string; icon: string };

export const industries: Industry[] = [
  { name: "Healthcare", blurb: "Support for digital workflows and operational needs.", icon: "HeartPulse" },
  { name: "Education", blurb: "Solutions that support learning and administration.", icon: "GraduationCap" },
  { name: "Manufacturing", blurb: "Technology for modern industrial environments.", icon: "Factory" },
  { name: "Retail", blurb: "Support for customer and business processes.", icon: "Store" },
  { name: "Finance", blurb: "Solutions around financial and business operations.", icon: "Landmark" },
  { name: "Government", blurb: "Support for administrative and operational needs.", icon: "Building2" },
];

export type ProcessStep = { step: string; detail: string };

export const process: ProcessStep[] = [
  { step: "Consultation", detail: "Understand the business challenge and objectives." },
  { step: "Analysis", detail: "Study requirements, workflows and technology opportunities." },
  { step: "Development", detail: "Design and build the solution around agreed requirements." },
  { step: "Implementation", detail: "Deploy and integrate the solution into practical use." },
  { step: "Support", detail: "Ongoing technical support and improvement as needs evolve." },
];

export type Differentiator = { title: string; detail: string };

export const differentiators: Differentiator[] = [
  { title: "Innovation", detail: "Forward-thinking technology that solves practical business challenges." },
  { title: "Expertise", detail: "Specialized engineering and artificial intelligence capabilities." },
  { title: "Customer-focused", detail: "Solutions tailored around your organization's exact objectives." },
  { title: "Quality & reliability", detail: "Well-engineered, dependable software built for stability." },
  { title: "Cost-effective", detail: "Practical digital solutions built around real business needs." },
];
