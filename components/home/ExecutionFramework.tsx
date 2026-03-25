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

export default function ExecutionFramework() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background image from Figma */}
      <div className="absolute inset-0">
        <Image
          src="/assets/sections/execution-bg.png"
          alt=""
          fill
          className="object-cover opacity-20"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-bg-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary" />
      </div>

      <div className="relative mx-auto max-w-[1920px] px-8 lg:px-[160px]">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-archivo font-medium text-[32px] lg:text-[40px] leading-[1.2] text-white capitalize">
            The Ideaz Execution Framework™
          </h2>
          <p className="mt-4 font-bricolage text-[18px] leading-[1.44] text-gray-400 max-w-[700px] mx-auto">
            A structured approach designed to reduce startup risk and accelerate
            product growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-bg-card border border-white/10 p-8 lg:p-10 group hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col gap-4">
                <h3 className="font-archivo font-medium text-[32px] lg:text-[40px] leading-[1.09] text-white capitalize">
                  {step.title}
                </h3>
                <p className="font-bricolage text-[24px] leading-[1.5] text-gray-100">
                  {step.description}
                </p>
              </div>
              {/* Large step number */}
              <span className="absolute bottom-4 right-6 font-archivo font-medium text-[80px] lg:text-[120px] leading-none text-red/20 select-none pointer-events-none -tracking-wider">
                {step.number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
