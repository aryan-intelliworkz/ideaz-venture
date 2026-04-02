import type { Metadata } from "next";
import Image from "next/image";
import { caseStudies } from "@/lib/case-studies";
import MasterLayout from "@/components/layout/MasterLayout";
import PrimaryButton from "@/components/ui/PrimaryButton";
import RevealSection from "@/components/ui/RevealSection";

export const metadata: Metadata = {
  title: "Case Studies — Ideaz Ventures",
  description:
    "We don't just build software; we build scalable businesses. Explore our track record of successful exits and global adoptions.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <MasterLayout
        backgroundImage="/assets/whoWeAreBg.png"
        heading="Case Studies"
        description="We don't just build software; we build scalable businesses. Explore our track record of successful exits and global adoptions."
        ctaText="Contact us"
        ctaHref="/get-in-touch"
      />

      {/* Case Study Cards — Alternating Layout */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <div className="flex flex-col gap-12 lg:gap-16">
            {caseStudies.map((cs, i) => {
              const isEven = i % 2 === 0;
              return (
                <RevealSection
                  key={cs.slug}
                  className={
                    isEven ? "reveal-slide-left" : "reveal-slide-right"
                  }
                  threshold={0.1}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center border border-white/[0.08] rounded-[4px] overflow-hidden bg-[#0a0a0a]">
                    {/* Text Content */}
                    <div
                      className={`flex flex-col p-6 md:p-8 lg:p-10 ${
                        !isEven ? "lg:order-2" : ""
                      }`}
                    >
                      {/* Tag */}
                      <p className="font-bricolage text-[12px] md:text-[13px] text-[#EC1C24] tracking-wider mb-4">
                        {cs.subtitle}
                      </p>

                      {/* Title */}
                      <h3 className="font-archivo font-medium text-[24px] md:text-[32px] lg:text-[32px] xl:text-[36px] leading-[1.15] text-white capitalize mb-4">
                        {cs.title}
                      </h3>

                      {/* Tagline */}
                      <p className="font-bricolage text-[14px] md:text-[15px] leading-[1.6] text-white/60 mb-4">
                        {cs.tagline}
                      </p>

                      {/* Description */}
                      <p className="font-bricolage text-[13px] md:text-[14px] leading-[1.7] text-white/40 mb-8">
                        {cs.description}
                      </p>

                      {/* Button */}
                      <div>
                        <PrimaryButton as="a" href={`/case-studies/${cs.slug}`}>
                          Read Case Study
                        </PrimaryButton>
                      </div>
                    </div>

                    {/* Image */}
                    <div
                      className={`relative w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px] md:min-h-[340px] lg:min-h-[400px] ${
                        !isEven ? "lg:order-1" : ""
                      }`}
                    >
                      <Image
                        src="/assets/caseStudyImg.png"
                        alt={cs.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
