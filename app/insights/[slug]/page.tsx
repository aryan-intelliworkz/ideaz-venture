import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { insights } from "@/lib/insights";
import { notFound } from "next/navigation";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  return {
    title: insight
      ? `${insight.title} — Ideaz Ventures`
      : "Insight — Ideaz Ventures",
    description: insight?.excerpt,
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) notFound();

  const currentIndex = insights.findIndex((i) => i.slug === slug);
  const nextInsight = insights[(currentIndex + 1) % insights.length];
  const prevInsight =
    insights[(currentIndex - 1 + insights.length) % insights.length];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative w-full min-h-[400px] md:min-h-[480px] lg:min-h-[540px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/whoWeAreBg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-bg-primary" />

        <div className="relative z-10 mx-auto max-w-[1920px] w-full px-6 md:px-8 lg:px-[160px] py-16 md:py-20 lg:py-24 flex flex-col items-center text-center">
          {/* Meta */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-5">
            <span className="inline-block px-3 py-1 bg-red/20 font-bricolage text-[11px] md:text-[12px] text-red uppercase tracking-wider">
              {insight.category}
            </span>
            <span className="font-bricolage text-[12px] md:text-[13px] text-white/60">
              {insight.date}
            </span>
            <span className="font-bricolage text-[12px] md:text-[13px] text-white/60">
              {insight.readTime}
            </span>
          </div>

          <h1 className="font-archivo font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[46px] xl:text-[52px] 2xl:text-[56px] leading-[1.1] text-white capitalize mb-5 max-w-[900px]">
            {insight.title}
          </h1>

          <p className="font-bricolage text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.5] text-white/70 max-w-[720px] mb-8">
            {insight.excerpt}
          </p>

          <PrimaryButton as="a" href="#content">
            See Our Impact
          </PrimaryButton>
        </div>
      </section>

      {/* ─── Sections ─── */}
      <article id="content" className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <div className="flex flex-col gap-12 md:gap-16">
            {insight.sections.map((section, i) => {
              /* Image-only block — full width */
              if (section.image) {
                return (
                  <div
                    key={i}
                    className="relative w-full aspect-[2/1] rounded-[4px] overflow-hidden"
                  >
                    <Image
                      src={section.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 1200px"
                    />
                  </div>
                );
              }

              const isIntro = section.heading === "Introduction";
              const isConclusion = section.heading === "Conclusion";

              /* Introduction — StatsSection-style layout */
              if (isIntro) {
                return (
                  <div
                    key={i}
                    className="flex flex-col lg:flex-row gap-8 lg:gap-6 xl:gap-[32px]"
                  >
                    {/* Left: Arrow + Heading */}
                    <div className="flex items-start gap-4 shrink-0">
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
                      <h2 className="font-archivo font-medium text-[24px] md:text-[30px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] leading-[1.2] text-white capitalize max-w-[510px]">
                        {section.heading}
                      </h2>
                    </div>

                    {/* Right: Paragraphs */}
                    <div className="flex flex-col gap-[14px] flex-1">
                      {section.paragraphs.map((p, j) => (
                        <p
                          key={j}
                          className="font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.44] text-gray-400"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <div key={i}>
                  {/* CTA Banner — placed before Conclusion */}
                  {isConclusion && (
                    <div className="relative w-full overflow-hidden rounded-[4px] mb-12 md:mb-16">
                      <Image
                        src="/assets/insightDetailBg.png"
                        alt=""
                        fill
                        className="object-cover grayscale"
                      />
                      <div className="absolute inset-0 bg-black/60" />
                      <div className="relative z-10 flex flex-col items-start text-left px-6 md:px-12 lg:px-20 py-14 md:py-20 lg:py-24 gap-5">
                        <h3 className="font-archivo font-medium text-[22px] md:text-[28px] lg:text-[32px] xl:text-[36px] leading-[1.15] text-white capitalize max-w-[700px]">
                          Lorem Ipsum Dolor Sit Amet Consectetur. Elit Dui
                          Ridiculus.
                        </h3>
                        <p className="font-bricolage text-[14px] md:text-[15px] lg:text-[16px] leading-[1.6] text-white/60 max-w-[560px]">
                          Lorem ipsum dolor sit amet consectetur. Tristique non
                          eu amet scelerisque. Sapien risus posuere nulla risus
                          diam. Vitae sit facilisis ut in.
                        </p>
                        <PrimaryButton as="a" href="/case-studies">
                          See Our Impact
                        </PrimaryButton>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-5 max-w-[820px] mx-auto w-full">
                    {/* Heading */}
                    {section.heading && (
                      <h2 className="font-archivo font-medium text-[22px] md:text-[26px] lg:text-[28px] xl:text-[30px] leading-[1.15] text-white capitalize">
                        {section.heading}
                      </h2>
                    )}

                    {/* Paragraphs */}
                    {section.paragraphs.map((p, j) => (
                      <p
                        key={j}
                        className="font-bricolage text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px] leading-[1.75] text-white/60"
                      >
                        {p}
                      </p>
                    ))}

                    {/* Bullet list */}
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="flex flex-col gap-3 pl-1">
                        {section.bullets.map((bullet, k) => (
                          <li key={k} className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red shrink-0" />
                            <span className="font-bricolage text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px] leading-[1.65] text-white/60">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </article>

      {/* ─── Navigation ─── */}
      <section className="py-8 md:py-12 border-t border-white/10">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <div className="flex items-center justify-between">
            <Link
              href={`/insights/${prevInsight.slug}`}
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
                  {prevInsight.title}
                </p>
              </div>
            </Link>
            <Link
              href={`/insights/${nextInsight.slug}`}
              className="flex items-center gap-3 group text-right"
            >
              <div>
                <p className="font-bricolage text-[12px] md:text-[13px] text-gray-500">
                  Next
                </p>
                <p className="font-archivo text-[14px] md:text-[15px] lg:text-[16px] text-white group-hover:text-red transition-colors line-clamp-1 max-w-[250px]">
                  {nextInsight.title}
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
