"use client"

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionThree = ({ value }) => {
  
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  const divRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.normalizeScroll(true);

    if (divRef.current) {
      gsap.fromTo(
        divRef.current,
        { x: "200%" },
        {
          x: "0%",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: divRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false,
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Crafted for Startups, SaaS, Businesses, and Individuals in US."
                paragraph="Our website design and development services are expertly crafted for startups, SaaS companies, businesses, and individuals across United States. We specialize in creating responsive, user-centric websites that help you stand out in a competitive market. Whether you need a sleek website for your SaaS product, an engaging online presence for your startup, or a professional site to showcase your business, our tailored solutions deliver exceptional performance and value. Partner with us to grow your brand with affordable, high-quality web design and development services designed specifically for the US market."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
           
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 overflow-x-hidden">
              <div
                ref={divRef}
                className="wow fadeInUp relative mx-auto mb-12 aspect-[35/24]  max-w-[500px] text-center lg:m-0 translate-x-[200%] will-change-transform"
                data-wow-delay=".30s"
                style={{ transform: 'translateZ(0)' }}
              >
                <Image
                  src="/images/about/5.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none object-cover"
                  priority
                />
                <Image
                  src="/images/about/5.png"
                  alt="website development company"
                  fill
                  className="drop-shadow-three mx-auto hidden max-w-full dark:block dark:drop-shadow-none lg:mr-0 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
