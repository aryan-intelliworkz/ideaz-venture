"use client";

import Image from "next/image";

const technologies = [
  { name: ".NET", icon: "/assets/tech/dotnet.svg" },
  { name: "Flutter", icon: "/assets/tech/flutter.svg" },
  { name: "PHP", icon: "/assets/tech/php.svg" },
  { name: "React Native", icon: "/assets/tech/react-native.svg" },
  { name: "Laravel", icon: "/assets/tech/laravel.svg" },
  { name: "UI/UX", icon: "/assets/tech/uiux.svg" },
  { name: "Node.js", icon: "/assets/tech/nodejs.svg" },
  { name: "React", icon: "/assets/tech/react.svg" },
  { name: "DevOps", icon: "/assets/tech/devops.svg" },
  { name: "Next.js", icon: "/assets/tech/nextjs.svg" },
  { name: "Angular", icon: "/assets/tech/angular.svg" },
];

export default function TechStack() {
  return (
    <section className="py-10 md:py-12 lg:py-16">
      <div className="mx-auto max-w-[1920px] px-6 md:px-8 lg:px-[160px]">
        <div className="flex flex-col items-center gap-10">
          {/* Heading with red underline */}
          <div className="flex flex-col items-center gap-1.5">
            <h3 className="font-bricolage text-[20px] md:text-[22px] lg:text-[22px] min-[1800px]:text-[24px] leading-[1.2] text-white">
              Technology Stack
            </h3>
            <div className="h-[1px] w-full bg-red" />
          </div>

          {/* Scrolling tech icons with edge blur */}
          <div className="relative w-full overflow-hidden">
            {/* Left blur */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
            {/* Right blur */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

            <div className="tech-scroll-track">
              <div className="tech-scroll-content">
                {/* Double the items for seamless loop */}
                {[...technologies, ...technologies].map((tech, i) => (
                  <div
                    key={`${tech.name}-${i}`}
                    className="flex items-center justify-center w-[120px] h-[120px] rounded-full border border-gray-500 bg-white overflow-hidden shrink-0"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={120}
                      height={120}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
