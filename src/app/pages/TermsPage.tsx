import { PageLayout, Section, usePageMeta } from "./PageLayout";

const sections = [
  {
    heading: "Acceptance of Terms",
    body: [
      "These Terms and Conditions (\"Terms\") govern your access to and use of reddonatura.com, operated by Reddonatura India Private Limited (\"Reddonatura\", \"we\", \"us\", or \"our\"), a leading provider of organic waste converters, biogas plants, dewatering systems, industrial shredders, trommel screens, and solar solutions.",
      "By accessing or using our website, requesting a quote, or engaging our services, you agree to be bound by these Terms. If you do not agree, please discontinue use of the website.",
    ],
  },
  {
    heading: "Use of Website",
    body: [
      "You agree to use reddonatura.com only for lawful purposes related to evaluating and enquiring about our waste management, biogas, and solar products and services. You may not use the website in any way that could damage, disable, or impair its functionality, or attempt to gain unauthorised access to any part of the site or its underlying systems.",
    ],
  },
  {
    heading: "Products, Quotes & Services",
    body: [
      "Information on this website regarding our organic waste converters, biogas plants, dewatering systems, shredders, trommel screens, and solar solutions — including specifications, capacities, and pricing indications — is provided for general informational purposes and is subject to change without notice.",
      "Submitting a quote request through our website does not constitute a binding order. All product sales, installations, and service agreements are subject to a separate written proposal and agreement executed between Reddonatura and the client, which will set out final specifications, pricing, delivery timelines, and warranty terms.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "All content on this website — including the Reddonatura name, logo, \"Garbage to Green\" and \"G2G\" branding, text, graphics, product images, and machine designs — is the property of Reddonatura India Private Limited and is protected by applicable intellectual property laws. No content may be reproduced, distributed, or used commercially without our prior written consent.",
    ],
  },
  {
    heading: "Warranties & Disclaimers",
    body: [
      "While we strive to keep information on this website accurate and up to date, Reddonatura makes no warranty, express or implied, regarding the completeness or accuracy of website content. Specific product warranties are governed exclusively by the terms stated in your formal purchase or service agreement with Reddonatura.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by applicable law, Reddonatura shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on information contained herein. Nothing in these Terms limits liability that cannot be excluded under applicable law.",
    ],
  },
  {
    heading: "Governing Law",
    body: [
      "These Terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms or your use of this website shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.",
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may revise these Terms from time to time to reflect changes in our services or applicable law. The \"Last Updated\" date below reflects the most recent revision. Continued use of the website after changes are posted constitutes your acceptance of the updated Terms.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      "For questions regarding these Terms and Conditions, please contact us at info@reddonatura.com or +91 77609 87934.",
    ],
  },
];

export function TermsPage() {
  usePageMeta(
    "Terms & Conditions | Reddonatura — Organic Waste Management Solutions",
    "Read the Terms and Conditions governing the use of Reddonatura's website and the purchase of our organic waste converters, biogas, dewatering, and solar solutions.",
    "/terms-and-conditions"
  );

  return (
    <PageLayout
      title="Terms & Conditions"
      subtitle="The terms governing your use of reddonatura.com and engagement with our organic waste management, biogas, and solar solutions."
      breadcrumb="Terms & Conditions"
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
