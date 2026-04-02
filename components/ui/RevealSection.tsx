"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * A generic wrapper that applies scroll-reveal animation to its children.
 * Use this in server components or to wrap individual items.
 */
export default function RevealSection({
  children,
  className = "reveal-fade-up",
  threshold,
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold });
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
