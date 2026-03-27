export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  author: string;
  thumbnail: string;
  heroImage: string;
}

export const insights: Insight[] = [
  {
    slug: "the-mvp-trap-why-most-startups-fail-after-launch",
    title: "The MVP Trap: Why Most Startups Fail After Launch",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Pretium orci nunc enim massa magna duis arcu mattis morbi.",
    content: [
      "The startup ecosystem is filled with stories of brilliant ideas that never made it to market. According to recent data, over 90% of startups fail, and a significant portion of those failures happen before the product ever finds its market fit.",
      "The primary reason isn't a lack of talent or funding — it's a lack of structured validation. Founders often fall in love with their solution without deeply understanding the problem they're solving or whether enough people share that problem.",
      "At Ideaz Ventures, we've observed three critical patterns that lead to early-stage failure: building before validating, scaling before finding fit, and optimizing before understanding.",
      "Structured validation involves systematic market research, customer interviews, prototype testing, and iterative refinement. It's not about moving slowly — it's about moving with clarity and purpose.",
    ],
    category: "Strategy",
    date: "12/02/2026",
    readTime: "5 min read",
    author: "Ideaz Ventures",
    thumbnail: "/assets/insightImage.png",
    heroImage: "/assets/insightImage.png",
  },
  {
    slug: "technical-architecture-in-startup-success",
    title: "The MVP Trap: Why Most Startups Fail After Launch",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Pretium orci nunc enim massa magna duis arcu mattis morbi.",
    content: [
      "Technical architecture decisions made in the first few months of a startup's life have outsized impact on its trajectory.",
      "We've seen startups spend 60% of their engineering resources on re-architecture that could have been avoided with thoughtful initial design.",
      "Key principles for startup-stage architecture include: choosing boring technology for core systems, designing for the next 10x of scale, and implementing proper separation of concerns from day one.",
    ],
    category: "Technology",
    date: "12/02/2026",
    readTime: "7 min read",
    author: "Ideaz Ventures",
    thumbnail: "/assets/insightImage.png",
    heroImage: "/assets/insightImage.png",
  },
  {
    slug: "building-investor-ready-products",
    title: "The MVP Trap: Why Most Startups Fail After Launch",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Pretium orci nunc enim massa magna duis arcu mattis morbi.",
    content: [
      "Most founders focus their investor preparation on the pitch deck. While a compelling narrative is important, what truly moves investors is evidence of execution.",
      "Investors evaluate startups across multiple dimensions: team capability, market size, product quality, traction metrics, and unit economics.",
      "Our Investor Readiness Support service helps founders prepare not just their pitch, but their entire product and data infrastructure for due diligence.",
    ],
    category: "Fundraising",
    date: "12/02/2026",
    readTime: "6 min read",
    author: "Ideaz Ventures",
    thumbnail: "/assets/insightImage.png",
    heroImage: "/assets/insightImage.png",
  },
  {
    slug: "from-mvp-to-scale-execution-playbook",
    title: "The MVP Trap: Why Most Startups Fail After Launch",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Pretium orci nunc enim massa magna duis arcu mattis morbi.",
    content: [
      "The journey from MVP to scale is where most startups either break through or break down.",
      "Phase 1: Post-MVP Validation. This phase is about learning, not growing. Focus on user interviews, tracking engagement metrics, and iterating rapidly based on feedback.",
      "Phase 2: Growth Foundation. Once you've confirmed PMF, invest in the infrastructure for growth: automated testing, monitoring, CI/CD, and performance optimization.",
    ],
    category: "Growth",
    date: "12/02/2026",
    readTime: "8 min read",
    author: "Ideaz Ventures",
    thumbnail: "/assets/insightImage.png",
    heroImage: "/assets/insightImage.png",
  },
  {
    slug: "scaling-engineering-teams-for-startups",
    title: "The MVP Trap: Why Most Startups Fail After Launch",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Pretium orci nunc enim massa magna duis arcu mattis morbi.",
    content: [
      "Scaling an engineering team is one of the most challenging aspects of growing a startup.",
      "The key is to establish strong engineering practices and culture before rapid hiring begins.",
      "Our approach ensures that new team members can contribute effectively from day one.",
    ],
    category: "Engineering",
    date: "12/02/2026",
    readTime: "6 min read",
    author: "Ideaz Ventures",
    thumbnail: "/assets/insightImage.png",
    heroImage: "/assets/insightImage.png",
  },
  {
    slug: "product-market-fit-validation-framework",
    title: "The MVP Trap: Why Most Startups Fail After Launch",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Pretium orci nunc enim massa magna duis arcu mattis morbi.",
    content: [
      "Finding product-market fit is the single most important milestone for any early-stage startup.",
      "Our validation framework provides a systematic approach to testing assumptions and iterating toward fit.",
      "The framework has been refined through our work with 15+ ventures across multiple industries.",
    ],
    category: "Strategy",
    date: "12/02/2026",
    readTime: "5 min read",
    author: "Ideaz Ventures",
    thumbnail: "/assets/insightImage.png",
    heroImage: "/assets/insightImage.png",
  },
];
