"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ServiceFAQ } from "@/lib/services-data";

export default function FAQAccordion({ faqs }: { faqs: ServiceFAQ[] }) {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div className="max-w-[900px] mx-auto">
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

              {/* Plus / Minus icon */}
              <span
                className={cn(
                  "w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300",
                  isOpen
                    ? "border-[#EC1C24] bg-[#EC1C24]/10 rotate-0"
                    : "border-white/20 rotate-0",
                )}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-300"
                >
                  <path
                    d="M2 7H12"
                    stroke={isOpen ? "#EC1C24" : "white"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 2V12"
                    stroke={isOpen ? "#EC1C24" : "white"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className={cn(
                      "transition-all duration-300 origin-center",
                      isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100",
                    )}
                  />
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
