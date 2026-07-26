import { createFileRoute } from "@tanstack/react-router";
import { GitBranch } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { SERVICES_BY_SLUG } from "@/lib/services-data";

export const Route = createFileRoute("/services/devops-automation")({
  head: () => ({
    meta: [
      { title: "DevOps & Automation — Cloud Rangers" },
      { name: "description", content: "CI/CD pipelines, GitHub Actions, Azure DevOps, ArgoCD, and infrastructure automation. Accelerate software delivery from commit to production." },
      { property: "og:title", content: "DevOps & Automation — Cloud Rangers" },
      { property: "og:description", content: "Accelerating software delivery from commit to production." },
    ],
  }),
  component: () => (
    <ServiceDetail
      service={SERVICES_BY_SLUG["devops-automation"]}
      icon={<GitBranch className="h-6 w-6" />}
    />
  ),
});
