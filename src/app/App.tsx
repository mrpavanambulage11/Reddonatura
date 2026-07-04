import { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Clients } from "./components/Clients";
import { Products } from "./components/Products";
//import { Statistics, VisionMission } from "./components/Statistics";
import { VisionMission } from "./components/Statistics";
import { Industries } from "./components/Industries";
import GlobalMap from "./components/GlobalMap";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LeadFormModal } from "./components/LeadFormModal";
import { FloatingActions } from "./components/FloatingActions";

// Route-level code splitting: only the homepage bundle loads on first paint,
// every other page is fetched on demand when the user navigates to it.
const WetWasteManagementPage = lazy(() => import("./pages/products/WetWasteManagementPage").then(m => ({ default: m.WetWasteManagementPage })));
const WindrowCompostPage = lazy(() => import("./pages/products/WindrowCompostPage").then(m => ({ default: m.WindrowCompostPage })));
const BiominingPage = lazy(() => import("./pages/products/BiominingPage").then(m => ({ default: m.BiominingPage })));
const PyrolysisPage = lazy(() => import("./pages/products/PyrolysisPage").then(m => ({ default: m.PyrolysisPage })));

const AboutPage = lazy(() => import("./pages/AboutPage").then(m => ({ default: m.AboutPage })));
const ServicePage = lazy(() => import("./pages/ServicePage").then(m => ({ default: m.ServicePage })));
const ClientsPage = lazy(() => import("./pages/ClientsPage").then(m => ({ default: m.ClientsPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));
const FAQPage = lazy(() => import("./pages/FAQPage").then(m => ({ default: m.FAQPage })));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage").then(m => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import("./pages/TermsPage").then(m => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then(m => ({ default: m.NotFoundPage })));
const OrganicWasteDigesterPage = lazy(() => import("./pages/products/OrganicWasteDigesterPage").then(m => ({ default: m.OrganicWasteDigesterPage })));
const ShreddersPage = lazy(() => import("./pages/products/ShreddersPage").then(m => ({ default: m.ShreddersPage })));
const DewateringPage = lazy(() => import("./pages/products/DewateringPage").then(m => ({ default: m.DewateringPage })));
const TrommelScreensPage = lazy(() => import("./pages/products/TrommelScreensPage").then(m => ({ default: m.TrommelScreensPage })));
const BiogasPage = lazy(() => import("./pages/products/BiogasPage").then(m => ({ default: m.BiogasPage })));
const SolarPage = lazy(() => import("./pages/products/SolarPage").then(m => ({ default: m.SolarPage })));

function RouteFallback() {
  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: "60vh", backgroundColor: "#F5F4EF" }}
    >
      <div
        className="w-8 h-8 rounded-full animate-spin"
        style={{ border: "3px solid rgba(23,139,76,0.15)", borderTopColor: "#178B4C" }}
      />
    </div>
  );
}

function HomePage({ onOpenForm }: { onOpenForm: () => void }) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main>
      <Hero onOpenForm={onOpenForm} />

      <About />

      <Clients />

      <Products />

     

      <div className="h-16"></div>

      <VisionMission />

      <div className="h-2"></div>

      <Industries />

      <GlobalMap />

      <Contact onOpenForm={onOpenForm} />
    </main>
  );
}

export default function App() {
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    document.body.style.fontFamily = "'DM Sans', system-ui, sans-serif";
    document.body.style.WebkitFontSmoothing = "antialiased";
    document.body.style.MozOsxFontSmoothing = "grayscale";

    // Smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    // Allow any page/component to open the lead form
    const handler = () => setFormOpen(true);
    window.addEventListener("openLeadForm", handler);

    return () => {
      window.removeEventListener("openLeadForm", handler);
    };
  }, []);

  return (
    <BrowserRouter>
      <div
        className="min-h-screen"
        style={{
          backgroundColor: "#F5F4EF",
          fontFamily: "'DM Sans', system-ui, sans-serif",
          overflowX: "hidden",
        }}
      >
        <Header onOpenForm={() => setFormOpen(true)} />

        <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route
            path="/"
            element={<HomePage onOpenForm={() => setFormOpen(true)} />}
          />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />


<Route
  path="/products/wet-waste"
  element={<WetWasteManagementPage />}
/>

<Route
  path="/products/windrow-compost"
  element={<WindrowCompostPage />}
/>

<Route
  path="/products/biomining"
  element={<BiominingPage />}
/>

<Route
  path="/products/pyrolysis"
  element={<PyrolysisPage />}
/>

          <Route
            path="/products/organic-waste-digester"
            element={<OrganicWasteDigesterPage />}
          />

          <Route
            path="/products/shredders"
            element={<ShreddersPage />}
          />

          <Route
            path="/products/dewatering"
            element={<DewateringPage />}
          />

          <Route
            path="/products/trommel-screens"
            element={<TrommelScreensPage />}
          />

          <Route
            path="/products/biogas"
            element={<BiogasPage />}
          />

          <Route
            path="/products/solar"
            element={<SolarPage />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>

        <Footer />

        <LeadFormModal
          open={formOpen}
          onClose={() => setFormOpen(false)}
        />

        <FloatingActions />
      </div>
    </BrowserRouter>
  );
}