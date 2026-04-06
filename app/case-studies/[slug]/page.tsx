import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { notFound } from "next/navigation";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ExecutionStrategy from "@/components/case-studies/ExecutionStrategy";

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
      {/* ─── Hero ─── */}
      <section className="relative w-full min-h-[380px] md:min-h-[440px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/whoWeAreBg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-bg-primary" />

        {/* Decorative red graphic – top-right */}
        <div className="absolute top-0 right-0 w-[200px] md:w-[300px] lg:w-[380px] h-full pointer-events-none opacity-30">
          <Image
            src={cs.heroImage}
            alt=""
            fill
            className="object-contain object-right-top"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1920px] w-full px-6 md:px-8 lg:px-[160px] py-16 md:py-20 lg:py-24 flex flex-col items-center text-center">
          <h1 className="font-archivo font-medium text-[32px] sm:text-[40px] md:text-[50px] lg:text-[56px] xl:text-[60px] 2xl:text-[64px] leading-[1.08] text-white capitalize mb-4">
            {cs.title}
          </h1>

          <p className="font-bricolage text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.5] text-white/60 max-w-[640px] mb-8">
            {cs.tagline}
          </p>

          <PrimaryButton as="a" href="/get-in-touch">
            Get In Touch
          </PrimaryButton>
        </div>
      </section>

      {/* ─── The Vision + Stats (like home stats section) ─── */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <div className="flex flex-col gap-10 lg:gap-12 xl:gap-[60px]">
            {/* Top row: Arrow + Title | Paragraphs */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 xl:gap-[32px]">
              {/* Left: Arrow + Title */}
              <div className="flex items-start gap-4 shrink-0">
                <svg
                  width="69"
                  height="63"
                  viewBox="0 0 69 63"
                  fill="none"
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
                  {cs.vision.heading}
                </h2>
              </div>

              {/* Right: Paragraphs */}
              <div className="flex flex-col gap-[14px] flex-1">
                {cs.vision.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.44] text-gray-400"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
              {cs.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-6 ${i > 0 ? "border-gray-400 pl-6 lg:pl-8" : ""}`}
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

      {/* ─── Image after Vision ─── */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <div className="relative w-full aspect-[2.2/1] rounded-[4px] overflow-hidden">
            <Image
              src={cs.images.afterVision}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 1400px"
            />
          </div>
        </div>
      </section>

      {/* ─── The Challenge ─── */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <h2 className="font-archivo font-medium text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px] leading-[1.1] text-white capitalize mb-6">
            {cs.challenge.heading}
          </h2>
          {cs.challenge.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-bricolage text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.75] text-white/60 mb-4"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ─── Our Role ─── */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <h2 className="font-archivo font-medium text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px] leading-[1.1] text-white capitalize mb-6">
            {cs.role.heading}
          </h2>
          {cs.role.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-bricolage text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.75] text-white/60 mb-4"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ─── Image after Role ─── */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <div className="relative w-full aspect-[2.2/1] rounded-[4px] overflow-hidden">
            <Image
              src={cs.images.afterRole}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 1400px"
            />
          </div>
        </div>
      </section>

      {/* ─── Execution Strategy ─── */}
      <ExecutionStrategy
        heading={cs.executionStrategy.heading}
        subtitle={cs.executionStrategy.subtitle}
        steps={cs.executionStrategy.steps}
      />

      {/* ─── CTA Banner ─── */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <div className="bg-[#0a0a0a] overflow-hidden flex flex-col md:flex-row">
            <div className="flex-1 p-8 md:p-10 lg:p-14 flex flex-col justify-center gap-5">
              <h3 className="font-archivo font-medium text-[26px] md:text-[30px] lg:text-[36px] xl:text-[40px] leading-[1.1] text-white capitalize">
                Open the next chapter of your business.
              </h3>
              <p className="font-bricolage text-[14px] md:text-[15px] lg:text-[16px] leading-[1.6] text-white/50 max-w-[480px]">
                Tell us what you&apos;re building, solving, or scaling — and
                we&apos;ll connect you with exactly the right team at Ideaz
                within one business day.
              </p>
              <div>
                <PrimaryButton as="a" href="/get-in-touch">
                  Start the Conversation
                </PrimaryButton>
              </div>
            </div>
            <div className="relative w-full md:w-[300px] lg:w-[380px] min-h-[220px] md:min-h-0 shrink-0">
              <Image
                src="/assets/sections/footer-image.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Navigation ─── */}
      <section className="py-8 md:py-12 border-t border-white/10">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
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
                <p className="font-bricolage text-[12px] md:text-[13px] text-gray-500">
                  Previous
                </p>
                <p className="font-archivo text-[14px] md:text-[15px] lg:text-[16px] text-white group-hover:text-red transition-colors line-clamp-1 max-w-[250px]">
                  {prevCs.title}
                </p>
              </div>
            </Link>
            <Link
              href={`/case-studies/${nextCs.slug}`}
              className="flex items-center gap-3 group text-right"
            >
              <div>
                <p className="font-bricolage text-[12px] md:text-[13px] text-gray-500">
                  Next
                </p>
                <p className="font-archivo text-[14px] md:text-[15px] lg:text-[16px] text-white group-hover:text-red transition-colors line-clamp-1 max-w-[250px]">
                  {nextCs.title}
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
