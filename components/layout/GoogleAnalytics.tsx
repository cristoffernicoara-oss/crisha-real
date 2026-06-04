"use client";

import Script from "next/script";
import { useLayoutEffect, useState } from "react";

import {
  GA_MEASUREMENT_ID,
  GOOGLE_ADS_CONVERSION_EVENT,
  GOOGLE_ADS_ID,
} from "@/lib/analytics";
import { hasOptionalCookieConsent } from "@/lib/cookie-consent";

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useLayoutEffect(() => {
    const sync = () => setEnabled(hasOptionalCookieConsent());
    sync();
    window.addEventListener("crisha-cookie-consent", sync);
    return () => window.removeEventListener("crisha-cookie-consent", sync);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
          gtag('config', '${GOOGLE_ADS_ID}');

          window.gtagSendEvent = function(url) {
            var callback = function () {
              if (typeof url === 'string') {
                window.location = url;
              }
            };
            gtag('event', '${GOOGLE_ADS_CONVERSION_EVENT}', {
              'event_callback': callback,
              'event_timeout': 2000,
            });
            return false;
          };
        `}
      </Script>
    </>
  );
}
