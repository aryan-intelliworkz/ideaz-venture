export interface ExecutionStep {
  title: string;
  description: string;
}

export interface CaseStudySection {
  heading?: string;
  paragraphs: string[];
  image?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  stats: { label: string; value: string }[];
  vision: CaseStudySection;
  challenge: CaseStudySection;
  role: CaseStudySection;
  executionStrategy: {
    heading: string;
    subtitle: string;
    steps: ExecutionStep[];
  };
  images: { afterVision: string; afterRole: string };
  technologies: string[];
  thumbnail: string;
  heroImage: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "datanote-erp",
    title: "DataNote ERP",
    subtitle: "Enterprise ERP | ₹30+ Crore Revenue",
    tagline:
      "Built to simplify and scale complex business operations, DataNote ERP enables enterprises to manage workflows, finance, inventory, and reporting within a unified system.",
    description:
      "We worked on structuring a scalable architecture and building a performance-driven platform that could handle multi-industry use cases while maintaining reliability and speed. From product planning to execution, the focus remained on delivering a system that supports long-term operational efficiency and growth.",
    stats: [
      { label: "Revenue Generated", value: "₹30+ Crore" },
      { label: "Active Global Users", value: "25,000+" },
      { label: "Industries Served", value: "Multiple" },
    ],
    vision: {
      heading: "The Vision",
      paragraphs: [
        "Built to simplify and scale complex business operations, DataNote ERP enables enterprises to manage workflows, finance, inventory, and reporting within a unified system.",
      ],
    },
    challenge: {
      heading: "The Challenge",
      paragraphs: [
        "We worked on structuring a scalable architecture and building a performance-driven platform that could handle multi-industry use cases while maintaining reliability and speed.",
      ],
    },
    role: {
      heading: "Our Role",
      paragraphs: [
        "From product planning to execution, the focus remained on delivering a system that supports long-term operational efficiency and growth.",
      ],
    },
    executionStrategy: {
      heading: "The Execution Strategy",
      subtitle: "How we delivered DataNote ERP",
      steps: [
        {
          title: "Scalable Architecture",
          description:
            "Structured a robust, scalable architecture for multi-industry use cases.",
        },
        {
          title: "Performance Engineering",
          description:
            "Built a platform focused on reliability, speed, and operational efficiency.",
        },
        {
          title: "Unified System",
          description:
            "Integrated workflows, finance, inventory, and reporting into a single system.",
        },
      ],
    },
    images: {
      afterVision: "https://picsum.photos/seed/datanote-vision/1200/500",
      afterRole: "https://picsum.photos/seed/datanote-role/1200/500",
    },
    technologies: [".NET", "React", "AWS", "PostgreSQL", "Redis", "Docker"],
    thumbnail: "/assets/caseStudyImg.png",
    heroImage: "/assets/caseStudyImg.png",
  },
  {
    slug: "talentwale",
    title: "Talentwale",
    subtitle: "HRTech Platform | 25,000+ Users",
    tagline:
      "A recruitment and hiring platform designed to streamline talent acquisition and improve hiring efficiency for growing businesses.",
    description:
      "We built a structured product experience that simplifies candidate management, job workflows, and recruiter operations while ensuring scalability as user volume grows. The platform was engineered to handle high engagement, optimize hiring cycles, and support expanding business needs without operational friction.",
    stats: [
      { label: "Active Users", value: "25,000+" },
      { label: "Platform Type", value: "HRTech" },
    ],
    vision: {
      heading: "The Vision",
      paragraphs: [
        "A recruitment and hiring platform designed to streamline talent acquisition and improve hiring efficiency for growing businesses.",
      ],
    },
    challenge: {
      heading: "The Challenge",
      paragraphs: [
        "We built a structured product experience that simplifies candidate management, job workflows, and recruiter operations while ensuring scalability as user volume grows.",
      ],
    },
    role: {
      heading: "Our Role",
      paragraphs: [
        "The platform was engineered to handle high engagement, optimize hiring cycles, and support expanding business needs without operational friction.",
      ],
    },
    executionStrategy: {
      heading: "The Execution Strategy",
      subtitle: "How we delivered Talentwale",
      steps: [
        {
          title: "Structured Product Experience",
          description:
            "Simplified candidate management, job workflows, and recruiter operations.",
        },
        {
          title: "Scalability",
          description:
            "Engineered for high engagement and seamless scaling as user volume grows.",
        },
        {
          title: "Optimized Hiring Cycles",
          description:
            "Built to optimize hiring cycles and support expanding business needs.",
        },
      ],
    },
    images: {
      afterVision: "https://picsum.photos/seed/talentwale-vision/1200/500",
      afterRole: "https://picsum.photos/seed/talentwale-role/1200/500",
    },
    technologies: ["Next.js", "Python", "TensorFlow", "MongoDB", "AWS"],
    thumbnail: "/assets/caseStudyImg.png",
    heroImage: "/assets/caseStudyImg.png",
  },
  {
    slug: "realtymart",
    title: "RealtyMart",
    subtitle: "Marketplace Platform | High-Volume Transactions",
    tagline:
      "A digital real estate marketplace built to manage property listings, user interactions, and transaction workflows at scale.",
    description:
      "We focused on creating a seamless and structured platform that supports large datasets, real-time interactions, and a smooth user experience across devices. The execution prioritized performance, scalability, and system stability to ensure the platform can handle continuous growth in users and transactions.",
    stats: [
      { label: "Platform Type", value: "Marketplace" },
      { label: "Key Feature", value: "High-Volume Transactions" },
    ],
    vision: {
      heading: "The Vision",
      paragraphs: [
        "A digital real estate marketplace built to manage property listings, user interactions, and transaction workflows at scale.",
      ],
    },
    challenge: {
      heading: "The Challenge",
      paragraphs: [
        "We focused on creating a seamless and structured platform that supports large datasets, real-time interactions, and a smooth user experience across devices.",
      ],
    },
    role: {
      heading: "Our Role",
      paragraphs: [
        "The execution prioritized performance, scalability, and system stability to ensure the platform can handle continuous growth in users and transactions.",
      ],
    },
    executionStrategy: {
      heading: "The Execution Strategy",
      subtitle: "How we delivered RealtyMart",
      steps: [
        {
          title: "Seamless Platform",
          description:
            "Created a platform supporting large datasets and real-time interactions.",
        },
        {
          title: "User Experience",
          description:
            "Engineered for a smooth experience across devices and high transaction volumes.",
        },
        {
          title: "Scalability & Stability",
          description:
            "Prioritized performance, scalability, and system stability for continuous growth.",
        },
      ],
    },
    images: {
      afterVision: "https://picsum.photos/seed/realty-vision/1200/500",
      afterRole: "https://picsum.photos/seed/realty-role/1200/500",
    },
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "Redis",
      "AWS",
      "Elasticsearch",
    ],
    thumbnail: "/assets/caseStudyImg.png",
    heroImage: "/assets/caseStudyImg.png",
  },
  {
    slug: "atcomaart",
    title: "AtcoMaart",
    subtitle: "B2B Commerce Platform | Scalable Operations",
    tagline:
      "A B2B commerce platform designed to streamline procurement, vendor management, and large-scale business transactions.",
    description:
      "We developed a system that simplifies complex workflows while maintaining flexibility for different business use cases and operational structures. The platform is built with a strong focus on scalability, ensuring it supports increasing transaction volumes and expanding business operations over time.",
    stats: [
      { label: "Platform Type", value: "B2B Commerce" },
      { label: "Key Feature", value: "Scalable Operations" },
    ],
    vision: {
      heading: "The Vision",
      paragraphs: [
        "A B2B commerce platform designed to streamline procurement, vendor management, and large-scale business transactions.",
      ],
    },
    challenge: {
      heading: "The Challenge",
      paragraphs: [
        "We developed a system that simplifies complex workflows while maintaining flexibility for different business use cases and operational structures.",
      ],
    },
    role: {
      heading: "Our Role",
      paragraphs: [
        "The platform is built with a strong focus on scalability, ensuring it supports increasing transaction volumes and expanding business operations over time.",
      ],
    },
    executionStrategy: {
      heading: "The Execution Strategy",
      subtitle: "How we delivered AtcoMaart",
      steps: [
        {
          title: "Workflow Simplification",
          description:
            "Developed a system that simplifies complex procurement and vendor management workflows.",
        },
        {
          title: "Operational Flexibility",
          description:
            "Maintained flexibility for different business use cases and structures.",
        },
        {
          title: "Scalability",
          description:
            "Engineered for scalable operations and increasing transaction volumes.",
        },
      ],
    },
    images: {
      afterVision: "https://picsum.photos/seed/atcomaart-vision/1200/500",
      afterRole: "https://picsum.photos/seed/atcomaart-role/1200/500",
    },
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "Redis",
      "AWS",
      "Elasticsearch",
    ],
    thumbnail: "/assets/caseStudyImg.png",
    heroImage: "/assets/caseStudyImg.png",
  },
];
