import { motion } from "motion/react";
import { PageLayout, Section, SectionLabel, FeatureCard, SpecsTable, FAQAccordion, PageCTA, Testimonials, MachineGallery } from "../PageLayout";
import { Zap, Settings, Leaf, CheckCircle2 } from "lucide-react";
import img1 from "../../../imports/image-1.png";

const features = [
  { icon: <Zap className="w-5 h-5" />, title: "Rapid Transformation Technology", desc: "Our cutting-edge system ensures swift conversion of organic waste into high-quality outputs, significantly reducing waste volume and accelerating the composting process." },
  { icon: <Settings className="w-5 h-5" />, title: "Smart Sensing & Automation", desc: "Our systems intelligently adapt to different types of organic waste, optimizing the decomposition process with minimal manual effort and maximum efficiency." },
  { icon: <Leaf className="w-5 h-5" />, title: "Waste Reduction", desc: "Achieve organic waste conversion into valuable compost outputs, enhancing sustainability. Our technology reduces waste volume while enhancing compost quality." },
];

const benefits = [
  "Versatile Waste Processing: Handle all organic waste types, from food and garden greens to agricultural waste, effortlessly.",
  "Tailored Solutions: From compact residential units to robust industrial models, our systems cater to every need.",
  "Operational Excellence: Automated, low-maintenance systems designed for industrial scales minimize manual intervention.",
  "Cost Reduction: Significantly lower waste management expenses by transforming waste into resources.",
  "Compliance and Sustainability: Dramatically minimize landfill contributions and slash greenhouse gas emissions.",
];

const specs = {
  headers: ["Model No", "Daily Capacity", "Dimensions (mm)", "Net Weight", "Power"],
  rows: [
    ["RN 25",   "25 Kg/day",   "L-1600 W-600 H-875",   "600 Kg",     "1.5 Kw, 3Ph 440V"],
    ["RN 75",   "75 Kg/day",   "L-1860 W-792 H-1127",  "700 Kg",     "4.5 Kw, 3Ph 440V"],
    ["RN 125",  "125 Kg/day",  "L-2286 W-944 H-1432",  "900 Kg",     "5.5 Kw, 3Ph 440V"],
    ["RN 250",  "250 Kg/day",  "L-2750 W-1158 H-1554", "1500 Kg",    "8.0 Kw, 3Ph 440V"],
    ["RN 500",  "500 Kg/day",  "L-3000 W-1432 H-1860", "1900 Kg",    "16.0 Kw, 3Ph 440V"],
    ["RN 700",  "700 Kg/day",  "L-3535 W-1402 H-1950", "On Request", "23.0 Kw, 3Ph 440V"],
    ["RN 1000", "1000 Kg/day", "L-3962 W-2100 H-2133", "On Request", "25.0 Kw, 3Ph 440V"],
    ["RN 1250", "1250 Kg/day", "L-4600 W-2100 H-2347", "On Request", "27.0 Kw, 3Ph 440V"],
  ],
};

const faqs = [
  { q: "What can you decompose?", a: "Anything you eat including ingredients, cooked food and garden waste can be decomposed in our equipment." },
  { q: "What can you NOT decompose?", a: "Items like plastic, glass, metal, bones, chemicals, and other inorganic matter cannot be processed in the OWC." },
  { q: "How long does it take to decompose?", a: "The decomposition process typically takes 24 hours for most organic food waste, producing ready-to-use compost." },
  { q: "How often should the precompost be removed?", a: "The precompost is typically removed every 3–5 days depending on the volume of input and machine capacity." },
  { q: "Will there be any harmful discharge from the equipment?", a: "No harmful discharge. The machine produces only compost and minimal CO2 — both safe and eco-friendly outputs." },
  { q: "Would there be flies and other infestation on the waste?", a: "No. The enclosed design of the machine prevents any flies or infestation, maintaining a clean and hygienic environment." },
  { q: "Where can the by-product be used?", a: "The compost can be used as a soil amendment for gardens, agriculture, landscaping, and horticulture." },
  { q: "Does the converter machine need a large space?", a: "No. Our machines are designed to be compact and space-efficient, suitable for kitchens, basements, or outdoor areas." },
  { q: "Does the equipment need constant attention?", a: "No. The rNature OWC is fully automatic and requires minimal operator attention. Periodic checks and precompost removal are all that is needed." },
];

export function OrganicWasteDigesterPage() {
  return (
    <PageLayout
      title="Organic Waste Converter & Digester"
      subtitle="CE certified, fully automatic machines that transform organic waste into nutrient-rich compost — contributing to a greener planet."
      breadcrumb="RN Machines"
    >
      <Section>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center"><SectionLabel label="rNature Series" /></div>
            <p className="mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              Embrace sustainability with our pioneering Organic Waste Management Solutions, designed to address the full spectrum of organic waste including food waste, garden trimmings, and agricultural residues.
            </p>
            <p className="mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              Our state-of-the-art technologies spanning advanced composting machines, digesters, and converters deliver a complete solution that transforms your waste into nutrient-rich compost.
            </p>
            <div className="flex flex-wrap gap-3">
              {["CE Certified", "Fully Automatic", "24hr Cycle", "Zero Harmful Discharge"].map(tag => (
                <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5"
                  style={{ backgroundColor: "rgba(23,139,76,0.08)", border: "1px solid rgba(23,139,76,0.2)", fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500, color: "#178B4C" }}>
                  <CheckCircle2 className="w-3 h-3" />{tag}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ border: "2px solid #178B4C", overflow: "hidden", boxShadow: "0 20px 45px rgba(5,49,20,0.15)" }}>
              <img src={img1} alt="rNature Organic Waste Digester" className="w-full" style={{ maxHeight: "380px", objectFit: "cover" }} />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section bg="#F5F4EF">
        <div className="text-center mb-10">
          <SectionLabel label="Innovative Features" />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", maxWidth: "480px", margin: "0 auto" }}>With R-Nature, you don't get just a machine.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {features.map((f, i) => <FeatureCard key={i} title={f.title} description={f.desc} icon={f.icon} centered />)}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-2"><SectionLabel label="Key Benefits" /></div>
        <div className="grid sm:grid-cols-2 gap-4 mt-2">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3 p-4" style={{ border: "1px solid rgba(23,139,76,0.12)" }}>
              <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: "#178B4C" }} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "#5A6B5C", lineHeight: 1.6 }}>{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="#F5F4EF">
        <div className="text-center mb-2"><SectionLabel label="Our Models" /></div>
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-3 mt-4">
          {["RN 25","RN 75","RN 125","RN 250","RN 500","RN 700","RN 1000","RN 1250"].map(m => (
            <div key={m} className="text-center py-4 px-2" style={{ backgroundColor: "#053114" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "0.9rem", color: "#A0780E" }}>{m}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-2"><SectionLabel label="Specifications" /></div>
        <div className="mt-4"><SpecsTable headers={specs.headers} rows={specs.rows} /></div>
      </Section>

      <Section bg="#F5F4EF">
        <div className="text-center mb-2"><SectionLabel label="FAQ" /></div>
        <div className="mt-4 max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      <MachineGallery images={[
        { src: img1, caption: "rNature OWC Unit" },
        { src: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=400&fit=crop&auto=format", caption: "Composting Process" },
        { src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=400&fit=crop&auto=format", caption: "Installation Site" },
        { src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=400&fit=crop&auto=format", caption: "Compost Output" },
      ]} />
      <Testimonials />
      <PageCTA />
    </PageLayout>
  );
}