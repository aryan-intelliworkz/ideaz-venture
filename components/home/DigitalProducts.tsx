import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function DigitalProducts() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
        <div className="text-center mb-16">
          <h2 className="font-archivo font-medium text-[32px] lg:text-[40px] leading-[1.2] text-white capitalize">
            Digital Products & Platforms We Build
          </h2>
          <p className="mt-4 font-bricolage text-[18px] leading-[1.44] text-gray-400 max-w-[700px] mx-auto">
            We engineer modern digital products and platforms designed to scale
            across industries and markets.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image from Figma */}
          <div className="relative flex-1 min-h-[400px] lg:min-h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/assets/sections/digital-products.png"
              alt="AI-Powered Products & Automation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="font-archivo font-normal text-[24px] lg:text-[30px] leading-[1.09] text-white capitalize">
                AI-Powered Products & Automation
              </h3>
              <p className="font-bricolage text-[18px] leading-[1.44] text-gray-500">
                We build intelligent products that leverage AI and machine
                learning to automate workflows, generate insights, and deliver
                personalized user experiences at scale. From natural language
                processing to predictive analytics, our AI solutions help
                businesses stay ahead of the curve.
              </p>
              <p className="font-bricolage text-[18px] leading-[1.44] text-gray-500">
                Our AI expertise spans computer vision, recommendation engines,
                conversational AI, and process automation. We integrate these
                capabilities into existing products or build standalone AI-first
                platforms.
              </p>
            </div>
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              {[
                "SaaS Platforms",
                "Mobile Apps",
                "E-Commerce",
                "IoT Dashboards",
                "AI Products",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full whitespace-nowrap hover:border-white/30 transition-colors cursor-pointer"
                >
                  <span className="font-bricolage text-[14px] text-white">
                    {item}
                  </span>
                  <ArrowRight size={14} className="text-white/60" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
