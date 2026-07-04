import { motion } from "motion/react";
import { PageLayout, Section, SectionLabel, FeatureCard, PageCTA, AnimatedNumber } from "./PageLayout";
import { Award, Leaf, Users, Globe } from "lucide-react";
import aboutImg from "../../imports/WhatsApp_Image_2026-06-22_at_5.48.15_PM.jpeg";

const team = [
  { name: "Abhishek Gupta", role: "MD, CEO & Founder", initials: "AG" },
  { name: "Aayush Gupta", role: "COO & Founder", initials: "AA" },
  { name: "Md. Mubashir", role: "Global - Project & Service Manager", initials: "MM" },
  { name: "Geetha Sathya", role: "Manager - Admin & Sales India", initials: "GS" },
  { name: "Naziya Khan", role: "Manager - Sales International", initials: "NK" },
];

const values = [
  { icon: <Award className="w-5 h-5" />, title: "Integrity & Transparency", desc: "We operate with complete honesty, building long-term trust with every client and partner we work with." },
  { icon: <Leaf className="w-5 h-5" />, title: "Innovation & Improvement", desc: "Continuously improving our technology to stay at the forefront of sustainable waste management globally." },
  { icon: <Users className="w-5 h-5" />, title: "Customer Focus", desc: "Our clients drive every decision. We personalize solutions to meet your exact operational needs." },
  { icon: <Globe className="w-5 h-5" />, title: "Environmental Responsibility", desc: "Every product and decision is made with our planet in mind — from garbage to green." },
];

export function AboutPage() {
  return (
    <PageLayout
      title="About Reddonatura"
      subtitle="One of the world's leading food waste solution providers, pioneering the Garbage to Green movement since 2013."
      breadcrumb="About Us"
    >
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center"><SectionLabel label="Who We Are" /></div>
            <p className="mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              A decentralised approach towards the treatment of organic waste is the need of the hour. A staunch environmentalist, <strong style={{ color: "#053114", fontWeight: 600 }}>Abhishek Gupta</strong> founded Reddonatura in 2013, to enable the <em style={{ color: "#178B4C" }}>Garbage to Green</em> movement.
            </p>
            <p className="mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              Primarily the producers of rNature, Reddonatura is one of the foremost players in Integrated Waste Management. With a marquee list of clients and partners, and over 300 installations of OWCs across India, we have successfully rendered the journey of Garbage to Green seamlessly.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              Our success is driven by our commitment to green renewable sustainable solutions for everyday living — beginning with an environmentally sound approach that transforms waste into something genuinely useful.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div style={{ border: "2px solid #178B4C", overflow: "hidden", boxShadow: "0 30px 60px rgba(5,49,20,0.18)" }}>
              <img src={aboutImg} alt="Reddonatura G2G facility" className="w-full" style={{ maxHeight: "420px", objectFit: "cover" }} />
            </div>
            <div className="absolute -bottom-5 -right-5 px-6 py-5" style={{ backgroundColor: "#A0780E", boxShadow: "0 16px 32px rgba(160,120,14,0.35)" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "2rem", color: "#fff", lineHeight: 1 }}><AnimatedNumber value="300+" /></div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.85)", marginTop: "4px" }}>Installations Across India</div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section bg="#F5F4EF">
        <div className="text-center mb-2"><SectionLabel label="What We Do" /></div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              From analysing your specific requirement and customising machine capacities, right up to installation and post-installation support, our team of experienced professionals will take care of it all.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              So that you can make the move from <em style={{ color: "#178B4C", fontWeight: 500 }}>'Garbage to Green'</em> in the hands of the rNature.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{ num: "7,000+", label: "Clients Worldwide" }, { num: "20+", label: "Countries" }, { num: "300+", label: "Installations" }, { num: "10+", label: "Industries" }].map(s => (
              <div key={s.label} className="rn-card-shadow p-6 text-center hover:-translate-y-1" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(23,139,76,0.15)" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "2.2rem", color: "#178B4C", lineHeight: 1 }}><AnimatedNumber value={s.num} /></div>
                <div className="mt-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#5A6B5C" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-center"><SectionLabel label="Our Mission" /></div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              Our mission is to deliver exceptional manufacturing services by embracing technological advancements, fostering innovation, and maintaining uncompromising standards of quality. We strive to exceed our clients' expectations and contribute to their success.
            </p>
          </div>
          <div>
            <div className="text-center"><SectionLabel label="Our History" /></div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.8 }}>
              Reddonatura began in 2013, evolving over the years to become a leader in the Sustainability Organic Waste sector. Our journey is marked by the <em style={{ color: "#178B4C" }}>Swachh Bharat</em> mission, reflecting our commitment to growth, excellence, and a greener India.
            </p>
          </div>
        </div>
      </Section>

      <Section bg="#F5F4EF">
        <div className="text-center mb-12"><SectionLabel label="Core Values" /></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => <FeatureCard key={i} title={v.title} description={v.desc} icon={v.icon} centered />)}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12"><SectionLabel label="Meet Our Team" /></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.07 * i }}
              className="rn-card-shadow group text-center p-6 hover:-translate-y-1" style={{ border: "1px solid rgba(23,139,76,0.15)" }}>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #053114 0%, #0D8239 100%)",
                  boxShadow: "0 0 0 3px rgba(160,120,14,0.25)",
                }}
              >
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "#D9B65C" }}>{member.initials}</span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem", color: "#053114" }}>{member.name}</h3>
              <p className="mt-1" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.8rem", color: "#5A6B5C", lineHeight: 1.5 }}>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <PageCTA />
    </PageLayout>
  );
}
