import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background images from Figma */}
      <div className="absolute inset-0 bg-bg-primary">
        <Image
          src="/assets/hero/hero-bg-left.png"
          alt=""
          fill
          className="object-cover object-left opacity-40"
          priority
          aria-hidden="true"
        />
        <Image
          src="/assets/hero/hero-bg-right.png"
          alt=""
          fill
          className="object-cover object-right opacity-40"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/60 to-bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-transparent to-bg-primary" />
      </div>

      {/* Large background text - "TR UST" and "US" positioned per Figma */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <span
          className="absolute font-syne font-bold text-[80px] lg:text-[120px] text-white/20 whitespace-nowrap"
          style={{
            left: "51%",
            top: "60%",
            transform: "translateY(-50%)",
            filter: "blur(2px)",
          }}
        >
          TR UST
        </span>
        <span
          className="absolute font-syne font-bold text-[80px] lg:text-[120px] text-white/20 whitespace-nowrap"
          style={{
            left: "62.2%",
            top: "60%",
            transform: "translateY(-50%)",
            filter: "blur(2px)",
          }}
        >
          US
        </span>
      </div>

      <div className="relative mx-auto max-w-[1920px] w-full px-8 lg:px-[160px] py-20">
        <div className="max-w-[800px]">
          <h1 className="font-archivo font-medium text-[48px] md:text-[64px] lg:text-[80px] leading-[1.09] text-white capitalize mb-6">
            Place your trust in us
          </h1>
          <p className="font-bricolage text-[18px] md:text-[24px] leading-[1.25] text-white mb-10 max-w-[600px]">
            We believe the best work comes from a foundation of mutual respect.
            Our team is here to listen to your vision and provide the
            thoughtful, reliable guidance your brand deserves.
          </p>
          <Link
            href="/get-in-touch"
            className="inline-flex items-center gap-2 px-[54px] py-2 border border-white/20 font-bricolage text-[18px] text-white bg-bg-primary hover:bg-white/5 transition-colors duration-200"
          >
            Let&apos;s Grow Together
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
