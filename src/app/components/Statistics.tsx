import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Eye, Target, CheckCircle2 } from "lucide-react";
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
               // fontStyle: "normal",
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
              color: "rgba(245,240,232,0.80)",
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
                  color: "rgba(245,240,232,0.85)",
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


export function VisionMission() {
  const { ref, inView } = useInView();

  return (
    <section className="px-6 lg:px-8 my-8">
      <div
        ref={ref}
        className="relative overflow-hidden rounded-3xl"
        style={{ backgroundColor: "#053114" }}
      >
       <div className="max-w-6xl mx-auto px-3 pt-8 pb-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
         <div className="flex justify-center items-end gap-4 mb-3">
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                //fontStyle: "normal",
                fontWeight: 400,
                fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                color: "#178B4C",
                lineHeight: 1,
              }}
            >
              Our
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
              PURPOSE
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(2rem,4vw,3.2rem)",
              color: "#F5F0E8",
              lineHeight: 1.15,
            }}
          >
            Vision & Mission
          </h2>

          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              color: "rgba(245,240,232,0.90)",
              lineHeight: 1.7,
            }}
          >
            Driving sustainable waste management through innovation,
            resource recovery, and environmental responsibility.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {[
            {
              icon: Eye,
              label: "Our Vision",
              title: "Creating Cleaner Cities Through Resource Recovery",
              desc: "Our vision is to empower municipalities and industries with innovative waste management solutions that transform waste into valuable resources while creating cleaner, healthier communities.",
              points: [
                "Reduce landfill dependency",
                "Recover valuable resources from waste",
                "Strengthen compliance with evolving regulations",
                "Improve operational efficiency",
                "Create sustainable circular economy outcomes",
              ],
              x: -30,
              delay: 0,
            },
            {
              icon: Target,
              label: "Our Mission",
              title: "Delivering Sustainable Waste Management Solutions",
              desc: "Our mission is to design and deliver reliable, high-performance organic waste recycling systems that help organizations reduce environmental impact while maximizing operational value.",
              points: [
                "Convert organic waste into useful resources",
                "Promote environmentally responsible practices",
                "Deliver innovative and energy-efficient technologies",
                "Support clients with reliable service and expertise",
                "Build a cleaner and more sustainable future together",
              ],
              x: 30,
              delay: 0.15,
            },
          ].map((card) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, x: card.x }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: card.delay }}
              className="rounded-3xl border border-white/10 p-10 backdrop-blur-sm flex flex-col items-center text-center"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div
                className="flex items-center justify-center mb-6"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "18px",
                  background: "linear-gradient(135deg, rgba(160,120,14,0.35), rgba(23,139,76,0.3))",
                  border: "1px solid rgba(217,182,92,0.4)",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.25)",
                }}
              >
                <card.icon className="w-7 h-7" style={{ color: "#D9B65C" }} strokeWidth={1.75} />
              </div>

              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#A0780E",
                  letterSpacing: "0.18em",
                  fontSize: "12px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                {card.label}
              </div>

              <h3
                className="mt-4 mb-6"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: "#F5F0E8",
                  fontWeight: 700,
                  fontSize: "2rem",
                  lineHeight: 1.25,
                }}
              >
                {card.title}
              </h3>

              <p
                className="max-w-md"
                style={{
                  color: "rgba(245,240,232,0.92)",
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.8,
                  marginBottom: "28px",
                }}
              >
                {card.desc}
              </p>

              <ul className="space-y-4 inline-flex flex-col items-start">
                {card.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-left" style={{ color: "#F5F0E8", fontFamily: "'DM Sans', sans-serif" }}>
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#D9B65C" }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
       </div>
      </div>
    </section>

  );
}