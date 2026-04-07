"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import RevealSection from "@/components/ui/RevealSection";

/* ─── Process Steps Data ─── */
const steps = [
  {
    number: "01",
    tagline: "Clarifying your vision and business goals",
    title: "Consultation & Discovery",
    description:
      "We start with a deep-dive consultation to understand your business, market, and vision. Together, we clarify your objectives, target audience, and the unique value your product will deliver. This ensures every next step is rooted in your real business needs.",
    image: "/assets/sections/how-we-work/consultation.jpg",
  },
  {
    number: "02",
    tagline: "Validating ideas with real market insights",
    title: "Research & Validation",
    description:
      "We conduct market research, competitor analysis, and user interviews to validate your core assumptions. This phase reduces risk and ensures we’re building something the market actually wants.",
    image: "/assets/sections/how-we-work/research.jpg",
  },
  {
    number: "03",
    tagline: "Turning strategy into a clear execution plan",
    title: "Strategy & Roadmapping",
    description:
      "We define the product strategy, prioritize features, and create a clear roadmap. You’ll know exactly what will be built, when, and why—ensuring alignment across all stakeholders.",
    image: "/assets/sections/how-we-work/roadmap.jpg",
  },
  {
    number: "04",
    tagline: "Designing experiences that delight and convert",
    title: "UX/UI Design & Prototyping",
    description:
      "Our designers craft intuitive user flows, wireframes, and high-fidelity prototypes. You’ll see and test the product experience before a single line of code is written.",
    image: "/assets/sections/how-we-work/design.jpg",
  },
  {
    number: "05",
    tagline: "Building robust, scalable digital products",
    title: "Agile Development",
    description:
      "Our engineering team brings your product to life using agile sprints. We focus on rapid, transparent development with regular demos and feedback loops—so you’re always in control.",
    image: "/assets/sections/how-we-work/development.jpg",
  },
  {
    number: "06",
    tagline: "Ensuring quality, security, and launch-readiness",
    title: "Testing & Launch",
    description:
      "We rigorously test your product for quality, security, and performance. Once ready, we manage the deployment and support your go-to-market launch for maximum impact.",
    image: "/assets/sections/how-we-work/launch.jpg",
  },
  {
    number: "07",
    tagline: "Supporting growth and continuous improvement",
    title: "Post-Launch Partnership",
    description:
      "After launch, we remain your strategic partner—monitoring performance, iterating on features, and supporting your growth with ongoing enhancements and team scaling as needed.",
    image: "/assets/sections/how-we-work/growth.jpg",
  },
];

/* ─── FAQ Data ─── */
const faqs = [
  {
    question:
      "How long does the consulting and product development process take?",
    answer:
      "Timelines vary based on project scope and complexity. A typical end-to-end engagement (from discovery to launch) ranges from 3 to 9 months. We provide a detailed roadmap and timeline after the initial consultation phase.",
  },
  {
    question: "Can you help if I only have an idea and no technical team?",
    answer:
      "Absolutely. We specialize in working with founders at all stages, including those with just an idea. Our team handles everything from strategy and design to development and launch, acting as your product and technical partner.",
  },
  {
    question: "What if I already have an MVP or existing product?",
    answer:
      "We can step in at any stage—whether you need a product audit, help with scaling, or a full redesign and rebuild. Our process is modular and adapts to your current needs.",
  },
  {
    question: "How do you ensure my product will succeed in the market?",
    answer:
      "We combine deep market research, user validation, and agile execution. Our process is designed to minimize risk, maximize market fit, and ensure you’re building something users actually want.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer ongoing partnership options for growth, support, and team scaling. Whether you need continuous feature development, performance optimization, or help hiring and managing your own team, we’re here to help.",
  },
];

export default function HowWeWorkContent() {
  const [openFaq, setOpenFaq] = useState<number>(0);
  const introLeftRef = useScrollReveal();
  const introRightRef = useScrollReveal();

  return (
    <>
      {/* ── Built for Execution ── */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
            {/* Left — arrow + heading */}
            <div
              ref={introLeftRef}
              className="reveal-slide-left flex items-start gap-4 lg:w-[45%] shrink-0"
            >
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
              <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] min-[1800px]:text-[40px] leading-[1.15] text-white">
                Built For Execution,
                <br />
                Not Guesswork.
              </h2>
            </div>

            {/* Right — description */}
            <div ref={introRightRef} className="reveal-slide-right lg:w-[55%]">
              <p className="font-bricolage text-[15px] lg:text-[16px] leading-[1.7] text-white/60 mb-4">
                Every product we build follows a proven execution framework. It
                keeps teams aligned, reduces risk, and ensures progress at every
                stage — while still allowing room to adapt as you learn from
                users and the market.
              </p>
              <p className="font-bricolage text-[15px] lg:text-[16px] leading-[1.7] text-white/60">
                From validation to launch and beyond, we take ownership of
                building, shipping, and scaling digital products that are
                designed to succeed in real markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process Steps (Alternating Cards) ── */}
      <section className="py-8 md:py-10 lg:py-16">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <RevealSection
                  key={step.number}
                  className={
                    isEven ? "reveal-slide-left" : "reveal-slide-right"
                  }
                  threshold={0.1}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-stretch">
                    {/* Text content */}
                    <div
                      className={cn(
                        "flex flex-col justify-center py-6 md:py-8 lg:py-14",
                        !isEven && "lg:order-2",
                      )}
                    >
                      <p className="font-bricolage text-[12px] md:text-[13px] text-[#888888] tracking-wider mb-4">
                        <span className="border-b border-[#EC1C24] pb-1">
                          {step.tagline}
                        </span>
                      </p>
                      <h3 className="font-archivo font-medium text-[24px] md:text-[30px] lg:text-[28px] xl:text-[32px] 2xl:text-[34px] min-[1800px]:text-[36px] leading-[1.1] text-white capitalize mb-5">
                        {step.title}
                      </h3>
                      <p className="font-bricolage text-[15px] lg:text-[16px] leading-[1.75] text-white/50">
                        {step.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div
                      className={cn(
                        "relative aspect-[16/10] overflow-hidden rounded-[4px]",
                        !isEven && "lg:order-1",
                      )}
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        unoptimized
                      />
                    </div>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[42px] min-[1800px]:text-[48px] leading-[1.1] text-white capitalize mb-8 md:mb-10 lg:mb-14 text-center">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={cn(
                    "border-b border-white/[0.08] transition-colors duration-300",
                    isOpen && "border-white/[0.15]",
                  )}
                >
                  <button
                    className="w-full flex items-center justify-between py-5 lg:py-6 text-left gap-4 cursor-pointer group"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  >
                    <span
                      className={cn(
                        "font-archivo text-[16px] md:text-[18px] lg:text-[20px] leading-[1.3] transition-colors duration-300",
                        isOpen
                          ? "text-white"
                          : "text-white/70 group-hover:text-white",
                      )}
                    >
                      {faq.question}
                    </span>

                    {/* Plus / Minus icon */}
                    <span className="flex items-center justify-center w-8 h-8 shrink-0">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        className="transition-transform duration-300"
                        aria-hidden="true"
                      >
                        {/* Horizontal line (always visible) */}
                        <rect
                          x="3"
                          y="8.25"
                          width="12"
                          height="1.5"
                          rx="0.75"
                          fill="white"
                        />
                        {/* Vertical line (hidden when open) */}
                        <rect
                          x="8.25"
                          y="3"
                          width="1.5"
                          height="12"
                          rx="0.75"
                          fill="white"
                          style={{
                            opacity: isOpen ? 0 : 1,
                            transform: isOpen ? "scale(0)" : "scale(1)",
                            transition: "all 0.3s",
                            transformOrigin: "center",
                          }}
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Answer with animated expand */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
                      isOpen
                        ? "max-h-[400px] opacity-100 pb-6"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    <p className="font-bricolage text-[15px] lg:text-[16px] leading-[1.75] text-white/50 pr-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
