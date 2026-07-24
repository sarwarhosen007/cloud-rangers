import { type ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
      <span className="text-primary/60">$</span> {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function Terminal({ lines }: { lines: Array<{ prompt?: boolean; text: string; comment?: boolean }> }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-terminal font-mono text-[13px] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-black/30 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-[11px] text-white/40">~/cloudrangers/deploy</span>
      </div>
      <pre className="overflow-x-auto p-5 leading-relaxed text-terminal-foreground">
        {lines.map((l, i) => (
          <div key={i}>
            {l.comment ? (
              <span className="text-white/40"># {l.text}</span>
            ) : l.prompt ? (
              <>
                <span className="text-primary">$</span>{" "}
                <span className="text-white/90">{l.text}</span>
              </>
            ) : (
              <span className="text-white/60">{l.text}</span>
            )}
          </div>
        ))}
      </pre>
    </div>
  );
}

export function CTA({
  title = "Ready to ship faster, safely?",
  description = "Book a discovery call and we'll audit your current pipeline and infrastructure.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-10 sm:p-14">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" aria-hidden />
        <div className="relative">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Book a Discovery Call
            </a>
            <a
              href="mailto:info@cloudrangers.co.nz"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2.5 text-sm font-medium hover:bg-white/5"
            >
              info@cloudrangers.co.nz
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
