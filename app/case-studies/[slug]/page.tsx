import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { notFound } from "next/navigation";
import PrimaryButton from "@/components/ui/PrimaryButton";

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

      {/* ─── The Vision (two-column) ─── */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-12 items-start">
            {/* Left: red arrow + heading */}
            <div className="flex items-start gap-3">
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="none"
                className="mt-2 shrink-0"
              >
                <path
                  d="M0 10H36M36 10L28 2M36 10L28 18"
                  stroke="#EC1C24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="font-archivo font-medium text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] leading-[1.1] text-white whitespace-nowrap">
                {cs.vision.heading}
              </h2>
            </div>

            {/* Right: paragraphs */}
            <div className="flex flex-col gap-4">
              {cs.vision.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-bricolage text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.75] text-white/60"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="py-6 md:py-8 border-y border-white/10">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
            {cs.stats.map((stat) => (
              <div key={stat.label}>
                <span className="font-archivo font-medium text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] text-white">
                  {stat.value}
                </span>
                <p className="font-bricolage text-[12px] md:text-[13px] lg:text-[14px] text-white/40 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Image after Vision ─── */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <div className="relative w-full aspect-[2.4/1] rounded-[4px] overflow-hidden">
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
          <div className="max-w-[900px]">
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
        </div>
      </section>

      {/* ─── Our Role ─── */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <div className="max-w-[900px]">
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
        </div>
      </section>

      {/* ─── Image after Role ─── */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <div className="relative w-full aspect-[2.4/1] rounded-[4px] overflow-hidden">
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
      <section className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-archivo font-medium text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[1.1] text-white capitalize mb-3">
              {cs.executionStrategy.heading}
            </h2>
            <p className="font-bricolage text-[14px] md:text-[15px] lg:text-[16px] text-white/50">
              {cs.executionStrategy.subtitle}
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {cs.executionStrategy.steps.map((step, i) => (
              <div
                key={i}
                className="group border border-white/[0.08] rounded-[4px] bg-[#0a0a0a] p-6 md:p-7 lg:p-8 flex flex-col gap-4 hover:border-red/30 transition-colors"
              >
                {/* Step icon placeholder */}
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                  <span className="font-archivo text-[14px] text-red font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-archivo font-medium text-[16px] md:text-[18px] lg:text-[19px] text-white leading-[1.2]">
                  {step.title}
                </h3>

                <p className="font-bricolage text-[13px] md:text-[14px] lg:text-[14px] leading-[1.65] text-white/50">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <div className="border border-white/[0.08] rounded-[4px] bg-[#0a0a0a] overflow-hidden flex flex-col md:flex-row">
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
