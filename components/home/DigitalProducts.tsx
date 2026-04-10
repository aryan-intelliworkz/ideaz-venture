"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AIPowered from "./Homepage/AI-Powered Products & Automation.webp";
import WebPlatform from "./Homepage/Web Platforms & SaaS Products.webp";
import Marketplace from "./Homepage/Marketplace & Platform Solutions.webp";
import MobileApp from "./Homepage/Mobile App Development.webp";
import ERP from "./Homepage/ERP & CRM Systems.webp";
import EAP from "./Homepage/EAP (Enterprise Application Platforms).webp";

const products = [
  {
    title: "AI-Powered Products & Automation",
    descriptionOne:
      "We build intelligent, AI-powered applications that automate workflows, improve decision-making, and enhance user experiences. From predictive analytics to intelligent assistants, our solutions are designed to deliver measurable impact in real-world environments.",
    descriptionTwo:
      "Our AI product development approach focuses on practical implementation, integrating machine learning, data processing, and automation into scalable systems that grow with your business.",
    image: AIPowered,
  },
  {
    title: "Web Platforms & SaaS Products",
    descriptionOne:
      "We develop scalable web platforms and SaaS products designed for performance, security, and long-term growth. From business dashboards to subscription-based platforms, every solution is built with clean architecture and user-focused design.",
    descriptionTwo:
      "Our SaaS product development services ensure your platform is ready to handle users, data, and evolving business needs without compromising speed or stability.",
    image: WebPlatform,
  },
  {
    title: "Marketplace & Platform Solutions",
    descriptionOne:
      "We build robust marketplace platforms that seamlessly manage users, transactions, and multi-sided interactions. Whether B2B or B2C, our solutions are designed for scalability, trust, and operational efficiency.",
    descriptionTwo:
      "Our platform development solutions focus on creating structured ecosystems that enable vendors, customers, and businesses to interact smoothly at scale.",
    image: Marketplace,
  },
  {
    title: "Mobile App Development",
    descriptionOne:
      "We create high-performance mobile applications designed for usability, speed, and scalability. From consumer-facing apps to enterprise tools, our mobile solutions are built for real-world usage and long-term growth.",
    descriptionTwo:
      "Our mobile app development services ensure seamless user experiences across devices while maintaining strong backend integration and performance.",
    image: MobileApp,
  },
  {
    title: "ERP & CRM Systems",
    descriptionOne:
      "We build customized ERP and CRM systems that streamline operations, manage data, and improve business efficiency. These systems are tailored to your workflows, ensuring better control, visibility, and decision-making.",
    descriptionTwo:
      "Our enterprise solution development approach ensures your systems scale alongside your business while remaining structured and easy to manage.",
    image: ERP,
  },
  {
    title: "EAP (Enterprise Application Platforms)",
    descriptionOne:
      "We develop advanced enterprise application platforms (EAP) designed to support complex business processes and integrations. These systems act as the backbone for operations, automation, and large-scale workflows.",
    descriptionTwo:
      "Our enterprise application development services focus on building flexible, scalable platforms that connect multiple systems and support long-term digital transformation.",
    image: EAP,
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
    <section className="py-16 md:py-20 lg:py-20 xl:py-24 2xl:py-24">
      <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
        {/* Section heading */}
        <div
          ref={headingRef}
          className="reveal-fade-up flex flex-col items-center gap-3 mb-10"
        >
          <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] min-[1800px]:text-[40px] leading-[1.2] text-white capitalize text-center">
            Digital Products & Platforms Built for Scale
          </h2>
          <p className="font-bricolage text-[15px] md:text-[15px] lg:text-[16px] leading-[1.44] text-gray-400 max-w-[700px] text-center">
            As a{" "}
            <span
              className="font-black tracking-[-0.02em]"
              style={{ fontWeight: 900 }}
            >
              technology consulting company
            </span>
            , we design and build scalable digital solutions that solve real
            business problems, combining engineering, product thinking, and
            long-term execution.
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
                  <div className="relative w-full lg:w-1/2 h-[280px] md:h-[380px] lg:h-[380px] xl:h-[460px] 2xl:h-[460px] shrink-0 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content — 50% width, 550px tall, padding 24px */}
                  <div className="flex flex-col lg:w-1/2 lg:h-[380px] xl:h-[460px] 2xl:h-[460px] lg:py-6 pt-6 gap-8">
                    <div className="flex flex-col gap-[19px]">
                      <h3 className="font-archivo font-normal text-[24px] md:text-[28px] lg:text-[24px] xl:text-[27px] 2xl:text-[28px] min-[1800px]:text-[30px] leading-[1.09] text-white capitalize">
                        {product.title}
                      </h3>
                      <p className="font-bricolage text-[15px] md:text-[16px] leading-[1.44] text-gray-500">
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
