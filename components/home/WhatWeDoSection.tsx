"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface WhatWeDoItem {
  title: string;
  description: string;
}

interface WhatWeDoSectionProps {
  subtitle: string;
  items: WhatWeDoItem[];
}

function ArrowIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="shrink-0 mt-1"
    >
      <path
        d="M8 24L24 8M24 8H10M24 8V22"
        stroke="#EC1C24"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhatWeDoSection({
  subtitle,
  items,
}: WhatWeDoSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const headingRef = useScrollReveal();
  const cardsRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="py-16 md:py-20 lg:py-20 xl:py-24 2xl:py-24">
      <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
        {/* Section heading */}
        <div
          ref={headingRef}
          className="reveal-fade-up flex flex-col items-center gap-3 mb-10"
        >
          <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[36px] xl:text-[38px] 2xl:text-[40px] leading-[1.2] text-white capitalize text-center">
            What We Do
          </h2>
          <p className="font-bricolage text-[15px] md:text-[15px] lg:text-[16px] leading-[1.44] text-gray-500 max-w-[920px] text-center mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Desktop: accordion row */}
        <div
          ref={cardsRef}
          className="reveal-fade-up hidden lg:flex gap-4 h-[340px] xl:h-[400px] 2xl:h-[400px]"
        >
          {items.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={item.title}
                onClick={() => setExpandedIndex(index)}
                onMouseEnter={() => setExpandedIndex(index)}
                className={cn(
                  "service-card relative cursor-pointer overflow-hidden corner-border transition-all duration-700 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
                  isExpanded
                    ? "service-card-expanded flex-[3.2]"
                    : "service-card-collapsed flex-1 hover:bg-white/[0.02]",
                )}
              >
                {/* Expanded content */}
                <div
                  className={cn(
                    "absolute inset-0 p-6 flex flex-col transition-opacity duration-500",
                    isExpanded
                      ? "opacity-100 delay-200"
                      : "opacity-0 pointer-events-none",
                  )}
                >
                  <div className="flex items-start justify-between">
                    {/* Number badge */}
                    <div className="w-[52px] h-[52px] rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0">
                      <span className="font-archivo text-[13px] font-medium text-white/40">
                        0{index + 1}
                      </span>
                    </div>
                    <ArrowIcon />
                  </div>

                  <div className="mt-auto flex flex-col gap-4">
                    <h3 className="font-archivo font-normal text-[28px] leading-[1.09] text-white capitalize">
                      {item.title}
                    </h3>
                    <p className="font-bricolage text-[18px] leading-[1.44] text-gray-500 whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Collapsed vertical text */}
                <div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                    isExpanded
                      ? "opacity-0 pointer-events-none"
                      : "opacity-100",
                  )}
                >
                  <span className="service-card-vertical-text font-archivo font-normal text-[28px] leading-[1.09] text-white capitalize whitespace-nowrap">
                    {item.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tablet: 2-col grid */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
          {items.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={item.title}
                onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                className={cn(
                  "service-card relative cursor-pointer overflow-hidden corner-border transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
                  isExpanded ? "service-card-expanded" : "",
                )}
              >
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="w-[48px] h-[48px] rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0">
                      <span className="font-archivo text-[12px] font-medium text-white/40">
                        0{index + 1}
                      </span>
                    </div>
                    <ArrowIcon />
                  </div>
                  <h3 className="font-archivo font-normal text-[24px] leading-[1.09] text-white capitalize">
                    {item.title}
                  </h3>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500",
                      isExpanded
                        ? "max-h-[300px] opacity-100"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    <p className="font-bricolage text-[16px] leading-[1.44] text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: 1-col */}
        <div className="grid md:hidden grid-cols-1 gap-4">
          {items.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={item.title}
                onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                className="service-card relative cursor-pointer overflow-hidden corner-border transition-all duration-500"
              >
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <div className="w-[44px] h-[44px] rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0">
                      <span className="font-archivo text-[12px] font-medium text-white/40">
                        0{index + 1}
                      </span>
                    </div>
                    <ArrowIcon />
                  </div>
                  <h3 className="font-archivo font-normal text-[22px] leading-[1.09] text-white capitalize">
                    {item.title}
                  </h3>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500",
                      isExpanded
                        ? "max-h-[300px] opacity-100"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    <p className="font-bricolage text-[16px] leading-[1.44] text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
