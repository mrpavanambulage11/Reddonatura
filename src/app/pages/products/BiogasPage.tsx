import { useState } from "react";
import { motion } from "motion/react";
import { PageLayout, Section, SectionLabel, FeatureCard, SpecsTable, FAQAccordion, PageCTA, Testimonials, MachineGallery, AnimatedNumber } from "../PageLayout";
import { Zap, Settings, Leaf, BarChart3, CheckCircle2, Play } from "lucide-react";

/* ── Biogas type tabs ─────────────────────────────── */
const biogasTypes = [
  {
    id: "containerized",
    label: "Containerized",
    title: "Containerized Biogas Plant",
    tag: "Modular · Plug & Play · Fast Deployment",
    desc: "Fully pre-fabricated and pre-assembled inside a standard shipping container, our containerized biogas plant can be deployed in days rather than months. Ideal for hotels, hospitals, food processing plants, and municipalities that need a compact, relocatable solution with minimal civil construction.",
    features: ["Delivered fully assembled and tested", "No civil construction required", "Relocatable as operational needs change", "Available from 300 kg to 5 ton/day", "All components factory-integrated", "Plug-and-play gas supply"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&h=450&fit=crop&auto=format",
  },
  {
    id: "fixeddome",
    label: "Fixed Dome",
    title: "Fixed Dome Biogas Plant",
    tag: "Underground · Low Maintenance · Long Life",
    desc: "The fixed dome design is an underground biogas digester with a rigid dome-shaped gas holder. The digester and gas storage are combined in one structure — eliminating moving parts and reducing long-term maintenance. Widely deployed for municipal wards, rural communities, and agricultural estates.",
    features: ["No moving parts — extremely low maintenance", "Underground — land above remains usable", "30–50 year operational lifespan", "Ideal for warm climates (India, South Asia)", "Low capital cost per unit volume", "Community and ward-scale deployment"],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&h=450&fit=crop&auto=format",
  },
  {
    id: "geomembrane",
    label: "Geo Membrane",
    title: "Geo Membrane Covered Lagoon",
    tag: "Large Scale · Flexible · Municipal",
    desc: "The geo membrane digester uses a high-density polyethylene (HDPE) cover over an earthen lagoon to capture biogas from anaerobic digestion. Suitable for very large waste streams — agri-waste, municipal organic waste, and food processing effluent — at the lowest cost per cubic metre of gas produced.",
    features: ["Lowest cost per m³ of biogas produced", "Handles very large organic waste volumes", "Earthen lagoon — minimal structural material", "HDPE cover rated 20+ years service life", "Suitable for liquid slurry and wastewater", "Municipal and agri-industrial scale"],
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=700&h=450&fit=crop&auto=format",
  },
  {
    id: "floating",
    label: "Floating Drum",
    title: "Floating Drum Biogas Plant",
    tag: "Real-Time Pressure · Constant Supply · Proven",
    desc: "The floating drum design features a separate steel drum that rises and falls with gas production, maintaining constant pressure in the supply line. This ensures a steady, regulated gas flow regardless of how much waste was loaded — ideal for cooking fuel applications in communities and institutions.",
    features: ["Constant gas pressure independent of volume", "Visual gas level indicator (drum height)", "Suitable for cooking and heating fuel use", "Steel drum available in galvanised or SS", "Well-established — millions of units globally", "Ideal for schools, hostels, community kitchens"],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700&h=450&fit=crop&auto=format",
  },
];

const features = [
  { icon: <Zap className="w-5 h-5" />, title: "Advanced Digestion Technology", desc: "State-of-the-art anaerobic digestion technology to maximize biogas production from organic waste streams." },
  { icon: <Settings className="w-5 h-5" />, title: "Modular & Scalable", desc: "Flexible design allows for easy installation and expansion as your organic waste generation grows." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Smart Monitoring", desc: "Real-time monitoring and optimization of the biogas production process with integrated smart technology." },
  { icon: <Leaf className="w-5 h-5" />, title: "Low Maintenance", desc: "Engineered for reliability, ensuring consistent biogas output with minimal downtime across all plant types." },
];

const processSteps = [
  { step: "01", title: "Waste Collection", desc: "Segregated organic waste is transported to the reception area where it is inspected and pre-processed." },
  { step: "02", title: "Crushing & Slurry", desc: "Waste is crushed and mixed with water to form a pumpable slurry that enters the digestion tank." },
  { step: "03", title: "Anaerobic Digestion", desc: "Microbial action at 40°C converts organic matter into methane-rich biogas through hydrolysis, acidogenesis, and methanogenesis." },
  { step: "04", title: "Gas Purification", desc: "Raw biogas passes through moisture traps and H₂S scrubbers, then is compressed for distribution or electricity generation." },
  { step: "05", title: "Digestate Recovery", desc: "The nutrient-rich liquid digestate is separated and used as an organic liquid fertilizer for agriculture." },
];

const specs = {
  headers: ["Model", "Capacity/Day", "Biogas (nm³/day)", "Electricity (kWh/day)", "LPG Equiv (kg/day)", "Min Area (m²)"],
  rows: [
    ["RN BG 300",  "300 Kg",  "30–36",   "7",  "16",  "18"],
    ["RN BG 500",  "500 Kg",  "60–64",   "10", "30",  "21"],
    ["RN BG 1000", "1000 Kg", "120–130", "18", "60",  "38"],
    ["RN BG 2000", "2000 Kg", "240–260", "31", "120", "65"],
    ["RN BG 5000", "5000 Kg", "660–680", "60", "330", "300"],
  ],
};

const faqs = [
  { q: "What is Biogas?", a: "Biogas is a byproduct of anaerobic decomposition of organic matter — approximately 60% methane and 40% CO₂. It can replace LPG for cooking, heat industrial processes, or generate electricity." },
  { q: "Which type of biogas plant is best for me?", a: "It depends on your waste volume, location, and end-use. Containerized plants suit hotels and institutions wanting fast deployment. Fixed dome works well for communities. Geo membrane suits large municipal applications. Floating drum is ideal for cooking fuel supply." },
  { q: "How much biogas can I produce?", a: "1 kg of food waste typically produces 0.10–0.12 nm³ of biogas. Our models range from 30 nm³/day (RN BG 300) to 660–680 nm³/day (RN BG 5000)." },
  { q: "Is biogas good for the environment?", a: "Yes — biogas can reduce life cycle greenhouse gas emissions by up to 90% compared to fossil fuels while preventing uncontrolled methane release from organic waste in landfills." },
  { q: "What happens to the digestate after gas production?", a: "The digestate is a nutrient-rich liquid biofertilizer that enhances soil fertility. Separated liquid can also be recycled within the system for slurry preparation." },
];

export function BiogasPage() {
  const [activeType, setActiveType] = useState("containerized");
  const current = biogasTypes.find(t => t.id === activeType)!;

  return (
    <PageLayout
      title="RN Biogas Solutions"
      subtitle="Sustainable energy from organic waste — available in containerized, fixed dome, geo membrane, and floating drum configurations."
      breadcrumb="RN Biogas"
    >
      {/* Hero */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center"><SectionLabel label="Biogas Solutions" /></div>
            <p className="mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              Biogas is a fully renewable and environmentally friendly fuel that can help to reduce life cycle greenhouse gas emissions by up to <strong style={{ color: "#053114", fontWeight: 600 }}>90%</strong> compared with fossil fuel use. Our systems convert a wide range of organic waste materials into high-quality biogas for heating, electricity generation, and as a cleaner alternative to fossil fuels.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[{ v: "90%", l: "GHG Reduction" }, { v: "60%", l: "Methane Content" }, { v: "4 types", l: "Plant Configurations" }, { v: "24/7", l: "Energy Output" }].map(s => (
                <div key={s.l} className="rn-card-shadow p-4 text-center hover:-translate-y-1" style={{ backgroundColor: "rgba(23,139,76,0.07)", border: "1px solid rgba(23,139,76,0.2)" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.6rem", color: "#178B4C" }}><AnimatedNumber value={s.v} /></div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#5A6B5C", marginTop: "4px" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ border: "2px solid #178B4C", overflow: "hidden", boxShadow: "0 20px 45px rgba(5,49,20,0.15)" }}>
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=400&fit=crop&auto=format" alt="RN Biogas Plant" className="w-full" style={{ maxHeight: "400px", objectFit: "cover" }} />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── Plant type tabs ── */}
      <section style={{ backgroundColor: "#F5F4EF" }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <SectionLabel label="Plant Types" />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", maxWidth: "520px", margin: "0 auto" }}>
              Choose the configuration that best fits your site, waste volume, and end-use requirements.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {biogasTypes.map(t => (
              <button key={t.id} onClick={() => setActiveType(t.id)}
                className="px-5 py-2.5 text-[11px] tracking-[0.1em] uppercase transition-all duration-200"
                style={{
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                  backgroundColor: activeType === t.id ? "#053114" : "#ffffff",
                  color: activeType === t.id ? "#ffffff" : "#053114",
                  border: activeType === t.id ? "2px solid #053114" : "2px solid rgba(5,49,20,0.2)",
                }}>
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div key={activeType} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-[10px] tracking-[0.18em] uppercase mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "#A0780E" }}>{current.tag}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#053114", marginBottom: "16px" }}>
                  {current.title}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8, marginBottom: "20px" }}>
                  {current.desc}
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {current.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#178B4C" }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#5A6B5C" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ border: "2px solid #178B4C", overflow: "hidden", boxShadow: "0 20px 45px rgba(5,49,20,0.15)" }}>
                <img src={current.image} alt={current.title} className="w-full" style={{ maxHeight: "360px", objectFit: "cover" }} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <Section>
        <div className="text-center mb-12">
          <SectionLabel label="The Process" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {processSteps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.07 * i }}
              className="rn-card-shadow p-5 hover:-translate-y-1" style={{ backgroundColor: "#F5F4EF", border: "1px solid rgba(23,139,76,0.15)" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#A0780E", marginBottom: "8px" }}>{s.step}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.95rem", color: "#053114", marginBottom: "6px" }}>{s.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.82rem", color: "#5A6B5C", lineHeight: 1.6 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section bg="#F5F4EF">
        <div className="text-center mb-10"><SectionLabel label="Innovative Features" /></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => <FeatureCard key={i} title={f.title} description={f.desc} icon={f.icon} centered />)}
        </div>
      </Section>

      {/* Video section */}
      <Section>
        <div className="text-center mb-8">
          <SectionLabel label="See It Working" />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", maxWidth: "520px", margin: "0 auto" }}>
            Watch our biogas plants in operation — from waste intake to gas generation and digestate recovery.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Containerized Plant Overview", thumb: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop&auto=format" },
            { title: "Anaerobic Digestion Process", thumb: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&h=300&fit=crop&auto=format" },
            { title: "Digestate & Fertilizer Recovery", thumb: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&h=300&fit=crop&auto=format" },
          ].map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * i }}
              className="group relative overflow-hidden cursor-pointer" style={{ border: "1px solid rgba(23,139,76,0.15)" }}>
              <img src={v.thumb} alt={v.title} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ height: "200px", objectFit: "cover" }} />
              <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(5,49,20,0.45)" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{ backgroundColor: "#178B4C" }}>
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
              <div className="px-4 py-3" style={{ backgroundColor: "#053114" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>{v.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Specs */}
      <Section bg="#F5F4EF">
        <div className="text-center mb-2"><SectionLabel label="Technical Data" /></div>
        <div className="mt-4"><SpecsTable headers={specs.headers} rows={specs.rows} /></div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="text-center mb-2"><SectionLabel label="FAQ" /></div>
        <div className="mt-4 max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      <MachineGallery images={[
        { src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=400&fit=crop&auto=format", caption: "Biogas Plant" },
        { src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=400&fit=crop&auto=format", caption: "Digester Unit" },
        { src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=400&fit=crop&auto=format", caption: "Gas Collection" },
        { src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=400&h=400&fit=crop&auto=format", caption: "Digestate Output" },
      ]} />
      <Testimonials />
      <PageCTA />
    </PageLayout>
  );
}