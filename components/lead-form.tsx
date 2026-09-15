"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring";

export function LeadForm({ variant = "contact" }: { variant?: "contact" | "careers" }) {
  const [status, setStatus] = React.useState<"idle" | "error">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No submission endpoint is configured yet — never fake success.
    setStatus("error");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">
          Name
          <input name="name" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Email
          <input name="email" type="email" required autoComplete="email" className={fieldClass} />
        </label>
      </div>
      {variant === "careers" ? (
        <label className="grid gap-1.5 text-sm font-medium">
          Role or area of interest
          <input name="role" className={fieldClass} />
        </label>
      ) : (
        <label className="grid gap-1.5 text-sm font-medium">
          Organization
          <input name="org" className={fieldClass} />
        </label>
      )}
      <label className="grid gap-1.5 text-sm font-medium">
        {variant === "careers" ? "Tell us about yourself" : "How can we help?"}
        <textarea name="message" rows={5} required className={cn(fieldClass, "resize-y")} />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg">
          {variant === "careers" ? "Share your profile" : "Send message"}
        </Button>
        {status === "error" && (
          <p className="text-sm text-muted-foreground" role="status">
            Online submission isn&apos;t wired up yet — please email{" "}
            <a href={`mailto:${contact.email}`} className="font-medium text-primary hover:underline">
              {contact.email}
            </a>{" "}
            and we&apos;ll respond.
          </p>
        )}
      </div>
    </form>
  );
}
