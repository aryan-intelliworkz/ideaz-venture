import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/get-in-touch/ContactForm";

export const metadata: Metadata = {
  title: "Get In Touch — Ideaz Ventures",
  description:
    "Contact Ideaz Ventures. Let's discuss your startup vision and how we can help you build, launch, and scale.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@ideazventures.com",
    href: "mailto:hello@ideazventures.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Mumbai, Maharashtra, India",
    href: "#",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri, 10:00 AM - 7:00 PM IST",
    href: "#",
  },
];

export default function GetInTouchPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="max-w-[900px]">
            <p className="font-bricolage text-[14px] text-red uppercase tracking-wider mb-4">
              Contact
            </p>
            <h1 className="font-archivo font-medium text-[48px] lg:text-[80px] leading-[1.09] text-white capitalize mb-6">
              Get In Touch
            </h1>
            <p className="font-bricolage text-[20px] lg:text-[24px] leading-[1.25] text-gray-400 max-w-[700px]">
              Have a project in mind? Let&apos;s talk about how we can help you
              build something exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Contact info */}
            <div className="lg:w-[400px] shrink-0">
              <h2 className="font-archivo font-medium text-[28px] leading-[1.2] text-white capitalize mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/30 transition-colors">
                      <item.icon size={20} className="text-red" />
                    </div>
                    <div>
                      <p className="font-bricolage text-[14px] text-gray-500 mb-1">
                        {item.label}
                      </p>
                      <p className="font-bricolage text-[18px] text-white group-hover:text-red transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="flex-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
