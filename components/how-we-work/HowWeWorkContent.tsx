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
    tagline:
      "Building the right product starts before writing a single line of code",
    title: "Idea Understanding & Discovery",
    description:
      "We begin by diving deep into the core problem you are solving. By understanding your target users and aligning with your overarching business goals, we establish a solid foundation. This meticulous discovery phase ensures that every technical decision moving forward serves a distinct market need and business objective.",
    image: "https://picsum.photos/seed/idea-discovery/900/700?grayscale",
  },
  {
    number: "02",
    tagline: "Turning abstract ideas into an actionable execution roadmap.",
    title: "Validation & Planning",
    description:
      "We rigorously validate your core assumptions to reduce market risk and define a precise product scope. From there, we prioritize critical features and design a clear, comprehensive roadmap detailing timelines, foundational architecture decisions, and key developmental milestones.",
    image: "https://picsum.photos/seed/validation-plan/900/700?grayscale",
  },
  {
    number: "03",
    tagline: "Visualizing the product to align expectations early.",
    title: "Conceptualization & Wireframing",
    description:
      "Before heavy engineering begins, we map out comprehensive user flows and structural wireframes. This step establishes the UI direction and allows all stakeholders to visualize the product\u2019s architecture, ensuring complete alignment on the user experience and interface functionality.",
    image: "https://picsum.photos/seed/wireframing/900/700?grayscale",
  },
  {
    number: "04",
    tagline: "Proving the concept with a functional, market-ready build.",
    title: "POC / MVP Development",
    description:
      "We develop a working version of your product strictly focused on its core features. This Minimum Viable Product (MVP) or Proof of Concept (POC) is fully tested, highly usable, and explicitly designed for early user onboarding, live demos, and critical investor validation.",
    image: "https://picsum.photos/seed/mvp-dev/900/700?grayscale",
  },
  {
    number: "05",
    tagline: "Expanding the foundation into an enterprise-grade platform.",
    title: "Full-Scale Product Development",
    description:
      "With the core concept validated, we scale the technology. The product is rapidly expanded with robust, scalable architecture, complex third-party integrations, enterprise-grade security measures, and deep performance optimizations to handle increasing user loads seamlessly.",
    image: "https://picsum.photos/seed/full-scale/900/700?grayscale",
  },
  {
    number: "06",
    tagline: "Ensuring absolute stability for real-world market usage.",
    title: "Testing, Deployment & Launch",
    description:
      "We subject the product to rigorous Quality Assurance (QA) and staging environment tests. Once cleared, we manage the production deployment and orchestrate the launch readiness protocol, guaranteeing that the product performs flawlessly when it hits the live market.",
    image: "https://picsum.photos/seed/testing-launch/900/700?grayscale",
  },
  {
    number: "07",
    tagline: "Supporting your evolution from launch to market dominance.",
    title: "Post-Launch Growth & Scaling",
    description:
      "Our partnership does not end at deployment. We provide continuous product improvements, advanced performance optimization, and managed operations. As your user base expands, we also support team scaling, including deploying dedicated developers to accelerate your ongoing feature roadmap.",
    image: "https://picsum.photos/seed/post-launch/900/700?grayscale",
  },
];

/* ─── FAQ Data ─── */
const faqs = [
  {
    question: "What Is The Product Development Process At Ideaz Ventures?",
    answer:
      "Our process is an end-to-end idea execution journey designed to take founders from an initial concept to a scalable reality. It spans comprehensive phases including Idea Discovery & Nurturing, Concept to Proof of Concept (POC), MVP Build, Full Scale Development, GTM Launch Support, and ongoing Post Launch Support.",
  },
  {
    question: "Why Is A Structured Product Development Process Important?",
    answer:
      "A structured process reduces risk, prevents scope creep, and ensures every phase of development is aligned with your business goals. It provides clarity for all stakeholders and maximizes the chances of building a product that the market actually needs.",
  },
  {
    question: "Do You Follow Agile Or Waterfall Development?",
    answer:
      "We follow an agile-first approach with structured sprint cycles, but adapt our methodology based on project needs. This hybrid approach gives us the flexibility of agile with the predictability that founders and investors need.",
  },
  {
    question: "Can The Process Be Adjusted For Early-Stage Startups?",
    answer:
      "Absolutely. Our process is designed to be modular. Early-stage startups can begin with discovery and validation phases, then progressively move into development as their idea matures and funding becomes available.",
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
              <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[36px] min-[1800px]:text-[40px] leading-[1.15] text-white">
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
                      <p className="font-bricolage text-[13px] lg:text-[14px] leading-[1.6] text-[#EC1C24] italic mb-4">
                        {step.tagline}
                      </p>
                      <div className="w-full h-px bg-white/[0.08] mb-6" />
                      <h3 className="font-archivo font-medium text-[24px] md:text-[30px] lg:text-[32px] min-[1800px]:text-[36px] leading-[1.1] text-white capitalize mb-5">
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

          <div className="max-w-[900px] mx-auto">
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
                    <span
                      className={cn(
                        "w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300",
                        isOpen
                          ? "border-[#EC1C24] bg-[#EC1C24]/10 rotate-0"
                          : "border-white/20 rotate-0",
                      )}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="transition-transform duration-300"
                      >
                        {/* Horizontal line (always visible) */}
                        <path
                          d="M2 7H12"
                          stroke={isOpen ? "#EC1C24" : "white"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        {/* Vertical line (hidden when open) */}
                        <path
                          d="M7 2V12"
                          stroke={isOpen ? "#EC1C24" : "white"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          className={cn(
                            "transition-all duration-300 origin-center",
                            isOpen
                              ? "opacity-0 scale-0"
                              : "opacity-100 scale-100",
                          )}
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
