import type { Metadata } from "next";

import { SiteFooter, SiteHeader, PageIntro } from "@/components/site-shell";
import {
  IconCardGrid,
  JourneySteps,
  SectionFrame,
  SectionHeading,
  SplitPanel,
  StatsBand,
  Testimonials,
} from "@/components/sections";
import { BullShowcase, SupportDashboard } from "@/components/visuals";
import {
  serviceGrid,
  supportServices,
  supportWorkflow,
  testimonials,
  siteStats,
} from "@/lib/site-data";

const BASE_URL = "https://www.smarttradershub.in";

export const metadata: Metadata = {
  title: "Trading Support Services — Account Opening, Platform Setup & Training",
  description:
    "Smart Traders provides comprehensive trading support services including demat account opening assistance, trading platform onboarding, educational training, and multilingual 24/7 customer support across India.",
  openGraph: {
    title: "Trading Support Services | Smart Traders India",
    description:
      "End-to-end trading support: account opening, platform setup, multilingual assistance, and ongoing guidance for traders across India.",
    url: `${BASE_URL}/services`,
  },
  alternates: { canonical: `${BASE_URL}/services` },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/services#webpage`,
    url: `${BASE_URL}/services`,
    name: "Trading Support Services | Smart Traders",
    description:
      "Comprehensive trading support services including account opening assistance, platform onboarding, and educational training.",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Trading Support Services",
      description: "End-to-end trading support services by Smart Traders",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "Trading Account Opening Assistance",
            description: "Complete guidance through the account opening process from documentation to activation.",
            provider: { "@id": `${BASE_URL}/#organization` },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            name: "Platform Onboarding & Setup",
            description: "Step-by-step installation and onboarding help for trading platforms.",
            provider: { "@id": `${BASE_URL}/#organization` },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            name: "Educational Training Programs",
            description: "Structured stock market education sessions with expert mentors.",
            provider: { "@id": `${BASE_URL}/#organization` },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Service",
            name: "Multilingual Customer Support",
            description: "Dedicated support in multiple languages via phone, WhatsApp, and email.",
            provider: { "@id": `${BASE_URL}/#organization` },
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader currentPath="/services" />
      <main>
        <PageIntro
          badge="Support Services"
          title="Professional Trading Support Services for"
          accent="Smarter Traders"
          description="At Smart Traders, we provide end-to-end support to help you start, learn, and grow in your trading journey with confidence. From account opening to platform training and continuous assistance, we're with you at every step."
          primaryLabel="Get Started"
          secondaryLabel="Speak With Our Team"
          highlights={supportServices.map(({ title, description }) => ({ title, description }))}
          visual={<SupportDashboard />}
        />

        <StatsBand items={siteStats} />

        <SplitPanel
          imageSide={<BullShowcase />}
          badge="About Our Services"
          title="Simplifying Support. Empowering Every Trader."
          description="Smart Traders offers comprehensive support services to ensure a smooth and confident trading experience. We help you with account setup, platform installation, training, and continued assistance whenever you need it."
          items={supportServices}
        />

        <SectionFrame dark>
          <div className="container">
            <SectionHeading
              badge="Our Support Services"
              title="What We Help You With"
              description="A practical service stack built around support, accessibility, and response time."
            />
            <IconCardGrid items={serviceGrid} columns="five" dark />
          </div>
        </SectionFrame>

        <SectionFrame>
          <div className="container">
            <SectionHeading
              badge="Our Process"
              title="Our End-to-End Support Workflow"
              description="A clear route from consultation to ongoing assistance."
            />
            <JourneySteps items={supportWorkflow} />
          </div>
        </SectionFrame>

        <SectionFrame>
          <div className="container">
            <SectionHeading
              badge="Testimonials"
              title="Support Trusted by Learners Across the Country"
            />
            <Testimonials items={testimonials} />
          </div>
        </SectionFrame>
      </main>
      <SiteFooter />
    </>
  );
}
