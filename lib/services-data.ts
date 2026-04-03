export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceWhatWeDoItem {
  title: string;
  description: string;
}

export interface ServiceCapability {
  number: string;
  title: string;
  description: string;
}

export interface ServiceEngagementModel {
  title: string;
  description: string;
  image: string;
}

export interface ServicePage {
  slug: string;
  hero: { title: string; subtitle: string; cta: string };
  problemFraming: { heading: string; paragraphs: string[] };
  whatWeDo: { subtitle: string; items: ServiceWhatWeDoItem[] };
  coreCapabilities: { subtitle: string; items: ServiceCapability[] };
  engagementModels: { subtitle: string; items: ServiceEngagementModel[] };
  whyChooseUs: {
    subtitle: string;
    heading: string;
    content: string;
    pointers: string[];
  };
  finalCta: { heading: string; subtitle: string; cta: string };
  faqs: ServiceFAQ[];
}

export const servicePages: ServicePage[] = [
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     1. STARTUP CONSULTING
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    slug: "startup-consulting",
    hero: {
      title: "Validate And Plan Your Startup",
      subtitle:
        "We provide structured startup consulting services to help founders validate ideas, define product direction, and reduce execution risk before development begins.",
      cta: "Book an Idea Discovery Call",
    },
    problemFraming: {
      heading: "Most Startup Mistakes Start Before Development",
      paragraphs: [
        "Most startups move into development based on assumptions, leading to wasted time, misaligned products, and avoidable costs. Without structured startup consulting services, ideas often lack validation, direction, and a clear execution path.",
        "At Ideaz Ventures, our startup consulting services focus on validating ideas, defining product direction, and creating a structured roadmap before development begins. This ensures you\u2019re building something users actually need, not just something you assume will work.",
      ],
    },
    whatWeDo: {
      subtitle:
        "Our startup consulting services focus on building clarity, reducing risk, and creating structured plans that guide founders from idea to execution.",
      items: [
        {
          title: "Business Strategy Development",
          description:
            "We help founders define a clear business direction by aligning goals, market opportunity, and execution approach. Through structured startup strategy consulting, we ensure your idea is backed by a viable model and a strong foundation before development begins.",
        },
        {
          title: "Market Positioning",
          description:
            "We identify how your product should be positioned in the market to stand out and attract the right users. Our approach focuses on defining value propositions, target segments, and messaging that aligns with real customer needs.",
        },
        {
          title: "Competitive Analysis",
          description:
            "Understanding your competition is critical to building a differentiated product. We analyze market players, identify gaps, and help you make informed decisions that strengthen your product strategy and market entry.",
        },
        {
          title: "Revenue Model Design",
          description:
            "We help define how your product will generate revenue in a sustainable way. From pricing strategy to monetization models, we ensure your business is built for long-term growth and scalability.",
        },
        {
          title: "Growth & Roadmap Planning",
          description:
            "We create structured product roadmaps that outline key milestones, priorities, and execution phases. This ensures your startup moves forward with clarity, reduced risk, and a clear path to launch and scale.",
        },
      ],
    },
    coreCapabilities: {
      subtitle:
        "Our startup consulting services focus on building clarity before execution\u2014helping founders make the right decisions early and avoid costly mistakes later.",
      items: [
        {
          number: "01",
          title: "Idea Validation",
          description:
            "We assess whether your idea solves a real problem, for the right users, in the right market. This startup idea validation consulting removes assumptions and ensures you\u2019re building something worth executing.",
        },
        {
          number: "02",
          title: "Market & User Clarity",
          description:
            "We define your target users, use cases, and market positioning. Through structured startup market research consulting, we ensure your product direction is grounded in real demand\u2014not guesswork.",
        },
        {
          number: "03",
          title: "Product Scope & MVP Definition",
          description:
            "We help you decide what to build first\u2014and what not to. Our startup strategy consulting focuses on prioritization, ensuring your MVP is lean, relevant, and aligned with business goals.",
        },
        {
          number: "04",
          title: "Business Model & Cost Planning",
          description:
            "We define how your product will generate value and what it will take to build it. This includes pricing logic, revenue models, and startup business model consulting for execution clarity.",
        },
        {
          number: "05",
          title: "Roadmap & Execution Planning",
          description:
            "We translate strategy into a clear execution plan with milestones, timelines, and technical direction. Our startup roadmap planning ensures you move into development with confidence.",
        },
      ],
    },
    engagementModels: {
      subtitle:
        "Choose the right engagement model based on your scope, speed, and product stage.",
      items: [
        {
          title: "Fixed-Cost Development",
          description:
            "Best suited for clearly defined requirements, this model ensures predictable timelines, controlled budgets, and structured delivery\u2014ideal when your startup consulting services phase has already defined the scope.",
          image: "https://picsum.photos/seed/consult-fixed/600/400",
        },
        {
          title: "Dedicated Teams",
          description:
            "A fully aligned team working on your product continuously. This model supports long-term startup product development, giving you flexibility to scale while maintaining consistency, ownership, and execution speed.",
          image: "https://picsum.photos/seed/consult-dedicated/600/400",
        },
        {
          title: "Sprint-Based Execution",
          description:
            "Short, focused development cycles designed for rapid progress. Ideal for validation, feature builds, or accelerating delivery without long-term commitment, especially in early-stage startup consulting and development phases.",
          image: "https://picsum.photos/seed/consult-sprint/600/400",
        },
      ],
    },
    whyChooseUs: {
      subtitle:
        "Startup consulting only works when it leads to clear decisions and confident execution. That\u2019s where we focus.",
      heading: "Clarity Before You Build",
      content:
        "Our startup consulting services are designed to remove guesswork before development begins. We work closely with founders to validate ideas, define product direction, and build a structured execution plan, so every decision is backed by logic, not assumptions.",
      pointers: [
        "Clear direction through startup idea validation consulting, not assumptions",
        "Structured roadmap with practical startup strategy consulting",
        "Product and business thinking combined\u2014not isolated advice",
        "Early-stage clarity to reduce cost, rework, and execution risk",
        "The same team can transition into development without disconnect",
      ],
    },
    finalCta: {
      heading: "Start With Clarity. Build With Confidence.",
      subtitle:
        "Tell us what you\u2019re building or planning. Our startup consulting services help you validate ideas, define direction, and move forward with a clear execution plan.",
      cta: "Book an Idea Discovery Call",
    },
    faqs: [
      {
        question: "What are startup consulting services?",
        answer:
          "Startup consulting services help founders validate ideas, define product direction, and plan execution. They reduce uncertainty by providing structured guidance before development begins.",
      },
      {
        question:
          "Why is startup consulting important for early-stage founders?",
        answer:
          "Early-stage startup consulting helps avoid costly mistakes by validating ideas, defining scope, and creating a clear roadmap before investing in development.",
      },
      {
        question: "What does a startup consulting company do?",
        answer:
          "A startup consulting company provides idea validation, market research, product strategy, and execution planning to help startups move forward with clarity.",
      },
      {
        question: "Do you offer startup idea validation consulting?",
        answer:
          "Yes. We help founders validate their ideas through structured analysis of users, market demand, and feasibility before development begins.",
      },
      {
        question: "How long does startup consulting take?",
        answer:
          "Startup consulting timelines vary based on complexity, but typically range from a few weeks to structured sprint-based engagements.",
      },
      {
        question: "Can startup consulting help with product roadmap planning?",
        answer:
          "Yes. We provide startup roadmap planning that outlines features, milestones, timelines, and execution strategy.",
      },
    ],
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     2. STARTUP PRODUCT DEVELOPMENT
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    slug: "product-development",
    hero: {
      title: "Build Your Startup Product The Right Way",
      subtitle:
        "We deliver structured startup product development services that take you from MVP to scalable product, focused on real users, clean architecture, and long-term growth.",
      cta: "Book an Idea Discovery Call",
    },
    problemFraming: {
      heading: "Building Without Structure Leads To Rework",
      paragraphs: [
        "Many startups move into development without clear scope, priorities, or architecture. This often results in delays, wasted effort, and products that struggle to scale. As a startup product development company, we take a structured approach, aligning product strategy, engineering, and execution so every build phase moves you forward with clarity and confidence.",
      ],
    },
    whatWeDo: {
      subtitle:
        "Our startup product development services cover the complete journey from early MVP development to full-scale, production-ready platforms.",
      items: [
        {
          title: "MVP Development",
          description:
            "We help you define and build a focused MVP that solves a real problem and reaches users quickly. Our MVP development services prioritize speed, usability, and validation, so you launch with purpose, not assumptions.",
        },
        {
          title: "Product Roadmap & Planning",
          description:
            "We translate your vision into a clear product roadmap with defined features, timelines, and milestones. Our product roadmap consulting ensures development stays aligned with your business goals from day one.",
        },
        {
          title: "UI/UX Design & Wireframing",
          description:
            "We design user experiences that are simple, intuitive, and built for adoption. From wireframes to final UI, every design decision supports usability and product clarity.",
        },
        {
          title: "Full-Stack Development",
          description:
            "We handle frontend, backend, and core system architecture to deliver reliable, scalable products. As a startup product development company, we build systems that perform under growth\u2014not just at launch.",
        },
        {
          title: "QA, Testing & Deployment",
          description:
            "We ensure your product is stable, secure, and ready for real-world usage. Our process includes testing, performance checks, and production deployment for a smooth launch.",
        },
      ],
    },
    coreCapabilities: {
      subtitle:
        "Our startup product development company supports every stage of product execution from early MVPs to full-scale platforms.",
      items: [
        {
          number: "01",
          title: "MVP Development",
          description:
            "We build lean, functional MVPs that allow you to test your idea quickly. Our approach to MVP development for startups focuses on speed, usability, and real user feedback.",
        },
        {
          number: "02",
          title: "Product Architecture",
          description:
            "We design scalable systems that support growth from the start. Clean architecture ensures your product remains stable as users, features, and complexity increase.",
        },
        {
          number: "03",
          title: "Full-Scale Product Development",
          description:
            "We expand validated products into production-ready platforms. Our end-to-end product development startup approach ensures consistency from early builds to full deployment.",
        },
        {
          number: "04",
          title: "SaaS & Platform Development",
          description:
            "We build SaaS products and multi-user platforms with strong backend systems and scalable infrastructure, designed for long-term growth.",
        },
        {
          number: "05",
          title: "Performance & Optimization",
          description:
            "We continuously improve performance, stability, and user experience. This ensures your product evolves as your users and business grow.",
        },
      ],
    },
    engagementModels: {
      subtitle:
        "Choose how you build your product based on your scope, timeline, and growth stage.",
      items: [
        {
          title: "Fixed-Cost Development",
          description:
            "Best for clearly defined scopes, this model ensures predictable timelines and outcomes. Ideal when your MVP or feature set is well-structured and ready for execution.",
          image: "https://picsum.photos/seed/product-fixed/600/400",
        },
        {
          title: "Dedicated Teams",
          description:
            "A fully aligned team working exclusively on your product. This model supports long-term product development for startups, giving you flexibility to scale and iterate continuously.",
          image: "https://picsum.photos/seed/product-dedicated/600/400",
        },
        {
          title: "Sprint-Based Execution",
          description:
            "Short, focused cycles designed for rapid delivery. Ideal for MVP builds, feature releases, or accelerating specific parts of your product development journey.",
          image: "https://picsum.photos/seed/product-sprint/600/400",
        },
      ],
    },
    whyChooseUs: {
      subtitle:
        "Startup product development isn\u2019t just about writing code, it\u2019s about building something that works in the real world.",
      heading: "Built For Real-World Execution",
      content:
        "Our startup product development services focus on building products that are usable, scalable, and ready for growth. We combine product thinking with engineering discipline to ensure your product doesn\u2019t just launch\u2014but continues to evolve.",
      pointers: [
        "Product-first approach, not just feature delivery",
        "MVPs built for validation, not just speed",
        "Scalable architecture designed from day one",
        "Clear ownership from development to deployment",
        "Ability to extend teams as your product grows",
      ],
    },
    finalCta: {
      heading: "Ready To Build Your Product?",
      subtitle:
        "Tell us what you\u2019re building. As a startup product development company, we\u2019ll help you move from idea to launch with a clear, structured execution plan.",
      cta: "Book an Idea Discovery Call",
    },
    faqs: [
      {
        question: "What are startup product development services?",
        answer:
          "Startup product development services include MVP development, UI/UX design, engineering, and deployment to build scalable, market-ready products.",
      },
      {
        question: "Do you provide MVP development for startups?",
        answer:
          "Yes. Our MVP development services help startups build lean, functional products that validate ideas quickly.",
      },
      {
        question:
          "How is product development for startups different from traditional development?",
        answer:
          "It focuses on speed, validation, and scalability\u2014prioritizing essential features and evolving based on user feedback.",
      },
      {
        question:
          "Are you a startup product development company or just a development team?",
        answer:
          "We operate as a startup product development company, combining product strategy, engineering, and execution.",
      },
      {
        question: "Can you build an MVP and then scale it?",
        answer:
          "Yes. We offer end-to-end product development, starting from MVP and expanding into full-scale products.",
      },
      {
        question: "Do you offer end-to-end product development for startups?",
        answer:
          "Yes. We handle everything from planning to deployment under a structured development approach.",
      },
    ],
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     3. BRANDING & GTM SUPPORT
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    slug: "branding-gtm",
    hero: {
      title: "Make Your Product Clear, Visible, And Market-Ready",
      subtitle:
        "Our startup branding services and go-to-market strategy services help you position your product, communicate value clearly, and launch with confidence\u2014so users understand it from day one.",
      cta: "Book an Idea Discovery Call",
    },
    problemFraming: {
      heading: "If Users Don\u2019t Understand It, They Won\u2019t Use It",
      paragraphs: [
        "Many startups struggle not because of weak products, but because of unclear positioning and messaging. When users don\u2019t immediately understand what your product does or why it matters, adoption slows down. Our GTM consulting services focus on clarity, ensuring your product is positioned, communicated, and introduced in a way that connects with the right audience.",
      ],
    },
    whatWeDo: {
      subtitle:
        "Our branding services for startups and startup go to market consulting focus on making your product easier to understand, adopt, and scale.",
      items: [
        {
          title: "Product Positioning",
          description:
            "We define how your product should be perceived in the market, what it stands for, who it\u2019s for, and how it differentiates. Our startup positioning consulting ensures your product has a clear and focused identity.",
        },
        {
          title: "Messaging & Communication",
          description:
            "We structure how your product is explained across channels, website, demos, and pitch decks. This ensures your messaging is simple, consistent, and aligned with real product value.",
        },
        {
          title: "Go-To-Market Strategy",
          description:
            "We design a structured approach to launching your product, including timing, audience targeting, and execution. Our go-to-market strategy services ensure your product enters the market with clarity and direction.",
        },
        {
          title: "Early Customer Acquisition Planning",
          description:
            "We define how you attract your first users through practical and testable strategies. Our startup customer acquisition strategy focuses on channels that create early traction.",
        },
        {
          title: "Launch Preparation & Alignment",
          description:
            "We ensure your product, messaging, and launch assets are aligned before going live. Our startup launch marketing consulting helps you avoid confusion and present a clear story from the start.",
        },
      ],
    },
    coreCapabilities: {
      subtitle:
        "Our branding services for startups focus on making your product understandable, relatable, and ready for market.",
      items: [
        {
          number: "01",
          title: "Product Positioning",
          description:
            "We define your product\u2019s role in the market and how it stands out. Our brand strategy consulting ensures clarity in what you offer and why it matters.",
        },
        {
          number: "02",
          title: "Messaging Framework",
          description:
            "We create a consistent way to explain your product across all channels. This helps users quickly understand your value without confusion.",
        },
        {
          number: "03",
          title: "Go-To-Market Planning",
          description:
            "We design launch strategies that align product readiness with communication and timing. Our go-to-market strategy services focus on clarity and execution.",
        },
        {
          number: "04",
          title: "Customer Acquisition Strategy",
          description:
            "We define practical approaches to attract and engage early users. Our strategies focus on real traction, not assumptions.",
        },
        {
          number: "05",
          title: "Launch Readiness",
          description:
            "We ensure everything is aligned before launch\u2014product, messaging, and presentation\u2014so your product enters the market clearly and confidently.",
        },
      ],
    },
    engagementModels: {
      subtitle:
        "Choose how you engage based on your product stage and launch readiness.",
      items: [
        {
          title: "Fixed-Cost Engagement",
          description:
            "Best for clearly defined branding or GTM requirements such as positioning, messaging, or launch strategy. Ideal when you need structured outputs with defined timelines.",
          image: "https://picsum.photos/seed/branding-fixed/600/400",
        },
        {
          title: "Dedicated Teams",
          description:
            "Work with a focused team that continuously refines your positioning, messaging, and go-to-market strategy as your product evolves.",
          image: "https://picsum.photos/seed/branding-dedicated/600/400",
        },
        {
          title: "Sprint-Based Execution",
          description:
            "Short, focused engagements designed to quickly solve specific challenges\u2014such as refining messaging, fixing positioning gaps, or preparing for launch.",
          image: "https://picsum.photos/seed/branding-sprint/600/400",
        },
      ],
    },
    whyChooseUs: {
      subtitle:
        "We don\u2019t create branding for the sake of aesthetics\u2014we create clarity that drives adoption.",
      heading: "Positioning That Makes Sense",
      content:
        "Our startup branding services are grounded in how your product actually works. We help founders simplify complex ideas, communicate value clearly, and align their product with market expectations, so users understand and adopt it faster.",
      pointers: [
        "Product-led positioning, not generic branding",
        "Messaging aligned with real functionality",
        "Clear, simple communication across all touchpoints",
        "Practical startup marketing strategy consulting, not theory",
        "Strong alignment between product, brand, and launch",
      ],
    },
    finalCta: {
      heading: "Ready To Launch With Clarity?",
      subtitle:
        "Let\u2019s make sure your product is positioned, communicated, and introduced in a way that drives understanding and adoption.",
      cta: "Book an Idea Discovery Call",
    },
    faqs: [
      {
        question: "What are startup branding services?",
        answer:
          "Startup branding services help define product positioning, messaging, and identity so users understand and connect with your product.",
      },
      {
        question: "What are go-to-market strategy services?",
        answer:
          "Go-to-market strategy services help startups plan and execute product launches with clear positioning, timing, and audience targeting.",
      },
      {
        question: "Do you offer startup positioning consulting?",
        answer:
          "Yes. We define how your product should be perceived in the market and ensure it stands out with a clear, focused identity.",
      },
      {
        question: "How do you help with startup launch marketing?",
        answer:
          "We align product, messaging, and launch assets so your product enters the market clearly and confidently.",
      },
      {
        question: "Do you provide GTM consulting services?",
        answer:
          "Yes. Our GTM consulting services focus on structured launch planning, audience targeting, and market entry execution.",
      },
      {
        question: "Can you help with early customer acquisition strategy?",
        answer:
          "Yes. We define practical approaches to attract and engage early users through testable, traction-focused strategies.",
      },
    ],
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     4. INVESTOR READINESS SUPPORT
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    slug: "investor-readiness",
    hero: {
      title: "Be Ready When Investors Start Asking Questions",
      subtitle:
        "Our investor readiness consulting helps founders prepare for real investor conversations\u2014covering product clarity, growth strategy, and structured presentation so you\u2019re ready to raise with confidence.",
      cta: "Book an Idea Discovery Call",
    },
    problemFraming: {
      heading:
        "Investors Don\u2019t Fund Ideas. They Fund Clarity And Execution",
      paragraphs: [
        "Many startups approach fundraising with incomplete preparation\u2014unclear product positioning, weak narratives, or unrealistic growth plans. This leads to missed opportunities and difficult investor conversations. Our investment readiness services focus on preparing you for how investors actually evaluate startups\u2014so you walk in with clarity, confidence, and a structured story.",
      ],
    },
    whatWeDo: {
      subtitle:
        "Our startup fundraising consulting focuses on preparing founders for meaningful, structured investor conversations\u2014not just presentations.",
      items: [
        {
          title: "Product & Business Clarity",
          description:
            "We help you clearly articulate what you\u2019re building, who it\u2019s for, and why it matters. This ensures your product story is easy to understand and aligned with market opportunity.",
        },
        {
          title: "Investor Narrative & Pitch Structure",
          description:
            "We structure how your product, business model, and growth story are presented. Our pitch deck consulting services focus on clarity, flow, and investor expectations\u2014not just slide design.",
        },
        {
          title: "Fundraising Strategy Planning",
          description:
            "We help define how you approach fundraising\u2014target investors, timelines, and positioning. Our fundraising strategy consulting ensures your approach is structured and realistic.",
        },
        {
          title: "Financial & Growth Alignment",
          description:
            "We align your product roadmap with realistic growth projections. Our startup financial modeling consulting ensures your numbers support your story and investor expectations.",
        },
        {
          title: "Investor Preparation & Practice",
          description:
            "We help founders prepare for real investor interactions\u2014questions, objections, and discussions. Our investor pitch preparation ensures you\u2019re confident, clear, and ready.",
        },
      ],
    },
    coreCapabilities: {
      subtitle:
        "Our investment readiness services ensure you\u2019re prepared across every aspect of investor evaluation.",
      items: [
        {
          number: "01",
          title: "Investor Narrative Structuring",
          description:
            "We help you build a clear, compelling story around your product, market, and opportunity. This ensures your pitch is easy to follow and aligned with investor expectations.",
        },
        {
          number: "02",
          title: "Pitch Deck Support",
          description:
            "We guide the structure and content of your pitch deck to ensure clarity, flow, and impact. Our startup pitch deck consultant approach focuses on substance, not just design.",
        },
        {
          number: "03",
          title: "Fundraising Strategy",
          description:
            "We help you define how to approach investors, which stage to target, and how to position your startup effectively in funding conversations.",
        },
        {
          number: "04",
          title: "Financial & Growth Planning",
          description:
            "We align your financial projections and growth expectations with realistic product and market dynamics.",
        },
        {
          number: "05",
          title: "Investor Readiness Preparation",
          description:
            "We prepare you for investor meetings\u2014questions, discussions, and expectations\u2014so you enter conversations with confidence and clarity.",
        },
      ],
    },
    engagementModels: {
      subtitle:
        "Choose how you prepare based on your funding stage and timeline.",
      items: [
        {
          title: "Fixed-Cost Engagement",
          description:
            "Best for structured investor readiness support\u2014pitch preparation, narrative structuring, and fundraising strategy. Ideal when you have a defined goal and timeline.",
          image: "https://picsum.photos/seed/investor-fixed/600/400",
        },
        {
          title: "Dedicated Teams",
          description:
            "Work closely with a team that supports you throughout your fundraising journey\u2014refining your narrative, materials, and strategy as conversations progress.",
          image: "https://picsum.photos/seed/investor-dedicated/600/400",
        },
        {
          title: "Sprint-Based Execution",
          description:
            "Short, focused engagements designed to quickly prepare you for investor meetings\u2014ideal for refining pitch decks, narratives, or key funding discussions.",
          image: "https://picsum.photos/seed/investor-sprint/600/400",
        },
      ],
    },
    whyChooseUs: {
      subtitle:
        "We prepare founders for real investor conversations\u2014not just presentations.",
      heading: "Preparation That Goes Beyond The Pitch Deck",
      content:
        "Our investor readiness consulting focuses on how your product, business, and growth story come together. We help founders build credibility, align their narrative with reality, and approach fundraising with clarity\u2014not assumptions.",
      pointers: [
        "Investor preparation grounded in real product and business logic",
        "Clear, structured startup funding strategy consulting",
        "Pitch narratives aligned with actual execution",
        "Focus on credibility, not just presentation",
        "Practical guidance for real investor conversations",
      ],
    },
    finalCta: {
      heading: "Preparing For Investor Conversations?",
      subtitle:
        "Let\u2019s make sure your product, narrative, and strategy are aligned so you can approach investors with confidence and clarity.",
      cta: "Book an Idea Discovery Call",
    },
    faqs: [
      {
        question: "What is investor readiness consulting?",
        answer:
          "Investor readiness consulting prepares startups for fundraising by improving product clarity, pitch structure, and growth alignment.",
      },
      {
        question: "What are investment readiness services?",
        answer:
          "Investment readiness services ensure startups are prepared across product, financials, and strategy before approaching investors.",
      },
      {
        question: "Do you provide pitch deck consulting services?",
        answer:
          "Yes. We help structure pitch decks with clear narratives aligned with investor expectations.",
      },
      {
        question: "How do you help with startup fundraising consulting?",
        answer:
          "We define fundraising strategy, target investors, and align product and growth narratives for investor discussions.",
      },
      {
        question: "Do you help with startup financial modeling consulting?",
        answer:
          "Yes. We help align financial projections with realistic product and market growth expectations.",
      },
      {
        question: "What is venture capital readiness consulting?",
        answer:
          "It prepares startups for VC funding by aligning product, growth strategy, and investor expectations.",
      },
    ],
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     5. POST-LAUNCH SUPPORT
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    slug: "post-launch-support",
    hero: {
      title: "Scale What You\u2019ve Built. Improve What Matters.",
      subtitle:
        "Our post-launch support services and startup growth consulting help you improve performance, scale your product, and make data-driven decisions after launch, so your product continues to grow, not stall.",
      cta: "Book an Idea Discovery Call",
    },
    problemFraming: {
      heading: "Launch Is Just The Beginning",
      paragraphs: [
        "Many startups treat launch as the finish line, but real challenges begin after users start interacting with your product. Without structured post-launch startup support, products face performance issues, unclear growth direction, and missed opportunities. Our approach focuses on continuous improvement, ensuring your product evolves with user behavior, market feedback, and growth demands.",
      ],
    },
    whatWeDo: {
      subtitle:
        "Our startup growth consulting focuses on helping founders improve, scale, and optimize products after launch.",
      items: [
        {
          title: "Product Performance Optimization",
          description:
            "We analyze how your product performs in real-world usage and identify areas for improvement. Our startup optimization services focus on stability, usability, and performance.",
        },
        {
          title: "User Behavior & Traction Analysis",
          description:
            "We help you understand how users interact with your product, what works, what doesn\u2019t, and where improvements are needed. Our startup traction consulting focuses on real user insights.",
        },
        {
          title: "Growth Strategy & Scaling",
          description:
            "We define how your product grows, feature expansion, user acquisition, and scaling decisions. Our startup growth strategy consulting ensures your growth is structured and sustainable.",
        },
        {
          title: "Product Iteration & Enhancements",
          description:
            "We guide how your product evolves based on user feedback and performance data. Our product scaling consulting ensures improvements are meaningful and aligned with growth.",
        },
        {
          title: "KPI & Metrics Planning",
          description:
            "We help define what success looks like through measurable metrics. Our startup KPI strategy consulting ensures your growth decisions are data-driven and trackable.",
        },
      ],
    },
    coreCapabilities: {
      subtitle:
        "Our post-launch startup support ensures your product evolves, improves, and scales effectively.",
      items: [
        {
          number: "01",
          title: "Performance Optimization",
          description:
            "We identify and fix performance issues to improve speed, reliability, and usability across your product.",
        },
        {
          number: "02",
          title: "User Behavior Analysis",
          description:
            "We analyze how users interact with your product to uncover insights that drive meaningful improvements.",
        },
        {
          number: "03",
          title: "Growth Strategy Planning",
          description:
            "We define structured growth paths based on user data, market conditions, and product readiness.",
        },
        {
          number: "04",
          title: "Product Scaling",
          description:
            "We guide how your product expands, features, users, and infrastructure, without compromising performance.",
        },
        {
          number: "05",
          title: "Metrics & KPI Strategy",
          description:
            "We define clear success metrics and tracking systems to guide ongoing product decisions and growth.",
        },
      ],
    },
    engagementModels: {
      subtitle:
        "Choose how you scale your product based on your growth stage and operational needs.",
      items: [
        {
          title: "Fixed-Cost Engagement",
          description:
            "Best for clearly defined improvements, performance optimization, feature enhancements, or specific growth initiatives with defined scope and timelines.",
          image: "https://picsum.photos/seed/postlaunch-fixed/600/400",
        },
        {
          title: "Dedicated Teams",
          description:
            "A continuous support model where a team works alongside you to improve, iterate, and scale your product over time.",
          image: "https://picsum.photos/seed/postlaunch-dedicated/600/400",
        },
        {
          title: "Sprint-Based Execution",
          description:
            "Short, focused cycles designed to deliver rapid improvements, ideal for testing changes, optimizing features, and accelerating growth.",
          image: "https://picsum.photos/seed/postlaunch-sprint/600/400",
        },
      ],
    },
    whyChooseUs: {
      subtitle:
        "We focus on growth that\u2019s measurable, practical, and aligned with your product.",
      heading: "Growth That\u2019s Structured, Not Reactive",
      content:
        "Our post-launch support services go beyond quick fixes. We help founders understand performance, prioritize improvements, and scale products with clarity, so growth decisions are intentional, not reactive.",
      pointers: [
        "Data-driven startup growth consulting, not guesswork",
        "Focus on real user behavior and product performance",
        "Structured approach to scaling and iteration",
        "Clear metrics and measurable outcomes",
        "Continuous improvement aligned with business goals",
      ],
    },
    finalCta: {
      heading: "Ready To Scale Your Product?",
      subtitle:
        "Let\u2019s improve performance, refine your product, and build a clear path for sustainable growth after launch.",
      cta: "Book an Idea Discovery Call",
    },
    faqs: [
      {
        question: "What are post launch support services?",
        answer:
          "Post launch support services focus on improving product performance, stability, and scalability after launch.",
      },
      {
        question: "What is startup growth consulting?",
        answer:
          "Startup growth consulting helps optimize product performance, define growth strategies, and scale based on real user data.",
      },
      {
        question: "How do you support startup scaling?",
        answer:
          "We analyze performance, identify improvements, and guide structured scaling strategies for products and operations.",
      },
      {
        question: "Do you offer startup optimization services?",
        answer:
          "Yes. We provide optimization services focused on performance, usability, and user experience improvements.",
      },
      {
        question: "What is startup traction consulting?",
        answer:
          "Startup traction consulting focuses on understanding user behavior and improving product adoption.",
      },
      {
        question: "Do you help with product scaling consulting?",
        answer:
          "Yes. We guide product scaling through structured improvements and growth strategies.",
      },
    ],
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     6. MANAGED OPERATIONS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    slug: "managed-operations",
    hero: {
      title: "Run Your Operations With Structure And Control",
      subtitle:
        "Our managed operations services help startups streamline processes, improve efficiency, and maintain consistent execution, so your business runs smoothly as you scale.",
      cta: "Book an Idea Discovery Call",
    },
    problemFraming: {
      heading: "Growth Breaks Systems That Aren\u2019t Structured",
      paragraphs: [
        "As startups grow, operations become more complex, workflows break, teams lose alignment, and execution slows down. Without structured IT operations management services, businesses struggle to maintain consistency and control. Our approach focuses on building reliable systems and processes that support growth without chaos.",
      ],
    },
    whatWeDo: {
      subtitle:
        "Our startup operations consulting and managed operations services focus on improving execution, efficiency, and operational clarity.",
      items: [
        {
          title: "Operations Structure & Process Design",
          description:
            "We define how your business operates across teams, workflows, and systems. Our operational strategy consulting ensures your processes are clear, repeatable, and scalable.",
        },
        {
          title: "Workflow Optimization",
          description:
            "We analyze existing processes and remove inefficiencies. Our business process optimization consulting focuses on improving speed, coordination, and execution quality.",
        },
        {
          title: "Execution Management & Oversight",
          description:
            "We help ensure that plans translate into consistent execution. Acting as a startup execution partner, we bring structure, accountability, and operational clarity.",
        },
        {
          title: "Team Coordination & Alignment",
          description:
            "We align teams, roles, and responsibilities to improve collaboration and reduce friction. Our approach ensures everyone works toward shared goals.",
        },
        {
          title: "Operational Scaling & Expansion",
          description:
            "We prepare your operations to handle growth, new users, teams, and processes. Our startup operations management ensures your business scales without losing control.",
        },
      ],
    },
    coreCapabilities: {
      subtitle:
        "Our managed operations services support efficient execution and scalable business operations.",
      items: [
        {
          number: "01",
          title: "Operations Management",
          description:
            "We help structure and manage day-to-day operations to ensure consistency, efficiency, and alignment across teams.",
        },
        {
          number: "02",
          title: "Process Optimization",
          description:
            "We identify inefficiencies and improve workflows to enhance speed and execution quality.",
        },
        {
          number: "03",
          title: "Execution Oversight",
          description:
            "We ensure plans are implemented effectively with clear accountability and structured execution.",
        },
        {
          number: "04",
          title: "Operational Strategy",
          description:
            "We define how your operations evolve as your business grows, ensuring scalability and sustainability.",
        },
        {
          number: "05",
          title: "Outsourced Operations Support",
          description:
            "We provide ongoing support through outsourced operations management, allowing you to focus on growth while we manage execution.",
        },
      ],
    },
    engagementModels: {
      subtitle:
        "Choose how you manage and scale operations based on your business needs and growth stage.",
      items: [
        {
          title: "Fixed-Cost Engagement",
          description:
            "Best for clearly defined operational improvements, process setup, workflow design, or system optimization with defined scope and timelines.",
          image: "https://picsum.photos/seed/ops-fixed/600/400",
        },
        {
          title: "Dedicated Teams",
          description:
            "A continuous support model where a team works with you to manage, optimize, and improve operations over time.",
          image: "https://picsum.photos/seed/ops-dedicated/600/400",
        },
        {
          title: "Sprint-Based Execution",
          description:
            "Short, focused engagements designed to solve specific operational challenges quickly, ideal for process fixes or execution bottlenecks.",
          image: "https://picsum.photos/seed/ops-sprint/600/400",
        },
      ],
    },
    whyChooseUs: {
      subtitle: "Operations should enable growth, not slow it down.",
      heading: "Execution That Stays Consistent As You Scale",
      content:
        "Our managed operations services focus on building systems that work consistently as your business grows. We help founders move from reactive execution to structured operations, so decisions, workflows, and outcomes remain aligned.",
      pointers: [
        "Structured startup operations consulting, not ad-hoc fixes",
        "Clear processes that scale with business growth",
        "Focus on execution, accountability, and efficiency",
        "Practical operational excellence consulting, not theory",
        "Systems designed for long-term reliability",
      ],
    },
    finalCta: {
      heading: "Need Better Operational Control?",
      subtitle:
        "Let\u2019s build structured systems and processes that help your business run smoothly as it grows.",
      cta: "Book an Idea Discovery Call",
    },
    faqs: [
      {
        question: "What are managed operations services?",
        answer:
          "Managed operations services help businesses streamline workflows, improve efficiency, and ensure consistent execution.",
      },
      {
        question: "What is startup operations consulting?",
        answer:
          "Startup operations consulting focuses on building processes, improving workflows, and ensuring structured execution.",
      },
      {
        question: "Do you offer outsourced operations management?",
        answer:
          "Yes. We provide outsourced operations management to help businesses maintain efficiency while scaling.",
      },
      {
        question: "What is operational excellence consulting?",
        answer:
          "Operational excellence consulting focuses on improving efficiency, consistency, and process performance across the business.",
      },
      {
        question: "How do you improve business operations?",
        answer:
          "We analyze workflows, identify inefficiencies, and implement structured improvements for better execution.",
      },
      {
        question: "What are business operations management services?",
        answer:
          "These services focus on managing and optimizing workflows, processes, and execution across teams.",
      },
    ],
  },
];
