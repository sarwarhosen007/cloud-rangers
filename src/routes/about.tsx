import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow, CTA } from "@/components/site/Section";
import { ShieldCheck, Workflow, Users, Award } from "lucide-react";

const VALUES = [
  {
    icon: Award,
    title: "Certified engineers, only.",
    text: "AWS, Azure, and CNCF certified practitioners. We hire senior, we stay senior.",
  },
  {
    icon: Workflow,
    title: "Automation-first delivery.",
    text: "If we do something twice, we automate it. Your repos leave the engagement stronger than we found them.",
  },
  {
    icon: ShieldCheck,
    title: "Security-conscious pipelines.",
    text: "DevSecOps by default — SBOMs, scanning, policy-as-code, and least-privilege IAM baked in from day one.",
  },
  {
    icon: Users,
    title: "Long-term partnership.",
    text: "We optimise for handover from the first sprint. Our best clients keep us on retainer — not by lock-in, but by choice.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cloud Rangers Ltd, Auckland NZ" },
      { name: "description", content: "Cloud Rangers is a New Zealand DevOps consultancy. Certified engineers, automation-first delivery, and long-term partnership." },
      { property: "og:title", content: "About — Cloud Rangers" },
      { property: "og:description", content: "Why New Zealand engineering teams choose Cloud Rangers." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Section className="pt-24">
        <Eyebrow>./about</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          A New Zealand DevOps consultancy — nothing more, nothing less.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Cloud Rangers is a small, senior team based in Auckland. We work with engineering leaders
          across Aotearoa to build the pipelines, platforms, and operational muscle that let their
          teams ship — every day, without drama.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="rounded-xl border border-border bg-surface/60 p-6">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <CTA title="Let's talk delivery." description="We're happy to chat about your current pipeline — even if you're not ready to engage yet." />
    </>
  );
}
