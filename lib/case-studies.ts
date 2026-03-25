export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  stats: { label: string; value: string }[];
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
  thumbnail: string;
  heroImage: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "global-enterprise-platform",
    title: "Secure Enterprise Architecture Deployed Globally",
    subtitle: "Enterprise Platform",
    description:
      "Built and deployed a secure, scalable enterprise architecture serving users across 15+ countries with robust performance and compliance standards.",
    stats: [
      { label: "Countries", value: "15+" },
      { label: "Users", value: "25,000+" },
      { label: "Revenue Impact", value: "₹30+ Crore" },
    ],
    challenge:
      "The client needed a unified platform that could handle multi-region deployments with strict data compliance requirements across different jurisdictions while maintaining sub-second response times.",
    solution:
      "We architected a microservices-based platform with region-specific data residency, automated compliance checks, and a global CDN strategy. The system was built on .NET Core with React frontends and deployed across AWS multi-region infrastructure.",
    results:
      "The platform successfully launched across 15+ countries, onboarded 25,000+ users within the first year, and generated over ₹30 Crore in revenue impact for the client. System uptime exceeded 99.95%.",
    technologies: [".NET", "React", "AWS", "PostgreSQL", "Redis", "Docker"],
    thumbnail: "/assets/case-study-thumbnails/enterprise-platform.jpg",
    heroImage: "/assets/case-study-thumbnails/enterprise-platform-hero.jpg",
  },
  {
    slug: "fintech-mobile-app",
    title: "Mobile-First Fintech Platform for Emerging Markets",
    subtitle: "Fintech Application",
    description:
      "Designed and developed a mobile-first financial platform enabling seamless digital transactions for underbanked populations in emerging markets.",
    stats: [
      { label: "Transactions", value: "500K+" },
      { label: "Users", value: "50,000+" },
      { label: "Markets", value: "3" },
    ],
    challenge:
      "Creating a reliable fintech application that works seamlessly on low-bandwidth networks while meeting regulatory requirements across multiple emerging markets.",
    solution:
      "We built a Flutter-based mobile application with offline-first architecture, local data encryption, and progressive sync capabilities. The backend was powered by Node.js microservices with robust transaction processing.",
    results:
      "The app processed over 500K transactions in its first year, served 50,000+ users across 3 markets, and achieved a 4.7-star rating on app stores.",
    technologies: [
      "Flutter",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Stripe",
      "AWS",
    ],
    thumbnail: "/assets/case-study-thumbnails/fintech-app.jpg",
    heroImage: "/assets/case-study-thumbnails/fintech-app-hero.jpg",
  },
  {
    slug: "industrial-iot-platform",
    title: "Industrial IoT Platform Managing 500K+ Products",
    subtitle: "IoT & Industrial",
    description:
      "Developed an IoT-driven industrial management platform capable of tracking and managing over 500,000 products across global supply chains.",
    stats: [
      { label: "Products Managed", value: "500,000+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Efficiency Gain", value: "40%" },
    ],
    challenge:
      "The client required real-time tracking of hundreds of thousands of industrial products with predictive maintenance capabilities and integration with legacy systems.",
    solution:
      "We developed a comprehensive IoT platform using .NET backend services, React dashboards, and edge computing for real-time data processing. The system integrated with 20+ legacy protocols and provided AI-driven predictive analytics.",
    results:
      "The platform now manages 500,000+ products with 99.9% uptime, reduced operational costs by 40%, and enabled predictive maintenance that prevented countless hours of downtime.",
    technologies: [
      ".NET",
      "React",
      "Azure IoT",
      "TimescaleDB",
      "Python",
      "TensorFlow",
    ],
    thumbnail: "/assets/case-study-thumbnails/iot-platform.jpg",
    heroImage: "/assets/case-study-thumbnails/iot-platform-hero.jpg",
  },
  {
    slug: "ecommerce-scale-up",
    title: "E-Commerce Platform Scaled to ₹174 Crore Exit",
    subtitle: "E-Commerce",
    description:
      "Built and scaled an e-commerce platform from concept to a strategic exit valued at ₹174 Crore, serving as the complete technology partner throughout the journey.",
    stats: [
      { label: "Exit Value", value: "₹174 Crore" },
      { label: "Monthly Orders", value: "100K+" },
      { label: "Growth", value: "10x YoY" },
    ],
    challenge:
      "Scaling a bootstrapped e-commerce startup from early MVP to a platform capable of handling 100K+ monthly orders while maintaining rapid feature iteration.",
    solution:
      "We implemented a modular Next.js frontend with Laravel backend services, automated CI/CD pipelines, and a scalable infrastructure on AWS. Our team handled product development, DevOps, and performance optimization throughout the growth journey.",
    results:
      "The platform achieved 10x year-over-year growth, processed 100K+ monthly orders, and ultimately achieved a strategic exit valued at ₹174 Crore.",
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "Redis",
      "AWS",
      "Elasticsearch",
    ],
    thumbnail: "/assets/case-study-thumbnails/ecommerce.jpg",
    heroImage: "/assets/case-study-thumbnails/ecommerce-hero.jpg",
  },
];
