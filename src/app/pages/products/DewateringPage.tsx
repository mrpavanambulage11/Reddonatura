import { motion } from "motion/react";
import { PageLayout, Section, SectionLabel, SpecsTable, FAQAccordion, PageCTA, Testimonials, MachineGallery } from "../PageLayout";
import { CheckCircle2 } from "lucide-react";
import img3 from "../../../imports/image-3.png";

const processSteps = [
  { step: "01", title: "Loading", desc: "Load the food waste into the hopper while the tap is on with running soft water." },
  { step: "02", title: "Grinding", desc: "The food is ground into fine particles to increase the surface area for processing." },
  { step: "03", title: "Centrifugal Dewatering", desc: "A special centrifugal technique dehydrates the macerated food waste efficiently." },
  { step: "04", title: "Output", desc: "Grey water is discharged to drain and 60–70% reduced solid waste is collected in bins." },
];

const benefits = [
  "Easy Installation — Plug and play design",
  "Compact standalone unit requiring minimal floor space",
  "60–70% volume reduction of food waste",
  "Hot water connection for internal cleaning cycle",
  "Easy Maintenance — Stainless Steel 304 body",
  "Reversing button for the crusher mechanism",
];

const cannotProcess = ["Shells", "Meat Bones", "Paper", "Plastics", "Plates", "Cigarettes", "Glass", "Cloth", "Metals", "Chopsticks"];

const specs = {
  headers: ["Parameter", "Specification"],
  rows: [
    ["Model No", "RN DW 100"],
    ["Working Capacity", "100 Kg per Hr"],
    ["Power", "5HP 3Phase"],
    ["Dimensions", "1800 x 550 x 1640 mm"],
    ["Cutter MOC", "Abrasive resistance steel"],
    ["Dewatering Filter", "Honeycomb type"],
    ["Collection Tank", "Provided with discharge unit"],
    ["Shaft Speed", "70 RPM"],
    ["Outer Body", "SS/MS"],
    ["Rated Voltage", "3 Phase, 415V"],
    ["Net Weight", "450 kgs"],
  ],
};

const faqs = [
  { q: "What does rNATURE Dewaterer do?", a: "rNATURE Dewaterer uses a series of processes in which food is ground into fine particles. A special centrifugal technique dehydrates the macerated food waste, reducing volume by 60–70% and drastically cutting disposal costs." },
  { q: "How is rNATURE Dewaterer a sustainable solution?", a: "By reducing food waste volume by 60–70%, it significantly lowers transportation and disposal costs, reduces landfill burden, and the grey water output can be reused for gardening or connected to an STP." },
  { q: "What kind of food waste can be processed?", a: "All kinds of organic food waste including cooked food, raw ingredients, vegetables, and fruits can be processed. Hard bones, shells, and inorganic materials cannot be processed." },
  { q: "Does the rNATURE Dewaterer come with warranty?", a: "Yes, the equipment comes with standard warranty coverage. Please contact our team for specific warranty terms applicable to your purchase." },
  { q: "How to handle the grey water output?", a: "The grey water output can be directly connected to a sewage treatment plant or reused for gardening purposes — it contains no harmful substances." },
  { q: "Does the rNATURE Dewaterer require continuous water and electricity input?", a: "It requires running soft water and electricity during operation. However, it does not need constant operator attention once loaded and started." },
  { q: "Does rNATURE Dewaterer follow a batch process?", a: "No, it is a continuous process machine. You can continuously load food waste into the hopper while it is running." },
];

export function DewateringPage() {
  return (
    <PageLayout
      title="De-Watering Systems"
      subtitle="The rNATURE Dewaterer — a compact standalone solution that rapidly reduces food waste volume by 60–70%."
      breadcrumb="RN Machines"
    >
      <Section>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center"><SectionLabel label="De-Watering Innovation" /></div>
            <p className="mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              The rNATURE Dewaterer is the answer to your food waste problem. It is a compact stand-alone solution for food waste handling and can rapidly deal with all kinds of organic food waste in large quantities.
            </p>
            <p className="mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              Best suited for high volume waste generation sites, the rNATURE Dewaterer requires an extremely small area and therefore can fit in storage or garbage rooms as well.
            </p>
            <div className="p-5 rn-card-shadow" style={{ backgroundColor: "rgba(23,139,76,0.08)", border: "1px solid rgba(23,139,76,0.2)" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "2rem", color: "#178B4C" }}>60–70%</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "#5A6B5C", marginTop: "4px" }}>Food waste volume reduction</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ border: "2px solid #178B4C", overflow: "hidden", boxShadow: "0 20px 45px rgba(5,49,20,0.15)" }}>
              <img src={img3} alt="De-Watering System" className="w-full" style={{ maxHeight: "380px", objectFit: "cover" }} />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section bg="#F5F4EF">
        <div className="text-center mb-2"><SectionLabel label="How It Works" /></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {processSteps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * i }}
              className="rn-card-shadow p-6 hover:-translate-y-1" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(23,139,76,0.15)" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#A0780E", marginBottom: "8px" }}>{s.step}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem", color: "#053114", marginBottom: "8px" }}>{s.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.85rem", color: "#5A6B5C", lineHeight: 1.65 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-center"><SectionLabel label="Key Benefits" /></div>
            <div className="space-y-3 mt-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 p-3" style={{ border: "1px solid rgba(23,139,76,0.12)" }}>
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#178B4C" }} />
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: "#5A6B5C" }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-center"><SectionLabel label="Cannot Process" /></div>
            <p className="mb-4 text-center" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "#5A6B5C" }}>
              All kinds of inorganic matters like metal, plastic, and paper cannot be processed:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {cannotProcess.map(item => (
                <span key={item} className="px-3 py-1.5 text-[11px] tracking-wide"
                  style={{ backgroundColor: "rgba(160,120,14,0.08)", border: "1px solid rgba(160,120,14,0.2)", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "#A0780E" }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section bg="#F5F4EF">
        <div className="text-center mb-2"><SectionLabel label="Technical Data" /></div>
        <div className="mt-4 max-w-2xl mx-auto"><SpecsTable headers={specs.headers} rows={specs.rows} /></div>
      </Section>

      <Section>
        <div className="text-center mb-2"><SectionLabel label="FAQ" /></div>
        <div className="mt-4 max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      <MachineGallery images={[
        { src: img3, caption: "rNature Dewaterer" },
        { src: "https://images.unsplash.com/photo-1581092579364-7a6468cb161e?w=400&h=400&fit=crop&auto=format", caption: "Dewatering Process" },
        { src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=400&fit=crop&auto=format", caption: "Grey Water Output" },
        { src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=400&fit=crop&auto=format", caption: "Waste Reduction" },
      ]} />
      <Testimonials />
      <PageCTA />
    </PageLayout>
  );
}