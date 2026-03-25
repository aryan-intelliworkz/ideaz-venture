import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights — Ideaz Ventures",
  description:
    "Perspectives on startup execution, technology, fundraising, and growth from the Ideaz Ventures team.",
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="max-w-[900px]">
            <p className="font-bricolage text-[14px] text-red uppercase tracking-wider mb-4">
              Blog
            </p>
            <h1 className="font-archivo font-medium text-[48px] lg:text-[80px] leading-[1.09] text-white capitalize mb-6">
              Insights
            </h1>
            <p className="font-bricolage text-[20px] lg:text-[24px] leading-[1.25] text-gray-400 max-w-[700px]">
              Perspectives on startup execution, technology, and growth from our
              team.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          {/* Featured */}
          <Link
            href={`/insights/${insights[0].slug}`}
            className="group block border border-white/10 hover:border-white/20 transition-all duration-300 mb-12"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="relative lg:w-1/2 min-h-[300px] bg-gradient-to-br from-red/5 to-blue-purple/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-archivo font-medium text-[120px] text-white/5">
                    01
                  </span>
                </div>
              </div>
              <div className="flex-1 p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-bricolage text-[14px] text-red uppercase tracking-wider">
                    {insights[0].category}
                  </span>
                  <span className="font-bricolage text-[14px] text-gray-500">
                    {insights[0].date}
                  </span>
                </div>
                <h2 className="font-archivo font-medium text-[28px] lg:text-[40px] leading-[1.2] text-white capitalize mb-4 group-hover:text-red transition-colors">
                  {insights[0].title}
                </h2>
                <p className="font-bricolage text-[18px] leading-[1.44] text-gray-400 mb-6">
                  {insights[0].excerpt}
                </p>
                <div className="flex items-center gap-2 font-bricolage text-[16px] text-white group-hover:text-red transition-colors">
                  Read More{" "}
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.slice(1).map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group border border-white/10 p-8 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bricolage text-[14px] text-red uppercase tracking-wider">
                      {insight.category}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-white/40 group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="font-archivo font-normal text-[24px] leading-[1.25] text-white capitalize group-hover:text-red transition-colors">
                    {insight.title}
                  </h3>
                  <p className="font-bricolage text-[16px] leading-[1.5] text-gray-400 line-clamp-3">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="font-bricolage text-[14px] text-gray-500">
                      {insight.date}
                    </span>
                    <span className="font-bricolage text-[14px] text-gray-500">
                      {insight.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
