"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const ThanksPage = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Event snippet for form submission to get a lead conversion page
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "conversion",
      send_to: "AW-16983946654/eUUuCO2C798aEJ7ryaI_",
      value: 1.0,
      currency: "MAD",
    });
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
    if (isVisible) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [isVisible]);

  return (
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
                      alt="image"
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
  );
};

export default ThanksPage;
