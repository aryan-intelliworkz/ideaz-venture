import Link from "next/link";
import { ArrowUpRight, Phone, Mail } from "lucide-react";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Who we are", href: "/who-we-are" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Get In Touch", href: "/get-in-touch" },
];

const serviceLinks = [
  { label: "Startup Consulting", href: "/#services" },
  { label: "Startup Product Development", href: "/#services" },
  { label: "Branding & GTM Support", href: "/#services" },
  { label: "Investor Readiness Support", href: "/#services" },
  { label: "Post-Launch Support", href: "/#services" },
  { label: "Managed Operations", href: "/#services" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505]">
      <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px] py-12 lg:py-16">
        {/* Top Card */}
        <div className="border border-white/[0.08] rounded-[4px] flex flex-col lg:flex-row overflow-hidden">
          {/* Left — Image Block */}
          <div className="relative lg:w-[30%] min-h-[250px] lg:min-h-[320px] bg-[#0a0a0a] overflow-hidden">
            {/* Placeholder glow effect mimicking the tech orb image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[#EC1C24]/30 via-[#2E3191]/20 to-transparent blur-[60px]" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h3 className="absolute top-6 left-6 font-archivo font-bold italic text-white text-[28px] lg:text-[32px] leading-[1.2] max-w-[260px]">
              Lorem Ipsum
              <br />
              Dolor Sit Amet
            </h3>
          </div>

          {/* Dashed Divider */}
          <div className="hidden lg:block w-px border-l border-dashed border-white/[0.15]" />

          {/* Right — Quick Links */}
          <div className="flex-1 p-8 lg:p-10 xl:p-12">
            <h2 className="font-archivo font-light text-white/40 text-[36px] lg:text-[48px] leading-[1.1] mb-8 lg:mb-10">
              Quick Links
            </h2>

            {/* Page Links Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-4 mb-6 lg:mb-8">
              {pageLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between gap-2 pb-2 border-b border-white/[0.12] font-bricolage text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    size={14}
                    className="shrink-0 text-white/40 group-hover:text-white transition-colors"
                  />
                </Link>
              ))}
            </div>

            {/* Service Links Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-4">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between gap-2 pb-2 border-b border-white/[0.12] font-bricolage text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    size={14}
                    className="shrink-0 text-white/40 group-hover:text-white transition-colors"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mt-12 lg:mt-16 items-start">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logo.svg"
                alt="Ideaz Ventures"
                className="h-[80px] lg:h-[120px] w-auto"
              />
            </Link>
          </div>

          {/* Description & Contact */}
          <div className="flex-1">
            <p className="font-bricolage text-[14px] lg:text-[16px] leading-[1.7] text-white/50 mb-8 max-w-[800px]">
              Lorem ipsum dolor sit amet consectetur. Nisl arcu sit ultricies
              lacus eget. Ullamcorper sit enim in ultrices sollicitudin. Etiam
              tristique diam nisi quis metus. Mi arcu magna posuere odio auctor.
              Odio feugiat maecenas sed risus sapien et lectus velit. Faucibus
              ac ut faucibus id sit. Fermentum orci eu diam at purus consequat
              egestas mauris ut. Lorem ipsum dolor sit amet consectetur. Nisl
              arcu sit ultricies lacus eget.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <a
                href="tel:+919737045567"
                className="flex items-center gap-2 font-bricolage text-[14px] text-white/70 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-white/50" />
                <span>+91 97370 45567</span>
              </a>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <a
                href="mailto:hello@ideaz.ventures"
                className="flex items-center gap-2 font-bricolage text-[14px] text-white/70 hover:text-white transition-colors"
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
