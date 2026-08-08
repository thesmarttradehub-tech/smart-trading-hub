import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter, SiteHeader, PageIntro } from "@/components/site-shell";
import {
  IconCardGrid,
  SectionFrame,
  SectionHeading,
  StatsBand,
} from "@/components/sections";
import { MarketDashboard } from "@/components/visuals";
import { courseCategories } from "@/lib/site-data";

const BASE_URL = "https://www.smarttradershub.in";

const programStats = [
  { value: "10+", label: "Course Programs", description: "Structured topics for every level.", icon: courseCategories[0].icon },
  { value: "Live", label: "Interactive Classes", description: "Sessions with mentors and guided explanations.", icon: courseCategories[3].icon },
  { value: "5000+", label: "Happy Learners", description: "A growing community across multiple cities.", icon: courseCategories[5].icon },
  { value: "5+ Years", label: "Of Experience", description: "Education and learner support in one place.", icon: courseCategories[4].icon },
];

export const metadata: Metadata = {
  title: "Stock Market Courses — Technical Analysis, Trading Psychology & More",
  description:
    "Explore 10+ structured stock market courses for beginners and aspiring traders. Learn technical analysis, fundamental analysis, trading psychology, risk management, and candlestick patterns with expert mentors.",
  openGraph: {
    title: "Stock Market Courses | Smart Traders India",
    description:
      "Structured stock market courses for beginners. Learn technical analysis, fundamental analysis, trading psychology, and more with expert mentors across India.",
    url: `${BASE_URL}/courses`,
  },
  alternates: { canonical: `${BASE_URL}/courses` },
};

export default function CoursesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/courses#webpage`,
    url: `${BASE_URL}/courses`,
    name: "Stock Market Courses | Smart Traders",
    description:
      "10+ structured stock market courses for beginners: technical analysis, fundamental analysis, trading psychology, risk management, and more.",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Courses", item: `${BASE_URL}/courses` },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Stock Market Course Categories",
      description: "Stock market education programs offered by Smart Traders",
      itemListElement: courseCategories.map((course, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Course",
          name: course.title,
          description: course.description,
          provider: { "@id": `${BASE_URL}/#organization` },
          educationalLevel: "Beginner",
          teaches: course.title,
          courseMode: "online",
          inLanguage: ["en", "hi"],
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader currentPath="/courses" />
      <main>
        <PageIntro
          badge="Learn. Practice. Grow."
          title="Structured Courses for"
          accent="Smarter Traders"
          description="Practical, easy-to-understand stock market courses designed for beginners and aspiring traders. Learn from experts and build the skills to trade with confidence."
          primaryLabel="Explore Courses"
          secondaryLabel="Speak With Our Team"
          highlights={[
            { title: "Expert Mentors", description: "Live explanations and guided sessions." },
            { title: "Practical Learning", description: "Exercises, examples, and market context." },
            { title: "Lifetime Support", description: "Help after the session when you need it." },
          ]}
          visual={<MarketDashboard />}
        />

        <StatsBand items={programStats} />

        <SectionFrame>
          <div className="container">
            <SectionHeading
              title="Our Course Categories"
              description="Choose a program that matches your learning goals."
            />
            <IconCardGrid items={courseCategories} columns="five" />
          </div>
        </SectionFrame>

        <SectionFrame dark>
          <div className="container why-learn-grid">
            <div className="why-learn-copy">
              <SectionHeading
                title="Why Learn With Smart Traders?"
                description="We focus on real learning, practical application, and continuous support to help you become a confident trader."
                align="left"
              />
            </div>
            <IconCardGrid items={courseCategories.slice(0, 6)} columns="three" dark />
          </div>

          <div className="container disclaimer-grid">
            <article className="achievement-card">
              <h3>What You Will Achieve</h3>
              <ul>
                <li>Understand stock market concepts clearly</li>
                <li>Learn technical and fundamental analysis</li>
                <li>Develop risk management skills</li>
                <li>Trade with discipline and confidence</li>
                <li>Use trading platforms with ease</li>
                <li>Make informed trading decisions</li>
              </ul>
            </article>
            <article className="disclaimer-card">
              <h3>Important Disclaimer</h3>
              <p>
                Our courses are intended purely for educational purposes. We do
                not provide investment advice or guaranteed returns. Trading and
                investing involve risks. Past performance is not indicative of
                future results. Please trade responsibly and consult your
                financial advisor if needed.
              </p>
              <Link href="/contact-us" className="button primary">
                Enquire About Courses
              </Link>
            </article>
          </div>
        </SectionFrame>
      </main>
      <SiteFooter />
    </>
  );
}
