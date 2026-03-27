export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  body: string;
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
    slug: "datanote-erp",
    title: "DataNote ERP",
    subtitle: "Enterprise ERP | 930+ Crore Revenue",
    tagline:
      "We are driven by a clear purpose — to help founders build meaningful products and scale them with confidence.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nisl arcu sit ultricies lacus eget. Ullamcorper sit enim in ultricies sollicitudin. Etiam tristique diam nisi quis metus. Mi arcu magna posuere odio auctor. Odio feugiat maecenas sed risus sapien et lectus velit. Faucibus ac ut faucibus id sit. Fermentum orci eu diam at purus consequat egestas mauris ut. Lorem ipsum dolor sit amet consectetur. Nisl arcu sit ultricies lacus eget.",
    body: "",
    stats: [
      { label: "Revenue", value: "930+ Crore" },
      { label: "Users", value: "50,000+" },
      { label: "Countries", value: "15+" },
    ],
    challenge:
      "The client needed a unified ERP platform that could handle multi-region deployments with strict data compliance requirements across different jurisdictions while maintaining sub-second response times.",
    solution:
      "We architected a microservices-based ERP platform with region-specific data residency, automated compliance checks, and a global CDN strategy.",
    results:
      "The platform successfully launched across 15+ countries, onboarded 50,000+ users, and generated over 930 Crore in revenue impact.",
    technologies: [".NET", "React", "AWS", "PostgreSQL", "Redis", "Docker"],
    thumbnail: "/assets/caseStudyImg.png",
    heroImage: "/assets/caseStudyImg.png",
  },
  {
    slug: "talentwale",
    title: "Talentwale.Com",
    subtitle: "AI & Manufacturing | Subsidized Pro-Rated",
    tagline:
      "India's AI-enabled hiring platform for the manufacturing industry.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nisl arcu sit ultricies lacus eget. Ullamcorper sit enim in ultricies sollicitudin. Etiam tristique diam nisi quis metus. Mi arcu magna posuere odio auctor. Odio feugiat maecenas sed risus sapien et lectus velit. Faucibus ac ut faucibus id sit. Fermentum orci eu diam at purus consequat egestas mauris ut. Lorem ipsum dolor sit amet consectetur. Nisl arcu sit ultricies lacus eget.",
    body: "",
    stats: [
      { label: "Hires", value: "10,000+" },
      { label: "Companies", value: "500+" },
      { label: "Efficiency", value: "3x" },
    ],
    challenge:
      "Creating a reliable AI-powered hiring platform that works seamlessly for the manufacturing industry with automated candidate matching and assessment.",
    solution:
      "We built an AI-driven platform with intelligent matching algorithms, automated screening, and progressive onboarding capabilities.",
    results:
      "The platform facilitated over 10,000 hires across 500+ companies and achieved 3x improvement in hiring efficiency.",
    technologies: ["Next.js", "Python", "TensorFlow", "MongoDB", "AWS"],
    thumbnail: "/assets/caseStudyImg.png",
    heroImage: "/assets/caseStudyImg.png",
  },
  {
    slug: "realty-mart",
    title: "Realty Mart",
    subtitle: "Enterprise ERP | 930+ Crore Revenue",
    tagline:
      "We are driven by a clear purpose — to help founders build meaningful products and scale them with confidence.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nisl arcu sit ultricies lacus eget. Ullamcorper sit enim in ultricies sollicitudin. Etiam tristique diam nisi quis metus. Mi arcu magna posuere odio auctor. Odio feugiat maecenas sed risus sapien et lectus velit. Faucibus ac ut faucibus id sit. Fermentum orci eu diam at purus consequat egestas mauris ut. Lorem ipsum dolor sit amet consectetur. Nisl arcu sit ultricies lacus eget.",
    body: "",
    stats: [
      { label: "Properties", value: "25,000+" },
      { label: "Users", value: "100K+" },
      { label: "Revenue", value: "930+ Crore" },
    ],
    challenge:
      "Scaling a real estate marketplace from early MVP to a platform capable of handling thousands of property listings while maintaining rapid feature iteration.",
    solution:
      "We implemented a modular Next.js frontend with robust backend services, automated CI/CD pipelines, and a scalable infrastructure on AWS.",
    results:
      "The platform achieved rapid growth, onboarded 100K+ users, and processed 25,000+ property listings.",
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
    title: "Atcomaart.Com",
    subtitle: "Enterprise ERP | 930+ Crore Revenue",
    tagline:
      "We are driven by a clear purpose — to help founders build meaningful products and scale them with confidence.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nisl arcu sit ultricies lacus eget. Ullamcorper sit enim in ultricies sollicitudin. Etiam tristique diam nisi quis metus. Mi arcu magna posuere odio auctor. Odio feugiat maecenas sed risus sapien et lectus velit. Faucibus ac ut faucibus id sit. Fermentum orci eu diam at purus consequat egestas mauris ut. Lorem ipsum dolor sit amet consectetur. Nisl arcu sit ultricies lacus eget.",
    body: "",
    stats: [
      { label: "Exit Value", value: "₹174 Crore" },
      { label: "Monthly Orders", value: "100K+" },
      { label: "Growth", value: "10x YoY" },
    ],
    challenge:
      "Scaling a bootstrapped e-commerce startup from early MVP to a platform capable of handling 100K+ monthly orders while maintaining rapid feature iteration.",
    solution:
      "We implemented a modular Next.js frontend with Laravel backend services, automated CI/CD pipelines, and a scalable infrastructure on AWS.",
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
    thumbnail: "/assets/caseStudyImg.png",
    heroImage: "/assets/caseStudyImg.png",
  },
];
