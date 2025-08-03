"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Script from "next/script";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const ThanksPage = () => {
  const conversionSent = useRef(false);

  useEffect(() => {
    if (conversionSent.current) return;

    // Ensure gtag is initialized
    window.gtag =
      window.gtag ||
      function () {
        (window.dataLayer = window.dataLayer || []).push(arguments);
      };

    // Send conversion event
    window.gtag("event", "conversion", {
      send_to: "AW-16983946654/WoUECL3c4v4aEJ7ryaI_",
      value: 1.0,
      currency: "MAD",
      transaction_id: "",
    });

    conversionSent.current = true;

    // Fallback image ping (no-JS tracking)
    const img = new window.Image();
    img.src = `https://www.googleadservices.com/pagead/conversion/16983946654/?label=WoUECL3c4v4aEJ7ryaI_&value=1.0&currency_code=MAD&guid=ON&script=0`;
    img.style.display = "none";
    document.body.appendChild(img);
  }, []);

  return (
    <>
      {/* Google Ads Conversion Tracking Base Script */}
      <Script
        id="google-ads-script"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16983946654"
      />

      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16983946654');
        `}
      </Script>

      <section className="pb-[60px] pt-[120px] md:pb-[120px] md:pt-[130px] overflow-hidden">
        <div className="container px-4">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-6 md:mb-8 text-2xl md:text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Thank You! Our Team Will Contact You Shortly.
                </h2>
                <div>
                  <p className="mb-6 md:mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We've received your information and a member of our team
                    will reach out to you as soon as possible. In the meantime,
                    feel free to browse our website.
                  </p>
                  <div className="mb-6 md:mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[50/34]">
                      <Image
                        src="/images/blog/thanks.png"
                        alt="Thank you image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThanksPage;
