import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { company, contact, nav, capabilities } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-lg bg-white ring-1 ring-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/icon_logo.png"
                alt=""
                className="h-7 w-7 object-contain"
                width={36}
                height={36}
              />
            </span>
            <span className="font-display text-base font-bold tracking-tight">
              SKY QUANTECH <span className="text-primary">AI</span>
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {company.legalName} works across artificial intelligence, asset management,
            automation and technology consulting.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {nav.map((i) => (
              <li key={i.slug}>
                <Link href={i.href} className="transition-colors hover:text-foreground">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Capabilities</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {capabilities.map((c) => (
              <li key={c.slug}>
                <Link href="/solutions" className="transition-colors hover:text-foreground">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${contact.email}`} className="hover:text-foreground">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="flex flex-col">
                {contact.phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="hover:text-foreground">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{contact.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {year} {company.legalName}. All rights reserved.</span>
          <span>{contact.website}</span>
        </Container>
      </div>
    </footer>
  );
}
