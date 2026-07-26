import { createFileRoute, Link } from "@tanstack/react-router";
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
import { Section, SectionHeading, Eyebrow, CTA } from "@/components/site/Section";
import { ServiceCard } from "@/components/site/ServiceCard";
import { TechStackGrid } from "@/components/site/TechStack";
import { PRIMARY_SERVICES } from "@/lib/services-data";

const ICONS: Record<string, React.ReactNode> = {
  "cloud-strategy":            <Cloud className="h-5 w-5" />,
  "infrastructure-as-code":    <Boxes className="h-5 w-5" />,
  "devops-automation":         <GitBranch className="h-5 w-5" />,
  "platform-engineering":      <Anchor className="h-5 w-5" />,
  "data-ai":                   <Database className="h-5 w-5" />,
  "cyber-security":            <ShieldCheck className="h-5 w-5" />,
  "managed-services":          <MonitorDot className="h-5 w-5" />,
  "application-modernisation": <Layers className="h-5 w-5" />,
};

const LINKS: Record<string, string> = {
  "cloud-strategy":            "/services/cloud-strategy",
  "infrastructure-as-code":    "/services/infrastructure-as-code",
  "devops-automation":         "/services/devops-automation",
  "platform-engineering":      "/services/platform-engineering",
  "data-ai":                   "/services/data-ai",
  "cyber-security":            "/services/cyber-security",
  "managed-services":          "/services/managed-services",
  "application-modernisation": "/services/application-modernisation",
};

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Cloud Rangers Cloud Consultancy" },
      { name: "description", content: "Cloud Strategy, DevOps, Platform Engineering, Data & AI, Cyber Security, and Managed Services. Full-spectrum cloud consulting from New Zealand's leading cloud consultancy." },
      { property: "og:title", content: "Cloud Services — Cloud Rangers" },
      { property: "og:description", content: "Cloud Strategy, DevOps, Platform Engineering, Data & AI, Cyber Security, and Managed Services." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <Section className="pt-16 sm:pt-20 lg:pt-24">
        <Eyebrow>services --list</Eyebrow>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Full-spectrum cloud services, delivered by specialists.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:mt-5 sm:text-lg">
          From cloud strategy and enterprise architecture through to DevOps automation,
          platform engineering, data & AI, cyber security, and 24×7 managed operations
          — we cover the full cloud lifecycle.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {PRIMARY_SERVICES.map((s) => (
            <ServiceCard key={s.slug} service={s} to={LINKS[s.slug]} icon={ICONS[s.slug]} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border/60">
        <SectionHeading eyebrow="stack" title="One consistent toolchain across every engagement." />
        <div className="mt-8 sm:mt-10">
          <TechStackGrid />
        </div>
      </Section>

      <CTA />
    </>
  );
}
