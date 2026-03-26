"use client";

import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  as?: "button" | "a";
  href?: string;
}

export default function PrimaryButton({
  children,
  onClick,
  className,
  as = "button",
  href,
}: PrimaryButtonProps) {
  const inner = (
    <>
      <span className="primary-btn-bg">
        <span className="primary-btn-text">{children}</span>
        <span className="primary-btn-glow" />
      </span>
      <span className="primary-btn-border-spin" />
    </>
  );

  if (as === "a" && href) {
    return (
      <a href={href} className={cn("primary-btn", className)} onClick={onClick}>
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cn("primary-btn", className)}>
      {inner}
    </button>
  );
}
