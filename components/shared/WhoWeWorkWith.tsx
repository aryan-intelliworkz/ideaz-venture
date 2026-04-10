"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import foundersImg from "./Who we are/Founders & Early-Stage Startups.webp";
import growingStartupsImg from "./Who we are/Growing Startups.webp";
import enterprisesImg from "./Who we are/Enterprises & Digital Platforms.webp";

const workWithData = [
  {
    title: "Founders & Early-Stage Startups",
    description: "Turning ideas into validated, execution-ready products.",
    image: foundersImg,
  },
  {
    title: "Growing Startups",
    description: "Scaling products, systems, and growth with structure.",
    image: growingStartupsImg,
  },
  {
    title: "Enterprises & Digital Platforms",
    description:
      "Building scalable, high-performance digital products and platforms.",
    image: enterprisesImg,
  },
];

export default function WhoWeWorkWith() {
  const [activeWorkWith, setActiveWorkWith] = useState(0);
  const workWithTimerRef = useRef<NodeJS.Timeout | null>(null);
  const workWithRef = useScrollReveal();

  const resetWorkWithTimer = useCallback(() => {
    if (workWithTimerRef.current) clearInterval(workWithTimerRef.current);
    workWithTimerRef.current = setInterval(() => {
      setActiveWorkWith((prev) => (prev + 1) % workWithData.length);
    }, 5000);
  }, []);

  useEffect(() => {
    resetWorkWithTimer();
    return () => {
      if (workWithTimerRef.current) clearInterval(workWithTimerRef.current);
    };
  }, [resetWorkWithTimer]);

  const handleWorkWithClick = (index: number) => {
    setActiveWorkWith(index);
    resetWorkWithTimer();
  };

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
        {/* Section Header */}
        <div
          ref={workWithRef}
          className="reveal-fade-up text-center mb-8 md:mb-10 lg:mb-14"
        >
          <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] min-[1800px]:text-[40px] leading-[1.2] text-white capitalize">
            Who We Work With
          </h2>
          <p className="mt-3 font-bricolage text-[16px] lg:text-[16px] xl:text-[18px] leading-[1.44] text-gray-400 max-w-[700px] mx-auto">
            We partner with founders and businesses at different stages of
            growth — supporting them with the right strategy, technology, and
            execution.
          </p>
        </div>

        {/* Desktop Layout: dots left, image center, info right */}
        <div className="hidden lg:flex items-stretch overflow-hidden min-h-[320px]">
          {/* Left — dot navigation + labels */}
          <div className="w-[300px] shrink-0 p-10 flex flex-col justify-center gap-6 border-r border-white/[0.08]">
            {workWithData.map((item, index) => (
              <button
                key={item.title}
                onClick={() => handleWorkWithClick(index)}
                className={cn(
                  "flex items-center gap-3 text-left transition-all duration-300 group",
                  activeWorkWith === index
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-75",
                )}
              >
                <span
                  className={cn(
                    "w-2.5 h-2.5 rounded-full shrink-0 transition-colors duration-300",
                    activeWorkWith === index ? "bg-[#EC1C24]" : "bg-white/30",
                  )}
                />
                <span className="font-bricolage text-[13px] lg:text-[14px] text-white leading-[1.4]">
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          {/* Center — Image */}
          <div className="flex-1 relative min-h-[320px] mx-4">
            {workWithData.map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  activeWorkWith === index ? "opacity-100" : "opacity-0",
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>

          {/* Right — Number + Title + Description */}
          <div className="w-[340px] shrink-0 p-10 flex flex-col justify-center border-l border-white/[0.08]">
            <span
              className="font-archivo text-[72px] leading-none font-bold mb-4"
              style={{
                WebkitTextStroke: "1px #666",
                WebkitTextFillColor: "transparent",
              }}
            >
              {String(activeWorkWith + 1).padStart(2, "0")}
            </span>
            <h3 className="font-archivo font-medium text-[18px] xl:text-[20px] leading-[1.2] text-white mb-3">
              {workWithData[activeWorkWith].title}
            </h3>
            <p className="font-bricolage text-[13px] xl:text-[14px] leading-[1.6] text-white/60">
              {workWithData[activeWorkWith].description}
            </p>
          </div>
        </div>

        {/* Mobile / Tablet — stacked cards */}
        <div className="lg:hidden space-y-4">
          {workWithData.map((item, index) => (
            <div
              key={item.title}
              onClick={() => handleWorkWithClick(index)}
              className={cn(
                "overflow-hidden cursor-pointer transition-all duration-300",
                activeWorkWith === index ? "ring-1 ring-[#EC1C24]/30" : "",
              )}
            >
              <div className="relative h-[180px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="font-archivo text-[36px] leading-none font-bold"
                    style={{
                      WebkitTextStroke: "1px #666",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-archivo font-medium text-[16px] md:text-[18px] leading-[1.2] text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="font-bricolage text-[13px] md:text-[14px] leading-[1.6] text-white/60">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
