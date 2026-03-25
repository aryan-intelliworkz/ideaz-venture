"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Startup Consulting",
    description:
      "We help founders validate, structure, and de-risk their startup ideas before execution. Our consulting services include business strategy development, market positioning, competitive analysis, revenue model design, and growth planning. We work closely with founders to define a clear roadmap from concept to launch while minimizing risk and maximizing clarity.",
  },
  {
    title: "Startup Product Development",
    description:
      "End-to-end product development from ideation to deployment. We build MVPs, iterate based on user feedback, and scale your product with robust, maintainable code and modern architecture.",
  },
  {
    title: "Branding & GTM Support",
    description:
      "Strategic branding and go-to-market support that positions your venture for growth. From brand identity to launch strategy, we ensure your product enters the market with impact.",
  },
  {
    title: "Investor Readiness Support",
    description:
      "Prepare your venture for funding with investor-ready metrics, pitch materials, financial modeling, and due diligence preparation that demonstrates operational maturity.",
  },
  {
    title: "Post-Launch Support",
    description:
      "Ongoing technical and strategic support after launch. Bug fixes, performance optimization, feature iterations, and user analytics to keep your product growing.",
  },
  {
    title: "Managed Operations",
    description:
      "Full operational management including DevOps, infrastructure, monitoring, and technical support so you can focus on growth while we handle the engine room.",
  },
];

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
        <div className="text-center mb-16">
          <h2 className="font-archivo font-medium text-[32px] lg:text-[40px] leading-[1.2] text-white capitalize">
            We Partner With Founders From Idea Validation to Scale.
          </h2>
          <p className="mt-4 font-bricolage text-[18px] leading-[1.44] text-gray-500 max-w-[700px] mx-auto">
            Our services cover the entire startup journey — from strategy and
            product development to launch and operational growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? -1 : index)
              }
              className={cn(
                "group relative border border-white/10 p-8 cursor-pointer transition-all duration-300",
                expandedIndex === index
                  ? "lg:col-span-2 bg-white/[0.02]"
                  : "lg:col-span-1 hover:bg-white/[0.02]",
              )}
            >
              {/* Decorative corner lines */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20" />

              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-archivo font-normal text-[24px] lg:text-[28px] leading-[1.09] text-white capitalize">
                    {service.title}
                  </h3>
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center border transition-colors",
                      expandedIndex === index
                        ? "border-white/40 bg-white/10"
                        : "border-white/10 group-hover:border-white/30",
                    )}
                  >
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                </div>

                {expandedIndex === index && (
                  <div className="mt-4 animate-in fade-in duration-300">
                    <p className="font-bricolage text-[18px] leading-[1.44] text-gray-400 mb-6">
                      {service.description}
                    </p>
                    <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 font-bricolage text-[14px] text-white hover:bg-white/10 transition-colors">
                      Learn More <ArrowRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
