import MasterLayout from "@/components/layout/MasterLayout";
import HowWeWorkContent from "@/components/how-we-work/HowWeWorkContent";

export default function HowWeWorkPage() {
  return (
    <>
      <MasterLayout
        backgroundImage="/assets/whoWeAreBg.png"
        heading="A Clear Process To Build, Launch, And Scale Products"
        description="We follow a structured yet flexible product development process that helps founders move from idea to launch with clarity, speed, and confidence — without unnecessary complexity."
        ctaText="Book an Idea Discovery Call"
        ctaHref="/get-in-touch"
      />
      <HowWeWorkContent />
    </>
  );
}
