"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Tab Definitions ─── */
const tabs = [
  "Build a Venture",
  "General Inquiry",
  "Discuss Your Business Idea",
  "Join Our Team",
] as const;

type TabKey = (typeof tabs)[number];

/* ─── Per-tab form field config ─── */
interface FieldConfig {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  placeholder: string;
  options?: string[];
  half?: boolean;
  required?: boolean;
}

const tabFields: Record<TabKey, FieldConfig[]> = {
  "Build a Venture": [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
      half: true,
      required: true,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
      half: true,
      required: true,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your Phone number",
      half: true,
    },
    {
      name: "email",
      label: "Email ID",
      type: "email",
      placeholder: "Enter your email ID",
      half: true,
      required: true,
    },
    {
      name: "stage",
      label: "What Stage Are You In?",
      type: "select",
      placeholder: "Select the option",
      half: true,
      options: [
        "Idea Stage",
        "Validation Stage",
        "MVP Stage",
        "Growth Stage",
        "Scaling Stage",
      ],
    },
    {
      name: "timeline",
      label: "Timeline",
      type: "text",
      placeholder: "Please add timeline",
      half: true,
    },
    {
      name: "idea",
      label: "Briefly Describe Your Idea",
      type: "textarea",
      placeholder: "Please describe idea here",
    },
  ],
  "General Inquiry": [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
      half: true,
      required: true,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
      half: true,
      required: true,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your Phone number",
      half: true,
    },
    {
      name: "email",
      label: "Email ID",
      type: "email",
      placeholder: "Enter your email ID",
      half: true,
      required: true,
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      placeholder: "What is this regarding?",
      half: false,
    },
    {
      name: "message",
      label: "Your Message",
      type: "textarea",
      placeholder: "Tell us more about your inquiry...",
    },
  ],
  "Discuss Your Business Idea": [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
      half: true,
      required: true,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
      half: true,
      required: true,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your Phone number",
      half: true,
    },
    {
      name: "email",
      label: "Email ID",
      type: "email",
      placeholder: "Enter your email ID",
      half: true,
      required: true,
    },
    {
      name: "industry",
      label: "Industry",
      type: "select",
      placeholder: "Select your industry",
      half: true,
      options: [
        "Fintech",
        "Healthcare",
        "E-Commerce",
        "EdTech",
        "SaaS",
        "Real Estate",
        "Other",
      ],
    },
    {
      name: "budget",
      label: "Estimated Budget",
      type: "select",
      placeholder: "Select budget range",
      half: true,
      options: [
        "Under $10K",
        "$10K - $50K",
        "$50K - $100K",
        "$100K - $500K",
        "$500K+",
      ],
    },
    {
      name: "idea",
      label: "Describe Your Business Idea",
      type: "textarea",
      placeholder: "Tell us about your business idea...",
    },
  ],
  "Join Our Team": [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
      half: true,
      required: true,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
      half: true,
      required: true,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your Phone number",
      half: true,
    },
    {
      name: "email",
      label: "Email ID",
      type: "email",
      placeholder: "Enter your email ID",
      half: true,
      required: true,
    },
    {
      name: "role",
      label: "Role You're Interested In",
      type: "select",
      placeholder: "Select a role",
      half: true,
      options: [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "UI/UX Designer",
        "Project Manager",
        "DevOps Engineer",
        "Other",
      ],
    },
    {
      name: "experience",
      label: "Years of Experience",
      type: "select",
      placeholder: "Select experience",
      half: true,
      options: ["0-1 Years", "1-3 Years", "3-5 Years", "5-8 Years", "8+ Years"],
    },
    {
      name: "about",
      label: "Tell Us About Yourself",
      type: "textarea",
      placeholder: "Share your experience and why you'd like to join...",
    },
  ],
};

const inputClasses =
  "w-full px-4 py-3 bg-transparent border-b border-white/[0.12] text-white font-bricolage text-[14px] md:text-[15px] focus:outline-none focus:border-[#EC1C24] transition-colors placeholder:text-white/25";

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState<TabKey>("Build a Venture");
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form data:", { tab: activeTab, ...formData });
    setSubmitted(true);
  };

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    setFormData({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="border border-white/10 rounded-[4px] p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-[#EC1C24]/10 border border-[#EC1C24]/30 flex items-center justify-center mx-auto mb-6">
          <Send size={24} className="text-[#EC1C24]" />
        </div>
        <h3 className="font-archivo font-medium text-[28px] text-white capitalize mb-3">
          Message Sent!
        </h3>
        <p className="font-bricolage text-[16px] text-white/50 mb-6">
          Thank you for reaching out. We&apos;ll get back to you within 24
          hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({});
          }}
          className="font-bricolage text-[14px] text-[#EC1C24] underline underline-offset-4 hover:text-white transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  const fields = tabFields[activeTab];

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 md:gap-0 border-b border-white/[0.08] mb-8 lg:mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={cn(
              "px-4 md:px-6 py-3 font-archivo text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[1.3] transition-colors whitespace-nowrap cursor-pointer",
              activeTab === tab
                ? "text-[#EC1C24] border-b-2 border-[#EC1C24] -mb-px"
                : "text-white/40 hover:text-white/70",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-6 lg:gap-y-8">
          {fields.map((field) => {
            const isFullWidth = !field.half || field.type === "textarea";
            return (
              <div
                key={field.name}
                className={isFullWidth ? "md:col-span-2" : ""}
              >
                <label className="block font-archivo text-[13px] md:text-[14px] text-white/70 mb-2">
                  {field.label}
                  {field.required && " *"}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    required={field.required}
                    rows={3}
                    value={formData[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className={cn(inputClasses, "resize-none")}
                    placeholder={field.placeholder}
                  />
                ) : field.type === "select" ? (
                  <select
                    value={formData[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className={cn(
                      inputClasses,
                      "appearance-none bg-transparent",
                      !formData[field.name] && "text-white/25",
                    )}
                  >
                    <option
                      value=""
                      disabled
                      className="bg-[#0a0a0a] text-white/25"
                    >
                      {field.placeholder}
                    </option>
                    {field.options?.map((opt) => (
                      <option
                        key={opt}
                        value={opt}
                        className="bg-[#0a0a0a] text-white"
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    required={field.required}
                    value={formData[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className={inputClasses}
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            );
          })}
        </div>

        <button
          type="submit"
          className="mt-8 lg:mt-10 inline-flex items-center gap-2 px-8 py-3 border border-[#EC1C24] text-[#EC1C24] font-bricolage text-[15px] hover:bg-[#EC1C24]/10 transition-colors cursor-pointer rounded-[4px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
