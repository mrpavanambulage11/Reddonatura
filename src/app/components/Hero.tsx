import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useInView } from "./hooks/useInView";
import heroDesktop from "../../imports/hero-desktop.webp";
import heroMobile from "../../imports/hero-mobile.webp";

function CountUp({
  end,
  inView,
  duration = 1800,
}: {
  end: number;
  inView: boolean;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, inView, duration]);
  return <>{count.toLocaleString()}</>;
}

const heroStats = [
  { value: 7000, suffix: "+", label: "Clients Worldwide" },
  { value: 20, suffix: "+", label: "Countries" },
  { value: 10, suffix: "+", label: "Industries" },
];

export function Hero({ onOpenForm }: { onOpenForm: () => void }) {
  const { ref: statsRef, inView: statsInView } = useInView(0.3);
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Full-bleed background image */}
<div className="absolute inset-0 overflow-hidden">
  <picture>
    <source media="(max-width: 640px)" srcSet={heroMobile} />
    <img
      src={heroDesktop}
      alt="Reddonatura — Garbage to Green"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ objectPosition: "center center" }}
      // @ts-ignore -- React 18 only recognizes the lowercase HTML attribute form
      fetchpriority="high"
      decoding="async"
    />
  </picture>
</div>

{/* Overlay */}
<div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(180deg, rgba(5,17,9,0.55) 0%, rgba(5,17,9,0.35) 45%, rgba(5,17,9,0.75) 100%)",
  }}
/>

      {/* Thin top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: "#A0780E" }} />

      {/* Main content */}
      <div className="relative flex-1 max-w-7xl mx-auto w-full px-6 pt-[14rem] sm:pt-[18rem] pb-16 sm:pb-20 flex items-center">
                <div className="max-w-6xl">

          {/* Headline */}
         <motion.h1
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
  className="mb-8 leading-[1.08]"
  style={{
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 700,
    fontSize: "clamp(2.4rem, 5vw, 4.4rem)",
    color: "#F5F0E8",
  }}
>
  A Waste Management System
  <br />
  That Gives Back to{" "}
  
   Nature
  
  
</motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="mb-10 leading-relaxed max-w-3xl"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "1.05rem",
             color: "rgba(255,255,255,0.88)",
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
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-[11.5px] tracking-[0.12em] uppercase transition-all duration-200 hover:bg-[#0B6E30] hover:-translate-y-0.5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                backgroundColor: "#0D8239",
                color: "#fff",
                boxShadow: "0 10px 28px rgba(13,130,57,0.4)",
              }}
            >
              Get a Quote
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
           <a
  href="#about"
  className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-[11.5px] tracking-[0.12em] uppercase transition-all duration-200 hover:bg-white hover:text-[#0D8239] hover:-translate-y-0.5"
  style={{
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    border: "1.5px solid rgba(255,255,255,0.7)",
    backgroundColor: "rgba(255,255,255,0.06)",
    color: "#FFFFFF",
  }}
>
  Learn More
  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
</a>
          </motion.div>

          {/* Stat row */}
          <motion.div
            ref={statsRef as any}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-3 mt-12 p-6 sm:p-8 w-full max-w-xl rounded-2xl backdrop-blur-md"
            style={{
              backgroundColor: "rgba(5,17,9,0.45)",
              border: "1px solid rgba(245,240,232,0.14)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            }}
          >
            {heroStats.map((s, i) => (
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
                    color: "rgba(245,240,232,0.9)",
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                  }}
                >
                  <CountUp end={s.value} inView={statsInView} duration={800 + i * 100} />
                  {s.suffix}
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

      
    </section>
  );
}
