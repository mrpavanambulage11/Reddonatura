import { useState } from "react";
import { motion } from "motion/react";
import { PageLayout, Section, SectionLabel, usePageMeta, useStructuredData, breadcrumbSchema } from "./PageLayout";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

const contacts = [
  { icon: <Phone className="w-5 h-5" />, label: "Phone", values: ["+91 77609 87934", "+91 73384 62806"] },
  { icon: <Mail className="w-5 h-5" />, label: "Email", values: ["geetha@reddonatura.com", "naziya@reddonatura.com", "info@reddonatura.com"] },
  { icon: <MapPin className="w-5 h-5" />, label: "Address", values: ["Sy. No 41/1, Veerenahalli Village, Virgonagar Industrial Estate, Bidarahalli Hobli, Post, beside Cipla Factory, Virgonagar, J.I.Veerenahalli, Karnataka 560049"] },
  { icon: <Clock className="w-5 h-5" />, label: "Business Hours", values: ["Mon – Sat: 9:00 AM – 6:00 PM IST"] },
];

export function ContactPage() {
  usePageMeta(
    "Contact Us | Reddonatura",
    "Get in touch with Reddonatura for organic waste converters, biogas, dewatering, and solar solutions. Call +91 77609 87934, email info@reddonatura.com, or visit our Bengaluru office.",
    "/contact"
  );
  useStructuredData([
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact" }]),
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Reddonatura India Private Limited",
      image: "https://reddonatura.vercel.app/icon-512.png",
      telephone: "+91-77609-87934",
      email: "info@reddonatura.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sy. No 41/1, Veerenahalli Village, Virgonagar Industrial Estate, Bidarahalli Hobli, beside Cipla Factory, Virgonagar, J.I.Veerenahalli",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560049",
        addressCountry: "IN",
      },
      openingHours: "Mo-Sa 09:00-18:00",
      url: "https://reddonatura.vercel.app/contact",
    },
  ]);

  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "🌿 *New Enquiry — Reddonatura Website*",
      "",
      `*Name:* ${form.name}`,
      `*Company:* ${form.company || "—"}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.phone}`,
      "",
      `*Message:* ${form.message || "—"}`,
    ];
    window.open(`https://wa.me/917760987934?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
    setSent(true);
  };

  return (
    <PageLayout
      title="Contact Us"
      subtitle="Drop in, call, or write to us — we'd love to hear from you and explore how we can help your operations go green."
      breadcrumb="Contact Us"
    >
      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center"><SectionLabel label="Drop In" /></div>
            <h2 className="mb-3" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", color: "#053114", lineHeight: 1.2 }}>
              Reddonatura India <em style={{ color: "#178B4C", fontStyle: "normal" }}>Private Limited</em>
            </h2>
            <p className="mb-8" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "#5A6B5C" }}>
              Our door is always open. Reach out through any of the channels below.
            </p>
            <div className="space-y-6">
              {contacts.map((c, i) => (
                <motion.div key={c.label} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="group flex items-start gap-4">
                  <div className="feature-icon w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(23,139,76,0.1)", color: "#178B4C" }}>{c.icon}</div>
                  <div>
                    <div className="mb-1" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "10.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#A0780E" }}>{c.label}</div>
                    {c.values.map(v => (
                      <div key={v} style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.95rem", color: "#053114", lineHeight: 1.6 }}>{v}</div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="p-8" style={{ border: "1px solid rgba(23,139,76,0.15)", backgroundColor: "#ffffff" }}>
              <h3 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", color: "#053114" }}>Send us a Message</h3>
              {sent ? (
                <div className="flex flex-col items-center text-center py-10">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(23,139,76,0.1)" }}>
                    <CheckCircle2 className="w-7 h-7" style={{ color: "#178B4C" }} />
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.95rem", color: "#053114" }}>
                    Thanks, {form.name.split(" ")[0] || "there"}! We've opened WhatsApp with your message — send it across and our team will respond shortly.
                  </p>
                  <button onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", phone: "", message: "" }); }}
                    className="mt-6 px-6 py-2.5 rounded-full text-[11px] tracking-[0.12em] uppercase transition-all duration-200 hover:-translate-y-0.5"
                    style={{ backgroundColor: "rgba(23,139,76,0.08)", border: "1px solid rgba(23,139,76,0.2)", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#178B4C" }}>
                    Send Another
                  </button>
                </div>
              ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10.5px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5A6B5C", display: "block", marginBottom: "6px" }}>Full Name</label>
                    <input required type="text" placeholder="Full Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full px-4 py-2.5 outline-none focus:ring-1 focus:ring-[#178B4C] transition-all"
                      style={{ border: "1px solid rgba(5,49,20,0.12)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#053114" }} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10.5px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5A6B5C", display: "block", marginBottom: "6px" }}>Company</label>
                    <input type="text" placeholder="Company" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} className="w-full px-4 py-2.5 outline-none focus:ring-1 focus:ring-[#178B4C] transition-all"
                      style={{ border: "1px solid rgba(5,49,20,0.12)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#053114" }} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10.5px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5A6B5C", display: "block", marginBottom: "6px" }}>Email</label>
                    <input required type="email" placeholder="Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full px-4 py-2.5 outline-none focus:ring-1 focus:ring-[#178B4C] transition-all"
                      style={{ border: "1px solid rgba(5,49,20,0.12)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#053114" }} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10.5px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5A6B5C", display: "block", marginBottom: "6px" }}>Phone</label>
                    <input required type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="w-full px-4 py-2.5 outline-none focus:ring-1 focus:ring-[#178B4C] transition-all"
                      style={{ border: "1px solid rgba(5,49,20,0.12)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#053114" }} />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10.5px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5A6B5C", display: "block", marginBottom: "6px" }}>Message</label>
                  <textarea rows={5} placeholder="Tell us about your requirements..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} className="w-full px-4 py-2.5 outline-none focus:ring-1 focus:ring-[#178B4C] transition-all resize-none"
                    style={{ border: "1px solid rgba(5,49,20,0.12)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#053114" }} />
                </div>
                <button type="submit" className="w-full py-3 text-[11.5px] tracking-[0.14em] uppercase transition-all duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: "#053114", color: "#ffffff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, boxShadow: "0 10px 26px rgba(5,49,20,0.3)" }}>
                  Send Message
                </button>
              </form>
              )}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Google Maps embed */}
      <section style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex justify-center items-end gap-3 mb-8">
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "normal", fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#178B4C", lineHeight: 1 }}>Find</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A0780E", paddingBottom: "4px" }}>Us Here</span>
          </div>
          <div className="overflow-hidden" style={{ border: "2px solid #178B4C", height: "420px" }}>
            <iframe
              title="Reddonatura Location"
              src="https://maps.google.com/maps?q=Virgonagar+Industrial+Estate+Bidarahalli+Hobli+Bangalore+Karnataka+560049+India&output=embed&z=15"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="group mt-4 flex items-start gap-3">
            <div className="feature-icon w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(23,139,76,0.1)", color: "#178B4C" }}>
              <MapPin className="w-4 h-4" />
            </div>
            <p className="mt-1.5" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.9rem", color: "#053114" }}>
              Sy. No 41/1, Veerenahalli Village, Virgonagar Industrial Estate, Bidarahalli Hobli, Post, beside Cipla Factory, Virgonagar, J.I.Veerenahalli, Karnataka 560049
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
