import logo from "../../imports/image.png";
import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#industries", label: "Industries" },
  { href: "#contact", label: "Contact" },
];

const productLinks = [
  "Organic Waste Digester",
  "Biogas Solutions",
  "De-Watering Systems",
  "Solar Solutions",
  "Industrial Shredders",
  "Trommel Screens",
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const labelStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 600,
  fontSize: "11px",
  letterSpacing: "0.18em",
  color: "#C99A1A",
  textTransform: "uppercase" as const,
};

const linkStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 300,
  fontSize: "0.875rem",
  color: "rgba(245,240,232,0.75)",
};

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0B1F10" }}>
      {/* Accent top line */}
      <div
        className="w-full h-[2px]"
        style={{ backgroundColor: "#A0780E" }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Main grid */}
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-x-8 gap-y-12 mb-16">
          {/* Brand column */}
          <div>
            <div className="inline-block mb-6 px-3 py-2 bg-white">
              <img
                src={logo}
                alt="Reddonatura"
                className="h-8 object-contain"
              />
            </div>
            <p
              className="mb-8 leading-[1.75] max-w-[260px]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "0.875rem",
                color: "rgba(245,240,232,0.7)",
              }}
            >
              A globally recognised leader in food waste management —
              championing green, renewable solutions that transform
              waste into value.
            </p>

            {/* Social row */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center transition-colors duration-200 hover:bg-[#0D8239]"
                  style={{ border: "1px solid rgba(245,240,232,0.12)" }}
                >
                  <s.icon className="w-3.5 h-3.5" style={{ color: "rgba(245,240,232,0.8)" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="mb-5" style={labelStyle}>
              Navigation
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                    style={linkStyle}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <div className="mb-5" style={labelStyle}>
              Products
            </div>
            <ul className="space-y-3">
              {productLinks.map((p) => (
                <li key={p}>
                  <a
                    href="#products"
                    className="hover:text-white transition-colors duration-200"
                    style={linkStyle}
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-5" style={labelStyle}>
              Contact
            </div>
            <div className="space-y-5">
              <a
                href="tel:+917760987934"
                className="flex items-start gap-3 group"
              >
                <Phone
                  className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                  style={{ color: "#A0780E" }}
                />
                <span
                  className="group-hover:text-white transition-colors duration-200"
                  style={linkStyle}
                >
                  +91 7760987934
                </span>
              </a>
              <a
                href="mailto:info@reddonatura.com"
                className="flex items-start gap-3 group"
              >
                <Mail
                  className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                  style={{ color: "#A0780E" }}
                />
                <span
                  className="group-hover:text-white transition-colors duration-200"
                  style={linkStyle}
                >
                  info@reddonatura.com
                </span>
              </a>

              <div
                className="mt-8 pt-8"
                style={{ borderTop: "1px solid rgba(245,240,232,0.08)" }}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-[10.5px] tracking-[0.14em] uppercase transition-colors duration-200 hover:text-white"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    color: "#178B4C",
                  }}
                >
                  Get a Quote
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(245,240,232,0.08)" }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              color: "rgba(245,240,232,0.6)",
            }}
          >
            © 2026 Reddonatura India Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Terms & Conditions", "Privacy Policy", "FAQs"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white/70 transition-colors duration-200"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(245,240,232,0.55)",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
