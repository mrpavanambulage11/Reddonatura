import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Phone, Mail, ArrowUpRight, MapPin } from "lucide-react";
import worldMap from "../../imports/image-13.png";
import quoteImage from "../../imports/reddonatura-garbage-to-green-logo.png";

export function Contact({ onOpenForm }: { onOpenForm: () => void }) {
  const { ref, inView } = useInView();

  return (
    <>
      {/* ── World Presence Map ───────────────────────── */}
      <section style={{ backgroundColor: "#0C1A0D" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Section label */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="pt-20 pb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-5"
          >
            <div className="flex items-end gap-4">
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "#178B4C",
                  lineHeight: 1,
                }}
              >
                Global
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
                Presence
              </span>
            </div>
            <p
              className="max-w-sm"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "0.9rem",
                color: "rgba(245,240,232,0.45)",
                lineHeight: 1.7,
              }}
            >
              Active operations across 20+ countries, with Bengaluru, India as our global headquarters.
            </p>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full overflow-hidden"
          style={{ backgroundColor: "#0C1A0D" }}
        >
          <img
            src={worldMap}
            alt="Reddonatura global operations map — 20+ countries"
            className="w-full h-auto block"
            style={{
              filter: "brightness(1.1) saturate(1.3)",
              maxHeight: "520px",
              objectFit: "contain",
            }}
          />

          {/* Floating stat pills over the map */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-full px-3 flex justify-center">
            <div className="flex items-center gap-2 sm:gap-5">
              {[
                { value: "20+", label: "Countries" },
                { value: "7,000+", label: "Clients" },
                { value: "10+", label: "Industries" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3"
                  style={{
                    backgroundColor: "rgba(11,31,16,0.88)",
                    border: "1px solid rgba(23,139,76,0.3)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 700,
                      fontSize: "clamp(1rem, 3vw, 1.4rem)",
                      color: "#4ade80",
                      lineHeight: 1,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(9px, 2vw, 11px)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(245,240,232,0.7)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── CTA Section ──────────────────────────────── */}
      <section
        id="contact"
        className="relative overflow-hidden"
        style={{ backgroundColor: "#F5F4EF" }}
      >
        {/* Decorative background circle */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ backgroundColor: "rgba(13,130,57,0.06)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{ backgroundColor: "rgba(160,120,14,0.05)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">

            {/* Left — headline block */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Label */}
              <div className="flex items-end gap-4 mb-8">
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(2rem, 3.5vw, 3rem)",
                    color: "#0D8239",
                    lineHeight: 1,
                  }}
                >
                  Connect
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
                  With Us
                </span>
              </div>

              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  color: "#0C1A0D",
                  lineHeight: 1.1,
                }}
              >
                Ready to Turn Your
                <br />
                <em style={{ color: "#0D8239", fontStyle: "italic" }}>
                  Waste into Value?
                </em>
              </h2>

              <p
                className="mb-10 max-w-xl"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "1.05rem",
                  color: "#5A6B5C",
                  lineHeight: 1.8,
                }}
              >
                Whether you're a municipality, hotel chain, hospital, or food processor — our team will design a waste management system built around your operations. Get in touch today.
              </p>

              {/* Contact details row */}
              <div className="flex flex-wrap gap-6 mb-10">
                <a
                  href="tel:+917760987934"
                  className="group flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(13,130,57,0.1)" }}
                  >
                    <Phone className="w-4 h-4" style={{ color: "#0D8239" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#8A9E8B",
                        fontWeight: 500,
                      }}
                    >
                      Call Us
                    </div>
                    <div
                      className="group-hover:text-[#0D8239] transition-colors"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "#0C1A0D",
                      }}
                    >
                      +91 7760987934
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@reddonatura.com"
                  className="group flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(13,130,57,0.1)" }}
                  >
                    <Mail className="w-4 h-4" style={{ color: "#0D8239" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#8A9E8B",
                        fontWeight: 500,
                      }}
                    >
                      Email Us
                    </div>
                    <div
                      className="group-hover:text-[#0D8239] transition-colors"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "#0C1A0D",
                      }}
                    >
                      info@reddonatura.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(13,130,57,0.1)" }}
                  >
                    <MapPin className="w-4 h-4" style={{ color: "#0D8239" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#8A9E8B",
                        fontWeight: 500,
                      }}
                    >
                      Headquarters
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "#0C1A0D",
                      }}
                    >
                      Bengaluru, India
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onOpenForm}
                  className="group inline-flex items-center gap-3 px-8 py-4 text-[11.5px] tracking-[0.14em] uppercase transition-all duration-200 hover:bg-[#0B6E30]"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    backgroundColor: "#0D8239",
                    color: "#fff",
                  }}
                >
                  Get a Quote
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <a
                  href="tel:+917760987934"
                  className="group inline-flex items-center gap-3 px-8 py-4 text-[11.5px] tracking-[0.14em] uppercase transition-all duration-200 hover:border-[#0D8239] hover:text-[#0D8239]"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    border: "1.5px solid rgba(12,26,13,0.2)",
                    color: "#0C1A0D",
                  }}
                >
                  Call Now
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>

            {/* Right — bold quote card */}
            {/* Right — Premium Quote Card */}
<motion.div
  initial={{ opacity: 0, x: 24 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.7, delay: 0.25 }}
  className="hidden lg:flex flex-col justify-between p-10 w-[340px] xl:w-[380px] self-stretch rounded-sm"
  style={{
    backgroundColor: "#0B1F10",
    minHeight: "520px",
  }}
>
  {/* Accent Line */}
  <div
    className="w-12 h-[2px] mb-6"
    style={{ backgroundColor: "#A0780E" }}
  />

  {/* Logo */}
  <div className="flex justify-center mb-8">
    <img
      src={quoteImage}
      alt="Reddonatura"
      className="w-56 h-auto object-contain"
    />
  </div>

  {/* Quote */}
  <blockquote
    style={{
      fontFamily: "'Playfair Display', Georgia, serif",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: "1.4rem",
      color: "#F5F0E8",
      lineHeight: 1.7,
      textAlign: "center",
    }}
  >
    "From garbage to green — a smooth transition engineered for the planet."
  </blockquote>

  {/* Bottom */}
  <div className="mt-10 text-center">
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        fontSize: "12px",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#A0780E",
      }}
    >
      REDDONATURA
    </div>

    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 400,
        fontSize: "12px",
        letterSpacing: "0.08em",
        color: "rgba(245,240,232,0.65)",
        marginTop: "6px",
      }}
    >
      G2G — Garbage to Green
    </div>
  </div>
</motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
