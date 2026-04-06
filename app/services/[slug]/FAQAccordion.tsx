"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ServiceFAQ } from "@/lib/services-data";

export default function FAQAccordion({ faqs }: { faqs: ServiceFAQ[] }) {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
      {faqs.map((faq, i) => {
        const isOpen = openFaq === i;
        return (
          <div
            key={i}
            className={cn(
              "border-b border-white/[0.08] transition-colors duration-300",
              isOpen && "border-white/[0.15]",
            )}
          >
            <button
              className="w-full flex items-center justify-between py-5 lg:py-6 text-left gap-4 cursor-pointer group"
              onClick={() => setOpenFaq(isOpen ? -1 : i)}
            >
              <span
                className={cn(
                  "font-archivo text-[16px] md:text-[18px] lg:text-[20px] leading-[1.3] transition-colors duration-300",
                  isOpen
                    ? "text-white"
                    : "text-white/70 group-hover:text-white",
                )}
              >
                {faq.question}
              </span>

              {/* Plus / Cross icon */}
              <span className="flex items-center justify-center w-8 h-8 shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="transition-transform duration-300"
                  aria-hidden="true"
                >
                  {/* Horizontal line (always visible) */}
                  <rect
                    x="3"
                    y="8.25"
                    width="12"
                    height="1.5"
                    rx="0.75"
                    fill="white"
                  />
                  {/* Vertical/cross line (cross when open) */}
                  <rect
                    x="8.25"
                    y="3"
                    width="1.5"
                    height="12"
                    rx="0.75"
                    fill="white"
                    style={{
                      opacity: isOpen ? 1 : 1,
                      transform: isOpen ? "rotate(45deg)" : "scale(1)",
                      transition: "all 0.3s",
                      transformOrigin: "center",
                    }}
                  />
                  {/* When open, rotate vertical to make a cross (×) */}
                  {isOpen && (
                    <rect
                      x="8.25"
                      y="3"
                      width="1.5"
                      height="12"
                      rx="0.75"
                      fill="white"
                      style={{
                        opacity: 1,
                        transform: "rotate(-45deg)",
                        transition: "all 0.3s",
                        transformOrigin: "center",
                      }}
                    />
                  )}
                </svg>
              </span>
            </button>

            <div
              className={cn(
                "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
                isOpen ? "max-h-[400px] opacity-100 pb-6" : "max-h-0 opacity-0",
              )}
            >
              <p className="font-bricolage text-[15px] lg:text-[16px] leading-[1.75] text-white/50 pr-12">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
