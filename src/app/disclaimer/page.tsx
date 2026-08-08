import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { SectionFrame } from "@/components/sections";

const BASE_URL = "https://www.smarttradershub.in";

export const metadata: Metadata = {
  title: "Disclaimer — Smart Traders",
  description:
    "Important disclaimer from Smart Traders. We are an educational platform only. All content is for learning purposes and does not constitute investment advice.",
  openGraph: {
    title: "Disclaimer | Smart Traders",
    description: "Smart Traders is an educational platform. No investment advice is provided.",
    url: `${BASE_URL}/disclaimer`,
  },
  alternates: { canonical: `${BASE_URL}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <>
      <SiteHeader currentPath="/disclaimer" />
      <main>
        <SectionFrame>
          <div className="container legal-page">
            <h1>Disclaimer</h1>
            <p className="legal-date">Last updated: August 2026</p>

            <section>
              <h2>Educational Purpose Only</h2>
              <p>
                Smart Traders (<strong>smarttradershub.in</strong>) is a stock market
                education and trading support platform. All content, resources, sessions, and
                materials provided on this website and through our services are strictly for
                <strong> educational and informational purposes only</strong>.
              </p>
            </section>

            <section>
              <h2>Not a SEBI-Registered Investment Advisor</h2>
              <p>
                Smart Traders is <strong>not a SEBI-registered Investment Advisor</strong>,
                Research Analyst, Portfolio Manager, or Stock Broker. We do not hold any
                registration under the Securities and Exchange Board of India (Investment
                Advisers) Regulations, 2013.
              </p>
              <p>
                Nothing on this website or communicated through our services should be
                construed as personalised investment advice, a recommendation to buy or sell
                any securities, or a solicitation of any investment.
              </p>
            </section>

            <section>
              <h2>No Guaranteed Returns</h2>
              <p>
                We do not guarantee, promise, or imply any specific financial returns, profits,
                or outcomes from trading or investing in the stock market. Trading in equities,
                derivatives, commodities, and currencies involves substantial risk of loss.
                Past performance is not indicative of future results.
              </p>
            </section>

            <section>
              <h2>No Stock Tips or Calls</h2>
              <p>
                Smart Traders does not provide stock tips, intraday calls, buy/sell
                recommendations, or any market calls through any medium — including WhatsApp,
                Telegram, email, phone, or social media. Any such communication claiming
                to be from Smart Traders should be reported to us immediately.
              </p>
            </section>

            <section>
              <h2>Third-Party Information</h2>
              <p>
                Our educational content may reference publicly available market data, news,
                company financials, or third-party research. We do not guarantee the accuracy,
                completeness, or timeliness of any such third-party information.
              </p>
            </section>

            <section>
              <h2>Limitation of Liability</h2>
              <p>
                Smart Traders, its founders, employees, educators, and affiliates shall not
                be held responsible or liable for any financial loss, trading loss, investment
                decision, or any other consequential damage arising directly or indirectly from
                the use of the information or services provided on this platform.
              </p>
              <p>
                All users are advised to consult a SEBI-registered investment advisor before
                making any investment or trading decisions.
              </p>
            </section>

            <section>
              <h2>User Responsibility</h2>
              <p>
                By using Smart Traders&apos; website and services, you acknowledge that:
              </p>
              <ul>
                <li>You are aware of the risks involved in stock market trading.</li>
                <li>You will not hold Smart Traders liable for any trading or investment losses.</li>
                <li>You are using the educational content for your own learning and development.</li>
                <li>
                  You will seek independent financial advice before making any investment
                  decisions.
                </li>
              </ul>
            </section>

            <section>
              <h2>Contact</h2>
              <p>
                For questions or concerns about this disclaimer, please contact us:
              </p>
              <ul>
                <li>
                  Email: <a href="mailto:support@smarttradershub.in">support@smarttradershub.in</a>
                </li>
                <li>Phone: <a href="tel:+916383594583">+91 63835 94583</a></li>
                <li>Location: Chennai, Tamil Nadu, India</li>
              </ul>
            </section>
          </div>
        </SectionFrame>
      </main>
      <SiteFooter />
    </>
  );
}
