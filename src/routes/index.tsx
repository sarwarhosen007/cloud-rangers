import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow, SectionHeading, Terminal, CTA } from "@/components/site/Section";
import { ServiceCard } from "@/components/site/ServiceCard";
import { TechStackGrid } from "@/components/site/TechStack";
import { PRIMARY_SERVICES } from "@/lib/services-data";
import {
  Cloud,
  Boxes,
  GitBranch,
  Anchor,
  Database,
  ShieldCheck,
  MonitorDot,
  Layers,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

const ICONS: Record<string, React.ReactNode> = {
  "cloud-strategy":          <Cloud className="h-5 w-5" />,
  "infrastructure-as-code":  <Boxes className="h-5 w-5" />,
  "devops-automation":       <GitBranch className="h-5 w-5" />,
  "platform-engineering":    <Anchor className="h-5 w-5" />,
  "data-ai":                 <Database className="h-5 w-5" />,
  "cyber-security":          <ShieldCheck className="h-5 w-5" />,
  "managed-services":        <MonitorDot className="h-5 w-5" />,
  "application-modernisation": <Layers className="h-5 w-5" />,
};

const SERVICE_LINKS: Record<string, string> = {
  "cloud-strategy":            "/services/cloud-strategy",
  "infrastructure-as-code":    "/services/infrastructure-as-code",
  "devops-automation":         "/services/devops-automation",
  "platform-engineering":      "/services/platform-engineering",
  "data-ai":                   "/services/data-ai",
  "cyber-security":            "/services/cyber-security",
  "managed-services":          "/services/managed-services",
  "application-modernisation": "/services/application-modernisation",
};

const CLIENTS: { name: string; logo: string }[] = [
  { name: "Plant & Food Research", logo: "/client/the_new_zealand_institute_for_plant_and_food_research_limited_logo.jfif" },
  { name: "Bioeconomy Science", logo: "/client/the_new_zealand_institute_for_bioeconomy_science_logo.jfif" },
  { name: "Kiwifruit Breeding Centre", logo: "/client/kiwifruit_breeding_centre_logo.jfif" },
  { name: "DataEngine NZ", logo: "/client/dataenginenz_logo.jfif" },
  { name: "Synergia", logo: "/client/synergia_ltd_logo.jfif" },
  { name: "ArchiPro", logo: "/client/archipro-logo-parnell.jpg.webp" },
  { name: "Assure Quality", logo: "/client/asurequality_logo.jfif" },
  { name: "Digital Sphere", logo: "/client/digital-sphere.jfif" },
  { name: "Phoenix Property", logo: "/client/phoenix-property-logo3.png" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cloud Rangers — Cloud Strategy, DevOps & Platform Engineering, NZ" },
      { name: "description", content: "New Zealand cloud consultancy. Cloud Strategy, DevOps, Platform Engineering, Data & AI, Cyber Security, and 24×7 Managed Ops for enterprise teams." },
      { property: "og:title", content: "Cloud Rangers — Cloud & DevOps Consultancy" },
      { property: "og:description", content: "Enterprise cloud services across AWS & Azure — delivered by New Zealand's leading cloud consultancy." },
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
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-32 lg:px-8">
          <div className="relative">
            <Eyebrow>whoami — cloud_rangers.nz</Eyebrow>
            <h1 className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
              <span className="text-gradient">Enterprise Cloud Consulting</span>{" "}
              for teams that move fast, safely.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Cloud strategy, DevOps, platform engineering, data & AI, cyber security,
              and 24×7 managed operations — delivered by New Zealand's leading cloud consultancy.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:px-5 sm:py-3"
              >
                Book a Discovery Call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2.5 text-sm font-medium hover:bg-foreground/5 sm:px-5 sm:py-3"
              >
                See Our Work
              </Link>
            </div>

            <dl className="mt-10 grid max-w-xs grid-cols-3 gap-4 sm:max-w-md sm:gap-6">
              {[
                { k: "MTTR", v: "minutes" },
                { k: "Deploys", v: "on-demand" },
                { k: "On-call", v: "24×7" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.k}</dt>
                  <dd className="mt-1 text-base font-semibold text-primary sm:text-lg">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Terminal — hidden on mobile, shown md+ */}
          <div className="relative hidden sm:block lg:pl-6">
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
      <section className="border-b border-border/60 bg-surface/30 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:text-[11px]">
            Trusted by engineering teams across Aotearoa
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:mt-8 sm:gap-6">
            {CLIENTS.map((c) => (
              <div
                key={c.name}
                className="group flex w-32 flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/60 px-3 py-3 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:shadow-md sm:w-36"
                title={c.name}
              >
                <div className="flex h-10 w-full items-center justify-center">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-center font-mono text-[9px] leading-tight text-foreground/60 sm:text-[10px]">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section>
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6">
          <SectionHeading
            eyebrow="services"
            title="Full-spectrum cloud services."
            description="From cloud strategy and enterprise architecture through to DevOps, data platforms, security, and 24×7 managed operations."
          />
          <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80">
            All services <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {PRIMARY_SERVICES.map((s) => (
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
          description="Opinionated defaults across AWS, Azure, DevOps, data, and security — chosen for reliability and long-term maintainability."
        />
        <div className="mt-8 sm:mt-10">
          <TechStackGrid />
        </div>
      </Section>

      <CTA />
    </>
  );
}
