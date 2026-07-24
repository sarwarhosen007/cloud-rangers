import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow, SectionHeading, Terminal, CTA } from "@/components/site/Section";
import { ServiceCard } from "@/components/site/ServiceCard";
import { TechStackGrid } from "@/components/site/TechStack";
import { SERVICES } from "@/lib/services-data";
import { GitBranch, Boxes, Anchor, Activity } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

const ICONS = {
  cicd: <GitBranch className="h-5 w-5" />,
  "infrastructure-as-code": <Boxes className="h-5 w-5" />,
  "kubernetes-platform-engineering": <Anchor className="h-5 w-5" />,
  "observability-managed-ops": <Activity className="h-5 w-5" />,
} as const;

const SERVICE_LINKS = {
  cicd: "/services/cicd",
  "infrastructure-as-code": "/services/infrastructure-as-code",
  "kubernetes-platform-engineering": "/services/kubernetes-platform-engineering",
  "observability-managed-ops": "/services/observability-managed-ops",
} as const;

const CLIENTS = [
  "Plant & Food Research",
  "Bioeconomy Science Institute",
  "Kiwifruit Breeding Centre",
  "DataEngine",
  "Synergia",
  "ArchiPro",
  "Assure Quality",
  "Worksafe NZ",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cloud Rangers — DevOps & Platform Engineering, Auckland NZ" },
      { name: "description", content: "New Zealand DevOps consultancy. CI/CD, Terraform, Kubernetes, and 24×7 managed ops for teams that ship fast, safely." },
      { property: "og:title", content: "Cloud Rangers — DevOps & Platform Engineering" },
      { property: "og:description", content: "DevOps & Platform Engineering for teams that ship fast, safely." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" aria-hidden />
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:py-32 lg:px-8">
          <div className="relative">
            <Eyebrow>whoami — cloud_rangers.nz</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">DevOps & Platform Engineering</span>{" "}
              for teams that ship fast, safely.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We build CI/CD pipelines, Terraform foundations, Kubernetes platforms,
              and 24×7 managed operations for New Zealand engineering teams.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Book a Discovery Call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-5 py-3 text-sm font-medium hover:bg-white/5"
              >
                See Our Work
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                { k: "MTTR", v: "minutes" },
                { k: "Deploys", v: "on-demand" },
                { k: "On-call", v: "24×7" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.k}</dt>
                  <dd className="mt-1 text-lg font-semibold text-primary">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:pl-6">
            <Terminal
              lines={[
                { comment: true, text: "Deploy on merge to main" },
                { prompt: true, text: "gh workflow run deploy.yml" },
                { text: "✓ terraform plan   → 0 to add, 0 to destroy" },
                { text: "✓ docker build     → sha256:9a2f… (28.4 MB)" },
                { text: "✓ trivy scan       → no critical CVEs" },
                { text: "✓ argocd sync app  → healthy" },
                { text: "✓ canary 25%       → error rate 0.02%" },
                { text: "✓ promoted to 100% → 47s elapsed" },
                { prompt: true, text: "kubectl get pods -n prod" },
                { text: "web-7d… Running   1/1   3s" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-b border-border/60 bg-surface/30 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Trusted by engineering teams across Aotearoa
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {CLIENTS.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-background/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="services"
            title="Four pillars. One tightly-scoped practice."
            description="We do DevOps and Platform Engineering — nothing else. That focus is why our work compounds."
          />
          <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80">
            All services <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.slug}
              service={s}
              to={SERVICE_LINKS[s.slug]}
              icon={ICONS[s.slug]}
            />
          ))}
        </div>
      </Section>

      {/* TECH STACK */}
      <Section className="border-t border-border/60">
        <SectionHeading
          eyebrow="tech stack"
          title="Tools we use — every day, in production."
          description="Opinionated defaults, chosen for reliability and long-term maintainability."
        />
        <div className="mt-10">
          <TechStackGrid />
        </div>
      </Section>

      <CTA />
    </>
  );
}
