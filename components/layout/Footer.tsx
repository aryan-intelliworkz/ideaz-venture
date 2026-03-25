import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const footerLinks = {
  services: [
    { label: "Startup Consulting", href: "/#services" },
    { label: "Product Development", href: "/#services" },
    { label: "Branding & GTM", href: "/#services" },
    { label: "Investor Readiness", href: "/#services" },
    { label: "Post-Launch Support", href: "/#services" },
    { label: "Managed Operations", href: "/#services" },
  ],
  company: [
    { label: "Who We Are", href: "/who-we-are" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "Get In Touch", href: "/get-in-touch" },
  ],
  resources: [
    { label: "Strategy & Validation", href: "/strategy-validation" },
    { label: "Book a Strategy Call", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-white/10">
      <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px] py-16 lg:py-24">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="max-w-[400px]">
            <Link href="/" className="inline-block mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logo.svg"
                alt="Ideaz Ventures"
                className="h-[48px] w-auto"
              />
            </Link>
            <p className="font-bricolage text-[18px] leading-[1.44] text-gray-400 mb-6">
              We help founders transform early concepts into market-ready
              products and scalable platforms.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
            <div>
              <h4 className="font-archivo font-medium text-[18px] text-white mb-6 uppercase tracking-wide">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-bricolage text-[16px] text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-archivo font-medium text-[18px] text-white mb-6 uppercase tracking-wide">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-bricolage text-[16px] text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-archivo font-medium text-[18px] text-white mb-6 uppercase tracking-wide">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-gray-400 mt-1 shrink-0" />
                  <span className="font-bricolage text-[16px] text-gray-400">
                    hello@ideazventures.com
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-gray-400 mt-1 shrink-0" />
                  <span className="font-bricolage text-[16px] text-gray-400">
                    +91 98765 43210
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-gray-400 mt-1 shrink-0" />
                  <span className="font-bricolage text-[16px] text-gray-400">
                    Mumbai, India
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-bricolage text-[14px] text-gray-500">
            © 2026 Ideaz Ventures. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="font-bricolage text-[14px] text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-bricolage text-[14px] text-gray-500 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
