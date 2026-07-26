import { createFileRoute } from "@tanstack/react-router";
import { MonitorDot } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { SERVICES_BY_SLUG } from "@/lib/services-data";

export const Route = createFileRoute("/services/managed-services")({
  head: () => ({
    meta: [
      { title: "Managed Services — Cloud Rangers" },
      { name: "description", content: "24×7 cloud monitoring, incident management, patch management, cost optimisation, and business continuity for New Zealand enterprises." },
      { property: "og:title", content: "Managed Services — Cloud Rangers" },
      { property: "og:description", content: "Operational excellence — so your team can focus on building." },
    ],
  }),
  component: () => (
    <ServiceDetail
      service={SERVICES_BY_SLUG["managed-services"]}
      icon={<MonitorDot className="h-6 w-6" />}
    />
  ),
});
