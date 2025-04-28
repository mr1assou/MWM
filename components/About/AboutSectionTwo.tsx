"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const AboutSectionTwo = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.normalizeScroll(true);

    if (divRef.current) {
      gsap.fromTo(
        divRef.current,
        { x: "-200%" }, // Reduced from -900% to -200%
        { 
          x: "0%",
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: divRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false, // Disable markers in production
          },
        }
      );
    }
  }, []);



  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap-reverse items-center">
          <div className="w-full px-4 lg:w-1/2 overflow-hidden">
            <div 
              ref={divRef}
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[520px] text-center lg:m-0 mt-10 translate-x-[-200%] will-change-transform"
              data-wow-delay=".15s"
              style={{ transform: 'translateZ(0)' }}
            >
              <Image
                src="/images/about/4.png"
                alt="website design and development"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none object-contain"
                priority
              />
              <Image
                src="/images/about/4.png"
                alt="website design and development"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none object-contain"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle
              title="What We Care About?"
              paragraph=""
              mb="44px"
            />
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  High Quality
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We deliver digital excellence with robust mobile and website development, scalable solutions, and flawless design,
                  ensuring high performance and user experiences that drive results.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Affordable Pricing
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Whether you're just starting or scaling your business,
                  our flexible plans ensure you get the best value for your investment. contact us to get the perfect plan tailored to your needs and budget.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Dedicated Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Contact us anytime for assistance. We provide quick responses  to ensure your project is always exactly as you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
