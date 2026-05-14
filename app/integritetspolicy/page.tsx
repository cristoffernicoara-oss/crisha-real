"use client";

import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CONTACT } from "@/lib/constants";
import { privacyPolicyCopy } from "@/lib/i18n/content/privacy-policy-i18n";
import { useLocale } from "@/lib/i18n/locale-context";

export default function IntegritetspolicyPage() {
  const { locale } = useLocale();
  const c = privacyPolicyCopy[locale];

  return (
    <main>
      <Navbar />

      <div
        className="mx-auto max-w-[780px] px-[5%] pb-24 pt-[calc(var(--header-offset)+2.5rem)] text-white sm:px-[6%] md:pb-[100px]"
        style={{ fontFamily: "Instrument Sans, sans-serif" }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "14px",
            color: "rgba(255,255,255,0.4)",
            textDecoration: "none",
            marginBottom: "40px",
            transition: "color 0.2s",
          }}
        >
          {c.backLink}
        </Link>

        <h1
          style={{
            fontFamily: "Bricolage Grotesque, serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 800,
            color: "white",
            marginBottom: "8px",
          }}
        >
          {c.h1}
        </h1>

        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.3)",
            marginBottom: "48px",
          }}
        >
          {c.updated}
        </p>

        <style>{`
          .policy h2 {
            font-family: Bricolage Grotesque, serif;
            font-size: 22px;
            font-weight: 700;
            color: white;
            margin-top: 48px;
            margin-bottom: 16px;
          }
          .policy p {
            font-size: 15px;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 16px;
          }
          .policy ul {
            list-style: none;
            padding: 0;
            margin-bottom: 16px;
          }
          .policy ul li {
            font-size: 15px;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.6);
            padding: 4px 0;
            padding-left: 16px;
            position: relative;
          }
          .policy ul li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #2563EB;
          }
          .policy strong {
            color: white;
            font-weight: 600;
          }
          .policy a {
            color: #2563EB;
            text-decoration: none;
          }
          .policy a:hover {
            text-decoration: underline;
          }
          .policy .divider {
            height: 1px;
            background: rgba(255, 255, 255, 0.06);
            margin: 32px 0;
          }
          .policy .contact-phones {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px 28px;
            margin-bottom: 16px;
            margin-top: 4px;
          }
          .policy .contact-phones .phone-col {
            font-size: 15px;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.6);
          }
          @media (max-width: 540px) {
            .policy .contact-phones {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <div className="policy">
          <h2>{c.s1.h2}</h2>
          <p>{c.s1.p}</p>
          <p>
            <strong>{c.s1.companyNameLabel}</strong> Crisha Marketing AB
            <br />
            <strong>{c.s1.orgLabel}</strong> {c.s1.orgValue}
            <br />
            <strong>{c.s1.addressLabel}</strong> Marietorps Allé 3B, 217 75 Malmö
            <br />
            <strong>{c.s1.emailLabel}</strong> <a href="mailto:info@crisha.se">info@crisha.se</a>
          </p>
          <div className="contact-phones">
            <div className="phone-col">
              <strong>Cristoffer</strong>
              <br />
              <a href={CONTACT.cristoffer.telHref}>{CONTACT.cristoffer.telDisplay}</a>
            </div>
            <div className="phone-col">
              <strong>Shang</strong>
              <br />
              <a href={CONTACT.shang.telHref}>{CONTACT.shang.telDisplay}</a>
            </div>
          </div>

          <div className="divider" />

          <h2>{c.s2.h2}</h2>
          <p>{c.s2.intro}</p>
          <ul>
            <li>{c.s2.li1}</li>
            <li>{c.s2.li2}</li>
            <li>{c.s2.li3}</li>
            <li>{c.s2.li4}</li>
            <li>{c.s2.li5}</li>
          </ul>

          <div className="divider" />

          <h2>{c.s3.h2}</h2>
          <p>
            <strong>{c.s3.collectStrong}</strong>
          </p>
          <ul>
            <li>{c.s3.li1}</li>
            <li>{c.s3.li2}</li>
            <li>{c.s3.li3}</li>
            <li>{c.s3.li4}</li>
            <li>{c.s3.li5}</li>
          </ul>

          <div className="divider" />

          <h2>{c.s4.h2}</h2>
          <p>{c.s4.intro}</p>
          <ul>
            <li>{c.s4.li1}</li>
            <li>{c.s4.li2}</li>
            <li>{c.s4.li3}</li>
            <li>{c.s4.li4}</li>
            <li>{c.s4.li5}</li>
            <li>{c.s4.li6}</li>
          </ul>

          <div className="divider" />

          <h2>{c.s5.h2}</h2>
          <p>{c.s5.intro}</p>
          <ul>
            <li>
              <strong>{c.s5.consentStrong}</strong> {c.s5.consent}
            </li>
            <li>
              <strong>{c.s5.contractStrong}</strong> {c.s5.contract}
            </li>
            <li>
              <strong>{c.s5.interestStrong}</strong> {c.s5.interest}
            </li>
          </ul>

          <div className="divider" />

          <h2>{c.s6.h2}</h2>
          <p>{c.s6.p}</p>

          <div className="divider" />

          <h2>{c.s7.h2}</h2>
          <p>{c.s7.intro}</p>
          <ul>
            <li>
              <strong>Google</strong> {c.s7.google}
            </li>
            <li>
              <strong>Meta Platforms</strong> {c.s7.meta}
            </li>
            <li>
              <strong>TikTok</strong> {c.s7.tiktok}
            </li>
            <li>
              <strong>{c.s7.hostingLabel}</strong> {c.s7.hosting}
            </li>
          </ul>
          <p>{c.s7.p}</p>

          <div className="divider" />

          <h2>{c.s8.h2}</h2>
          <p>{c.s8.p1}</p>
          <ul>
            <li>
              <strong>{c.s8.necessaryStrong}</strong> {c.s8.necessary}
            </li>
            <li>
              <strong>{c.s8.analyticsStrong}</strong> {c.s8.analytics}
            </li>
            <li>
              <strong>{c.s8.marketingStrong}</strong> {c.s8.marketing}
            </li>
          </ul>
          <p>{c.s8.p2}</p>

          <div className="divider" />

          <h2>{c.s9.h2}</h2>
          <p>{c.s9.intro}</p>
          <ul>
            <li>
              <strong>{c.s9.r1s}</strong> {c.s9.r1}
            </li>
            <li>
              <strong>{c.s9.r2s}</strong> {c.s9.r2}
            </li>
            <li>
              <strong>{c.s9.r3s}</strong> {c.s9.r3}
            </li>
            <li>
              <strong>{c.s9.r4s}</strong> {c.s9.r4}
            </li>
            <li>
              <strong>{c.s9.r5s}</strong> {c.s9.r5}
            </li>
            <li>
              <strong>{c.s9.r6s}</strong> {c.s9.r6}
            </li>
            <li>
              <strong>{c.s9.r7s}</strong> {c.s9.r7}
            </li>
          </ul>
          <p>{c.s9.complaint}</p>

          <div className="divider" />

          <h2>{c.s10.h2}</h2>
          <p>{c.s10.p1}</p>
          <p>
            <strong>{c.s10.emailLabel}</strong> <a href="mailto:info@crisha.se">info@crisha.se</a>
            <br />
            <strong>{c.s10.addressLabel}</strong> Marietorps Allé 3B, 217 75 Malmö
          </p>
          <div className="contact-phones">
            <div className="phone-col">
              <strong>Cristoffer</strong>
              <br />
              <a href={CONTACT.cristoffer.telHref}>{CONTACT.cristoffer.telDisplay}</a>
            </div>
            <div className="phone-col">
              <strong>Shang</strong>
              <br />
              <a href={CONTACT.shang.telHref}>{CONTACT.shang.telDisplay}</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
