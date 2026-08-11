import type { Metadata } from "next";

import { SiteFooter, SiteHeader, PageIntro } from "@/components/site-shell";
import {
  IconCardGrid,
  SectionFrame,
  SectionHeading,
  SplitPanel,
  StatsBand,
} from "@/components/sections";
import { BullShowcase, MarketDashboard } from "@/components/visuals";
import {
  aboutPillars,
  homeHighlights,
  siteStats,
  values,
  whyChoose,
} from "@/lib/site-data";

const BASE_URL = "https://www.smarttradershub.in";

export const metadata: Metadata = {
  title: "About Us — India's Trusted Stock Market Education Company",
  description:
    "Learn about Smart Traders — India's beginner-friendly stock market education and trading support company. Discover our mission, vision, core values, and what makes us the trusted choice for 10,000+ learners.",
  openGraph: {
    title: "About Smart Traders | Stock Market Education Company in India",
    description:
      "Smart Traders is dedicated to making stock market education accessible and trustworthy. Learn about our mission to empower traders across India.",
    url: `${BASE_URL}/about-us`,
  },
  alternates: { canonical: `${BASE_URL}/about-us` },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${BASE_URL}/about-us#webpage`,
    url: `${BASE_URL}/about-us`,
    name: "About Smart Traders | Stock Market Education Company",
    description:
      "Smart Traders is India's trusted stock market education and trading support company dedicated to simplifying the learning journey for beginners.",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "About Us", item: `${BASE_URL}/about-us` },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader currentPath="/about-us" />
      <main>
        <PageIntro
          badge="About Us"
          title="Helping You"
          accent="Learn Trading Better."
          description="Smart Traders is a stock market education and trading support company dedicated to simplifying the learning journey. We help beginners understand the markets, set up their accounts, learn platforms, and receive continuous support at every step."
          primaryLabel="Explore Courses"
          secondaryLabel="Speak With Our Team"
          highlights={homeHighlights}
          visual={<MarketDashboard />}
        />

        <SplitPanel
          imageSide={<BullShowcase />}
          badge="About Smart Traders"
          title="Our Story"
          description="Smart Traders was founded with a simple mission to make stock market education accessible, beginner-friendly, and trustworthy. We provide structured education, step-by-step support, and continuous assistance you can rely on."
          items={aboutPillars}
        />

        <SectionFrame dark>
          <div className="container dual-panels">
            <article className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To empower individuals with practical stock market education and
                professional support, enabling them to build confidence,
                knowledge, and discipline for informed decision-making.
              </p>
            </article>
            <article className="mission-card">
              <h3>Our Vision</h3>
              <p>
                To become one of India&apos;s most trusted stock market education
                and customer support companies, known for integrity, expertise,
                and a learner-first approach.
              </p>
            </article>
          </div>
        </SectionFrame>

        <SectionFrame>
          <div className="container">
            <SectionHeading
              badge="Our Core Values"
              title="What We Stand For"
              description="The principles shaping every learner interaction."
            />
            <IconCardGrid items={values} columns="three" />
          </div>
        </SectionFrame>

        <SectionFrame dark>
          <div className="container">
            <SectionHeading
              title="Why Choose Smart Traders?"
              description="The combination of education, support, and accessibility that sets us apart."
              align="left"
            />
            <IconCardGrid items={whyChoose} columns="four" dark />
          </div>
        </SectionFrame>

        <StatsBand items={siteStats} />
      </main>
      <SiteFooter />
    </>
  );
}
