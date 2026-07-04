import { motion } from "motion/react";
import { PageLayout, Section, SectionLabel, FeatureCard, PageCTA, Testimonials, usePageMeta, useStructuredData, breadcrumbSchema, productSchema } from "../PageLayout";
import { CheckCircle2, Sun, Wind, Layers, Recycle } from "lucide-react";

const process = [
  { step: "01", title: "Waste Collection", desc: "Organic waste is collected and delivered to the cluster processing facility from multiple generators within the service area." },
  { step: "02", title: "Manual Sorting", desc: "Plastics, metals, glass, and other contaminants are removed to ensure a clean organic feedstock for composting." },
  { step: "03", title: "Shredding & Mixing", desc: "Waste is shredded and homogenised for uniform particle size, improving microbial access and decomposition rates." },
  { step: "04", title: "Dewatering", desc: "A screw press removes excess moisture to achieve optimal carbon-to-nitrogen ratio for efficient aerobic composting." },
  { step: "05", title: "Solarised Windrow Composting", desc: "Organic waste decomposes in windrows under a solar-powered poly-tunnel structure, maintaining ideal temperature and aeration." },
  { step: "06", title: "Automated Turning", desc: "Windrows are turned regularly by an automated turner to maintain aeration, temperature, and uniform compost maturation." },
  { step: "07", title: "Finished Compost", desc: "Mature compost is screened, bagged, and prepared for end use in agriculture, landscaping, and horticulture." },
];

const equipment = [
  { icon: <Layers className="w-5 h-5" />, title: "Waste Receiving Hopper", desc: "Receives and regulates the flow of incoming organic waste from collection vehicles." },
  { icon: <Recycle className="w-5 h-5" />, title: "Screw Press Dewatering Unit", desc: "Removes excess moisture to optimise the carbon-to-nitrogen ratio for efficient composting." },
  { icon: <Wind className="w-5 h-5" />, title: "Organic Waste Shredder", desc: "Reduces waste particle size for faster and more uniform decomposition throughout the windrow." },
  { icon: <Sun className="w-5 h-5" />, title: "Solarised Windrow Turner", desc: "Solar-powered, automated turner maintaining aeration, temperature, and uniform compost maturation across the windrow." },
];

export function WindrowCompostPage() {
  usePageMeta(
    "Windrow Composting Systems | Reddonatura",
    "Solarised, automated windrow composting systems for large-scale municipal and institutional organic waste — cluster-based processing into high-grade compost.",
    "/products/windrow-compost"
  );
  useStructuredData([
    productSchema({ name: "Solarised Windrow Composting System", description: "Cluster-based, solarised windrow composting systems for large-scale municipal and institutional organic waste processing.", path: "/products/windrow-compost" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products/windrow-compost" }, { name: "Windrow Composting", path: "/products/windrow-compost" }]),
  ]);

  return (
    <PageLayout
      title="Windrow Composting"
      subtitle="Cluster-based, solarised windrow composting systems for large-scale municipal and institutional organic waste processing into high-grade compost."
      breadcrumb="Windrow Compost"
    >
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center"><SectionLabel label="Cluster-Based Processing" /></div>
            <p className="mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              While biomining addresses accumulated waste, municipalities also require a long-term strategy for managing fresh organic waste generated every day. Our cluster-based windrow composting model enables multiple wards to process segregated organic waste through decentralised facilities — reducing transportation requirements and improving operational efficiency.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              The solarised automated windrow turner provides a solar-powered, controlled composting environment while maintaining the aeration, temperature, and turning frequency required for high-grade finished compost production.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ border: "2px solid #178B4C", overflow: "hidden", boxShadow: "0 20px 45px rgba(5,49,20,0.15)" }}>
              <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=500&fit=crop&auto=format"
                alt="Windrow Composting" className="w-full" style={{ maxHeight: "400px", objectFit: "cover" }} />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Process */}
      <Section bg="#F5F4EF">
        <div className="text-center mb-12">
          <SectionLabel label="The Process" />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", maxWidth: "520px", margin: "0 auto" }}>
            Converting daily organic waste into valuable compost — step by step.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {process.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.06 * i }}
              className="rn-card-shadow p-5 hover:-translate-y-1" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(23,139,76,0.15)" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#A0780E", marginBottom: "8px" }}>{s.step}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.95rem", color: "#053114", marginBottom: "6px" }}>{s.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.82rem", color: "#5A6B5C", lineHeight: 1.6 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Equipment */}
      <Section>
        <div className="text-center mb-12">
          <SectionLabel label="Core Equipment" />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", maxWidth: "480px", margin: "0 auto" }}>
            High-efficiency composting infrastructure for municipal-scale operations.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {equipment.map((e, i) => <FeatureCard key={i} title={e.title} description={e.desc} icon={e.icon} centered />)}
        </div>
      </Section>

      {/* Benefits */}
      <Section bg="#F5F4EF">
        <div className="text-center mb-2"><SectionLabel label="Key Benefits" /></div>
        <div className="grid sm:grid-cols-3 gap-5 mt-4">
          {[
            { cat: "Operational", items: ["Decentralised — reduces transportation cost", "Multi-ward cluster model", "Automated turning reduces labour"] },
            { cat: "Environmental", items: ["Reduces landfill dependency", "Lowers greenhouse gas emissions", "Circular economy outcomes"] },
            { cat: "Output", items: ["High-grade finished compost", "Sellable agricultural amendment", "Consistent quality through automation"] },
          ].map((g, i) => (
            <div key={i} className="rn-card-shadow p-6 hover:-translate-y-1" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(23,139,76,0.15)" }}>
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