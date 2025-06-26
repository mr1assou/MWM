"use client";

import { useEffect } from 'react';
import gsap from 'gsap';

const HeroAnimations = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.fromTo('.hero-image-container', { height: 0 }, { height: '100%', duration: 1 })
      .fromTo('.hero-title', { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 0.5 }, "-=0.2")
      .fromTo('.hero-subtitle', { x: '100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 0.5 }, "<")
      .fromTo('.hero-button', { y: '100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.5 }, "-=0.3");

    gsap.to('.hero-arrow', {
      x: 10,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return null; // This component does not render anything itself
};

export default HeroAnimations; 