import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies — Ideaz Ventures",
  description:
    "Explore our execution stories. Real ventures, real results — from enterprise platforms to fintech applications.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="max-w-[900px]">
            <p className="font-bricolage text-[14px] text-red uppercase tracking-wider mb-4">
              Our Work
            </p>
            <h1 className="font-archivo font-medium text-[48px] lg:text-[80px] leading-[1.09] text-white capitalize mb-6">
              Case Studies
            </h1>
            <p className="font-bricolage text-[20px] lg:text-[24px] leading-[1.25] text-gray-400 max-w-[700px]">
              Real ventures. Real results. Explore how we&apos;ve helped
              founders build, launch, and scale their products.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                {/* Thumbnail area */}
                <div className="relative h-[280px] bg-gradient-to-br from-white/5 to-transparent">
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary to-transparent" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/10 transition-colors">
                    <ArrowUpRight
                      size={18}
                      className="text-white/60 group-hover:text-white transition-colors"
                    />
                  </div>
                  <div className="absolute bottom-4 left-6">
                    <span className="inline-block px-3 py-1 bg-red/20 font-bricolage text-[12px] text-red uppercase tracking-wider">
                      {cs.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="font-archivo font-medium text-[24px] lg:text-[28px] leading-[1.2] text-white capitalize mb-4 group-hover:text-red transition-colors">
                    {cs.title}
                  </h3>
                  <p className="font-bricolage text-[16px] leading-[1.5] text-gray-400 mb-6 line-clamp-2">
                    {cs.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {cs.stats.map((stat) => (
                      <div key={stat.label} className="flex items-center gap-2">
                        <span className="font-archivo font-medium text-[18px] text-white">
                          {stat.value}
                        </span>
                        <span className="font-bricolage text-[14px] text-gray-500">
                          {stat.label}
                        </span>
                      </div>
                    ))}
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
