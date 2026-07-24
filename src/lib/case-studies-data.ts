import { TOOLS, type Tool } from "@/components/site/TechStack";

export type CaseStudy = {
  slug: "plant-and-food-research" | "worksafe-nz" | "archipro";
  client: string;
  industry: string;
  headline: string;
  challenge: string;
  work: string[];
  outcome: string[];
  tools: Tool[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "plant-and-food-research",
    client: "Plant & Food Research",
    industry: "Scientific Research",
    headline: "Terraform foundations for a multi-team research cloud.",
    challenge:
      "Dozens of research teams provisioning cloud resources by hand had produced sprawling, undocumented infrastructure. Environments took weeks to spin up and were near-impossible to reproduce for reviewers.",
    work: [
      "Built a Terraform module library covering networking, IAM, compute, and data services.",
      "Migrated existing production workloads into Terraform state without downtime.",
      "Introduced a GitHub Actions pipeline for plan/apply with policy-as-code gates.",
      "Trained platform and research engineers on the module patterns and code review.",
    ],
    outcome: [
      "New research environments provisioned in under 20 minutes.",
      "Zero manual production changes since launch.",
      "Reproducible, peer-reviewed infrastructure across every research group.",
    ],
    tools: [TOOLS.terraform, TOOLS.githubactions, TOOLS.ansible],
  },
  {
    slug: "worksafe-nz",
    client: "Worksafe NZ",
    industry: "Government",
    headline: "Consolidated CI/CD and 24×7 observability for a public regulator.",
    challenge:
      "Delivery teams ran a patchwork of legacy build servers and ad-hoc monitoring. Deployments were high-risk, incident response depended on tribal knowledge, and change auditing was manual.",
    work: [
      "Standardised every service onto Azure DevOps pipelines with shared templates and approvals.",
      "Rolled out Grafana + Prometheus + Loki for unified metrics, logs, and dashboards.",
      "Defined SLOs and paged the right team on the right signal — nothing else.",
      "Provided 24×7 managed ops during the initial six-month stabilisation window.",
    ],
    outcome: [
      "Change failure rate reduced by 60% within one quarter.",
      "MTTR dropped from hours to minutes.",
      "Full audit trail on every production deployment.",
    ],
    tools: [TOOLS.azuredevops, TOOLS.grafana, TOOLS.prometheus, TOOLS.elastic],
  },
  {
    slug: "archipro",
    client: "ArchiPro",
    industry: "Marketplace / SaaS",
    headline: "Kubernetes platform and GitOps for a fast-scaling marketplace.",
    challenge:
      "As ArchiPro expanded across ANZ, their monolith deployment story couldn't keep up. Engineers waited on ops for every environment, and rollouts were manual and stressful.",
    work: [
      "Designed and built production EKS clusters with Terraform foundations.",
      "Deployed ArgoCD with an app-of-apps GitOps model across every environment.",
      "Shipped Helm chart templates and paved-path service scaffolds for product teams.",
      "Introduced progressive delivery with canaries and automatic rollback.",
    ],
    outcome: [
      "Deploys moved from weekly to on-demand, dozens per day.",
      "Product teams self-serve new environments in minutes.",
      "Zero-downtime rollouts standard across every service.",
    ],
    tools: [TOOLS.kubernetes, TOOLS.argocd, TOOLS.helm, TOOLS.terraform, TOOLS.docker],
  },
];

export const CASE_STUDIES_BY_SLUG: Record<string, CaseStudy> = Object.fromEntries(
  CASE_STUDIES.map((c) => [c.slug, c]),
) as Record<string, CaseStudy>;
