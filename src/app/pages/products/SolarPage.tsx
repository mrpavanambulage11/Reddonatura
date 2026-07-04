import { motion } from "motion/react";
import { PageLayout, Section, SectionLabel, FeatureCard, PageCTA, Testimonials, MachineGallery, usePageMeta, useStructuredData, breadcrumbSchema, productSchema } from "../PageLayout";
import { Sun, Zap, Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import img4 from "../../../imports/image-4.webp";

const features = [
  { icon: <Sun className="w-5 h-5" />, title: "High-Efficiency Panels", desc: "Utilize advanced photovoltaic technology to maximize energy conversion rates, delivering superior performance even in variable lighting conditions." },
  { icon: <Zap className="w-5 h-5" />, title: "Smart Solar Integration", desc: "Seamlessly integrates with existing energy systems for optimal performance and intelligent energy management across your entire facility." },
  { icon: <Shield className="w-5 h-5" />, title: "Durable Design", desc: "Built to withstand extreme weather conditions — heavy rain, heat, and high winds — ensuring longevity and consistent energy production year-round." },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Scalable Solutions", desc: "From small residential setups to large-scale commercial and industrial installations, our systems are designed to scale with your growing energy needs." },
];

const benefits = [
  "Cost Savings: Say goodbye to soaring energy bills with solar power that harnesses the sun's energy for free.",
  "Environmental Impact: Reduce your carbon footprint and contribute to a cleaner, greener planet by switching to renewable energy.",
  "Energy Independence: With solar power, you're no longer reliant on traditional energy sources, giving you greater control.",
  "Long-Term Investment: Investing in solar energy provides long-term savings and increases the value of your property.",
  "Reliable Performance: Our solar solutions are built to last, with durable components performing even in challenging conditions.",
  "Real-Time Monitoring: Advanced monitoring systems let you track energy production and optimize usage for maximum efficiency.",
];

const solarTypes = [
  {
    title: "On-Grid Solar",
    desc: "Connected to the utility grid, allowing you to sell excess power back and benefit from net metering. Ideal for facilities with consistent energy consumption.",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&h=300&fit=crop&auto=format",
  },
  {
    title: "Off-Grid Solar",
    desc: "Completely independent from the utility grid with battery storage backup. Perfect for remote locations or facilities requiring energy independence.",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&h=300&fit=crop&auto=format",
  },
  {
    title: "Hybrid Solar",
    desc: "The best of both worlds — connected to the grid with battery backup, ensuring uninterrupted power supply during outages while optimizing cost savings.",
    img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=500&h=300&fit=crop&auto=format",
  },
];

const process = [
  { step: "01", title: "Site Assessment", desc: "Our experts visit your facility to evaluate energy needs, roof/land space, and sun exposure to design the optimal system." },
  { step: "02", title: "System Design", desc: "We create a customized solar system design tailored to your energy requirements, budget, and space constraints." },
  { step: "03", title: "Installation", desc: "Our certified technicians handle the complete installation with minimal disruption to your day-to-day operations." },
  { step: "04", title: "Monitoring & Support", desc: "Post-installation, our advanced monitoring system tracks performance and our team provides ongoing maintenance support." },
];

export function SolarPage() {
  usePageMeta(
    "RN Solar Solutions | Reddonatura",
    "On-grid, off-grid, and hybrid solar power systems with real-time monitoring for residential, commercial, and industrial clients.",
    "/products/solar"
  );
  useStructuredData([
    productSchema({ name: "RN Solar Power System", description: "On-grid, off-grid, and hybrid solar systems tailored to residential, commercial, and industrial energy needs, backed by real-time monitoring.", path: "/products/solar" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products/solar" }, { name: "RN Solar", path: "/products/solar" }]),
  ]);

  return (
    <PageLayout
      title="RN Solar Solutions"
      subtitle="Harnessing Sustainable Energy for Tomorrow — comprehensive solar solutions for residential, commercial, and industrial clients."
      breadcrumb="RN Solar"
    >
      {/* Hero */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center"><SectionLabel label="Solar Energy" /></div>
            <p className="mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              At Reddonatura, we believe in the transformative power of solar energy. With rising environmental concerns and the need for sustainable energy sources, solar power presents a promising solution. Our team of experts is dedicated to providing top-notch solar solutions for all client types.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              One of our standout features is our advanced solar monitoring system, which allows you to track your energy production in real-time and optimize your usage for maximum efficiency. With detailed insights into your solar power generation, you can take control of your energy consumption like never before.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ border: "2px solid #178B4C", overflow: "hidden", boxShadow: "0 20px 45px rgba(5,49,20,0.15)" }}>
              <img loading="lazy" decoding="async" src={img4} alt="RN Solar Panels" className="w-full" style={{ maxHeight: "400px", objectFit: "cover" }} />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Features */}
      <Section bg="#F5F4EF">
        <div className="text-center mb-10">
          <SectionLabel label="Innovative Features" />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", maxWidth: "480px", margin: "0 auto" }}>With R-Nature, you don't get just a machine.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => <FeatureCard key={i} title={f.title} description={f.desc} icon={f.icon} centered />)}
        </div>
      </Section>

      {/* Solar Types */}
      <Section>
        <div className="text-center mb-10">
          <SectionLabel label="Our Solutions" />
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {solarTypes.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * i }}
              className="flex flex-col" style={{ border: "1px solid rgba(23,139,76,0.15)" }}>
              <div className="overflow-hidden" style={{ height: "180px" }}>
                <img loading="lazy" decoding="async" src={t.img} alt={t.title} className="w-full h-full object-cover" style={{ border: "2px solid #178B4C" }} />
              </div>
              <div className="p-5 flex flex-col flex-1" style={{ backgroundColor: "#053114" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem", color: "#A0780E", marginBottom: "8px" }}>{t.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.65 }}>{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Installation process */}
      <Section bg="#F5F4EF">
        <div className="text-center mb-10">
          <SectionLabel label="Our Process" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {process.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * i }}
              className="rn-card-shadow p-6 hover:-translate-y-1" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(23,139,76,0.15)" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#A0780E", marginBottom: "8px" }}>{s.step}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem", color: "#053114", marginBottom: "8px" }}>{s.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.85rem", color: "#5A6B5C", lineHeight: 1.65 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="text-center mb-2"><SectionLabel label="Key Benefits" /></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3 p-4" style={{ border: "1px solid rgba(23,139,76,0.12)" }}>
              <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: "#178B4C" }} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "#5A6B5C", lineHeight: 1.65 }}>{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <MachineGallery images={[
        { src: img4, caption: "Solar Panel Array" },
        { src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=400&fit=crop&auto=format", caption: "Rooftop Installation" },
        { src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=400&fit=crop&auto=format", caption: "Commercial System" },
        { src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=400&h=400&fit=crop&auto=format", caption: "Monitoring Dashboard" },
      ]} />
      <Testimonials />
      <PageCTA />
    </PageLayout>
  );
}