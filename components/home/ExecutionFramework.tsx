"use client";

import Image from "next/image";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Validate",
    description: "Validate real market demand. No early assumptions.",
  },
  {
    number: "02",
    title: "Architect",
    description: "Design scalable product systems. Define core architecture.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop reliable digital products. Ensure usability and performance.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Enter the market with clarity. Execute structured launch.",
  },
  {
    number: "05",
    title: "Fund",
    description:
      "Prepare for investor conversations. Align product and growth.",
  },
  {
    number: "06",
    title: "Operate",
    description: "Scale operations with control. Improve systems seamlessly.",
  },
];

function StepCard({ step }: { step: (typeof steps)[number] }) {
  return (
    <div className="step-card group relative h-[200px] md:h-[240px] lg:h-[220px] xl:h-[250px] 2xl:h-[250px] bg-[rgba(17,17,17,0.2)] border border-gray-600 -ml-px -mt-px overflow-hidden">
      {/* Large number — top right with spinning gradient on edges on hover */}
      <span
        className="step-number absolute top-3 lg:top-4 right-4 lg:right-5 font-archivo font-medium text-[60px] md:text-[80px] lg:text-[80px] xl:text-[100px] 2xl:text-[100px] leading-none select-none pointer-events-none"
        data-text={step.number}
      >
        {step.number}
      </span>

      {/* Content — bottom left */}
      <div className="absolute bottom-6 md:bottom-8 lg:bottom-[24px] left-5 md:left-6 lg:left-[24px] flex flex-col gap-3 max-w-[85%] lg:max-w-[341px]">
        <h3 className="font-archivo font-medium text-[24px] md:text-[32px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] min-[1800px]:text-[40px] leading-[1.09] text-white capitalize">
          {step.title}
        </h3>
        <p className="font-bricolage font-normal text-[16px] md:text-[20px] lg:text-[18px] xl:text-[20px] min-[1800px]:text-[24px] leading-[1.5] text-gray-100">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function ExecutionFramework() {
  const headingRef = useScrollReveal();
  const row1Ref = useStaggerReveal({ threshold: 0.1 });
  const row2Ref = useStaggerReveal({ threshold: 0.1 });

  return (
    <section className="relative h-auto xl:h-[700px] 2xl:h-[700px] overflow-hidden">
      {/* Background image with gradient overlays */}
      <div className="absolute inset-0">
        <Image
          src="/assets/ideazBackground.jpg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        {/* Bottom fade: solid at 14%, transparent at 59% */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(5,5,5,1) 14%, rgba(5,5,5,0) 59%)",
          }}
        />
        {/* Top fade: solid at 24%, transparent at 52% */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,5,5,1) 24%, rgba(5,5,5,0) 52%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px] py-10 lg:py-0 lg:pt-[35px]">
        {/* Section heading */}
        <div
          ref={headingRef}
          className="reveal-fade-up flex flex-col gap-3 mb-8 lg:mb-0"
        >
          <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] min-[1800px]:text-[40px] leading-[1.2] text-white capitalize">
            The Ideaz Execution Framework™
          </h2>
          <p className="font-bricolage font-normal text-[16px] md:text-[18px] leading-[1.44] text-gray-400">
            A structured approach to building scalable products from idea
            validation to long-term execution.
          </p>
        </div>

        {/* Grid: positioned at y:191 in Figma = ~156px from heading top */}
        <div className="lg:mt-[40px]">
          {/* Row 1: 2 cards — same width as row 2 cards, above blocks 3 & 4 */}
          <div
            ref={row1Ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          >
            {steps.slice(0, 2).map((step) => (
              <div key={step.number} className="reveal-child">
                <StepCard step={step} />
              </div>
            ))}
          </div>

          {/* Row 2: 4 cards */}
          <div
            ref={row2Ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          >
            {steps.slice(2).map((step) => (
              <div key={step.number} className="reveal-child">
                <StepCard step={step} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
