import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import aboutImg from "../../imports/WhatsApp_Image_2026-06-22_at_5.48.15_PM.jpeg";

const credentials = [
  "CE Certified machinery across all product lines",
  "Operations spanning 20+ countries worldwide",
  "Trusted by 7,000+ clients across 10 industries",
  "Full lifecycle waste-to-resource solutions",
];

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className="bg-[#F5F4EF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="pt-24 pb-14 flex items-end gap-4"
        >
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
              color: "#0D8239",
              lineHeight: 1,
            }}
          >
            About
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#A0780E",
              paddingBottom: "5px",
            }}
          >
            Reddonatura
          </span>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 xl:gap-28 pb-28 items-start">
          {/* Left — editorial content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-8"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#0C1A0D",
                lineHeight: 1.15,
              }}
            >
              Leading the World{" "}
              <em style={{ fontStyle: "italic", color: "#0D8239" }}>
                Toward
              </em>{" "}
              <br />
              a Greener Tomorrow
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 leading-[1.8]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "1.025rem",
                color: "#4A5C4B",
              }}
            >
              Reddonatura is one of the world's leading food waste solution
              providers. Our success is driven by our commitment to green,
              renewable solutions — and it begins with an environmentally sound
              approach that transforms waste into something genuinely valuable.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12 leading-[1.8]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "1.025rem",
                color: "#4A5C4B",
              }}
            >
              Through innovative, environmentally friendly technologies, we aim
              to transform waste into resources — rendering a smooth transition
              on every journey from garbage to green.
            </motion.p>

            {/* Credentials list */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 mb-12"
            >
              {credentials.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "#0D8239" }}
                  />
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.925rem",
                      color: "#4A5C4B",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              href="#contact"
              className="group inline-flex items-center gap-3 text-[11.5px] tracking-[0.12em] uppercase pb-0.5 transition-all duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                color: "#0D8239",
                borderBottom: "1.5px solid #0D8239",
              }}
            >
              Work With Us
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* Right — image composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative overflow-hidden w-full" style={{ aspectRatio: "4/3" }}>
              <ImageWithFallback
                src={aboutImg}
                alt="Reddonatura G2G facility — Garbage to Green"
                className="w-full h-full object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 50%, rgba(11,31,16,0.6) 100%)",
                }}
              />
            </div>

            {/* Golden accent overlay block */}
            <div
              className="absolute -bottom-5 -left-5 p-4 md:p-5"
              style={{
                backgroundColor: "#A0780E",
                maxWidth: "160px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "2rem",
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                15+
              </div>
              <div
                className="mt-1.5"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.4,
                }}
              >
                Years of sustainable innovation
              </div>
            </div>

            {/* Secondary small image */}
            <div
              className="absolute -top-6 -right-6 overflow-hidden hidden xl:block"
              style={{ width: "140px", height: "140px" }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=300&h=300&fit=crop&auto=format"
                alt="Solar energy"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(13,130,57,0.25)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
