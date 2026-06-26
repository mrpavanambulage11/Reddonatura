import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import bgVideo from "../../imports/Reddonatura_presentation_2026.pptx-3.MP4";


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

const stats = [
  {
    value: 7000,
    suffix: "+",
    label: "Clients Worldwide",
    description: "Across hospitality, healthcare, agriculture and beyond",
  },
  {
    value: 20,
    suffix: "+",
    label: "Countries",
    description: "A truly global footprint for waste management solutions",
  },
  {
    value: 10,
    suffix: "+",
    label: "Industries Served",
    description: "From municipalities to resorts and everything between",
  },
];

export function Statistics() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#F5F4EF" }}
    >
      {/* Background image with strong overlay */}
      <div className="absolute inset-0">
        <video
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
>
  <source src={bgVideo} type="video/mp4" />
</video>
        <div
  className="absolute inset-0"
  style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
/>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-28">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-end gap-4 mb-5">
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
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
              Reach
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#F5F0E8",
              lineHeight: 1.15,
            }}
          >
            Trusted Across the Globe
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              color: "rgba(245,240,232,0.55)",
            }}
          >
            A high-performing team delivering sustainable waste management solutions at scale.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid md:grid-cols-3 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="text-center px-8 md:px-12 py-8 md:py-0 first:md:pl-0 last:md:pr-0"
            >
              {/* Large number */}
              <div
                className="mb-3"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 900,
                  fontSize: "clamp(4rem, 8vw, 6.5rem)",
                  color: "#178B4C",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                <CountUp end={stat.value} inView={inView} />
                {stat.suffix}
              </div>

              {/* Label */}
              <div
                className="mb-3 uppercase tracking-[0.14em] text-[11px]"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  color: "#A0780E",
                }}
              >
                {stat.label}
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.875rem",
                  color: "rgba(245,240,232,0.45)",
                  lineHeight: 1.6,
                }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
