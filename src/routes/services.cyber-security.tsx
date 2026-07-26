import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { SERVICES_BY_SLUG } from "@/lib/services-data";

export const Route = createFileRoute("/services/cyber-security")({
  head: () => ({
    meta: [
      { title: "Cyber Security — Cloud Rangers" },
      { name: "description", content: "Zero Trust architecture, DevSecOps, cloud security, threat detection, and compliance for New Zealand enterprises." },
      { property: "og:title", content: "Cyber Security — Cloud Rangers" },
      { property: "og:description", content: "Secure by design — from architecture to operations." },
    ],
  }),
  component: () => (
    <ServiceDetail
      service={SERVICES_BY_SLUG["cyber-security"]}
      icon={<ShieldCheck className="h-6 w-6" />}
    />
  ),
});
