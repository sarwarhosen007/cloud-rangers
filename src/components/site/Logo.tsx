import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo.png"
        alt="Cloud Rangers logo"
        className="h-9 w-9 object-contain transition group-hover:opacity-85"
      />
      <span className="flex flex-col leading-tight">
        <span className="font-semibold tracking-tight">Cloud Rangers</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          devops.nz
        </span>
      </span>
    </Link>
  );
}
