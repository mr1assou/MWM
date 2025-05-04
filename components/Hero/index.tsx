"use client"

import Link from "next/link";
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  
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
    )
    
  }, []);

  return (
    <>
      <section
        id="home"
        className=" relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]  md:h-[100vh]
        h-screen"
      >
        <div
          ref={imageRef}
          className="absolute inset-0 z-[-10] overflow-hidden h-0"
        >
          <Image src="/images/hero/5.png" alt="website development agency" fill className="object-cover  brightness-50 " />
        </div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center  xl:mt-3 2xl:mt-20"
                data-wow-delay=".2s"
              >
                <h1 ref={titleRef} className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight -translate-x-[400%]">
                  Mobile And Website development That Drive Your Business Forward
                </h1>
                <h2 ref={subtitleRef} className="mb-12 text-base !leading-relaxed text-body-color-dark sm:text-lg md:text-xl translate-x-[400%]">
                  We build custom website and mobile app solutions for businesses in Melbourne, Sydney,Perth and across Australia, designed to be smart, scalable, and results-driven.
                </h2>
                <div ref={buttonRef} className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 translate-y-[1300%]">
                  <Link
                    href="/contact/0"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Get Started
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
