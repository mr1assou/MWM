"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { FaRocket } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLSpanElement | null>(null);

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // NEW: detect mobile (<= 767px)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile("matches" in e ? e.matches : (e as MediaQueryList).matches);
    onChange(mq);
    mq.addEventListener?.("change", onChange as any);
    return () => mq.removeEventListener?.("change", onChange as any);
  }, []);

  useEffect(() => {
    setMounted(true);
    const tl = gsap.timeline();
    tl.fromTo(imageRef.current, { height: 0 }, { height: "100%", duration: 1, ease: "power2.out" })
      .fromTo(titleRef.current, { x: "-400%" }, { x: "0%", duration: 0.5, ease: "power2.out", immediateRender: false })
      .fromTo(subtitleRef.current, { x: "400%" }, { x: "0%", duration: 0.5, ease: "power2.out", immediateRender: false })
      .fromTo(buttonRef.current, { y: "1300%" }, { y: "0%", duration: 0.5, ease: "power2.out", immediateRender: false });

    gsap.to(arrowRef.current, { x: 10, duration: 0.8, repeat: -1, yoyo: true, ease: "power1.inOut" });
  }, []);

  const openModal = useCallback(() => {
    setOpen(true);
    setTimeout(() => videoRef.current?.play().catch(() => {}), 50);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  // lock scroll + ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeModal]);

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pt-[100px] pb-16 md:pt-[140px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[200px] 2xl:pb-[180px] min-h-screen"
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0 z-[-10] overflow-hidden h-0">
        <Image
          src="/images/hero/5.jpg"
          alt="Professional Website Design & Development"
          fill
          className="object-cover object-left sm:object-bottom brightness-50"
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
              Website Design and Development Agency for Businesses Across All Industries in the{" "}
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
              We provide robust websites and software solutions, specializing in crafting custom,
              high-performance websites and delivering professional digital strategies that help businesses nationwide.
            </h2>

            {/* CTA Buttons */}
            <div ref={buttonRef} className="translate-y-[1300%] flex justify-center gap-4">
              <Link
                href="/contact/0"
                className="text-xs group flex items-center gap-2 rounded-sm bg-primary px-6 sm:px-8 py-3 sm:py-4 sm:text-base font-semibold text-white hover:bg-primary/80 transition"
              >
                Order Website
                <FaRocket className="text-md sm:text-2xl" />
              </Link>

              <button
                onClick={openModal}
                className="flex items-center gap-2 text-xs rounded-xs bg-black px-8 py-4 sm:text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
              >
                <MdOutlineOndemandVideo className="text-md sm:text-2xl" />
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal via portal */}
      {mounted && open && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-title"
          onClick={closeModal}
          className="fixed inset-0 flex items-center justify-center bg-black sm:bg-black/90"
          style={{ zIndex: 2147483647 }}
        >
          <div className="relative w-screen h-screen" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              aria-label="Close video"
              className="absolute top-[7%] right-7 sm:top-7 sm:right-7  inline-flex items-center justify-center rounded-full bg-white/90 hover:bg-white w-10 h-10"
              style={{ zIndex: 2147483647 }}
            >
              <X className="w-5 h-5 text-black" />
            </button>

            {/* Desktop/Tablet: fullscreen, no controls. Mobile: controls + fullscreen allowed */}
            <video
              ref={videoRef}
              src="https://ydw3izl8ia5ysu5h.public.blob.vercel-storage.com/mwmtech05%20%281%29.mp4"
              className={
                isMobile
                  ? "w-full h-full max-w-full max-h-full object-contain"
                  : "w-screen h-screen object-cover"
              }
              autoPlay
              playsInline
              preload="metadata"
              {...(isMobile
                ? {
                    controls: false,
                    controlsList: "nodownload noremoteplayback", // allow fullscreen
                    disablePictureInPicture: false as any,
                  }
                : {
                    controls: false,
                    controlsList: "nodownload noremoteplayback nofullscreen",
                    disablePictureInPicture: true as any,
                  })}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Hero;

