"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Import SVGs normally (as static images)
import startupConsultingIcon from "./Homepage/Startup Consulting.svg";
import productDevelopmentIcon from "./Homepage/Startup Product Development.svg";
import brandingGTMIcon from "./Homepage/Branding & GTM Support.svg";
import investorReadinessIcon from "./Homepage/Investor Readiness Support.svg";
import postLaunchSupportIcon from "./Homepage/Post-Launch Support.svg";
import managedOperationsIcon from "./Homepage/Managed Operations.svg";

const services = [
  {
    slug: "startup-consulting",
    title: "Startup Consulting",
    description:
      "We provide structured startup consulting services to help founders validate ideas, define product scope, and reduce execution risk before development begins. Our consulting approach covers market research, business model design, and roadmap planning, ensuring every decision is intentional and aligned with long-term growth.",
    icon: startupConsultingIcon,
  },
  {
    slug: "product-development",
    title: "Startup Product Development",
    description:
      "Our startup product development services focus on building real, scalable products, not just features. From MVP development to full-scale platforms, we handle design, engineering, and deployment with a strong focus on performance, usability, and long-term maintainability.",
    icon: productDevelopmentIcon,
  },
  {
    slug: "branding-gtm",
    title: "Branding & GTM Support",
    description:
      "Through our startup branding services and go-to-market strategy services, we help you position your product clearly and launch with confidence. We align messaging, customer targeting, and product value so your offering is understood, adopted, and ready to grow.",
    icon: brandingGTMIcon,
  },
  {
    slug: "investor-readiness",
    title: "Investor Readiness Support",
    description:
      "Our investor readiness consulting prepares startups for serious funding conversations. We help define your product narrative, validate your roadmap, and align your execution strategy, so investors see clarity, scalability, and real potential.",
    icon: investorReadinessIcon,
  },
  {
    slug: "post-launch-support",
    title: "Post-Launch Support",
    description:
      "We provide post-launch support services focused on improving product performance, stability, and user experience after release. From feature enhancements to optimization strategies, we help startups scale efficiently and sustainably.",
    icon: postLaunchSupportIcon,
  },
  {
    slug: "managed-operations",
    title: "Managed Operations",
    description:
      "Our managed operations services and startup operations consulting ensure your business runs smoothly as it grows. We streamline processes, improve execution efficiency, and build operational systems that support long-term scalability.",
    icon: managedOperationsIcon,
  },
];

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
      className="py-16 md:py-20 lg:py-20 xl:py-24 2xl:py-24"
    >
      <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
        {/* Section heading */}
        <div
          ref={headingRef}
          className="reveal-fade-up flex flex-col items-center gap-3 mb-10"
        >
          <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[36px] xl:text-[38px] 2xl:text-[40px] leading-[1.2] text-white capitalize text-center">
            End-to-End Startup Consulting & Execution Services
          </h2>
          <p className="font-bricolage text-[15px] md:text-[15px] lg:text-[16px] leading-[1.44] text-gray-500 max-w-[920px] text-center mx-auto">
            As a business consulting company and technology consulting company,
            we support founders and businesses across the entire journey — from
            idea validation and product development to launch, funding, and
            growth. Our approach combines business consulting solutions with
            real execution, ensuring every stage is clear, structured, and built
            to scale.
          </p>
        </div>

        {/* Desktop: accordion row */}
        <div
          ref={cardsRef}
          className="reveal-fade-up hidden lg:flex gap-4 h-[340px] xl:h-[400px] 2xl:h-[400px]"
        >
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={service.title}
                onClick={() => setExpandedIndex(index)}
                onMouseEnter={() => setExpandedIndex(index)}
                className={cn(
                  "service-card relative cursor-pointer overflow-hidden corner-border transition-all duration-700 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
                  isExpanded
                    ? "service-card-expanded flex-[3.2]"
                    : "service-card-collapsed flex-1 hover:bg-white/[0.02]",
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 p-6 flex flex-col transition-opacity duration-500",
                    isExpanded
                      ? "opacity-100 delay-200"
                      : "opacity-0 pointer-events-none",
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-[100px] h-[100px] rounded-full bg-white/[0.08] flex items-center justify-center">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={80}
                        height={80}
                        className="w-20 h-20"
                      />
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ArrowButton />
                    </Link>
                  </div>

                  <div className="mt-auto flex flex-col gap-4">
                    <h3 className="font-archivo font-normal text-[28px] leading-[1.09] text-white capitalize">
                      {service.title}
                    </h3>
                    <p className="font-bricolage text-[18px] leading-[1.44] text-gray-500 whitespace-pre-line">
                      {service.description}
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
                    {service.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tablet & Mobile - Same pattern with Image component */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={service.title}
                onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                className={cn(
                  "service-card relative cursor-pointer overflow-hidden corner-border transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
                  isExpanded ? "service-card-expanded" : "",
                )}
              >
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="w-[80px] h-[80px] rounded-full bg-white/[0.08] flex items-center justify-center">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={64}
                        height={64}
                        className="w-16 h-16"
                      />
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ArrowButton />
                    </Link>
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

        <div className="grid md:hidden grid-cols-1 gap-4">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={service.title}
                onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                className="service-card relative cursor-pointer overflow-hidden corner-border transition-all duration-500"
              >
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <div className="w-[64px] h-[64px] rounded-full bg-white/[0.08] flex items-center justify-center scale-[0.84]">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={48}
                        height={48}
                        className="w-12 h-12"
                      />
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ArrowButton />
                    </Link>
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
