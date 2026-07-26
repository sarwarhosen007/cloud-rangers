import { createFileRoute } from "@tanstack/react-router";
import { Layers } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { SERVICES_BY_SLUG } from "@/lib/services-data";

export const Route = createFileRoute("/services/application-modernisation")({
  head: () => ({
    meta: [
      { title: "Application Modernisation — Cloud Rangers" },
      { name: "description", content: "Legacy application rationalisation, containerisation, microservices architecture, and cloud-native migration for New Zealand enterprises." },
      { property: "og:title", content: "Application Modernisation — Cloud Rangers" },
      { property: "og:description", content: "Transform legacy applications into cloud-native systems." },
    ],
  }),
  component: () => (
    <ServiceDetail
      service={SERVICES_BY_SLUG["application-modernisation"]}
      icon={<Layers className="h-6 w-6" />}
    />
  ),
});
