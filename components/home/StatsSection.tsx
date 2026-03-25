import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "₹174 Crore", label: "Strategic Exit Achieved." },
  { value: "25,000+", label: "Active Global Users." },
  { value: "15+", label: "Countries Deployed." },
  { value: "500,000+", label: "Industrial Products Managed." },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: intro text */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h2 className="font-archivo font-medium text-[32px] lg:text-[40px] leading-[1.2] text-white capitalize">
              Startup Execution Backed by Experience
            </h2>
            <div className="space-y-4">
              <p className="font-bricolage text-[18px] leading-[1.44] text-gray-400">
                Building a startup requires more than great ideas. It demands
                strategic clarity, reliable technology, and disciplined
                execution.
              </p>
              <p className="font-bricolage text-[18px] leading-[1.44] text-gray-400">
                At Ideaz Ventures, we help founders transform early concepts
                into market-ready products and scalable platforms.
              </p>
              <p className="font-bricolage text-[18px] leading-[1.44] text-gray-400">
                Our team works across strategy, product development, branding,
                and operational execution to ensure every venture is built on a
                strong foundation.
              </p>
            </div>
            <Link
              href="/get-in-touch"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 font-bricolage text-[18px] text-white bg-bg-primary hover:bg-white/5 transition-colors mt-4 w-fit"
            >
              Let&apos;s Grow Together
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-8 lg:gap-12 flex-1">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <span className="font-archivo font-medium text-[32px] lg:text-[40px] leading-[1.09] text-white capitalize">
                  {stat.value}
                </span>
                <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />
                <p className="font-bricolage text-[18px] leading-[1.44] text-gray-100">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
