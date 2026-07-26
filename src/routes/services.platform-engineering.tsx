import { createFileRoute } from "@tanstack/react-router";
import { Anchor } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { SERVICES_BY_SLUG } from "@/lib/services-data";

export const Route = createFileRoute("/services/platform-engineering")({
  head: () => ({
    meta: [
      { title: "Platform Engineering — Cloud Rangers" },
      { name: "description", content: "Enterprise Kubernetes, GitOps, internal developer portals, and self-service infrastructure on EKS and AKS." },
      { property: "og:title", content: "Platform Engineering — Cloud Rangers" },
      { property: "og:description", content: "Internal developer platforms that pave the golden path." },
    ],
  }),
  component: () => (
    <ServiceDetail
      service={SERVICES_BY_SLUG["platform-engineering"]}
      icon={<Anchor className="h-6 w-6" />}
    />
  ),
});
