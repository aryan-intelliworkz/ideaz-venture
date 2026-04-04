"use client";

import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTASection() {
  const headingRef = useScrollReveal();
  const circlesRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-16 md:py-20 lg:py-20 xl:py-24 2xl:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
        {/* Section Header */}
        <div
          ref={headingRef}
          className="reveal-fade-up text-center mb-12 lg:mb-16"
        >
          <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] min-[1800px]:text-[40px] leading-[1.2] text-white capitalize">
            Choose Your Path
          </h2>
          <p className="mt-3 font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.44] text-gray-400">
            Built for founders. Trusted for execution.
          </p>
        </div>

        {/* Venn Diagram — two overlapping circles */}
        {/* Desktop: side by side overlapping */}
        <div
          ref={circlesRef}
          className="reveal-scale hidden md:flex justify-center items-center relative"
        >
          {/* Left Circle */}
          <div className="relative w-[420px] lg:w-[440px] xl:w-[520px] 2xl:w-[520px] h-[420px] lg:h-[440px] xl:h-[520px] 2xl:h-[520px] rounded-full border border-white/[0.25] flex flex-col items-center justify-center text-center z-10">
            <div className="flex flex-col items-center gap-4 px-10 lg:px-12 xl:px-14 -translate-x-4 lg:-translate-x-6">
              <h3 className="font-archivo font-medium text-[24px] md:text-[30px] lg:text-[28px] xl:text-[32px] 2xl:text-[34px] min-[1800px]:text-[36px] leading-[1.09] text-white capitalize">
                Build A Venture
              </h3>
              <p className="font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.5] text-gray-100 max-w-[280px]">
                Validate your idea.
                <br />
                Structure it correctly.
                <br />
                Launch with clarity.
              </p>
              <PrimaryButton as="a" href="/get-in-touch" className="mt-2">
                Start the Execution Journey
              </PrimaryButton>
            </div>
          </div>

          {/* Center Logo at intersection */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <Image
              src="/assets/cricleLogo.png"
              alt="Ideaz Ventures"
              width={60}
              height={60}
              className="w-[40px] lg:w-[50px] xl:w-[60px] h-auto"
            />
          </div>

          {/* Right Circle — overlaps left by translating leftward */}
          <div className="relative w-[420px] lg:w-[440px] xl:w-[520px] 2xl:w-[520px] h-[420px] lg:h-[440px] xl:h-[520px] 2xl:h-[520px] rounded-full border border-white/[0.25] flex flex-col items-center justify-center text-center -ml-[80px] lg:-ml-[80px] xl:-ml-[100px] 2xl:-ml-[100px] z-10">
            <div className="flex flex-col items-center gap-4 px-10 lg:px-12 xl:px-14 translate-x-4 lg:translate-x-6">
              <h3 className="font-archivo font-medium text-[24px] md:text-[30px] lg:text-[28px] xl:text-[32px] 2xl:text-[34px] min-[1800px]:text-[36px] leading-[1.09] text-white capitalize">
                Build Your
                <br />
                Engineering Team
              </h3>
              <p className="font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.5] text-gray-100 max-w-[280px]">
                Hire experienced, product-focused engineers. Scale execution
                without hiring overhead.
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
                Structure it correctly.
                <br />
                Launch with clarity.
              </p>
              <PrimaryButton
                as="a"
                href="/get-in-touch"
                className="mt-1 cta-mobile-btn"
              >
                Start the Execution Journey
              </PrimaryButton>
            </div>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <Image
              src="/assets/cricleLogo.png"
              alt="Ideaz Ventures"
              width={40}
              height={40}
              className="w-[35px] h-auto"
            />
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
                Hire experienced, product-focused engineers. Scale execution
                without hiring overhead.
              </p>
              <PrimaryButton
                as="a"
                href="/get-in-touch"
                className="mt-1 cta-mobile-btn"
              >
                Hire Dedicated Teams
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
