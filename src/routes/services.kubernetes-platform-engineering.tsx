import { createFileRoute } from "@tanstack/react-router";
import { Anchor } from "lucide-react";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { SERVICES_BY_SLUG } from "@/lib/services-data";

export const Route = createFileRoute("/services/kubernetes-platform-engineering")({
  head: () => ({
    meta: [
      { title: "Kubernetes & Platform Engineering — Cloud Rangers" },
      { name: "description", content: "EKS/AKS, Helm, ArgoCD, GitOps, service mesh, and internal developer platforms that pave the golden path." },
      { property: "og:title", content: "Kubernetes & Platform Engineering — Cloud Rangers" },
      { property: "og:description", content: "Internal developer platforms that pave the golden path." },
    ],
  }),
  component: () => <ServiceDetail service={SERVICES_BY_SLUG["kubernetes-platform-engineering"]} icon={<Anchor className="h-6 w-6" />} />,
});
