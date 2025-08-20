"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { FaRocket } from "react-icons/fa";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  // (Optional) if you ever want to tweak behavior based on mount
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tl = gsap.timeline();
    tl.fromTo(
      imageRef.current,
      { height: 0 },
      { height: "100%", duration: 1, ease: "power2.out" }
    )
      .fromTo(
        titleRef.current,
        { x: "-400%" },
        { x: "0%", duration: 0.5, ease: "power2.out", immediateRender: false }
      )
      .fromTo(
        subtitleRef.current,
        { x: "400%" },
        { x: "0%", duration: 0.5, ease: "power2.out", immediateRender: false }
      )
      .fromTo(
        buttonRef.current,
        { y: "1300%" },
        { y: "0%", duration: 0.5, ease: "power2.out", immediateRender: false }
      );
  }, []);

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pt-[100px] pb-16 md:pt-[140px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[200px] 2xl:pb-[180px] min-h-screen"
    >
      {/* Background Image (kept as in your original) */}
      <div ref={imageRef} className="absolute inset-0 z-[-10] overflow-hidden h-0">
        <Image
          src="/images/hero/5.jpg"
          alt="website design and development services"
          fill
          className="object-cover object-left sm:object-bottom brightness-50"
          priority
        />
      </div>

      <div className="container px-4">
        {/* 
          Mobile: stacked (flex-col)
          Desktop (md+): two columns (md:flex-row)
        */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
          {/* LEFT: Title + Subtitle + CTA */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <div className="w-full max-w-3xl mx-auto md:mx-0 space-y-6">
              {/* Title */}
              <h1
                ref={titleRef}
                className="mt-7 sm:mt-0 text-2xl  sm:text-2xl md:text-lg lg:text-xl xl:text-3xl  font-bold text-white leading-snug sm:leading-tight md:leading-tight -translate-x-[400%]"
              >
                Website Design and Development Company for Businesses Across All Industries in the{" "}
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
                className="text-sm sm:text-xs  lg:text-sm xl:text-xl text-body-color-dark translate-x-[400%]"
              >
                We provide custom websites and software solutions, specializing in crafting robust,
                high-performance websites and delivering professional digital strategies that help businesses nationwide.
              </h2>

              {/* CTA */}
              <div ref={buttonRef} className="translate-y-[1300%] flex md:justify-start justify-center">
                <Link
                  href="/contact/0"
                  className="text-xs group inline-flex items-center gap-2 rounded-sm bg-primary px-6 sm:px-8 py-3 sm:py-4 sm:text-base md:text-xs lg:text-sm xl:text-base font-semibold text-white hover:bg-primary/80 transition"
                >
                  Order Now
                  <FaRocket className="text-md sm:text-base md:text-xs lg:text-sm xl:text-base" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: Inline Video (shows on desktop to the right; on mobile it appears below) */}
          <div className="w-0 md:w-1/2">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden ring-1 ring-white/20 shadow-2xl ">
              <video
                src="https://ydw3izl8ia5ysu5h.public.blob.vercel-storage.com/mwmtech052.mp4"
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/images/logo/lg.png"  // 👈 Add poster image here
                onContextMenu={(e) => e.preventDefault()}
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
