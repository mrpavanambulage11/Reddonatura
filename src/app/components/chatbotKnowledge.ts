const PHONE_DISPLAY = "+91 77609 87934";
const EMAIL = "info@reddonatura.com";

type Entry = { keywords: string[]; answer: string };

export type BotAnswer = { text: string; isFallback: boolean };

const knowledge: Entry[] = [
  {
    keywords: ["hi", "hello", "hey", "yo", "namaste", "good morning", "good afternoon", "good evening", "greetings"],
    answer: "Hello! 👋 I'm the Reddonatura assistant. Ask me about our products, industries we serve, pricing, or how to get started — or tap \"Start a Conversation\" below to talk to our team directly.",
  },
  {
    keywords: ["who are you", "about reddonatura", "about you", "company", "what is reddonatura", "what do you do", "your story", "founded", "background", "history", "since when", "how long have you"],
    answer: "Reddonatura is a global leader in organic waste management, founded in 2013 and pioneering the 'Garbage to Green' movement. We're CE-certified and serve 7,000+ clients across 20+ countries with waste converters, biogas plants, dewatering systems, and solar solutions.",
  },
  {
    keywords: ["product", "products", "machine", "machines", "equipment", "offer", "solution", "solutions", "range", "catalog", "portfolio", "what can you do", "what can you provide", "types of"],
    answer: "We offer a full range of solutions: Organic Waste Converters & Digesters, Biogas Plants, De-Watering Systems, Industrial Shredders, Trommel Screens, Windrow Composting, Bio-Mining, Pyrolysis, and Solar Solutions. Which one would you like to know more about?",
  },
  {
    keywords: ["owc", "converter", "converters", "digester", "digesters", "compost machine", "composting machine", "organic waste", "food waste machine", "rnature"],
    answer: "Our Organic Waste Converters (rNature series) are CE-certified, fully automatic machines that turn food and organic waste into nutrient-rich compost in as little as 24 hours — with zero harmful discharge. Models range from 25 kg/day to 1250 kg/day.",
  },
  {
    keywords: ["biogas", "gas plant", "bio gas", "methane", "cooking gas"],
    answer: "Our RN Biogas plants convert organic waste into renewable biogas for cooking, heating, or electricity — available in containerized, fixed dome, geo membrane, and floating drum configurations, cutting greenhouse gas emissions by up to 90%.",
  },
  {
    keywords: ["dewater", "dewatering", "dewaterer", "water reduction", "moisture removal", "centrifug"],
    answer: "The rNATURE Dewaterer reduces food waste volume by 60–70% using centrifugal technology — a compact, plug-and-play unit ideal for commercial kitchens.",
  },
  {
    keywords: ["solar", "renewable energy", "panel", "panels", "solar power", "solar system", "on-grid", "off-grid", "hybrid solar"],
    answer: "We design on-grid, off-grid, and hybrid solar systems tailored to your facility's energy needs, backed by real-time monitoring.",
  },
  {
    keywords: ["shredder", "shredders", "shred", "shredding", "wood chipper", "chipper"],
    answer: "Our industrial shredders (single, dual, four-shaft, and wood chippers) are engineered for high-torque, low-noise, auto-reverse operation across a wide range of waste streams.",
  },
  {
    keywords: ["trommel", "screening", "screen", "sorting", "sieve"],
    answer: "Our trommel screens deliver efficient waste sorting and separation for landfill sites, MBT plants, and recycling facilities.",
  },
  {
    keywords: ["biomining", "bio-mining", "bio mining", "landfill", "legacy waste", "dump site"],
    answer: "Our biomining solutions scientifically excavate and segregate legacy landfill waste, recovering compost, RDF, and inert materials while reducing landfill volume by up to 95%.",
  },
  {
    keywords: ["pyrolysis", "plastic waste", "tyre", "tire", "rubber waste", "pyrolysis oil", "syngas"],
    answer: "Our pyrolysis systems convert plastic and rubber waste into pyrolysis oil, carbon black, and syngas — near-zero landfill with commercially usable outputs.",
  },
  {
    keywords: ["windrow", "cluster compost", "municipal composting", "large scale compost"],
    answer: "Our solarised windrow composting systems are ideal for large-scale municipal and institutional organic waste, using automated turning for consistent, high-grade compost.",
  },
  {
    keywords: ["industry", "industries", "who do you work with", "clients", "sectors", "customers", "hotel", "hospital", "airport", "restaurant", "residential", "case stud", "reference", "portfolio of clients"],
    answer: "We serve 10+ industries including hotels, hospitals, municipalities, airports, food processing, and residential complexes — trusted by 7,000+ clients including IBIS Hotels, Marriott Bonvoy, IKEA, McDonald's, and Kempegowda International Airport.",
  },
  {
    keywords: ["price", "pricing", "cost", "costs", "quote", "quotation", "how much", "budget", "expensive", "affordable", "payment", "emi", "finance"],
    answer: "Pricing depends on your waste volume, facility type, and configuration. Tap \"Get a Free Quote\" below and our team will prepare a tailored proposal for you within 24 hours.",
  },
  {
    keywords: ["country", "countries", "location", "locations", "where are you", "global", "presence", "bangalore", "bengaluru", "office", "headquarters", "based in"],
    answer: "We have installations across 20+ countries — including the UAE, Maldives, UK, Italy, Russia, Thailand, and Mexico — alongside our HQ in Bengaluru, India.",
  },
  {
    keywords: ["contact", "phone number", "email", "address", "reach you", "call you", "get in touch", "talk to someone", "talk to a human", "speak to", "sales team", "representative"],
    answer: `You can reach us at ${PHONE_DISPLAY} or ${EMAIL}. Our office is at Sy. No 41/1, Veerenahalli Village, Virgonagar Industrial Estate, Bengaluru, Karnataka 560049.`,
  },
  {
    keywords: ["install", "installation", "how long", "setup", "timeline", "deploy", "deployment", "commission", "lead time", "delivery time"],
    answer: "Installation timelines vary by system — containerized biogas plants can be deployed in days, while larger custom systems take a few weeks. Our team handles site assessment, delivery, and commissioning end-to-end.",
  },
  {
    keywords: ["certified", "certification", "ce mark", "quality", "standard", "standards", "compliance", "iso"],
    answer: "Yes — all our machines are CE-certified, meeting international safety and quality standards.",
  },
  {
    keywords: ["environment", "sustainable", "sustainability", "green", "eco", "eco-friendly", "emission", "emissions", "carbon", "carbon footprint", "climate", "esg"],
    answer: "Our systems significantly cut landfill waste and emissions — from 90% GHG reduction with biogas to near-zero landfill outcomes with pyrolysis and biomining.",
  },
  {
    keywords: ["support", "maintenance", "warranty", "after sales", "after-sales", "service plan", "amc", "spare parts", "breakdown", "repair"],
    answer: "We offer tiered maintenance packages (Basic, Standard, Premium) with inspections, remote diagnostics, and 24/7 dedicated support, plus a warranty on all equipment.",
  },
  {
    keywords: ["career", "careers", "job", "jobs", "vacancy", "vacancies", "hiring", "work with you", "join your team"],
    answer: "We're always looking for people passionate about sustainability! Please email your resume to " + EMAIL + " or reach out via WhatsApp and our HR team will get back to you.",
  },
  {
    keywords: ["demo", "site visit", "trial", "test unit", "sample"],
    answer: "We'd be happy to arrange a demo or site visit. Tap \"Start a Conversation\" below, or connect with us on WhatsApp to schedule one at your convenience.",
  },
  {
    keywords: ["thank", "thanks", "thank you", "appreciate it", "great help"],
    answer: "You're very welcome! Let us know if there's anything else you'd like to know. 🌿",
  },
  {
    keywords: ["bye", "goodbye", "see you", "later", "gotta go"],
    answer: "Thanks for stopping by! Feel free to reach out anytime — have a great day. 🌿",
  },
];

const FALLBACK =
  "Hmm, that's outside what I can help with here 🙏 For a quick, detailed answer, you can connect directly with our team on WhatsApp — just tap the button below.";

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchesKeyword(text: string, keyword: string): boolean {
  return new RegExp(`\\b${escapeRegex(keyword)}\\b`, "i").test(text);
}

export function getBotAnswer(input: string): BotAnswer {
  const text = input.toLowerCase();
  for (const entry of knowledge) {
    if (entry.keywords.some((kw) => matchesKeyword(text, kw))) {
      return { text: entry.answer, isFallback: false };
    }
  }
  return { text: FALLBACK, isFallback: true };
}

export const suggestedQuestions = [
  "What products do you offer?",
  "Which industries do you serve?",
  "How can I get a quote?",
  "Where are you located?",
];
