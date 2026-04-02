/**
 * Central copy + structured content. Edit here to update the site.
 */

/** Hosted in /public — update the file there when your resume changes */
export const resumeUrl = "/Jack_Chindlund_Resume.pdf";

export const person = {
  name: "Jack Chindlund",
  headline:
    "Marketing Candidate Focused on Consumer Insight, Brand Strategy, and Product Thinking",
  intro: [
    "I’m a marketing student at the University of Colorado Boulder, focused on how people make decisions—and how brands can turn that insight into strategy that drives growth.",
    "Through case competitions, project work, and time working with customers, I keep coming back to positioning, messaging, and go-to-market plans that are clear and feel relevant in real life.",
  ],
  headshotSrc: "/images/Jack_Chindlund_Headshot.jpg",
  headshotAlt: "Jack Chindlund",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export type Project = {
  title: string;
  tags: string[];
  challenge: string;
  insight: string;
  strategy: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    title: "Natrol Melatonin — Brand Strategy & Influencer Platform",
    tags: ["Brand strategy", "Influencer", "Wellness"],
    challenge:
      "Natrol needed to increase engagement and stand out in a crowded sleep aid market where many brands relied on similar messaging.",
    insight:
      "Younger consumers were disengaged from traditional wellness messaging and responded more to lifestyle-driven, relatable content.",
    strategy:
      "Developed a tiered influencer strategy designed to reposition Natrol around real-life sleep habits and routines, making the brand feel more authentic and accessible.",
    outcome:
      "Presented the strategy to senior leadership at Vytalogy Wellness and placed 2nd in a national case competition, competing against top undergraduate teams.",
  },
  {
    title: "ReFill — Sustainable Consumer Product Concept",
    tags: ["Product concept", "GTM", "Sustainability"],
    challenge:
      "Consumers are increasingly aware of sustainability issues, but many existing solutions require trade-offs in convenience or cost.",
    insight:
      "Most consumers want to make more sustainable choices, but only if the solution fits easily into their current behavior.",
    strategy:
      "Designed a refill-based product system focused on simplicity, accessibility, and long-term value, supported by clear pricing and positioning.",
    outcome:
      "Developed a full go-to-market plan including target audience, branding, pricing strategy, and customer experience.",
  },
];

export const valueProps = [
  {
    title: "Consumer insight",
    body: "I focus on understanding how and why consumers make decisions, and use that insight to guide strategy.",
  },
  {
    title: "Brand & positioning",
    body: "I’ve worked on messaging and positioning that help brands stand out in crowded markets.",
  },
  {
    title: "Product & customer mindset",
    body: "I think about marketing beyond campaigns—focusing on how the product, positioning, and customer experience all work together to drive long-term engagement.",
  },
  {
    title: "Real customer conversations",
    body: "As a Shift Lead at Best Buy, I work with customers in live purchase journeys—unpacking needs, objections, and what actually moves decisions.",
  },
];

export const experienceRoles = [
  {
    title: "Best Buy — Shift Lead",
    bullets: [
      "Partner with customers on the sales floor to uncover needs, clarify trade-offs, and translate features into benefits that match how people shop and decide.",
      "Develop a practical read on objections, decision stages, and what nudges consideration—context I bring into messaging, targeting, and path-to-purchase thinking.",
      "Guide solutions-led recommendations that widen relevance (basket-building) by connecting situational context to the right products.",
      "Coach teammates on discovery questions and consultative framing so conversations stay customer-led—closer to insight work than scripted selling.",
    ],
  },
  {
    title: "University of Colorado Boulder — Leeds School of Business",
    bullets: [
      "B.S. in Business Administration",
      "Emphasis in Marketing & Entrepreneurship",
      "Experience in case competitions, brand strategy, and go-to-market planning",
    ],
  },
];

export const tools = [
  "Excel",
  "PowerPoint",
  "Google Sheets",
  "Canva",
  "Qualtrics",
  "Consumer insights",
  "Positioning",
  "Messaging",
  "Go-to-market strategy",
];

export const aboutParagraphs = [
  "I’m interested in marketing because it sits at the intersection of consumer behavior, strategy, and creativity—but what interests me most is understanding what actually drives people to act.",
  "Through school and real-world experience, I’ve been building my skills in consumer insight, positioning, and go-to-market thinking.",
  "I’m looking for a marketing role where I can keep growing and contribute to brand work that matters.",
];

export const contact = {
  headline: "Let’s connect.",
  email: "jackchindlund@comcast.net",
  linkedin: "https://www.linkedin.com/in/jack-chindlund",
};
