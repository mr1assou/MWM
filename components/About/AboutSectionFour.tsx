"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const AboutSectionFour = () => {
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
              data-wow-delay=".30s"
              style={{ transform: 'translateZ(0)' }}
            >
              <Image
                src="/images/about/3.png"
                alt="website design and development"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none object-contain"
                priority
              />
              <Image
                src="/images/about/3.png"
                alt="website design and development"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none object-contain"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle
              title="Our Expertise"
              paragraph="Our expertise in website design and development spans across US. We provide tailored digital solutions for diverse businesses such as restaurants, startups, SaaS companies, retail shops, and professional services. Our team of skilled developers and designers focuses on creating visually appealing, high-performance websites that meet the unique needs of businesses in these vibrant markets. No matter where you are in US, we deliver professional, results-driven web solutions to help your business grow and succeed online."
              mb="44px"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;
