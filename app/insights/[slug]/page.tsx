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
          <div className="max-w-[820px] mx-auto flex flex-col gap-12 md:gap-16">
            {insight.sections.map((section, i) => {
              /* Image-only block */
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
                      sizes="(max-width: 1024px) 100vw, 820px"
                    />
                  </div>
                );
              }

              const isIntro = section.heading === "Introduction";
              const isConclusion = section.heading === "Conclusion";

              return (
                <div key={i} className="flex flex-col gap-5">
                  {/* Heading */}
                  {section.heading && (
                    <div className="flex items-start gap-3">
                      {/* Red arrow for Introduction */}
                      {isIntro && (
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
                      )}
                      <h2
                        className={
                          isIntro
                            ? "font-archivo font-medium text-[24px] md:text-[30px] lg:text-[34px] xl:text-[36px] leading-[1.15] text-red capitalize"
                            : "font-archivo font-medium text-[22px] md:text-[26px] lg:text-[28px] xl:text-[30px] leading-[1.15] text-white capitalize"
                        }
                      >
                        {section.heading}
                      </h2>
                    </div>
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

                  {/* CTA Banner — placed before Conclusion */}
                  {isConclusion && (
                    <div className="my-4 corner-border bg-[#0a0a0a] overflow-hidden flex flex-col md:flex-row">
                      <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center gap-4">
                        <h3 className="font-archivo font-medium text-[20px] md:text-[24px] lg:text-[26px] leading-[1.15] text-white capitalize">
                          Lorem Ipsum Dolor Sit Amet Consectetur. Elit Dui
                          Ridiculus.
                        </h3>
                        <p className="font-bricolage text-[14px] md:text-[15px] leading-[1.6] text-white/50">
                          Lorem ipsum dolor sit amet consectetur. Tristique non
                          eu amet scelerisque. Sapien risus posuere nulla risus
                          diam. Vitae sit facilisis ut in.
                        </p>
                        <div>
                          <PrimaryButton as="a" href="/get-in-touch">
                            See Our Impact
                          </PrimaryButton>
                        </div>
                      </div>
                      <div className="relative w-full md:w-[260px] lg:w-[300px] min-h-[200px] md:min-h-0 shrink-0">
                        <Image
                          src="https://picsum.photos/seed/insight-cta/400/400"
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
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
