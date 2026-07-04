import { useState } from "react";
import { X, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface Props {
  open: boolean;
  onClose: () => void;
}

/* ── Question data ── */
const Q1_FACILITY = {
  question: "What type of facility do you operate?",
  hint: "Select the option that best describes your organisation.",
  options: [
    { label: "Household / Home",             sub: "" },
    { label: "Apartment / Residential",      sub: "" },
    { label: "Restaurant / Food Chain",      sub: "" },
    { label: "Hotel / Resort",               sub: "" },
    { label: "Hospital / Healthcare",        sub: "" },
    { label: "Municipality / Corporation",   sub: "" },
    { label: "Airport / Transit Hub",        sub: "" },
    { label: "Agriculture / Food Processing",sub: "" },
    { label: "Commercial Complex / Mall",    sub: "" },
    { label: "Industrial Facility",         sub: "" },
    { label: "Other",                       sub: "" },
  ],
};

const Q2_WASTE_VOLUME = {
  question: "How much organic waste does your facility generate daily?",
  hint: "Select the closest estimate — even a rough figure helps.",
  options: [
    { label: "Less than 10 kg",  sub: "" },
    { label: "10 – 50 kg",       sub: "" },
    { label: "50 – 200 kg",      sub: "" },
    { label: "200 – 500 kg",     sub: "" },
    { label: "500 kg – 1 ton",   sub: "" },
    { label: "More than 1 ton",  sub: "" },
    { label: "Not sure",         sub: "" },
  ],
};

const Q3_WASTE_TYPE = {
  question: "What type of waste are you primarily dealing with?",
  hint: "Select all that apply — choose the most dominant type.",
  options: [
    { label: "Food / Organic Waste",     sub: "Kitchen scraps, leftovers" },
    { label: "Garden / Green Waste",     sub: "Leaves, grass, plant trimmings" },
    { label: "Mixed Solid Waste",        sub: "Combination of dry & wet waste" },
    { label: "Liquid / Sludge Waste",    sub: "Water-heavy organic waste" },
    { label: "Agricultural Waste",       sub: "Crop residue, farm waste" },
    { label: "Industrial Organic Waste", sub: "Manufacturing by-products" },
    { label: "Multiple Types",           sub: "We deal with various waste streams" },
    { label: "Not sure",                 sub: "Need an assessment" },
  ],
};

const Q4_SOLUTION = {
  question: "Which solution are you looking for?",
  hint: "Not sure? Choose 'No idea' — our experts will guide you.",
  options: [
    { label: "Organic Waste Digester", sub: "Convert waste to compost" },
    { label: "Biogas Solutions",       sub: "Waste to renewable energy" },
    { label: "De-Watering Systems",    sub: "Liquid & sludge management" },
    { label: "Solar Solutions",        sub: "Clean energy for your facility" },
    { label: "Industrial Shredders",   sub: "Material size reduction" },
    { label: "Trommel Screens",        sub: "Waste sorting & screening" },
    { label: "Multiple Solutions",     sub: "I need a complete system" },
    { label: "No idea",                sub: "Guide me to the right one" },
  ],
};

const Q5_TIMELINE = {
  question: "What is your expected project timeline?",
  hint: "This helps our team prioritise and plan the right support for you.",
  options: [
    { label: "Immediate",          sub: "Need a solution within 1 month" },
    { label: "1 – 3 Months",       sub: "Short-term planning" },
    { label: "3 – 6 Months",       sub: "Mid-term project" },
    { label: "6 Months or more",   sub: "Long-term planning phase" },
    { label: "Just Exploring",     sub: "Gathering information for now" },
  ],
};

const QUESTIONS = [Q1_FACILITY, Q2_WASTE_VOLUME, Q3_WASTE_TYPE, Q4_SOLUTION, Q5_TIMELINE];
const TOTAL_STEPS = QUESTIONS.length + 1; // 5 questions + personal details

const countryCodes = [
  { code: "+91",  country: "India" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+974", country: "Qatar" },
  { code: "+965", country: "Kuwait" },
  { code: "+968", country: "Oman" },
  { code: "+973", country: "Bahrain" },
  { code: "+1",   country: "USA / Canada" },
  { code: "+44",  country: "UK" },
  { code: "+61",  country: "Australia" },
  { code: "+65",  country: "Singapore" },
  { code: "+60",  country: "Malaysia" },
  { code: "+62",  country: "Indonesia" },
  { code: "+66",  country: "Thailand" },
  { code: "+81",  country: "Japan" },
  { code: "+82",  country: "South Korea" },
  { code: "+49",  country: "Germany" },
  { code: "+33",  country: "France" },
  { code: "+27",  country: "South Africa" },
  { code: "+234", country: "Nigeria" },
  { code: "+other", country: "Other" },
];

const countries = [
  "India","UAE","Saudi Arabia","Qatar","Kuwait","Oman","Bahrain",
  "USA","Canada","UK","Australia","Singapore","Malaysia","Indonesia",
  "Thailand","Japan","South Korea","Germany","France","South Africa",
  "Nigeria","Kenya","Tanzania","Ethiopia","Other",
];

export function LeadFormModal({ open, onClose }: Props) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(QUESTIONS.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", country: "", email: "", dialCode: "+91", phone: "",
  });

  if (!open) return null;

  const currentAnswer = step < QUESTIONS.length ? answers[step] : "";
  const canNext = step < QUESTIONS.length ? !!answers[step] : true;

  const setAnswer = (val: string) => {
    setAnswers(prev => {
      const next = [...prev];
      next[step] = val;
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const labels = ["Facility", "Daily Waste", "Waste Type", "Solution", "Timeline"];
    const lines = [
      "🌿 *New Lead — Reddonatura Website*",
      "",
      ...answers.map((a, i) => `*${labels[i]}:* ${a}`),
      "",
      `*Name:* ${form.name}`,
      `*Company:* ${form.company || "—"}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.dialCode} ${form.phone}`,
      `*Country:* ${form.country}`,
    ];
    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/917760987934?text=${message}`, "_blank");
    setSubmitted(true);
  };

  const reset = () => {
    setStep(0);
    setAnswers(Array(QUESTIONS.length).fill(""));
    setSubmitted(false);
    setForm({ name: "", company: "", country: "", email: "", dialCode: "+91", phone: "" });
    onClose();
  };

  const progressPct = ((step) / TOTAL_STEPS) * 100;

  const inputClass = "w-full px-4 py-2.5 outline-none focus:ring-1 focus:ring-[#0D8239] transition-all";
  const inputStyle = {
    border: "1.5px solid rgba(12,26,13,0.12)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    color: "#0C1A0D",
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(11,31,16,0.88)", backdropFilter: "blur(6px)" }}
      /* NO onClick close on backdrop */
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto"
        style={{ backgroundColor: "#fff", boxShadow: "0 40px 80px rgba(5,49,20,0.35)" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Golden top accent */}
        <div className="h-[3px] w-full" style={{ backgroundColor: "#A0780E" }} />

        {/* Progress bar */}
        {!submitted && (
          <div className="w-full h-1" style={{ backgroundColor: "#EEF0E8" }}>
            <div
              className="h-full transition-all duration-500"
              style={{ width: `${progressPct}%`, backgroundColor: "#0D8239" }}
            />
          </div>
        )}

        {/* Close button */}
        <button
          onClick={reset}
          className="absolute top-2 right-2 z-10 w-11 h-11 flex items-center justify-center rounded-full transition-colors hover:bg-black/5 active:bg-black/10"
          style={{ color: "#0C1A0D" }}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* ── Success ── */
          <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: "rgba(13,130,57,0.1)" }}>
              <CheckCircle2 className="w-9 h-9" style={{ color: "#0D8239" }} />
            </div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif", fontWeight: 700,
              fontSize: "1.9rem", color: "#0C1A0D", lineHeight: 1.2,
            }}>
              Thank you, {form.name.split(" ")[0] || "there"}!
            </h3>
            <p className="mt-3 mb-8 max-w-sm" style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
              fontSize: "0.95rem", color: "#5A6B5C", lineHeight: 1.75,
            }}>
              Our team will review your requirements and reach out within 24 hours with a tailored waste management proposal.
            </p>
            {/* Summary */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-md">
              {answers.filter(Boolean).map((a, i) => (
                <span key={i} className="px-3 py-1 text-[10px] tracking-wide"
                  style={{
                    backgroundColor: "rgba(13,130,57,0.07)",
                    border: "1px solid rgba(13,130,57,0.2)",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "#0D8239",
                  }}>
                  {a}
                </span>
              ))}
            </div>
            <button onClick={reset}
              className="px-8 py-3 text-[11px] tracking-[0.14em] uppercase hover:bg-[#0B6E30] transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#0D8239", color: "#fff",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600, boxShadow: "0 10px 24px rgba(13,130,57,0.3)" }}>
              Close
            </button>
          </div>
        ) : (
          <div className="px-6 sm:px-10 py-7">
            {/* Step counter */}
            <div className="flex items-center justify-between mb-6">
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: "11px",
                letterSpacing: "0.16em", color: "#A0780E", textTransform: "uppercase",
              }}>
                Step {step + 1} of {TOTAL_STEPS}
              </span>
              {step < QUESTIONS.length && answers.slice(0, step).filter(Boolean).length > 0 && (
                <div className="flex flex-wrap gap-1.5 justify-end max-w-xs">
                  {answers.slice(0, step).filter(Boolean).map((a, i) => (
                    <span key={i} className="px-2 py-0.5 text-[9.5px] tracking-wide truncate max-w-[120px]"
                      style={{
                        backgroundColor: "rgba(13,130,57,0.07)",
                        border: "1px solid rgba(13,130,57,0.18)",
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "#0D8239",
                      }}>
                      {a}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* ── Questions 0–4 ── */}
            {step < QUESTIONS.length && (() => {
              const q = QUESTIONS[step];
              const cols = q.options.length > 6 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-3";
              return (
                <div>
                  <h2 className="mb-1" style={{
                    fontFamily: "'Playfair Display', serif", fontWeight: 700,
                    fontSize: "clamp(1.2rem, 2.8vw, 1.6rem)", color: "#0C1A0D", lineHeight: 1.25,
                  }}>
                    {q.question.split(" ").map((word, i) =>
                      i === 0
                        ? <em key={i} style={{ fontStyle: "normal", color: "#0D8239" }}>{word} </em>
                        : word + " "
                    )}
                  </h2>
                  <p className="mb-5" style={{
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
                    fontSize: "0.85rem", color: "#8A9E8B",
                  }}>
                    {q.hint}
                  </p>
                  <div className={`grid ${cols} gap-2.5 mb-7`}>
                    {q.options.map((o) => {
                      const selected = answers[step] === o.label;
                      return (
                        <button
                          key={o.label}
                          onClick={() => setAnswer(o.label)}
                          className="text-left p-3.5 transition-all duration-200 hover:-translate-y-0.5"
                          style={{
                            border: selected ? "2px solid #0D8239" : "1.5px solid rgba(12,26,13,0.11)",
                            backgroundColor: selected ? "rgba(13,130,57,0.06)" : "#fafaf8",
                            boxShadow: selected ? "0 8px 20px rgba(13,130,57,0.18)" : "none",
                          }}
                        >
                          <div className="flex items-start justify-between gap-1">
                            <div style={{
                              fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                              fontSize: "0.85rem", color: "#0C1A0D", lineHeight: 1.3,
                            }}>
                              {o.label}
                            </div>
                            {selected && (
                              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                                style={{ color: "#0D8239" }} />
                            )}
                          </div>
                          {o.sub && (
                            <div className="mt-0.5" style={{
                              fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
                              fontSize: "0.72rem", color: "#8A9E8B",
                            }}>
                              {o.sub}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex justify-between">
                    {step > 0 ? (
                      <button onClick={() => setStep(s => s - 1)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 text-[11px] tracking-[0.12em] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-[#178B4C] hover:text-[#178B4C]"
                        style={{ border: "1.5px solid rgba(12,26,13,0.14)", color: "#5A6B5C",
                          fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                        <ArrowLeft className="w-3.5 h-3.5" /> Back
                      </button>
                    ) : <div />}
                    <button
                      disabled={!answers[step]}
                      onClick={() => setStep(s => s + 1)}
                      className="inline-flex items-center gap-2 px-7 py-2.5 text-[11px] tracking-[0.12em] uppercase transition-all duration-200 disabled:opacity-30 enabled:hover:-translate-y-0.5"
                      style={{ backgroundColor: "#0D8239", color: "#fff",
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 600, boxShadow: "0 8px 20px rgba(13,130,57,0.3)" }}>
                      Next <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })()}

            {/* ── Step 5: Personal details ── */}
            {step === QUESTIONS.length && (
              <div>
                <h2 className="mb-1" style={{
                  fontFamily: "'Playfair Display', serif", fontWeight: 700,
                  fontSize: "clamp(1.2rem, 2.8vw, 1.6rem)", color: "#0C1A0D", lineHeight: 1.25,
                }}>
                  <em style={{ fontStyle: "normal", color: "#0D8239" }}>Almost</em> there — tell us about yourself
                </h2>
                <p className="mb-5" style={{
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
                  fontSize: "0.85rem", color: "#8A9E8B",
                }}>
                  We'll use this to send a tailored proposal directly to you.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] tracking-[0.14em] uppercase mb-1.5"
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "#5A6B5C" }}>
                        Full Name *
                      </label>
                      <input required value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Jane Smith"
                        className={inputClass} style={inputStyle} />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.14em] uppercase mb-1.5"
                        style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "#5A6B5C" }}>
                        Company / Organisation
                      </label>
                      <input value={form.company}
                        onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                        placeholder="Your Organisation"
                        className={inputClass} style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase mb-1.5"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "#5A6B5C" }}>
                      Email Address *
                    </label>
                    <input required type="email" value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="jane@company.com"
                      className={inputClass} style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase mb-1.5"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "#5A6B5C" }}>
                      Phone Number *
                    </label>
                    <div className="flex gap-2">
                      <select value={form.dialCode}
                        onChange={e => setForm(f => ({ ...f, dialCode: e.target.value }))}
                        className="px-2 py-2.5 outline-none focus:ring-1 focus:ring-[#0D8239] flex-shrink-0"
                        style={{ ...inputStyle, width: "135px" }}>
                        {countryCodes.map(c => (
                          <option key={c.code} value={c.code}>{c.code} {c.country}</option>
                        ))}
                      </select>
                      <input required type="tel" value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        placeholder="98765 43210"
                        className={`flex-1 ${inputClass}`} style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase mb-1.5"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "#5A6B5C" }}>
                      Country *
                    </label>
                    <select required value={form.country}
                      onChange={e => setForm(f => ({ ...f, country: e.target.value }))}
                      className={inputClass}
                      style={{ ...inputStyle, color: form.country ? "#0C1A0D" : "#8A9E8B" }}>
                      <option value="">Select your country</option>
                      {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="flex justify-between pt-1">
                    <button type="button" onClick={() => setStep(s => s - 1)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-[11px] tracking-[0.12em] uppercase transition-colors"
                      style={{ border: "1.5px solid rgba(12,26,13,0.14)", color: "#5A6B5C",
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button type="submit"
                      className="inline-flex items-center gap-2 px-8 py-2.5 text-[11px] tracking-[0.12em] uppercase hover:bg-[#0B6E30] transition-all duration-200 hover:-translate-y-0.5"
                      style={{ backgroundColor: "#0D8239", color: "#fff",
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 600, boxShadow: "0 8px 20px rgba(13,130,57,0.3)" }}>
                      Submit Request <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
