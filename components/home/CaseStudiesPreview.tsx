"use client";

import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/case-studies";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

/* Company logo names matching screenshot */
const companyLogos = [
  { name: "DATANOTE", superscript: "®", subtitle: "OpenLogic ERP" },
  { name: "talentwale", suffix: ".com", superscript: "®" },
  { name: "realty", suffix: "mart.com", superscript: "®" },
  { name: "ATCO MAART", superscript: "" },
];

/* Arrow button with spinning gradient border — same as services section */
function ArrowButton() {
  return (
    <div className="service-arrow-btn shrink-0">
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

function CompanyLogo({ logo }: { logo: (typeof companyLogos)[number] }) {
  return (
    <div className="flex items-baseline gap-0">
      <span className="font-archivo font-bold text-[18px] md:text-[20px] text-white tracking-wide">
        {logo.name}
      </span>
      {logo.suffix && (
        <span className="font-archivo font-normal text-[18px] md:text-[20px] text-white">
          {logo.suffix}
        </span>
      )}
      {logo.superscript && (
        <sup className="text-[10px] text-white ml-0.5">{logo.superscript}</sup>
      )}
      {logo.subtitle && (
        <span className="ml-2 font-bricolage text-[10px] text-white/60 tracking-wider uppercase">
          {logo.subtitle}
        </span>
      )}
    </div>
  );
}

export default function CaseStudiesPreview() {
  const cards = caseStudies.slice(0, 4);
  const leftRef = useScrollReveal();
  const gridRef = useStaggerReveal({ threshold: 0.1 });

  return (
    <section className="py-16 md:py-20 lg:py-20 xl:py-24 2xl:py-24">
      <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 lg:items-stretch">
          {/* Left: Chess image + text block — matches total height of right grid */}
          <div
            ref={leftRef}
            className="reveal-slide-left flex flex-col lg:w-[35%] shrink-0"
          >
            {/* Chess 3D image — fills available space, extends to frame edge */}
            <div className="relative w-full flex-1 min-h-[320px] md:min-h-[380px] lg:min-h-[400px] -z-0">
              <Image
                src="/assets/ChessImg.png"
                alt="Execution Stories"
                fill
                className="object-contain object-center drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
            </div>

            {/* Text block at bottom — bordered card */}
            <div className="border border-gray-600 rounded-[3px] p-5 md:p-6 lg:p-8 bg-bg-card mt-2">
              <h2 className="font-archivo font-medium text-[24px] md:text-[28px] lg:text-[26px] xl:text-[28px] min-[1800px]:text-[32px] leading-[1.09] text-white capitalize">
                Product Execution Stories
              </h2>
              <p className="font-bricolage font-medium text-[15px] md:text-[17px] lg:text-[16px] xl:text-[17px] min-[1800px]:text-[20px] leading-[1.5] text-white mt-2">
                Built. Launched. Scaled.
              </p>
            </div>
          </div>

          {/* Right: 2x2 cards grid — each card equal height */}
          <div
            ref={gridRef}
            className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 auto-rows-fr"
          >
            {cards.map((cs, index) => (
              <Link
                href={`/case-studies/${cs.slug}`}
                key={cs.slug}
                className="reveal-child group border border-gray-600 rounded-[30px] p-5 md:p-6 lg:p-7 bg-bg-card hover:border-white/30 transition-all duration-300 flex flex-col"
              >
                {/* Top: company logo + arrow */}
                <div className="flex items-start justify-between mb-4">
                  <CompanyLogo logo={companyLogos[index]} />
                  <ArrowButton />
                </div>

                {/* Description */}
                <p className="font-bricolage text-[14px] md:text-[15px] leading-[1.5] text-gray-400 mb-auto">
                  {cs.description}
                </p>

                {/* Stats */}
                <div className="font-bricolage text-[13px] md:text-[14px] leading-[1.7] text-gray-500 mt-4">
                  {cs.stats.map((s) => (
                    <div key={s.label}>
                      {s.value} {s.label.toLowerCase()}.
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
