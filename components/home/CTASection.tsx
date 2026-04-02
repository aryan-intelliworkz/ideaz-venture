"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTASection() {
  const headingRef = useScrollReveal();
  const circlesRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
        {/* Section Header */}
        <div
          ref={headingRef}
          className="reveal-fade-up text-center mb-12 lg:mb-16"
        >
          <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[36px] min-[1800px]:text-[40px] leading-[1.2] text-white capitalize">
            Choose Your Path
          </h2>
          <p className="mt-3 font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.44] text-gray-400">
            Built for Founders. Trusted by Enterprises.
          </p>
        </div>

        {/* Venn Diagram — two overlapping circles */}
        {/* Desktop: side by side overlapping */}
        <div
          ref={circlesRef}
          className="reveal-scale hidden md:flex justify-center items-center relative"
        >
          {/* Left Circle */}
          <div className="relative w-[420px] lg:w-[520px] xl:w-[600px] h-[420px] lg:h-[520px] xl:h-[600px] rounded-full border border-white/[0.25] flex flex-col items-center justify-center text-center z-10">
            <div className="flex flex-col items-center gap-4 px-10 lg:px-14 -translate-x-4 lg:-translate-x-6">
              <h3 className="font-archivo font-medium text-[24px] md:text-[30px] lg:text-[32px] min-[1800px]:text-[36px] leading-[1.09] text-white capitalize">
                Build A Venture
              </h3>
              <p className="font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.5] text-gray-100 max-w-[280px]">
                Validate your idea.
                <br />
                Architect it correctly.
                <br />
                Launch with confidence.
              </p>
              <PrimaryButton as="a" href="/get-in-touch" className="mt-2">
                Start the Execution Journey
              </PrimaryButton>
            </div>
          </div>

          {/* Center Logo at intersection */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <svg
              width="40"
              height="48"
              viewBox="0 0 40 48"
              fill="none"
              className="w-[30px] lg:w-[40px] h-auto"
            >
              <path
                d="M8 4L20 44M20 44L32 4"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 24L20 38L26 24"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Right Circle — overlaps left by translating leftward */}
          <div className="relative w-[420px] lg:w-[520px] xl:w-[600px] h-[420px] lg:h-[520px] xl:h-[600px] rounded-full border border-white/[0.25] flex flex-col items-center justify-center text-center -ml-[80px] lg:-ml-[100px] xl:-ml-[120px] z-10">
            <div className="flex flex-col items-center gap-4 px-10 lg:px-14 translate-x-4 lg:translate-x-6">
              <h3 className="font-archivo font-medium text-[24px] md:text-[30px] lg:text-[32px] min-[1800px]:text-[36px] leading-[1.09] text-white capitalize">
                Build Your
                <br />
                Engineering Team
              </h3>
              <p className="font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.5] text-gray-100 max-w-[280px]">
                Deploy experienced startup-ready engineers — fast.
              </p>
              <PrimaryButton as="a" href="/get-in-touch" className="mt-2">
                Hire Dedicated Teams
              </PrimaryButton>
            </div>
          </div>
        </div>

        {/* Mobile: stacked circles with vertical overlap */}
        <div className="flex md:hidden flex-col items-center relative">
          {/* Top Circle */}
          <div className="relative w-[320px] h-[320px] rounded-full border border-white/[0.25] flex flex-col items-center justify-center text-center z-10">
            <div className="flex flex-col items-center gap-3 px-8 -translate-y-3">
              <h3 className="font-archivo font-medium text-[24px] leading-[1.09] text-white capitalize">
                Build A Venture
              </h3>
              <p className="font-bricolage text-[14px] leading-[1.5] text-gray-100 max-w-[220px]">
                Validate your idea.
                <br />
                Architect it correctly.
                <br />
                Launch with confidence.
              </p>
              <PrimaryButton as="a" href="/get-in-touch" className="mt-1">
                Start the Execution Journey
              </PrimaryButton>
            </div>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <svg width="30" height="36" viewBox="0 0 40 48" fill="none">
              <path
                d="M8 4L20 44M20 44L32 4"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 24L20 38L26 24"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Bottom Circle — overlaps top */}
          <div className="relative w-[320px] h-[320px] rounded-full border border-white/[0.25] flex flex-col items-center justify-center text-center -mt-[60px] z-10">
            <div className="flex flex-col items-center gap-3 px-8 translate-y-3">
              <h3 className="font-archivo font-medium text-[24px] leading-[1.09] text-white capitalize">
                Build Your
                <br />
                Engineering Team
              </h3>
              <p className="font-bricolage text-[14px] leading-[1.5] text-gray-100 max-w-[220px]">
                Deploy experienced startup-ready engineers — fast.
              </p>
              <PrimaryButton as="a" href="/get-in-touch" className="mt-1">
                Hire Dedicated Teams
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
