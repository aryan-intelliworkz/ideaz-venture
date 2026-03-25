import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategy & Validation — Ideaz Ventures",
  description:
    "We help founders validate, structure, and de-risk their startup ideas before execution.",
};

export default function StrategyValidationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="max-w-[900px] mx-auto text-center">
            <h1 className="font-archivo font-medium text-[36px] lg:text-[64px] leading-[1.1] text-white capitalize mb-6">
              Validate, Structure, and De-Risk Your Vision.
            </h1>
            <p className="font-bricolage text-[18px] lg:text-[24px] leading-[1.5] text-gray-400 mb-10">
              We help founders validate, structure, and de-risk their startup
              ideas before execution
            </p>
            <button className="inline-block px-8 py-4 border border-white/20 font-bricolage text-[16px] text-white hover:bg-white/10 transition-colors">
              Book an Idea Discovery Call
            </button>
          </div>
        </div>
      </section>

      {/* Execution Without Strategy */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="max-w-[900px]">
            <h2 className="font-archivo font-medium text-[32px] lg:text-[54px] leading-[1.1] text-white capitalize mb-8">
              Execution Without Strategy is a Liability.
            </h2>
            <p className="font-bricolage text-[18px] leading-[1.78] text-gray-400">
              Too many startups rush into development based on assumptions,
              leading to wasted capital and products that the market
              doesn&apos;t actually need. We take a different approach. We work
              closely with founders to define a clear roadmap from concept to
              launch while minimizing risk and maximizing clarity. By treating
              the idea phase with the same engineering rigor as the build phase,
              we ensure that when you are ready to write code, you are building
              a product guaranteed to solve a real market problem.
            </p>
          </div>
        </div>
      </section>

      {/* Validation Framework */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <h2 className="font-archivo font-medium text-[32px] lg:text-[54px] leading-[1.1] text-white capitalize mb-12">
            Our Validation Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Problem Validation",
                description:
                  "We analyze whether the problem you are solving is real, urgent, and large enough to build a business around. This involves market research, user interviews, and competitive analysis.",
              },
              {
                number: "02",
                title: "Solution Framing",
                description:
                  "We structure your proposed solution into a clear product thesis, defining what you build, who it serves, and how it differs from existing alternatives in the market.",
              },
              {
                number: "03",
                title: "Market Sizing & Positioning",
                description:
                  "We quantify the opportunity using TAM, SAM, and SOM analysis, and position your product within the competitive landscape to identify your unique market entry point.",
              },
              {
                number: "04",
                title: "Business Model Design",
                description:
                  "We help you define sustainable revenue models, pricing strategies, and unit economics that make your startup investable and scalable from day one.",
              },
              {
                number: "05",
                title: "Technical Feasibility",
                description:
                  "We assess the technical requirements, identify potential risks, and recommend the optimal technology stack and architecture for your specific use case.",
              },
              {
                number: "06",
                title: "Roadmap & Execution Plan",
                description:
                  "We deliver a comprehensive execution roadmap with timelines, milestones, resource requirements, and a phased development plan ready for immediate action.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="p-8 border border-white/10 hover:border-white/20 transition-colors group"
              >
                <span className="font-syne font-bold text-[48px] gradient-brand-text opacity-50 group-hover:opacity-100 transition-opacity">
                  {step.number}
                </span>
                <h3 className="font-archivo font-medium text-[24px] text-white capitalize mt-4 mb-4">
                  {step.title}
                </h3>
                <p className="font-bricolage text-[16px] leading-[1.78] text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 lg:py-24 border-t border-white/10">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <h2 className="font-archivo font-medium text-[32px] lg:text-[54px] leading-[1.1] text-white capitalize mb-12">
            Who Is This For?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px]">
            {[
              "First-time founders who need structured guidance to turn a raw idea into a validated concept.",
              "Technical founders who have the skills to build but need help defining what to build and why.",
              "Funded startups that want to validate their next product direction before committing engineering resources.",
              "Enterprise teams exploring new product lines or digital transformation initiatives.",
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-red rounded-full mt-2 shrink-0" />
                <p className="font-bricolage text-[18px] leading-[1.78] text-gray-400">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="text-center max-w-[700px] mx-auto">
            <h2 className="font-archivo font-medium text-[32px] lg:text-[48px] leading-[1.1] text-white capitalize mb-6">
              Ready to Validate Your Idea?
            </h2>
            <p className="font-bricolage text-[18px] leading-[1.5] text-gray-400 mb-10">
              Book a free strategy call and let&apos;s assess your startup idea
              together. No commitments, just clarity.
            </p>
            <button className="px-8 py-4 gradient-brand font-bricolage text-[16px] text-white hover:opacity-90 transition-opacity">
              Book Strategy Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
