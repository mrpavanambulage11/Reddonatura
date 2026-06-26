import { useRef, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ChevronLeft, ChevronRight } from "lucide-react";

import logoIbis from "../../imports/IBIS.png";
import logoGR from "../../imports/gr_constructions___1_.png";
import logoGaurs from "../../imports/GAURS.png";
import logoDulsco from "../../imports/DULSCO.png";
import logoDubai from "../../imports/DUBAI_EXPO_2020.png";
import logoMarriott from "../../imports/MARRIOT_BANVOY.png";
import logoMcd from "../../imports/mc_donalds__1___1_.png";
import logoKraheja from "../../imports/k_raheja_group___1_.png";
import logoIkea from "../../imports/ikea.png";
import logoKia from "../../imports/kempegowda_international_airport___1_.png";
import logoArvind from "../../imports/ARVIND.png";
import logoAwal from "../../imports/awal_group_refrigeration_and_air_conditioning___1_.png";
import logoAdarsh from "../../imports/ADARSH_DEVELOPERS.png";
import logoNovotel from "../../imports/NOVOTEL.png";
import logoMdi from "../../imports/MDI.png";
import logoPalo from "../../imports/palo_alto_networks___1_.png";
import logoDell from "../../imports/DELL.png";
import logoPrestige from "../../imports/PRESTIGE.png";

const logos = [
  { src: logoIbis,     name: "IBIS Hotels" },
  { src: logoGR,       name: "GR Constructions" },
  { src: logoGaurs,    name: "Gaurs Group" },
  { src: logoDulsco,   name: "DULSCO" },
  { src: logoDubai,    name: "Dubai Expo 2020" },
  { src: logoMarriott, name: "Marriott Bonvoy" },
  { src: logoMcd,      name: "McDonald's" },
  { src: logoKraheja,  name: "K Raheja Group" },
  { src: logoIkea,     name: "IKEA" },
  { src: logoKia,      name: "Kempegowda International Airport" },
  { src: logoArvind,   name: "Arvind" },
  { src: logoAwal,     name: "Awal Group" },
  { src: logoAdarsh,   name: "Adarsh Developers" },
  { src: logoNovotel,  name: "Novotel" },
  { src: logoMdi,      name: "MDI" },
  { src: logoPalo,     name: "Palo Alto Networks" },
  { src: logoDell,     name: "Dell" },
  { src: logoPrestige, name: "Prestige" },
];

const CARD_W   = 200; // px — logo card width
const CARD_GAP = 28;  // px — gap between cards
const STEP     = CARD_W + CARD_GAP;
const SPEED    = 0.55; // px per frame

// Triple so we can move left & right without ever running out of content
const track = [...logos, ...logos, ...logos];

export function Clients() {
  const { ref, inView } = useInView();
  const trackRef   = useRef<HTMLDivElement>(null);
  const posRef     = useRef(logos.length * STEP); // start at middle set
  const rafRef     = useRef<number>();
  const pausedRef  = useRef(false);
  const resumeRef  = useRef<ReturnType<typeof setTimeout>>();

  const singleW = logos.length * STEP;

  // Clamp position to middle range so we never leave content
  const clamp = (p: number) => {
    if (p >= singleW * 2) return p - singleW;
    if (p <  singleW)     return p + singleW;
    return p;
  };

  const tick = useCallback(() => {
    if (!pausedRef.current && trackRef.current) {
      posRef.current = clamp(posRef.current + SPEED);
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []); // eslint-disable-line

  useEffect(() => {
    // Immediately set starting position so first paint is correct
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [tick]);

  const pause = () => {
    if (resumeRef.current) clearTimeout(resumeRef.current);
    pausedRef.current = true;
  };

  const scheduleResume = (ms = 2000) => {
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => { pausedRef.current = false; }, ms);
  };

  const pauseAndResume = () => {
    pause();
    scheduleResume(2000);
  };

  const goLeft = () => {
    posRef.current = clamp(posRef.current - STEP);
    if (trackRef.current)
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
    pause();
    scheduleResume();
  };

  const goRight = () => {
    posRef.current = clamp(posRef.current + STEP);
    if (trackRef.current)
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
    pause();
    scheduleResume();
  };

  return (
    <section
      ref={ref}
      style={{ backgroundColor: "#0C1A0D" }}
      className="overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="pt-20 pb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-5"
        >
          <div className="flex items-end gap-4">
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "#178B4C",
              lineHeight: 1,
            }}>
              Trusted
            </span>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#A0780E",
              paddingBottom: "5px",
            }}>
              Clients & Partners
            </span>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={goLeft}
              className="w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                border: "1px solid rgba(245,240,232,0.15)",
                backgroundColor: "rgba(245,240,232,0.04)",
                color: "rgba(245,240,232,0.7)",
              }}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goRight}
              className="w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                border: "1px solid rgba(245,240,232,0.15)",
                backgroundColor: "rgba(245,240,232,0.04)",
                color: "rgba(245,240,232,0.7)",
              }}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Top rule */}
      <div className="w-full h-px" style={{ backgroundColor: "rgba(245,240,232,0.06)" }} />

      {/* Marquee viewport */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative py-10"
        onClick={pauseAndResume}
        onTouchStart={pause}
        onTouchEnd={() => scheduleResume(2000)}
        style={{ overflow: "hidden" }}
      >
        {/* Edge fades — desktop only */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none hidden sm:block"
          style={{ background: "linear-gradient(90deg, #0C1A0D 0%, transparent 100%)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none hidden sm:block"
          style={{ background: "linear-gradient(-90deg, #0C1A0D 0%, transparent 100%)" }} />

        {/* Track — no CSS transition so rAF is always in control */}
        <div
          ref={trackRef}
          className="flex items-center"
          style={{
            gap: `${CARD_GAP}px`,
            width: "max-content",
            willChange: "transform",
          }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{
                width: `${CARD_W}px`,
                height: "100px",
                backgroundColor: "#ffffff",
                padding: "12px 16px",
              }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                draggable={false}
                className="max-w-full max-h-full object-contain"
                style={{ userSelect: "none" }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom rule + tagline */}
      <div className="w-full h-px" style={{ backgroundColor: "rgba(245,240,232,0.06)" }} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-7xl mx-auto px-6 py-7 flex flex-wrap items-center gap-4"
      >
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.16em",
          color: "rgba(245,240,232,0.7)",
          textTransform: "uppercase",
        }}>
          Among 7,000+ clients worldwide · 20 countries · CE Certified
        </span>
        <div className="flex-1 h-px hidden sm:block"
          style={{ backgroundColor: "rgba(245,240,232,0.1)" }} />
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.16em",
          color: "#178B4C",
          textTransform: "uppercase",
        }}>
          Click to pause · Resumes in 2s
        </span>
      </motion.div>
    </section>
  );
}
