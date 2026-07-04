import { motion } from "motion/react";
import { PageLayout, Section, SectionLabel, FeatureCard, PageCTA, usePageMeta, useStructuredData, breadcrumbSchema } from "./PageLayout";
import { Handshake, TrendingUp, Lightbulb, Star, Leaf } from "lucide-react";

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
  { src: logoIbis, name: "IBIS Hotels" },
  { src: logoDubai, name: "Dubai Expo 2020" },
  { src: logoMarriott, name: "Marriott Bonvoy" },
  { src: logoPrestige, name: "Prestige" },
  { src: logoNovotel, name: "Novotel" },
  { src: logoDell, name: "Dell" },
  { src: logoArvind, name: "Arvind" },
  { src: logoIkea, name: "IKEA" },
  { src: logoMcd, name: "McDonald's" },
  { src: logoKia, name: "Kempegowda International Airport" },
  { src: logoGR, name: "GR Constructions" },
  { src: logoGaurs, name: "Gaurs Group" },
  { src: logoDulsco, name: "DULSCO" },
  { src: logoKraheja, name: "K Raheja Group" },
  { src: logoAwal, name: "Awal Group" },
  { src: logoAdarsh, name: "Adarsh Developers" },
  { src: logoMdi, name: "MDI" },
  { src: logoPalo, name: "Palo Alto Networks" },
];

const pillars = [
  { icon: <Handshake className="w-5 h-5" />, title: "Building Strong Partnerships", desc: "We are proud to collaborate with industry-leading clients and partners who share our vision for sustainability and environmental responsibility." },
  { icon: <Star className="w-5 h-5" />, title: "Customer-Centric Approach", desc: "Our clients are at the heart of everything we do. We prioritize their needs through personalized services and tailored solutions." },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Shared Success Stories", desc: "Together with our clients, we have achieved remarkable milestones — from optimizing recycling processes to implementing cutting-edge technologies." },
  { icon: <Lightbulb className="w-5 h-5" />, title: "Continuous Innovation", desc: "By fostering a culture of innovation, we empower our clients and partners to stay ahead in an ever-evolving industry." },
  { icon: <Star className="w-5 h-5" />, title: "Commitment to Excellence", desc: "We uphold the highest standards of integrity, professionalism, and ethical conduct, earning the trust and respect of our clients." },
  { icon: <Leaf className="w-5 h-5" />, title: "Driving Sustainable Growth", desc: "Together, we are driving sustainable growth and making a positive impact on the environment and society." },
];

export function ClientsPage() {
  usePageMeta(
    "Clients & Partners | Reddonatura",
    "Trusted by 7,000+ clients worldwide including IBIS Hotels, Marriott Bonvoy, IKEA, McDonald's, Dell, and Kempegowda International Airport for organic waste management solutions.",
    "/clients"
  );
  useStructuredData(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Clients & Partners", path: "/clients" }]));

  return (
    <PageLayout
      title="Clients & Partners"
      subtitle="Building strong relationships with our clients and partners — the cornerstone of our success in the waste management industry."
      breadcrumb="Clients & Partners"
    >
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel label="Our Partnership" />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1.05rem", color: "#5A6B5C", lineHeight: 1.85 }}>
            At Reddonatura, we believe in fostering strong relationships with our clients and partners, as they are the cornerstone of our success. Through collaboration and mutual trust, we strive to achieve shared goals and drive innovation in the waste management industry. Here are some of our valued clients and partners who have taken a step to contribute towards the <em style={{ color: "#178B4C" }}>Garbage to Green</em> movement with us.
          </p>
        </div>
      </Section>

      <Section bg="#F5F4EF">
        <div className="text-center mb-10"><SectionLabel label="Trusted By" /></div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {logos.map((logo, i) => (
            <motion.div key={logo.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.04 * i }}
              className="flex items-center justify-center p-3 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: "#ffffff", border: "1px solid rgba(23,139,76,0.12)", boxShadow: "0 4px 16px rgba(0,0,0,0.05)", height: "64px" }}>
              <img loading="lazy" decoding="async"
                src={logo.src}
                alt={logo.name}
                className="max-w-full object-contain transition-transform duration-300 hover:scale-105"
                style={{ maxHeight: "32px" }}
              />
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-8" style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#8A9E8B" }}>
          Among 7,000+ clients worldwide across 20+ countries
        </p>
      </Section>

      <Section>
        <div className="text-center mb-12"><SectionLabel label="Why Partners Choose Us" /></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => <FeatureCard key={i} title={p.title} description={p.desc} icon={p.icon} centered />)}
        </div>
      </Section>
      <PageCTA />
    </PageLayout>
  );
}
