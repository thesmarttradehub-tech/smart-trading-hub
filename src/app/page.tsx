import type { Metadata } from "next";

import { SiteFooter, SiteHeader, PageIntro } from "@/components/site-shell";
import {
  IconCardGrid,
  JourneySteps,
  SectionFrame,
  SectionHeading,
  SplitPanel,
  StatsBand,
  TelegramStrip,
  Testimonials,
} from "@/components/sections";
import { BullShowcase } from "@/components/visuals";
import { HeroLeadForm } from "@/components/lead-form";
import {
  aboutPillars,
  homeHighlights,
  simpleJourney,
  siteStats,
  testimonials,
  whyChoose,
  courseCategories,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Stock Market Education & Trading Support in India",
  description:
    "Start your trading journey with Smart Traders. Open a trading account, learn stock market fundamentals, get platform onboarding, and grow with expert guidance. India's trusted trading education platform.",
  openGraph: {
    title: "Smart Traders | Stock Market Education & Trading Support in India",
    description:
      "Open a trading account, learn stock market fundamentals, and get expert guidance. India's trusted trading education platform with 10,000+ learners.",
    url: "https://www.smarttradershub.in",
  },
  alternates: { canonical: "https://www.smarttradershub.in" },
};

const BASE_URL = "https://www.smarttradershub.in";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/#webpage`,
    url: BASE_URL,
    name: "Smart Traders | Stock Market Education & Trading Support",
    description:
      "Smart Traders helps beginners open trading accounts, learn stock market concepts, and get platform onboarding support across India.",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      ],
    },
    mainEntity: {
      "@type": "FinancialService",
      "@id": `${BASE_URL}/#service`,
      name: "Smart Traders",
      description:
        "Stock market education and trading support services for beginners across India.",
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "India" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Stock Market Education Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trading Account Opening Assistance" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Platform Onboarding & Setup" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stock Market Education Courses" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multilingual Trading Support" } },
        ],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader currentPath="/" />
      <main>
        <PageIntro
          badge="Trading Education"
          title="Learn Trading."
          accent="Build Market Knowledge."
          description="Learn technical analysis, market structure, trading psychology and risk management through structured educational content. Smart Traders helps you open your trading account, get onboarded on your platform, and learn with confidence in your language."
          primaryLabel="Open Trading Account"
          secondaryLabel="Explore Courses"
          highlights={homeHighlights}
          visual={<HeroLeadForm />}
          showTelegramCta
        />

        <StatsBand items={siteStats} />

        <SplitPanel
          imageSide={<BullShowcase />}
          badge="About Smart Traders"
          title="Simplifying Markets. Empowering Learners."
          description="We bridge the gap between knowledge and action. From account opening to platform onboarding and structured education, Smart Traders is built to support you at every step of your trading journey."
          items={aboutPillars}
        />

        <SectionFrame dark>
          <div className="container">
            <SectionHeading
              badge="Why Choose Smart Traders?"
              title="We Make Learning and Trading Simple"
              description="Focused support, beginner-friendly systems, and practical examples that keep momentum high."
              align="left"
            />
            <IconCardGrid items={whyChoose} columns="four" dark />
          </div>
        </SectionFrame>

        <SectionFrame>
          <div className="container">
            <SectionHeading
              badge="Your Journey With Smart Traders"
              title="A Simple 5-Step Learning Journey"
              description="A guided path from first consultation to continuous support."
            />
            <JourneySteps items={simpleJourney} />
          </div>
        </SectionFrame>

        <SectionFrame dark>
          <div className="container">
            <SectionHeading
              badge="Learn. Practice. Grow."
              title="Explore Our Learning Programs"
              description="Foundational and advanced topics arranged into approachable categories."
              align="left"
            />
            <IconCardGrid items={courseCategories.slice(0, 8)} columns="four" dark />
            <TelegramStrip heading="Want to Continue Learning?" />
          </div>
        </SectionFrame>

        <SectionFrame>
          <div className="container">
            <SectionHeading
              badge="Learner Feedback"
              title="Trusted by Learners Across the Country"
              description="Support that helps beginners feel confident from day one."
            />
            <Testimonials items={testimonials} />
          </div>
        </SectionFrame>
      </main>
      <SiteFooter />
    </>
  );
}
