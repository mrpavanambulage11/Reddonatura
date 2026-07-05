import { motion } from "motion/react";
import { PageLayout, Section, SectionLabel, FeatureCard, PageCTA, Testimonials, MachineGallery, usePageMeta, useStructuredData, breadcrumbSchema, productSchema } from "../PageLayout";
import { Settings, Shield, Zap, RotateCcw, CheckCircle2 } from "lucide-react";
import img5 from "../../../imports/image-5.webp";

const features = [
  { icon: <Zap className="w-5 h-5" />, title: "High-Torque Mechanism", desc: "Ensures efficient shredding of materials with minimal effort, delivering maximum throughput even for tough, heterogeneous waste." },
  { icon: <Settings className="w-5 h-5" />, title: "Easy Maintenance", desc: "Quick access to the shredding chamber for hassle-free maintenance and cleaning, minimizing downtime." },
  { icon: <Shield className="w-5 h-5" />, title: "Dual Cutting Mechanisms", desc: "Increases throughput and efficiency by handling more volume simultaneously, ensuring consistent particle size output." },
  { icon: <RotateCcw className="w-5 h-5" />, title: "Auto-Reverse Function", desc: "Prevents jams by automatically reversing the direction of the shafts, ensuring uninterrupted operation." },
  { icon: <Settings className="w-5 h-5" />, title: "Quad-Shaft Technology", desc: "Delivers uniform particle size with minimal fines, ideal for stringent recycling and reprocessing standards." },
  { icon: <Shield className="w-5 h-5" />, title: "Integrated Screen", desc: "Allows precise control over output size, ensuring material consistency for downstream processing requirements." },
];

const benefits = [
  "Versatility: Perfect for processing non-homogeneous materials across industries.",
  "Low Noise Operation: Engineered for quiet performance, suitable for urban industrial sites.",
  "High Throughput: Ideal for large volumes of waste with continuous operation capability.",
  "Durability: Robust construction ensures longevity even under heavy, continuous usage.",
  "Uniform Shredding: Consistent output suitable for stringent recycling standards.",
  "High Security: Ideal for sensitive and confidential document destruction.",
  "Eco-Friendly: Transforms wood waste into chips for mulching or biomass fuel.",
  "Cost-Effective: Reduces the volume of waste, lowering overall disposal costs.",
];

const models = [
  { name: "Single Shaft Shredder", desc: "Versatile shredding for various materials with precision cutting." },
  { name: "Dual Shaft Shredder", desc: "High throughput for bulky and heterogeneous waste streams." },
  { name: "Four Shaft Shredder", desc: "Uniform particle output for recycling and reprocessing." },
  { name: "Wood Chippers", desc: "Efficient wood waste reduction to chips for reuse." },
];

export function ShreddersPage() {
  usePageMeta(
    "Industrial Shredders | Reddonatura",
    "Single, dual, and four-shaft industrial shredders plus wood chippers — high-torque, low-noise, auto-reverse waste size reduction for diverse waste streams.",
    "/products/shredders"
  );
  useStructuredData([
    productSchema({ name: "Industrial Waste Shredders", description: "Single, dual, and four-shaft shredders plus wood chippers engineered for high-torque, low-noise waste size reduction.", path: "/products/shredders" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products/shredders" }, { name: "Industrial Shredders", path: "/products/shredders" }]),
  ]);

  return (
    <PageLayout
      title="Industrial Shredders"
      subtitle="Advanced Shredding Solutions for Efficient Waste Management — engineered with precision to meet diverse industrial needs."
      breadcrumb="RN Machines"
    >
      <Section>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center"><SectionLabel label="Shredder Solutions" /></div>
            <p className="mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              Our comprehensive range of shredders offers unparalleled efficiency in waste processing. From robust single shaft shredders to powerful four shaft and specialized wood chippers, each model is engineered with precision to meet diverse industrial needs.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Industrial Grade", "Auto-Reverse", "Low Noise", "High Throughput"].map(tag => (
                <span key={tag} className="px-3 py-1.5 text-[11px]"
                  style={{ backgroundColor: "rgba(23,139,76,0.08)", border: "1px solid rgba(23,139,76,0.2)", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "#178B4C" }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ border: "2px solid #178B4C", overflow: "hidden", boxShadow: "0 20px 45px rgba(5,49,20,0.15)" }}>
              <img loading="lazy" decoding="async" src={img5} alt="Industrial Shredder" className="w-full" style={{ maxHeight: "360px", objectFit: "cover" }} />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section bg="#F5F4EF">
        <div className="text-center mb-10"><SectionLabel label="Innovative Features" /></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => <FeatureCard key={i} title={f.title} description={f.desc} icon={f.icon} centered />)}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-2"><SectionLabel label="Key Benefits" /></div>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          {benefits.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 * i }}
              className="flex items-start gap-3 p-4" style={{ border: "1px solid rgba(23,139,76,0.12)" }}>
              <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: "#178B4C" }} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "#5A6B5C", lineHeight: 1.6 }}>{b}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section bg="#F5F4EF">
        <div className="text-center mb-2"><SectionLabel label="Our Models" /></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
          {models.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * i }}
              className="rn-card-shadow p-6 hover:-translate-y-1" style={{ backgroundColor: "#053114" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem", color: "#A0780E", marginBottom: "8px" }}>{m.name}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.825rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <MachineGallery images={[
        { src: img5, caption: "Industrial Shredder" },
        { src: "https://images.unsplash.com/photo-1706800021506-c7fa86707eed?w=400&h=400&fit=crop&auto=format", caption: "Shredder Output" },
        { src: "https://images.unsplash.com/photo-1581092579364-7a6468cb161e?w=400&h=400&fit=crop&auto=format", caption: "Processing Line" },
        { src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=400&fit=crop&auto=format", caption: "Site Installation" },
      ]} />
      <Testimonials />
      <PageCTA />
    </PageLayout>
  );
}