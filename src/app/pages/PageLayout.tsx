import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote, Plus, X } from "lucide-react";

/**
 * Drop-in animated counter — parses the leading number out of a string like
 * "7,000+" or "60–70%" and counts up to it once the element scrolls into view.
 * Non-numeric strings (e.g. "24/7") are rendered as-is.
 */
export function AnimatedNumber({ value, duration = 1600 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);

  const match = value.match(/[\d,]+(\.\d+)?/);
  const target = match ? parseFloat(match[0].replace(/,/g, "")) : null;
  const prefix = match ? value.slice(0, match.index) : "";
  const suffix = match ? value.slice((match.index ?? 0) + match[0].length) : "";
  const decimals = match?.[1]?.length ? match[1].length - 1 : 0;

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  useEffect(() => {
    if (!inView || target === null) return;
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  if (target === null) return <span>{value}</span>;

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

const SITE_URL = "https://reddonatura.vercel.app";
const DEFAULT_OG_IMAGE = `${SITE_URL}/icon-512.png`;

function upsertMeta(selector: string, build: () => HTMLMetaElement, content: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  const prev = el?.getAttribute("content") ?? null;
  if (!el) {
    el = build();
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
  return { el, prev };
}

/**
 * Sets a unique title, description, canonical URL, and Open Graph / Twitter
 * tags for the page — restoring the previous values on unmount so route
 * changes never leak stale meta into the next page.
 */
export function usePageMeta(title: string, description: string, path: string = "") {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    const url = `${SITE_URL}${path}`;

    const restores: Array<() => void> = [];

    const { el: descEl, prev: prevDesc } = upsertMeta('meta[name="description"]', () => {
      const m = document.createElement("meta");
      m.name = "description";
      return m;
    }, description);
    restores.push(() => { if (prevDesc !== null) descEl.setAttribute("content", prevDesc); });

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const prevCanonical = canonical?.getAttribute("href") ?? null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
    restores.push(() => { if (prevCanonical !== null) canonical!.setAttribute("href", prevCanonical); });

    const ogFields: [string, string][] = [
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description],
      ['meta[property="og:url"]', url],
      ['meta[property="og:image"]', DEFAULT_OG_IMAGE],
      ['meta[name="twitter:title"]', title],
      ['meta[name="twitter:description"]', description],
    ];
    for (const [selector, content] of ogFields) {
      const isProperty = selector.includes("property=");
      const attrMatch = selector.match(/"([^"]+)"/)?.[1] ?? "";
      const { el, prev } = upsertMeta(selector, () => {
        const m = document.createElement("meta");
        if (isProperty) m.setAttribute("property", attrMatch);
        else m.setAttribute("name", attrMatch);
        return m;
      }, content);
      restores.push(() => { if (prev !== null) el.setAttribute("content", prev); });
    }

    return () => {
      document.title = prevTitle;
      restores.forEach((r) => r());
    };
  }, [title, description, path]);
}

/**
 * Injects one JSON-LD <script> per structured-data object for the lifetime
 * of the page (each item keeps its own "@context", which is what Google's
 * structured-data parser expects — a bare top-level array of documents is not).
 */
export function useStructuredData(data: object | object[]) {
  useEffect(() => {
    const items = Array.isArray(data) ? data : [data];
    const scripts = items.map((item) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(item);
      document.head.appendChild(script);
      return script;
    });
    return () => { scripts.forEach((s) => document.head.removeChild(s)); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(data)]);
}

/** Marks the current page as noindex,follow for the lifetime of the component (e.g. the 404 page). */
export function useNoIndex() {
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    const prev = meta?.getAttribute("content") ?? null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "robots";
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "noindex, follow");
    return () => { if (prev !== null) meta!.setAttribute("content", prev); };
  }, []);
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function productSchema({ name, description, path, image }: { name: string; description: string; path: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: `${SITE_URL}${path}`,
    image: image ?? DEFAULT_OG_IMAGE,
    brand: { "@type": "Brand", name: "Reddonatura" },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Organic Waste Management Equipment",
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  children: React.ReactNode;
}

export function PageLayout({ title, subtitle, breadcrumb, children }: PageLayoutProps) {
  return (
   <div
  style={{ backgroundColor: "#ffffff" }}
  className="pt-[72px] lg:pt-[112px]"
>
      <div className="relative overflow-hidden" style={{ backgroundColor: "#053114", minHeight: "220px" }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #178B4C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #A0780E 0%, transparent 50%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {breadcrumb && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-2 mb-4">
              <Link to="/" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10.5px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}
                className="hover:opacity-80 transition-opacity">Home</Link>
              <ArrowRight className="w-3 h-3" style={{ color: "rgba(255,255,255,0.3)" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10.5px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#A0780E" }}>{breadcrumb}</span>
            </motion.div>
          )}
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#ffffff", lineHeight: 1.15 }}>
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-3 max-w-2xl"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

export function Section({ children, bg = "#ffffff", className = "" }: { children: React.ReactNode; bg?: string; className?: string }) {
  return (
    <section className={className} style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">{children}</div>
    </section>
  );
}

export function SectionLabel({ label }: { label: string }) {
  const parts = label.split(" ");
  return (
    <div className="inline-flex items-end gap-3 mb-6">
      <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "normal", fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#178B4C", lineHeight: 1 }}>
        {parts[0]}
      </span>
      {parts.length > 1 && (
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0780E", paddingBottom: "4px" }}>
          {parts.slice(1).join(" ")}
        </span>
      )}
    </div>
  );
}

export function FeatureCard({ title, description, icon, centered }: { title: string; description: string; icon?: React.ReactNode; centered?: boolean }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
      className={`group rn-card-shadow rounded-2xl p-7 hover:-translate-y-2 hover:scale-[1.02] ${centered ? "text-center" : ""}`}
      style={{ border: "1px solid rgba(23,139,76,0.14)", backgroundColor: "#ffffff" }}>
      {icon && (
        <div className={`feature-icon mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full ${centered ? "mx-auto" : ""}`} style={{ color: "#178B4C" }}>
          {icon}
        </div>
      )}
      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: "1.05rem", color: "#053114", marginBottom: "10px" }}>{title}</h3>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "#5A6B5C", lineHeight: 1.7 }}>{description}</p>
    </motion.div>
  );
}

export function SpecsTable({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="overflow-x-auto" style={{ border: "1px solid rgba(5,49,20,0.08)", boxShadow: "0 1px 2px rgba(5,49,20,0.04), 0 16px 32px rgba(5,49,20,0.06)" }}>
      <table className="w-full border-collapse text-left" style={{ minWidth: "600px" }}>
        <thead>
          <tr style={{ backgroundColor: "#053114" }}>
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3.5 text-[11px] tracking-[0.1em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#ffffff", borderRight: "1px solid rgba(255,255,255,0.1)" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="transition-colors duration-150 hover:bg-[rgba(23,139,76,0.06)]" style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#F5F4EF", borderBottom: "1px solid rgba(5,49,20,0.06)" }}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3.5"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#053114", borderRight: "1px solid rgba(5,49,20,0.06)" }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FAQItem({
  question, answer, index, isOpen, onToggle,
}: {
  question: string;
  answer: string;
  index?: number;
  isOpen?: boolean;
  onToggle?: () => void;
}) {
  const [localOpen, setLocalOpen] = useState(false);
  const open = isOpen !== undefined ? isOpen : localOpen;
  const toggle = onToggle ?? (() => setLocalOpen((o) => !o));

  return (
    <div
      className="mb-4 p-6 transition-all duration-300"
      style={{
        borderRadius: "1rem",
        border: open ? "1.5px solid rgba(23,139,76,0.35)" : "1px solid rgba(5,49,20,0.1)",
        backgroundColor: "#ffffff",
        boxShadow: open
          ? "0 4px 10px rgba(5,49,20,0.06), 0 20px 40px rgba(5,49,20,0.1)"
          : "0 1px 2px rgba(5,49,20,0.04), 0 12px 28px rgba(5,49,20,0.05)",
      }}
    >
      <button className="w-full flex items-center gap-4 text-left" onClick={toggle}>
        {index !== undefined && (
          <span
            className="transition-colors duration-300"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontWeight: 700,
              fontSize: "0.8rem",
              color: open ? "#178B4C" : "#B7C2B8",
              flexShrink: 0,
              minWidth: "22px",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <span className="flex-1" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "1rem", color: "#053114" }}>{question}</span>
        <span
          className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300"
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: open ? "#178B4C" : "transparent",
            border: open ? "none" : "1.5px solid rgba(5,49,20,0.18)",
            color: open ? "#ffffff" : "#053114",
            boxShadow: open ? "0 8px 18px rgba(23,139,76,0.35)" : "none",
          }}
        >
          {open ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.25 } }}
            style={{ overflow: "hidden" }}
          >
            <div className="pt-4 pl-9">
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "#5A6B5C", lineHeight: 1.75 }}>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div>
      {items.map((item, i) => (
        <FAQItem
          key={i}
          index={i}
          question={item.q}
          answer={item.a}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

const industriesList = ["Restaurant", "Resort", "Apartments", "Parks", "Tourism", "Municipality", "Hotel", "Airports", "Agriculture", "Railway Station"];

export function IndustriesServed() {
  return (
    <section style={{ backgroundColor: "#053114" }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", color: "#ffffff" }}>
            Industries <em style={{ color: "#A0780E", fontStyle: "normal" }}>We Serve</em>
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}>
            Our eco-solutions are deployed across a broad spectrum of industries.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {industriesList.map((ind) => (
            <span key={ind} className="px-4 py-2 text-[11px] tracking-[0.12em] uppercase"
              style={{ border: "1px solid rgba(23,139,76,0.4)", color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Rajesh Kumar", role: "F&B Manager, The Leela Palace", text: "Reddonatura's OWC has transformed how we handle our kitchen waste. The installation was seamless and the after-sales support is exceptional. We've reduced our waste disposal costs by over 60%." },
  { name: "Priya Mehta", role: "Sustainability Head, ITC Hotels", text: "We installed the rNature system across 3 of our properties. The results have been outstanding — zero landfill waste from our kitchens and a consistent supply of compost for our gardens." },
  { name: "Ahmed Al-Rashid", role: "Operations Director, DULSCO UAE", text: "Reddonatura has been a reliable partner in our sustainability journey. Their biogas solution has significantly reduced our energy costs and our carbon footprint simultaneously." },
];

export function Testimonials() {
  return (
    <section style={{ backgroundColor: "#F5F4EF" }}>
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="flex items-end gap-3 mb-4 justify-center">
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "normal", fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#178B4C", lineHeight: 1 }}>Client</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0780E", paddingBottom: "4px" }}>Testimonials</span>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", maxWidth: "480px", margin: "0 auto" }}>
            Hear from our clients who have made the switch from garbage to green.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 * i }}
              className="rn-card-shadow p-7 flex flex-col hover:-translate-y-1" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(23,139,76,0.15)" }}>
              <Quote className="w-7 h-7 mb-4 flex-shrink-0" style={{ color: "#A0780E" }} />
              <p className="flex-1 mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontStyle: "normal", fontWeight: 300, fontSize: "0.9rem", color: "#5A6B5C", lineHeight: 1.75 }}>
                "{t.text}"
              </p>
              <div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: "0.95rem", color: "#053114" }}>{t.name}</div>
                <div className="mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.78rem", color: "#178B4C", letterSpacing: "0.05em" }}>{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MachineGallery({ images }: { images: { src: string; caption?: string }[] }) {
  return (
    <section style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex items-end gap-3 mb-10">
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "normal", fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#178B4C", lineHeight: 1 }}>Machine</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0780E", paddingBottom: "4px" }}>Gallery</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.06 * i }}
              className="rn-card-shadow overflow-hidden group hover:-translate-y-1" style={{ border: "1px solid rgba(23,139,76,0.15)", aspectRatio: "1/1" }}>
              <img loading="lazy" decoding="async" src={img.src} alt={img.caption || "Machine"} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              {img.caption && (
                <div className="px-3 py-2" style={{ backgroundColor: "#053114" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>{img.caption}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageCTA() {
  const openForm = () => window.dispatchEvent(new Event("openLeadForm"));
  return (
    <section style={{ backgroundColor: "#053114" }}>
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#ffffff" }}>
            Ready to get <em style={{ color: "#A0780E", fontStyle: "normal" }}>started?</em>
          </h2>
          <p className="mt-2" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "rgba(255,255,255,0.7)" }}>
            Talk to our experts and get a tailored solution for your specific requirements.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 flex-shrink-0">
          <button onClick={openForm}
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[11px] tracking-[0.12em] uppercase transition-all duration-200 hover:-translate-y-1 hover:scale-[1.03]"
            style={{
              backgroundColor: "#178B4C", color: "#ffffff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              boxShadow: "0 10px 26px rgba(23,139,76,0.4)",
            }}>
            Get a Free Quote
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <Link to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[11px] tracking-[0.12em] uppercase transition-all duration-200 hover:-translate-y-1 hover:scale-[1.03] hover:bg-white/5"
            style={{ border: "1.5px solid rgba(255,255,255,0.4)", color: "#ffffff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
            Contact Us
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
