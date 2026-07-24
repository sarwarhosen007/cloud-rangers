import { createFileRoute, Link } from "@tanstack/react-router";
import { GitBranch, Boxes, Anchor, Activity, ArrowRight } from "lucide-react";
import { Section, SectionHeading, Eyebrow, CTA } from "@/components/site/Section";
import { ServiceCard } from "@/components/site/ServiceCard";
import { TechStackGrid } from "@/components/site/TechStack";
import { SERVICES } from "@/lib/services-data";

const ICONS = {
  cicd: <GitBranch className="h-5 w-5" />,
  "infrastructure-as-code": <Boxes className="h-5 w-5" />,
  "kubernetes-platform-engineering": <Anchor className="h-5 w-5" />,
  "observability-managed-ops": <Activity className="h-5 w-5" />,
} as const;

const LINKS = {
  cicd: "/services/cicd",
  "infrastructure-as-code": "/services/infrastructure-as-code",
  "kubernetes-platform-engineering": "/services/kubernetes-platform-engineering",
  "observability-managed-ops": "/services/observability-managed-ops",
} as const;

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Cloud Rangers DevOps Consultancy" },
      { name: "description", content: "CI/CD, Infrastructure as Code, Kubernetes & Platform Engineering, and 24×7 Managed Ops. Four tightly-scoped services from a DevOps-only consultancy." },
      { property: "og:title", content: "DevOps Services — Cloud Rangers" },
      { property: "og:description", content: "CI/CD, Terraform, Kubernetes, and 24×7 Managed Ops." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <Section className="pt-24">
        <Eyebrow>services --list</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Four services. Every one, done deeply.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          We deliberately don't do "cloud strategy", data engineering, or AI.
          Our practice is DevOps and Platform Engineering — that's it. Below is exactly what we deliver.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} service={s} to={LINKS[s.slug]} icon={ICONS[s.slug]} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border/60">
        <SectionHeading eyebrow="stack" title="One consistent toolchain across every engagement." />
        <div className="mt-10">
          <TechStackGrid />
        </div>
      </Section>

      <CTA />
    </>
  );
}
