import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  return {
    title: cs ? `${cs.title} — Ideaz Ventures` : "Case Study — Ideaz Ventures",
    description: cs?.description,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) notFound();

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const nextCs = caseStudies[(currentIndex + 1) % caseStudies.length];
  const prevCs =
    caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];

  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-bricolage text-[16px] text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>
          <div className="max-w-[900px]">
            <span className="inline-block px-3 py-1 bg-red/20 font-bricolage text-[12px] text-red uppercase tracking-wider mb-4">
              {cs.subtitle}
            </span>
            <h1 className="font-archivo font-medium text-[40px] lg:text-[54px] leading-[1.09] text-white capitalize mb-6">
              {cs.title}
            </h1>
            <p className="font-bricolage text-[18px] lg:text-[24px] leading-[1.25] text-gray-400">
              {cs.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 border-y border-white/10">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="flex flex-wrap gap-8 lg:gap-16">
            {cs.stats.map((stat) => (
              <div key={stat.label}>
                <span className="font-archivo font-medium text-[32px] lg:text-[40px] text-white">
                  {stat.value}
                </span>
                <p className="font-bricolage text-[16px] text-gray-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="max-w-[800px] mx-auto">
            {/* Challenge */}
            <div className="mb-16">
              <h2 className="font-archivo font-medium text-[28px] lg:text-[32px] text-white capitalize mb-6">
                The Challenge
              </h2>
              <p className="font-bricolage text-[18px] leading-[1.67] text-gray-400">
                {cs.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-16">
              <h2 className="font-archivo font-medium text-[28px] lg:text-[32px] text-white capitalize mb-6">
                Our Solution
              </h2>
              <p className="font-bricolage text-[18px] leading-[1.67] text-gray-400">
                {cs.solution}
              </p>
            </div>

            {/* Results */}
            <div className="mb-16">
              <h2 className="font-archivo font-medium text-[28px] lg:text-[32px] text-white capitalize mb-6">
                The Results
              </h2>
              <p className="font-bricolage text-[18px] leading-[1.67] text-gray-400">
                {cs.results}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="font-archivo font-medium text-[28px] lg:text-[32px] text-white capitalize mb-6">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {cs.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 border border-white/10 font-bricolage text-[14px] text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="flex items-center justify-between">
            <Link
              href={`/case-studies/${prevCs.slug}`}
              className="flex items-center gap-3 group"
            >
              <ArrowLeft
                size={18}
                className="text-gray-400 group-hover:text-white transition-colors"
              />
              <div>
                <p className="font-bricolage text-[14px] text-gray-500">
                  Previous
                </p>
                <p className="font-archivo text-[16px] text-white group-hover:text-red transition-colors">
                  {prevCs.subtitle}
                </p>
              </div>
            </Link>
            <Link
              href={`/case-studies/${nextCs.slug}`}
              className="flex items-center gap-3 group text-right"
            >
              <div>
                <p className="font-bricolage text-[14px] text-gray-500">Next</p>
                <p className="font-archivo text-[16px] text-white group-hover:text-red transition-colors">
                  {nextCs.subtitle}
                </p>
              </div>
              <ArrowRight
                size={18}
                className="text-gray-400 group-hover:text-white transition-colors"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
