import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Clients } from "./components/Clients";
import { Products } from "./components/Products";
import { Statistics } from "./components/Statistics";
import { Industries } from "./components/Industries";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LeadFormModal } from "./components/LeadFormModal";

export default function App() {
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.fontFamily = "'DM Sans', system-ui, sans-serif";
    document.body.style.WebkitFontSmoothing = "antialiased";
    document.body.style.MozOsxFontSmoothing = "grayscale";
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#F5F4EF",
        fontFamily: "'DM Sans', system-ui, sans-serif",
        overflowX: "hidden",
      }}
    >
      <Header />
      <main>
        <Hero onOpenForm={() => setFormOpen(true)} />
        <About />
        <Clients />
        <Products />
        <Statistics />
        <Industries />
        <Contact onOpenForm={() => setFormOpen(true)} />
      </main>
      <Footer />
      <LeadFormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
}
