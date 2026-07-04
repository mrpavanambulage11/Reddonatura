const PHONE_DISPLAY = "+91 77609 87934";
const EMAIL = "info@reddonatura.com";

type Entry = { keywords: string[]; answer: string };

const knowledge: Entry[] = [
  {
    keywords: ["hi", "hello", "hey", "namaste", "good morning", "good afternoon", "good evening"],
    answer: "Hello! 👋 I'm the Reddonatura assistant. Ask me about our products, industries we serve, pricing, or how to get started — or tap \"Start a Conversation\" below to talk to our team directly.",
  },
  {
    keywords: ["who are you", "about reddonatura", "about you", "company", "what is reddonatura", "what do you do"],
    answer: "Reddonatura is a global leader in organic waste management, founded in 2013 and pioneering the 'Garbage to Green' movement. We're CE-certified and serve 7,000+ clients across 20+ countries with waste converters, biogas plants, dewatering systems, and solar solutions.",
  },
  {
    keywords: ["product", "machine", "offer", "solution", "range"],
    answer: "We offer a full range of solutions: Organic Waste Converters & Digesters, Biogas Plants, De-Watering Systems, Industrial Shredders, Trommel Screens, Windrow Composting, Bio-Mining, Pyrolysis, and Solar Solutions. Which one would you like to know more about?",
  },
  {
    keywords: ["owc", "converter", "digester", "compost machine", "organic waste"],
    answer: "Our Organic Waste Converters (rNature series) are CE-certified, fully automatic machines that turn food and organic waste into nutrient-rich compost in as little as 24 hours — with zero harmful discharge. Models range from 25 kg/day to 1250 kg/day.",
  },
  {
    keywords: ["biogas", "gas plant"],
    answer: "Our RN Biogas plants convert organic waste into renewable biogas for cooking, heating, or electricity — available in containerized, fixed dome, geo membrane, and floating drum configurations, cutting greenhouse gas emissions by up to 90%.",
  },
  {
    keywords: ["dewater", "dewatering", "water reduction"],
    answer: "The rNATURE Dewaterer reduces food waste volume by 60–70% using centrifugal technology — a compact, plug-and-play unit ideal for commercial kitchens.",
  },
  {
    keywords: ["solar", "renewable energy", "panel"],
    answer: "We design on-grid, off-grid, and hybrid solar systems tailored to your facility's energy needs, backed by real-time monitoring.",
  },
  {
    keywords: ["shredder", "shred"],
    answer: "Our industrial shredders (single, dual, four-shaft, and wood chippers) are engineered for high-torque, low-noise, auto-reverse operation across a wide range of waste streams.",
  },
  {
    keywords: ["trommel", "screening"],
    answer: "Our trommel screens deliver efficient waste sorting and separation for landfill sites, MBT plants, and recycling facilities.",
  },
  {
    keywords: ["biomining", "bio-mining", "landfill"],
    answer: "Our biomining solutions scientifically excavate and segregate legacy landfill waste, recovering compost, RDF, and inert materials while reducing landfill volume by up to 95%.",
  },
  {
    keywords: ["pyrolysis", "plastic waste", "tyre"],
    answer: "Our pyrolysis systems convert plastic and rubber waste into pyrolysis oil, carbon black, and syngas — near-zero landfill with commercially usable outputs.",
  },
  {
    keywords: ["windrow", "cluster compost"],
    answer: "Our solarised windrow composting systems are ideal for large-scale municipal and institutional organic waste, using automated turning for consistent, high-grade compost.",
  },
  {
    keywords: ["industry", "industries", "who do you work with", "clients", "sectors"],
    answer: "We serve 10+ industries including hotels, hospitals, municipalities, airports, food processing, and residential complexes — trusted by 7,000+ clients including IBIS Hotels, Marriott Bonvoy, IKEA, McDonald's, and Kempegowda International Airport.",
  },
  {
    keywords: ["price", "pricing", "cost", "quote", "quotation", "how much"],
    answer: "Pricing depends on your waste volume, facility type, and configuration. Tap \"Get a Free Quote\" below and our team will prepare a tailored proposal for you within 24 hours.",
  },
  {
    keywords: ["country", "countries", "location", "where are you", "global", "presence", "bangalore", "bengaluru"],
    answer: "We have installations across 20+ countries — including the UAE, Maldives, UK, Italy, Russia, Thailand, and Mexico — alongside our HQ in Bengaluru, India.",
  },
  {
    keywords: ["contact", "phone number", "email", "address", "reach you", "call you"],
    answer: `You can reach us at ${PHONE_DISPLAY} or ${EMAIL}. Our office is at Sy. No 41/1, Veerenahalli Village, Virgonagar Industrial Estate, Bengaluru, Karnataka 560049.`,
  },
  {
    keywords: ["install", "installation", "how long", "setup", "timeline", "deploy"],
    answer: "Installation timelines vary by system — containerized biogas plants can be deployed in days, while larger custom systems take a few weeks. Our team handles site assessment, delivery, and commissioning end-to-end.",
  },
  {
    keywords: ["certified", "certification", "ce mark", "quality", "standard"],
    answer: "Yes — all our machines are CE-certified, meeting international safety and quality standards.",
  },
  {
    keywords: ["environment", "sustainable", "green", "eco", "emission", "carbon"],
    answer: "Our systems significantly cut landfill waste and emissions — from 90% GHG reduction with biogas to near-zero landfill outcomes with pyrolysis and biomining.",
  },
  {
    keywords: ["support", "maintenance", "warranty", "after sales", "service plan"],
    answer: "We offer tiered maintenance packages (Basic, Standard, Premium) with inspections, remote diagnostics, and 24/7 dedicated support, plus a warranty on all equipment.",
  },
  {
    keywords: ["thank", "thanks", "thank you"],
    answer: "You're very welcome! Let us know if there's anything else you'd like to know. 🌿",
  },
  {
    keywords: ["bye", "goodbye", "see you"],
    answer: "Thanks for stopping by! Feel free to reach out anytime — have a great day. 🌿",
  },
];

const FALLBACK =
  "That's a great question — let me connect you with our team for a detailed answer. Tap \"Start a Conversation\" below, or reach us directly via call, email, or WhatsApp.";

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchesKeyword(text: string, keyword: string): boolean {
  return new RegExp(`\\b${escapeRegex(keyword)}\\b`, "i").test(text);
}

export function getBotAnswer(input: string): string {
  const text = input.toLowerCase();
  for (const entry of knowledge) {
    if (entry.keywords.some((kw) => matchesKeyword(text, kw))) {
      return entry.answer;
    }
  }
  return FALLBACK;
}

export const suggestedQuestions = [
  "What products do you offer?",
  "Which industries do you serve?",
  "How can I get a quote?",
  "Where are you located?",
];
