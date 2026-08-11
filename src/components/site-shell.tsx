import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Manrope } from "next/font/google";
import { ArrowRight, Phone, Send, type LucideIcon } from "lucide-react";

import {
  contactInfo,
  ctaButtons,
  footerLinks,
  navItems,
} from "@/lib/site-data";
import { MobileMenuToggle } from "@/components/mobile-nav";
import { CandlestickChart } from "@/components/visuals";
import { OpenAccountButton } from "@/components/account-modal";

/**
 * "Open Trading Account" opens the account modal (collects details, then
 * hands off to WhatsApp) instead of navigating. "Speak With Our Team"
 * goes straight to the Telegram community. Everything else falls back
 * to the contact page.
 */
function CtaLink({
  label,
  className,
  icon: Icon,
}: {
  label: string;
  className: string;
  icon?: LucideIcon;
}) {
  const content = (
    <>
      <span>{label}</span>
      {Icon && <Icon size={18} aria-hidden="true" />}
    </>
  );

  if (label === "Open Trading Account") {
    return <OpenAccountButton className={className}>{content}</OpenAccountButton>;
  }

  if (label === "Speak With Our Team") {
    return (
      <a href={contactInfo.telegram} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href="/contact-us" className={className}>
      {content}
    </Link>
  );
}

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export function fontVariables() {
  return `${display.variable} ${body.variable}`;
}

export function SiteHeader({ currentPath }: { currentPath: string }) {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand-mark" aria-label="Smart Traders home">
          <Image
            src="/smart-traders-logo.jpeg"
            alt="Smart Traders logo"
            width={160}
            height={84}
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = currentPath === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "nav-link active" : "nav-link"}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <a href={`tel:${contactInfo.phone}`} className="contact-pill" aria-label={`Call us at ${contactInfo.phone}`}>
            <Phone size={16} aria-hidden="true" />
            <span>{contactInfo.phone}</span>
          </a>
          <OpenAccountButton className="button primary compact">
            Open Trading Account
          </OpenAccountButton>
          <MobileMenuToggle currentPath={currentPath} />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <section className="footer-cta">
        <div className="container footer-cta-inner">
          <div className="footer-cta-main">
            <Image
              src="/Bull only.png"
              alt="Golden bull statue representing a bull market"
              width={1536}
              height={1024}
              className="footer-cta-bull"
            />

            <div className="footer-cta-copy">
              <h2>Start Your Trading Education Journey</h2>
              <p>
                Get educational guidance, quality content, and reliable support
                to help you understand financial markets and learn with confidence.
              </p>
              <div className="cta-row">
                {ctaButtons.map(({ label, icon }) => (
                  <CtaLink
                    key={label}
                    label={label}
                    className={label.includes("Open") ? "button primary" : "button secondary"}
                    icon={icon}
                  />
                ))}
                <a
                  href={contactInfo.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button secondary"
                >
                  <span>Join Our Telegram Community</span>
                  <Send size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            <CandlestickChart className="footer-cta-chart" />
          </div>
        </div>
      </section>

      <div className="container footer-grid">
        <div className="footer-brand">
          <Image
            src="/smart-traders-logo.jpeg"
            alt="Smart Traders logo"
            width={170}
            height={90}
          />
          <p>
            Empowering traders with knowledge, support, and the right tools to
            learn, practice, and grow with confidence.
          </p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <ul className="footer-list">
            <li>
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
            <li>{contactInfo.website}</li>
            <li>{contactInfo.address}</li>
          </ul>
        </div>

        <div>
          <h3>Business Hours</h3>
          <ul className="footer-list">
            {contactInfo.hours.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Support</h3>
          <ul className="footer-list">
            {footerLinks.support.map(({ label, href }) =>
              href.startsWith("/") ? (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ) : (
                <li key={href}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3>Legal</h3>
          <ul className="footer-list">
            {footerLinks.legal.map(({ label, href }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Smart Traders. All rights reserved.</p>
        <p>Educational programs only. No personalized investment advice.</p>
      </div>
    </footer>
  );
}

export function PageIntro({
  badge,
  title,
  accent,
  description,
  primaryLabel,
  secondaryLabel,
  highlights,
  visual,
  showTelegramCta = false,
}: {
  badge: string;
  title: string;
  accent: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
  highlights: { title: string; description: string }[];
  visual: ReactNode;
  showTelegramCta?: boolean;
}) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="section-badge">{badge}</span>
          <h1>
            {title} <span>{accent}</span>
          </h1>
          <p>{description}</p>
          <div className="cta-row">
            <CtaLink label={primaryLabel} className="button primary" icon={ArrowRight} />
            <CtaLink label={secondaryLabel} className="button secondary" />
            {showTelegramCta && (
              <a
                href={contactInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="button secondary"
              >
                <span>Join Our Telegram Community</span>
                <Send size={18} aria-hidden="true" />
              </a>
            )}
          </div>
          <div className="feature-strip">
            {highlights.map((item) => (
              <div key={item.title} className="feature-chip">
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        </div>
        <div aria-hidden="true">{visual}</div>
      </div>
    </section>
  );
}
