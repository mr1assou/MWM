"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
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
        height: "100%",
        duration: 1,
        ease: "power2.out",
      }
    )
      .fromTo(
        titleRef.current,
        { x: "-400%" },
        {
          x: "0%",
          duration: 0.5,
          ease: "power2.out",
          immediateRender: false,
        }
      )
      .fromTo(
        subtitleRef.current,
        { x: "400%" },
        {
          x: "0%",
          duration: 0.5,
          ease: "power2.out",
          immediateRender: false,
        }
      )
      .fromTo(
        buttonRef.current,
        { y: "1300%" },
        {
          y: "0%",
          duration: 0.5,
          ease: "power2.out",
          immediateRender: false,
        }
      );

    gsap.to(arrowRef.current, {
      x: 10,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pt-[100px] pb-16 md:pt-[140px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[200px] 2xl:pb-[180px] min-h-screen"
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-[-10] overflow-hidden h-0"
      >
        <Image
          src="/images/hero/5.jpg"
          alt="Professional Website Design & Development"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="container px-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-4xl space-y-6">
            {/* Title */}
            <h1
              ref={titleRef}
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug sm:leading-tight md:leading-tight -translate-x-[400%]"
            >
              Stunning,High Converting Websites to Grow Your Business Across{" "}

              <span className="inline-flex items-center gap-3">
                United States
                <Image
                  src="/images/logo/united_state.png"
                  alt="united state"
                  width={40}
                  height={40}
                  className="inline-block"
                />
              </span>
            </h1>

            {/* Subtitle */}
            <h2
              ref={subtitleRef}
              className="text-sm sm:text-base md:text-lg text-body-color-dark translate-x-[400%]"
            >
              Website development agency in United States, specializing in custom website
              agency and development, and professional web solutions for businesses across the
              country.
            </h2>

            {/* CTA Button */}
            <div
              ref={buttonRef}
              className="translate-y-[1300%] flex justify-center"
            >
              <Link
                href="/contact/0"
                className="group flex items-center gap-2 rounded-sm bg-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white hover:bg-primary/80 transition"
              >
                Order Your Website
                <FaRocket />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
