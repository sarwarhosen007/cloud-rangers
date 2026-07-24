import { createFileRoute } from "@tanstack/react-router";
import { GitBranch } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { SERVICES_BY_SLUG } from "@/lib/services-data";

export const Route = createFileRoute("/services/cicd")({
  head: () => ({
    meta: [
      { title: "CI/CD & Release Automation — Cloud Rangers" },
      { name: "description", content: "Jenkins, GitHub Actions, and Azure DevOps pipelines that turn every commit into a tested, auditable, deployable artifact." },
      { property: "og:title", content: "CI/CD & Release Automation — Cloud Rangers" },
      { property: "og:description", content: "Faster, safer software delivery from commit to production." },
    ],
  }),
  component: () => <ServiceDetail service={SERVICES_BY_SLUG.cicd} icon={<GitBranch className="h-6 w-6" />} />,
});
