import { PageLayout, Section, usePageMeta } from "./PageLayout";

const sections = [
  {
    heading: "Introduction",
    body: [
      "Reddonatura India Private Limited (\"Reddonatura\", \"we\", \"us\", or \"our\") is a leading provider of organic waste management solutions, including organic waste converters, biogas plants, dewatering systems, and solar solutions. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit reddonatura.com or request a quote, consultation, or service from us.",
      "By using our website or submitting your information through our quote request forms, you consent to the practices described in this Privacy Policy.",
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "We collect information you voluntarily provide when requesting a quote, consultation, or maintenance service, including your name, company name, email address, phone number, country, facility type, and details about your organic waste management requirements.",
      "We may also automatically collect limited technical information such as browser type, device type, and pages visited, to help us understand how visitors use our site and to improve our waste management resources and content.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "We use the information you provide to respond to quote requests, recommend suitable organic waste converters, biogas, or solar solutions, provide after-sales support and maintenance services, and communicate updates relevant to your enquiry.",
      "We do not sell your personal information to third parties. Information collected through our lead and contact forms is used solely to evaluate your waste management requirements and connect you with our sales and engineering teams.",
    ],
  },
  {
    heading: "Cookies & Tracking Technologies",
    body: [
      "Our website may use cookies and similar technologies to remember your preferences, understand site usage patterns, and improve the browsing experience. You can control or disable cookies through your browser settings; disabling cookies may affect certain website functionality.",
    ],
  },
  {
    heading: "Data Sharing & Third Parties",
    body: [
      "We may share your information with trusted service providers who assist us in operating our website, processing enquiries, or delivering installation and maintenance services — such providers are bound to keep your information confidential and use it only for the purposes we specify.",
      "We may disclose information where required to comply with applicable law, regulation, or a valid legal process.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "We implement reasonable administrative, technical, and physical safeguards designed to protect your personal information from unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Your Rights",
    body: [
      "You may request access to, correction of, or deletion of the personal information you have shared with us at any time by contacting us at info@reddonatura.com. We will respond to reasonable requests within a reasonable timeframe.",
    ],
  },
  {
    heading: "Children's Privacy",
    body: [
      "Our website and services are intended for business and institutional use and are not directed at individuals under the age of 18. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The \"Last Updated\" date below indicates when this policy was last revised. Continued use of our website after changes are posted constitutes acceptance of the updated policy.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how Reddonatura handles your information, please contact us at info@reddonatura.com or +91 77609 87934.",
    ],
  },
];

export function PrivacyPolicyPage() {
  usePageMeta(
    "Privacy Policy | Reddonatura — Organic Waste Management Solutions",
    "Read Reddonatura's Privacy Policy to understand how we collect, use, and protect your information when you request a quote for our organic waste converters, biogas, and solar solutions.",
    "/privacy-policy"
  );

  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="How Reddonatura collects, uses, and protects your information across our organic waste management, biogas, and solar solutions."
      breadcrumb="Privacy Policy"
    >
      <Section>
        <div className="max-w-3xl mx-auto">
          <p className="mb-10" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.05em", color: "#8A9E8B" }}>
            Last Updated: January 1, 2026
          </p>
          {sections.map((s) => (
            <div key={s.heading} className="mb-10">
              <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "1.4rem", color: "#053114" }}>
                {s.heading}
              </h2>
              {s.body.map((p, i) => (
                <p key={i} className="mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "#5A6B5C", lineHeight: 1.8 }}>
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
