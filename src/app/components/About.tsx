import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
//import { ArrowRight, CheckCircle2 } from "lucide-react";
import aboutImg from "../../imports/WhatsApp_Image_2026-06-22_at_5.48.15_PM.jpeg";
import { ArrowRight, CheckCircle2, Leaf } from "lucide-react";

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
  className="pt-24 pb-10"
>
  {/* Title */}
  <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
    <span
      style={{
        fontFamily: "'Cormorant Garamond', serif",

        fontWeight: 400,
        fontSize: "clamp(1.75rem, 7.5vw, 3.3rem)",
        color: "#0D8239",
        lineHeight: 1,
        letterSpacing: "-0.02em",
      }}
    >
      About
    </span>

    <span
      style={{
        fontFamily: "'Cormorant Garamond', serif",

        fontWeight: 400,
        fontSize: "clamp(1.75rem, 7.5vw, 3.3rem)",
        color: "#A0780E",
        lineHeight: 1,
        letterSpacing: "-0.02em",
      }}
    >
      Reddonatura
    </span>
  </div>

  {/* Decorative Divider */}
  <div className="flex items-center gap-3 mt-5 w-fit">
    <div
      className="h-[1.5px] rounded-full"
      style={{
        width: "85px",
        backgroundColor: "#0D8239",
      }}
    />

    <Leaf
      size={16}
      strokeWidth={1.8}
      style={{
        color: "#0D8239",
        transform: "rotate(-20deg)",
      }}
    />

    <div
      className="h-[1.5px] rounded-full"
      style={{
        width: "85px",
        backgroundColor: "#0D8239",
      }}
    />
  </div>
</motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 xl:gap-24 pb-24 items-start">
          {/* Left — editorial content */}
          <div>
            <motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.7, delay: 0.1 }}
  className="mb-6"
  style={{
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 550,
    fontSize: "clamp(1.8rem, 3vw, 2.2rem)", // slightly smaller
    color: "#0C1A0D",
    lineHeight: 1.2,
  }}
>
  Leading the World{" "}
  <span style={{ color: "#0D8239" }}>
    Toward
  </span>
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
            <div className="relative overflow-hidden w-full" style={{ aspectRatio: "4/3", boxShadow: "0 30px 60px rgba(5,49,20,0.18)" }}>
              <ImageWithFallback
                loading="lazy"
                decoding="async"
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
                loading="lazy"
                decoding="async"
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
