import { useEffect, type ReactNode } from "react";
import { Calendar } from "lucide-react";

const CALENDLY_WIDGET_JS =
  "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_WIDGET_CSS =
  "https://assets.calendly.com/assets/external/widget.css";

/** Load Calendly's external script once. */
function useCalendlyScript() {
  useEffect(() => {
    if (document.querySelector(`script[src="${CALENDLY_WIDGET_JS}"]`)) return;

    const script = document.createElement("script");
    script.src = CALENDLY_WIDGET_JS;
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CALENDLY_WIDGET_CSS;
    document.head.appendChild(link);
  }, []);
}

// ---------------------------------------------------------------------------
// Inline embed — renders the full calendar inline on the page
// ---------------------------------------------------------------------------
export function CalendlyInline({ url }: { url: string }) {
  useCalendlyScript();

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/60">
      {/* Header bar */}
      <div className="flex items-center gap-3 border-b border-border/60 px-6 py-4">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
          <Calendar className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-semibold">Book a Discovery Call</p>
          <p className="font-mono text-[11px] text-muted-foreground">
            30 minutes · free · no obligation
          </p>
        </div>
      </div>

      {/* Calendly widget */}
      <div
        className="calendly-inline-widget w-full"
        data-url={`${url}?hide_gdpr_banner=1&background_color=0d0d0f&text_color=f0f0f0&primary_color=22c55e`}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Popup link — opens Calendly in a lightbox modal on click
// ---------------------------------------------------------------------------
export function CalendlyPopupLink({
  url,
  children,
  className,
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  useCalendlyScript();

  function openCalendly(e: React.MouseEvent) {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Calendly?.initPopupWidget({ url });
  }

  return (
    <a href={url} onClick={openCalendly} className={className}>
      {children}
    </a>
  );
}
