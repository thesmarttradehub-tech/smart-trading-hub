import type { ReactNode } from "react";
import { ChevronDown, Star } from "lucide-react";

import type { IconCard, Stat, Testimonial } from "@/lib/site-data";

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
}: {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading ${align}`}>
      {badge ? <p className="eyebrow">{badge}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function StatsBand({ items }: { items: Stat[] }) {
  return (
    <section className="stats-band">
      <div className="container stats-grid">
        {items.map(({ value, label, description, icon: Icon }) => (
          <article key={label} className="stat-card">
            <Icon size={28} />
            <div>
              <strong>{value}</strong>
              <span>{label}</span>
              {description ? <p>{description}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function IconCardGrid({
  items,
  columns = "four",
  dark = false,
}: {
  items: IconCard[];
  columns?: "three" | "four" | "five";
  dark?: boolean;
}) {
  return (
    <div className={`icon-grid ${columns} ${dark ? "dark" : ""}`}>
      {items.map(({ title, description, icon: Icon }) => (
        <article key={title} className="icon-card">
          <div className="icon-wrap">
            <Icon size={28} />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </div>
  );
}

export function SplitPanel({
  imageSide,
  badge,
  title,
  description,
  items,
}: {
  imageSide: ReactNode;
  badge: string;
  title: string;
  description: string;
  items: IconCard[];
}) {
  return (
    <section className="split-panel">
      <div className="container split-grid">
        <div>{imageSide}</div>
        <div className="split-copy">
          <p className="eyebrow">{badge}</p>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="mini-icon-grid">
            {items.map(({ title, description, icon: Icon }) => (
              <div key={title} className="mini-icon-card">
                <div className="icon-wrap soft">
                  <Icon size={24} />
                </div>
                <strong>{title}</strong>
                <span>{description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function JourneySteps({ items }: { items: IconCard[] }) {
  return (
    <div className="journey-grid">
      {items.map(({ title, description, icon: Icon }, index) => (
        <article key={title} className="journey-step">
          <div className="journey-icon">
            <span>{index + 1}</span>
            <Icon size={24} />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </div>
  );
}

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className="testimonial-grid">
      {items.map((item) => (
        <article key={item.name} className="testimonial-card">
          <div className="rating-row">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={`${item.name}-${index}`} size={15} fill="currentColor" />
            ))}
          </div>
          <p>{item.quote}</p>
          <div className="testimonial-person">
            <div className="avatar">{item.name.slice(0, 1)}</div>
            <div>
              <strong>{item.name}</strong>
              <span>{item.location}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function FAQList({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="faq-grid">
      {items.map((item) => (
        <details key={item.question} className="faq-item">
          <summary>
            <span>{item.question}</span>
            <ChevronDown size={18} />
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function SectionFrame({
  dark = false,
  id,
  children,
}: {
  dark?: boolean;
  id?: string;
  children: ReactNode;
}) {
  return <section id={id} className={dark ? "section dark-section" : "section"}>{children}</section>;
}
