"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "₹174 Crore", label: "Strategic Value Delivered." },
  { value: "25,000+", label: "Active Global Users." },
  { value: "15+", label: "Countries Reached." },
  { value: "500,000+", label: "Products & Operations Supported." },
];

export default function StatsSection() {
  const headingRef = useScrollReveal();
  const contentRef = useScrollReveal({ threshold: 0.1 });
  const statsRef = useStaggerReveal();

  return (
    <section className="relative py-16 md:py-20 lg:py-20 xl:py-24 2xl:py-24">
      <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
        <div className="flex flex-col gap-10 lg:gap-12 xl:gap-[60px]">
          {/* Top row: Arrow + Title | Paragraphs + Button */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 xl:gap-[32px]">
            {/* Left: Arrow + Title */}
            <div
              ref={headingRef}
              className="reveal-slide-left flex items-start gap-4 shrink-0"
            >
              {/* Red arrow SVG */}
              <svg
                width="69"
                height="63"
                viewBox="0 0 69 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 mt-1"
              >
                <path
                  d="M0 31.25H55M55 31.25L38 14M55 31.25L38 48.5"
                  stroke="#EC1C24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="font-archivo font-medium text-[28px] md:text-[32px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] min-[1800px]:text-[40px] leading-[1.2] text-white capitalize max-w-[510px]">
                Execution That Turns Ideas Into Real Businesses
              </h2>
            </div>

            {/* Right: Paragraphs + Button */}
            <div
              ref={contentRef}
              className="reveal-slide-right flex flex-col gap-[25px] flex-1"
            >
              <div className="flex flex-col gap-[14px]">
                <p className="font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.44] text-gray-400">
                  Building a startup takes more than vision. It requires
                  structured thinking, the right technology decisions, and
                  disciplined execution at every stage.
                </p>
                <p className="font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.44] text-gray-400">
                  As a business consulting and services company, Ideaz Ventures
                  works with founders and businesses to turn early-stage ideas
                  into scalable, market-ready products.
                </p>
                <p className="font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.44] text-gray-400">
                  We combine management consulting solutions with hands-on
                  product execution, covering strategy, development, branding,
                  and operational readiness, so every product is built to
                  perform, scale, and sustain growth.
                </p>
              </div>
              <PrimaryButton as="a" href="/get-in-touch" className="w-fit">
                Let&apos;s Build What Matters
              </PrimaryButton>
            </div>
          </div>

          {/* Stats row: 4 in a row separated by vertical lines */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-y-10"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal-child flex flex-col gap-6 ${
                  i !== 0 ? "lg:border-gray-400 lg:pl-8" : ""
                } ${i === 2 ? "border-gray-400 pl-6 lg:pl-8" : ""} ${i === 1 || i === 3 ? "border-gray-400 pl-6 lg:pl-8" : ""}`}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-archivo font-medium text-[28px] md:text-[32px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] min-[1800px]:text-[40px] leading-[1.09] text-white capitalize">
                    {stat.value}
                  </span>
                  <div className="h-[1px] w-full bg-gray-400" />
                </div>
                <p className="font-bricolage text-[14px] md:text-[16px] lg:text-[18px] leading-[1.44] text-gray-100">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
