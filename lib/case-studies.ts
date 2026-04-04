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
      "We are driven by a clear purpose — to help founders build meaningful products and scale them with confidence.",
    description: "Enterprise-grade ERP platform built for scale.",
    stats: [
      { label: "Countries", value: "15+" },
      { label: "Active Users", value: "25,000+" },
      { label: "Revenue Impact", value: "₹30+ Crore" },
    ],
    vision: {
      heading: "The Vision",
      paragraphs: [
        "DataNote ERP was envisioned as a revolutionary, next-generation web-based enterprise solution designed to fundamentally change how organizations manage their operations. The primary objective was to empower businesses to scale their operations globally while maintaining absolute, uncompromising control over their highly sensitive data, proprietary trade secrets, and core business logic. We recognized a significant market gap and sought to overcome the critical limitations inherent in traditional ERP systems, where enterprises were frequently forced to compromise their security by sharing critical data with external vendors. This vision required a paradigm shift in enterprise software architecture, prioritizing data sovereignty without sacrificing the collaborative and expansive capabilities of a modern, cloud-enabled platform.",
      ],
    },
    challenge: {
      heading: "The Challenge",
      paragraphs: [
        "The journey to realize DataNote ERP was fraught with complex technical and strategic hurdles, primarily centered around addressing severe data confidentiality concerns that traditionally plague standard ERP implementations. We needed to architect a system that guaranteed absolute data isolation for the client while still functioning as a cohesive, centralized management tool. Furthermore, the challenge extended to building a highly flexible and dynamic framework that could seamlessly adapt across a multitude of diverse industries, rather than being locked into a rigid, single-vertical construct. This required designing an inherently secure, horizontally scalable web-based ERP architecture capable of handling massive transactional volumes and complex global workflows without any degradation in performance or security vulnerabilities.",
      ],
    },
    role: {
      heading: "Our Role",
      paragraphs: [
        "Acting as the end-to-end execution partner, our involvement spanned the entire lifecycle of the product, beginning with the foundational conceptualization and the development of the core ERP architecture. We spearheaded the OpenLogic Framework innovation, a proprietary approach that allowed for unprecedented customization and flexibility. Our engineering teams meticulously focused on enterprise-grade security and scalability engineering, ensuring the platform could withstand rigorous global enterprise demands while deploying a robust, highly scalable cloud infrastructure. Beyond writing code, we actively managed product ownership and intellectual property protection strategies to safeguard the platform's unique value proposition. Finally, we architected the comprehensive global deployment and implementation framework design, enabling smooth, secure rollouts across diverse international markets.",
      ],
    },
    executionStrategy: {
      heading: "The Execution Strategy",
      subtitle: "Here we engineered the DataNote ecosystem from the ground up.",
      steps: [
        {
          title: "Architecture Development",
          description:
            "We began by conceptualizing and developing the core ERP architecture from scratch, building the bedrock for high-performance enterprise data handling. Facility required us to design a system capable of processing massive volumes of complex, interrelated business data without latency. We structured the database and backend logic to ensure that as the enterprise scales, the foundational architecture remains robust, agile, and completely isolated from external vendor interference.",
        },
        {
          title: "OpenLogic Framework",
          description:
            "The OpenLogic Framework was our proprietary innovation — a modular, extensible middleware layer allowing industries to plug in their specific workflows. This framework enables rapid customization without touching the core system, reducing implementation time by 60% while maintaining enterprise-grade stability.",
        },
        {
          title: "Security Engineering",
          description:
            "We implemented multi-layered security protocols including zero-trust architecture, end-to-end encryption, role-based access controls, and comprehensive audit logging. The system was designed to meet SOC 2 and ISO 27001 compliance standards out of the box.",
        },
        {
          title: "Cloud Infrastructure",
          description:
            "We deployed a highly scalable, region-aware cloud infrastructure using containerized microservices. Auto-scaling, load balancing, and disaster recovery were built into the core, ensuring 99.99% uptime across all deployment regions.",
        },
        {
          title: "Global Deployment",
          description:
            "We orchestrated phased rollouts across 15+ countries, each with tailored data residency configurations, local compliance adaptations, and region-specific performance optimizations to ensure seamless enterprise adoption.",
        },
        {
          title: "IP Protection",
          description:
            "We implemented comprehensive intellectual property protection strategies including code obfuscation, license management systems, and proprietary framework safeguards to protect the platform's unique value proposition in the market.",
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
    title: "Talentwale.Com",
    subtitle: "AI & Manufacturing | Hiring Platform",
    tagline:
      "India's AI-enabled hiring platform for the manufacturing industry.",
    description: "Scalable recruitment platform with structured workflows.",
    stats: [
      { label: "Countries", value: "15+" },
      { label: "Active Users", value: "25,000+" },
      { label: "Revenue Impact", value: "₹30+ Crore" },
    ],
    vision: {
      heading: "The Vision",
      paragraphs: [
        "Talentwale was conceived to revolutionize blue-collar and skilled-worker recruitment for the manufacturing sector in India. The existing hiring ecosystem relied on fragmented offline networks and outdated databases that failed to match talent to opportunity efficiently. Our vision was to build an AI-driven marketplace that connects verified candidates with manufacturing enterprises in real-time, dramatically reducing time-to-hire while improving candidate quality and retention rates across the industry.",
      ],
    },
    challenge: {
      heading: "The Challenge",
      paragraphs: [
        "The manufacturing hiring landscape posed unique challenges: candidates rarely had digital profiles, verification processes were manual and unreliable, and enterprises needed to fill positions across multiple factory locations simultaneously. We had to build intelligent matching algorithms that worked with incomplete data, develop a mobile-first experience for candidates with limited tech literacy, and create an enterprise dashboard capable of managing large-scale, multi-location recruitment campaigns with real-time analytics.",
      ],
    },
    role: {
      heading: "Our Role",
      paragraphs: [
        "As the full-stack technology partner, we designed and built the entire platform from the ground up — from the AI matching engine and candidate verification pipeline to the enterprise recruitment dashboard. We developed custom NLP models for parsing unstructured candidate data, built a scalable notification and communication system, and implemented predictive analytics that helped enterprises forecast hiring needs. Our team also handled the mobile app development, ensuring a seamless experience for factory-floor candidates using low-end devices.",
      ],
    },
    executionStrategy: {
      heading: "The Execution Strategy",
      subtitle:
        "How we built an AI-powered hiring ecosystem for manufacturing.",
      steps: [
        {
          title: "AI Matching Engine",
          description:
            "We built a custom AI engine that analyzes candidate skills, location, experience, and preferences to match them with relevant openings. The algorithm continuously learns from placement outcomes to improve match quality over time.",
        },
        {
          title: "Candidate Verification",
          description:
            "We implemented an automated multi-step verification pipeline including Aadhaar-based identity checks, skill assessment modules, and background verification APIs to ensure enterprise-grade candidate quality.",
        },
        {
          title: "Enterprise Dashboard",
          description:
            "A comprehensive recruitment management dashboard was built for enterprises to post jobs, track applications, manage interviews, and analyze hiring metrics across all factory locations from a single interface.",
        },
        {
          title: "Mobile-First Design",
          description:
            "The candidate-facing app was designed for low-bandwidth environments and basic smartphones, featuring voice-guided onboarding, vernacular language support, and minimal data consumption.",
        },
        {
          title: "Predictive Analytics",
          description:
            "We integrated predictive models that forecast hiring demand based on seasonal trends, attrition patterns, and production schedules, enabling proactive recruitment strategies.",
        },
        {
          title: "Scale Infrastructure",
          description:
            "The platform was built on auto-scaling cloud infrastructure to handle recruitment surges during peak manufacturing seasons without performance degradation.",
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
    slug: "realty-mart",
    title: "Realty Mart",
    subtitle: "PropTech | Real Estate Marketplace",
    tagline:
      "Transforming India's real estate market with technology-driven property discovery and transactions.",
    description: "Marketplace platform designed for high-volume transactions.",
    stats: [
      { label: "Countries", value: "15+" },
      { label: "Active Users", value: "25,000+" },
      { label: "Revenue Impact", value: "₹30+ Crore" },
    ],
    vision: {
      heading: "The Vision",
      paragraphs: [
        "Realty Mart was envisioned as a comprehensive digital marketplace that would bring transparency, trust, and efficiency to India's fragmented real estate sector. The platform aimed to bridge the gap between property developers, agents, and buyers by providing a unified digital experience with verified listings, virtual tours, and seamless transaction management — eliminating the information asymmetry that has long plagued Indian real estate.",
      ],
    },
    challenge: {
      heading: "The Challenge",
      paragraphs: [
        "Indian real estate data is notoriously unstructured — property information is scattered across brokers, developers, and offline records with no standardized format. We faced the challenge of building a reliable data ingestion pipeline that could normalize property listings from hundreds of sources, implement fraud detection for listing verification, and deliver a search experience fast enough to handle complex multi-parameter queries across 25,000+ properties without latency.",
      ],
    },
    role: {
      heading: "Our Role",
      paragraphs: [
        "We served as the end-to-end technology partner, architecting the entire platform stack from search infrastructure to payment integrations. Our team built a custom property data normalization engine, implemented Elasticsearch-powered search with geo-spatial queries, developed an automated listing verification system, and created a CRM layer for real estate agents. We also built the virtual tour integration pipeline and the secure escrow-based transaction workflow that became the platform's key differentiator.",
      ],
    },
    executionStrategy: {
      heading: "The Execution Strategy",
      subtitle:
        "How we engineered a scalable real estate marketplace from scratch.",
      steps: [
        {
          title: "Data Normalization",
          description:
            "We built a robust data pipeline to ingest, clean, and normalize property data from hundreds of diverse sources into a unified, searchable format with consistent attributes and pricing benchmarks.",
        },
        {
          title: "Search Infrastructure",
          description:
            "Elasticsearch-powered search with geo-spatial indexing enables sub-second property discovery across complex multi-parameter queries including location radius, price range, amenities, and developer ratings.",
        },
        {
          title: "Listing Verification",
          description:
            "An automated verification system cross-references property details with government land records, satellite imagery, and historical transaction data to flag fraudulent or inaccurate listings before they go live.",
        },
        {
          title: "Virtual Tours",
          description:
            "We integrated 360-degree virtual tour capabilities allowing buyers to explore properties remotely, significantly reducing the need for physical site visits and accelerating buying decisions.",
        },
        {
          title: "Agent CRM",
          description:
            "A comprehensive CRM layer was built for real estate agents to manage leads, track client interactions, schedule site visits, and monitor conversion funnels across their property portfolio.",
        },
        {
          title: "Secure Transactions",
          description:
            "We implemented an escrow-based payment workflow with digital agreement signing, milestone-based fund release, and complete transaction audit trails for both buyers and sellers.",
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
    title: "Atcomaart.Com",
    subtitle: "E-Commerce | ₹174 Crore Exit",
    tagline:
      "From bootstrapped marketplace to a ₹174 Crore strategic acquisition in three years.",
    description: "B2B commerce platform built for operational efficiency.",
    stats: [
      { label: "Countries", value: "15+" },
      { label: "Active Users", value: "25,000+" },
      { label: "Revenue Impact", value: "₹30+ Crore" },
    ],
    vision: {
      heading: "The Vision",
      paragraphs: [
        "Atcomaart was built with the ambitious vision of becoming India's leading B2B e-commerce platform for industrial and commercial supplies. The founders recognized that businesses still relied on fragmented, relationship-based procurement processes that were slow, opaque, and inefficient. Our mission was to digitize the entire B2B supply chain — from discovery and comparison to ordering and logistics — creating a seamless, transparent marketplace that could scale to handle massive transactional volumes while delivering enterprise-grade reliability.",
      ],
    },
    challenge: {
      heading: "The Challenge",
      paragraphs: [
        "B2B e-commerce presents dramatically different challenges from B2C. We had to handle complex pricing models (bulk discounts, credit terms, negotiated rates), multi-level approval workflows for enterprise purchases, catalog management for 50,000+ SKUs across hundreds of categories, and integration with existing procurement systems. The platform also needed to support complex logistics coordination since industrial supplies often involve oversized shipments, hazardous materials, and region-specific compliance requirements.",
      ],
    },
    role: {
      heading: "Our Role",
      paragraphs: [
        "As the core technology and product partner, we built Atcomaart from zero to exit. Our team designed the marketplace architecture, developed the custom pricing engine with support for complex B2B discount structures, built the multi-vendor management system, and created the logistics orchestration layer. We also implemented a sophisticated recommendation engine that drove cross-selling, developed the enterprise procurement API for direct system integration, and continuously optimized the platform for conversion and retention as the business scaled 10x year-over-year.",
      ],
    },
    executionStrategy: {
      heading: "The Execution Strategy",
      subtitle:
        "How we scaled a bootstrapped marketplace to a ₹174 Crore exit.",
      steps: [
        {
          title: "Marketplace Architecture",
          description:
            "We designed a highly modular marketplace platform with independent services for catalog, pricing, orders, payments, and logistics — allowing each component to scale independently as transaction volumes grew.",
        },
        {
          title: "B2B Pricing Engine",
          description:
            "A custom pricing engine was built to handle the complexity of B2B commerce: tiered bulk discounts, customer-specific negotiated rates, credit terms, and real-time margin calculations across 50,000+ SKUs.",
        },
        {
          title: "Vendor Management",
          description:
            "We built a comprehensive vendor onboarding and management system with quality scoring, fulfillment tracking, and automated penalty/incentive mechanisms to maintain marketplace quality at scale.",
        },
        {
          title: "Logistics Orchestration",
          description:
            "A multi-carrier logistics layer was developed to handle the unique requirements of industrial shipping — oversized items, hazardous materials, partial shipments, and region-specific compliance documentation.",
        },
        {
          title: "Recommendation Engine",
          description:
            "We implemented a collaborative-filtering recommendation system that analyzed purchase patterns to drive cross-selling and upselling, contributing to a 35% increase in average order value.",
        },
        {
          title: "Enterprise Integration",
          description:
            "We developed REST and webhook-based APIs enabling enterprise clients to integrate Atcomaart directly into their existing ERP and procurement systems for automated purchasing workflows.",
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
