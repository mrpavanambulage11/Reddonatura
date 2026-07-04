import { PageLayout, Section, SectionLabel, FAQAccordion, PageCTA, usePageMeta, useStructuredData, breadcrumbSchema } from "./PageLayout";

const faqs = [
  {
    q: "What is an organic waste converter (OWC) and how does it work?",
    a: "An organic waste converter, sometimes called a food waste composting machine, breaks down kitchen and food waste into nutrient-rich compost within 24 hours using controlled temperature, aeration, and moisture — instead of the weeks or months traditional composting takes. Reddonatura's CE-certified OWC machines are used by hotels, hospitals, apartments, and municipalities across 20+ countries to convert daily food waste directly into usable compost on-site.",
  },
  {
    q: "What is the difference between composting and biogas (waste-to-energy)?",
    a: "Composting breaks down organic waste aerobically (with oxygen) into solid compost that can be used as fertiliser. Biogas plants break down the same waste anaerobically (without oxygen) to produce methane-rich biogas — a renewable fuel that can generate electricity, heating, or cooking gas — along with a nutrient-rich digestate. Reddonatura offers both: organic waste digesters for compost, and RN Biogas plants for renewable energy recovery.",
  },
  {
    q: "How much food waste can a Reddonatura machine process per day?",
    a: "Our organic waste converters are available in capacities ranging from 25 kg/day for small residential or garden use up to 1,250 kg/day and beyond for large hotels, hospitals, and municipal installations. We also offer custom-engineered systems for facilities processing several tonnes of organic waste daily. Our team assesses your daily waste volume before recommending the right model.",
  },
  {
    q: "Is Reddonatura's waste management technology certified and compliant?",
    a: "Yes. Reddonatura's organic waste converters and machinery are CE certified, meeting international safety and environmental standards. Our solutions also align with India's Swachh Bharat Mission and support compliance with Solid Waste Management Rules, helping municipalities, hotels, and industries meet local waste disposal regulations.",
  },
  {
    q: "What industries use Reddonatura's waste-to-resource solutions?",
    a: "Reddonatura serves over 10 industries including hotels and resorts, restaurants and food chains, hospitals and healthcare facilities, airports and transit hubs, municipal corporations, residential apartments, agriculture and food processing units, commercial complexes, and tourism and parks — with more than 7,000 clients worldwide across 20+ countries.",
  },
  {
    q: "How does the 'Garbage to Green' (G2G) approach reduce environmental impact?",
    a: "The Garbage to Green philosophy diverts organic waste away from landfills — where it would otherwise generate methane, a greenhouse gas over 25 times more potent than CO₂ — and instead converts it into compost, biogas, or renewable energy. This closes the waste loop, reduces landfill dependency, lowers transportation and disposal costs, and returns nutrients back into the soil.",
  },
  {
    q: "What is the return on investment (ROI) for an organic waste management system?",
    a: "Most clients recover their investment through reduced waste disposal and transportation costs, lower landfill tipping fees, and in some cases revenue from compost or biogas by-products. Hospitality clients typically report waste disposal cost reductions of 50–70% within the first year, alongside sustainability certifications that support ESG and green building goals.",
  },
  {
    q: "Do Reddonatura's machines require special installation or civil work?",
    a: "Most of our organic waste converters and containerized biogas plants are delivered pre-assembled and factory-tested, requiring minimal to no civil construction. Units are plug-and-play — they need a stable surface, a power connection, and (for some models) a water and drainage connection. Our engineering team conducts a site assessment beforehand to confirm space, utility, and layout requirements.",
  },
  {
    q: "What after-sales support and maintenance does Reddonatura provide?",
    a: "We offer tiered maintenance packages ranging from annual inspections to real-time remote monitoring and 24/7 dedicated support. Every plan includes detailed mechanical and electrical inspection reports, maintenance advisory, and access to genuine spare parts, backed by our in-house team of trained engineers and electricians.",
  },
  {
    q: "How do I get a quote or consultation for a waste management solution?",
    a: "You can request a free consultation and tailored quote by clicking \"Get a Quote\" anywhere on our website, calling us at +91 77609 87934, or emailing info@reddonatura.com. Our team will assess your facility type, daily waste volume, and goals to recommend the right combination of composting, biogas, dewatering, or solar solutions for your operation.",
  },
];

export function FAQPage() {
  usePageMeta(
    "FAQs | Reddonatura — Organic Waste Converters, Composting & Biogas",
    "Answers to common questions about organic waste converters, composting, biogas plants, CE certification, installation, and after-sales support from Reddonatura.",
    "/faqs"
  );

  useStructuredData([
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQs", path: "/faqs" }]),
  ]);

  return (
    <PageLayout
      title="Frequently Asked Questions"
      subtitle="Answers to common questions about organic waste management, composting, biogas, and Reddonatura's Garbage to Green solutions."
      breadcrumb="FAQs"
    >
      <Section>
        <div className="text-center mb-12">
          <SectionLabel label="Common Questions" />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", maxWidth: "560px", margin: "0 auto" }}>
            Everything you need to know about our organic waste converters, biogas plants, and waste-to-resource solutions.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </Section>
      <PageCTA />
    </PageLayout>
  );
}
