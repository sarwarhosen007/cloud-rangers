import { createFileRoute } from "@tanstack/react-router";
import { Boxes } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { SERVICES_BY_SLUG } from "@/lib/services-data";

export const Route = createFileRoute("/services/infrastructure-as-code")({
  head: () => ({
    meta: [
      { title: "Infrastructure as Code — Cloud Rangers" },
      { name: "description", content: "Terraform and Ansible foundations for repeatable, version-controlled infrastructure. Every environment reviewed in PRs." },
      { property: "og:title", content: "Infrastructure as Code — Cloud Rangers" },
      { property: "og:description", content: "Repeatable, version-controlled infrastructure — no more snowflakes." },
    ],
  }),
  component: () => <ServiceDetail service={SERVICES_BY_SLUG["infrastructure-as-code"]} icon={<Boxes className="h-6 w-6" />} />,
});
