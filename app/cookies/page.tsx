"use client";

import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cookiePolicyCopy } from "@/lib/i18n/content/cookie-policy-i18n";
import { useLocale } from "@/lib/i18n/locale-context";

export default function CookiesPage() {
  const { locale } = useLocale();
  const c = cookiePolicyCopy[locale];

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
          .policy h3 {
            font-family: Bricolage Grotesque, serif;
            font-size: 17px;
            font-weight: 600;
            color: white;
            margin-top: 24px;
            margin-bottom: 10px;
          }
          .policy p {
            font-size: 15px;
            line-height: 1.8;
            color: rgba(255,255,255,0.6);
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
            color: rgba(255,255,255,0.6);
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
            background: rgba(255,255,255,0.06);
            margin: 32px 0;
          }
          .policy .cookie-box {
            background: #0F1629;
            border: 1px solid rgba(255,255,255,0.07);
            border-radius: 16px;
            padding: 24px 28px;
            margin-bottom: 16px;
          }
          .policy .cookie-box h3 {
            margin-top: 0;
          }
        `}</style>

        <div className="policy">
          <h2>{c.s1.h2}</h2>
          <p>{c.s1.p}</p>

          <div className="divider" />

          <h2>{c.s2.h2}</h2>

          <div className="cookie-box">
            <h3>{c.s2.necessaryTitle}</h3>
            <p>{c.s2.necessaryP}</p>
            <p>
              <strong>{c.s2.example}</strong>
            </p>
            <ul>
              <li>{c.s2.necessaryLi1}</li>
              <li>{c.s2.necessaryLi2}</li>
            </ul>
          </div>

          <div className="cookie-box">
            <h3>{c.s2.analyticsTitle}</h3>
            <p>{c.s2.analyticsP}</p>
            <p>
              <strong>{c.s2.example}</strong>
            </p>
            <ul>
              <li>{c.s2.analyticsLi1}</li>
              <li>{c.s2.analyticsLi2}</li>
            </ul>
          </div>

          <div className="cookie-box">
            <h3>{c.s2.marketingTitle}</h3>
            <p>{c.s2.marketingP}</p>
            <p>
              <strong>{c.s2.example}</strong>
            </p>
            <ul>
              <li>{c.s2.marketingLi1}</li>
              <li>{c.s2.marketingLi2}</li>
              <li>{c.s2.marketingLi3}</li>
            </ul>
          </div>

          <div className="divider" />

          <h2>{c.s3.h2}</h2>
          <p>{c.s3.p}</p>

          <div className="divider" />

          <h2>{c.s4.h2}</h2>
          <p>{c.s4.p}</p>

          <div className="divider" />

          <h2>{c.s5.h2}</h2>
          <p>
            {c.s5.pBefore}
            <Link href="/integritetspolicy">{c.s5.privacyLink}</Link>
            {c.s5.pAfter}
          </p>

          <div className="divider" />

          <h2>{c.s6.h2}</h2>
          <p>{c.s6.p1}</p>
          <p>
            <strong>{c.s6.emailLabel}</strong> <a href="mailto:info@crisha.se">info@crisha.se</a>
            <br />
            <strong>{c.s6.addressLabel}</strong> Marietorps Allé 3B, 217 75 Malmö
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
