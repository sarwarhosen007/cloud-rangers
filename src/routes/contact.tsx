import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Calendar, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
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
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "calendar">("calendar");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Contact form (UI only):", data);
    toast.success("Message sent — we'll be in touch within one business day.");
    setSubmitted(true);
    e.currentTarget.reset();
  }

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
          {/* On mobile/tablet: horizontal scrolling pill row */}
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

          {/* Desktop-only blurb below the contact info */}
          <div className="mt-8 hidden lg:block rounded-xl border border-border/50 bg-surface/30 p-5">
            <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">
              // We're a small, senior team.<br />
              // No account managers, no hand-offs.<br />
              // You'll talk directly to the engineers.
            </p>
          </div>
        </aside>

        {/* ── Right content: tab switcher + calendar / form ── */}
        <div className="lg:col-span-3">
          {/* Tab switcher */}
          <div className="mb-4 sm:mb-5 flex gap-1 rounded-xl border border-border bg-surface/40 p-1">
            <button
              id="tab-calendar"
              onClick={() => setActiveTab("calendar")}
              className={`flex-1 rounded-lg py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all ${
                activeTab === "calendar"
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              📅 Book a call
            </button>
            <button
              id="tab-form"
              onClick={() => setActiveTab("form")}
              className={`flex-1 rounded-lg py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all ${
                activeTab === "form"
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ✉️ Send a message
            </button>
          </div>

          {/* Calendly inline embed */}
          {activeTab === "calendar" && (
            <CalendlyInline url={CALENDLY_URL} />
          )}

          {/* Contact form */}
          {activeTab === "form" && (
            <form
              onSubmit={onSubmit}
              className="relative rounded-2xl border border-border bg-surface/60 p-5 sm:p-6 lg:p-8"
            >
              <div className="absolute inset-0 grid-bg pointer-events-none rounded-2xl opacity-30" aria-hidden />
              <div className="relative grid gap-4 sm:gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Ada Lovelace" required />
                <Field label="Email" name="email" type="email" placeholder="ada@company.co.nz" required />
                <Field label="Company" name="company" placeholder="Your company" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your pipelines, infrastructure, or what you'd like to change…"
                    className="mt-2 w-full rounded-md border border-input bg-background/60 px-3 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
                <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  {submitted ? (
                    <p className="inline-flex items-center gap-2 text-sm text-primary">
                      <Check className="h-4 w-4" /> Sent — we'll be in touch.
                    </p>
                  ) : (
                    <p className="font-mono text-[11px] text-muted-foreground">
                      // We reply within 1 business day.
                    </p>
                  )}
                  <button
                    type="submit"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 active:scale-[0.98]"
                  >
                    Send message <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-input bg-background/60 px-3 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}
