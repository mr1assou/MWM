"use client";

import { Feature } from "@/types/feature";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  const featureRef = useRef(null); // Create a ref to target the element
  const [isVisible, setIsVisible] = useState(false); // To track if the component is in view

  // Function to check if the component is in the viewport
  const checkIfInView = () => {
    if (featureRef.current) {
      const rect = featureRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true); // If the element is in view, set the state to true
      }
    }
  };

  // Animate when the component is in view
  useEffect(() => {
    // Listen for scroll events
    window.addEventListener("scroll", checkIfInView);

    // Check the component's visibility on mount
    checkIfInView();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", checkIfInView);
    };
  }, []);

  // Trigger GSAP animation when the component becomes visible
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        featureRef.current,
        { opacity: 0, y: 50 }, // Initial state (invisible and slightly below)
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" } // Animation to visible and original position
      );
    }
  }, [isVisible]);

  return (
    <div ref={featureRef} className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
