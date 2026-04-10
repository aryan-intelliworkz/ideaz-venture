import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicePages } from "@/lib/services-data";
import PrimaryButton from "@/components/ui/PrimaryButton";
import RevealSection from "@/components/ui/RevealSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import CoreCapabilitiesSection from "@/components/home/CoreCapabilitiesSection";
// import WhoWeWorkWith from "@/components/shared/WhoWeWorkWith";
import FAQAccordion from "./FAQAccordion";
import MasterLayout from "@/components/layout/MasterLayout";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);
  return {
    title: service
      ? `${service.title} — Ideaz Ventures`
      : "Services — Ideaz Ventures",
    description: service?.tagline,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      {/* ─── Hero ─── */}
      <MasterLayout
        backgroundImage="/assets/whoWeAreBg.png"
        heading={service.title}
        description={service.tagline}
        ctaText={service.hero.cta}
      />

      {/* ─── Problem Framing ─── */}
      <RevealSection className="reveal-fade-up">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              <div className="lg:col-span-5 flex items-start gap-3">
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
                <h2 className="font-archivo font-medium text-[24px] md:text-[30px] lg:text-[34px] xl:text-[38px] leading-[1.1] text-white capitalize">
                  {service.problemFraming.heading}
                </h2>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-4">
                {service.problemFraming.paragraphs.map((p, i) => (
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
      </RevealSection>

      {/* ─── What We Do ─── */}
      <WhatWeDoSection
        subtitle={service.whatWeDo.subtitle}
        items={service.whatWeDo.items}
      />

      {/* ─── Core Capabilities ─── */}
      {/*
        Images add karne ke liye:
        1. Import per-slug images at the top of this file
        2. Create a map like:
              const capabilityImages: Record<string, string[]> = {
                "startup-consulting": [img1, img2, img3, img4, img5],
                "product-development": [...],
                ...
              };
        3. Pass as: images={capabilityImages[service.slug] ?? []}

        Jab tak images ready nahi hain, component automatically
        numbered placeholder dikhayega.
      */}
      <CoreCapabilitiesSection
        subtitle={service.coreCapabilities.subtitle}
        items={service.coreCapabilities.items}
      />

      {/* ─── Who We Work With ─── */}
      {/* <WhoWeWorkWith /> */}

      {/* ─── Engagement Models ─── */}
      <RevealSection className="reveal-fade-up">
        <section className="py-12 md:py-16 lg:py-24">
          <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
            <div className="text-center mb-8 md:mb-10 lg:mb-14">
              <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] min-[1800px]:text-[40px] leading-[1.2] text-white capitalize">
                Engagement Models
              </h2>
              <p className="mt-3 font-bricolage text-[16px] lg:text-[16px] xl:text-[18px] leading-[1.44] text-gray-400 max-w-[700px] mx-auto">
                {service.engagementModels.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.engagementModels.items.map((model, i) => (
                <div
                  key={i}
                  className="reveal-child corner-border overflow-hidden group transition-colors"
                >
                  <div className="relative h-[220px] lg:h-[260px] overflow-hidden">
                    <Image
                      src={model.image}
                      alt={model.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="font-archivo font-medium text-[20px] lg:text-[22px] min-[1800px]:text-[24px] leading-[1.2] text-white mb-3">
                      {model.title}
                    </h3>
                    <p className="font-bricolage text-[14px] lg:text-[16px] leading-[1.6] text-white/60">
                      {model.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ─── Why Founders Choose Us ─── */}
      <RevealSection className="reveal-fade-up">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-archivo font-medium text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[1.1] text-white capitalize">
                Why Founders Choose Us
              </h2>
              <p className="mt-3 font-bricolage text-[14px] md:text-[15px] lg:text-[16px] text-white/50 max-w-[600px] mx-auto">
                {service.whyChooseUs.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative w-full aspect-[1.3/1] rounded-[4px] overflow-hidden">
                <Image
                  src={service.whyChooseUs.image}
                  alt={service.whyChooseUs.heading}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 700px"
                  priority
                />
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="font-archivo font-medium text-[22px] md:text-[26px] lg:text-[28px] xl:text-[30px] leading-[1.15] text-white capitalize">
                  {service.whyChooseUs.heading}
                </h3>
                <p className="font-bricolage text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.75] text-white/60">
                  {service.whyChooseUs.content}
                </p>

                {/* Pointers */}
                <ul className="flex flex-col gap-3">
                  {service.whyChooseUs.pointers.map((pointer, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#EC1C24] shrink-0" />
                      <span className="font-bricolage text-[14px] md:text-[15px] lg:text-[16px] leading-[1.6] text-white/60">
                        {pointer}
                      </span>
                    </li>
                  ))}
                </ul>

                <div>
                  <PrimaryButton as="a" href="/get-in-touch">
                    Book Strategy Call
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ─── CTA Banner ─── */}
      <RevealSection className="reveal-fade-up">
        <section className="py-8 md:py-12 lg:py-16">
          <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
            <div className="bg-[#0a0a0a] overflow-hidden flex flex-col md:flex-row">
              <div className="flex-1 p-8 md:p-10 lg:p-14 flex flex-col justify-center gap-5">
                <h3 className="font-archivo font-medium text-[26px] md:text-[30px] lg:text-[36px] xl:text-[40px] leading-[1.1] text-white capitalize">
                  {service.finalCta.heading}
                </h3>
                <p className="font-bricolage text-[14px] md:text-[15px] lg:text-[16px] leading-[1.6] text-white/50 max-w-[480px]">
                  {service.finalCta.subtitle}
                </p>
                <div>
                  <PrimaryButton as="a" href="/get-in-touch">
                    {service.finalCta.cta}
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
      </RevealSection>

      {/* ─── FAQ ─── */}
      <RevealSection className="reveal-fade-up">
        <section className="py-12 md:py-16 lg:py-24">
          <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
            <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[42px] min-[1800px]:text-[48px] leading-[1.1] text-white capitalize mb-8 md:mb-10 lg:mb-14 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={service.faqs} />
          </div>
        </section>
      </RevealSection>
    </>
  );
}
