"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, EffectCards } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import { cn } from "@/lib/utils";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import WhoWeWorkWith from "@/components/shared/WhoWeWorkWith";

// All new content and structure will be implemented here as per your provided data.

// Importing all the new images for the "Who We Are" page
import execution1 from "./How we work_Section-6/Think Before We Build.webp";
import execution2 from "./How we work_Section-6/Structure The Foundation.webp";
import execution3 from "./How we work_Section-6/Build With Discipline.webp";
import execution4 from "./How we work_Section-6/Launch With Direction.webp";
import execution5 from "./How we work_Section-6/Scale With Systems.webp";

// 5-step Execution Approach (from user content)
const executionApproach = [
  {
    title: "Think Before We Build",
    descriptionOne:
      "We begin by understanding the problem, users, and business context, not just the feature or idea. This helps define what should be built and why it matters.\n\nBy aligning early on product direction and execution priorities, we reduce uncertainty and ensure every step forward is intentional.",
    cardDesc:
      "Think Before We Build\n Understand the problem before writing a single line.",
    image: execution1,
  },
  {
    title: "Structure The Foundation",
    descriptionOne:
      "Before development begins, we define architecture, workflows, and execution plans, creating a stable foundation for speed and clarity.\n\nThis ensures teams move forward with direction, avoiding confusion and unnecessary rework.",
    cardDesc:
      "Structure The Foundation\n Build clarity into systems before execution begins.",
    image: execution2,
  },
  {
    title: "Build With Discipline",
    descriptionOne:
      "We approach development with engineering discipline, focusing on performance, scalability, and clean execution rather than shortcuts.\n\nEvery decision is made with long-term impact in mind, ensuring the product remains stable as it evolves.",
    cardDesc:
      "Build With Discipline\n Develop with precision, not shortcuts or assumptions.",
    image: execution3,
  },
  {
    title: "Launch With Direction",
    descriptionOne:
      "Launch is treated as a structured step toward validation and growth, not just completion.\n\nEach release is aligned with clear goals, ensuring the product enters the market with purpose and direction.",
    cardDesc:
      "Launch With Direction\n Enter the market with purpose and defined outcomes.",
    image: execution4,
  },
  {
    title: "Scale With Systems",
    descriptionOne:
      "As products grow, we strengthen systems, processes, and infrastructure to support scale without instability.\n\nThis allows businesses to expand confidently without rebuilding or slowing down.",
    cardDesc:
      "Scale With Systems\n Strengthen systems to support growth without disruption.",
    image: execution5,
  },
];

const corePrinciples = [
  {
    title: "Founder-First Thinking",
    description:
      "We align with your vision and priorities, approaching every decision with ownership and long-term impact in mind.",
    image: "/assets/OurCore1.png",
  },
  {
    title: "End-To-End Execution",
    description:
      "From strategy to launch, we stay accountable across the entire journey, ensuring nothing breaks between planning and delivery.",
    image: "/assets/OurCore2.png",
  },
  {
    title: "Built For Scale",
    description:
      "We design systems and products that grow with your business, stable, adaptable, and ready for long-term expansion.",
    image: "/assets/OurCore3.png",
  },
];

const differentiators = [
  {
    title: "Execution Over Advice",
    description:
      "We don’t just guide, we execute. As startup business consultants, we turn plans into real products, launches, and outcomes.",
    icon: (
      <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
        <circle cx="38" cy="38" r="37" stroke="white" strokeOpacity="0.3" />
        <path
          d="M24 52V28L38 20L52 28V44L38 52L24 44"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M38 36V52" stroke="white" strokeWidth="1.5" />
        <path d="M24 28L38 36L52 28" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Built For Startups",
    description:
      "Our approach is shaped around startup realities, speed, uncertainty, and the need to move with clarity.",
    icon: (
      <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
        <circle cx="38" cy="38" r="37" stroke="white" strokeOpacity="0.3" />
        <rect
          x="22"
          y="22"
          width="32"
          height="32"
          rx="4"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M32 34L36 38L32 42"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 42H46"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "End-To-End Ownership",
    description:
      "From idea to scale, we take responsibility across strategy, product, and execution, ensuring continuity at every stage.",
    icon: (
      <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
        <circle cx="38" cy="38" r="37" stroke="white" strokeOpacity="0.3" />
        <path
          d="M26 50L38 26L50 50"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 42H46"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="38" cy="34" r="3" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Product + Business Thinking",
    description:
      "We build with both product depth and business context, aligning what you create with how it succeeds.",
    icon: (
      <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
        <circle cx="38" cy="38" r="37" stroke="white" strokeOpacity="0.3" />
        <path
          d="M26 48V32L32 28V48"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M34 48V36L40 32V48"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M42 48V30L48 26V48"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M24 48H52"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Scalable By Design",
    description:
      "Everything is built to grow, structured for performance today and scalability tomorrow.",
    icon: (
      <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
        <circle cx="38" cy="38" r="37" stroke="white" strokeOpacity="0.3" />
        <path
          d="M38 24V38L46 42"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="38" cy="38" r="14" stroke="white" strokeWidth="1.5" />
        <path
          d="M28 48L24 52"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Flexible Team Model",
    description:
      "We adapt to your stage, offering the right mix of consulting, execution, and team support when you need it.",
    icon: (
      <svg width="76" height="76" viewBox="0 0 76 76" fill="none">
        <circle cx="38" cy="38" r="37" stroke="white" strokeOpacity="0.3" />
        <circle cx="38" cy="38" r="8" stroke="white" strokeWidth="1.5" />
        <path
          d="M38 24V28"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M38 48V52"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M24 38H28"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M48 38H52"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

/* ─── Arrow Button ─── */
function ArrowButton() {
  return (
    <div className="service-arrow-btn">
      <div className="service-arrow-btn-bg">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          className="relative z-10"
        >
          <path
            d="M4 13L13 4M13 4H5M13 4V12"
            stroke="#EC1C24"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="service-arrow-glow" />
      </div>
      <div className="service-arrow-border-spin" />
    </div>
  );
}

/* ─── Main Component ─── */
/* ─── Nav Arrow (reuse for execution carousel) ─── */
function NavArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-[48px] h-[48px] rounded-full border border-gray-500 flex items-center justify-center transition-colors duration-300 hover:border-white hover:bg-white/[0.05] cursor-pointer"
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
    >
      <svg width="18" height="15" viewBox="0 0 18 15" fill="none">
        {direction === "prev" ? (
          <path
            d="M17 7.5H1M1 7.5L7.5 1M1 7.5L7.5 14"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M1 7.5H17M17 7.5L10.5 1M17 7.5L10.5 14"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

export default function WhoWeAreContent() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const executionSwiperRef = useRef<SwiperType | null>(null);
  const cardsSwiperRef = useRef<SwiperType | null>(null);
  const isSyncing = useRef(false);
  const [executionIndex, setExecutionIndex] = useState(0);

  const introLeftRef = useScrollReveal();
  const introRightRef = useScrollReveal();
  const diffHeadingRef = useScrollReveal();
  const vennRef = useScrollReveal({ threshold: 0.1 });
  const circlesRef = useScrollReveal({ threshold: 0.1 });
  const principlesRef = useStaggerReveal({ threshold: 0.1 });
  const execRef = useScrollReveal();

  return (
    <>
      {/* ── Intro: "We Don't Just Build Products…" ── */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
            {/* Left — arrow + heading */}
            <div
              ref={introLeftRef}
              className="reveal-slide-left flex items-start gap-4 lg:w-[45%] shrink-0"
            >
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="none"
                className="mt-2 shrink-0"
              >
                <path
                  d="M0 10H36M36 10L28 2M36 10L28 18"
                  stroke="#EC1C24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] min-[1800px]:text-[40px] leading-[1.15] text-white">
                We Don&apos;t Just Build Products
                <br />
                We Execute Startups.
              </h2>
            </div>

            {/* Right — description */}
            <div ref={introRightRef} className="reveal-slide-right lg:w-[55%]">
              <p className="font-bricolage text-[15px] lg:text-[16px] leading-[1.7] text-white/60 mb-4">
                Ideaz Ventures is a startup execution partner helping founders
                move from idea to scalable product with clarity, speed, and
                technical excellence.
              </p>
              <p className="font-bricolage text-[15px] lg:text-[16px] leading-[1.7] text-white/60">
                From validation to launch and beyond, we take ownership of
                building, shipping, and scaling digital products that are
                designed to succeed in real markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Makes Us Different (Accordion) ── */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          {/* Section heading */}
          <div
            ref={diffHeadingRef}
            className="reveal-fade-up flex flex-col items-center gap-3 mb-10"
          >
            <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] min-[1800px]:text-[40px] leading-[1.2] text-white capitalize text-center">
              What Sets Us Apart
            </h2>
            <p className="font-bricolage text-[16px] lg:text-[16px] xl:text-[18px] leading-[1.44] text-gray-500 max-w-[700px] text-center">
              We&apos;re not a typical development agency. We operate as an
              execution partner — combining strategy, engineering, and
              operational ownership to build products that actually succeed in
              the market.
            </p>
          </div>

          {/* Desktop: accordion row */}
          <div className="hidden lg:flex gap-4 h-[450px]">
            {differentiators.map((item, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={item.title}
                  onClick={() => setExpandedIndex(index)}
                  onMouseEnter={() => setExpandedIndex(index)}
                  className={cn(
                    "service-card relative cursor-pointer overflow-hidden corner-border transition-all duration-700 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
                    isExpanded
                      ? "service-card-expanded flex-[3.2]"
                      : "service-card-collapsed flex-1 hover:bg-white/[0.02]",
                  )}
                >
                  {/* Expanded content */}
                  <div
                    className={cn(
                      "absolute inset-0 p-6 flex flex-col transition-opacity duration-500",
                      isExpanded
                        ? "opacity-100 delay-200"
                        : "opacity-0 pointer-events-none",
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-[100px] h-[100px] rounded-full bg-white/[0.08] flex items-center justify-center">
                        {item.icon}
                      </div>
                      <ArrowButton />
                    </div>
                    <div className="mt-auto flex flex-col gap-4">
                      <h3 className="font-archivo font-normal text-[28px] leading-[1.09] text-white capitalize">
                        {item.title}
                      </h3>
                      <p className="font-bricolage text-[18px] leading-[1.44] text-gray-500 whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Collapsed: vertical text */}
                  <div
                    className={cn(
                      "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                      isExpanded
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100",
                    )}
                  >
                    <span className="service-card-vertical-text font-archivo font-normal text-[28px] leading-[1.09] text-white capitalize whitespace-nowrap">
                      {item.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tablet: 2-col grid */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
            {differentiators.map((item, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={item.title}
                  onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                  className={cn(
                    "service-card relative cursor-pointer overflow-hidden corner-border transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
                    isExpanded ? "service-card-expanded" : "",
                  )}
                >
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div className="w-[80px] h-[80px] rounded-full bg-white/[0.08] flex items-center justify-center">
                        {item.icon}
                      </div>
                      <ArrowButton />
                    </div>
                    <h3 className="font-archivo font-normal text-[24px] leading-[1.09] text-white capitalize">
                      {item.title}
                    </h3>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-500",
                        isExpanded
                          ? "max-h-[300px] opacity-100"
                          : "max-h-0 opacity-0",
                      )}
                    >
                      <p className="font-bricolage text-[16px] leading-[1.44] text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: single column */}
          <div className="grid md:hidden grid-cols-1 gap-4">
            {differentiators.map((item, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={item.title}
                  onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                  className="service-card relative cursor-pointer overflow-hidden corner-border transition-all duration-500"
                >
                  <div className="p-5 flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                      <div className="w-[64px] h-[64px] rounded-full bg-white/[0.08] flex items-center justify-center scale-[0.84]">
                        {item.icon}
                      </div>
                      <ArrowButton />
                    </div>
                    <h3 className="font-archivo font-normal text-[22px] leading-[1.09] text-white capitalize">
                      {item.title}
                    </h3>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-500",
                        isExpanded
                          ? "max-h-[300px] opacity-100"
                          : "max-h-0 opacity-0",
                      )}
                    >
                      <p className="font-bricolage text-[16px] leading-[1.44] text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision (Venn Diagram) ── */}
      <section className="py-16 md:py-20 lg:py-20 xl:py-24 2xl:py-24 overflow-hidden">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          {/* Section Header */}
          <div
            ref={vennRef}
            className="reveal-fade-up text-center mb-12 lg:mb-16"
          >
            <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] min-[1800px]:text-[40px] leading-[1.2] text-white capitalize">
              Mission & Vision
            </h2>
            <p className="mt-3 font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.44] text-gray-400">
              We are driven by a clear purpose — to help founders build
              meaningful products and scale them with confidence.
            </p>
          </div>

          {/* Desktop Venn */}
          <div
            ref={circlesRef}
            className="reveal-scale hidden md:flex justify-center items-center relative"
          >
            {/* Left Circle — Our Mission */}
            <div className="relative w-[420px] lg:w-[440px] xl:w-[520px] 2xl:w-[520px] h-[420px] lg:h-[440px] xl:h-[520px] 2xl:h-[520px] rounded-full border border-white/[0.25] flex flex-col items-center justify-center text-center z-10">
              <div className="flex flex-col items-center gap-4 px-10 lg:px-12 xl:px-14 -translate-x-4 lg:-translate-x-6">
                <h3 className="font-archivo font-medium text-[24px] md:text-[30px] lg:text-[28px] xl:text-[32px] 2xl:text-[34px] min-[1800px]:text-[36px] leading-[1.09] text-white capitalize">
                  Our Mission
                </h3>
                <p className="font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.5] text-gray-100 max-w-[280px]">
                  To help founders build the right product faster — with
                  clarity, structure, and execution that reduces risk and
                  accelerates growth.
                </p>
              </div>
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <Image
                src="/assets/cricleLogo.png"
                alt="Ideaz Ventures"
                width={60}
                height={60}
                className="w-[40px] lg:w-[50px] xl:w-[60px] h-auto"
              />
            </div>

            {/* Right Circle — Our Vision */}
            <div className="relative w-[420px] lg:w-[440px] xl:w-[520px] 2xl:w-[520px] h-[420px] lg:h-[440px] xl:h-[520px] 2xl:h-[520px] rounded-full border border-white/[0.25] flex flex-col items-center justify-center text-center -ml-[80px] lg:-ml-[80px] xl:-ml-[100px] 2xl:-ml-[100px] z-10">
              <div className="flex flex-col items-center gap-4 px-10 lg:px-12 xl:px-14 translate-x-4 lg:translate-x-6">
                <h3 className="font-archivo font-medium text-[24px] md:text-[30px] lg:text-[28px] xl:text-[32px] 2xl:text-[34px] min-[1800px]:text-[36px] leading-[1.09] text-white capitalize">
                  Our Vision
                </h3>
                <p className="font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.5] text-gray-100 max-w-[280px]">
                  To become the long-term execution partner startups trust to
                  build, launch, and scale technology products globally.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Venn */}
          <div className="flex md:hidden flex-col items-center relative">
            {/* Top Circle */}
            <div className="relative w-[320px] h-[320px] rounded-full border border-white/[0.25] flex flex-col items-center justify-center text-center z-10">
              <div className="flex flex-col items-center gap-3 px-8 -translate-y-3">
                <h3 className="font-archivo font-medium text-[24px] leading-[1.09] text-white capitalize">
                  Our Mission
                </h3>
                <p className="font-bricolage text-[14px] leading-[1.5] text-gray-100 max-w-[220px]">
                  To help founders build the right product, faster, with
                  clarity, structure, and execution that reduces risk and drives
                  real progress.
                </p>
              </div>
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <Image
                src="/assets/cricleLogo.png"
                alt="Ideaz Ventures"
                width={40}
                height={40}
                className="w-[35px] h-auto"
              />
            </div>

            {/* Bottom Circle */}
            <div className="relative w-[320px] h-[320px] rounded-full border border-white/[0.25] flex flex-col items-center justify-center text-center -mt-[60px] z-10">
              <div className="flex flex-col items-center gap-3 px-8 translate-y-3">
                <h3 className="font-archivo font-medium text-[24px] leading-[1.09] text-white capitalize">
                  Our Vision
                </h3>
                <p className="font-bricolage text-[14px] leading-[1.5] text-gray-100 max-w-[220px]">
                  To be the execution partner that founders trust to build,
                  launch, and scale products with consistency and long-term
                  impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Work With (Carousel) ── */}
      <WhoWeWorkWith />

      {/* ── Our Core Principles ── */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-10 lg:mb-14">
            <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] min-[1800px]:text-[40px] leading-[1.2] text-white capitalize">
              Our Core Principles
            </h2>
            <p className="mt-3 font-bricolage text-[16px] lg:text-[16px] xl:text-[18px] leading-[1.44] text-gray-400 max-w-[700px] mx-auto">
              These principles guide how we think, build, and execute, ensuring
              consistency across every venture we work on.
            </p>
          </div>

          {/* 3 Cards */}
          <div
            ref={principlesRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {corePrinciples.map((principle) => (
              <div
                key={principle.title}
                className="reveal-child corner-border overflow-hidden group transition-colors"
              >
                <div className="relative h-[220px] lg:h-[260px] overflow-hidden">
                  <Image
                    src={principle.image}
                    alt={principle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="font-archivo font-medium text-[20px] lg:text-[22px] min-[1800px]:text-[24px] leading-[1.2] text-white mb-3">
                    {principle.title}
                  </h3>
                  <p className="font-bricolage text-[14px] lg:text-[16px] leading-[1.6] text-white/60">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Approach Execution ── */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="relative mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          {/* Section Header */}
          <div
            ref={execRef}
            className="reveal-fade-up text-center mb-8 md:mb-10 lg:mb-14"
          >
            <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] min-[1800px]:text-[40px] leading-[1.2] text-white capitalize">
              Our Execution Approach
            </h2>
            <p className="mt-3 font-bricolage text-[16px] lg:text-[16px] xl:text-[18px] leading-[1.44] text-gray-400 max-w-[780px] mx-auto">
              A structured approach that connects strategy, product, and
              execution, so every step moves the product forward with clarity
              and purpose.
            </p>
          </div>

          {/* Swiper — content left + stacked card gallery right */}
          <Swiper
            modules={[Navigation, EffectFade]}
            onSwiper={(swiper) => {
              executionSwiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              if (isSyncing.current) return;
              isSyncing.current = true;
              const newIndex = swiper.realIndex;
              setExecutionIndex(newIndex);
              if (cardsSwiperRef.current) {
                cardsSwiperRef.current.slideTo(newIndex);
              }
              isSyncing.current = false;
            }}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            speed={600}
            allowTouchMove
          >
            {executionApproach.map((step) => (
              <SwiperSlide key={step.title}>
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-16">
                  {/* Left — Text content */}
                  <div className="flex flex-col lg:w-[55%] py-4">
                    <h3 className="font-archivo font-medium text-[24px] md:text-[28px] lg:text-[27px] min-[1800px]:text-[30px] leading-[1.15] text-white mb-6">
                      {step.title}
                    </h3>
                    <p className="font-bricolage text-[15px] lg:text-[16px] leading-[1.7] text-white/50 mb-5">
                      {step.descriptionOne}
                    </p>

                    {/* Navigation arrows */}
                    <div className="flex items-center gap-[14px] mt-8">
                      <NavArrow
                        direction="prev"
                        onClick={() => executionSwiperRef.current?.slidePrev()}
                      />
                      <NavArrow
                        direction="next"
                        onClick={() => executionSwiperRef.current?.slideNext()}
                      />
                    </div>
                  </div>

                  {/* Right — placeholder to reserve space for card stack */}
                  <div className="lg:w-[45%]" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper Cards effect — positioned over the right side */}
          <div className="flex justify-center lg:justify-end lg:absolute lg:right-[160px] lg:top-[180px] mt-6 lg:mt-0">
            <div className="w-[320px] md:w-[380px] lg:w-[420px]">
              <Swiper
                modules={[EffectCards]}
                effect="cards"
                grabCursor={true}
                onSwiper={(swiper) => {
                  cardsSwiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  if (isSyncing.current) return;
                  isSyncing.current = true;
                  const newIndex = swiper.realIndex;
                  setExecutionIndex(newIndex);
                  if (executionSwiperRef.current) {
                    executionSwiperRef.current.slideTo(newIndex);
                  }
                  isSyncing.current = false;
                }}
                className="exec-cards-swiper"
              >
                {executionApproach.map((step) => (
                  <SwiperSlide key={step.title}>
                    <div className="rounded-[12px] border border-white/[0.1] bg-[#141414] p-4 flex flex-col overflow-hidden shadow-2xl">
                      <div className="relative w-full aspect-[3/2] rounded-[8px] overflow-hidden">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="pt-4 pb-1">
                        <h4 className="font-archivo font-medium text-[16px] md:text-[17px] lg:text-[18px] leading-[1.3] text-white mb-1.5">
                          {step.title}
                        </h4>
                        <p className="font-bricolage text-[12px] md:text-[13px] leading-[1.5] text-white/50">
                          {step.cardDesc}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
