import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { insights } from "@/lib/insights";
import MasterLayout from "@/components/layout/MasterLayout";
import RevealSection from "@/components/ui/RevealSection";

export const metadata: Metadata = {
  title: "Insights — Ideaz Ventures",
  description:
    "Lorem ipsum dolor sit amet consectetur. Pretium orci nunc enim massa magna duis arcu mattis morbi. Pulvinar nec tincidunt a eget fusce lectus imperdiet.",
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <MasterLayout
        backgroundImage="/assets/whoWeAreBg.png"
        heading="Insights"
        description="Lorem ipsum dolor sit amet consectetur. Pretium orci nunc enim massa magna duis arcu mattis morbi. Pulvinar nec tincidunt a eget fusce lectus imperdiet."
        ctaText="Contact us"
        ctaHref="/get-in-touch"
      />

      {/* Insights Grid */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {insights.map((insight) => (
              <RevealSection
                key={insight.slug}
                className="reveal-fade-up"
                threshold={0.1}
              >
                <Link
                  href={`/insights/${insight.slug}`}
                  className="group flex flex-col border border-white/35 overflow-hidden bg-[#0a0a0a] transition-all duration-300 h-full"
                >
                  {/* Image */}
                  <div className="p-4 md:p-5">
                    <div className="relative w-full aspect-[16/11] rounded-[6px] overflow-hidden">
                      <Image
                        src={insight.thumbnail}
                        alt={insight.title}
                        fill
                        className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5 md:p-6">
                    {/* Date */}
                    <div className="flex items-center gap-2 mb-3">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="shrink-0"
                      >
                        <rect
                          x="1"
                          y="2"
                          width="12"
                          height="11"
                          rx="1.5"
                          stroke="white"
                          strokeOpacity="0.4"
                          strokeWidth="1"
                        />
                        <path
                          d="M1 5.5H13"
                          stroke="white"
                          strokeOpacity="0.4"
                          strokeWidth="1"
                        />
                        <path
                          d="M4.5 1V3"
                          stroke="white"
                          strokeOpacity="0.4"
                          strokeWidth="1"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9.5 1V3"
                          stroke="white"
                          strokeOpacity="0.4"
                          strokeWidth="1"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="font-bricolage text-[12px] md:text-[13px] text-white/40">
                        {insight.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-archivo font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[1.3] text-white mb-3 group-hover:text-[#EC1C24] transition-colors">
                      {insight.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="font-bricolage text-[13px] md:text-[14px] leading-[1.6] text-white/40 line-clamp-3">
                      {insight.excerpt}
                    </p>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
