"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-archivo font-medium text-[32px] lg:text-[40px] leading-[1.2] text-white capitalize">
            Choose Your Path
          </h2>
          <p className="mt-4 font-bricolage text-[18px] leading-[1.44] text-gray-400 max-w-[700px] mx-auto">
            Built for Founders. Trusted by Enterprises.
          </p>
        </div>

        {/* Two Path Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Build a Venture */}
          <div className="relative overflow-hidden border border-white/10 rounded-[400px] p-10 lg:p-14 flex flex-col justify-between min-h-[320px] bg-white/[0.02]">
            <div>
              <h3 className="font-archivo font-medium text-[32px] lg:text-[40px] leading-[1.09] text-white capitalize mb-4">
                Build a Venture
              </h3>
              <p className="font-bricolage text-[18px] leading-[1.5] text-gray-100 max-w-[400px]">
                Validate your idea.{"\n"}Architect it correctly.{"\n"}Launch
                with confidence.
              </p>
            </div>
            <Link
              href="/get-in-touch"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 border border-white/20 font-bricolage text-[18px] text-white bg-bg-primary hover:bg-white/5 transition-colors w-fit"
            >
              Start the Execution Journey <ArrowRight size={18} />
            </Link>
          </div>

          {/* Build Your Engineering Team */}
          <div className="relative overflow-hidden border border-white/10 rounded-[400px] p-10 lg:p-14 flex flex-col justify-between min-h-[320px] bg-white/[0.02]">
            {/* Decorative graphic */}
            <div className="absolute top-4 right-4 w-[200px] h-[200px] opacity-20">
              <Image
                src="/assets/sections/choose-path-graphic.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>
            <div>
              <h3 className="font-archivo font-medium text-[28px] lg:text-[36px] leading-[1.09] text-white capitalize mb-4">
                Build Your Engineering Team
              </h3>
              <p className="font-bricolage text-[18px] leading-[1.5] text-gray-100 max-w-[400px]">
                Deploy experienced startup-ready engineers — fast.
              </p>
            </div>
            <Link
              href="/get-in-touch"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 border border-white/20 font-bricolage text-[18px] text-white bg-bg-primary hover:bg-white/5 transition-colors w-fit"
            >
              Hire Dedicated Teams <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
