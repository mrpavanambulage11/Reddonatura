import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Wet Waste Management",
    desc: "End-to-end organic waste solutions — from fully automatic composting machines and bin filters to dewatering systems, bio-filters, and shredders.",
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=700&h=500&fit=crop&auto=format",
    href: "/products/wet-waste",
    tag: "OWC · Dewatering · Shredders",
    accent: "#0D8239",
  },
  {
    title: "Windrow Composting",
    desc: "Solarised, automated windrow composting systems for large-scale municipal and cluster-based organic waste processing into high-grade compost.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700&h=500&fit=crop&auto=format",
    href: "/products/windrow-compost",
    tag: "Large Scale · Municipal",
    accent: "#64812C",
  },
  {
    title: "Bio Mining",
    desc: "Scientific excavation, segregation, and recovery of valuable resources from legacy landfill waste — restoring land while generating compost and RDF.",
    image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=700&h=500&fit=crop&auto=format",
    href: "/products/biomining",
    tag: "Landfill Remediation · RDF",
    accent: "#A0780E",
  },
  {
    title: "Biogas Solutions",
    desc: "Convert organic waste into clean, renewable biogas energy — available in containerized, fixed dome, geo membrane, and floating drum configurations.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&h=500&fit=crop&auto=format",
    href: "/products/biogas",
    tag: "Containerized · Fixed Dome · Floating",
    accent: "#178B4C",
  },
  {
    title: "Solar Solutions",
    desc: "High-efficiency on-grid, off-grid, and hybrid solar systems for residential, commercial, and industrial facilities with real-time monitoring.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=700&h=500&fit=crop&auto=format",
    href: "/products/solar",
    tag: "On-Grid · Off-Grid · Hybrid",
    accent: "#A0780E",
  },
  {
    title: "Pyrolysis",
    desc: "Advanced thermal decomposition converting plastic and rubber waste into fuel oil, carbon black, and syngas — zero landfill, maximum resource recovery.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=700&h=500&fit=crop&auto=format",
    href: "/products/pyrolysis",
    tag: "Waste-to-Fuel · Carbon Black",
    accent: "#0D8239",
  },
];

export function Products() {
  const { ref, inView } = useInView();

  return (
    <section id="products" ref={ref} style={{ backgroundColor: "#ffffff" }}>
      <div className="w-full h-1" style={{ backgroundColor: "#0D8239" }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="pt-20 pb-14 flex flex-col items-center text-center gap-4"
        >
          <div className="flex items-end gap-4">
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "normal", fontWeight: 400, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0D8239", lineHeight: 1 }}>
              Our
            </span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "14px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#A0780E", paddingBottom: "5px" }}>
              Products
            </span>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "#4A6B4D", maxWidth: "480px", lineHeight: 1.7 }}>
            Comprehensive waste-to-resource solutions across organics, energy, and remediation.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.07 * index }}
              className="rn-card-shadow group flex flex-col hover:-translate-y-1.5"
              style={{ border: "1px solid rgba(13,130,57,0.15)", backgroundColor: "#fff" }}
            >
              {/* Image */}
              <div className="overflow-hidden flex-shrink-0" style={{ aspectRatio: "4/3", border: "1px solid #155A30" }}>
                <img loading="lazy" decoding="async"
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  draggable={false}
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col px-5 py-5 gap-3 flex-1" style={{ backgroundColor: "#155A30" }}>
                <div className="flex items-start justify-between gap-2">
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: "1.1rem", color: "#ffffff", lineHeight: 1.3 }}>
                    {cat.title}
                  </h3>
                </div>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "9.5px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#A0780E" }}>
                  {cat.tag}
                </span>
                <p className="flex-1" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.82rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.65 }}>
                  {cat.desc}
                </p>
                <div className="pt-1">
                  <Link
                    to={cat.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-[10.5px] tracking-[0.12em] uppercase transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, backgroundColor: "#ffffff", color: "#155A30", border: "1.5px solid rgba(255,255,255,0.5)", boxShadow: "0 8px 18px rgba(0,0,0,0.18)" }}
                  >
                    Explore
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full h-1" style={{ backgroundColor: "#0D8239" }} />
    </section>
  );
}
