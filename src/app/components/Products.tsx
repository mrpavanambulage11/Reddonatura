import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ArrowUpRight } from "lucide-react";
import img1 from "../../imports/image-1.png";
import img2 from "../../imports/image-2.png";
import img3 from "../../imports/image-3.png";
import img4 from "../../imports/image-4.png";
import img5 from "../../imports/image-5.png";
import img6 from "../../imports/image-6.png";
import { useState } from "react";


const products = [
  {
    number: "01",
    title: "Organic Waste Digester",
    tagline: "rNature Series",
    description:
      "Fully automatic, CE certified digester machines. The definitive eco-friendly solution converting organic waste into compostable matter at industrial scale.",
    image: img1,
    accent: "#0D8239",
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    number: "02",
    title: "Biogas Solutions",
    tagline: "Energy Recovery",
    description:
      "Transform organic waste into renewable energy. Our biogas systems close the loop between waste and clean power generation.",
    image: img2,
    accent: "#64812C",
    span: "lg:col-span-1 lg:row-span-2",
  },
  {
    number: "03",
    title: "De-Watering Systems",
    tagline: "Water Management",
    description:
      "Advanced systems engineered for performance — optimise water usage and support environmental conservation.",
    image: img3,
    accent: "#178B4C",
    span: "lg:col-span-1",
  },
  {
    number: "04",
    title: "Solar Solutions",
    tagline: "Renewable Energy",
    description:
      "Cutting-edge solar systems built for resilience — transform sunlight into clean, sustainable power for your operations.",
    image: img4,
    accent: "#A0780E",
    span: "lg:col-span-1",
  },
  {
    number: "05",
    title: "Industrial Shredders",
    tagline: "Material Processing",
    description:
      "State-of-the-art shredding designed for versatility — reduce materials into manageable sizes for recycling and reuse.",
    image: img5,
    accent: "#0D8239",
    span: "lg:col-span-1",
  },
  {
    number: "06",
    title: "Trommel Screens",
    tagline: "Waste Sorting",
    description:
      "High-performance trommel screens meticulously engineered for optimal waste sorting and recycling efficiency.",
    image: img6,
    accent: "#64812C",
    span: "lg:col-span-1",
  },
];

function ProductCard({
  product,
  index,
  inView,
}: {
  product: (typeof products)[0];
  index: number;
  inView: boolean;
}) {

const [active, setActive] = useState(false);

  return (
    <motion.div
     onClick={() => setActive(!active)}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.08 * index, ease: "easeOut" }}
      //className={`group relative overflow-hidden ${product.span}`}
      className={`group relative overflow-hidden ${product.span} h-[460px] md:h-[320px]`}
      style={{ minHeight: "320px" }}
    >
      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

     
      {/* Premium Dark Gradient Overlay */}
{/* Premium Bottom Gradient Overlay */}
<div
  className="absolute inset-0 transition-all duration-500"
  style={{
    background: `
      linear-gradient(
        to top,
        rgba(0,0,0,0.72) 0%,
        rgba(0,0,0,0.45) 22%,
        rgba(0,0,0,0.18) 45%,
        rgba(0,0,0,0.04) 70%,
        rgba(0,0,0,0) 100%
      )
    `,
  }}
/>

      {/* Accent colour bar at top */}
      <div
        className="absolute top-0 left-0 w-full h-[3px] transition-all duration-300 group-hover:h-1.5"
        style={{ backgroundColor: product.accent }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        {/* Top: number + tagline */}
        <div className="flex items-start justify-between">
          <span
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "rgba(245,240,232,0.8)",
            }}
          >
            {product.number}
          </span>
          <span
            className="text-[9.5px] tracking-[0.18em] uppercase px-2.5 py-1"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              backgroundColor: product.accent,
              color: "#fff",
            }}
          >
            {product.tagline}
          </span>
        </div>

        {/* Bottom: title + description + link */}
        <div
  className="
    transform transition-all duration-500
    md:translate-y-10 md:group-hover:translate-y-0
  "
>
         <h3
  className={`mb-3 transition-all duration-500 ${
    active ? "-translate-y-6" : ""
  } md:group-hover:-translate-y-6`}
  style={{
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 700,
    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
    color: "#F5F0E8",
    lineHeight: 1.2,
    textShadow: "0 2px 8px rgba(0,0,0,0.8)",
  }}
>
  {product.title}
</h3>
            
          <p
  className="
    mb-5
    max-w-xs
    leading-relaxed
    text-[14px]
    transition-all
    duration-500

    opacity-100
    translate-y-0

    md:opacity-0
    md:translate-y-4
    md:group-hover:opacity-100
    md:group-hover:translate-y-0
  "
  style={{
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    fontSize: "0.95rem",
    color: "rgba(255,255,255,0.98)",
    textShadow: "0 2px 8px rgba(0,0,0,0.8)",
  }}
>
  {product.description}
</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase px-4 py-2 transition-all duration-200 hover:bg-[#F5F0E8]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              color: "#0C1A0D",
              backgroundColor: "#ffffff",
            }}
          >
            Enquire
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Products() {
  const { ref, inView } = useInView();

  return (
    <section
      id="products"
      ref={ref}
      style={{ backgroundColor: "#0C1A0D" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="py-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div className="flex items-end gap-4 self-start">
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
              Products
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 600,
              fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
              color: "#F5F0E8",
            }}
          >
            Innovative Solutions for{" "}
            <em style={{ color: "#178B4C", fontStyle: "italic" }}>
              Sustainable Industry
            </em>
          </h2>
        </motion.div>

        {/* Mosaic grid */}
        <div className="grid lg:grid-cols-3 gap-1 py-1 pb-16">
          {products.map((product, index) => (
            <ProductCard
              key={product.number}
              product={product}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
