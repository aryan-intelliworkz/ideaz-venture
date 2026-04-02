import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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

      <div className="relative mx-auto max-w-[1920px] w-full px-6 md:px-8 lg:px-[160px] py-16 md:py-20">
        <div className="max-w-[800px]">
          <h1 className="font-archivo font-medium text-[36px] sm:text-[48px] md:text-[64px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px] min-[1800px]:text-[80px] leading-[1.09] text-white capitalize mb-6 animate-hero-heading">
            Place your trust in us
          </h1>
          <p className="font-bricolage text-[16px] sm:text-[18px] md:text-[22px] lg:text-[20px] xl:text-[22px] min-[1800px]:text-[24px] leading-[1.25] text-white mb-8 md:mb-10 max-w-[600px] animate-hero-text">
            We believe the best work comes from a foundation of mutual respect.
            Our team is here to listen to your vision and provide the
            thoughtful, reliable guidance your brand deserves.
          </p>
          <div className="animate-hero-cta">
            <PrimaryButton as="a" href="/get-in-touch">
              Let&apos;s Grow Together
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
