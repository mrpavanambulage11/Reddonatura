import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { usePageMeta, useNoIndex } from "./PageLayout";

export function NotFoundPage() {
  usePageMeta(
    "Page Not Found | Reddonatura",
    "The page you're looking for doesn't exist. Explore Reddonatura's organic waste converters, biogas, and solar solutions."
  );
  useNoIndex();

  return (
    <div
      className="pt-[72px] lg:pt-[112px] flex items-center justify-center text-center px-6"
      style={{ backgroundColor: "#ffffff", minHeight: "70vh" }}
    >
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(4rem, 12vw, 8rem)",
            color: "#178B4C",
            lineHeight: 1,
          }}
        >
          404
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#053114" }}
        >
          Looks like this page went to green already.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-md mx-auto"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.7 }}
        >
          The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-[11.5px] tracking-[0.12em] uppercase transition-all duration-200 hover:-translate-y-0.5"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              backgroundColor: "#178B4C",
              color: "#ffffff",
              boxShadow: "0 10px 26px rgba(23,139,76,0.35)",
            }}
          >
            Back to Home
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
