"use client";

import { type ReactNode } from "react";
import {
  SiDotnet,
  SiFlutter,
  SiPhp,
  SiReact,
  SiLaravel,
  SiFigma,
  SiNodedotjs,
  SiNextdotjs,
  SiAngular,
  SiDocker,
  SiTypescript,
} from "react-icons/si";

const technologies: { name: string; icon: ReactNode; color: string }[] = [
  { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
  { name: ".NET", icon: <SiDotnet />, color: "#512BD4" },
  { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
  { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "DevOps", icon: <SiDocker />, color: "#2496ED" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
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
                    className="tech-icon-wrapper group flex items-center justify-center w-[100px] h-[100px] md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px] rounded-full border border-gray-600 bg-[#111111] shrink-0 transition-all duration-500 hover:border-gray-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                  >
                    <span
                      className="tech-icon text-[36px] md:text-[40px] lg:text-[44px] transition-all duration-500 group-hover:scale-110"
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </span>
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
