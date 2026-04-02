import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface MasterLayoutProps {
  backgroundImage: string;
  heading: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function MasterLayout({
  backgroundImage,
  heading,
  description,
  ctaText,
  ctaHref = "/get-in-touch",
}: MasterLayoutProps) {
  return (
    <section className="relative w-full min-h-[360px] md:min-h-[420px] lg:min-h-[520px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        className="object-cover object-center"
        quality={90}
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1920px] w-full px-6 md:px-8 lg:px-[160px] py-12 md:py-16 lg:py-24 flex flex-col items-center text-center">
        <h1 className="animate-hero-heading font-archivo font-medium text-[32px] sm:text-[40px] md:text-[56px] lg:text-[60px] xl:text-[66px] min-[1800px]:text-[80px] leading-[1.1] text-white mb-5 lg:mb-6">
          {heading}
        </h1>

        <p className="animate-hero-text font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.6] text-white/70 max-w-[720px] mb-8 lg:mb-10">
          {description}
        </p>

        {ctaText && (
          <div className="animate-hero-cta">
            <PrimaryButton as="a" href={ctaHref}>
              {ctaText}
            </PrimaryButton>
          </div>
        )}
      </div>
    </section>
  );
}
