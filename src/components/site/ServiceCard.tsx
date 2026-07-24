import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";
import { ToolIcon, type Tool } from "./TechStack";

export type ServiceCardData = {
  slug: string;
  title: string;
  tagline: string;
  tools: Tool[];
};

export function ServiceCard({
  service,
  to,
  icon,
}: {
  service: ServiceCardData;
  to: "/services/cicd" | "/services/infrastructure-as-code" | "/services/kubernetes-platform-engineering" | "/services/observability-managed-ops";
  icon: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface/60 p-6 transition hover:border-primary/50 hover:bg-surface"
    >
      <div className="mb-5 grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
        {icon}
      </div>
      <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{service.tagline}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {service.tools.slice(0, 5).map((t) => (
          <span
            key={t.slug}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/60 px-2 py-1 font-mono text-[11px]"
          >
            <ToolIcon tool={t} size={12} /> {t.name}
          </span>
        ))}
      </div>

      <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        Learn more <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
