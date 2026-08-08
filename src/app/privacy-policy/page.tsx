import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { SectionFrame } from "@/components/sections";

const BASE_URL = "https://www.smarttradershub.in";

export const metadata: Metadata = {
  title: "Privacy Policy — Smart Traders",
  description:
    "Read the Smart Traders privacy policy to understand how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Smart Traders",
    description: "How Smart Traders collects, uses, and protects your personal data.",
    url: `${BASE_URL}/privacy-policy`,
  },
  alternates: { canonical: `${BASE_URL}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader currentPath="/privacy-policy" />
      <main>
        <SectionFrame>
          <div className="container legal-page">
            <h1>Privacy Policy</h1>
            <p className="legal-date">Last updated: August 2026</p>

            <section>
              <h2>1. Introduction</h2>
              <p>
                Smart Traders (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website{" "}
                <strong>smarttradershub.in</strong> or use our services.
              </p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, and
                  any other details you provide when filling out our contact or enquiry forms.
                </li>
                <li>
                  <strong>Usage Data:</strong> IP address, browser type, pages visited, time
                  spent on pages, and other diagnostic data collected automatically when you
                  access our website.
                </li>
                <li>
                  <strong>Communication Records:</strong> Messages and correspondence you send
                  us via email, phone, or WhatsApp.
                </li>
              </ul>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your enquiries and provide requested support.</li>
                <li>Send you information about our educational programs and services.</li>
                <li>Improve our website experience and customer service.</li>
                <li>Comply with applicable legal obligations.</li>
                <li>Prevent fraudulent or unauthorised use of our services.</li>
              </ul>
            </section>

            <section>
              <h2>4. Sharing of Information</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties.
                We may share information with:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Trusted partners who assist in operating
                  our website or delivering our services, subject to confidentiality agreements.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law, regulation, or
                  valid government request.
                </li>
              </ul>
            </section>

            <section>
              <h2>5. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfil the purposes
                for which it was collected, including satisfying any legal, accounting, or
                reporting requirements.
              </p>
            </section>

            <section>
              <h2>6. Cookies</h2>
              <p>
                Our website may use cookies to enhance your browsing experience. You can
                instruct your browser to refuse all cookies or to indicate when a cookie is
                being sent. Note that some features of our website may not function properly
                without cookies.
              </p>
            </section>

            <section>
              <h2>7. Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your
                personal information against unauthorised access, alteration, disclosure, or
                destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2>8. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data, subject to legal obligations.</li>
                <li>Withdraw consent for marketing communications at any time.</li>
              </ul>
            </section>

            <section>
              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify you of significant
                changes by posting the new policy on this page with an updated date.
              </p>
            </section>

            <section>
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul>
                <li>Email: <a href="mailto:support@smarttradershub.in">support@smarttradershub.in</a></li>
                <li>Phone: <a href="tel:+916383594583">+91 63835 94583</a></li>
                <li>Location: Chennai, Tamil Nadu, India</li>
              </ul>
            </section>
          </div>
        </SectionFrame>
      </main>
      <SiteFooter />
    </>
  );
}
