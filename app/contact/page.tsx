import type { Metadata } from "next";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { LeadForm } from "@/components/lead-form";
import { contact } from "@/lib/site";
import { contactContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a business challenge, technology requirement or idea to explore? Start a conversation with Sky Quantech AI.",
};

const mapsUrl = `https://www.google.com/maps?q=${contact.coordinates.replace(/\s+/g, "")}`;

export default function ContactPage() {
  const l = contactContent.channels.labels;
  return (
    <>
      <PageHero {...contactContent.hero} />

      {/* Channels + form */}
      <section className="border-b border-border py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">{contactContent.channels.eyebrow}</p>
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
              {contactContent.channels.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {contactContent.channels.intro}
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Mail className="size-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Email inquiry</div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {contact.email}
                  </a>
                  <div className="text-xs text-muted-foreground/80">{l.email}</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Phone className="size-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Telephone</div>
                  <div className="flex flex-col text-sm text-muted-foreground">
                    {contact.phones.map((p) => (
                      <a key={p} href={`tel:${p}`} className="hover:text-foreground">
                        {p}
                      </a>
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground/80">{l.phone}</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Corporate headquarters</div>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {contact.address}
                  </a>
                  <div className="text-xs text-muted-foreground/80">
                    {l.address} · {contact.coordinates}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Globe className="size-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Official domain</div>
                  <a
                    href={`https://${contact.website}`}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {contact.website}
                  </a>
                  <div className="text-xs text-muted-foreground/80">{l.website}</div>
                </div>
              </li>
            </ul>

            <p className="mt-8 text-sm text-muted-foreground">
              {contactContent.channels.note}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={100}>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">
                {contactContent.form.title}
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {contactContent.form.intro}
              </p>
              <div className="mt-6">
                <LeadForm variant="contact" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Project scoping */}
      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={contactContent.scoping.eyebrow}
              title={contactContent.scoping.title}
              intro={contactContent.scoping.intro}
            />
          </Reveal>
          <ol className="mt-12 grid gap-6 lg:grid-cols-3">
            {contactContent.scoping.phases.map((p, i) => (
              <Reveal
                key={p.label}
                as="li"
                delay={i * 70}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <span className="font-mono text-xs tabular-nums text-primary">
                  Phase {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">
                  {p.label}
                </h3>
                <p className="mt-2 font-medium">{p.question}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.detail}
                </p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
