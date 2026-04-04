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
          <h1 className="font-archivo font-medium text-[36px] sm:text-[48px] md:text-[64px] lg:text-[56px] xl:text-[64px] 2xl:text-[64px] min-[1800px]:text-[80px] leading-[1.09] text-white capitalize mb-6 animate-hero-heading">
            Trusted Execution. Real Business Impact.
          </h1>
          <p className="font-bricolage text-[16px] sm:text-[18px] md:text-[22px] lg:text-[20px] xl:text-[22px] min-[1800px]:text-[24px] leading-[1.25] text-white mb-8 md:mb-10 max-w-[600px] animate-hero-text">
            As a business consulting company and technology consulting company,
            we help founders and businesses turn ideas into structured, scalable
            solutions, backed by clarity, execution, and long-term thinking.
          </p>
          <div className="animate-hero-cta">
            <PrimaryButton as="a" href="/get-in-touch">
              Let&apos;s Build What Matters
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
