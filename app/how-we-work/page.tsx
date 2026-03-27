import MasterLayout from "@/components/layout/MasterLayout";
import HowWeWorkContent from "@/components/how-we-work/HowWeWorkContent";

export default function HowWeWorkPage() {
  return (
    <>
      <MasterLayout
        backgroundImage="https://picsum.photos/seed/howwework-hero/1920/800?grayscale"
        heading="How We Work"
        description="From idea to execution — a structured, transparent process that keeps founders in control and products on track."
        ctaText="Get In Touch"
        ctaHref="/get-in-touch"
      />
      <HowWeWorkContent />
    </>
  );
}
