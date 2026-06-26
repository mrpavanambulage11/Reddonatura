import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import logo from "../../imports/image.png";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#industries", label: "Industries" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-[0_1px_0_rgba(12,26,13,0.08)] backdrop-blur-md"
            : "bg-white/96 backdrop-blur-sm"
        }`}
      >
        {/* Top contact strip */}
        <div className="bg-[#0B1F10] text-white/70 hidden md:block">
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end items-center gap-8">
            <a
              href="tel:+917760987934"
              className="flex items-center gap-1.5 text-[11px] tracking-[0.1em] uppercase hover:text-white transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <Phone className="w-3 h-3" />
              +91 7760987934
            </a>
            <span className="w-px h-3 bg-white/20" />
            <a
              href="mailto:info@reddonatura.com"
              className="flex items-center gap-1.5 text-[11px] tracking-[0.1em] uppercase hover:text-white transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <Mail className="w-3 h-3" />
              info@reddonatura.com
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-[68px]">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0">
              <img
                src={logo}
                alt="Reddonatura"
                className="h-9 md:h-11 object-contain"
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-[11.5px] tracking-[0.12em] uppercase text-[#0C1A0D]/60 hover:text-[#0D8239] transition-colors duration-200 group py-1"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#0D8239] group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D8239] text-white text-[11px] tracking-[0.12em] uppercase hover:bg-[#0B6E30] transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
              >
                Get a Quote
              </a>
              <button
                className="lg:hidden p-2 text-[#0C1A0D] hover:text-[#0D8239] transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-96 border-t border-black/5" : "max-h-0"
          }`}
        >
          <div className="bg-white px-6 py-4 flex flex-col gap-0">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[11px] tracking-[0.12em] uppercase text-[#0C1A0D]/60 hover:text-[#0D8239] py-3 border-b border-black/5 transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-5 py-3 bg-[#0D8239] text-white text-[11px] tracking-[0.12em] uppercase text-center hover:bg-[#0B6E30] transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
