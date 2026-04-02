"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const products = [
  {
    title: "AI-Powered Products & Automation",
    descriptionOne:
      "We build intelligent products that leverage AI and machine learning to automate workflows, generate insights, and deliver personalized user experiences at scale. From natural language processing to predictive analytics, our AI solutions help businesses stay ahead of the curve.",
    descriptionTwo:
      "Our AI expertise spans computer vision, recommendation engines, conversational AI, and process automation. We integrate these capabilities into existing products or build standalone AI-first platforms that transform how businesses operate.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
  },
  {
    title: "SaaS Platforms & Dashboards",
    descriptionOne:
      "End-to-end SaaS product development with multi-tenant architecture, subscription billing, analytics dashboards, and scalable cloud infrastructure. We design systems that handle thousands of concurrent users with ease.",
    descriptionTwo:
      "From user onboarding flows to admin panels and real-time analytics, we build every layer of your SaaS product with performance, security, and scalability at its core. Our platforms are designed to grow with your business.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
  },
  {
    title: "E-Commerce & Marketplace Solutions",
    descriptionOne:
      "Custom e-commerce platforms and multi-vendor marketplaces with seamless payment integrations, inventory management, and conversion-optimized UX. We build shopping experiences that drive revenue and customer loyalty.",
    descriptionTwo:
      "Our marketplace solutions include vendor onboarding, commission management, dispute resolution, and advanced search with filtering. Every feature is optimized for conversion and designed to scale across geographies.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
  },
  {
    title: "HealthTech & Telemedicine Platforms",
    descriptionOne:
      "HIPAA-compliant health platforms with real-time video consultations, EHR integrations, patient portals, and AI-assisted diagnostics. We build secure, reliable systems that healthcare providers and patients can trust.",
    descriptionTwo:
      "Our telemedicine solutions include appointment scheduling, prescription management, lab result integration, and remote patient monitoring. We ensure regulatory compliance while delivering exceptional user experiences.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80",
  },
  {
    title: "FinTech & Payment Solutions",
    descriptionOne:
      "Secure financial platforms with real-time transaction processing, KYC/AML compliance, digital wallets, and blockchain integrations. We engineer systems that handle sensitive financial data with bank-grade security.",
    descriptionTwo:
      "From payment gateways to lending platforms and investment dashboards, we build FinTech products that meet regulatory requirements while delivering seamless user experiences across web and mobile.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=900&q=80",
  },
  {
    title: "EdTech & Learning Management Systems",
    descriptionOne:
      "Interactive learning platforms with live classrooms, progress tracking, gamification, content management, and certification workflows. We create engaging educational experiences for learners of all ages.",
    descriptionTwo:
      "Our LMS solutions support video streaming, quiz engines, peer collaboration, instructor tools, and detailed analytics. We build platforms that make learning accessible, measurable, and enjoyable.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=900&q=80",
  },
  {
    title: "IoT Dashboards & Real-Time Monitoring",
    descriptionOne:
      "Connected device platforms with real-time data visualization, alerting systems, predictive maintenance, and edge computing capabilities. We turn raw sensor data into actionable business intelligence.",
    descriptionTwo:
      "Our IoT solutions include device management, over-the-air updates, time-series databases, and custom dashboards. We build systems that process millions of data points reliably and in real time.",
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=900&q=80",
  },
  {
    title: "Social & Community Platforms",
    descriptionOne:
      "Scalable social platforms with real-time messaging, content feeds, moderation tools, recommendation engines, and engagement analytics. We build digital communities that connect people meaningfully.",
    descriptionTwo:
      "From user profiles and activity feeds to group management and notifications, we architect social platforms that handle viral growth while maintaining performance and a safe community environment.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80",
  },
];

/* 48px circle arrow button matching Figma nav arrows */
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

export default function DigitalProducts() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const headingRef = useScrollReveal();
  const sliderRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
        {/* Section heading */}
        <div
          ref={headingRef}
          className="reveal-fade-up flex flex-col items-center gap-3 mb-10"
        >
          <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[36px] min-[1800px]:text-[40px] leading-[1.2] text-white capitalize text-center">
            Digital Products & Platforms We Build
          </h2>
          <p className="font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.44] text-gray-400 max-w-[700px] text-center">
            We engineer modern digital products and platforms designed to scale
            across industries and markets.
          </p>
        </div>

        {/* Slide: Image left + Content right */}
        <div ref={sliderRef} className="reveal-scale">
          <Swiper
            modules={[Navigation, EffectFade]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            speed={500}
            allowTouchMove
            className="digital-products-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.title}>
                {/* Desktop / Tablet: side-by-side */}
                <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 md:gap-8 lg:gap-12 xl:gap-16">
                  {/* Image — 50% width on desktop, exactly 550px tall */}
                  <div className="relative w-full lg:w-1/2 h-[280px] md:h-[380px] lg:h-[440px] xl:h-[500px] 2xl:h-[550px] shrink-0 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content — 50% width, 550px tall, padding 24px */}
                  <div className="flex flex-col lg:w-1/2 lg:h-[440px] xl:h-[500px] 2xl:h-[550px] lg:py-6 pt-6 gap-8">
                    <div className="flex flex-col gap-[19px]">
                      <h3 className="font-archivo font-normal text-[24px] md:text-[28px] lg:text-[27px] min-[1800px]:text-[30px] leading-[1.09] text-white capitalize">
                        {product.title}
                      </h3>
                      <p className="font-bricolage text-[16px] md:text-[18px] leading-[1.44] text-gray-500">
                        {product.descriptionOne}
                      </p>
                      <p className="font-bricolage text-[16px] md:text-[18px] leading-[1.44] text-gray-500">
                        {product.descriptionTwo}
                      </p>
                    </div>

                    {/* Navigation arrows */}
                    <div className="flex items-center gap-[14px] mt-auto pb-8 lg:pb-12">
                      <NavArrow
                        direction="prev"
                        onClick={() => swiperRef.current?.slidePrev()}
                      />
                      <NavArrow
                        direction="next"
                        onClick={() => swiperRef.current?.slideNext()}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
