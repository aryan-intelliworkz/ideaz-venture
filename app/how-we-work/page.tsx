import MasterLayout from "@/components/layout/MasterLayout";
import HowWeWorkContent from "@/components/how-we-work/HowWeWorkContent";

export default function HowWeWorkPage() {
  return (
    <>
      <MasterLayout
        backgroundImage="/assets/whoWeAreBg.png"
        heading="A Clear Process To Build, Launch, And Scale Products"
        description="Our business consulting process is built as a structured business consulting framework, helping founders move from idea to scale with clarity, speed, and disciplined execution."
        ctaText="Book an Idea Discovery Call"
        ctaHref="/get-in-touch"
      />
      <HowWeWorkContent />
    </>
  );
}
