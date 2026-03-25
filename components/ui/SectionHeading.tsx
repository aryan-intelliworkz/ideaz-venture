import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-[800px]",
        align === "center" ? "text-center mx-auto" : "text-left",
        className,
      )}
    >
      <h2 className="font-archivo font-medium text-[32px] lg:text-[40px] leading-[1.2] text-white capitalize">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-bricolage text-[18px] leading-[1.44] text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
