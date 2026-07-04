import { motion } from "motion/react";
import { PageLayout, Section, SectionLabel, FeatureCard, PageCTA, Testimonials, AnimatedNumber, usePageMeta, useStructuredData, breadcrumbSchema, productSchema } from "../PageLayout";
import { CheckCircle2, Layers, Truck, Cpu, Recycle } from "lucide-react";

const process = [
  { step: "01", title: "Excavation", desc: "Legacy waste is carefully excavated from the landfill and transported to the processing area using heavy earth-moving machinery and organised logistics." },
  { step: "02", title: "Shredding", desc: "The material is passed through industrial shredders to reduce size and prepare it for segregation — increasing processing efficiency at every stage." },
  { step: "03", title: "Conveying", desc: "Conveyor systems move waste through different stages of processing with minimal manual intervention, maintaining a continuous and efficient workflow." },
  { step: "04", title: "Screening & Segregation", desc: "Trommel screens separate materials based on particle size and density, enabling effective recovery of different waste fractions — organics, combustibles, and inerts." },
  { step: "05", title: "Resource Recovery", desc: "Recovered organic waste is directed to composting. Combustible fractions are processed into RDF pellets. Inert materials like stones, glass, and silt go to landfill — at a significantly reduced volume." },
];

const equipment = [
  { icon: <Layers className="w-5 h-5" />, title: "Industrial Shredders", desc: "Targeting single-layer and low-density plastics (LDPE) bypassed by manual scavengers, reducing size for efficient downstream processing." },
  { icon: <Recycle className="w-5 h-5" />, title: "Trommel Screens", desc: "Separate waste based on particle size and density for accurate material recovery across organic, combustible, and inert fractions." },
  { icon: <Truck className="w-5 h-5" />, title: "Conveyor Systems", desc: "Provide continuous movement of material across the processing line while reducing manual handling and improving operational safety." },
  { icon: <Cpu className="w-5 h-5" />, title: "Material Recovery Systems", desc: "Collect and channel recovered fractions — pre-compost, RDF pellets, and inerts — for their respective treatment and utilisation pathways." },
];

const outcomes = [
  { label: "Pre-Compost", desc: "Organic-rich material separated for composting, producing soil amendment for agriculture and landscaping." },
  { label: "RDF Pellets", desc: "Combustible fraction (plastics, high-energy materials) processed into Refuse Derived Fuel for cement plants." },
  { label: "Inert Residue", desc: "Stones, glass, and silt — the only fraction sent to landfill, at dramatically reduced volume." },
  { label: "Restored Land", desc: "Legacy landfill sites are remediated, recovering valuable urban land for productive use." },
];

export function BiominingPage() {
  usePageMeta(
    "Biomining Solutions | Reddonatura",
    "Scientific legacy landfill excavation, segregation, and resource recovery — reducing landfill volume by up to 95% while recovering compost, RDF, and inert materials.",
    "/products/biomining"
  );
  useStructuredData([
    productSchema({ name: "Biomining & Legacy Landfill Remediation", description: "Scientific excavation, segregation, and resource recovery from legacy landfill waste, reducing landfill volume by up to 95%.", path: "/products/biomining" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products/biomining" }, { name: "Biomining", path: "/products/biomining" }]),
  ]);

  return (
    <PageLayout
      title="Bio Mining Solutions"
      subtitle="Scientific excavation, segregation, and resource recovery from legacy landfill waste — transforming decades of accumulated waste into valuable materials."
      breadcrumb="Bio Mining"
    >
      {/* Intro */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center"><SectionLabel label="Transforming Legacy Waste" /></div>
            <p className="mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              Landfills contain years of mixed municipal waste that continue to occupy valuable land while creating environmental and operational challenges. Our biomining solution enables the scientific excavation, segregation, and recovery of usable resources from legacy waste — significantly reducing landfill volume and restoring land for productive use.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              Urban India generates over 160,000 tonnes of municipal solid waste daily. Less than half is scientifically processed — our biomining approach addresses the accumulated backlog systematically.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[{ v: "160K+", l: "Tonnes MSW/day in India" }, { v: "3,000+", l: "Open dumpsites remediated" }, { v: "95%", l: "Landfill volume reduction" }, { v: "3", l: "Recovered fractions" }].map(s => (
                <div key={s.l} className="rn-card-shadow p-4" style={{ backgroundColor: "rgba(23,139,76,0.07)", border: "1px solid rgba(23,139,76,0.2)" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.6rem", color: "#178B4C" }}><AnimatedNumber value={s.v} /></div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.08em", color: "#5A6B5C", marginTop: "4px" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ border: "2px solid #178B4C", overflow: "hidden", boxShadow: "0 20px 45px rgba(5,49,20,0.15)" }}>
              <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&h=600&fit=crop&auto=format" alt="Biomining — landfill processing" className="w-full" style={{ maxHeight: "420px", objectFit: "cover" }} />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* The process */}
      <Section bg="#F5F4EF">
        <div className="text-center mb-12">
          <SectionLabel label="The Process" />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", maxWidth: "520px", margin: "0 auto" }}>
            From landfill waste to resource recovery — a scientific, step-by-step process.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {process.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.07 * i }}
              className="p-5 flex flex-col" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(23,139,76,0.15)" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.5rem", color: "#A0780E", marginBottom: "8px" }}>{s.step}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.95rem", color: "#053114", marginBottom: "8px" }}>{s.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.82rem", color: "#5A6B5C", lineHeight: 1.6, flex: 1 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Equipment */}
      <Section>
        <div className="text-center mb-12">
          <SectionLabel label="Core Equipment" />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", maxWidth: "480px", margin: "0 auto" }}>
            Engineered for high-volume landfill processing.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {equipment.map((e, i) => <FeatureCard key={i} title={e.title} description={e.desc} icon={e.icon} centered />)}
        </div>
      </Section>

      {/* Recovery outcomes */}
      <Section bg="#053114">
        <div className="text-center mb-12">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", color: "#ffffff" }}>
            What Gets <em style={{ color: "#A0780E", fontStyle: "normal" }}>Recovered</em>
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}>
            Every fraction of processed waste finds a productive end-use.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {outcomes.map((o, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * i }}
              className="rn-card-shadow p-6 hover:-translate-y-1" style={{ border: "1px solid rgba(23,139,76,0.3)", backgroundColor: "rgba(23,139,76,0.08)" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "#A0780E", marginBottom: "8px" }}>{o.label}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="text-center mb-2"><SectionLabel label="Project Benefits" /></div>
        <div className="grid sm:grid-cols-3 gap-6 mt-4">
          {[
            { cat: "Operational", items: ["Faster waste processing and disposal", "Reduced transportation requirements", "Improved resource recovery rates"] },
            { cat: "Environmental", items: ["Reduced landfill dependency", "Lower greenhouse gas emissions", "Scientific remediation of legacy sites"] },
            { cat: "Economic", items: ["Reduced long-term waste costs", "Revenue from compost and RDF", "Land value restoration"] },
          ].map((g, i) => (
            <div key={i} className="rn-card-shadow p-6 hover:-translate-y-1" style={{ border: "1px solid rgba(23,139,76,0.15)" }}>
              <div className="text-[10px] tracking-[0.18em] uppercase mb-4" style={{ fontFamily: "'DM Mono', monospace", color: "#A0780E" }}>{g.cat}</div>
              {g.items.map((item, j) => (
                <div key={j} className="flex items-start gap-2 mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#178B4C" }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#5A6B5C" }}>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Testimonials />
      <PageCTA />
    </PageLayout>
  );
}