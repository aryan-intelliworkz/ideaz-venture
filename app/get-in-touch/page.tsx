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
    address: "5511, Mercier Street, Lewis Center, Ohio 43035",
    phone: "+1 614 999 2286",
    email: "usa@ideaz.ventures",
  },
  {
    country: "UAE",
    image: "/assets/OurCore2.png",
    address:
      "Office No. 25, 13th Floor, Al Saqar Business Tower, Near Museum of the Future, Sheikh Zayed Road, Dubai, UAE",
    phone: "+971 56 343 5362",
    email: "",
  },
  {
    country: "India",
    image: "/assets/OurCore3.png",
    address:
      "Block-B, B912-A, World Trade Tower, Near BMW Showroom, SG Highway, Ahmedabad – 380051, Gujarat, India",
    phone: "+91 97370 45567",
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
        description="Whether you're validating an idea, building a product, or looking to hire a business consultant, we help founders and businesses move forward with clarity, structure, and execution."
        ctaText=""
      />

      {/* Arrow Section + Form */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
          {/* Arrow heading + description row — matches home StatsSection */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-[32px] mb-10 md:mb-12 lg:mb-16">
            {/* Left: Arrow + Title — 5 cols */}
            <RevealSection
              className="reveal-slide-left lg:col-span-5"
              threshold={0.1}
            >
              <div className="flex items-start gap-4">
                <svg
                  width="69"
                  height="63"
                  viewBox="0 0 69 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 mt-1"
                >
                  <path
                    d="M0 31.25H55M55 31.25L38 14M55 31.25L38 48.5"
                    stroke="#EC1C24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h2 className="font-archivo font-medium text-[28px] md:text-[32px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] min-[1800px]:text-[40px] leading-[1.2] text-white capitalize">
                  Build With The Right Business Consultant
                </h2>
              </div>
            </RevealSection>

            {/* Right: Paragraphs — 7 cols */}
            <RevealSection
              className="reveal-slide-right lg:col-span-7"
              threshold={0.1}
            >
              <div className="flex flex-col gap-[25px]">
                <div className="flex flex-col gap-[14px]">
                  <p className="font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.44] text-gray-400">
                    Working with the right business consultant for startups can
                    define how efficiently you move from idea to execution. At
                    Ideaz Ventures, we don’t just advise, we partner with you to
                    bring clarity, structure, and momentum to your journey.
                  </p>
                  <p className="font-bricolage text-[15px] md:text-[16px] lg:text-[18px] leading-[1.44] text-gray-400">
                    Whether you’re looking to hire a business consultant to
                    validate your idea, shape your product, or scale your
                    operations, our team aligns strategy with execution so you
                    can build with confidence and direction.
                  </p>
                </div>
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
              Our Global Presence
            </h2>
            <p className="font-bricolage text-[14px] md:text-[16px] leading-[1.6] text-white/40 max-w-[700px] mx-auto">
              With teams across key global hubs, we collaborate with founders
              and businesses to deliver consulting, product development, and
              execution support — wherever you operate.
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
