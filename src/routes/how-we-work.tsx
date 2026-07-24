import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow, CTA } from "@/components/site/Section";
import { Search, ClipboardCheck, PencilRuler, Hammer, Cpu, Rocket, HeartPulse, TrendingUp } from "lucide-react";

const STEPS = [
  { icon: Search, title: "Discover", text: "Audit your current pipeline and infrastructure. Map deploy frequency, lead time, and pain." },
  { icon: ClipboardCheck, title: "Assess", text: "Benchmark against DORA metrics and industry practice. Prioritise the highest-leverage changes." },
  { icon: PencilRuler, title: "Design", text: "Architect the target state: pipelines, environments, platform contracts, and SLOs." },
  { icon: Hammer, title: "Build", text: "Ship Terraform modules, cluster foundations, and paved-path templates in your repos." },
  { icon: Cpu, title: "Automate", text: "Wire everything into CI/CD and GitOps. Manual clicks disappear from production." },
  { icon: Rocket, title: "Deploy", text: "Roll out progressively with canaries, feature flags, and automatic rollback." },
  { icon: HeartPulse, title: "Operate", text: "Instrument SLOs, tune alerts, and — if you want — hold the pager 24×7." },
  { icon: TrendingUp, title: "Optimise", text: "Continuously improve DORA metrics, cost, and developer experience quarter over quarter." },
];

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      { title: "How We Work — Cloud Rangers DevOps Methodology" },
      { name: "description", content: "Our eight-step delivery methodology: Discover → Assess → Design → Build → Automate → Deploy → Operate → Optimise." },
      { property: "og:title", content: "How We Work — Cloud Rangers" },
      { property: "og:description", content: "An eight-step DevOps delivery methodology." },
    ],
  }),
  component: HowWeWork,
});

function HowWeWork() {
  return (
    <>
      <Section className="pt-16 sm:pt-20 lg:pt-24">
        <Eyebrow>./methodology.sh</Eyebrow>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Eight steps from audit to compounding delivery.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:mt-5 sm:text-lg">
          We embed with your team, ship in your repos, and leave you owning the outcome. No black-box artefacts, no vendor lock-in.
        </p>
      </Section>

      <Section className="pt-0">
        {/* Timeline — responsive: compact on mobile, full on md+ */}
        <ol className="relative border-l border-border/80 pl-6 sm:pl-8">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.title} className="relative pb-8 last:pb-0 sm:pb-10">
                <span className="absolute -left-[37px] top-0 grid h-9 w-9 place-items-center rounded-full border border-border bg-background ring-4 ring-background sm:-left-[42px] sm:h-10 sm:w-10">
                  <Icon className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
                </span>
                <div className="rounded-xl border border-border bg-surface/50 p-4 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-base font-semibold sm:text-lg">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      <CTA />
    </>
  );
}
