"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import type { ServiceFAQ } from "@/lib/services-data";

export default function FAQAccordion({ faqs }: { faqs: ServiceFAQ[] }) {
  return (
    <div className="max-w-[800px] mx-auto flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <FAQItem key={i} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/[0.08] rounded-[4px] bg-[#0a0a0a] overflow-hidden transition-colors hover:border-white/[0.12]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
      >
        <span className="font-archivo font-medium text-[15px] md:text-[16px] lg:text-[17px] text-white leading-[1.3]">
          {question}
        </span>
        <FiChevronDown
          className={`shrink-0 text-white/40 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 md:px-6 pb-5 md:pb-6 font-bricolage text-[13px] md:text-[14px] lg:text-[15px] leading-[1.7] text-white/50">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
