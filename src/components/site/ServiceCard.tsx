import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { type ReactNode, type CSSProperties } from "react";
import { ToolIcon, type Tool } from "./TechStack";
import { useInView } from "@/hooks/use-in-view";

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
  delay = 0,
}: {
  service: ServiceCardData;
  to: string;
  icon: ReactNode;
  delay?: number;
}) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`scale-up${inView ? " in-view" : ""}`}
      style={{ "--anim-delay": `${delay}ms` } as CSSProperties}
    >
      <Link
        to={to}
        className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface/60 p-5 transition hover:border-primary/50 hover:bg-surface sm:p-6"
      >
        <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30 sm:mb-5">
          {icon}
        </div>
        <h3 className="text-base font-semibold tracking-tight sm:text-lg">{service.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{service.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
          {service.tools.slice(0, 5).map((t) => (
            <span
              key={t.slug}
              className="inline-flex items-center gap-1 rounded-md border border-border bg-background/60 px-1.5 py-0.5 font-mono text-[10px] sm:gap-1.5 sm:px-2 sm:py-1 sm:text-[11px]"
            >
              <ToolIcon tool={t} size={10} /> {t.name}
            </span>
          ))}
        </div>

        <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-primary sm:mt-6 sm:text-sm">
          Learn more <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5 sm:h-3.5 sm:w-3.5" />
        </div>
      </Link>
    </div>
  );
}
