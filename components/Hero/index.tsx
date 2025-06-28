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
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] md:h-[100vh] h-screen"
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
                  Professional Website Design and Development for  Businesses Across{' '}
                  <span className="inline-flex items-center ">
                    Australia
                    <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="70" height="50" viewBox="0 0 2048 2048">
                      <defs>
                        <style>{`.fil3{fill:#fafafa}.fil2{fill:#e1464a;fill-rule:nonzero}`}</style>
                      </defs>
                      <g id="Layer_x0020_1">
                        <path style={{ fill: '#00008b' }} d="M255.999 562.744h1536v922.513h-1536z" />
                        <path style={{ fill: '#fafafa', fillRule: 'nonzero' }} d="M255.999 693.171h165.133l-165.133-82.863v-47.564h94.486l230.993 115.147V562.744h130.087v115.147l231.019-115.147h95.296v47.564l-165.952 82.863h165.952v130.532H871.928l165.952 82.85v47.599h-95.296l-231.019-115.16v115.16H581.478v-115.16l-230.993 115.16h-94.486v-47.599l165.133-82.85H255.999z" />
                        <path className="fil2" d="M976.415 562.746 715.437 693.265h62.478l259.965-130.519zM1037.87 954.15 777.632 823.697h62.745l197.493 99.349zM517.476 693.265 255.999 562.746v31.169l198.456 99.35zM516.937 823.699 255.999 954.152h62.438l260.978-130.453z" />
                        <path className="fil2" d="M255.999 720.252h353.203V562.744h76.434v157.508h352.244v76.435H685.636v157.455h-76.434V796.687H255.999z" />
                        <path className="fil3" d="m776.111 1261.48-59.833-35.6 38.447-58.07-65.141 24.72-21.552-66.49-21.149 66.49-65.307-24.72 38.614 58.07-59.999 35.6 69.548 6.04-9.549 69.03 47.842-50.5 48.246 50.5-9.55-69.03zM1424.46 1312.94l33.24-2.85-28.5-16.93 18.28-27.68-31.02 11.71-10.36-31.63-9.97 31.63-31.02-11.71 18.3 27.68-28.5 16.93 33.06 2.85-4.56 32.87 22.69-24.09 23.1 24.09zM1273.11 1017.91l-28.49-16.93 18.29-27.757-31.03 11.802-10.11-31.599-10.21 31.599-31.03-11.802 18.3 27.757-28.5 16.93 33.07 2.79-4.57 32.94 22.94-24.09 22.85 24.09-4.57-32.94zM1493.12 1087.23l16.16-13.71-21.13-1.55-8.1-19.72-7.99 19.72-21.22 1.55 16.24 13.71-4.98 20.69 17.95-11.26 18.05 11.26zM1588.56 971.553l33.22-2.938-28.65-16.86 18.52-27.678-31.26 11.754-10.04-31.587-10.12 31.587-31.03-11.754 18.29 27.678-28.57 16.86 33.15 2.938-4.58 32.937 22.86-24.122 22.94 24.122zM1457.7 817.99l-28.5-16.979 18.28-27.594-31.02 11.718-10.36-31.634-9.97 31.634-31.02-11.718 18.3 27.594-28.5 16.979 33.06 2.903-4.56 32.819 22.69-24.005 23.1 24.005-4.74-32.819z" />
                      </g>
                      <path style={{ fill: 'none' }} d="M0 0h2048v2048H0z" />
                    </svg>
                  </span>
                </h1>

                <h2 ref={subtitleRef} className="mb-12 text-base !leading-relaxed text-body-color-dark sm:text-lg md:text-xl translate-x-[400%]">
                  Leading website development company in Australia, specializing in custom website design, and professional web solutions for businesses in Sydney, Perth,Brisbane,Adelaide and across Australia.
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
