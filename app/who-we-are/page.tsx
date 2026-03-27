import type { Metadata } from "next";
import MasterLayout from "@/components/layout/MasterLayout";
import WhoWeAreContent from "@/components/who-we-are/WhoWeAreContent";

export const metadata: Metadata = {
  title: "Who We Are — Ideaz Ventures",
  description:
    "Learn about Ideaz Ventures — our mission, values, and the team behind startup execution backed by experience.",
};

export default function WhoWeArePage() {
  return (
    <>
      <MasterLayout
        backgroundImage="/assets/whoWeAreBg.png"
        heading="Who We Are"
        description="Backed by the engineering foundation of Intelliworkz, we combine startup agility with enterprise-grade discipline — ensuring every product we build is reliable, scalable, and ready for growth."
        ctaText="Contact us"
        ctaHref="/get-in-touch"
      />
      <WhoWeAreContent />
    </>
  );
}
