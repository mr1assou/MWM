"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import NewsLatterBox from "./NewsLatterBox"; // Your other component (assuming it's imported correctly)

const Contact = () => {
  const contactRef = useRef(null); // Reference for the contact section
  const [isVisible, setIsVisible] = useState(false); // To track visibility

  // Function to check if the component is in the viewport
  const checkIfInView = () => {
    if (contactRef.current) {
      const rect = contactRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true); // If the component is in view, set isVisible to true
      }
    }
  };

  // Listen for scroll events and check visibility
  useEffect(() => {
    window.addEventListener("scroll", checkIfInView);
    checkIfInView(); // Check visibility on mount

    return () => {
      window.removeEventListener("scroll", checkIfInView);
    };
  }, []);

  // Trigger GSAP animation when the component becomes visible
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        contactRef.current,
        { opacity: 0, y: 50 }, // Initial state: invisible and slightly down
        {
          opacity: 1,
          y: 0, // Final state: visible and at its original position
          duration: 1,
          ease: "power2.out", // Smooth easing
        }
      );
    }
  }, [isVisible]);

  return (
    <section
      id="contact"
      className="overflow-hidden py-16 md:py-20 lg:py-28"
      ref={contactRef} // Add the ref here
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-full">
            <div className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Boost Your Business with Our Affordable Tech Solutions
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
              Contact Us for Tailored Solutions
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
