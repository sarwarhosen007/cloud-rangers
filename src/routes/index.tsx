import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState, type CSSProperties } from "react";
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
  "cloud-strategy": <Cloud className="h-5 w-5" />,
  "infrastructure-as-code": <Boxes className="h-5 w-5" />,
  "devops-automation": <GitBranch className="h-5 w-5" />,
  "platform-engineering": <Anchor className="h-5 w-5" />,
  "data-ai": <Database className="h-5 w-5" />,
  "cyber-security": <ShieldCheck className="h-5 w-5" />,
  "managed-services": <MonitorDot className="h-5 w-5" />,
  "application-modernisation": <Layers className="h-5 w-5" />,
};

const SERVICE_LINKS: Record<string, string> = {
  "cloud-strategy": "/services/cloud-strategy",
  "infrastructure-as-code": "/services/infrastructure-as-code",
  "devops-automation": "/services/devops-automation",
  "platform-engineering": "/services/platform-engineering",
  "data-ai": "/services/data-ai",
  "cyber-security": "/services/cyber-security",
  "managed-services": "/services/managed-services",
  "application-modernisation": "/services/application-modernisation",
};

const CLIENTS: { name: string; logo: string }[] = [
  { name: "New Zealand Plant & Food Research", logo: "/client/the_new_zealand_institute_for_plant_and_food_research_limited_logo.jfif" },
  { name: "Bioeconomy Science", logo: "/client/the_new_zealand_institute_for_bioeconomy_science_logo.jfif" },
  { name: "Kiwifruit Breeding Centre", logo: "/client/kiwifruit_breeding_centre_logo.jfif" },
  { name: "DataEngine", logo: "/client/dataenginenz_logo.jfif" },
  { name: "Synergia", logo: "/client/synergia_ltd_logo.jfif" },
  { name: "ArchiPro", logo: "/client/archipro-logo-parnell.png" },
  { name: "Assure Quality", logo: "/client/asurequality_logo.jfif" },
  { name: 'Worksafe NZ', logo: '/client/work-safe-nz.jpeg' },
  { name: 'Little Q', logo: '/client/little-q.png' },
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
  const [marquePaused, setMarqueePaused] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" aria-hidden />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-32 lg:px-8">
          <div className="relative">
            <div className="hero-item" style={{ "--hero-delay": "0ms" } as CSSProperties}>
              <Eyebrow>whoami — cloud_rangers.nz</Eyebrow>
            </div>
            <div className="hero-item" style={{ "--hero-delay": "100ms" } as CSSProperties}>
              <h1 className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                <span className="text-gradient">Enterprise Cloud Consulting</span>{" "}
                for teams that move fast, safely.
              </h1>
            </div>
            <div className="hero-item" style={{ "--hero-delay": "220ms" } as CSSProperties}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Cloud strategy, DevOps, platform engineering, data &amp; AI, cyber security,
                and 24×7 managed operations — delivered by New Zealand's leading cloud consultancy.
              </p>
            </div>
            <div className="hero-item" style={{ "--hero-delay": "340ms" } as CSSProperties}>
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
            </div>
            <div className="hero-item" style={{ "--hero-delay": "460ms" } as CSSProperties}>
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
          </div>

          {/* Terminal — hidden on mobile, shown md+ */}
          <div
            className="slide-right in-view relative hidden sm:block lg:pl-6"
            style={{ "--anim-delay": "300ms" } as CSSProperties}
          >
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

      {/* CLIENTS — infinite marquee */}
      <section className="relative overflow-hidden border-y border-border/40 py-10 sm:py-14">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 bg-surface/20" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" aria-hidden />

        {/* Headline */}
        <div className="relative mb-8 text-center sm:mb-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70 sm:text-[11px]">
            trusted by
          </p>
          <p className="mt-1.5 text-sm font-semibold tracking-tight text-foreground sm:text-base">
            Engineering teams across <span className="text-primary">Aotearoa New Zealand</span>
          </p>
        </div>

        {/* Marquee row 1 — scrolls left */}
        <div className="relative">
          {/* Left/right fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent sm:w-32" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent sm:w-32" aria-hidden />

          <div
            className="flex overflow-hidden cursor-pointer"
            onMouseEnter={() => setMarqueePaused(true)}
            onMouseLeave={() => setMarqueePaused(false)}
          >
            <div
              className="flex shrink-0 items-center gap-5 pr-5"
              style={{
                animation: "marquee-ltr 35s linear infinite",
                animationPlayState: marquePaused ? "paused" : "running",
              }}
            >
              {[...CLIENTS, ...CLIENTS].map((c, i) => (
                <div
                  key={`r1-${i}`}
                  className="group flex w-44 shrink-0 flex-col items-center gap-3 rounded-2xl border border-border/50 bg-background/70 px-4 py-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-surface hover:shadow-primary/10 hover:shadow-md sm:w-48"
                  title={c.name}
                >
                  <div className="flex h-10 w-full items-center justify-center opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0">
                    <img src={c.logo} alt={c.name} className="max-h-full max-w-full object-contain" loading="lazy" />
                  </div>
                  <span className="text-center text-[11px] font-medium leading-snug text-foreground/70 transition-colors duration-300 group-hover:text-foreground sm:text-xs">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative mt-10 flex justify-center">
          <dl className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 divide-x divide-border/40 sm:gap-x-10">
            {[
              { v: "11+", k: "Clients" },
              { v: "100%", k: "NZ-based" },
              { v: "24×7", k: "On-call" },
              { v: "5★", k: "Rated" },
            ].map((s, i) => (
              <div key={s.k} className={`flex flex-col items-center px-5 ${i === 0 ? "" : ""}`}>
                <dd className="text-xl font-bold text-primary sm:text-2xl">{s.v}</dd>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-[11px]">{s.k}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* CSS keyframes injected inline */}
        <style>{`
          @keyframes marquee-ltr {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
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
          {PRIMARY_SERVICES.map((s, i) => (
            <ServiceCard
              key={s.slug}
              service={s}
              to={SERVICE_LINKS[s.slug]}
              icon={ICONS[s.slug]}
              delay={i * 80}
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
