"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Script from "next/script";

declare global {
  interface Window {
    gtag: any;
    dataLayer: any[];
  }
}

const ThanksPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const conversionSent = useRef(false);

  // Google Ads conversion tracking
  useEffect(() => {
    if (conversionSent.current) return;

    // Initialize gtag if not already available
    window.gtag = window.gtag || function() { 
      (window.dataLayer = window.dataLayer || []).push(arguments); 
    };

    // Send conversion event
    window.gtag('event', 'conversion', {
      'send_to': 'AW-16983946654/eUUuCO2C798aEJ7ryaI_',
      'value': 1.0,
      'currency': 'MAD',
      'transaction_id': ''
    });

    conversionSent.current = true;

    // Pixel fallback method
    const img = new window.Image();
    img.src = `https://www.googleadservices.com/pagead/conversion/16983946654/?label=eUUuCO2C798aEJ7ryaI_&value=1.0&currency_code=MAD&guid=ON&script=0`;
    img.style.display = 'none';
    document.body.appendChild(img);
  }, []);

  // Check if the section is in the viewport
  const checkIfInView = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfInView);
    checkIfInView(); // initial check

    return () => {
      window.removeEventListener("scroll", checkIfInView);
    };
  }, []);

  useEffect(() => {
    if (isVisible && sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [isVisible]);

  return (
    <>
      {/* Google Ads Conversion Tracking Base Script */}
      <Script
        id="google-ads-script"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16983946654"
      />
      
      <Script id="google-ads-init">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16983946654');
        `}
      </Script>

      <section
        className="pb-[60px] pt-[120px] md:pb-[120px] md:pt-[130px] overflow-hidden"
        ref={sectionRef}
      >
        <div className="container px-4">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-6 md:mb-8 text-2xl md:text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Thank You! Our Team Will Contact You Shortly.
                </h2>
                <div>
                  <p className="mb-6 md:mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We've received your information and a member of our team will reach out to you as soon as possible. In the meantime, feel free to browse our website.
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