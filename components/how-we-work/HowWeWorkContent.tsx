"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import RevealSection from "@/components/ui/RevealSection";

import clarityBeforeCodeImg from "./How we work/Idea Understanding & Discovery.webp";
import validateBeforeBuildingImg from "./How we work/Validation & Planning.webp";
import structureBeforeDevelopmentImg from "./How we work/Concept & Wireframing.webp";
import buildToValidateImg from "./How we work/POC Development.webp";
import fullScaaleDevelopmentImg from "./How we work/Full-Scale Development.webp";
import testingDeploymentImg from "./How we work/Testing, Deployment & Launch.webp";
import growthImg from "./How we work/Post-Launch Growth & Scaling.webp";

/* ─── Process Steps Data ─── */
const steps = [
  {
    number: "01",
    tagline: "Clarity Before Code",
    title: "Idea Understanding & Discovery",
    description:
      "We begin by understanding the problem, users, and business context. This stage focuses on defining real needs and aligning the product direction with business goals, ensuring every decision starts with clarity.",
    image: clarityBeforeCodeImg,
  },
  {
    number: "02",
    tagline: "Validate Before Building",
    title: "Validation & Planning",
    description:
      "We validate key assumptions and define priorities before development begins. This ensures the roadmap is grounded in real insights, reducing risk and enabling structured execution.",
    image: validateBeforeBuildingImg,
  },
  {
    number: "03",
    tagline: "Structure Before Development",
    title: "Concept & Wireframing",
    description:
      "We translate ideas into clear product flows and wireframes. This stage defines how the product will function, ensuring alignment across teams before execution starts.",
    image: structureBeforeDevelopmentImg,
  },
  {
    number: "04",
    tagline: "Build To Validate",
    title: "MVP / POC Development",
    description:
      "We develop a focused MVP or POC to test real-world use cases. This helps validate product direction early while minimizing time, cost, and unnecessary complexity.",
    image: buildToValidateImg,
  },
  {
    number: "05",
    tagline: "Built For Scale",
    title: "Full-Scale Development",
    description:
      "We build a stable, scalable product with clean architecture and performance-driven execution. Every component is designed to support long-term growth and reliability.",
    image: fullScaaleDevelopmentImg,
  },
  {
    number: "06",
    tagline: "Launch With Confidence",
    title: "Testing, Deployment & Launch",
    description:
      "We test thoroughly, refine performance, and deploy with a structured approach. This ensures the product enters the market in a stable and reliable state.",
    image: testingDeploymentImg,
  },
  {
    number: "07",
    tagline: "Scale With Structure",
    title: "Post-Launch Growth & Scaling",
    description:
      "We support growth through continuous improvements, system optimization, and scaling strategies, helping the product evolve without compromising stability or performance.",
    image: growthImg,
  },
];

/* ─── FAQ Data ─── */
const faqs = [
  {
    question: "What is your business consulting process?",
    answer:
      "Our business consulting process follows a structured approach, from discovery and validation to development, launch, and scaling. Each stage is designed to reduce risk, improve clarity, and ensure products are built with real market alignment.",
  },
  {
    question: "How is your business consulting framework different?",
    answer:
      "Our business consulting framework focuses on execution, not just strategy. We combine product thinking, engineering, and operational planning to ensure ideas are not only validated but successfully built and scaled.",
  },
  {
    question: "What is your business consulting methodology for startups?",
    answer:
      "Our business consulting methodology is designed for startups, helping founders move from idea to execution with a clear structure. It connects validation, product development, and scaling into one continuous process.",
  },
  {
    question: "Do you help validate startup ideas before development?",
    answer:
      "Yes, we focus heavily on idea validation. We analyze user needs, business goals, and market fit to ensure the product is built on a strong foundation before development begins.",
  },
  {
    question: "What happens after the product is launched?",
    answer:
      "After launch, we focus on optimization, scaling systems, and improving performance. Our approach ensures the product continues to evolve based on real user feedback and business growth needs.",
  },
  {
    question: "Is this process suitable for early-stage startups?",
    answer:
      "Yes, our process is built specifically for early-stage startups. It helps founders reduce uncertainty, make better decisions, and build products that are structured for long-term growth.",
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
                Every product we build follows a defined business consulting
                framework, ensuring decisions are structured, execution is
                aligned, and progress is measurable at every stage.
              </p>
              <p className="font-bricolage text-[15px] lg:text-[16px] leading-[1.7] text-white/60">
                Our business consulting process removes ambiguity by connecting
                strategy, product, and execution, so teams move forward with
                clarity instead of assumptions.
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
