import { useState } from "react";
import { motion } from "motion/react";
import { PageLayout, Section, PageCTA, Testimonials, usePageMeta, useStructuredData, breadcrumbSchema, productSchema } from "../PageLayout";
import { CheckCircle2 } from "lucide-react";
import img1 from "../../../imports/image-1.webp";
import img3 from "../../../imports/image-3.webp";
import img5 from "../../../imports/image-5.webp";

/* ── Composting Machine types ─────────────────────────── */
const composingSubTabs = [
  {
    id: "automatic",
    label: "Automatic",
    title: "Fully Automatic OWC",
    subtitle: "CE Certified · Zero Manual Intervention",
    desc: "Our fully automatic Organic Waste Converters are CE certified machines that require no manual intervention during the composting cycle. Simply load organic waste and collect finished compost — the machine handles grinding, aeration, temperature regulation, and pre-compost separation automatically.",
    features: ["Automated loading and processing", "Inbuilt temperature & moisture control", "24-hour composting cycle", "Zero odour emission", "Remote monitoring ready", "CE certified — globally compliant"],
    specs: [
      ["Model", "Capacity", "Power", "Dimensions (mm)"],
      ["RN 25",  "25 kg/day",   "1.5 kW, 3Ph 440V", "L1600×W600×H875"],
      ["RN 125", "125 kg/day",  "5.5 kW, 3Ph 440V", "L2286×W944×H1432"],
      ["RN 500", "500 kg/day",  "16 kW, 3Ph 440V",  "L3000×W1432×H1860"],
      ["RN 1250","1250 kg/day", "27 kW, 3Ph 440V",  "L4600×W2100×H2347"],
    ],
    image: img1,
  },
  {
    id: "semiauto",
    label: "Semi-Automatic",
    title: "Semi-Automatic Composters",
    subtitle: "Operator-Assisted · Cost Effective",
    desc: "Semi-automatic composting machines combine the efficiency of mechanised processing with operator-guided loading and unloading. Ideal for facilities that prefer greater control over the process while still benefiting from automated aeration, mixing, and temperature management.",
    features: ["Manual waste loading with automatic processing", "Automated mixing & aeration cycles", "Lower initial investment", "Flexible capacity adjustment", "Suitable for hotels, resorts & hospitals", "Easy operator training"],
    specs: [
      ["Model", "Capacity", "Operation", "Power"],
      ["RN-SA 50",  "50 kg/day",  "Semi-Auto", "2.2 kW, 3Ph"],
      ["RN-SA 150", "150 kg/day", "Semi-Auto", "6.5 kW, 3Ph"],
      ["RN-SA 300", "300 kg/day", "Semi-Auto", "12 kW, 3Ph"],
    ],
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=700&h=500&fit=crop&auto=format",
  },
  {
    id: "nonheating",
    label: "Non-Heating",
    title: "Non-Heating Cold Composters",
    subtitle: "Natural Aerobic · Energy Efficient",
    desc: "Non-heating composters rely on natural aerobic microbial activity to decompose organic waste without any external heat source. These systems are the most energy-efficient option, suited for facilities with lower waste volumes and longer processing windows. Ideal for gardens, parks, small communities.",
    features: ["No external heat source required", "Lowest energy consumption", "Natural microbial decomposition", "Minimal maintenance", "Ideal for green waste & garden trimmings", "Compact and portable options available"],
    specs: [
      ["Model", "Capacity", "Process Time", "Power"],
      ["RN-NH 25",  "25 kg/day",  "48–72 hrs", "0.5 kW"],
      ["RN-NH 75",  "75 kg/day",  "48–72 hrs", "1.1 kW"],
    ],
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700&h=500&fit=crop&auto=format",
  },
];

/* ── Main top-level tabs ──────────────────────────────── */
const mainTabs = [
  { id: "composting", label: "Composting Machines" },
  { id: "binfilter",  label: "Bin Filter" },
  { id: "dewatering", label: "De-Watering" },
  { id: "biofilter",  label: "Bio-Filter" },
  { id: "shredders",  label: "Shredders" },
];

function SpecTable({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto mt-6" style={{ border: "1px solid rgba(5,49,20,0.08)", boxShadow: "0 1px 2px rgba(5,49,20,0.04), 0 16px 32px rgba(5,49,20,0.06)" }}>
      <table className="w-full border-collapse text-left" style={{ minWidth: "480px" }}>
        <thead>
          <tr style={{ backgroundColor: "#053114" }}>
            {rows[0].map((h, i) => (
              <th key={i} className="px-4 py-3 text-[11px] tracking-[0.1em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#fff", borderRight: "1px solid rgba(255,255,255,0.1)" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(1).map((row, i) => (
            <tr key={i} className="transition-colors duration-150 hover:bg-[rgba(23,139,76,0.06)]" style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#F5F4EF", borderBottom: "1px solid rgba(5,49,20,0.06)" }}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#053114", borderRight: "1px solid rgba(5,49,20,0.06)" }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CompositingMachinesTab() {
  const [sub, setSub] = useState("automatic");
  const current = composingSubTabs.find(t => t.id === sub)!;
  return (
    <div>
      {/* Sub-tabs */}
      <div className="flex gap-1 mb-8 border-b" style={{ borderColor: "rgba(5,49,20,0.1)" }}>
        {composingSubTabs.map(t => (
          <button key={t.id} onClick={() => setSub(t.id)}
            className="px-5 py-3 text-[11px] tracking-[0.1em] uppercase transition-all duration-200 relative"
            style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              color: sub === t.id ? "#178B4C" : "#5A6B5C",
              borderBottom: sub === t.id ? "2px solid #178B4C" : "2px solid transparent",
              marginBottom: "-1px",
            }}>
            {t.label}
          </button>
        ))}
      </div>

      <motion.div key={sub} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-[10px] tracking-[0.18em] uppercase mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "#A0780E" }}>{current.subtitle}</div>
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
            <SpecTable rows={current.specs} />
          </div>
          <div style={{ border: "2px solid #178B4C", overflow: "hidden", boxShadow: "0 20px 45px rgba(5,49,20,0.15)" }}>
            <img loading="lazy" decoding="async" src={current.image} alt={current.title} className="w-full object-cover" style={{ maxHeight: "360px", objectFit: "cover" }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function BinFilterTab() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <div className="text-[10px] tracking-[0.18em] uppercase mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "#A0780E" }}>Odour Control · Compact Design</div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#053114", marginBottom: "16px" }}>
          Bio-Filter Bin Systems
        </h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8, marginBottom: "20px" }}>
          Bin filter systems integrate biological filtration media directly into the waste collection bin, neutralising odours and initiating pre-decomposition at the point of collection. Ideal for apartment complexes, commercial kitchens, and institutional settings where odour management is critical.
        </p>
        {["Activated carbon + bio-media filtration layer", "Reduces odour by up to 85% at source", "Compatible with all organic waste streams", "Easy media replacement every 6 months", "Available in 120L, 240L, 660L and 1100L sizes", "Stackable design for high-density installations"].map((f, i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#178B4C" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#5A6B5C" }}>{f}</span>
          </div>
        ))}
      </div>
      <div style={{ border: "2px solid #178B4C", overflow: "hidden", boxShadow: "0 20px 45px rgba(5,49,20,0.15)" }}>
        <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop&auto=format" alt="Bin Filter System" className="w-full" style={{ maxHeight: "360px", objectFit: "cover" }} />
      </div>
    </div>
  );
}

function DewateringTab() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <div className="text-[10px] tracking-[0.18em] uppercase mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "#A0780E" }}>60–70% Volume Reduction · Plug & Play</div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#053114", marginBottom: "16px" }}>
          rNATURE Dewaterer
        </h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8, marginBottom: "20px" }}>
          The rNATURE Dewaterer rapidly processes all kinds of organic food waste using a special centrifugal technique, reducing volume by 60–70%. Compact enough for any commercial kitchen or garbage room, it dramatically lowers waste storage and municipality disposal costs.
        </p>
        {["Reduces food waste volume by 60–70%", "Compact standalone unit — fits any space", "Centrifugal dewatering, no chemicals needed", "SS 304 body — easy to clean and maintain", "Grey water outlet connects directly to STP", "100 kg/hr processing capacity (RN DW 100)"].map((f, i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#178B4C" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#5A6B5C" }}>{f}</span>
          </div>
        ))}
        <div className="mt-5 p-4 rn-card-shadow" style={{ backgroundColor: "rgba(23,139,76,0.08)", border: "1px solid rgba(23,139,76,0.2)" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.8rem", color: "#178B4C" }}>60–70%</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#5A6B5C" }}>Food waste volume reduction — model RN DW 100</div>
        </div>
      </div>
      <div style={{ border: "2px solid #178B4C", overflow: "hidden", boxShadow: "0 20px 45px rgba(5,49,20,0.15)" }}>
        <img loading="lazy" decoding="async" src={img3} alt="De-Watering System" className="w-full" style={{ maxHeight: "360px", objectFit: "cover" }} />
      </div>
    </div>
  );
}

function BioFilterTab() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <div className="text-[10px] tracking-[0.18em] uppercase mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "#A0780E" }}>Biological Filtration · Odour Free</div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#053114", marginBottom: "16px" }}>
          Bio-Filter Systems
        </h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8, marginBottom: "20px" }}>
          Bio-filter systems use a bed of organic media — typically wood chips, compost, or lava rock inoculated with microbial cultures — to biologically oxidise and neutralise odorous compounds (H₂S, ammonia, VOCs) from composting, dewatering, and waste processing operations. Essential for urban installations where odour management is a regulatory requirement.
        </p>
        {["Removes H₂S, NH₃ and VOCs biologically", "No chemical consumables — fully natural process", "Efficiency > 95% odour removal", "Media life 3–5 years", "Available in modular skid-mounted units", "Suitable for OWC exhaust, storage rooms, STP off-gas"].map((f, i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#178B4C" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#5A6B5C" }}>{f}</span>
          </div>
        ))}
      </div>
      <div style={{ border: "2px solid #178B4C", overflow: "hidden", boxShadow: "0 20px 45px rgba(5,49,20,0.15)" }}>
        <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700&h=500&fit=crop&auto=format" alt="Bio-Filter" className="w-full" style={{ maxHeight: "360px", objectFit: "cover" }} />
      </div>
    </div>
  );
}

function ShreddersTab() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <div className="text-[10px] tracking-[0.18em] uppercase mb-2" style={{ fontFamily: "'DM Mono', monospace", color: "#A0780E" }}>High-Torque · Auto-Reverse · Low Noise</div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#053114", marginBottom: "16px" }}>
          Industrial Shredders
        </h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8, marginBottom: "20px" }}>
          Our range of industrial shredders covers single shaft, dual shaft, four shaft, and wood chipper variants — each engineered for specific waste streams from pre-shredding organic waste to processing plastics, wood, and industrial residues. Auto-reverse jam protection and easy-access maintenance chambers ensure maximum uptime.
        </p>
        {["Single, Dual, Four Shaft & Wood Chipper variants", "High-torque low-speed mechanism", "Auto-reverse jam prevention", "Integrated output screen for size control", "Low noise — suitable for urban installations", "Heavy-duty blades with long service life"].map((f, i) => (
          <div key={i} className="flex items-start gap-2 mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#178B4C" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#5A6B5C" }}>{f}</span>
          </div>
        ))}
      </div>
      <div style={{ border: "2px solid #178B4C", overflow: "hidden", boxShadow: "0 20px 45px rgba(5,49,20,0.15)" }}>
        <img loading="lazy" decoding="async" src={img5} alt="Industrial Shredder" className="w-full" style={{ maxHeight: "360px", objectFit: "cover" }} />
      </div>
    </div>
  );
}

const tabContent: Record<string, JSX.Element> = {
  composting: <CompositingMachinesTab />,
  binfilter:  <BinFilterTab />,
  dewatering: <DewateringTab />,
  biofilter:  <BioFilterTab />,
  shredders:  <ShreddersTab />,
};

export function WetWasteManagementPage() {
  const [activeTab, setActiveTab] = useState("composting");

  usePageMeta(
    "Wet Waste Management Solutions | Reddonatura",
    "End-to-end wet waste management — automatic and semi-automatic composting machines, shredding, dewatering, bio-filtration, and odour control systems.",
    "/products/wet-waste"
  );
  useStructuredData([
    productSchema({ name: "Wet Waste Management System", description: "Complete organic waste solutions covering collection, shredding, composting, dewatering, bio-filtration, and odour control.", path: "/products/wet-waste" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products/wet-waste" }, { name: "Wet Waste Management", path: "/products/wet-waste" }]),
  ]);

  return (
    <PageLayout
      title="Wet Waste Management"
      subtitle="Complete organic waste solutions — from collection and shredding through composting, dewatering, bio-filtration, and odour control."
      breadcrumb="Wet Waste Management"
    >
      {/* Tab navigation */}
      <div className="sticky top-[72px] lg:top-[112px]" style={{ backgroundColor: "#053114", zIndex: 40 }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto scrollbar-hide">
            {mainTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex-shrink-0 px-5 py-4 text-[11px] tracking-[0.1em] uppercase transition-all duration-200 relative"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  color: activeTab === tab.id ? "#ffffff" : "rgba(255,255,255,0.5)",
                  borderBottom: activeTab === tab.id ? "2px solid #A0780E" : "2px solid transparent",
                }}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <Section>
        <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          {tabContent[activeTab]}
        </motion.div>
      </Section>

      <Testimonials />
      <PageCTA />
    </PageLayout>
  );
}