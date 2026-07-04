import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, X, Send, Plus } from "lucide-react";
import { getBotAnswer, suggestedQuestions } from "./chatbotKnowledge";
import botAvatar from "../../imports/chatbot-avatar.png";

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

type ChatMessage = { id: number; sender: "bot" | "user"; text: string };

let msgId = 0;

export function FloatingActions() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: msgId++, sender: "bot", text: "Hi there! I'm the Reddonatura assistant 🤖 Ask me about our products, industries, pricing, or locations — I'm happy to help." },
  ]);
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showT = setTimeout(() => setShowGreeting(true), 2600);
    const hideT = setTimeout(() => setShowGreeting(false), 9500);
    return () => { clearTimeout(showT); clearTimeout(hideT); };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const openLeadForm = () => {
    setChatOpen(false);
    window.dispatchEvent(new Event("openLeadForm"));
  };

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { id: msgId++, sender: "user", text: trimmed }]);
    setDraft("");
    setIsTyping(true);
    const delay = 700 + Math.random() * 500;
    setTimeout(() => {
      setIsTyping(false);
      setMessages((m) => [...m, { id: msgId++, sender: "bot", text: getBotAnswer(trimmed) }]);
    }, delay);
  };

  return (
    <div
      className="fixed z-[60] flex flex-col items-end gap-3 sm:gap-5"
      style={{
        bottom: "calc(1rem + env(safe-area-inset-bottom))",
        right: "calc(1rem + env(safe-area-inset-right))",
      }}
    >
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.94 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mb-1 w-[340px] max-w-[88vw] overflow-hidden rounded-[22px] flex flex-col"
            style={{ backgroundColor: "#ffffff", boxShadow: "0 30px 70px rgba(5,49,20,0.4), 0 0 0 1px rgba(23,139,76,0.1)", maxHeight: "min(600px, 78vh)" }}
          >
            <div className="relative overflow-hidden px-5 py-4 flex-shrink-0" style={{ background: "linear-gradient(135deg, #0B1F10 0%, #0D8239 90%)" }}>
              <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full" style={{ background: "radial-gradient(circle, rgba(217,182,92,0.35), transparent 70%)" }} />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center w-11 h-11 rounded-full overflow-hidden flex-shrink-0" style={{ boxShadow: "0 6px 16px rgba(160,120,14,0.5), inset 0 1px 1px rgba(255,255,255,0.4)", border: "2px solid rgba(217,182,92,0.6)" }}>
                    <img src={botAvatar} alt="Reddonatura Assistant" className="w-full h-full object-cover" />
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

            {/* Message list */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ backgroundColor: "#F9F8F4", minHeight: "220px" }}>
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex items-start gap-2 ${m.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  {m.sender === "bot" && (
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5" style={{ boxShadow: "0 2px 6px rgba(5,49,20,0.15)" }}>
                      <img src={botAvatar} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div
                    className={`px-3.5 py-2.5 max-w-[78%] ${m.sender === "bot" ? "rounded-2xl rounded-tl-sm" : "rounded-2xl rounded-tr-sm"}`}
                    style={{
                      backgroundColor: m.sender === "bot" ? "#ffffff" : "#178B4C",
                      border: m.sender === "bot" ? "1px solid rgba(23,139,76,0.12)" : "none",
                      boxShadow: m.sender === "bot" ? "0 4px 14px rgba(5,49,20,0.06)" : "0 6px 16px rgba(23,139,76,0.3)",
                    }}
                  >
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.83rem", lineHeight: 1.6, color: m.sender === "bot" ? "#053114" : "#ffffff" }}>
                      {m.text}
                    </p>
                  </div>
                </motion.div>
              ))}

              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5" style={{ boxShadow: "0 2px 6px rgba(5,49,20,0.15)" }}>
                      <img src={botAvatar} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center gap-1 px-4 py-3 rounded-2xl rounded-tl-sm" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(23,139,76,0.12)", boxShadow: "0 4px 14px rgba(5,49,20,0.06)" }}>
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "#178B4C" }}
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {messages.length === 1 && !isTyping && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="px-3 py-1.5 rounded-full text-left transition-all duration-200 hover:-translate-y-0.5"
                      style={{ backgroundColor: "rgba(23,139,76,0.08)", border: "1px solid rgba(23,139,76,0.2)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 500, color: "#178B4C" }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Composer */}
            <div className="flex-shrink-0 p-3.5" style={{ backgroundColor: "#ffffff", borderTop: "1px solid rgba(23,139,76,0.1)" }}>
              <form
                onSubmit={(e) => { e.preventDefault(); sendMessage(draft); }}
                className="flex items-center gap-2"
              >
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Ask about our products, pricing…"
                  className="flex-1 px-4 py-2.5 rounded-full outline-none transition-all"
                  style={{ backgroundColor: "#F5F4EF", border: "1px solid rgba(23,139,76,0.15)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.83rem", color: "#053114" }}
                />
                <button
                  type="submit"
                  aria-label="Send"
                  disabled={!draft.trim()}
                  className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 transition-all duration-200 hover:scale-105 disabled:opacity-40"
                  style={{ background: "linear-gradient(135deg, #1FA05A, #178B4C)", boxShadow: "0 8px 18px rgba(23,139,76,0.35)" }}
                >
                  <Send className="w-4 h-4" style={{ color: "#ffffff" }} />
                </button>
              </form>
              <button
                onClick={openLeadForm}
                className="mt-2.5 w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-[10.5px] tracking-[0.1em] uppercase transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: "rgba(23,139,76,0.08)", border: "1px solid rgba(23,139,76,0.2)", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#178B4C" }}
              >
                Start a Conversation with Our Team
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop / tablet: always-visible stack */}
      {actions.map((a, i) => (
        <motion.div
          key={a.key}
          initial={{ opacity: 0, scale: 0.4, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden sm:flex items-center"
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
              inset: "-8px",
              background: a.glow,
              filter: "blur(16px)",
              opacity: hovered === a.key ? 0.55 : 0.28,
              zIndex: -1,
            }}
          />

          <a
            href={a.href}
            target={a.external ? "_blank" : undefined}
            rel={a.external ? "noopener noreferrer" : undefined}
            aria-label={a.label}
            className="group flex items-center justify-center rounded-full flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 transition-all duration-300 hover:-translate-y-1.5 hover:scale-110"
            style={{
              background: a.bg,
              border: "1.5px solid rgba(255,255,255,0.4)",
              boxShadow: `0 14px 30px ${a.ring}, inset 0 1.5px 1.5px rgba(255,255,255,0.5), inset 0 -8px 12px rgba(0,0,0,0.12)`,
            }}
          >
            <a.icon className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm" style={{ color: "#ffffff" }} />
          </a>
        </motion.div>
      ))}

      {/* Mobile: collapsed speed-dial to avoid covering page content */}
      <div className="flex sm:hidden flex-col items-end gap-3">
        <AnimatePresence>
          {mobileExpanded &&
            actions.map((a, i) => (
              <motion.a
                key={a.key}
                href={a.href}
                target={a.external ? "_blank" : undefined}
                rel={a.external ? "noopener noreferrer" : undefined}
                aria-label={a.label}
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 10 }}
                transition={{ duration: 0.2, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{
                  width: "52px",
                  height: "52px",
                  background: a.bg,
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  boxShadow: `0 10px 22px ${a.ring}`,
                }}
              >
                <a.icon className="w-5 h-5" style={{ color: "#ffffff" }} />
              </motion.a>
            ))}
        </AnimatePresence>

        <button
          onClick={() => setMobileExpanded((v) => !v)}
          aria-label={mobileExpanded ? "Close quick contact options" : "Quick contact options"}
          className="flex items-center justify-center rounded-full flex-shrink-0 w-14 h-14 transition-transform duration-300 active:scale-95"
          style={{
            background: "linear-gradient(145deg, #1FA05A, #0D8239 70%)",
            border: "1.5px solid rgba(255,255,255,0.4)",
            boxShadow: "0 12px 26px rgba(23,139,76,0.4)",
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileExpanded ? (
              <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X className="w-5 h-5" style={{ color: "#ffffff" }} />
              </motion.div>
            ) : (
              <motion.div key="plus" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Plus className="w-5 h-5" style={{ color: "#ffffff" }} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

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
          style={{ inset: "-10px", background: "radial-gradient(circle, #D9B65C, #178B4C 65%)", filter: "blur(20px)", opacity: hovered === "chatbot" ? 0.65 : 0.4, zIndex: -1 }}
        />

        <button
          onClick={() => { setChatOpen((v) => !v); setShowGreeting(false); setMobileExpanded(false); }}
          aria-label="Chat with Reddonatura"
          className="group relative flex items-center justify-center rounded-full overflow-hidden flex-shrink-0 w-16 h-16 sm:w-[78px] sm:h-[78px] transition-all duration-300 hover:-translate-y-1.5 hover:scale-110"
          style={{
            backgroundColor: "#103a1f",
            border: "2px solid rgba(217,182,92,0.5)",
            boxShadow: "0 18px 40px rgba(5,49,20,0.5), inset 0 1.5px 1.5px rgba(255,255,255,0.3)",
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
              className="absolute flex items-center justify-center rounded-full z-10"
              style={{ top: "-3px", right: "-3px", width: "18px", height: "18px", backgroundColor: "#ffffff", boxShadow: "0 2px 6px rgba(0,0,0,0.25)" }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#4ade80" }} />
            </span>
          )}
          <AnimatePresence mode="wait" initial={false}>
            {chatOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: "#ffffff" }} />
              </motion.div>
            ) : (
              <motion.div key="bot" initial={{ rotate: 90, opacity: 0, scale: 0.6 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: -90, opacity: 0, scale: 0.6 }} transition={{ duration: 0.25 }} className="w-full h-full">
                <img
                  src={botAvatar}
                  alt="Reddonatura chatbot"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>
    </div>
  );
}
