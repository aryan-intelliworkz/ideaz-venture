import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-bricolage transition-all duration-200",
        {
          "gradient-brand text-white hover:opacity-90": variant === "primary",
          "border border-white/20 text-white bg-bg-primary hover:bg-white/5":
            variant === "outline",
          "text-white hover:text-red": variant === "ghost",
        },
        {
          "px-4 py-2 text-[14px]": size === "sm",
          "px-6 py-3 text-[18px]": size === "md",
          "px-8 py-4 text-[18px]": size === "lg",
        },
        className,
      )}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight size={18} />}
    </button>
  );
}
