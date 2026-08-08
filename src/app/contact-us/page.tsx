import type { Metadata } from "next";
import { Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";

import { SiteFooter, SiteHeader, PageIntro } from "@/components/site-shell";
import {
  FAQList,
  IconCardGrid,
  SectionFrame,
  SectionHeading,
} from "@/components/sections";
import { SupportDashboard } from "@/components/visuals";
import { contactInfo, faqItems } from "@/lib/site-data";
import { ContactForm } from "@/components/contact-form";

const BASE_URL = "https://www.smarttradershub.in";

const supportCards = [
  { title: "WhatsApp Support", description: "Chat with our team for quick assistance and updates.", icon: MessageCircleMore },
  { title: "Phone Support", description: "Speak directly with our experts during business hours.", icon: Phone },
  { title: "Email Support", description: "Send your queries and we'll respond within 24 hours.", icon: Mail },
  { title: "Live Guidance", description: "Connect with us for real-time guidance and support.", icon: Phone },
];

export const metadata: Metadata = {
  title: "Contact Us — Get Trading Support & Course Enquiries",
  description:
    "Get in touch with Smart Traders for trading account assistance, course enquiries, platform support, and more. Reach us by phone, WhatsApp, or email. Business hours: Mon–Fri 9 AM–7 PM.",
  openGraph: {
    title: "Contact Smart Traders | Trading Support & Enquiries",
    description:
      "Reach out to Smart Traders for trading account help, course information, or platform support. Available via phone, WhatsApp, and email.",
    url: `${BASE_URL}/contact-us`,
  },
  alternates: { canonical: `${BASE_URL}/contact-us` },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${BASE_URL}/contact-us#webpage`,
        url: `${BASE_URL}/contact-us`,
        name: "Contact Smart Traders | Trading Support & Enquiries",
        description:
          "Contact Smart Traders for trading account assistance, platform support, and stock market education enquiries.",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "Contact Us", item: `${BASE_URL}/contact-us` },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/contact-us#faq`,
        url: `${BASE_URL}/contact-us#faq`,
        name: "Frequently Asked Questions — Smart Traders",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader currentPath="/contact-us" />
      <main>
        <PageIntro
          badge="Contact Us"
          title="We're Here to Help"
          accent="You Trade Smarter."
          description="Smart Traders is here to support you at every step of your journey. From account opening assistance and platform setup to educational support and customer guidance, our team is ready to help."
          primaryLabel="Speak With Our Team"
          secondaryLabel="Open Trading Account"
          highlights={[
            { title: "Multilingual Support", description: "Comfortable help in your preferred language." },
            { title: "Fast Response", description: "Quick answers through phone and WhatsApp." },
            { title: "Beginner Friendly", description: "Clear guidance for your first steps." },
          ]}
          visual={<SupportDashboard />}
        />

        <SectionFrame>
          <div className="container contact-cards">
            <article className="contact-mini-card">
              <div className="contact-card-icon">
                <Phone size={24} />
              </div>
              <div>
                <strong>Phone Support</strong>
                <p>{contactInfo.phone}</p>
                <span>Mon - Sat: 9 AM - 7 PM</span>
              </div>
            </article>
            <article className="contact-mini-card">
              <div className="contact-card-icon">
                <Mail size={24} />
              </div>
              <div>
                <strong>Email Support</strong>
                <p>{contactInfo.email}</p>
                <span>We reply within 24 hours</span>
              </div>
            </article>
            <article className="contact-mini-card">
              <div className="contact-card-icon">
                <MessageCircleMore size={24} />
              </div>
              <div>
                <strong>WhatsApp Support</strong>
                <p>{contactInfo.phone}</p>
                <span>Quick responses</span>
              </div>
            </article>
            <article className="contact-mini-card">
              <div className="contact-card-icon">
                <MapPin size={24} />
              </div>
              <div>
                <strong>Office Address</strong>
                <p>{contactInfo.address}</p>
              </div>
            </article>
          </div>
        </SectionFrame>

        <SectionFrame>
          <div className="container contact-grid">
            <ContactForm />

            <aside className="contact-details-card">
              <h2>Get in Touch</h2>
              <ul className="contact-detail-list">
                <li>
                  <Phone size={18} />
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </li>
                <li>
                  <Mail size={18} />
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </li>
                <li>
                  <MessageCircleMore size={18} />
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Available on WhatsApp
                  </a>
                </li>
                <li><MapPin size={18} /> {contactInfo.address}</li>
              </ul>

              <div className="map-card" role="img" aria-label="Map showing office location in Mumbai">
                <div className="map-pin" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button secondary"
                >
                  View on Google Maps
                </a>
              </div>

              <div className="business-hours">
                <h3>Business Hours</h3>
                {contactInfo.hours.map((h) => (
                  <p key={h}>{h}</p>
                ))}
              </div>
            </aside>
          </div>
        </SectionFrame>

        <SectionFrame dark id="support">
          <div className="container">
            <SectionHeading
              title="Choose the Support Channel That Works for You"
            />
            <IconCardGrid items={supportCards} columns="four" dark />
          </div>
        </SectionFrame>

        <SectionFrame id="faq">
          <div className="container">
            <SectionHeading
              title="Frequently Asked Questions"
              description="Quick answers to the questions we hear most often."
            />
            <FAQList items={faqItems} />
          </div>
        </SectionFrame>
      </main>
      <SiteFooter />
    </>
  );
}
