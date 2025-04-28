"use client";

import { useEffect, useRef, useState } from "react";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  const blogRef = useRef(null); // Create a ref for the blog section
  const [isVisible, setIsVisible] = useState(false); // Track visibility

  // Function to check if the component is in the viewport
  const checkIfInView = () => {
    if (blogRef.current) {
      const rect = blogRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true); // Set to true if it's in view
      }
    }
  };

  // UseEffect to check visibility on scroll
  useEffect(() => {
    window.addEventListener("scroll", checkIfInView);
    checkIfInView(); // Check visibility on mount

    return () => {
      window.removeEventListener("scroll", checkIfInView); // Cleanup on unmount
    };
  }, []);

  // Trigger GSAP animation when the component comes into view
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        blogRef.current,
        { opacity: 0, y: 50 }, // Start with hidden and slightly lower position
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" } // Animate to visible and original position
      );
    }
  }, [isVisible]);

  return (
    <div
      ref={blogRef}
      className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
      data-wow-delay=".1s"
    >
      <Link href="/blog-sidebar" className="relative block aspect-[37/22] w-full">
        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
          {tags[0]}
        </span>
        <Image src={image} alt="image" fill />
      </Link>
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <Link
            href="/blog-sidebar"
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {paragraph}
        </p>
        <div className="flex items-center">
          <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <div className="mr-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src={author.image} alt="author" fill />
              </div>
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                By {author.name}
              </h4>
              <p className="text-xs text-body-color">{author.designation}</p>
            </div>
          </div>
          <div className="inline-block">
            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">Date</h4>
            <p className="text-xs text-body-color">{publishDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
