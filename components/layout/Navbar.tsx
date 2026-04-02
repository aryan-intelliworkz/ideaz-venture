"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { useTheme } from "./ThemeProvider";

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
  const { theme, toggleTheme } = useTheme();

  const toggleMobile = useCallback(() => setMobileOpen((prev) => !prev), []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-bg backdrop-blur-md">
      <div className="mx-auto max-w-[1920px] flex items-center justify-between px-6 md:px-8 lg:px-[160px] h-[80px] xl:h-[90px] 2xl:h-[100px]">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo.svg"
            alt="Ideaz Ventures"
            className="h-[70px] w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-8 min-[1800px]:gap-[60px]">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative font-bricolage text-[14px] xl:text-[15px] 2xl:text-[16px] min-[1800px]:text-[18px] font-normal leading-[1.2] transition-all duration-300 flex items-center gap-2 nav-link",
                  isActive ? "nav-link-active" : "",
                )}
              >
                {link.label}
                {isActive && (
                  <span className="w-2 h-2 bg-red shrink-0 animate-[fadeScale_0.3s_ease-out]" />
                )}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[1px] bg-red transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop: Theme toggle + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center theme-toggle-btn transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-white/70" />
            ) : (
              <Moon size={18} className="text-gray-700" />
            )}
          </button>

          <PrimaryButton onClick={onOpenModal}>
            Book Strategy Call
          </PrimaryButton>
        </div>

        {/* Mobile: Theme toggle + Hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center theme-toggle-btn transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={16} className="text-white/70" />
            ) : (
              <Moon size={16} className="text-gray-700" />
            )}
          </button>
          <button
            onClick={toggleMobile}
            className="text-current p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[80px] mobile-menu-bg z-40 transition-transform duration-300",
          mobileOpen ? "translate-x-0 mobile-menu-open" : "translate-x-full",
        )}
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "font-bricolage text-[20px] sm:text-[22px] md:text-[24px] transition-colors flex items-center gap-3 nav-link mobile-nav-item",
                  isActive ? "nav-link-active" : "",
                )}
              >
                {link.label}
                {isActive && <span className="w-2 h-2 bg-red shrink-0" />}
              </Link>
            );
          })}
          <PrimaryButton
            onClick={() => {
              setMobileOpen(false);
              onOpenModal();
            }}
            className="mt-4 mobile-nav-cta"
          >
            Book Strategy Call
          </PrimaryButton>
        </div>
      </div>
    </nav>
  );
}
