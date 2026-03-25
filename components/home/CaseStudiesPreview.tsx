import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { caseStudies } from "@/lib/case-studies";

export default function CaseStudiesPreview() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
        {/* Section heading */}
        <div className="mb-10">
          <h2 className="font-archivo font-medium text-[32px] lg:text-[40px] leading-[1.09] text-white capitalize">
            Execution Stories
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Hero card with background image */}
          <div className="relative flex-shrink-0 lg:w-[37.5%] overflow-hidden min-h-[600px]">
            <Image
              src="/assets/sections/case-studies-hero.png"
              alt="Execution Stories"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
            {/* Overlay text card at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-bg-primary/50 border border-gray-100 p-8 lg:p-10 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center gap-6">
                <h3 className="font-archivo font-medium text-[40px] leading-[1.09] text-white capitalize">
                  Execution Stories
                </h3>
                <p className="font-bricolage font-medium text-[24px] leading-[1.5] text-white">
                  Built. Launched. Validated.
                </p>
              </div>
            </div>
          </div>

          {/* Right: 2x2 Case study cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudies.slice(0, 4).map((cs) => (
              <Link
                href={`/case-studies/${cs.slug}`}
                key={cs.slug}
                className="border border-gray-100 rounded-[30px] p-8 hover:border-white/30 transition-all duration-300 group bg-transparent"
              >
                <div className="flex flex-col gap-6 h-full">
                  {/* Top: Logo area + arrow button */}
                  <div className="flex items-center justify-between">
                    <div className="font-archivo font-medium text-[18px] text-white/90">
                      {cs.subtitle}
                    </div>
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-bg-primary to-red p-[1px]">
                      <div className="w-full h-full rounded-full bg-bg-primary flex items-center justify-center">
                        <ArrowUpRight
                          size={18}
                          className="text-white group-hover:text-red transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="font-bricolage text-[18px] leading-[1.2] text-gray-100">
                    {cs.title.endsWith(".") ? cs.title : `${cs.title}.`}
                  </h4>

                  {/* Stats */}
                  <p className="font-bricolage text-[18px] leading-[1.44] text-gray-500 mt-auto">
                    {cs.stats
                      .map((s) => `${s.value} ${s.label.toLowerCase()}.`)
                      .join("\n")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All link */}
        <div className="mt-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-bricolage text-[18px] text-white hover:text-red transition-colors"
          >
            View All Case Studies <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
