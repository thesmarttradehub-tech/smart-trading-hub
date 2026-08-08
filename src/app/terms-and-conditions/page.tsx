import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { SectionFrame } from "@/components/sections";

const BASE_URL = "https://www.smarttradershub.in";

export const metadata: Metadata = {
  title: "Terms & Conditions — Smart Traders",
  description:
    "Read the terms and conditions governing the use of Smart Traders' website, educational programs, and services.",
  openGraph: {
    title: "Terms & Conditions | Smart Traders",
    description: "Terms governing the use of Smart Traders' educational platform and services.",
    url: `${BASE_URL}/terms-and-conditions`,
  },
  alternates: { canonical: `${BASE_URL}/terms-and-conditions` },
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader currentPath="/terms-and-conditions" />
      <main>
        <SectionFrame>
          <div className="container legal-page">
            <h1>Terms &amp; Conditions</h1>
            <p className="legal-date">Last updated: August 2026</p>

            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Smart Traders website (<strong>smarttradershub.in</strong>)
                and our services, you agree to be bound by these Terms &amp; Conditions. If you
                do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2>2. Nature of Services</h2>
              <p>
                Smart Traders provides stock market education, trading account opening assistance,
                and platform onboarding support. All content and services offered are strictly
                educational in nature. We are not a SEBI-registered investment advisor and do
                not provide personalised investment advice, stock tips, or portfolio management
                services.
              </p>
            </section>

            <section>
              <h2>3. Eligibility</h2>
              <p>
                You must be at least 18 years of age to access our services. By using our
                platform, you confirm that you meet this requirement and have the legal
                capacity to enter into a binding agreement.
              </p>
            </section>

            <section>
              <h2>4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, course materials,
                and multimedia, is the intellectual property of Smart Traders and is protected
                under applicable copyright laws. You may not reproduce, distribute, or create
                derivative works without our express written consent.
              </p>
            </section>

            <section>
              <h2>5. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul>
                <li>Provide accurate and complete information when registering or enquiring.</li>
                <li>Use our services only for lawful, educational purposes.</li>
                <li>Not engage in any conduct that disrupts or harms our platform.</li>
                <li>
                  Not misrepresent yourself or impersonate any individual or organisation.
                </li>
              </ul>
            </section>

            <section>
              <h2>6. Limitation of Liability</h2>
              <p>
                Smart Traders, its directors, employees, and affiliates shall not be liable
                for any financial losses, trading losses, or investment decisions made based
                on educational content provided on this platform. Trading in stocks and
                derivatives involves significant risk. Past performance does not guarantee
                future results.
              </p>
            </section>

            <section>
              <h2>7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites for convenience. We do
                not endorse or take responsibility for the content, privacy practices, or
                services of any third-party websites.
              </p>
            </section>

            <section>
              <h2>8. Modifications to Terms</h2>
              <p>
                We reserve the right to revise these Terms &amp; Conditions at any time.
                Continued use of our website after changes are posted constitutes your
                acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2>9. Governing Law</h2>
              <p>
                These Terms &amp; Conditions are governed by and construed in accordance with
                the laws of India. Any disputes arising shall be subject to the exclusive
                jurisdiction of courts located in Chennai, Tamil Nadu.
              </p>
            </section>

            <section>
              <h2>10. Contact</h2>
              <p>For questions regarding these terms, reach us at:</p>
              <ul>
                <li>Email: <a href="mailto:support@smarttradershub.in">support@smarttradershub.in</a></li>
                <li>Phone: <a href="tel:+916383594583">+91 63835 94583</a></li>
              </ul>
            </section>
          </div>
        </SectionFrame>
      </main>
      <SiteFooter />
    </>
  );
}
