"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/" },
  { label: "Who we are", href: "/who-we-are" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Get In Touch", href: "/get-in-touch" },
];

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobile = useCallback(() => setMobileOpen((prev) => !prev), []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-[1920px] flex items-center justify-between px-8 lg:px-[160px] h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo.svg"
            alt="Ideaz Ventures"
            className="h-[40px] w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-bricolage text-[18px] leading-[1.2] transition-colors duration-200 relative",
                  isActive ? "text-white" : "text-white/70 hover:text-white",
                )}
              >
                {link.label}
                {isActive && link.href === "/" && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-red" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <button
          onClick={onOpenModal}
          className="hidden lg:flex items-center px-6 py-3 border border-white/20 rounded-none font-bricolage text-[18px] text-white bg-bg-primary hover:bg-white/5 transition-colors duration-200"
        >
          Book Strategy Call
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobile}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[72px] bg-bg-primary z-40 transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-bricolage text-[24px] text-white hover:text-red transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenModal();
            }}
            className="mt-4 px-6 py-4 border border-white/20 font-bricolage text-[18px] text-white bg-bg-primary hover:bg-white/5 transition-colors"
          >
            Book Strategy Call
          </button>
        </div>
      </div>
    </nav>
  );
}
