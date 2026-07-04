import { motion } from "motion/react";
import { PageLayout, Section, SectionLabel, FeatureCard, SpecsTable, PageCTA, Testimonials, MachineGallery } from "../PageLayout";
import { Settings, Filter, CheckCircle2 } from "lucide-react";
import img6 from "../../../imports/image-6.png";

const features = [
  { icon: <Filter className="w-5 h-5" />, title: "Modular Design", desc: "Flexible and customizable configurations to suit specific tasks and waste types, with optional cleaning systems such as brushes or drum scrapers." },
  { icon: <Settings className="w-5 h-5" />, title: "Load-Sensing Feed", desc: "Load-sensing material feed for optimized screening performance, handling even the most challenging waste materials with consistent output." },
  { icon: <Filter className="w-5 h-5" />, title: "Optional Cleaning Systems", desc: "Enhanced efficiency with optional integrated cleaning systems including brushes and drum scrapers for continuous operation." },
  { icon: <Settings className="w-5 h-5" />, title: "Adaptable Substructures", desc: "Versatile installation options with project-adapted substructures that can be configured for belt discharge or hopper operation." },
];

const benefits = [
  "Efficient screening of various waste materials",
  "Versatile suitability for different waste management applications",
  "Enhanced productivity with optional cleaning systems",
  "Flexibility in installation with adaptable substructures",
  "Improved waste sorting accuracy and efficiency",
  "Suitable for landfill sites, MBT plants, and recycling facilities",
];

const specs = {
  headers: ["Model No", "Power (HP)", "Drive", "Drum Dia (mm)", "Drum Length (mm)", "Drum Speed (rpm)", "Installation"],
  rows: [
    ["RN TS 1240", "10",    "Electric", "1200", "4000", "18", "Static"],
    ["RN TS 1460", "15",    "Electric", "1400", "6000", "18", "Static"],
    ["RN TS 1660", "15",    "Electric", "1600", "6000", "18", "Static"],
    ["RN TS 1880", "20",    "Electric", "1800", "8000", "15", "Static"],
    ["RN TS 2080", "20/25", "Electric", "2000", "8000", "15", "Static"],
  ],
};

export function TrommelScreensPage() {
  return (
    <PageLayout
      title="Trommel Screens"
      subtitle="Enhanced Waste Sorting Solutions — indispensable tools in waste management offering unparalleled versatility and performance."
      breadcrumb="RN Machines"
    >
      <Section>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center"><SectionLabel label="Trommel Technology" /></div>
            <p className="mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              Reddonatura offers trommel screens that are indispensable tools in waste management, offering unparalleled versatility and performance. From landfill sites to MBT plants, recycling facilities, and automobile recycling plants, these screens excel in delivering efficient separation and sorting.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              Equipped with large screening surfaces, the rotating drums effectively handle even the most challenging materials. Their modular design allows for customization to suit specific tasks, with optional cleaning systems available.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ border: "2px solid #178B4C", overflow: "hidden", boxShadow: "0 20px 45px rgba(5,49,20,0.15)" }}>
              <img src={img6} alt="Trommel Screen" className="w-full" style={{ maxHeight: "380px", objectFit: "cover" }} />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section bg="#F5F4EF">
        <div className="text-center mb-10"><SectionLabel label="Innovative Features" /></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => <FeatureCard key={i} title={f.title} description={f.desc} icon={f.icon} centered />)}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-2"><SectionLabel label="Key Benefits" /></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3 p-4" style={{ border: "1px solid rgba(23,139,76,0.12)" }}>
              <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: "#178B4C" }} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "#5A6B5C" }}>{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="#F5F4EF">
        <div className="text-center mb-2"><SectionLabel label="Technical Data" /></div>
        <div className="mt-4"><SpecsTable headers={specs.headers} rows={specs.rows} /></div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <SectionLabel label="Engineered for Waste" />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.8 }}>
            Reddonatura trommel screens are meticulously engineered to meet the demands of waste management, offering robust construction, innovative features, and reliable performance. With their versatility and efficiency, they play a crucial role in optimizing waste sorting processes and promoting environmental sustainability.
          </p>
        </div>
      </Section>

      <MachineGallery images={[
        { src: img6, caption: "Trommel Screen Drum" },
        { src: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=400&h=400&fit=crop&auto=format", caption: "Waste Sorting" },
        { src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=400&fit=crop&auto=format", caption: "Municipal Application" },
        { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=400&fit=crop&auto=format", caption: "Processing Facility" },
      ]} />
      <Testimonials />
      <PageCTA />
    </PageLayout>
  );
}