"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ExecutionStep } from "@/lib/case-studies";

interface Props {
  heading: string;
  subtitle: string;
  steps: ExecutionStep[];
}

export default function ExecutionStrategy({ heading, subtitle, steps }: Props) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-archivo font-medium text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[1.1] text-white capitalize mb-3">
            {heading}
          </h2>
          <p className="font-bricolage text-[14px] md:text-[15px] lg:text-[16px] text-white/50">
            {subtitle}
          </p>
        </div>

        {/* Desktop: horizontal accordion (like ServicesSection) */}
        <div className="hidden lg:flex gap-4 h-[340px] xl:h-[400px] 2xl:h-[400px]">
          {steps.map((step, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div
                key={i}
                onClick={() => setExpandedIndex(i)}
                onMouseEnter={() => setExpandedIndex(i)}
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
                  {/* Step number circle */}
                  <div className="w-[76px] h-[76px] rounded-full border border-white/[0.08] flex items-center justify-center">
                    <span className="font-archivo text-[18px] text-[#EC1C24] font-medium">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title + Description */}
                  <div className="mt-auto flex flex-col gap-4">
                    <h3 className="font-archivo font-normal text-[28px] leading-[1.09] text-white capitalize">
                      {step.title}
                    </h3>
                    <p className="font-bricolage text-[18px] leading-[1.44] text-gray-500 whitespace-pre-line">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Collapsed: vertical text */}
                <div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                    isExpanded
                      ? "opacity-0 pointer-events-none"
                      : "opacity-100",
                  )}
                >
                  <span className="service-card-vertical-text font-archivo font-normal text-[28px] leading-[1.09] text-white capitalize whitespace-nowrap">
                    {step.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tablet: 2-col grid */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
          {steps.map((step, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div
                key={i}
                onClick={() => setExpandedIndex(isExpanded ? -1 : i)}
                className={cn(
                  "service-card relative cursor-pointer overflow-hidden corner-border transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
                  isExpanded ? "service-card-expanded" : "",
                )}
              >
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="w-[60px] h-[60px] rounded-full border border-white/[0.08] flex items-center justify-center">
                      <span className="font-archivo text-[15px] text-[#EC1C24] font-medium">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-archivo font-normal text-[24px] leading-[1.09] text-white capitalize">
                    {step.title}
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
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: single column accordion */}
        <div className="grid md:hidden grid-cols-1 gap-4">
          {steps.map((step, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div
                key={i}
                onClick={() => setExpandedIndex(isExpanded ? -1 : i)}
                className="service-card relative cursor-pointer overflow-hidden corner-border transition-all duration-500"
              >
                <div className="p-5 flex flex-col gap-3">
                  <div className="w-[50px] h-[50px] rounded-full border border-white/[0.08] flex items-center justify-center">
                    <span className="font-archivo text-[13px] text-[#EC1C24] font-medium">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-archivo font-normal text-[22px] leading-[1.09] text-white capitalize">
                    {step.title}
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
                      {step.description}
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
