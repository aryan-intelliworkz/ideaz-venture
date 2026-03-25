"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form data:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-white/10 p-12 text-center">
        <div className="w-16 h-16 rounded-full gradient-brand flex items-center justify-center mx-auto mb-6">
          <Send size={24} className="text-white" />
        </div>
        <h3 className="font-archivo font-medium text-[28px] text-white capitalize mb-3">
          Message Sent!
        </h3>
        <p className="font-bricolage text-[18px] text-gray-400">
          Thank you for reaching out. We&apos;ll get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="font-archivo font-medium text-[28px] leading-[1.2] text-white capitalize mb-6">
        Send Us a Message
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-bricolage text-[14px] text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-bricolage text-[16px] focus:outline-none focus:border-red transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block font-bricolage text-[14px] text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-bricolage text-[16px] focus:outline-none focus:border-red transition-colors"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-bricolage text-[14px] text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-bricolage text-[16px] focus:outline-none focus:border-red transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label className="block font-bricolage text-[14px] text-gray-300 mb-2">
            Company Name
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, company: e.target.value }))
            }
            className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-bricolage text-[16px] focus:outline-none focus:border-red transition-colors"
            placeholder="Acme Inc."
          />
        </div>
      </div>

      <div>
        <label className="block font-bricolage text-[14px] text-gray-300 mb-2">
          Your Message *
        </label>
        <textarea
          required
          rows={6}
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-bricolage text-[16px] focus:outline-none focus:border-red transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 px-8 py-4 gradient-brand text-white font-bricolage text-[18px] hover:opacity-90 transition-opacity"
      >
        Send Message <Send size={18} />
      </button>
    </form>
  );
}
