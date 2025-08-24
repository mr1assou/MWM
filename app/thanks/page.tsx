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
    img.src =
      "https://www.googleadservices.com/pagead/conversion/16983946654/?label=WoUECL3c4v4aEJ7ryaI_&value=1.0&currency_code=MAD&guid=ON&script=0";
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
              <div className="mx-auto max-w-3xl rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 md:p-10 shadow-sm backdrop-blur">
                {/* Headline */}
                <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-black dark:text-white">
                  Thank you for filling out the form.
                  <span className="block text-base sm:text-lg md:text-xl font-medium mt-3 text-gray-700 dark:text-gray-300">
                    Please check your <span className="font-semibold">email</span> or{" "}
                    <span className="font-semibold">WhatsApp</span> for our reply.
                  </span>
                </h1>

                {/* Subheadline + CTA */}
                <div className="mt-6 md:mt-8">
                  <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                    Prefer to speak sooner? You can book an appointment here:
                  </p>
                  <div className="mt-4">
                    <a
                      href="https://calendar.app.google/jaYqRDByx9pUrK1X8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-base font-semibold text-white bg-primary dark:bg-white dark:text-black hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white transition"
                      aria-label="Book an appointment"
                    >
                      Book Appointment Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12.293 2.293a1 1 0 011.414 0l4 4a.997.997 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L14.586 8H4a1 1 0 01-.117-1.993L4 6h10.586l-2.293-2.293a1 1 0 010-1.414z" />
                        <path d="M6 10a1 1 0 011 1v5h7a1 1 0 110 2H6a1 1 0 01-1-1v-6a1 1 0 011-1z" />
                      </svg>
                    </a>
                  </div>

                  {/* Optional microcopy */}
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    Didn’t see our message? Please check your spam or promotions folder.
                  </p>
                </div>

                {/* Visual */}
                <div className="mt-8 md:mt-10 w-full overflow-hidden rounded-xl">
                  <div className="relative aspect-[97/63] w-full sm:aspect-[50/31] 2xl:aspect-[50/32]">
                    <Image
                      src="/images/hero/email_image.png"
                      alt="Thank you illustration"
                      fill
                      className="object-cover object-center"
                      priority
                    />
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
