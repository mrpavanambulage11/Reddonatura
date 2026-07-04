import { motion } from "motion/react";
import { PageLayout, Section, SectionLabel, FeatureCard, PageCTA, Testimonials, AnimatedNumber } from "../PageLayout";
import { CheckCircle2, Flame, Zap, Recycle, BarChart3 } from "lucide-react";

const process = [
  { step: "01", title: "Waste Feeding", desc: "Plastic and rubber waste is fed into the reactor via a sealed, automated feeding system to prevent gas leakage and maintain optimal processing conditions." },
  { step: "02", title: "Thermal Decomposition", desc: "Waste is heated in the absence of oxygen at temperatures of 280–400°C, causing long-chain polymers to break down into shorter hydrocarbon molecules." },
  { step: "03", title: "Oil Condensation", desc: "Gaseous hydrocarbons are channelled through a condensation system, converting them into pyrolysis oil — a usable liquid fuel equivalent to diesel." },
  { step: "04", title: "Carbon Black Recovery", desc: "Solid carbon residue (carbon black) is collected from the reactor and can be used as a reinforcing agent, pigment, or fuel." },
  { step: "05", title: "Syngas Utilisation", desc: "Non-condensable syngas is recycled back to heat the reactor, reducing external fuel consumption and improving overall system efficiency." },
];

const features = [
  { icon: <Flame className="w-5 h-5" />, title: "Continuous Feeding Reactor", desc: "Automated, sealed feeding system enables continuous operation without manual intervention, maximizing throughput and safety." },
  { icon: <Zap className="w-5 h-5" />, title: "Syngas Recycling", desc: "Non-condensable gases generated during pyrolysis are recycled back to heat the reactor, significantly reducing external fuel consumption." },
  { icon: <Recycle className="w-5 h-5" />, title: "Zero Liquid Discharge", desc: "Advanced water treatment systems ensure no wastewater is discharged — all process water is recycled within the system." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Real-Time Monitoring", desc: "PLC-controlled operation with real-time temperature, pressure, and output monitoring for consistent product quality and safe operation." },
];

const outputs = [
  { product: "Pyrolysis Oil", yield: "40–45%", use: "Alternative fuel for industrial boilers, kilns, and generators. Equivalent to light diesel in calorific value." },
  { product: "Carbon Black", yield: "30–35%", use: "Used as reinforcing filler in rubber goods, pigment in inks and coatings, or as solid fuel for boilers." },
  { product: "Steel Wire", yield: "10–15%", use: "Recovered steel from tyre pyrolysis is sold as scrap metal to steel mills for recycling." },
  { product: "Syngas", yield: "10–12%", use: "Recycled internally to maintain reactor temperature, replacing a significant portion of external energy input." },
];

const specs = [
  ["Model", "Capacity", "Oil Output", "Carbon Black", "Power"],
  ["RN-PY 3",  "3 ton/day",   "1.2–1.35 ton/day",  "0.9–1.05 ton/day",  "30 kW"],
  ["RN-PY 5",  "5 ton/day",   "2.0–2.25 ton/day",  "1.5–1.75 ton/day",  "45 kW"],
  ["RN-PY 10", "10 ton/day",  "4.0–4.5 ton/day",   "3.0–3.5 ton/day",   "75 kW"],
  ["RN-PY 20", "20 ton/day",  "8.0–9.0 ton/day",   "6.0–7.0 ton/day",   "130 kW"],
];

export function PyrolysisPage() {
  return (
    <PageLayout
      title="Pyrolysis Solutions"
      subtitle="Advanced thermal decomposition converting plastic and rubber waste into fuel oil, carbon black, and syngas — zero landfill, maximum resource recovery."
      breadcrumb="Pyrolysis"
    >
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center"><SectionLabel label="Waste to Fuel" /></div>
            <p className="mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              Pyrolysis is the thermochemical decomposition of organic material at elevated temperatures in the absence of oxygen. Our pyrolysis systems convert waste plastics, rubber, and tyres into valuable outputs — pyrolysis oil (equivalent to diesel), carbon black, and syngas — achieving near-zero landfill outcomes while generating commercially usable products.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              With plastic pollution at a global crisis point, pyrolysis offers a proven, scalable solution to plastic waste that cannot be mechanically recycled — converting it into a resource rather than a liability.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[{ v: "40–45%", l: "Oil yield from plastic" }, { v: "0", l: "Harmful emissions (controlled)" }, { v: "3 types", l: "Valuable by-products" }, { v: "24/7", l: "Continuous operation" }].map(s => (
                <div key={s.l} className="rn-card-shadow p-4" style={{ backgroundColor: "rgba(23,139,76,0.07)", border: "1px solid rgba(23,139,76,0.2)" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.6rem", color: "#178B4C" }}><AnimatedNumber value={s.v} /></div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", letterSpacing: "0.08em", color: "#5A6B5C", marginTop: "4px" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ border: "2px solid #178B4C", overflow: "hidden", boxShadow: "0 20px 45px rgba(5,49,20,0.15)" }}>
              <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=600&fit=crop&auto=format"
                alt="Pyrolysis plant" className="w-full" style={{ maxHeight: "420px", objectFit: "cover" }} />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Process */}
      <Section bg="#F5F4EF">
        <div className="text-center mb-12">
          <SectionLabel label="The Process" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {process.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.07 * i }}
              className="rn-card-shadow p-5 hover:-translate-y-1" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(23,139,76,0.15)" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.5rem", color: "#A0780E", marginBottom: "8px" }}>{s.step}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.95rem", color: "#053114", marginBottom: "6px" }}>{s.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.82rem", color: "#5A6B5C", lineHeight: 1.6 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section>
        <div className="text-center mb-12"><SectionLabel label="Innovative Features" /></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => <FeatureCard key={i} title={f.title} description={f.desc} icon={f.icon} centered />)}
        </div>
      </Section>

      {/* Outputs */}
      <Section bg="#053114">
        <div className="text-center mb-12">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", color: "#ffffff" }}>
            Product <em style={{ color: "#A0780E", fontStyle: "normal" }}>Outputs</em>
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}>
            Every kg of waste processed generates commercially valuable products.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {outputs.map((o, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * i }}
              className="rn-card-shadow p-6 hover:-translate-y-1" style={{ border: "1px solid rgba(23,139,76,0.3)", backgroundColor: "rgba(23,139,76,0.08)" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", color: "#4ade80", marginBottom: "4px" }}>{o.yield}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1rem", color: "#A0780E", marginBottom: "8px" }}>{o.product}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{o.use}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Specs */}
      <Section>
        <div className="text-center mb-2"><SectionLabel label="Technical Specifications" /></div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-left" style={{ minWidth: "560px" }}>
            <thead>
              <tr style={{ backgroundColor: "#053114" }}>
                {specs[0].map((h, i) => (
                  <th key={i} className="px-4 py-3 text-[11px] tracking-[0.1em] uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#fff", borderRight: "1px solid rgba(255,255,255,0.1)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specs.slice(1).map((row, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#F5F4EF", borderBottom: "1px solid rgba(5,49,20,0.06)" }}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#053114", borderRight: "1px solid rgba(5,49,20,0.06)" }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Testimonials />
      <PageCTA />
    </PageLayout>
  );
}