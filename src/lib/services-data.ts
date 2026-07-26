import { TOOLS, type Tool } from "@/components/site/TechStack";

export type Service = {
  slug:
    | "cloud-strategy"
    | "infrastructure-as-code"
    | "devops-automation"
    | "platform-engineering"
    | "data-ai"
    | "cyber-security"
    | "managed-services"
    | "application-modernisation"
    // Legacy slugs kept for existing detail pages
    | "cicd"
    | "kubernetes-platform-engineering"
    | "observability-managed-ops";
  title: string;
  short: string;
  tagline: string;
  overview: string;
  tools: Tool[];
  approach: { step: string; text: string }[];
  outcomes: string[];
  capabilities?: string[];
  relatedCaseStudy?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "cloud-strategy",
    title: "Cloud Strategy & Architecture",
    short: "Strategy",
    tagline: "Enterprise cloud transformation, from vision to landing zone.",
    overview:
      "We help organisations define their cloud future — assessing current capability, designing enterprise architecture, planning migrations, and building secure landing zones. Our architects have delivered cloud programmes across AWS and Azure for some of New Zealand's largest enterprises.",
    tools: [TOOLS.terraform, TOOLS.microsoftazure, TOOLS.amazons3, TOOLS.azuredevops, TOOLS.githubactions],
    capabilities: [
      "Cloud Strategy",
      "Enterprise Architecture",
      "Cloud Migration",
      "Landing Zones",
      "Technology Roadmaps",
      "Capability Assessments",
      "Governance",
      "Reference Architectures",
      "Application Rationalisation",
      "Technology Modernisation",
    ],
    approach: [
      { step: "Assess", text: "Evaluate current-state architecture, cloud maturity, and business objectives." },
      { step: "Design", text: "Produce enterprise architecture, cloud reference designs, and a phased roadmap." },
      { step: "Land", text: "Establish a secure, compliant multi-account landing zone on AWS or Azure." },
      { step: "Migrate", text: "Execute migration with minimal disruption using proven wave-planning methodology." },
    ],
    outcomes: [
      "Board-ready cloud strategy and roadmap",
      "Secure landing zone live in weeks",
      "Measurable reduction in cloud spend",
      "Risk-managed migration programme",
    ],
  },
  {
    slug: "infrastructure-as-code",
    title: "Infrastructure as Code",
    short: "IaC",
    tagline: "Repeatable, version-controlled infrastructure — no more snowflakes.",
    overview:
      "Every environment described in code, reviewed in pull requests, and applied through pipelines. We build Terraform and Ansible foundations that scale from one team to fifty — with modules, policy-as-code, and drift detection.",
    tools: [TOOLS.terraform, TOOLS.ansible, TOOLS.githubactions, TOOLS.azuredevops],
    capabilities: [
      "Terraform",
      "Ansible",
      "Infrastructure as Code",
      "Policy as Code",
      "Drift Detection",
      "Module Libraries",
      "Multi-environment Topologies",
    ],
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
    slug: "devops-automation",
    title: "DevOps & Automation",
    short: "DevOps",
    tagline: "Accelerating software delivery from commit to production.",
    overview:
      "We design and build CI/CD pipelines that turn every commit into a tested, auditable, deployable artifact — with policy gates, security scanning, and progressive delivery baked in. From Jenkins to GitHub Actions and Azure DevOps, we meet teams where they are.",
    tools: [TOOLS.jenkins, TOOLS.githubactions, TOOLS.azuredevops, TOOLS.docker, TOOLS.argocd, TOOLS.helm],
    capabilities: [
      "Continuous Integration",
      "Continuous Deployment",
      "Terraform",
      "Ansible",
      "Jenkins",
      "GitHub Actions",
      "Azure DevOps",
      "Docker",
      "Kubernetes",
      "Helm",
      "ArgoCD",
      "Infrastructure as Code",
      "Observability",
    ],
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
    slug: "platform-engineering",
    title: "Platform Engineering",
    short: "Platform",
    tagline: "Internal developer platforms that pave the golden path.",
    overview:
      "Kubernetes done right — EKS/AKS clusters, GitOps with ArgoCD, Helm-based application delivery, service mesh, and a self-service platform your developers actually enjoy using. We build the rails so your engineers can ship without waiting on ops.",
    tools: [TOOLS.kubernetes, TOOLS.helm, TOOLS.argocd, TOOLS.docker, TOOLS.terraform],
    capabilities: [
      "Enterprise Kubernetes",
      "GitOps",
      "Platform Automation",
      "Container Platforms",
      "Service Mesh",
      "Infrastructure Automation",
      "Internal Developer Portals",
      "Self-Service Infrastructure",
      "Cloud Governance",
    ],
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
    slug: "data-ai",
    title: "Data & Artificial Intelligence",
    short: "Data & AI",
    tagline: "Intelligent data platforms that turn raw data into business decisions.",
    overview:
      "We design and build modern data platforms — from data lakes and warehouses to real-time streaming pipelines and machine learning platforms. Whether you need a Snowflake/Databricks foundation or Generative AI capability, we deliver end-to-end.",
    tools: [TOOLS.apachekafka, TOOLS.snowflake, TOOLS.databricks, TOOLS.powerbi, TOOLS.apachespark],
    capabilities: [
      "Data Engineering",
      "Modern Data Lakes",
      "Data Warehousing",
      "Kafka",
      "NiFi",
      "Snowflake",
      "Databricks",
      "Power BI",
      "Machine Learning",
      "Generative AI",
      "Business Intelligence",
      "Data Governance",
    ],
    approach: [
      { step: "Discover", text: "Audit data sources, quality, and current analytics maturity." },
      { step: "Architect", text: "Design a modern data platform aligned to your analytics and AI goals." },
      { step: "Build", text: "Implement pipelines, warehouses, and ML infrastructure with production-grade reliability." },
      { step: "Activate", text: "Deliver dashboards, models, and AI features that drive measurable business outcomes." },
    ],
    outcomes: [
      "Single source of truth across the business",
      "Real-time data pipelines in production",
      "AI and ML capabilities delivered, not just prototyped",
    ],
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    short: "Security",
    tagline: "Secure by design — from architecture to operations.",
    overview:
      "Security built into every layer — not bolted on at the end. We design Zero Trust architectures, implement DevSecOps practices, and provide continuous security monitoring so your cloud environments remain compliant and resilient.",
    tools: [TOOLS.vault, TOOLS.snyk, TOOLS.terraform, TOOLS.kubernetes, TOOLS.elastic],
    capabilities: [
      "Cloud Security",
      "Identity Management",
      "Zero Trust",
      "Security Architecture",
      "Threat Detection",
      "Compliance",
      "DevSecOps",
      "Network Security",
      "Vulnerability Management",
      "Security Monitoring",
      "Penetration Testing",
      "Incident Response",
    ],
    approach: [
      { step: "Assess", text: "Security posture review, threat modelling, and compliance gap analysis." },
      { step: "Design", text: "Zero Trust architecture and security controls aligned to your risk appetite." },
      { step: "Implement", text: "Deploy identity management, network security, and DevSecOps tooling." },
      { step: "Operate", text: "Continuous monitoring, vulnerability management, and incident response." },
    ],
    outcomes: [
      "Zero Trust architecture across cloud environments",
      "Automated security scanning in every pipeline",
      "Continuous compliance posture visibility",
    ],
  },
  {
    slug: "managed-services",
    title: "Managed Services",
    short: "Managed Ops",
    tagline: "Operational excellence — so your team can focus on building.",
    overview:
      "Metrics, logs, and traces unified into one signal. We build observability stacks on Grafana, Prometheus, and the ELK ecosystem, then operate them for you 24×7 — on call, so your team doesn't have to be. Full lifecycle cloud operations, from patch management to cost optimisation.",
    tools: [TOOLS.grafana, TOOLS.prometheus, TOOLS.elastic, TOOLS.cloudwatch, TOOLS.kubernetes],
    capabilities: [
      "24×7 Monitoring",
      "Cloud Operations",
      "Platform Support",
      "Application Support",
      "Infrastructure Support",
      "Incident Management",
      "Patch Management",
      "Performance Optimisation",
      "Cost Optimisation",
      "Capacity Planning",
      "Business Continuity",
    ],
    approach: [
      { step: "Instrument", text: "Roll out OpenTelemetry, structured logging, and RED/USE dashboards." },
      { step: "Alert", text: "Define SLOs, error budgets, and actionable alerts (no pager noise)." },
      { step: "Operate", text: "24×7 monitoring, incident response, and post-incident reviews." },
      { step: "Improve", text: "Continuously tune signal-to-noise, reduce MTTR, and optimise cloud spend." },
    ],
    outcomes: [
      "MTTR measured in minutes",
      "SLO-driven engineering culture",
      "Follow-the-sun on-call, or lift the pager entirely",
    ],
    relatedCaseStudy: "worksafe-nz",
  },
  {
    slug: "application-modernisation",
    title: "Application Modernisation",
    short: "App Mod",
    tagline: "Transform legacy applications into cloud-native systems.",
    overview:
      "We rationalise, re-platform, and modernise legacy applications — whether that's containerising monoliths, re-architecting for microservices, or migrating to cloud-native PaaS. Our approach is pragmatic: the right modernisation for your risk and business context.",
    tools: [TOOLS.docker, TOOLS.kubernetes, TOOLS.terraform, TOOLS.githubactions, TOOLS.argocd],
    capabilities: [
      "Application Rationalisation",
      "Containerisation",
      "Microservices Architecture",
      "Cloud-Native Migration",
      "Legacy Modernisation",
      "API Design",
      "Technology Modernisation",
    ],
    approach: [
      { step: "Rationalise", text: "Assess application portfolio — retire, retain, re-platform, or rebuild." },
      { step: "Architect", text: "Design target state architecture aligned to cloud-native patterns." },
      { step: "Modernise", text: "Incrementally migrate with zero-downtime delivery and automated testing." },
      { step: "Optimise", text: "Tune performance, cost, and resilience post-migration." },
    ],
    outcomes: [
      "Legacy systems transformed without big-bang rewrites",
      "Cloud-native workloads deployed and observable",
      "Reduced operational complexity and cost",
    ],
  },
  // ── Legacy service entries kept so existing detail pages still resolve ──
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

/** The 8 primary services shown on the home & services index pages */
export const PRIMARY_SERVICES = SERVICES.filter((s) =>
  [
    "cloud-strategy",
    "infrastructure-as-code",
    "devops-automation",
    "platform-engineering",
    "data-ai",
    "cyber-security",
    "managed-services",
    "application-modernisation",
  ].includes(s.slug),
);
