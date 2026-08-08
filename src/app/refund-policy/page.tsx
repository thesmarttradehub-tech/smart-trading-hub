import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { SectionFrame } from "@/components/sections";

const BASE_URL = "https://www.smarttradershub.in";

export const metadata: Metadata = {
  title: "Refund Policy — Smart Traders",
  description:
    "Understand Smart Traders' refund policy for educational courses and services. Learn about eligibility, timelines, and the refund process.",
  openGraph: {
    title: "Refund Policy | Smart Traders",
    description: "Smart Traders' refund policy for courses and services.",
    url: `${BASE_URL}/refund-policy`,
  },
  alternates: { canonical: `${BASE_URL}/refund-policy` },
};

export default function RefundPolicyPage() {
  return (
    <>
      <SiteHeader currentPath="/refund-policy" />
      <main>
        <SectionFrame>
          <div className="container legal-page">
            <h1>Refund Policy</h1>
            <p className="legal-date">Last updated: August 2026</p>

            <section>
              <h2>1. Overview</h2>
              <p>
                At Smart Traders, we strive to deliver high-quality educational programs and
                support. We want you to be satisfied with your purchase. This Refund Policy
                outlines the conditions under which refunds may be considered.
              </p>
            </section>

            <section>
              <h2>2. Eligibility for Refund</h2>
              <p>A refund request may be considered under the following conditions:</p>
              <ul>
                <li>
                  The request is submitted within <strong>7 days</strong> of the original
                  purchase date.
                </li>
                <li>
                  Less than 20% of the course or program content has been accessed or consumed.
                </li>
                <li>
                  The request is accompanied by a valid reason and submitted via our official
                  support channels.
                </li>
              </ul>
            </section>

            <section>
              <h2>3. Non-Refundable Items</h2>
              <p>The following are not eligible for refunds:</p>
              <ul>
                <li>Courses or programs where more than 20% of the content has been accessed.</li>
                <li>
                  Special offer, discounted, or promotional purchases unless otherwise stated
                  at the time of purchase.
                </li>
                <li>
                  One-on-one consultation sessions or personalised mentoring once the session
                  has been conducted.
                </li>
                <li>
                  Account opening assistance services, as these involve third-party coordination
                  and cannot be reversed once initiated.
                </li>
              </ul>
            </section>

            <section>
              <h2>4. How to Request a Refund</h2>
              <p>To request a refund, please contact us within the eligible period:</p>
              <ul>
                <li>
                  Email: <a href="mailto:support@smarttradershub.in">support@smarttradershub.in</a>{" "}
                  with subject line <em>&quot;Refund Request — [Your Name]&quot;</em>
                </li>
                <li>Phone: <a href="tel:+916383594583">+91 63835 94583</a></li>
              </ul>
              <p>
                Please include your name, contact details, course/program name, purchase date,
                and the reason for your refund request.
              </p>
            </section>

            <section>
              <h2>5. Refund Processing</h2>
              <p>
                Approved refunds will be processed within <strong>7–14 business days</strong>{" "}
                to the original payment method. The actual credit date may vary depending on
                your bank or payment provider.
              </p>
            </section>

            <section>
              <h2>6. Dispute Resolution</h2>
              <p>
                If you are dissatisfied with our response to your refund request, please
                write to us at{" "}
                <a href="mailto:support@smarttradershub.in">support@smarttradershub.in</a>{" "}
                and we will make every effort to resolve the matter fairly.
              </p>
            </section>

            <section>
              <h2>7. Changes to This Policy</h2>
              <p>
                Smart Traders reserves the right to modify this Refund Policy at any time.
                Updates will be posted on this page with a revised effective date.
              </p>
            </section>
          </div>
        </SectionFrame>
      </main>
      <SiteFooter />
    </>
  );
}
