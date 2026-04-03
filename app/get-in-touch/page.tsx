import type { Metadata } from "next";
import Image from "next/image";
import MasterLayout from "@/components/layout/MasterLayout";
import RevealSection from "@/components/ui/RevealSection";
import ContactForm from "@/components/get-in-touch/ContactForm";

export const metadata: Metadata = {
  title: "Get In Touch — Ideaz Ventures",
  description:
    "Whether you're validating an idea, building a product, or scaling a team — we're here to help you move forward with clarity and execution.",
};

const offices = [
  {
    country: "USA",
    image: "/assets/OurCore1.png",
    address: "531, Manitior Street, Lorem Center 465125.",
    phone: "+1 814 990 2395",
    email: "usa@ideaz.ventures",
  },
  {
    country: "UAE",
    image: "/assets/OurCore2.png",
    address:
      "Office No.25, 12th Floor, Al Saqar Business Tower, Hall of Museum of the Future, Sheikh Zayed Road, Dubai, UAE.",
    phone: "+971 56 345 1362",
    email: "",
  },
  {
    country: "India",
    image: "/assets/OurCore3.png",
    address:
      "Block-B, B90-A, World Trade Tower, Near SMM Showroom, SG Highway, Ahmedabad – 380015, Gujarat, India.",
    phone: "+91 01570 45087",
    email: "hello@ideaz.ventures",
  },
];

export default function GetInTouchPage() {
  return (
    <>
      {/* Hero */}
      <MasterLayout
        backgroundImage="/assets/whoWeAreBg.png"
        heading="Get In Touch"
        description="Whether you're validating an idea, building a product, or scaling a team — we're here to help you move forward with clarity and execution."
        ctaText=""
      />

      {/* Arrow Section + Form */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          {/* Arrow heading + description row */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mb-10 md:mb-12 lg:mb-16">
            {/* Left — arrow + heading */}
            <RevealSection className="reveal-slide-left" threshold={0.1}>
              <div className="flex items-start gap-4 lg:w-[40%] shrink-0">
                <svg
                  width="40"
                  height="20"
                  viewBox="0 0 40 20"
                  fill="none"
                  className="mt-2 shrink-0"
                >
                  <path
                    d="M0 10H36M36 10L28 2M36 10L28 18"
                    stroke="#EC1C24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h2 className="font-archivo font-medium text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[1.15] text-white">
                  Let&apos;s Start Building
                  <br />
                  Something That Scales.
                </h2>
              </div>
            </RevealSection>

            {/* Right — description */}
            <RevealSection className="reveal-slide-right" threshold={0.1}>
              <div className="lg:w-[60%]">
                <p className="font-bricolage text-[14px] md:text-[15px] leading-[1.7] text-white/50">
                  Lorem ipsum dolor sit amet consectetur. Nisl arcu sit
                  ultricies lacus eget. Ullamcorper sit enim in ultricies
                  sollicitudin. Etiam tristique diam nisi quis metus. Mi arcu
                  magna posuere odio auctor. Odio feugiat maecenas sed risus
                  sapien et lectus velit. Faucibus ac ut faucibus id sit.
                  Fermentum orci eu diam at purus consequat egestas mauris ut.
                </p>
                <p className="font-bricolage text-[14px] md:text-[15px] leading-[1.7] text-white/50 mt-3">
                  Choose the option that best fits your goal — we&apos;ll
                  connect you with the right team.
                </p>
              </div>
            </RevealSection>
          </div>

          {/* Tabbed Contact Form */}
          <ContactForm />
        </div>
      </section>

      {/* Our Global Offices */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          {/* Section heading */}
          <div className="text-center mb-8 md:mb-10 lg:mb-14">
            <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[36px] xl:text-[40px] leading-[1.15] text-white capitalize mb-4">
              Our Global Offices
            </h2>
            <p className="font-bricolage text-[14px] md:text-[16px] leading-[1.6] text-white/40 max-w-[700px] mx-auto">
              These principles guide how we think, build, and collaborate —
              ensuring consistency in every product we deliver.
            </p>
          </div>

          {/* Office Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 xl:gap-8">
            {offices.map((office) => (
              <div
                key={office.country}
                className="corner-border overflow-hidden bg-[#0a0a0a] flex flex-col"
              >
                {/* Map Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={office.image}
                    alt={`${office.country} office`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="font-archivo font-medium text-[20px] md:text-[24px] leading-[1.2] text-white mb-3">
                    {office.country}
                  </h3>
                  <p className="font-bricolage text-[13px] md:text-[14px] leading-[1.6] text-white/40 mb-4 flex-1">
                    {office.address}
                  </p>

                  {/* Contact details */}
                  <div className="flex flex-col gap-2 pt-3 border-t border-white/[0.06]">
                    {office.phone && (
                      <div className="flex items-center gap-2">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="shrink-0"
                        >
                          <path
                            d="M12.25 9.87V11.62C12.25 11.93 12 12.2 11.68 12.24C11.4 12.27 11.17 12.29 10.94 12.29C5.72 12.29 1.46 8.03 1.46 2.81C1.46 2.58 1.48 2.35 1.51 2.07C1.55 1.75 1.82 1.5 2.13 1.5H3.88C4.01 1.5 4.13 1.6 4.15 1.73C4.17 1.94 4.21 2.14 4.27 2.34C4.32 2.51 4.27 2.69 4.14 2.82L3.35 3.61C4.22 5.4 5.6 6.78 7.39 7.65L8.18 6.86C8.31 6.73 8.49 6.68 8.66 6.73C8.86 6.79 9.06 6.83 9.27 6.85C9.4 6.87 9.5 6.99 9.5 7.12V9.87H12.25Z"
                            stroke="white"
                            strokeOpacity="0.4"
                            strokeWidth="0.8"
                          />
                        </svg>
                        <a
                          href={`tel:${office.phone.replace(/\s/g, "")}`}
                          className="font-bricolage text-[12px] md:text-[13px] text-white/40 hover:text-white transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                    )}
                    {office.email && (
                      <div className="flex items-center gap-2">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="shrink-0"
                        >
                          <rect
                            x="1.5"
                            y="2.5"
                            width="11"
                            height="9"
                            rx="1.5"
                            stroke="white"
                            strokeOpacity="0.4"
                            strokeWidth="0.8"
                          />
                          <path
                            d="M1.5 4L7 8L12.5 4"
                            stroke="white"
                            strokeOpacity="0.4"
                            strokeWidth="0.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <a
                          href={`mailto:${office.email}`}
                          className="font-bricolage text-[12px] md:text-[13px] text-white/40 hover:text-white transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
