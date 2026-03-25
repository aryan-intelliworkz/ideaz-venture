import type { Metadata } from "next";
import { ArrowRight, Users, Target, Lightbulb, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Are — Ideaz Ventures",
  description:
    "Learn about Ideaz Ventures — our mission, values, and the team behind startup execution backed by experience.",
};

const values = [
  {
    icon: Target,
    title: "Execution First",
    description:
      "We believe that ideas without execution are worthless. Our entire model is built around turning concepts into reality with speed and precision.",
  },
  {
    icon: Users,
    title: "Founder-Centric",
    description:
      "Every decision we make is designed to serve the founder's vision. We adapt our processes to your needs, not the other way around.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Clarity",
    description:
      "We bring structure to ambiguity. Our frameworks help founders navigate uncertainty with clear, actionable roadmaps.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description:
      "We engineer products and systems that scale. No shortcuts, no technical debt traps — just solid, maintainable foundations.",
  },
];

const team = [
  {
    name: "Founding Team",
    role: "Strategy & Operations",
    bio: "Decades of combined experience across startup building, enterprise technology, and venture operations.",
  },
  {
    name: "Engineering Team",
    role: "Product Development",
    bio: "Full-stack engineers with expertise in modern web, mobile, cloud, and AI technologies.",
  },
  {
    name: "Design Team",
    role: "Branding & UX",
    bio: "Creative professionals who transform complex requirements into intuitive, beautiful user experiences.",
  },
  {
    name: "Advisory Board",
    role: "Strategic Guidance",
    bio: "Industry veterans and investors who provide strategic insights and connections.",
  },
];

export default function WhoWeArePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="max-w-[900px]">
            <p className="font-bricolage text-[14px] text-red uppercase tracking-wider mb-4">
              About Us
            </p>
            <h1 className="font-archivo font-medium text-[48px] lg:text-[80px] leading-[1.09] text-white capitalize mb-6">
              Who We Are
            </h1>
            <p className="font-bricolage text-[20px] lg:text-[24px] leading-[1.25] text-gray-400 max-w-[700px]">
              We are a venture execution studio that partners with founders to
              build, launch, and scale technology-driven startups.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="flex-1">
              <h2 className="font-archivo font-medium text-[32px] lg:text-[40px] leading-[1.2] text-white capitalize mb-6">
                Our Mission
              </h2>
              <div className="space-y-4">
                <p className="font-bricolage text-[18px] leading-[1.44] text-gray-400">
                  At Ideaz Ventures, we exist to bridge the gap between startup
                  ambition and execution reality. Too many great ideas fail not
                  because they lack merit, but because they lack the structured
                  execution needed to bring them to market.
                </p>
                <p className="font-bricolage text-[18px] leading-[1.44] text-gray-400">
                  We combine strategic thinking with hands-on technical
                  execution to help founders navigate every stage of the startup
                  journey — from initial validation to sustainable scale.
                </p>
                <p className="font-bricolage text-[18px] leading-[1.44] text-gray-400">
                  Our track record includes ventures that have achieved
                  multi-crore exits, scaled to thousands of users across 15+
                  countries, and managed hundreds of thousands of products in
                  industrial settings.
                </p>
              </div>
            </div>
            <div className="flex-1 relative min-h-[400px] bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <span className="font-archivo font-medium text-[80px] lg:text-[120px] leading-none gradient-brand-text">
                  IV
                </span>
                <p className="mt-4 font-bricolage text-[18px] text-gray-500">
                  Ideaz Ventures
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <h2 className="font-archivo font-medium text-[32px] lg:text-[40px] leading-[1.2] text-white capitalize mb-4 text-center">
            What Drives Us
          </h2>
          <p className="font-bricolage text-[18px] text-gray-400 text-center max-w-[600px] mx-auto mb-16">
            Our core values shape every engagement and guide how we work with
            founders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="border border-white/10 p-8 hover:border-white/20 transition-colors group"
              >
                <value.icon
                  size={32}
                  className="text-red mb-6 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-archivo font-medium text-[24px] leading-[1.2] text-white capitalize mb-3">
                  {value.title}
                </h3>
                <p className="font-bricolage text-[16px] leading-[1.5] text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <h2 className="font-archivo font-medium text-[32px] lg:text-[40px] leading-[1.2] text-white capitalize mb-4 text-center">
            Our Team
          </h2>
          <p className="font-bricolage text-[18px] text-gray-400 text-center max-w-[600px] mx-auto mb-16">
            A multidisciplinary team united by a passion for building great
            products.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="border border-white/10 p-8 hover:border-white/20 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red/20 to-blue-purple/20 mb-6 flex items-center justify-center">
                  <Users size={24} className="text-white/60" />
                </div>
                <h3 className="font-archivo font-medium text-[20px] leading-[1.2] text-white mb-1">
                  {member.name}
                </h3>
                <p className="font-bricolage text-[14px] text-red mb-4">
                  {member.role}
                </p>
                <p className="font-bricolage text-[16px] leading-[1.5] text-gray-400">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
          <div className="border border-white/10 p-12 lg:p-20 text-center">
            <h2 className="font-archivo font-medium text-[32px] lg:text-[40px] leading-[1.2] text-white capitalize mb-4">
              Want to Work With Us?
            </h2>
            <p className="font-bricolage text-[18px] text-gray-400 mb-8 max-w-[500px] mx-auto">
              We&apos;re always looking for ambitious founders with ideas worth
              building.
            </p>
            <Link
              href="/get-in-touch"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-brand text-white font-bricolage text-[18px] hover:opacity-90 transition-opacity"
            >
              Get In Touch <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
