"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";

const services = [
  { slug: "startup-consulting", label: "Startup Consulting" },
  { slug: "product-development", label: "Startup Product Development" },
  { slug: "branding-gtm", label: "Branding & GTM Support" },
  { slug: "investor-readiness", label: "Investor Readiness Support" },
  { slug: "post-launch-support", label: "Post-Launch Support" },
  { slug: "managed-operations", label: "Managed Operations" },
];

export default function ServiceDropdown({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const current = services.find((s) => s.slug === currentSlug);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-[520px]">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 border border-white/[0.1] rounded-[4px] bg-[#0a0a0a] hover:border-white/[0.18] transition-colors cursor-pointer"
      >
        <span className="font-archivo font-medium text-[15px] md:text-[16px] text-white leading-[1.2]">
          {current?.label ?? "Select a Service"}
        </span>
        <FiChevronDown
          className={`shrink-0 text-white/40 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute z-50 top-full left-0 right-0 mt-2 border border-white/[0.1] rounded-[4px] bg-[#0a0a0a] overflow-hidden shadow-2xl transition-all duration-300 origin-top ${
          open
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        {services.map((s) => {
          const isActive = s.slug === currentSlug;
          return (
            <button
              key={s.slug}
              onClick={() => {
                setOpen(false);
                if (!isActive) router.push(`/services/${s.slug}`);
              }}
              className={`w-full text-left px-5 py-3.5 font-bricolage text-[14px] md:text-[15px] transition-colors cursor-pointer ${
                isActive
                  ? "text-red bg-red/[0.06]"
                  : "text-white/60 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
