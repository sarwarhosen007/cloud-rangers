import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading, Eyebrow, CTA } from "@/components/site/Section";
import { ToolChip } from "@/components/site/TechStack";
import { type Service } from "@/lib/services-data";
import { CASE_STUDIES_BY_SLUG } from "@/lib/case-studies-data";
import { type ReactNode } from "react";

export function ServiceDetail({
  service,
  icon,
}: {
  service: Service;
  icon: ReactNode;
}) {
  const related = service.relatedCaseStudy ? CASE_STUDIES_BY_SLUG[service.relatedCaseStudy] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-border/60">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary"
          >
            ← services
          </Link>
          <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-start sm:gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 sm:h-12 sm:w-12">
              {icon}
            </div>
            <div className="min-w-0">
              <Eyebrow>{service.short}</Eyebrow>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{service.title}</h1>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:mt-4 sm:text-lg">{service.tagline}</p>
            </div>
          </div>
          <div className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base">
            {service.overview}
          </div>
        </div>
      </section>

      {/* Tools */}
      <Section>
        <SectionHeading eyebrow="toolchain" title="Tools we use in this practice." />
        <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-2.5">
          {service.tools.map((t) => (
            <ToolChip key={t.slug} tool={t} />
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section className="border-t border-border/60">
        <SectionHeading
          eyebrow="engagement"
          title="Typical engagement approach."
          description="Small, senior teams. Short feedback loops. Everything checked into your repos, not ours."
        />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 sm:mt-10">
          {service.approach.map((a, i) => (
            <li
              key={a.step}
              className="relative rounded-xl border border-border bg-surface/60 p-4 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-background font-mono text-xs text-primary ring-1 ring-border sm:h-8 sm:w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold sm:text-base">{a.step}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground sm:mt-3">{a.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Outcomes */}
      <Section className="border-t border-border/60">
        <SectionHeading eyebrow="outcomes" title="What you get." />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:mt-8 lg:grid-cols-3">
          {service.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-3 rounded-lg border border-border bg-surface/40 p-3 sm:p-4">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm">{o}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Related case study */}
      {related && (
        <Section className="border-t border-border/60">
          <SectionHeading eyebrow="related case study" title={related.client} />
          <Link
            to="/work/$slug"
            params={{ slug: related.slug }}
            className="mt-6 flex flex-col gap-4 rounded-xl border border-border bg-surface/60 p-5 transition hover:border-primary/50 hover:bg-surface sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:p-6"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-[11px]">{related.industry}</p>
              <p className="mt-1 text-base font-semibold sm:text-lg">{related.headline}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              Read case study <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </Section>
      )}

      <CTA />
    </>
  );
}
