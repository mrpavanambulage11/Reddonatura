import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Bot, X, Sparkles } from "lucide-react";

const PHONE = "+917760987934";
const EMAIL = "info@reddonatura.com";
const WHATSAPP = "917760987934";
const WHATSAPP_MESSAGE = "Hi Reddonatura! I'd like to know more about your waste management solutions.";

function WhatsAppGlyph({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const actions = [
  {
    key: "phone",
    label: "Call Us",
    sub: PHONE,
    icon: Phone,
    href: `tel:${PHONE}`,
    bg: "linear-gradient(145deg, #1FA05A, #0D8239 70%)",
    ring: "rgba(23,139,76,0.45)",
    glow: "#178B4C",
  },
  {
    key: "mail",
    label: "Email Us",
    sub: EMAIL,
    icon: Mail,
    href: `mailto:${EMAIL}`,
    bg: "linear-gradient(145deg, #D9B65C, #A0780E 70%)",
    ring: "rgba(160,120,14,0.45)",
    glow: "#C99A1A",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    sub: "Chat with us instantly",
    icon: WhatsAppGlyph,
    href: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    external: true,
    bg: "#25D366",
    ring: "rgba(37,211,102,0.45)",
    glow: "#25D366",
  },
];

export function FloatingActions() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    const showT = setTimeout(() => setShowGreeting(true), 2600);
    const hideT = setTimeout(() => setShowGreeting(false), 9500);
    return () => { clearTimeout(showT); clearTimeout(hideT); };
  }, []);

  const openLeadForm = () => {
    setChatOpen(false);
    window.dispatchEvent(new Event("openLeadForm"));
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4">
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.94 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mb-1 w-[310px] max-w-[85vw] overflow-hidden rounded-[22px]"
            style={{ backgroundColor: "#ffffff", boxShadow: "0 30px 70px rgba(5,49,20,0.4), 0 0 0 1px rgba(23,139,76,0.1)" }}
          >
            <div className="relative overflow-hidden px-5 py-5" style={{ background: "linear-gradient(135deg, #0B1F10 0%, #0D8239 90%)" }}>
              <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full" style={{ background: "radial-gradient(circle, rgba(217,182,92,0.35), transparent 70%)" }} />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full" style={{ background: "linear-gradient(145deg, #D9B65C, #A0780E)", boxShadow: "0 6px 16px rgba(160,120,14,0.5), inset 0 1px 1px rgba(255,255,255,0.4)" }}>
                    <Bot className="w-5 h-5" style={{ color: "#0B1F10" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "0.98rem", color: "#ffffff" }}>Reddonatura</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="relative flex w-1.5 h-1.5">
                        <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ backgroundColor: "#4ade80" }} />
                        <span className="relative inline-flex rounded-full w-1.5 h-1.5" style={{ backgroundColor: "#4ade80" }} />
                      </span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10.5px", letterSpacing: "0.04em", color: "rgba(255,255,255,0.8)" }}>Online now · replies instantly</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setChatOpen(false)}
                  className="flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-200 hover:bg-white/15"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" style={{ color: "rgba(255,255,255,0.85)" }} />
                </button>
              </div>
            </div>

            <div className="p-5" style={{ backgroundColor: "#F9F8F4" }}>
              <div className="rounded-2xl rounded-tl-sm px-4 py-3 mb-4" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(23,139,76,0.12)", boxShadow: "0 4px 14px rgba(5,49,20,0.06)" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.85rem", color: "#053114", lineHeight: 1.65 }}>
                  <Sparkles className="inline w-3.5 h-3.5 mb-0.5 mr-1" style={{ color: "#A0780E" }} />
                  Hi there! I'm the Reddonatura assistant. Tell us what you need and our team will get back to you shortly.
                </p>
              </div>
              <button
                onClick={openLeadForm}
                className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-[11px] tracking-[0.12em] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #1FA05A, #178B4C)",
                  color: "#ffffff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                  boxShadow: "0 12px 28px rgba(23,139,76,0.4), inset 0 1px 1px rgba(255,255,255,0.3)",
                }}
              >
                Start a Conversation
              </button>
              <p className="mt-3.5 text-center" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10.5px", color: "#9AA89B" }}>
                Or reach us directly via call, email, or WhatsApp below.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {actions.map((a, i) => (
        <motion.div
          key={a.key}
          initial={{ opacity: 0, scale: 0.4, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center"
          onMouseEnter={() => setHovered(a.key)}
          onMouseLeave={() => setHovered((h) => (h === a.key ? null : h))}
        >
          <AnimatePresence>
            {hovered === a.key && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.96 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-full mr-4 flex items-center gap-3 whitespace-nowrap pl-3.5 pr-4 py-2.5 rounded-2xl"
                style={{
                  backgroundColor: "rgba(5,49,20,0.92)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 16px 36px rgba(5,49,20,0.4), inset 0 1px 1px rgba(255,255,255,0.06)",
                  border: `1px solid ${a.ring}`,
                }}
              >
                <div className="flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0" style={{ background: a.bg }}>
                  <a.icon className="w-3.5 h-3.5" style={{ color: "#ffffff" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.8rem", color: "#ffffff" }}>{a.label}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.7rem", color: "rgba(255,255,255,0.6)" }}>{a.sub}</div>
                </div>
                <span
                  className="absolute top-1/2 -right-[5px] w-2.5 h-2.5 -translate-y-1/2 rotate-45"
                  style={{ backgroundColor: "rgba(5,49,20,0.92)", borderRight: `1px solid ${a.ring}`, borderBottom: `1px solid ${a.ring}` }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Ambient glow halo */}
          <span
            className="absolute rounded-full transition-opacity duration-300 pointer-events-none"
            style={{
              inset: "-6px",
              background: a.glow,
              filter: "blur(14px)",
              opacity: hovered === a.key ? 0.55 : 0.28,
              zIndex: -1,
            }}
          />

          <a
            href={a.href}
            target={a.external ? "_blank" : undefined}
            rel={a.external ? "noopener noreferrer" : undefined}
            aria-label={a.label}
            className="group flex items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1.5 hover:scale-110"
            style={{
              width: "52px",
              height: "52px",
              background: a.bg,
              border: "1.5px solid rgba(255,255,255,0.4)",
              boxShadow: `0 12px 26px ${a.ring}, inset 0 1.5px 1.5px rgba(255,255,255,0.5), inset 0 -8px 12px rgba(0,0,0,0.12)`,
            }}
          >
            <a.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm" style={{ color: "#ffffff" }} />
          </a>
        </motion.div>
      ))}

      {/* Chatbot — primary action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.4, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.15 + actions.length * 0.09, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex items-center"
        onMouseEnter={() => { setHovered("chatbot"); setShowGreeting(false); }}
        onMouseLeave={() => setHovered((h) => (h === "chatbot" ? null : h))}
      >
        <AnimatePresence>
          {showGreeting && !chatOpen && hovered !== "chatbot" && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.94 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.94 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-full mr-4 w-[220px] whitespace-normal px-4 py-3.5 rounded-2xl rounded-br-sm cursor-pointer"
              style={{ backgroundColor: "#ffffff", boxShadow: "0 20px 44px rgba(5,49,20,0.25), 0 0 0 1px rgba(23,139,76,0.1)" }}
              onClick={() => { setChatOpen(true); setShowGreeting(false); }}
            >
              <button
                onClick={(e) => { e.stopPropagation(); setShowGreeting(false); }}
                className="absolute top-2 right-2 flex items-center justify-center w-5 h-5 rounded-full transition-colors hover:bg-black/5"
                aria-label="Dismiss"
              >
                <X className="w-3 h-3" style={{ color: "#8A9E8B" }} />
              </button>
              <div className="flex items-center gap-1.5 mb-1">
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", color: "#178B4C" }}>Reddonatura</span>
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#4ade80" }} />
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.8rem", color: "#053114", lineHeight: 1.5 }}>
                👋 Need help going green? Chat with us anytime.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {hovered === "chatbot" && !chatOpen && !showGreeting && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full mr-4 whitespace-nowrap px-4 py-2.5 rounded-2xl"
              style={{ backgroundColor: "rgba(5,49,20,0.92)", backdropFilter: "blur(10px)", boxShadow: "0 16px 36px rgba(5,49,20,0.4)", border: "1px solid rgba(217,182,92,0.35)" }}
            >
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.8rem", color: "#ffffff" }}>Reddonatura Assistant</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.7rem", color: "rgba(255,255,255,0.65)" }}>Chat with us</div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ambient glow halo */}
        <span
          className="absolute rounded-full transition-opacity duration-300 pointer-events-none"
          style={{ inset: "-8px", background: "radial-gradient(circle, #D9B65C, #178B4C 65%)", filter: "blur(18px)", opacity: hovered === "chatbot" ? 0.65 : 0.4, zIndex: -1 }}
        />

        <button
          onClick={() => { setChatOpen((v) => !v); setShowGreeting(false); }}
          aria-label="Chat with Reddonatura"
          className="group relative flex items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1.5 hover:scale-110"
          style={{
            width: "62px",
            height: "62px",
            background: "linear-gradient(150deg, #0B1F10 0%, #178B4C 55%, #A0780E 130%)",
            border: "2px solid rgba(217,182,92,0.5)",
            boxShadow: "0 16px 36px rgba(5,49,20,0.5), inset 0 1.5px 1.5px rgba(255,255,255,0.3)",
          }}
        >
          {!chatOpen && (
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ backgroundColor: "rgba(217,182,92,0.3)", animationDuration: "2.6s" }}
            />
          )}
          {!chatOpen && (
            <span
              className="absolute flex items-center justify-center rounded-full"
              style={{ top: "-3px", right: "-3px", width: "16px", height: "16px", backgroundColor: "#ffffff", boxShadow: "0 2px 6px rgba(0,0,0,0.25)" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#4ade80" }} />
            </span>
          )}
          <AnimatePresence mode="wait" initial={false}>
            {chatOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-6 h-6" style={{ color: "#ffffff" }} />
              </motion.div>
            ) : (
              <motion.div key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Bot className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm" style={{ color: "#ffffff" }} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>
    </div>
  );
}
