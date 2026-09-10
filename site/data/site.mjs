// Single source of truth for every value repeated across pages.
// Anything marked PLACEHOLDER must be replaced with client-verified data.

export const company = {
  name: 'SKY QUANTECH AI',
  legalName: 'SKY QUANTECH AI Pvt. Ltd.',
  // Confirmed service areas — do not extend without client sign-off.
  services: ['AI Solutions', 'Software Development', 'Automation', 'IT / Technology Consulting'],
};

// Supplied by the client.
export const contact = {
  email: 'info@skyquantech.ai',
  // Both numbers are published; the first is the primary line.
  phones: ['9985383863', '8885333344'],
  address: 'Silicon Valley, Madhapur, Hyderabad',
  website: 'www.skyquantech.ai',
  // Office coordinates, client-supplied.
  coordinates: '17.449458, 78.385876',
};

export const nav = [
  { slug: 'index', label: 'Home', href: '/index.html' },
  { slug: 'about', label: 'About', href: '/about.html' },
  { slug: 'solutions', label: 'Solutions', href: '/solutions.html' },
  { slug: 'industries', label: 'Industries', href: '/industries.html' },
  { slug: 'why-us', label: 'Why Us', href: '/why-us.html' },
  { slug: 'process', label: 'Process', href: '/process.html' },
  { slug: 'case-studies', label: 'Case Studies', href: '/case-studies.html' },
  { slug: 'careers', label: 'Careers', href: '/careers.html' },
  { slug: 'contact', label: 'Contact', href: '/contact.html' },
];

export const primaryCta = { label: 'Talk to Us', href: '/contact.html' };

export const industries = ['Healthcare', 'Education', 'Manufacturing', 'Retail', 'Finance', 'Government'];

export const process = [
  { step: 'Consultation', detail: 'Understand the business challenge and requirements.' },
  { step: 'Analysis', detail: 'Understand the workflow and identify practical technology opportunities.' },
  { step: 'Development', detail: 'Build the solution around agreed requirements.' },
  { step: 'Implementation', detail: 'Put the developed solution into practical use.' },
  { step: 'Support', detail: 'Support improvement and maintenance as requirements evolve.' },
];

export const differentiators = [
  'Innovation', 'Expertise', 'Customer-focused approach', 'Quality & Reliability', 'Cost-effective solutions',
];

export const seo = {
  index: {
    title: 'SKY QUANTECH AI | Intelligent Technology Solutions',
    description: 'SKY QUANTECH AI combines artificial intelligence, software engineering and automation to help organizations turn complex challenges into practical digital solutions.',
  },
  about: {
    title: 'About SKY QUANTECH AI | AI & Technology',
    description: 'Who we are, how we work, and the technology areas we focus on: AI solutions, software development, automation and technology consulting.',
  },
  solutions: {
    title: 'Solutions | AI, Software & Automation | SKY QUANTECH AI',
    description: 'AI solutions, software development, automation and technology consulting built around the problem you actually need to solve.',
  },
  industries: {
    title: 'Industries | SKY QUANTECH AI',
    description: 'Technology applied across healthcare, education, manufacturing, retail, finance and government.',
  },
  'why-us': {
    title: 'Why Choose SKY QUANTECH AI',
    description: 'Innovation, expertise, a customer-focused approach, quality and reliability, and cost-effective solutions.',
  },
  process: {
    title: 'Our Process | SKY QUANTECH AI',
    description: 'How we work: consultation, analysis, development, implementation and ongoing support.',
  },
  'case-studies': {
    title: 'Case Studies | AI & Computer Vision Projects',
    description: 'AI and computer vision inspection projects across railway overhead equipment, rolling stock and power grid infrastructure.',
  },
  careers: {
    title: 'Careers | SKY QUANTECH AI',
    description: 'Build technology that solves real problems. Share your profile with our AI, computer vision, software and automation teams.',
  },
  contact: {
    title: 'Contact SKY QUANTECH AI',
    description: 'Have a business challenge, technology requirement or idea to explore? Start a conversation with SKY QUANTECH AI.',
  },
};
