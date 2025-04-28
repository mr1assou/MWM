"use client";

import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Star icon SVG
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, alt, image, content, designation } = testimonial;
  const testimonialRef = useRef(null); // Reference for this testimonial
  const [isVisible, setIsVisible] = useState(false); // To track visibility of this testimonial

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>
    );
  }

  // Function to check if the component is in the viewport
  const checkIfInView = () => {
    if (testimonialRef.current) {
      const rect = testimonialRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true); // Set to true when the testimonial is in the viewport
      }
    }
  };

  // Scroll listener and visibility check
  useEffect(() => {
    window.addEventListener("scroll", checkIfInView);
    checkIfInView(); // Check visibility on mount

    return () => {
      window.removeEventListener("scroll", checkIfInView);
    };
  }, []);

  // GSAP animation when the testimonial becomes visible
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        testimonialRef.current,
        { opacity: 0, y: 50 }, // Initial state (invisible and slightly below)
        {
          opacity: 1,
          y: 0, // Animate to visible and original position
          duration: 1,
          ease: "power2.out", // Smooth easing
        }
      );
    }
  }, [isVisible]);

  return (
    <div className="w-full" ref={testimonialRef}>
      <div
        className="wow fadeInUp shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-sm bg-white p-8 duration-300 hover:shadow-one dark:bg-dark lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          “{content}
        </p>
        <div className="flex items-center">
          <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            <Image src={image} alt={alt} fill className="object-cover" />
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h3>
            <p className="text-sm text-body-color">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
