import { TOOLS, type Tool } from "@/components/site/TechStack";

export type Service = {
  slug:
    | "cicd"
    | "infrastructure-as-code"
    | "kubernetes-platform-engineering"
    | "observability-managed-ops";
  title: string;
  short: string;
  tagline: string;
  overview: string;
  tools: Tool[];
  approach: { step: string; text: string }[];
  outcomes: string[];
  relatedCaseStudy?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "cicd",
    title: "CI/CD & Release Automation",
    short: "CI/CD",
    tagline: "Faster, safer software delivery — from commit to production.",
    overview:
      "Ship code with confidence. We design and build CI/CD pipelines that turn every commit into a tested, auditable, deployable artifact — with policy gates, security scanning, and progressive delivery baked in.",
    tools: [TOOLS.jenkins, TOOLS.githubactions, TOOLS.azuredevops, TOOLS.docker, TOOLS.argocd],
    approach: [
      { step: "Audit", text: "Map existing pipelines, deploy frequency, lead time, and failure rate." },
      { step: "Design", text: "Design a pipeline architecture aligned to trunk-based development and DORA metrics." },
      { step: "Build", text: "Implement pipelines with reusable templates, secret management, and SBOM/scanning stages." },
      { step: "Enable", text: "Coach teams on rollout strategies — canary, blue/green, progressive delivery." },
    ],
    outcomes: [
      "Deploy frequency measured in hours, not weeks",
      "Auditable, policy-gated releases",
      "Standardised pipelines across every service",
    ],
    relatedCaseStudy: "worksafe-nz",
  },
  {
    slug: "infrastructure-as-code",
    title: "Infrastructure as Code",
    short: "IaC",
    tagline: "Repeatable, version-controlled infrastructure — no more snowflakes.",
    overview:
      "Every environment described in code, reviewed in pull requests, and applied through pipelines. We build Terraform and Ansible foundations that scale from one team to fifty — with modules, policy-as-code, and drift detection.",
    tools: [TOOLS.terraform, TOOLS.ansible, TOOLS.githubactions, TOOLS.azuredevops],
    approach: [
      { step: "Assess", text: "Inventory cloud resources, identify snowflakes and drift." },
      { step: "Model", text: "Design a module library and environment topology (dev/stage/prod)." },
      { step: "Migrate", text: "Import existing infrastructure into Terraform without downtime." },
      { step: "Govern", text: "Add policy-as-code, cost guards, and drift detection to CI." },
    ],
    outcomes: [
      "New environments provisioned in minutes",
      "Zero manual clicks in production",
      "Reviewable, reversible infrastructure changes",
    ],
    relatedCaseStudy: "plant-and-food-research",
  },
  {
    slug: "kubernetes-platform-engineering",
    title: "Kubernetes & Platform Engineering",
    short: "K8s",
    tagline: "Internal developer platforms that pave the golden path.",
    overview:
      "Kubernetes done right — EKS/AKS clusters, GitOps with ArgoCD, Helm-based application delivery, service mesh, and a self-service platform your developers actually enjoy using.",
    tools: [TOOLS.kubernetes, TOOLS.helm, TOOLS.argocd, TOOLS.docker, TOOLS.terraform],
    approach: [
      { step: "Foundations", text: "Provision production-grade clusters with security, networking, and IAM baked in." },
      { step: "GitOps", text: "Deploy ArgoCD, define app-of-apps, and wire application delivery to Git." },
      { step: "Platform", text: "Ship an internal developer platform with paved-path templates for new services." },
      { step: "Scale", text: "Add service mesh, autoscaling, cost visibility, and multi-tenancy." },
    ],
    outcomes: [
      "Self-service deployments for every team",
      "Golden-path templates from day one",
      "Predictable, auditable production changes",
    ],
    relatedCaseStudy: "archipro",
  },
  {
    slug: "observability-managed-ops",
    title: "Observability & Managed Ops",
    short: "Ops",
    tagline: "Know before your users do — 24×7 monitoring and support.",
    overview:
      "Metrics, logs, and traces unified into one signal. We build observability stacks on Grafana, Prometheus, and the ELK ecosystem, then optionally operate them for you 24×7 — on call, so your team doesn't have to be.",
    tools: [TOOLS.grafana, TOOLS.prometheus, TOOLS.elastic, TOOLS.cloudwatch, TOOLS.kubernetes],
    approach: [
      { step: "Instrument", text: "Roll out OpenTelemetry, structured logging, and RED/USE dashboards." },
      { step: "Alert", text: "Define SLOs, error budgets, and actionable alerts (no pager noise)." },
      { step: "Operate", text: "24×7 monitoring, incident response, and post-incident reviews." },
      { step: "Improve", text: "Continuously tune signal-to-noise and reduce MTTR." },
    ],
    outcomes: [
      "MTTR measured in minutes",
      "SLO-driven engineering culture",
      "Follow-the-sun on-call, or lift the pager entirely",
    ],
    relatedCaseStudy: "worksafe-nz",
  },
];

export const SERVICES_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
) as Record<string, Service>;
