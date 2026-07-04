import { Link } from "react-router-dom";
import logo from "../../imports/reddonaturafooter logo.png";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowUpRight } from "lucide-react";

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
  { icon: Linkedin, href: "#", label: "LinkedIn", className: "social-linkedin" },
  { icon: Twitter, href: "#", label: "Twitter", className: "social-twitter" },
  { icon: Facebook, href: "#", label: "Facebook", className: "social-facebook" },
  { icon: Instagram, href: "#", label: "Instagram", className: "social-instagram" },
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
            <div className="inline-block mb-6 px-3 py-1.5 bg-white">
              <img loading="lazy" decoding="async"
                src={logo}
                alt="Reddonatura"
                className="h-5 object-contain"
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
                  className={`social-icon ${s.className} group w-10 h-10 flex items-center justify-center`}
                >
                  <s.icon className="w-4 h-4 transition-colors duration-200" style={{ color: "rgba(245,240,232,0.8)" }} />
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
                    className="inline-block hover:text-[#D9B65C] hover:translate-x-1.5 transition-all duration-200"
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
                    className="inline-block hover:text-[#D9B65C] hover:translate-x-1.5 transition-all duration-200"
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
              <div className="flex items-start gap-3">
                <MapPin
                  className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                  style={{ color: "#A0780E" }}
                />
                <span style={linkStyle}>
                  Sy. No 41/1, Veerenahalli Village, Virgonagar Industrial Estate, Bidarahalli Hobli, Post, beside Cipla Factory, Virgonagar, J.I.Veerenahalli, Karnataka 560049
                </span>
              </div>

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
          className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(245,240,232,0.08)" }}
        >
          <p
            className="order-2 sm:order-1 text-left"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(245,240,232,0.5)",
            }}
          >
            Designed and developed by{" "}
            <a
              href="https://www.glazinggenius.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              style={{ color: "rgba(245,240,232,0.75)", fontWeight: 500 }}
            >
              Glazing Genius
            </a>
          </p>

          <p
            className="order-1 sm:order-2 text-center"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              color: "rgba(245,240,232,0.6)",
            }}
          >
            © 2026 Reddonatura India Private Limited. All rights reserved.
          </p>

          <div className="order-3 flex gap-6 sm:justify-end">
            {[
              { label: "Terms & Conditions", href: "/terms-and-conditions" },
              { label: "Privacy Policy", href: "/privacy-policy" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="hover:text-white/70 transition-colors duration-200"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(245,240,232,0.55)",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
