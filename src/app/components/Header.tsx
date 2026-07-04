import { useState, useEffect, useRef } from "react";
//import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../imports/image.png";
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import img1 from "../../imports/image-1.png";
import img2 from "../../imports/image-2.png";
import img3 from "../../imports/image-3.png";
import img4 from "../../imports/image-4.png";
import img5 from "../../imports/image-5.png";
import img6 from "../../imports/image-6.png";

const machines = [
  { label: "Composting & Digester", href: "/products/organic-waste-digester" },
  { label: "Shredders",             href: "/products/shredders" },
  { label: "De-Watering",           href: "/products/dewatering" },
  { label: "Trommel Screen",        href: "/products/trommel-screens" },
];

const productGroups = [
  { label: "RN - Machines",          href: null,                   children: machines },
  { label: "RN - Biogas",            href: "/products/biogas",     children: null },
  { label: "RN - Solar",             href: "/products/solar",      children: null },
];

const navLinks = [
  { label: "About Us",          href: "/about",    children: null },
  { label: "Products",          href: null,        children: productGroups },
  { label: "Service",           href: "/service",  children: null },
  { label: "Clients & Partners",href: "/clients",  children: null },
  { label: "FAQs",               href: "/faqs",     children: null },
  { label: "Contact Us",        href: "/contact",  children: null },
];

const F = { fontFamily: "'DM Sans', sans-serif", fontWeight: 500 as const };

export function Header({ onOpenForm }: { onOpenForm?: () => void }) {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [activeMenu, setActiveMenu]     = useState<string | null>(null);
  const [machinesOpen, setMachinesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const location  = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
    setMachinesOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // close on outside click
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const [mobileProducts, setMobileProducts] = useState(false);
  const [mobileMachines, setMobileMachines] = useState(false);

  const toggle = (label: string) =>
    setActiveMenu(prev => (prev === label ? null : label));

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: scrolled ? "0 2px 16px rgba(5,49,20,0.08)" : "none",
      }}
    >
      {/* Top strip */}
      <div className="hidden md:block" style={{ backgroundColor: "#053114" }}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end items-center gap-6">
          <a href="tel:+917760987934"
            className="group flex items-center gap-2 hover:opacity-95 transition-opacity"
            style={{ ...F, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>
            <span
              className="flex items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110"
              style={{
                width: "20px",
                height: "20px",
                background: "linear-gradient(135deg, rgba(160,120,14,0.35), rgba(23,139,76,0.25))",
                border: "1px solid rgba(160,120,14,0.5)",
              }}
            >
              <Phone className="w-2.5 h-2.5" style={{ color: "#D9B65C" }} />
            </span>
            +91 77609 87934
          </a>
          <span className="w-px h-3 bg-white/20" />
          <a href="mailto:info@reddonatura.com"
            className="group flex items-center gap-2 hover:opacity-95 transition-opacity"
            style={{ ...F, fontSize: "11px", letterSpacing: "0.02em", textTransform: "lowercase", color: "rgba(255,255,255,0.8)" }}>
            <span
              className="flex items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110"
              style={{
                width: "20px",
                height: "20px",
                background: "linear-gradient(135deg, rgba(160,120,14,0.35), rgba(23,139,76,0.25))",
                border: "1px solid rgba(160,120,14,0.5)",
              }}
            >
              <Mail className="w-2.5 h-2.5" style={{ color: "#D9B65C" }} />
            </span>
            info@reddonatura.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-[68px]">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Reddonatura" className="h-9 md:h-11 object-contain" />
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => toggle(link.label)}
                    className="flex items-center gap-1 px-4 py-2 rounded-full border border-transparent transition-all duration-200 hover:border-[rgba(23,139,76,0.35)] hover:bg-[rgba(23,139,76,0.06)]"
                    style={{
                      ...F, fontSize: "11.5px", letterSpacing: "0.08em", textTransform: "uppercase",
                      color: activeMenu === link.label ? "#178B4C" : "#053114",
                      backgroundColor: activeMenu === link.label ? "rgba(23,139,76,0.06)" : undefined,
                      borderColor: activeMenu === link.label ? "rgba(23,139,76,0.35)" : undefined,
                    }}>
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === link.label ? "rotate-180" : ""}`} />
                  </button>

                  {/* ── Mega-menu ── */}
                  {activeMenu === link.label && (
                    <div
  className="fixed left-0 right-0 z-50"
  style={{
    top: "100px", // increase to 105px or 110px if needed
    backgroundColor: "#ffffff",
    borderTop: "3px solid #178B4C",
    borderBottom: "1px solid rgba(5,49,20,0.08)",
    boxShadow: "0 24px 48px rgba(5,49,20,0.14)",
  }}
>
                      <div className="max-w-7xl mx-auto px-6 py-8">
                        <div className="grid grid-cols-[1.4fr_1fr] gap-10">

                          {/* Left — RN Machines grid */}
                          <div>
                            <div className="text-[14px] tracking-[0.22em] uppercase mb-5"
                              style={{ ...F, color: "#A0780E", fontFamily: "'DM Mono', monospace" }}>
                              RN Machines
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              {[
                                { label: "Composting & Digester", href: "/products/organic-waste-digester", img: img1, desc: "CE certified OWC units" },
                                { label: "Shredders", href: "/products/shredders", img: img5, desc: "Industrial waste shredding" },
                                { label: "De-Watering", href: "/products/dewatering", img: img3, desc: "60–70% volume reduction" },
                                { label: "Trommel Screen", href: "/products/trommel-screens", img: img6, desc: "Efficient waste sorting" },
                              ].map(item => (
                                <Link key={item.href} to={item.href}
                                  className="group flex items-center gap-3 p-3 transition-all duration-200 hover:bg-[#F5F4EF] hover:-translate-y-0.5"
                                  style={{ border: "1px solid rgba(5,49,20,0.08)" }}>
                                  <div className="w-18 h-18 flex-shrink-0 overflow-hidden" style={{ border: "1px solid rgba(23,139,76,0.2)" }}>
                                    <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                                  </div>
                                  <div>
                                    <div style={{ ...F, fontSize: "14px", color: "#053114", fontWeight: 600 }}>{item.label}</div>
                                    <div
  style={{
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "12.5px",
    color: "#5A6B5C",
    marginTop: "4px",
    lineHeight: "1.5",
  }}
>
  {item.desc}
</div>                          </div>
                                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" style={{ color: "#178B4C" }} />
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Right — Biogas + Solar as featured cards */}
                          <div>
                            <div className="text-[14px] tracking-[0.22em] uppercase mb-5"
                              style={{ ...F, color: "#A0780E", fontFamily: "'DM Mono', monospace" }}>
                              Energy Solutions
                            </div>
                            <div className="flex flex-col gap-3">
                              {[
                                { label: "RN Biogas", href: "/products/biogas", img: img2, desc: "Convert waste to renewable biogas — up to 90% GHG reduction.", tag: "Energy Recovery" },
                                { label: "RN Solar", href: "/products/solar", img: img4, desc: "High-efficiency solar systems for residential and commercial use.", tag: "Clean Energy" },
                              ].map(item => (
                                <Link key={item.href} to={item.href}
                                 className="group relative overflow-hidden flex gap-4 p-4 transition-all duration-200 hover:bg-[#F5F4EF]"
                                  style={{ border: "1px solid rgba(5,49,20,0.1)" }}>
                                  <div className="w-20 h-16 flex-shrink-0 overflow-hidden">
                                    <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span style={{ ...F, fontSize: "14px", color: "#053114", fontWeight: 700 }} className="group-hover:text-white transition-colors">{item.label}</span>
                                      <span className="px-1.5 py-0.5 text-[9px] tracking-[0.1em] uppercase"
                                        style={{ backgroundColor: "rgba(23,139,76,0.1)", color: "#178B4C", fontFamily: "'DM Sans', sans-serif" }}>
                                        {item.tag}
                                      </span>
                                    </div>
                                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#5A6B5C", lineHeight: 1.5 }} className="group-hover:text-white/70 transition-colors">
                                      {item.desc}
                                    </p>
                                  </div>
                                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#A0780E" }} />
                                </Link>
                              ))}
                            </div>

                            {/* Bottom CTA strip */}
                            <div className="mt-4 flex items-center justify-between px-4 py-3"
                              style={{ backgroundColor: "#F5F4EF", border: "1px solid rgba(5,49,20,0.06)" }}>
                              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#5A6B5C" }}>
                                Need help choosing?
                              </span>
                              <button
                                onClick={() => { setActiveMenu(null); window.dispatchEvent(new Event("openLeadForm")); }}
                                className="px-4 py-1.5 rounded-full text-[10px] tracking-[0.1em] uppercase transition-all duration-200 hover:-translate-y-0.5"
                                style={{ backgroundColor: "#178B4C", color: "#fff", ...F, boxShadow: "0 6px 14px rgba(23,139,76,0.3)" }}>
                                Get a Quote
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} to={link.href!}
                  className="px-4 py-2 rounded-full border border-transparent transition-all duration-200 hover:border-[rgba(23,139,76,0.35)] hover:bg-[rgba(23,139,76,0.06)]"
                  style={{
                    ...F, fontSize: "11.5px", letterSpacing: "0.08em", textTransform: "uppercase",
                    color: location.pathname === link.href ? "#178B4C" : "#053114",
                    backgroundColor: location.pathname === link.href ? "rgba(23,139,76,0.06)" : undefined,
                    borderColor: location.pathname === link.href ? "rgba(23,139,76,0.35)" : undefined,
                  }}>
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenForm}
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 text-[11px] tracking-[0.12em] uppercase"
              style={{ ...F, backgroundColor: "#178B4C", color: "#ffffff", boxShadow: "0 6px 16px rgba(23,139,76,0.3)" }}>
              Get a Quote
            </button>
            <button
              className="lg:hidden p-2 transition-colors"
              style={{ color: "#053114" }}
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Menu">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? "600px" : "0",
          borderTop: mobileOpen ? "1px solid rgba(5,49,20,0.08)" : "none",
          overflowY: "auto",
        }}>
        <div className="px-6 py-4 flex flex-col" style={{ backgroundColor: "#ffffff" }}>
          {navLinks.map(link =>
            link.children ? (
              <div key={link.label}>
                {/* Products toggle button */}
                <button
                  className="w-full flex items-center justify-between py-3 border-b text-[11px] tracking-[0.1em] uppercase transition-colors"
                  style={{ ...F, color: mobileProducts ? "#178B4C" : "#053114", borderColor: "rgba(5,49,20,0.08)" }}
                  onClick={() => { setMobileProducts(o => !o); setMobileMachines(false); }}>
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileProducts ? "rotate-180" : ""}`} />
                </button>
                {/* Products submenu — only shown when expanded */}
                <div className={`overflow-hidden transition-all duration-300 ${mobileProducts ? "max-h-[400px]" : "max-h-0"}`}>
                  {link.children.map(item =>
                    item.children ? (
                      <div key={item.label}>
                        <button
                          className="w-full flex items-center justify-between pl-3 py-2.5 border-b text-[11px] tracking-[0.08em] uppercase transition-colors"
                          style={{ ...F, color: mobileMachines ? "#178B4C" : "#A0780E", borderColor: "rgba(5,49,20,0.05)" }}
                          onClick={() => setMobileMachines(o => !o)}>
                          {item.label}
                          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${mobileMachines ? "rotate-180" : ""}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${mobileMachines ? "max-h-64" : "max-h-0"}`}>
                          {item.children!.map(sub => (
                            <Link key={sub.href} to={sub.href} onClick={() => setMobileOpen(false)}
                              className="block pl-6 py-2 border-b text-[11px] tracking-[0.06em] uppercase hover:text-[#178B4C] transition-colors"
                              style={{ ...F, color: "#053114", borderColor: "rgba(5,49,20,0.05)" }}>
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link key={item.href} to={item.href!} onClick={() => setMobileOpen(false)}
                        className="block pl-3 py-2.5 border-b text-[11px] tracking-[0.08em] uppercase hover:text-[#178B4C] transition-colors"
                        style={{ ...F, color: "#053114", borderColor: "rgba(5,49,20,0.05)" }}>
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ) : (
              <Link key={link.href} to={link.href!} onClick={() => setMobileOpen(false)}
                className="py-3 border-b text-[11px] tracking-[0.1em] uppercase hover:text-[#178B4C] transition-colors"
                style={{ ...F, color: "#053114", borderColor: "rgba(5,49,20,0.08)" }}>
                {link.label}
              </Link>
            )
          )}
          <button
            onClick={() => { setMobileOpen(false); onOpenForm?.(); }}
            className="mt-4 py-3 rounded-full text-[11px] tracking-[0.12em] uppercase text-center transition-all duration-200 active:scale-[0.98]"
            style={{ ...F, backgroundColor: "#178B4C", color: "#ffffff", boxShadow: "0 8px 20px rgba(23,139,76,0.3)" }}>
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
