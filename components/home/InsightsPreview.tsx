"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { insights } from "@/lib/insights";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

export default function InsightsPreview() {
  const previewInsights = insights.slice(0, 3);
  const headingRef = useScrollReveal();
  const gridRef = useStaggerReveal({ threshold: 0.1 });

  return (
    <section className="py-16 md:py-20 lg:py-20 xl:py-24 2xl:py-28">
      <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
        <div
          ref={headingRef}
          className="reveal-fade-up flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12"
        >
          <div>
            <h2 className="font-archivo font-medium text-[28px] md:text-[32px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] min-[1800px]:text-[40px] leading-[1.2] text-white capitalize">
              Latest Insights
            </h2>
            <p className="mt-2 font-bricolage text-[15px] md:text-[16px] lg:text-[18px] text-gray-400">
              Perspectives on startup execution, technology, and growth.
            </p>
          </div>
          <Link
            href="/insights"
            className="mt-4 lg:mt-0 inline-flex items-center gap-2 font-bricolage text-[15px] md:text-[16px] lg:text-[18px] text-white hover:text-red transition-colors"
          >
            View All <ArrowRight size={18} />
          </Link>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewInsights.map((insight) => (
            <Link
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="reveal-child group border border-white/10 p-8 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-bricolage text-[12px] md:text-[13px] lg:text-[14px] text-red uppercase tracking-wider">
                    {insight.category}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-white/40 group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="font-archivo font-normal text-[20px] md:text-[22px] lg:text-[20px] xl:text-[22px] min-[1800px]:text-[24px] leading-[1.25] text-white capitalize">
                  {insight.title}
                </h3>
                <p className="font-bricolage text-[14px] md:text-[15px] lg:text-[16px] leading-[1.5] text-gray-400 line-clamp-3">
                  {insight.excerpt}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="font-bricolage text-[12px] md:text-[13px] lg:text-[14px] text-gray-500">
                    {insight.date}
                  </span>
                  <span className="font-bricolage text-[12px] md:text-[13px] lg:text-[14px] text-gray-500">
                    {insight.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
