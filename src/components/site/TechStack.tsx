export type Tool = { name: string; slug: string; color: string };

export const TOOLS: Record<string, Tool> = {
  terraform: { name: "Terraform", slug: "terraform", color: "7B42BC" },
  ansible: { name: "Ansible", slug: "ansible", color: "EE0000" },
  jenkins: { name: "Jenkins", slug: "jenkins", color: "D24939" },
  githubactions: { name: "GitHub Actions", slug: "githubactions", color: "2088FF" },
  azuredevops: { name: "Azure DevOps", slug: "cloudways", color: "2C39BD" },
  cloudways: { name: "Cloudways", slug: "cloudways", color: "2C39BD" },
  docker: { name: "Docker", slug: "docker", color: "2496ED" },
  kubernetes: { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
  helm: { name: "Helm", slug: "helm", color: "0F1689" },
  argocd: { name: "ArgoCD", slug: "argo", color: "EF7B4D" },
  grafana: { name: "Grafana", slug: "grafana", color: "F46800" },
  prometheus: { name: "Prometheus", slug: "prometheus", color: "E6522C" },
  elastic: { name: "ELK", slug: "elastic", color: "005571" },
  cloudwatch: { name: "CloudWatch", slug: "amazoncloudwatch", color: "FF4F8B" },
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

export function TechStackGrid({ tools = ALL_TOOLS }: { tools?: Tool[] }) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
      {tools.map((t) => (
        <div
          key={t.name}
          className="flex flex-col items-center gap-2 rounded-lg border border-border bg-surface/40 p-4 transition hover:border-primary/40 hover:bg-surface"
        >
          <ToolIcon tool={t} size={28} />
          <span className="font-mono text-[11px] text-muted-foreground">{t.name}</span>
        </div>
      ))}
    </div>
  );
}
