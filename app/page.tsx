import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import TechStack from "@/components/home/TechStack";
import ServicesSection from "@/components/home/ServicesSection";
import DigitalProducts from "@/components/home/DigitalProducts";
import ExecutionFramework from "@/components/home/ExecutionFramework";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import InsightsPreview from "@/components/home/InsightsPreview";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Decorative glow ellipses from Figma */}
      <div className="absolute top-[920px] left-0 w-[400px] h-[400px] rounded-full bg-red/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-[920px] right-0 w-[400px] h-[400px] rounded-full bg-blue-purple/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-[4000px] left-0 w-[400px] h-[400px] rounded-full bg-red/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-[4000px] right-0 w-[400px] h-[400px] rounded-full bg-blue-purple/5 blur-[150px] pointer-events-none" />

      <HeroSection />
      <StatsSection />
      <TechStack />
      <ServicesSection />
      <DigitalProducts />
      <ExecutionFramework />
      <CaseStudiesPreview />
      {/* <InsightsPreview /> */}
      <CTASection />
    </div>
  );
}
