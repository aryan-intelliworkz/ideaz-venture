import type { Metadata } from "next";
import Image from "next/image";
import MasterLayout from "@/components/layout/MasterLayout";
import PrimaryButton from "@/components/ui/PrimaryButton";
import RevealSection from "@/components/ui/RevealSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhoWeWorkWith from "@/components/shared/WhoWeWorkWith";

export const metadata: Metadata = {
  title: "Services — Ideaz Ventures",
  description:
    "We help founders validate, structure, and de-risk their startup ideas before execution.",
};

/* ─── Data ─── */

const engagementModels = [
  {
    title: "Fixed-Cost Development",
    description:
      "For well-scoped projects with clear requirements. We set a guaranteed price, well-defined deliverables, and a fixed schedule so there are no surprises throughout the engagement.",
    image: "https://picsum.photos/seed/fixed-cost/600/400",
  },
  {
    title: "Dedicated Teams",
    description:
      "For ongoing product work requiring embedded engineering. You get a fully managed, hand-picked team of developers, designers, and PMs working exclusively on your product.",
    image: "https://picsum.photos/seed/dedicated/600/400",
  },
  {
    title: "Sprint-Based Execution",
    description:
      "For fast-moving startups that need rapid iteration. We work in focused 2-week sprints with clear deliverables, budget transparency, and the flexibility to pivot between cycles.",
    image: "https://picsum.photos/seed/sprint/600/400",
  },
];

/* ─── Page ─── */

export default function ServicesPage() {
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
              Validate, Structure, And De-Risk Your Vision.
            </h1>
            <p className="font-bricolage text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.5] text-white/60 max-w-[600px] mx-auto mb-8">
              We help founders validate, structure, and de-risk their startup
              ideas before execution
            </p>
            <PrimaryButton as="a" href="/get-in-touch">
              Book an Idea Discovery Call
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* ─── Execution Without Strategy ─── */}
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
                  Execution Without Strategy Is A Liability.
                </h2>
              </div>

              {/* Right: paragraph */}
              <p className="lg:col-span-7 font-bricolage text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.75] text-white/60">
                Too many startups rush into development based on assumptions,
                leading to wasted capital and products the market doesn&apos;t
                actually need. We take a different approach. We work closely
                with founders to define a clear roadmap — from concept to launch
                — while minimizing risk and maximizing clarity. By treating the
                idea phase with the same engineering rigor as the build phase,
                we ensure that when you&apos;re ready to write code, you&apos;re
                building a product guaranteed to solve a real market problem.
              </p>
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
            {/* Heading */}
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-archivo font-medium text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[1.1] text-white capitalize mb-3">
                Engagement Models
              </h2>
              <p className="font-bricolage text-[14px] md:text-[15px] lg:text-[16px] text-white/50 max-w-[500px] mx-auto">
                We help you choose the right engagement model for your stage and
                goals.
              </p>
            </div>

            {/* Three cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {engagementModels.map((model, i) => (
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
            {/* Heading */}
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-archivo font-medium text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[1.1] text-white capitalize">
                Why Founders Choose Us
              </h2>
              <p className="mt-3 font-bricolage text-[14px] md:text-[15px] lg:text-[16px] text-white/50 max-w-[600px] mx-auto">
                Lorem ipsum dolor sit amet consectetur. Elementum facilisi
                dignissim dui volutpat.
              </p>
            </div>

            {/* Two-column — image + content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: image */}
              <div className="relative w-full aspect-[1.3/1] rounded-[4px] overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/founders-choose/700/540"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 700px"
                />
              </div>

              {/* Right: content */}
              <div className="flex flex-col gap-5">
                <h3 className="font-archivo font-medium text-[22px] md:text-[26px] lg:text-[28px] xl:text-[30px] leading-[1.15] text-white capitalize">
                  The Ideaz Ventures Standard
                </h3>
                <p className="font-bricolage text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.75] text-white/60">
                  Lorem ipsum dolor sit amet consectetur. There&apos;s a clear
                  divide in the agency world: teams that write code and teams
                  that build companies. At Ideaz Ventures, we operate on the
                  latter. Our philosophy is rooted in product ownership — we
                  don&apos;t just execute briefs, we interrogate them. Every
                  feature, every sprint, every technical decision is measured
                  against its contribution to your commercial goals. We bring
                  the discipline of enterprise engineering to the speed and
                  adaptability of startup execution. That&apos;s the Ideaz
                  Standard.
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
      </RevealSection>
    </>
  );
}
