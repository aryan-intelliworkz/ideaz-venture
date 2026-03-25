import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { insights } from "@/lib/insights";
import { notFound } from "next/navigation";

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
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-bricolage text-[16px] text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="max-w-[800px]">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block px-3 py-1 bg-red/20 font-bricolage text-[12px] text-red uppercase tracking-wider">
                {insight.category}
              </span>
              <span className="font-bricolage text-[14px] text-gray-500">
                {insight.date}
              </span>
              <span className="font-bricolage text-[14px] text-gray-500">
                {insight.readTime}
              </span>
            </div>
            <h1 className="font-archivo font-medium text-[36px] lg:text-[54px] leading-[1.09] text-white capitalize mb-6">
              {insight.title}
            </h1>
            <p className="font-bricolage text-[18px] lg:text-[24px] leading-[1.25] text-gray-400">
              {insight.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="max-w-[720px] mx-auto">
            <div className="space-y-8">
              {insight.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-bricolage text-[18px] leading-[1.78] text-gray-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Author */}
            <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center">
                <span className="font-archivo font-medium text-[16px] text-white">
                  IV
                </span>
              </div>
              <div>
                <p className="font-archivo font-medium text-[16px] text-white">
                  {insight.author}
                </p>
                <p className="font-bricolage text-[14px] text-gray-500">
                  {insight.date}
                </p>
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
              href={`/insights/${prevInsight.slug}`}
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
                <p className="font-archivo text-[16px] text-white group-hover:text-red transition-colors line-clamp-1 max-w-[250px]">
                  {prevInsight.title}
                </p>
              </div>
            </Link>
            <Link
              href={`/insights/${nextInsight.slug}`}
              className="flex items-center gap-3 group text-right"
            >
              <div>
                <p className="font-bricolage text-[14px] text-gray-500">Next</p>
                <p className="font-archivo text-[16px] text-white group-hover:text-red transition-colors line-clamp-1 max-w-[250px]">
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
