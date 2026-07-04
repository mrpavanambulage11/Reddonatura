import { motion } from "motion/react";
import { PageLayout, Section, SectionLabel, FeatureCard, PageCTA, usePageMeta, useStructuredData, breadcrumbSchema } from "./PageLayout";
import { CheckCircle2, Zap, Wrench, BarChart3, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import teamImg from "../../imports/WhatsApp_Image_2026-06-22_at_5.48.15_PM.jpeg";

const features = [
  { icon: <CheckCircle2 className="w-5 h-5" />, title: "Regular Inspection", desc: "We conduct regular inspections to ensure the smooth operation of your recycling plant, providing detailed mechanical and electrical inspection reports to identify any potential issues." },
  { icon: <Wrench className="w-5 h-5" />, title: "Maintenance Advice & Tips", desc: "Our experts offer valuable advice and tips on regular maintenance practices to optimize the performance and longevity of your equipment." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Plant Optimization", desc: "We specialize in plant optimization, fine-tuning your recycling plant to maximize efficiency and productivity across all operational parameters." },
  { icon: <Clock className="w-5 h-5" />, title: "Rapid Response", desc: "Our maintenance packages include access to our dedicated after-sales and support team, ensuring rapid response to any issues or concerns you may have." },
  { icon: <Zap className="w-5 h-5" />, title: "Space-saving Design", desc: "Our equipment features a space-saving design that optimizes floor space, allowing for efficient operation and a minimal footprint in your facility." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Highly Trained Teams", desc: "Our team comprises highly trained engineers and electricians available on request to assist with any queries or issues you may encounter." },
];

const packages = [
  { name: "Basic", items: ["Annual inspection", "Maintenance report", "Email support", "Spare parts advisory"], highlighted: false },
  { name: "Standard", items: ["Bi-annual inspection", "Detailed reports", "Phone & email support", "Priority spare parts", "Remote diagnostics"], highlighted: true },
  { name: "Premium", items: ["Quarterly inspection", "Real-time monitoring", "24/7 dedicated support", "Express spare parts", "Plant optimization", "Operator training"], highlighted: false },
];

export function ServicePage() {
  usePageMeta(
    "Installation & Maintenance Services | Reddonatura",
    "Tiered Basic, Standard, and Premium maintenance packages with inspections, remote diagnostics, express spare parts, and 24/7 dedicated support for Reddonatura waste management equipment.",
    "/service"
  );
  useStructuredData(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Service", path: "/service" }]));

  return (
    <PageLayout
      title="Our Services"
      subtitle="Dedicated to providing unparalleled customer support, ensuring your experience with our products is seamless and satisfying."
      breadcrumb="Service"
    >
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center"><SectionLabel label="Highly Trained Teams" /></div>
            <p className="mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              Our team comprises highly trained and skilled engineers and electricians who are available on request to assist you with any queries or issues you may encounter. With years of experience in the industry, our experts are passionate about delivering top-notch solutions and professional service.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              At Reddonatura, our commitment to excellence is reflected in every aspect of our services — from comprehensive maintenance packages to rapid response teams always ready to serve.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ border: "2px solid #178B4C", overflow: "hidden" }}>
              <img loading="lazy" decoding="async" src={teamImg} alt="Reddonatura service team at our facility"
                className="w-full object-cover" style={{ height: "340px", objectFit: "cover", objectPosition: "center 35%" }} />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section bg="#F5F4EF">
        <div className="text-center mb-12">
          <SectionLabel label="Service Features" />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", maxWidth: "520px", margin: "0 auto" }}>
            Everything included in our comprehensive after-sales support ecosystem.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => <FeatureCard key={i} title={f.title} description={f.desc} icon={f.icon} centered />)}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <SectionLabel label="Maintenance Packages" />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", maxWidth: "520px", margin: "0 auto" }}>
            Flexible maintenance plans designed to keep your equipment running at peak performance.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div key={pkg.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * i }}
              className="group flex flex-col p-8 relative rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
              style={{
                border: pkg.highlighted ? "2px solid #178B4C" : "1px solid rgba(23,139,76,0.15)",
                backgroundColor: pkg.highlighted ? "#053114" : "#ffffff",
                boxShadow: pkg.highlighted ? "0 20px 45px rgba(5,49,20,0.35)" : "0 1px 2px rgba(5,49,20,0.04), 0 12px 28px rgba(5,49,20,0.05)",
              }}>
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-1.5 rounded-full text-[10px] tracking-[0.15em] uppercase"
                  style={{ backgroundColor: "#A0780E", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, boxShadow: "0 8px 20px rgba(160,120,14,0.4)" }}>
                  Recommended
                </div>
              )}
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", color: pkg.highlighted ? "#ffffff" : "#053114", marginBottom: "16px" }}>{pkg.name}</h3>
              <ul className="space-y-3 flex-1 mb-6">
                {pkg.items.map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#A0780E" }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem", color: pkg.highlighted ? "rgba(255,255,255,0.85)" : "#5A6B5C" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="mailto:info@reddonatura.com" className="group/btn flex items-center justify-center gap-2 py-3 rounded-full text-[11px] tracking-[0.12em] uppercase transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: pkg.highlighted ? "#178B4C" : "#053114", color: "#ffffff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                  boxShadow: pkg.highlighted ? "0 10px 26px rgba(23,139,76,0.35)" : "0 10px 26px rgba(5,49,20,0.3)",
                }}>
                Enquire Now
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </Section>
      <PageCTA />
    </PageLayout>
  );
}
