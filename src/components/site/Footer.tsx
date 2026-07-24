import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* Top grid: 1 col mobile, 2 col sm, 4 col md */}
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-4">
          <div className="sm:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              DevOps & Platform Engineering consultancy based in Auckland, New Zealand.
              We help engineering teams ship faster, safer, and more reliably.
            </p>
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              info@cloudrangers.co.nz
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/services/cicd" className="text-muted-foreground hover:text-foreground transition-colors">CI/CD & Release Automation</Link></li>
              <li><Link to="/services/infrastructure-as-code" className="text-muted-foreground hover:text-foreground transition-colors">Infrastructure as Code</Link></li>
              <li><Link to="/services/kubernetes-platform-engineering" className="text-muted-foreground hover:text-foreground transition-colors">Kubernetes & Platform Eng.</Link></li>
              <li><Link to="/services/observability-managed-ops" className="text-muted-foreground hover:text-foreground transition-colors">Observability & Managed Ops</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/how-we-work" className="text-muted-foreground hover:text-foreground transition-colors">How We Work</Link></li>
              <li><Link to="/work" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between sm:mt-12">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cloud Rangers Ltd — Auckland, New Zealand
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" aria-label="GitHub" className="hover:text-foreground transition-colors"><Github className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-foreground transition-colors"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
