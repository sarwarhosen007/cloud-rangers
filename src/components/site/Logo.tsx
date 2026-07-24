import { Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2 ${className}`}>
      <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 text-primary ring-1 ring-primary/30">
        <Terminal className="h-4 w-4" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-semibold tracking-tight">Cloud Rangers</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          devops.nz
        </span>
      </span>
    </Link>
  );
}
