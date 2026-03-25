import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero/HeroHome.png"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/70 via-transparent to-bg-primary" />
      </div>

      {/* Large background "TRUST" text */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none overflow-hidden pb-[5%]">
        <span className="font-syne font-bold text-[120px] md:text-[200px] lg:text-[260px] text-white/15 tracking-tight leading-none">
          TR&nbsp;&nbsp;UST
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
            className="inline-flex items-center px-8 py-3 border border-white/30 font-bricolage text-[16px] text-white hover:bg-white/10 transition-colors duration-200"
          >
            Let&apos;s Grow Together
          </Link>
        </div>
      </div>
    </section>
  );
}
