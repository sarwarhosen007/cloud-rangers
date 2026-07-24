import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow, CTA } from "@/components/site/Section";
import { CASE_STUDIES } from "@/lib/case-studies-data";
import { ToolIcon } from "@/components/site/TechStack";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Case Studies — Cloud Rangers DevOps Work" },
      { name: "description", content: "Selected DevOps and Platform Engineering case studies from Plant & Food Research, Worksafe NZ, and ArchiPro." },
      { property: "og:title", content: "Case Studies — Cloud Rangers" },
      { property: "og:description", content: "How we've helped New Zealand teams ship faster and more reliably." },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <>
      <Section className="pt-16 sm:pt-20 lg:pt-24">
        <Eyebrow>./case-studies</Eyebrow>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Selected work.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:mt-5 sm:text-lg">
          A snapshot of DevOps engagements across research, government, and marketplace SaaS.
        </p>
      </Section>

      <Section className="pt-0">
        {/* 1 col mobile → 2 col tablet → 3 col desktop */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {CASE_STUDIES.map((c) => (
            <Link
              key={c.slug}
              to="/work/$slug"
              params={{ slug: c.slug }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface/60 p-5 transition hover:border-primary/50 hover:bg-surface sm:p-6"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[11px]">
                {c.industry}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">{c.client}</h3>
              <p className="mt-2 text-sm text-muted-foreground sm:mt-3">{c.headline}</p>

              <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                {c.tools.slice(0, 4).map((t) => (
                  <span key={t.slug} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/60 px-2 py-1 font-mono text-[11px]">
                    <ToolIcon tool={t} size={12} /> {t.name}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary sm:pt-6">
                Read case study <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
