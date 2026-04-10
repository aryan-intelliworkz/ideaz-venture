// "use client";

// import { useState, useEffect, useRef, useCallback } from "react";
// import Image from "next/image";
// import { cn } from "@/lib/utils";
// import { useScrollReveal } from "@/hooks/useScrollReveal";

// interface CapabilityItem {
//   number: string;
//   title: string;
//   description: string;
// }

// interface CoreCapabilitiesSectionProps {
//   subtitle: string;
//   items: CapabilityItem[];
//   // Pass your actual imported images here as StaticImageData or string paths.
//   // Array length should match items.length.
//   // If you haven't imported images yet, pass an empty array and the
//   // component will show a styled placeholder instead.
//   images?: string[];
// }

// export default function CoreCapabilitiesSection({
//   subtitle,
//   items,
//   images = [],
// }: CoreCapabilitiesSectionProps) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const timerRef = useRef<NodeJS.Timeout | null>(null);
//   const headingRef = useScrollReveal();

//   const resetTimer = useCallback(() => {
//     if (timerRef.current) clearInterval(timerRef.current);
//     timerRef.current = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % items.length);
//     }, 5000);
//   }, [items.length]);

//   useEffect(() => {
//     resetTimer();
//     return () => {
//       if (timerRef.current) clearInterval(timerRef.current);
//     };
//   }, [resetTimer]);

//   const handleClick = (index: number) => {
//     setActiveIndex(index);
//     resetTimer();
//   };

//   const activeItem = items[activeIndex];
//   const activeImage = images[activeIndex];

//   return (
//     <section className="py-12 md:py-16 lg:py-24">
//       <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
//         {/* Section Header */}
//         <div
//           ref={headingRef}
//           className="reveal-fade-up text-center mb-8 md:mb-10 lg:mb-14"
//         >
//           <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] min-[1800px]:text-[40px] leading-[1.2] text-white capitalize">
//             Core Capabilities
//           </h2>
//           <p className="mt-3 font-bricolage text-[16px] lg:text-[16px] xl:text-[18px] leading-[1.44] text-gray-400 max-w-[700px] mx-auto">
//             {subtitle}
//           </p>
//         </div>

//         {/* ── Desktop Layout ── */}
//         <div className="hidden lg:flex items-stretch overflow-hidden min-h-[320px]">
//           {/* Left — dot nav + labels */}
//           <div className="w-[300px] shrink-0 p-10 flex flex-col justify-center gap-6 border-r border-white/[0.08]">
//             {items.map((item, index) => (
//               <button
//                 key={item.number}
//                 onClick={() => handleClick(index)}
//                 className={cn(
//                   "flex items-center gap-3 text-left transition-all duration-300",
//                   activeIndex === index
//                     ? "opacity-100"
//                     : "opacity-50 hover:opacity-75",
//                 )}
//               >
//                 <span
//                   className={cn(
//                     "w-2.5 h-2.5 rounded-full shrink-0 transition-colors duration-300",
//                     activeIndex === index ? "bg-[#EC1C24]" : "bg-white/30",
//                   )}
//                 />
//                 <span className="font-bricolage text-[13px] lg:text-[14px] text-white leading-[1.4]">
//                   {item.title}
//                 </span>
//               </button>
//             ))}
//           </div>

//           {/* Center — Image / Placeholder */}
//           <div className="flex-1 relative min-h-[320px] mx-4 overflow-hidden">
//             {activeImage ? (
//               // Real image: swap between them with fade
//               <>
//                 {items.map((item, index) => (
//                   <div
//                     key={item.number}
//                     className={cn(
//                       "absolute inset-0 transition-opacity duration-500",
//                       activeIndex === index ? "opacity-100" : "opacity-0",
//                     )}
//                   >
//                     <Image
//                       src={images[index] ?? ""}
//                       alt={item.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 ))}
//               </>
//             ) : (
//               // Placeholder — styled dark panel until images are added
//               <div className="absolute inset-0 bg-white/[0.03] border border-white/[0.06] flex flex-col items-center justify-center gap-3">
//                 <span
//                   className="font-archivo text-[96px] leading-none font-bold select-none"
//                   style={{
//                     WebkitTextStroke: "1px rgba(255,255,255,0.08)",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   {activeItem.number}
//                 </span>
//                 <span className="font-bricolage text-[13px] text-white/20 tracking-widest uppercase">
//                   Add image here
//                 </span>
//               </div>
//             )}
//           </div>

//           {/* Right — Number + Title + Description */}
//           <div className="w-[340px] shrink-0 p-10 flex flex-col justify-center border-l border-white/[0.08]">
//             <span
//               className="font-archivo text-[72px] leading-none font-bold mb-4 select-none"
//               style={{
//                 WebkitTextStroke: "1px #666",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               {activeItem.number}
//             </span>
//             <h3 className="font-archivo font-medium text-[18px] xl:text-[20px] leading-[1.2] text-white mb-3">
//               {activeItem.title}
//             </h3>
//             <p className="font-bricolage text-[13px] xl:text-[14px] leading-[1.6] text-white/60">
//               {activeItem.description}
//             </p>
//           </div>
//         </div>

//         {/* ── Mobile / Tablet — stacked cards ── */}
//         <div className="lg:hidden space-y-4">
//           {items.map((item, index) => (
//             <div
//               key={item.number}
//               onClick={() => handleClick(index)}
//               className={cn(
//                 "overflow-hidden cursor-pointer transition-all duration-300 border border-white/[0.06]",
//                 activeIndex === index ? "border-[#EC1C24]/30" : "",
//               )}
//             >
//               {/* Image area */}
//               <div className="relative h-[180px] bg-white/[0.03]">
//                 {activeImage && images[index] ? (
//                   <Image
//                     src={images[index] ?? ""}
//                     alt={item.title}
//                     fill
//                     className="object-cover"
//                   />
//                 ) : (
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <span
//                       className="font-archivo text-[64px] leading-none font-bold select-none"
//                       style={{
//                         WebkitTextStroke: "1px rgba(255,255,255,0.08)",
//                         WebkitTextFillColor: "transparent",
//                       }}
//                     >
//                       {item.number}
//                     </span>
//                   </div>
//                 )}
//               </div>

//               <div className="p-5">
//                 <div className="flex items-center gap-3 mb-2">
//                   <span
//                     className="font-archivo text-[36px] leading-none font-bold select-none"
//                     style={{
//                       WebkitTextStroke: "1px #666",
//                       WebkitTextFillColor: "transparent",
//                     }}
//                   >
//                     {item.number}
//                   </span>
//                   <h3 className="font-archivo font-medium text-[16px] md:text-[18px] leading-[1.2] text-white">
//                     {item.title}
//                   </h3>
//                 </div>
//                 <p className="font-bricolage text-[13px] md:text-[14px] leading-[1.6] text-white/60">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// components/home/CoreCapabilitiesSection.tsx

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CapabilityItem {
  number: string;
  title: string;
  description: string;
  image: string; // ← Now comes from data
}

interface CoreCapabilitiesSectionProps {
  subtitle: string;
  items: CapabilityItem[];
}

export default function CoreCapabilitiesSection({
  subtitle,
  items,
}: CoreCapabilitiesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const headingRef = useScrollReveal();

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);
  }, [items.length]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    resetTimer();
  };

  const activeItem = items[activeIndex];

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
        {/* Section Header */}
        <div
          ref={headingRef}
          className="reveal-fade-up text-center mb-8 md:mb-10 lg:mb-14"
        >
          <h2 className="font-archivo font-medium text-[28px] md:text-[36px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] min-[1800px]:text-[40px] leading-[1.2] text-white capitalize">
            Core Capabilities
          </h2>
          <p className="mt-3 font-bricolage text-[16px] lg:text-[16px] xl:text-[18px] leading-[1.44] text-gray-400 max-w-[700px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-stretch overflow-hidden min-h-[320px]">
          {/* Left Navigation */}
          <div className="w-[300px] shrink-0 p-10 flex flex-col justify-center gap-6 border-r border-white/[0.08]">
            {items.map((item, index) => (
              <button
                key={item.number}
                onClick={() => handleClick(index)}
                className={cn(
                  "flex items-center gap-3 text-left transition-all duration-300",
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-75",
                )}
              >
                <span
                  className={cn(
                    "w-2.5 h-2.5 rounded-full shrink-0 transition-colors duration-300",
                    activeIndex === index ? "bg-[#EC1C24]" : "bg-white/30",
                  )}
                />
                <span className="font-bricolage text-[13px] lg:text-[14px] text-white leading-[1.4]">
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          {/* Image Area */}
          <div className="flex-1 relative min-h-[320px] mx-4 overflow-hidden">
            {items.map((item, index) => (
              <div
                key={item.number}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  activeIndex === index ? "opacity-100" : "opacity-0",
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="w-[340px] shrink-0 p-10 flex flex-col justify-center border-l border-white/[0.08]">
            <span
              className="font-archivo text-[72px] leading-none font-bold mb-4 select-none"
              style={{
                WebkitTextStroke: "1px #666",
                WebkitTextFillColor: "transparent",
              }}
            >
              {activeItem.number}
            </span>
            <h3 className="font-archivo font-medium text-[18px] xl:text-[20px] leading-[1.2] text-white mb-3">
              {activeItem.title}
            </h3>
            <p className="font-bricolage text-[13px] xl:text-[14px] leading-[1.6] text-white/60">
              {activeItem.description}
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4">
          {items.map((item, index) => (
            <div
              key={item.number}
              onClick={() => handleClick(index)}
              className={cn(
                "overflow-hidden cursor-pointer transition-all duration-300 border border-white/[0.06]",
                activeIndex === index ? "border-[#EC1C24]/30" : "",
              )}
            >
              <div className="relative h-[180px] bg-white/[0.03]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="font-archivo text-[36px] leading-none font-bold select-none"
                    style={{
                      WebkitTextStroke: "1px #666",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.number}
                  </span>
                  <h3 className="font-archivo font-medium text-[16px] md:text-[18px] leading-[1.2] text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="font-bricolage text-[13px] md:text-[14px] leading-[1.6] text-white/60">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
