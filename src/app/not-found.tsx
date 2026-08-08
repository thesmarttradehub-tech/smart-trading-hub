import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for could not be found. Return to Smart Traders to explore stock market courses and trading support.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader currentPath="" />
      <main>
        <section className="not-found-section">
          <div className="container not-found-content">
            <span className="section-badge">404 — Not Found</span>
            <h1>Page Not Found</h1>
            <p>
              The page you were looking for doesn&apos;t exist or may have been moved.
              Head back to explore our courses, services, or get in touch with our team.
            </p>
            <div className="cta-row">
              <Link href="/" className="button primary">
                Go to Home
              </Link>
              <Link href="/courses" className="button secondary">
                Browse Courses
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
