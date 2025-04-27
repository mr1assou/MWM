"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  const sectionRef = useRef(null); // Create a ref to target the element
  const [isVisible, setIsVisible] = useState(false); // To track if the component is in view

  // Function to check if the component is in the viewport
  const checkIfInView = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
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
        sectionRef.current,
        { opacity: 0, y: 50 }, // Initial state (invisible and slightly below)
        { opacity: 1, y: 0, duration:1, ease: "power2.out" } // Animation to visible and original position
      );
    }
  }, [isVisible]);

  return (
    <div
      ref={sectionRef}
      className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
      data-wow-delay=".1s"
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
        {title}
      </h2>
      <h2 className="text-base !leading-relaxed text-body-color md:text-lg">
        {paragraph}
      </h2>
    </div>
  );
};

export default SectionTitle;
