import type { StaticImageData } from "next/image";

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
  images: {
    afterVision: string | StaticImageData;
    afterRole: string | StaticImageData;
  };
  technologies: string[];
  thumbnail: string | StaticImageData; // ← Updated
  heroImage: string | StaticImageData; // ← Updated
}

// All Images are imported here
import datanote from "./Case Study/Datanote.webp";
import talentwale from "./Case Study/Talentwale.webp";
import realtymart from "./Case Study/RealtyMart.webp";
import atcomaart from "./Case Study/AtcoMaart.webp";

import datanote1 from "./Case Study/Datanote_Casestudy_1.webp";
import datanote2 from "./Case Study/Datanote_Casestudy_2.webp";
import talentwale1 from "./Case Study/Talentwale_Casestudy_1.webp";
import talentwale2 from "./Case Study/Talentwale_Casestudy_2.webp";
import realtymart1 from "./Case Study/realitymart_Casestudy_1.webp";
import realtymart2 from "./Case Study/realitymart_Casestudy_2.webp";
import atcomaart1 from "./Case Study/atcomaart_Casestudy_1.webp";
import atcomaart2 from "./Case Study/atcomaart_Casestudy_2.webp";

export const caseStudies: CaseStudy[] = [
  {
    slug: "datanote-erp",
    title: "DataNote ERP",
    subtitle: "Enterprise ERP | ₹30+ Crore Revenue",
    tagline:
      "A scalable enterprise ERP platform built to unify operations, improve visibility, and support large-scale business processes across industries.",
    description:
      "We worked as the end-to-end execution partner, taking ownership from product conceptualization to deployment. This included defining system architecture, building core ERP modules, and ensuring seamless integration across business functions.",
    stats: [
      { label: "Revenue Generated", value: "₹30+ Crore" },
      { label: "Active Global Users", value: "25,000+" },
      { label: "Countries Deployed", value: "15+" },
      { label: "Factories Running", value: "240+" },
    ],
    vision: {
      heading: "The Vision",
      paragraphs: [
        "DataNote ERP was built to address a critical gap in enterprise operations — fragmented systems that limited visibility and slowed decision-making across departments. Businesses needed a unified platform to manage workflows, financial operations, and reporting without relying on disconnected tools.",
        "The vision was to create a scalable ERP system that centralizes operations, ensures complete data control, and supports complex business processes across industries. The focus remained on enabling efficiency, improving transparency, and building a system that adapts as businesses grow.",
      ],
    },
    challenge: {
      heading: "The Challenge",
      paragraphs: [
        "Enterprises often operated on multiple systems that created inefficiencies, limited real-time visibility, and increased dependency on manual coordination. Managing workflows across departments required a solution that could unify operations without compromising flexibility or control.",
        "The challenge was to design a system capable of handling complex workflows, large datasets, and multi-location operations while maintaining performance and reliability. It also needed to adapt across industries and support evolving business requirements without requiring constant restructuring.",
      ],
    },
    role: {
      heading: "Our Role",
      paragraphs: [
        "We worked as the end-to-end execution partner, taking ownership from product conceptualization to deployment. This included defining system architecture, building core ERP modules, and ensuring seamless integration across business functions.",
        "Our focus was on delivering a scalable, flexible platform that supports multiple industries while maintaining performance and stability. Beyond development, we ensured the system could be deployed across geographies and evolve with growing operational complexity.",
      ],
    },
    executionStrategy: {
      heading: "Strategic Approach",
      subtitle: "How we delivered DataNote ERP",
      steps: [
        {
          title: "01 — Problem Understanding",
          description:
            "We analyzed enterprise workflows, operational dependencies, and data management challenges across multiple industries. This helped define how different systems interacted and where inefficiencies existed. The goal was to ensure the platform addressed real operational gaps while maintaining clarity across processes and enabling better control over business-critical data.",
        },
        {
          title: "02 — Solution Structuring",
          description:
            "The ERP was structured into clearly defined modules covering operations, finance, and reporting. Each module was designed to integrate seamlessly while remaining flexible for different industry use cases. This ensured the system could adapt to varying business processes without compromising usability or requiring extensive customization.",
        },
        {
          title: "03 — Scalable Architecture",
          description:
            "We designed a robust architecture capable of handling large datasets, multi-location operations, and complex workflows. The system was built to support high transaction volumes while maintaining consistent performance. Scalability was a core focus to ensure the platform could grow alongside business requirements without requiring major structural changes.",
        },
        {
          title: "04 — Iterative Development",
          description:
            "Development was carried out in phases, allowing continuous validation across modules and workflows. This approach ensured that each component aligned with real operational needs before scaling further. It also helped reduce execution risk by identifying and resolving issues early in the development cycle.",
        },
        {
          title: "05 — Performance Optimization",
          description:
            "We optimized system performance across data processing, reporting, and workflow execution. This included ensuring fast response times, efficient data handling, and stable performance under load. The goal was to deliver a system that remains reliable even as usage increases across multiple business functions.",
        },
        {
          title: "06 — Deployment & Scaling",
          description:
            "The platform was deployed across different regions and industries, with continuous monitoring and improvements. The focus remained on ensuring smooth real-world usage while enabling businesses to scale operations without disruption. This approach supported long-term adoption and consistent system performance.",
        },
      ],
    },
    images: {
      afterVision: datanote1,
      afterRole: datanote2,
    },
    technologies: [".NET", "React", "AWS", "PostgreSQL", "Redis", "Docker"],
    thumbnail: datanote,
    heroImage: datanote,
  },
  {
    slug: "talentwale",
    title: "Talentwale",
    subtitle: "Recruitment Platform | 25,000+ Active Users",
    tagline:
      "A recruitment platform built to streamline hiring workflows, improve candidate management, and support scalable talent acquisition for growing businesses.",
    description:
      "We worked as the end-to-end execution partner, managing the product from concept to deployment. This included designing the platform architecture, building recruitment workflows, and ensuring seamless candidate and job management systems.",
    stats: [
      { label: "Active Users", value: "25,000+" },
      { label: "Countries Served", value: "15+" },
      { label: "Candidates Processed", value: "100,000+" },
      { label: "Hiring Teams Enabled", value: "500+" },
    ],
    vision: {
      heading: "The Vision",
      paragraphs: [
        "Talentwale was built to address inefficiencies in recruitment processes that relied heavily on manual coordination, scattered tools, and inconsistent tracking systems. Businesses needed a centralized platform to manage hiring workflows with clarity and speed.",
        "The vision was to create a structured recruitment system that simplifies candidate tracking, aligns hiring processes, and enables teams to manage recruitment efficiently. The focus remained on improving visibility, reducing delays, and supporting scalable hiring operations.",
      ],
    },
    challenge: {
      heading: "The Challenge",
      paragraphs: [
        "Recruitment workflows often involved multiple tools, manual updates, and limited coordination across teams. This created delays, reduced visibility into hiring stages, and made it difficult to manage large volumes of candidates efficiently.",
        "The challenge was to build a system capable of handling high candidate volumes, multiple hiring workflows, and real-time updates while maintaining ease of use. The platform also needed to remain flexible enough to support different hiring models across organizations.",
      ],
    },
    role: {
      heading: "Our Role",
      paragraphs: [
        "We worked as the end-to-end execution partner, managing the product from concept to deployment. This included designing the platform architecture, building recruitment workflows, and ensuring seamless candidate and job management systems.",
        "Our focus was on delivering a scalable platform that simplifies hiring processes while maintaining performance and usability. The system was built to support growing user activity and evolving recruitment needs.",
      ],
    },
    executionStrategy: {
      heading: "Strategic Approach",
      subtitle: "How we built Talentwale",
      steps: [
        {
          title: "01 — Problem Understanding",
          description:
            "We studied recruitment workflows, identifying inefficiencies caused by manual tracking, scattered tools, and lack of visibility across hiring stages. This helped define how recruiters interact with candidates and what a centralized system needed to solve for efficiency and clarity.",
        },
        {
          title: "02 — Solution Structuring",
          description:
            "The platform was structured around candidate pipelines, job workflows, and recruiter actions. Each component was designed to simplify hiring processes while maintaining structure, ensuring teams could manage recruitment activities consistently and efficiently.",
        },
        {
          title: "03 — Scalable Architecture",
          description:
            "We built a system capable of handling high volumes of candidates, recruiter interactions, and real-time updates. The architecture ensured the platform remains stable and responsive even as user activity and data increase.",
        },
        {
          title: "04 — Iterative Development",
          description:
            "The platform was developed in phases, allowing continuous validation based on real usage. This approach helped refine workflows, improve usability, and ensure the system aligned with practical recruitment needs.",
        },
        {
          title: "05 — Performance Optimization",
          description:
            "We optimized system responsiveness, data handling, and workflow efficiency. This ensured smooth performance even during peak hiring activity and when managing large candidate datasets.",
        },
        {
          title: "06 — Deployment & Scaling",
          description:
            "The platform was deployed across teams and regions, with ongoing improvements to support growing adoption. The focus remained on enabling scalable hiring operations without compromising performance or usability.",
        },
      ],
    },
    images: {
      afterVision: talentwale1,
      afterRole: talentwale2,
    },
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"], // change kar dena agar exact tech stack alag ho
    thumbnail: talentwale, // assume variable hai
    heroImage: talentwale,
  },
  {
    slug: "realtymart",
    title: "RealtyMart",
    subtitle: "Real Estate Marketplace | 10,000+ Monthly Transactions",
    tagline:
      "A real estate marketplace platform built to streamline property discovery, user interactions, and transactions at scale.",
    description:
      "We worked as the end-to-end execution partner, managing the product from conceptualization to deployment. This included designing the marketplace architecture, building scalable listing systems, and optimizing user interaction flows.",
    stats: [
      { label: "Property Listings Managed", value: "100,000+" },
      { label: "Active Users", value: "50,000+" },
      { label: "Monthly Transactions", value: "10,000+" },
      { label: "Cities Covered", value: "20+" },
    ],
    vision: {
      heading: "The Vision",
      paragraphs: [
        "RealtyMart was built to simplify real estate transactions that were often fragmented, time-consuming, and dependent on manual coordination. Buyers and sellers lacked a centralized platform to manage listings, interactions, and decisions efficiently.",
        "The vision was to create a scalable marketplace that brings together property discovery, user engagement, and transaction workflows into a unified system. The focus remained on improving accessibility, increasing transparency, and enabling faster, more structured property transactions.",
      ],
    },
    challenge: {
      heading: "The Challenge",
      paragraphs: [
        "Real estate platforms must manage large volumes of listings, user interactions, and continuously changing data. Many existing systems struggled with inconsistent performance, outdated information, and poor user experience.",
        "The challenge was to build a platform capable of handling high traffic, real-time updates, and complex user journeys while maintaining speed and reliability. It also needed to ensure seamless interaction between buyers, sellers, and listings across different locations.",
      ],
    },
    role: {
      heading: "Our Role",
      paragraphs: [
        "We worked as the end-to-end execution partner, managing the product from conceptualization to deployment. This included designing the marketplace architecture, building scalable listing systems, and optimizing user interaction flows.",
        "Our focus was on creating a stable and responsive platform that supports high volumes of listings and user activity. The system was built to ensure consistent performance while enabling smooth property discovery and engagement.",
      ],
    },
    executionStrategy: {
      heading: "Strategic Approach",
      subtitle: "How we delivered RealtyMart",
      steps: [
        {
          title: "01 — Problem Understanding",
          description:
            "We analyzed the real estate ecosystem, focusing on fragmented listing systems, inefficient user interactions, and a lack of real-time data updates. This helped define how buyers, sellers, and listings interact within a digital marketplace and what needed to be streamlined for a better user experience.",
        },
        {
          title: "02 — Solution Structuring",
          description:
            "The platform was structured around core marketplace components, including listings, search, user interactions, and transaction workflows. Each element was designed to work together seamlessly, ensuring users could navigate the platform easily while maintaining structured backend operations.",
        },
        {
          title: "03 — Scalable Architecture",
          description:
            "We designed a marketplace architecture capable of handling high traffic, large datasets, and real-time updates. The system was built to maintain performance even as listings and user activity increased, ensuring stability across different usage scenarios.",
        },
        {
          title: "04 — Iterative Development",
          description:
            "The platform was developed in phases, allowing continuous testing of user flows, listing performance, and system behavior. This approach ensured that each component functioned effectively before scaling further.",
        },
        {
          title: "05 — Performance Optimization",
          description:
            "We optimized search performance, data retrieval, and system responsiveness to ensure users could access listings quickly and interact without delays. This helped maintain a smooth experience across devices.",
        },
        {
          title: "06 — Deployment & Scaling",
          description:
            "The platform was deployed across multiple cities, with continuous improvements to support growing listings, users, and transaction volumes. The focus remained on ensuring consistent performance as the platform scaled.",
        },
      ],
    },
    images: {
      afterVision: realtymart1,
      afterRole: realtymart2,
    },
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "Redis",
      "AWS",
      "Elasticsearch",
    ],
    thumbnail: realtymart,
    heroImage: realtymart,
  },
  {
    slug: "atcomaart",
    title: "AtcoMaart",
    subtitle: "B2B Commerce Platform | ₹50+ Crore Transactions",
    tagline:
      "A B2B commerce platform built to streamline procurement, vendor management, and high-volume business transactions.",
    description:
      "We worked as the end-to-end execution partner, managing the platform from concept to deployment. This included structuring procurement workflows, building vendor management systems, and ensuring seamless order processing.",
    stats: [
      { label: "Transaction Value Processed", value: "₹50+ Crore" },
      { label: "Vendors Onboarded", value: "1,000+" },
      { label: "Orders Processed", value: "20,000+" },
      { label: "Industries Served", value: "15+" },
    ],
    vision: {
      heading: "The Vision",
      paragraphs: [
        "AtcoMaart was built to simplify complex B2B procurement processes that relied heavily on manual coordination, fragmented vendor communication, and inconsistent order management systems. Businesses needed a centralized platform to manage procurement operations with better control and efficiency.",
        "The vision was to create a scalable B2B commerce platform that unifies vendor management, order workflows, and transaction processes. The focus remained on improving operational visibility, reducing inefficiencies, and enabling businesses to manage procurement at scale.",
      ],
    },
    challenge: {
      heading: "The Challenge",
      paragraphs: [
        "B2B procurement involves multiple stakeholders, pricing structures, and operational dependencies. Existing systems were often rigid, manual, or lacked the flexibility to support different business models efficiently.",
        "The challenge was to build a platform capable of handling high transaction volumes, complex workflows, and dynamic vendor interactions while maintaining performance and reliability. It also needed to support scalable operations across industries without increasing operational complexity.",
      ],
    },
    role: {
      heading: "Our Role",
      paragraphs: [
        "We worked as the end-to-end execution partner, managing the platform from concept to deployment. This included structuring procurement workflows, building vendor management systems, and ensuring seamless order processing.",
        "Our focus was on creating a scalable and flexible platform that supports different business models while maintaining operational efficiency. The system was designed to handle growing transaction volumes without compromising performance.",
      ],
    },
    executionStrategy: {
      heading: "Strategic Approach",
      subtitle: "How we delivered AtcoMaart",
      steps: [
        {
          title: "01 — Problem Understanding",
          description:
            "We analyzed procurement workflows, vendor coordination challenges, and inefficiencies in managing large-scale transactions. This helped define how businesses interact with vendors, manage orders, and handle pricing structures within a unified system.",
        },
        {
          title: "02 — Solution Structuring",
          description:
            "The platform was structured around procurement flows, vendor management, and order processing systems. Each component was designed to ensure smooth coordination between stakeholders while maintaining clarity and control over operations.",
        },
        {
          title: "03 — Scalable Architecture",
          description:
            "We designed a system capable of handling high transaction volumes, multiple vendors, and dynamic workflows. The architecture ensured the platform remained stable and responsive as operational complexity increased.",
        },
        {
          title: "04 — Iterative Development",
          description:
            "The platform was developed in phases, allowing continuous validation of workflows and system behavior. This ensured each component aligned with real business processes before scaling further.",
        },
        {
          title: "05 — Performance Optimization",
          description:
            "We optimized transaction processing, system responsiveness, and data handling to ensure efficient operations. This helped maintain reliability even during high-volume activity.",
        },
        {
          title: "06 — Deployment & Scaling",
          description:
            "The platform was deployed with a focus on operational efficiency and scalability. Continuous improvements ensured businesses could manage procurement processes effectively as they grew.",
        },
      ],
    },
    images: {
      afterVision: atcomaart1,
      afterRole: atcomaart2,
    },
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "Redis",
      "AWS",
      "Elasticsearch",
    ],
    thumbnail: atcomaart,
    heroImage: atcomaart,
  },
];
