import { type ReactNode, type CSSProperties } from "react";
import { useInView } from "@/hooks/use-in-view";

export type RevealVariant = "fade-up" | "scale-up" | "slide-right";

/**
 * Wraps any content and animates it into view when it enters the viewport.
 *
 * @param variant  Animation style: "fade-up" | "scale-up" | "slide-right"
 * @param delay    Delay in milliseconds (useful for staggered grids)
 * @param className Extra classes forwarded to the wrapper div
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "fade-up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
}) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`${variant}${inView ? " in-view" : ""} ${className}`.trim()}
      style={{ "--anim-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
