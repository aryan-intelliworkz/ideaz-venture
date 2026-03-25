"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Plus, Minus } from "lucide-react";

const steps = [
  {
    number: "01",
    tagline:
      "Building the right product starts before writing a single line of code",
    title: "Idea Understanding & Discovery",
    description:
      "We begin by diving deep into the core problem you are solving. By understanding your target users and aligning with your overarching business goals, we establish a solid foundation. This meticulous discovery phase ensures that every technical decision moving forward serves a distinct market need and business objective.",
  },
  {
    number: "02",
    tagline: "Turning abstract ideas into an actionable execution roadmap.",
    title: "Validation & Planning",
    description:
      "We rigorously validate your core assumptions to reduce market risk and define a precise product scope. From there, we prioritize critical features and design a clear, comprehensive roadmap detailing timelines, foundational architecture decisions, and key developmental milestones.",
  },
  {
    number: "03",
    tagline: "Visualizing the product to align expectations early.",
    title: "Conceptualization & Wireframing",
    description:
      "Before heavy engineering begins, we map out comprehensive user flows and structural wireframes. This step establishes the UI direction and allows all stakeholders to visualize the product\u2019s architecture, ensuring complete alignment on the user experience and interface functionality.",
  },
  {
    number: "04",
    tagline: "Proving the concept with a functional, market-ready build.",
    title: "POC / MVP Development",
    description:
      "We develop a working version of your product strictly focused on its core features. This Minimum Viable Product (MVP) or Proof of Concept (POC) is fully tested, highly usable, and explicitly designed for early user onboarding, live demos, and critical investor validation.",
  },
  {
    number: "05",
    tagline: "Expanding the foundation into an enterprise-grade platform.",
    title: "Full-Scale Product Development",
    description:
      "With the core concept validated, we scale the technology. The product is rapidly expanded with robust, scalable architecture, complex third-party integrations, enterprise-grade security measures, and deep performance optimizations to handle increasing user loads seamlessly.",
  },
  {
    number: "06",
    tagline: "Ensuring absolute stability for real-world market usage.",
    title: "Testing, Deployment & Launch",
    description:
      "We subject the product to rigorous Quality Assurance (QA) and staging environment tests. Once cleared, we manage the production deployment and orchestrate the launch readiness protocol, guaranteeing that the product performs flawlessly when it hits the live market.",
  },
  {
    number: "07",
    tagline: "Supporting your evolution from launch to market dominance.",
    title: "Post-Launch Growth & Scaling",
    description:
      "Our partnership does not end at deployment. We provide continuous product improvements, advanced performance optimization, and managed operations. As your user base expands, we also support team scaling, including deploying dedicated developers to accelerate your ongoing feature roadmap.",
  },
];

const faqs = [
  {
    question: "What is the product development process at Ideaz Ventures?",
    answer:
      "Our process is an end-to-end idea execution journey designed to take founders from an initial concept to a scalable reality. It spans comprehensive phases including Idea Discovery & Nurturing, Concept to Proof of Concept (POC), MVP Build, Full Scale Development, GTM Launch Support, and ongoing Post Launch Support.",
  },
  {
    question: "Why is a structured product development process important?",
    answer:
      "A structured process reduces risk, prevents scope creep, and ensures every phase of development is aligned with your business goals. It provides clarity for all stakeholders and maximizes the chances of building a product that the market actually needs.",
  },
  {
    question: "Do you follow agile or waterfall development?",
    answer:
      "We follow an agile-first approach with structured sprint cycles, but adapt our methodology based on project needs. This hybrid approach gives us the flexibility of agile with the predictability that founders and investors need.",
  },
  {
    question: "Can the process be adjusted for early-stage startups?",
    answer:
      "Absolutely. Our process is designed to be modular. Early-stage startups can begin with discovery and validation phases, then progressively move into development as their idea matures and funding becomes available.",
  },
];

export default function HowWeWorkPage() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="max-w-[900px] mx-auto text-center">
            <h1 className="font-archivo font-medium text-[36px] lg:text-[64px] leading-[1.1] text-white capitalize mb-6">
              A Clear Process to Build, Launch, and Scale Products
            </h1>
            <p className="font-bricolage text-[18px] lg:text-[24px] leading-[1.5] text-gray-400 mb-10">
              We follow a structured yet flexible product development process
              that helps founders move from idea to launch with clarity, speed,
              and confidence without unnecessary complexity.
            </p>
            <button className="inline-block px-8 py-4 border border-white/20 font-bricolage text-[16px] text-white hover:bg-white/10 transition-colors">
              Book an Idea Discovery Call
            </button>
          </div>
        </div>
      </section>

      {/* Built for Execution */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="max-w-[900px]">
            <h2 className="font-archivo font-medium text-[32px] lg:text-[54px] leading-[1.1] text-white capitalize mb-8">
              Built for Execution,{"\n"}Not Guesswork.
            </h2>
            <div className="space-y-6">
              <p className="font-bricolage text-[18px] leading-[1.78] text-gray-400">
                Every product we build follows a proven execution framework. It
                keeps teams aligned, reduces risk, and ensures progress at every
                stage while still allowing room to adapt as you learn from users
                and the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start"
              >
                {/* Text content */}
                <div
                  className={`py-12 lg:py-16 ${i % 2 !== 0 ? "lg:order-2" : ""}`}
                >
                  <p className="font-bricolage text-[16px] text-gray-400 mb-4">
                    {step.tagline}
                  </p>
                  <div className="w-full h-px bg-white/10 mb-8" />
                  <h3 className="font-archivo font-medium text-[28px] lg:text-[42px] leading-[1.1] text-white capitalize mb-6">
                    {step.title}
                  </h3>
                  <p className="font-bricolage text-[18px] leading-[1.78] text-gray-400">
                    {step.description}
                  </p>
                </div>
                {/* Image placeholder */}
                <div
                  className={`relative aspect-[4/3] bg-gray-800/50 overflow-hidden ${i % 2 !== 0 ? "lg:order-1" : ""}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-syne font-bold text-[120px] lg:text-[180px] text-white/5">
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <h2 className="font-archivo font-medium text-[32px] lg:text-[54px] leading-[1.1] text-white capitalize mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-[900px]">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/10">
                <button
                  className="w-full flex items-center justify-between py-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span className="font-archivo text-[18px] lg:text-[22px] text-white pr-8">
                    {faq.question}
                  </span>
                  {openFaq === i ? (
                    <Minus size={20} className="text-white shrink-0" />
                  ) : (
                    <Plus size={20} className="text-white shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="pb-6">
                    <p className="font-bricolage text-[18px] leading-[1.78] text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
