import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { servicePages } from "@/lib/services-data";
import PrimaryButton from "@/components/ui/PrimaryButton";
import RevealSection from "@/components/ui/RevealSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhoWeWorkWith from "@/components/shared/WhoWeWorkWith";
import FAQAccordion from "./FAQAccordion";

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
      ? `${service.hero.title} — Ideaz Ventures`
      : "Services — Ideaz Ventures",
    description: service?.hero.subtitle,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative w-full overflow-hidden">
        {/* Red decorative bars at top */}
        <div className="absolute top-0 right-[10%] w-[3px] h-[60px] bg-red/40" />
        <div className="absolute top-0 right-[14%] w-[3px] h-[90px] bg-red/30" />
        <div className="absolute top-0 right-[18%] w-[3px] h-[50px] bg-red/20" />
        <div className="absolute top-0 right-[22%] w-[3px] h-[70px] bg-red/25" />

        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="font-archivo font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] xl:text-[52px] 2xl:text-[56px] leading-[1.08] text-white capitalize mb-5">
              {service.hero.title}
            </h1>
            <p className="font-bricolage text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.5] text-white/60 max-w-[600px] mx-auto mb-8">
              {service.hero.subtitle}
            </p>
            <PrimaryButton as="a" href="/get-in-touch">
              {service.hero.cta}
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* ─── Problem Framing (same layout as "Execution Without Strategy") ─── */}
      <RevealSection className="reveal-fade-up">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              {/* Left: red arrow + heading */}
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

              {/* Right: paragraph(s) */}
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

      {/* ─── What We Do (reused from home) ─── */}
      <ServicesSection />

      {/* ─── Who We Work With (reused from who-we-are) ─── */}
      <WhoWeWorkWith />

      {/* ─── Engagement Models ─── */}
      <RevealSection className="reveal-fade-up">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-archivo font-medium text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[1.1] text-white capitalize mb-3">
                Engagement Models
              </h2>
              <p className="font-bricolage text-[14px] md:text-[15px] lg:text-[16px] text-white/50 max-w-[500px] mx-auto">
                {service.engagementModels.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {service.engagementModels.items.map((model, i) => (
                <div
                  key={i}
                  className="group bg-[#0a0a0a] overflow-hidden transition-colors"
                >
                  <div className="p-4 md:p-5">
                    <div className="relative w-full aspect-[1.5/1] overflow-hidden rounded-[2px]">
                      <Image
                        src={model.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="px-5 pb-5 md:px-6 md:pb-6 flex flex-col gap-3">
                    <h3 className="font-archivo font-medium text-[16px] md:text-[18px] lg:text-[19px] text-white leading-[1.2]">
                      {model.title}
                    </h3>
                    <p className="font-bricolage text-[13px] md:text-[14px] leading-[1.65] text-white/50">
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
              {/* Left: image */}
              <div className="relative w-full aspect-[1.3/1] rounded-[4px] overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/${service.slug}/700/540`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 700px"
                />
              </div>

              {/* Right: content */}
              <div className="flex flex-col gap-5">
                <h3 className="font-archivo font-medium text-[22px] md:text-[26px] lg:text-[28px] xl:text-[30px] leading-[1.15] text-white capitalize">
                  {service.whyChooseUs.heading}
                </h3>
                <p className="font-bricolage text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.75] text-white/60">
                  {service.whyChooseUs.content}
                </p>
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
