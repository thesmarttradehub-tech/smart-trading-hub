import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { fontVariables } from "@/components/site-shell";

const GA_MEASUREMENT_ID = "G-G5G8GGGTR1";

const BASE_URL = "https://www.smarttradershub.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Smart Traders | Stock Market Education & Trading Support",
    template: "%s | Smart Traders",
  },
  description:
    "Smart Traders is India's trusted stock market education and trading support platform. Open a trading account, learn stock market concepts, and get expert platform guidance — all in one place.",
  keywords: [
    "stock market education India",
    "trading account opening",
    "stock market courses",
    "technical analysis course",
    "trading platform onboarding",
    "beginner stock market India",
    "trading support",
    "demat account opening",
    "Smart Traders",
  ],
  authors: [{ name: "Smart Traders", url: BASE_URL }],
  creator: "Smart Traders",
  publisher: "Smart Traders",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Smart Traders",
    title: "Smart Traders | Stock Market Education & Trading Support",
    description:
      "India's trusted stock market education platform. Expert mentors, beginner-friendly courses, trading account support, and multilingual guidance across India.",
    images: [
      {
        url: "/smart-traders-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Smart Traders — Stock Market Education & Trading Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Traders | Stock Market Education & Trading Support",
    description:
      "India's trusted stock market education platform. Expert mentors, beginner-friendly courses, and complete trading support.",
    images: ["/smart-traders-logo.jpeg"],
  },
  alternates: { canonical: BASE_URL },
  category: "education",
  icons: {
    icon: "/smart-traders-logo.jpeg",
    shortcut: "/smart-traders-logo.jpeg",
    apple: "/smart-traders-logo.jpeg",
  },
  verification: {
    google: "JPQpvHQbC6mJL_uL1eJRVsakjgpUg1lN0UiTCxEWmnM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Smart Traders",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/smart-traders-logo.jpeg`,
          width: 160,
          height: 84,
        },
        description:
          "Smart Traders is India's trusted stock market education and trading support company, providing beginner-friendly courses, trading account assistance, platform onboarding, and multilingual support.",
        foundingDate: "2019",
        areaServed: { "@type": "Country", name: "India" },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Chennai",
          addressLocality: "Chennai",
          addressRegion: "Tamil Nadu",
          postalCode: "600001",
          addressCountry: "IN",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-63835-94583",
            contactType: "customer support",
            availableLanguage: ["English", "Hindi"],
            contactOption: "TollFree",
            areaServed: "IN",
          },
          {
            "@type": "ContactPoint",
            email: "support@smarttradershub.in",
            contactType: "customer support",
            areaServed: "IN",
          },
        ],
        knowsAbout: [
          "Stock Market Education",
          "Technical Analysis",
          "Fundamental Analysis",
          "Trading Account Opening",
          "Trading Platform Onboarding",
          "Risk Management",
          "Trading Psychology",
          "Candlestick Analysis",
          "Price Action Trading",
        ],
        numberOfEmployees: { "@type": "QuantitativeValue", value: "10" },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Smart Traders",
        description: "Stock market education and trading support platform in India.",
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <html lang="en" className={fontVariables()}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        {/* Google Tag Manager (add GTM snippet below, if needed) */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
