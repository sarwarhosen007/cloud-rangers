import { createFileRoute } from "@tanstack/react-router";
import { Activity } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { SERVICES_BY_SLUG } from "@/lib/services-data";

export const Route = createFileRoute("/services/observability-managed-ops")({
  head: () => ({
    meta: [
      { title: "Observability & Managed Ops — Cloud Rangers" },
      { name: "description", content: "Grafana, Prometheus, ELK, and CloudWatch. Unified metrics, logs, and traces, plus optional 24×7 managed ops." },
      { property: "og:title", content: "Observability & Managed Ops — Cloud Rangers" },
      { property: "og:description", content: "Know before your users do — 24×7 monitoring and support." },
    ],
  }),
  component: () => <ServiceDetail service={SERVICES_BY_SLUG["observability-managed-ops"]} icon={<Activity className="h-6 w-6" />} />,
});
