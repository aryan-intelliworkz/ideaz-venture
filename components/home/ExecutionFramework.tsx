import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Validate",
    description: "Clarify your idea. Derisk your roadmap.",
  },
  {
    number: "02",
    title: "Architect",
    description: "Design scalable systems from day one.",
  },
  {
    number: "03",
    title: "Build",
    description: "Ship secure, performance-driven products.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Enter the market with structure and precision.",
  },
  {
    number: "05",
    title: "Fund",
    description: "Prepare for capital with investor-ready systems.",
  },
  {
    number: "06",
    title: "Operate",
    description: "Scale with operational stability and growth.",
  },
];

function StepCard({ step }: { step: (typeof steps)[number] }) {
  return (
    <div className="relative h-[200px] md:h-[240px] lg:h-[280px] bg-[rgba(17,17,17,0.2)] border border-gray-600 -ml-px -mt-px overflow-hidden">
      {/* Large number — top right */}
      <span
        className="absolute top-3 lg:top-[18px] right-4 lg:right-[calc(100%-247px-135px)] font-archivo font-medium text-[60px] md:text-[80px] lg:text-[120px] leading-[1.09] text-red select-none pointer-events-none"
        style={{
          WebkitTextStroke: "1px #666",
          WebkitTextFillColor: "transparent",
        }}
      >
        {step.number}
      </span>

      {/* Content — bottom left */}
      <div className="absolute bottom-6 md:bottom-8 lg:bottom-[24px] left-5 md:left-6 lg:left-[24px] flex flex-col gap-3 max-w-[85%] lg:max-w-[341px]">
        <h3 className="font-archivo font-medium text-[24px] md:text-[32px] lg:text-[40px] leading-[1.09] text-white capitalize">
          {step.title}
        </h3>
        <p className="font-bricolage font-normal text-[16px] md:text-[20px] lg:text-[24px] leading-[1.5] text-gray-100">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function ExecutionFramework() {
  return (
    <section className="relative h-auto lg:h-[750px] overflow-hidden">
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
        <div className="flex flex-col gap-3 mb-8 lg:mb-0">
          <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[40px] leading-[1.2] text-white capitalize">
            The Ideaz Execution Framework™
          </h2>
          <p className="font-bricolage font-normal text-[16px] md:text-[18px] leading-[1.44] text-gray-400">
            A structured approach designed to reduce startup risk and accelerate
            product growth.
          </p>
        </div>

        {/* Grid: positioned at y:191 in Figma = ~156px from heading top */}
        <div className="lg:mt-[40px]">
          {/* Row 1: 2 cards — same width as row 2 cards, above blocks 3 & 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {steps.slice(0, 2).map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>

          {/* Row 2: 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {steps.slice(2).map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
