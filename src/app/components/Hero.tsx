import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroBg from "../../imports/image-10.png";

export function Hero({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Forest meeting organic waste — nature and sustainability"
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: "cover",
            objectPosition: "65% top",
            minWidth: "100%",
            minHeight: "100%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(11,31,16,0.60)" }}
        />
      </div>

      {/* Thin top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: "#A0780E" }} />

      {/* Main content */}
      <div className="relative flex-1 max-w-7xl mx-auto w-full px-6 pt-28 sm:pt-44 pb-16 sm:pb-28 flex items-center">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px" style={{ backgroundColor: "#A0780E" }} />
            <span
              className="text-[10.5px] tracking-[0.2em] uppercase"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                color: "#A0780E",
              }}
            >
              Sustainable Waste Management
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="mb-8 leading-[1.08]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              color: "#F5F0E8",
            }}
          >
            A Waste System
            <br />
            That{" "}
            <em style={{ fontStyle: "italic", color: "#178B4C" }}>
              Gives Back
            </em>
            <br />
            to Nature
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="mb-10 leading-relaxed max-w-lg"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "1.05rem",
              color: "rgba(245,240,232,0.65)",
            }}
          >
            A globally recognised leader in food waste management,
            championing green, renewable solutions that transform waste
            into something the planet can use.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={onOpenForm}
              className="group inline-flex items-center gap-3 px-7 py-3.5 text-[11.5px] tracking-[0.12em] uppercase transition-all duration-200 hover:bg-[#0B6E30]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                backgroundColor: "#0D8239",
                color: "#fff",
              }}
            >
              Get a Quote
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-7 py-3.5 text-[11.5px] tracking-[0.12em] uppercase transition-all duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                border: "1px solid rgba(245,240,232,0.25)",
                color: "rgba(245,240,232,0.8)",
              }}
            >
              Learn More
            </a>
          </motion.div>

          {/* Stat row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-3 mt-12 pt-8 w-full"
            style={{ borderTop: "1px solid rgba(245,240,232,0.1)" }}
          >
            {[
              { value: "7,000+", label: "Clients Worldwide" },
              { value: "20", label: "Countries" },
              { value: "10+", label: "Industries" },
            ].map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-start pr-4"
                style={{
                  borderRight: i < 2 ? "1px solid rgba(245,240,232,0.1)" : "none",
                  paddingLeft: i > 0 ? "1rem" : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
                    color: "#4ade80",
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-1.5 leading-tight"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(9px, 2vw, 11px)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(245,240,232,0.9)",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[9px] tracking-[0.22em] uppercase"
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "rgba(245,240,232,0.3)",
          }}
        >
          Scroll
        </span>
        <ArrowDown
          className="w-3.5 h-3.5 animate-bounce"
          style={{ color: "rgba(245,240,232,0.3)" }}
        />
      </motion.div>
    </section>
  );
}
