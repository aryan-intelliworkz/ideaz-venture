"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    title: "Startup Consulting",
    description:
      "We help founders validate, structure, and de-risk their startup ideas before execution.\nOur consulting services include business strategy development, market positioning, competitive analysis, revenue model design, and growth planning. We work closely with founders to define a clear roadmap from concept to launch while minimizing risk and maximizing clarity",
    icon: (
      <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
        <circle cx="38" cy="38" r="37" stroke="white" strokeOpacity="0.3" />
        <path
          d="M24 52V28L38 20L52 28V44L38 52L24 44"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M38 36V52" stroke="white" strokeWidth="1.5" />
        <path d="M24 28L38 36L52 28" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Startup Product Development",
    description:
      "End-to-end product development from ideation to deployment. We build MVPs, iterate based on user feedback, and scale your product with robust, maintainable code and modern architecture.",
    icon: (
      <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
        <circle cx="38" cy="38" r="37" stroke="white" strokeOpacity="0.3" />
        <rect
          x="22"
          y="22"
          width="32"
          height="32"
          rx="4"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M32 34L36 38L32 42"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 42H46"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Branding & GTM Support",
    description:
      "Strategic branding and go-to-market support that positions your venture for growth. From brand identity to launch strategy, we ensure your product enters the market with impact.",
    icon: (
      <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
        <circle cx="38" cy="38" r="37" stroke="white" strokeOpacity="0.3" />
        <path
          d="M26 50L38 26L50 50"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 42H46"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="38" cy="34" r="3" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Investor Readiness Support",
    description:
      "Prepare your venture for funding with investor-ready metrics, pitch materials, financial modeling, and due diligence preparation that demonstrates operational maturity.",
    icon: (
      <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
        <circle cx="38" cy="38" r="37" stroke="white" strokeOpacity="0.3" />
        <path
          d="M26 48V32L32 28V48"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M34 48V36L40 32V48"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M42 48V30L48 26V48"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M24 48H52"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Post-Launch Support",
    description:
      "Ongoing technical and strategic support after launch. Bug fixes, performance optimization, feature iterations, and user analytics to keep your product growing.",
    icon: (
      <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
        <circle cx="38" cy="38" r="37" stroke="white" strokeOpacity="0.3" />
        <path
          d="M38 24V38L46 42"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="38" cy="38" r="14" stroke="white" strokeWidth="1.5" />
        <path
          d="M28 48L24 52"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Managed Operations",
    description:
      "Full operational management including DevOps, infrastructure, monitoring, and technical support so you can focus on growth while we handle the engine room.",
    icon: (
      <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
        <circle cx="38" cy="38" r="37" stroke="white" strokeOpacity="0.3" />
        <circle cx="38" cy="38" r="8" stroke="white" strokeWidth="1.5" />
        <path
          d="M38 24V28"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M38 48V52"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M24 38H28"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M48 38H52"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M28.1 28.1L31 31"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M45 45L47.9 47.9"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M28.1 47.9L31 45"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M45 31L47.9 28.1"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

/* Arrow button with spinning gradient border (same as primary button) */
function ArrowButton() {
  return (
    <div className="service-arrow-btn">
      <div className="service-arrow-btn-bg">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          className="relative z-10"
        >
          <path
            d="M4 13L13 4M13 4H5M13 4V12"
            stroke="#EC1C24"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="service-arrow-glow" />
      </div>
      <div className="service-arrow-border-spin" />
    </div>
  );
}

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const headingRef = useScrollReveal();
  const cardsRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section
      id="services"
      className="py-16 md:py-20 lg:py-20 xl:py-24 2xl:py-28"
    >
      <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
        {/* Section heading */}
        <div
          ref={headingRef}
          className="reveal-fade-up flex flex-col items-center gap-3 mb-10"
        >
          <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[36px] xl:text-[38px] 2xl:text-[40px] leading-[1.2] text-white capitalize text-center">
            We Partner With Founders From Idea Validation to Scale.
          </h2>
          <p className="font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.44] text-gray-500 max-w-[700px] text-center">
            Our services cover the entire startup journey — from strategy and
            product development to launch and operational growth.
          </p>
        </div>

        {/* Desktop: accordion row */}
        <div
          ref={cardsRef}
          className="reveal-fade-up hidden lg:flex gap-4 h-[340px] xl:h-[400px] 2xl:h-[450px]"
        >
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={service.title}
                onClick={() => setExpandedIndex(index)}
                onMouseEnter={() => setExpandedIndex(index)}
                className={cn(
                  "service-card relative cursor-pointer overflow-hidden border border-white/[0.08] transition-all duration-700 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
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
                  {/* Icon + Arrow row */}
                  <div className="flex items-start justify-between">
                    <div className="w-[100px] h-[100px] rounded-full bg-white/[0.08] flex items-center justify-center">
                      {service.icon}
                    </div>
                    <ArrowButton />
                  </div>

                  {/* Title + Description */}
                  <div className="mt-auto flex flex-col gap-4">
                    <h3 className="font-archivo font-normal text-[28px] leading-[1.09] text-white capitalize">
                      {service.title}
                    </h3>
                    <p className="font-bricolage text-[18px] leading-[1.44] text-gray-500 whitespace-pre-line">
                      {service.description}
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
                    {service.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tablet: 2-col grid */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={service.title}
                onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                className={cn(
                  "service-card relative cursor-pointer overflow-hidden border border-white/[0.08] transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
                  isExpanded ? "service-card-expanded" : "",
                )}
              >
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="w-[80px] h-[80px] rounded-full bg-white/[0.08] flex items-center justify-center">
                      {service.icon}
                    </div>
                    <ArrowButton />
                  </div>
                  <h3 className="font-archivo font-normal text-[24px] leading-[1.09] text-white capitalize">
                    {service.title}
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
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: single column, all expandable */}
        <div className="grid md:hidden grid-cols-1 gap-4">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={service.title}
                onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                className="service-card relative cursor-pointer overflow-hidden border border-white/[0.08] transition-all duration-500"
              >
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <div className="w-[64px] h-[64px] rounded-full bg-white/[0.08] flex items-center justify-center scale-[0.84]">
                      {service.icon}
                    </div>
                    <ArrowButton />
                  </div>
                  <h3 className="font-archivo font-normal text-[22px] leading-[1.09] text-white capitalize">
                    {service.title}
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
                      {service.description}
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
