import { createFileRoute } from "@tanstack/react-router";
import { Cloud } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { SERVICES_BY_SLUG } from "@/lib/services-data";
import { Section, SectionHeading } from "@/components/site/Section";

// Cloud Services breakdown from Slide 7
const CLOUD_PLATFORMS = {
  aws: {
    label: "Amazon Web Services",
    color: "bg-amber-500/10 border-amber-500/30 text-amber-400",
    items: [
      "Landing Zones", "Control Tower", "Organizations", "VPC & Networking",
      "IAM & Security", "Lambda", "EKS", "ECS", "RDS / Aurora",
      "CloudFront", "S3", "Disaster Recovery",
    ],
  },
  azure: {
    label: "Microsoft Azure",
    color: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    items: [
      "Landing Zones", "Azure Kubernetes Service", "Azure DevOps",
      "Azure Virtual WAN", "Azure Maps", "Azure AI", "Synapse",
      "ADF", "Power Platform", "Azure Security Center",
    ],
  },
  hybrid: {
    label: "Hybrid & Multi-Cloud",
    color: "bg-violet-500/10 border-violet-500/30 text-violet-400",
    items: [
      "AWS", "Azure", "VMware", "Kubernetes", "Private Cloud", "Hybrid Networking",
    ],
  },
};

export const Route = createFileRoute("/services/cloud-strategy")({
  head: () => ({
    meta: [
      { title: "Cloud Strategy & Architecture — Cloud Rangers" },
      { name: "description", content: "Enterprise cloud strategy, architecture, migration, and landing zones on AWS and Azure. New Zealand cloud consultancy." },
      { property: "og:title", content: "Cloud Strategy & Architecture — Cloud Rangers" },
      { property: "og:description", content: "Enterprise cloud transformation, from vision to landing zone." },
    ],
  }),
  component: CloudStrategyPage,
});

function CloudStrategyPage() {
  const service = SERVICES_BY_SLUG["cloud-strategy"];
  return (
    <>
      <ServiceDetail service={service} icon={<Cloud className="h-6 w-6" />} />

      {/* Cloud Platforms Breakdown */}
      <Section className="border-t border-border/60">
        <SectionHeading
          eyebrow="cloud platforms"
          title="AWS, Azure & Hybrid — we go deep on all three."
          description="Our architects are certified across AWS and Azure, with hands-on experience delivering enterprise landing zones, migrations, and multi-cloud networking."
        />
        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-3">
          {Object.entries(CLOUD_PLATFORMS).map(([key, platform]) => (
            <div
              key={key}
              className="rounded-xl border border-border bg-surface/60 p-5 sm:p-6"
            >
              <span className={`inline-block rounded-md border px-2.5 py-1 text-[11px] font-mono font-semibold ${platform.color}`}>
                {platform.label}
              </span>
              <ul className="mt-4 space-y-2">
                {platform.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
