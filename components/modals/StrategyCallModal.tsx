"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronRight, ChevronLeft, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StrategyCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  stage: string;
  services: string[];
  budget: string;
  timeline: string;
  description: string;
}

const stages = [
  "Idea Stage",
  "MVP Built",
  "Post-Launch",
  "Scaling",
  "Established Business",
];

const serviceOptions = [
  "Startup Consulting",
  "Product Development",
  "Branding & GTM",
  "Investor Readiness",
  "Post-Launch Support",
  "Managed Operations",
];

const budgetRanges = [
  "Under ₹5 Lakh",
  "₹5-15 Lakh",
  "₹15-50 Lakh",
  "₹50 Lakh - ₹1 Crore",
  "₹1 Crore+",
];

const timelines = [
  "Immediately",
  "Within 1 month",
  "1-3 months",
  "3-6 months",
  "Just exploring",
];

export default function StrategyCallModal({
  isOpen,
  onClose,
}: StrategyCallModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    stage: "",
    services: [],
    budget: "",
    timeline: "",
    description: "",
  });

  const totalSteps = 3;

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = () => {
    console.log("Strategy Call Form Data:", formData);
    setSubmitted(true);
  };

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      stage: "",
      services: [],
      budget: "",
      timeline: "",
      description: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-[640px] max-h-[90vh] overflow-y-auto bg-bg-primary border border-white/10 rounded-[16px]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="p-8 lg:p-12">
          {submitted ? (
            /* Success State */
            <div className="flex flex-col items-center text-center py-12">
              <div className="w-20 h-20 rounded-full gradient-brand flex items-center justify-center mb-6">
                <Check size={40} className="text-white" />
              </div>
              <h3 className="font-archivo font-medium text-[28px] md:text-[32px] lg:text-[40px] leading-[1.09] text-white mb-4 capitalize">
                Thank You!
              </h3>
              <p className="font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.44] text-gray-400 mb-8 max-w-[400px]">
                Your strategy call request has been submitted. Our team will
                reach out to you within 24 hours.
              </p>
              <button
                onClick={resetForm}
                className="px-8 py-4 gradient-brand text-white font-bricolage text-[15px] md:text-[16px] lg:text-[18px] hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-8">
                <h3 className="font-archivo font-medium text-[28px] md:text-[32px] lg:text-[40px] leading-[1.09] text-white mb-2 capitalize">
                  Book A Strategy Call
                </h3>
                <p className="font-bricolage text-[15px] md:text-[16px] lg:text-[18px] text-gray-400">
                  Tell us about your venture and we&apos;ll set up a call.
                </p>
              </div>

              {/* Step Indicator */}
              <div className="flex items-center gap-2 mb-8">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-1 flex-1 rounded-full transition-colors duration-300",
                      i + 1 <= step ? "bg-red" : "bg-white/10",
                    )}
                  />
                ))}
              </div>

              {/* Step Content */}
              {step === 1 && (
                <div className="space-y-6">
                  <p className="font-bricolage text-[13px] md:text-[14px] text-gray-300 uppercase tracking-wider mb-4">
                    Step 1 — Your Details
                  </p>
                  <div>
                    <label className="block font-bricolage text-[13px] md:text-[14px] text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-bricolage text-[15px] md:text-[16px] focus:outline-none focus:border-red transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block font-bricolage text-[13px] md:text-[14px] text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-bricolage text-[15px] md:text-[16px] focus:outline-none focus:border-red transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block font-bricolage text-[13px] md:text-[14px] text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-bricolage text-[15px] md:text-[16px] focus:outline-none focus:border-red transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block font-bricolage text-[13px] md:text-[14px] text-gray-300 mb-2">
                      Company / Venture Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-bricolage text-[15px] md:text-[16px] focus:outline-none focus:border-red transition-colors"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <p className="font-bricolage text-[13px] md:text-[14px] text-gray-300 uppercase tracking-wider mb-4">
                    Step 2 — Your Venture
                  </p>
                  <div>
                    <label className="block font-bricolage text-[13px] md:text-[14px] text-gray-300 mb-3">
                      What stage is your venture at? *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {stages.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => updateField("stage", s)}
                          className={cn(
                            "px-4 py-2 border font-bricolage text-[13px] md:text-[14px] transition-colors",
                            formData.stage === s
                              ? "border-red bg-red/10 text-white"
                              : "border-white/10 text-gray-400 hover:border-white/30",
                          )}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block font-bricolage text-[13px] md:text-[14px] text-gray-300 mb-3">
                      What services are you interested in? *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className={cn(
                            "px-4 py-2 border font-bricolage text-[13px] md:text-[14px] transition-colors",
                            formData.services.includes(s)
                              ? "border-red bg-red/10 text-white"
                              : "border-white/10 text-gray-400 hover:border-white/30",
                          )}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block font-bricolage text-[13px] md:text-[14px] text-gray-300 mb-3">
                      Budget Range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => updateField("budget", b)}
                          className={cn(
                            "px-4 py-2 border font-bricolage text-[13px] md:text-[14px] transition-colors",
                            formData.budget === b
                              ? "border-red bg-red/10 text-white"
                              : "border-white/10 text-gray-400 hover:border-white/30",
                          )}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <p className="font-bricolage text-[13px] md:text-[14px] text-gray-300 uppercase tracking-wider mb-4">
                    Step 3 — Project Details
                  </p>
                  <div>
                    <label className="block font-bricolage text-[13px] md:text-[14px] text-gray-300 mb-3">
                      When would you like to start? *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {timelines.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => updateField("timeline", t)}
                          className={cn(
                            "px-4 py-2 border font-bricolage text-[13px] md:text-[14px] transition-colors",
                            formData.timeline === t
                              ? "border-red bg-red/10 text-white"
                              : "border-white/10 text-gray-400 hover:border-white/30",
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block font-bricolage text-[13px] md:text-[14px] text-gray-300 mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        updateField("description", e.target.value)
                      }
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-bricolage text-[15px] md:text-[16px] focus:outline-none focus:border-red transition-colors resize-none"
                      placeholder="Briefly describe your project, goals, and any specific challenges you're facing..."
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                {step > 1 ? (
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    className="flex items-center gap-2 font-bricolage text-[15px] md:text-[16px] text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronLeft size={18} /> Previous
                  </button>
                ) : (
                  <div />
                )}
                {step < totalSteps ? (
                  <button
                    onClick={() => setStep((s) => s + 1)}
                    className="flex items-center gap-2 px-8 py-3 gradient-brand text-white font-bricolage text-[15px] md:text-[16px] hover:opacity-90 transition-opacity"
                  >
                    Next <ChevronRight size={18} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 px-8 py-3 gradient-brand text-white font-bricolage text-[15px] md:text-[16px] hover:opacity-90 transition-opacity"
                  >
                    Submit <Check size={18} />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
