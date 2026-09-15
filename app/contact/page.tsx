import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { LeadForm } from "@/components/lead-form";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a business challenge, technology requirement or idea to explore? Start a conversation with Sky Quantech AI.",
};

const mapsUrl = `https://www.google.com/maps?q=${contact.coordinates.replace(/\s+/g, "")}`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation"
        intro="Have a business challenge, a technology requirement or an idea to explore? We'd like to hear about it."
      />

      <section className="py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Reach us</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Mail className="size-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Email</div>
                  <a href={`mailto:${contact.email}`} className="text-sm text-muted-foreground hover:text-foreground">
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Phone className="size-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Phone</div>
                  <div className="flex flex-col text-sm text-muted-foreground">
                    {contact.phones.map((p) => (
                      <a key={p} href={`tel:${p}`} className="hover:text-foreground">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Office</div>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {contact.address}
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={100}>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">Send us a message</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                We'll get back to you at the email you provide.
              </p>
              <div className="mt-6">
                <LeadForm variant="contact" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
