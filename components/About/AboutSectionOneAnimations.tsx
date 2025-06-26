"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSectionOneAnimations = () => {
  useEffect(() => {
    gsap.fromTo(
      '.about-image',
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.about-image',
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return null;
};

export default AboutSectionOneAnimations; 