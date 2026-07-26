import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { CalendlyInline, CalendlyPopupLink } from "@/components/site/CalendlyEmbed";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cloud Rangers, Auckland NZ" },
      { name: "description", content: "Book a discovery call with Cloud Rangers. Email info@cloudrangers.co.nz — Auckland, New Zealand." },
      { property: "og:title", content: "Contact — Cloud Rangers" },
      { property: "og:description", content: "Book a discovery call with our DevOps team." },
    ],
  }),
  component: Contact,
});

const CALENDLY_URL = "https://calendly.com/hosensarwar072/30min";

function Contact() {
  return (
    <Section className="pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20">
      {/* ── Page header ── */}
      <div className="mb-8 sm:mb-12">
        <Eyebrow>./contact</Eyebrow>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Let's talk delivery.
        </h1>
        <p className="mt-4 max-w-xl text-base sm:text-lg text-muted-foreground">
          Tell us about your team, your stack, and where things hurt. We'll come
          back within one business day.
        </p>
      </div>

      {/* ── Main grid: sidebar + content ── */}
      <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">

        {/* ── Left sidebar: contact info ── */}
        <aside className="lg:col-span-2">
          <ul className="flex flex-row flex-wrap gap-3 sm:gap-4 lg:flex-col lg:space-y-4 lg:gap-0">
            {/* Email */}
            <li className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 px-4 py-3 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:rounded-none">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                <Mail className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Email</p>
                <a
                  href="mailto:info@cloudrangers.co.nz"
                  className="block truncate font-mono text-xs sm:text-sm hover:text-primary transition-colors"
                >
                  info@cloudrangers.co.nz
                </a>
              </div>
            </li>

            {/* Location */}
            <li className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 px-4 py-3 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:rounded-none">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Location</p>
                <p className="text-xs sm:text-sm">Auckland, New Zealand</p>
              </div>
            </li>

            {/* Discovery call */}
            <li className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 px-4 py-3 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:rounded-none">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                <Calendar className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Discovery Call</p>
                <CalendlyPopupLink
                  url={CALENDLY_URL}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Book a 30-min intro <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </CalendlyPopupLink>
              </div>
            </li>
          </ul>

          {/* Desktop-only blurb */}
          <div className="mt-8 hidden lg:block rounded-xl border border-border/50 bg-surface/30 p-5">
            <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">
              // We're a small, senior team.<br />
              // No account managers, no hand-offs.<br />
              // You'll talk directly to the engineers.
            </p>
          </div>
        </aside>

        {/* ── Right content: Calendly inline embed ── */}
        <div className="lg:col-span-3">
          <CalendlyInline url={CALENDLY_URL} />
        </div>
      </div>
    </Section>
  );
}
