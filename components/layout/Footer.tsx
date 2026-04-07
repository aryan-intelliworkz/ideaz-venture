import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, Mail } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Who we are", href: "/who-we-are" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Get In Touch", href: "/get-in-touch" },
  { label: "Startup Consulting", href: "/#services" },
  { label: "Startup Product Development", href: "/#services" },
  { label: "Branding & GTM Support", href: "/#services" },
  { label: "Investor Readiness Support", href: "/#services" },
  { label: "Post-Launch Support", href: "/#services" },
  { label: "Managed Operations", href: "/#services" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] font-bricolage text-white">
      <div className="mx-auto max-w-[1600px]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-0 border-t border-b border-white/10 rounded-none overflow-hidden">
          {/* Left: Heading + Image */}
          <div className="flex flex-col items-center md:items-start justify-center md:w-[30%] p-8 md:p-8 lg:p-8 border-r border-white/10">
            <h3 className="font-archivo font-semibold text-white text-[2.1rem] md:text-[2.3rem] lg:text-[2.5rem] leading-tight mb-6 md:mb-8 text-left w-full">
              Build right. Launch strong. Scale smart.
            </h3>
            <div className="w-full flex justify-center md:justify-start">
              <Image
                src="/assets/FooterImg.png"
                alt="Footer visual"
                width={340}
                height={220}
                className="object-contain rounded-none max-w-full h-auto"
                priority
              />
            </div>
          </div>
          {/* Right: Quick Links */}
          <div className="flex-1 p-8 md:p-8 lg:p-8 flex flex-col justify-center">
            <h2 className="font-archivo font-light text-gray-300 text-[2.1rem] md:text-[2.3rem] lg:text-[2.5rem] leading-tight mb-8 text-left">
              Quick Links
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-8 gap-y-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 pb-1 border-b border-white/15 hover:border-white/40 font-bricolage text-[1rem] md:text-[1.08rem] text-white/80 hover:text-white transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-[1rem] ml-1 group-hover:text-white/90 transition-colors">
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-start border-white/10 pt-8 px-0 md:px-8">
          {/* Left: Logo */}
          <div className="mb-6 md:mb-0 md:mr-10 flex-shrink-0 opacity-60">
            <Image
              src="/assets/FooterLogo.png"
              alt="Ideaz Ventures Logo"
              height={180}
              width={400}
              className="w-100 h-auto"
              priority
            />
          </div>
          {/* Right: Text + Contact */}
          <div className="flex-1 w-full flex flex-col items-start">
            <p className="text-[0.98rem] md:text-[1.05rem] text-white/50 mb-4 max-w-2xl">
              Ideaz Ventures is an execution partner for founders and businesses
              building scalable digital products. We combine strategy,
              engineering, and operational clarity to help you move from idea to
              launch and beyond. From early validation to post-launch growth,
              our focus remains on building systems that perform, scale, and
              deliver real business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8">
              <a
                href="tel:+919737045567"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-[1rem]"
              >
                <Phone size={16} className="text-white/50" />
                <span>+91 97370 45567</span>
              </a>
              <span className="hidden sm:block w-px h-4 bg-white/20" />
              <a
                href="mailto:hello@ideaz.ventures"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-[1rem]"
              >
                <Mail size={16} className="text-white/50" />
                <span>hello@ideaz.ventures</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
