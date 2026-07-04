import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const industries = [
  {
    name: "Restaurants &\nFood Chains",
    description: "Tailored organic waste digesters for high-volume kitchens and food service operations, converting daily food waste into compost on-site.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=400&fit=crop&auto=format",
    accent: "#0D8239",
  },
  {
    name: "Hotels &\nResorts",
    description: "End-to-end waste management for luxury hospitality — from kitchen scraps to biogas energy recovery, reducing operational costs and carbon footprint.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop&auto=format",
    accent: "#64812C",
  },
  {
    name: "Hospitals &\nHealthcare",
    description: "Safe, hygienic, and compliant organic waste processing solutions designed for the strict standards of healthcare environments.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=400&fit=crop&auto=format",
    accent: "#178B4C",
  },
  {
    name: "Municipal\nCorporations",
    description: "Scalable trommel screens and de-watering systems that help cities manage organic waste streams efficiently at a community level.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=400&fit=crop&auto=format",
    accent: "#A0780E",
  },
  {
    name: "Airports &\nTransit Hubs",
    description: "High-capacity waste digestion systems built for the non-stop operations of airports, metro stations, and large transit facilities.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&h=400&fit=crop&auto=format",
    accent: "#0D8239",
  },
  {
    name: "Agriculture &\nFood Processing",
    description: "Converting agricultural by-products and processing waste into valuable compost and biogas — closing the loop on the food supply chain.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&h=400&fit=crop&auto=format",
    accent: "#64812C",
  },
  {
    name: "Commercial\nComplexes",
    description: "Integrated waste solutions for malls, office parks, and mixed-use developments that simplify waste handling across multiple tenants.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=400&fit=crop&auto=format",
    accent: "#178B4C",
  },
  {
    name: "Tourism &\nParks",
    description: "Eco-friendly waste management for national parks, eco-resorts, and tourist destinations committed to preserving natural beauty.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=400&fit=crop&auto=format",
    accent: "#A0780E",
  },
  {
    name: "Railway\nStations",
    description: "Robust organic waste processing for railway stations and transit corridors handling large volumes of food and organic waste daily.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=500&h=400&fit=crop&auto=format",
    accent: "#0D8239",
  },
  {
    name: "Residential\nApartments",
    description: "Compact, odour-free waste digesters designed for apartment complexes and gated communities, turning household waste into garden compost.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop&auto=format",
    accent: "#64812C",
  },
];

export function Industries() {
  const { ref, inView } = useInView();

  return (
    <section
      id="industries"
      ref={ref}
      style={{ backgroundColor: "#F5F4EF" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="pt-24 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-5"
        >
          <div className="flex items-end gap-4 self-start">
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
               // fontStyle: "normal",
                fontWeight: 400,
                fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
                color: "#0D8239",
                lineHeight: 1,
              }}
            >
              Industries
            </span>

               <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                //fontStyle: "normal",
                fontWeight: 400,
                fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                color: "#A0780E",
                lineHeight: 1,
              }}
            >
               We Serve
            </span>
            
            
          </div>
          <h2
            className="hidden md:block"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 600,
              fontSize: "clamp(1.3rem, 2.2vw, 1.9rem)",
              color: "#0C1A0D",
            }}
          >
            Eco-solutions across every sector
          </h2>
        </motion.div>

        {/* Descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mb-14"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "1rem",
            color: "#5A6B5C",
            lineHeight: 1.7,
          }}
        >
          Our innovative waste management systems are deployed across a
          broad spectrum of industries — from five-star hospitality to
          public infrastructure and agricultural processing.
        </motion.p>
      </div>

      {/* Full-width image grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" style={{ backgroundColor: "#0B1F10" }}>
        {industries.map((industry, i) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.04 * i }}
            className="group relative overflow-hidden cursor-pointer"
            style={{ aspectRatio: "1/1.2", backgroundColor: "#0B1F10" }}
          >
            {/* Background image */}
            <ImageWithFallback
              loading="lazy"
              decoding="async"
              src={industry.image}
              alt={industry.name.replace("\n", " ")}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Default dark overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-400 group-hover:opacity-0"
              style={{ backgroundColor: "rgba(11,31,16,0.52)" }}
            />

            {/* Hover colour overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ backgroundColor: `${industry.accent}e0` }}
            />

            {/* Default state — name at bottom */}
            <div
              className="absolute inset-0 flex items-end p-5 transition-opacity duration-300 group-hover:opacity-0"
            >
              <p
                className="whitespace-pre-line leading-snug"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                  color: "#F5F0E8",
                }}
              >
                {industry.name}
              </p>
            </div>

            {/* Hover state — centred name + description */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            >
              <p
                className="whitespace-pre-line leading-tight mb-3"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                  color: "#fff",
                }}
              >
                {industry.name}
              </p>
              <div
                className="w-8 h-px mb-3"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
              />
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(0.72rem, 1vw, 0.82rem)",
                  color: "rgba(255,255,255,0.88)",
                  lineHeight: 1.6,
                }}
              >
                {industry.description}
              </p>
            </div>

            {/* Accent bottom bar */}
            <div
              className="absolute bottom-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            />
          </motion.div>
        ))}
      </div>

      <div className="h-20" />
    </section>
  );
}
