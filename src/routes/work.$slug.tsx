import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section, Eyebrow, CTA } from "@/components/site/Section";
import { ToolChip } from "@/components/site/TechStack";
import { CASE_STUDIES_BY_SLUG, type CaseStudy } from "@/lib/case-studies-data";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }): { study: CaseStudy } => {
    const study = CASE_STUDIES_BY_SLUG[params.slug];
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Case study not found — Cloud Rangers" }, { name: "robots", content: "noindex" }] };
    }
    const { study } = loaderData;
    return {
      meta: [
        { title: `${study.client} — Case Study | Cloud Rangers` },
        { name: "description", content: study.headline },
        { property: "og:title", content: `${study.client} — Cloud Rangers` },
        { property: "og:description", content: study.headline },
      ],
    };
  },
  notFoundComponent: () => (
    <Section className="pt-24">
      <p className="font-mono text-sm text-primary">404 / case_study</p>
      <h1 className="mt-3 text-3xl font-bold">Case study not found.</h1>
      <Link to="/work" className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary">
        ← back to all case studies
      </Link>
    </Section>
  ),
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const { study } = Route.useLoaderData() as { study: CaseStudy };

  return (
    <>
      <section className="relative border-b border-border/60">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Link to="/work" className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary">
            ← case studies
          </Link>
          <Eyebrow>{study.industry}</Eyebrow>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{study.client}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{study.headline}</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-primary">Challenge</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{study.challenge}</p>
            </div>

            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-primary">What we did</h2>
              <ul className="mt-3 space-y-3">
                {study.work.map((w) => (
                  <li key={w} className="flex items-start gap-3 rounded-lg border border-border bg-surface/40 p-4">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm">{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-primary">Outcome</h2>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {study.outcome.map((o) => (
                  <li key={o} className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit rounded-xl border border-border bg-surface/60 p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Tech used</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.tools.map((t) => (
                <ToolChip key={t.slug} tool={t} />
              ))}
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Start a similar project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <CTA title="Have a similar challenge?" description="Book a discovery call and we'll walk through what a phased engagement could look like." />
    </>
  );
}
