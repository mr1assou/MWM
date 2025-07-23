"use client"

import Link from "next/link";
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FaRocket } from "react-icons/fa";

const Hero = () => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      { height: 0 },
      {
        height: '100%',
        duration: 1,
        ease: 'power2.out'
      }
    ).fromTo(
      titleRef.current,
      {
        x: '-400%',
      },
      {
        x: '0%',
        duration: 0.5,
        ease: 'power2.out',
        immediateRender: false,
      }
    ).fromTo(
      subtitleRef.current,
      {
        x: '400%',
      },
      {
        x: '0%',
        duration: 0.5,
        ease: 'power2.out',
        immediateRender: false,
      }
    ).fromTo(
      buttonRef.current,
      {
        y: '1300%',
      },
      {
        y: '0%',
        duration: 0.5,
        ease: 'power2.out',
        immediateRender: false,
      }
    );

    // Arrow animation
    gsap.to(arrowRef.current, {
      x: 10,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, []);

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] h-screen"
      >
        <div
          ref={imageRef}
          className="absolute inset-0 z-[-10] overflow-hidden h-0"
        >
          <Image
            src="/images/hero/5.png"
            alt="Professional Website Design & Development  in Sydney,Peth,Adelaide,Brisbane"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto 
                sm:max-w-[800px] w-full text-start sm:text-center  2xl:mt-20"
                data-wow-delay=".2s"
              >
                <h1 ref={titleRef} className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight -translate-x-[400%]">
                  #1 Professional Website Design and Development for  Businesses Across{' '}
                  <span className="inline-flex items-center ">
                    United States 
                  <Image src="/images/logo/united_state.png" alt="united state" width={50} height={50} className="ml-5"/>
                  </span>
                </h1>

                <h2 ref={subtitleRef} className="mb-12 text-base !leading-relaxed text-body-color-dark sm:text-lg md:text-xl translate-x-[400%]">
                  Leading website development company in United States, specializing in custom website design and development, and professional web solutions for businesses across the country.
                </h2>
                <div ref={buttonRef} className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 translate-y-[1300%]">
                  <Link
                    href="/contact/0"
                    className="group rounded-sm bg-primary px-8 py-4 text-xs sm:text-lg font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 flex items-center gap-2"
                  >
                    Order Your Website
                    <FaRocket />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
