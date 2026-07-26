import { type CSSProperties } from "react";
import { useInView } from "@/hooks/use-in-view";

export type Tool = { name: string; slug: string; color: string };

export const TOOLS: Record<string, Tool> = {
  // DevOps & CI/CD
  terraform: { name: "Terraform", slug: "terraform", color: "7B42BC" },
  ansible: { name: "Ansible", slug: "ansible", color: "EE0000" },
  jenkins: { name: "Jenkins", slug: "jenkins", color: "D24939" },
  githubactions: { name: "GitHub Actions", slug: "githubactions", color: "2088FF" },
  azuredevops: { name: "Azure DevOps", slug: "cloudways", color: "0078D4" },
  docker: { name: "Docker", slug: "docker", color: "2496ED" },
  kubernetes: { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
  helm: { name: "Helm", slug: "helm", color: "0F1689" },
  argocd: { name: "ArgoCD", slug: "argo", color: "EF7B4D" },
  // Observability
  grafana: { name: "Grafana", slug: "grafana", color: "F46800" },
  prometheus: { name: "Prometheus", slug: "prometheus", color: "E6522C" },
  elastic: { name: "ELK", slug: "elastic", color: "005571" },
  cloudwatch: { name: "CloudWatch", slug: "googlecloudstorage", color: "FF4F8B" },
  // AWS
  awslambda: { name: "Lambda", slug: "pcgamingwiki", color: "FF9900" },
  amazons3: { name: "S3", slug: "googlecloudstorage", color: "569A31" },
  amazonrds: { name: "RDS / Aurora", slug: "databricks", color: "527FFF" },
  amazoneks: { name: "EKS", slug: "kubernetes", color: "FF9900" },
  amazonecs: { name: "ECS", slug: "kubernetes", color: "FF9900" },
  amazoncloudfront: { name: "CloudFront", slug: "cloudflare", color: "FF9900" },
  // Azure
  microsoftazure: { name: "Azure", slug: "cloudways", color: "0078D4" },
  azurekubernetesservice: { name: "AKS", slug: "cloudways", color: "0078D4" },
  powerplatform: { name: "Power Platform", slug: "cloudways", color: "742774" },
  // Data & AI
  apachekafka: { name: "Kafka", slug: "apachekafka", color: "231F20" },
  snowflake: { name: "Snowflake", slug: "snowflake", color: "29B5E8" },
  databricks: { name: "Databricks", slug: "databricks", color: "FF3621" },
  powerbi: { name: "Power BI", slug: "powers", color: "F2C811" },
  apachespark: { name: "Spark", slug: "apachespark", color: "E25A1C" },
  // Security
  vault: { name: "Vault", slug: "vault", color: "FFD814" },
  snyk: { name: "Snyk", slug: "snyk", color: "4C4A73" },
};

export const ALL_TOOLS = Object.values(TOOLS);

export function ToolIcon({ tool, size = 20 }: { tool: Tool; size?: number }) {
  return (
    <img
      src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`}
      alt={`${tool.name} logo`}
      width={size}
      height={size}
      loading="lazy"
      className="inline-block"
    />
  );
}

export function ToolChip({ tool }: { tool: Tool }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium">
      <ToolIcon tool={tool} size={14} />
      <span className="font-mono">{tool.name}</span>
    </div>
  );
}

/** Individual animated tool tile — extracted so hook rules are followed */
function ToolTile({ tool, delay }: { tool: Tool; delay: number }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`scale-up${inView ? " in-view" : ""}`}
      style={{ "--anim-delay": `${delay}ms` } as CSSProperties}
    >
      <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-surface/40 p-4 transition hover:border-primary/40 hover:bg-surface hover:scale-105">
        <ToolIcon tool={tool} size={28} />
        <span className="font-mono text-[11px] text-muted-foreground">{tool.name}</span>
      </div>
    </div>
  );
}

export function TechStackGrid({ tools = ALL_TOOLS }: { tools?: Tool[] }) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
      {tools.map((t, i) => (
        <ToolTile key={t.name} tool={t} delay={i * 35} />
      ))}
    </div>
  );
}
