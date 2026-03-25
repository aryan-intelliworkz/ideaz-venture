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
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1920px] px-8 lg:px-[160px]">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <h3 className="font-bricolage text-[24px] leading-[1.2] text-white whitespace-nowrap">
              Technology Stack
            </h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center justify-center rounded-full border border-white/10 bg-white overflow-hidden"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={120}
                  height={48}
                  className="h-[48px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
