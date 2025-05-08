"use client";

import { useEffect, useRef, useState } from "react";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const SingleBlog = ({ blog ,id}: any) => {
  const { title, image, paragraph } = blog;
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageWrapperRef.current) return;
      const rect = imageWrapperRef.current.getBoundingClientRect();
      if (
        rect.top < window.innerHeight - 5 && // <-- 5px past the viewport
        rect.bottom >= 0 &&
        !animated
      ) {
        setAnimated(true);
        gsap.to(imageWrapperRef.current, {
          paddingBottom: `${(22 / 37) * 100}%`, // aspect-[37/22]
          duration: 0.1,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Set initial aspect ratio to 0
    if (imageWrapperRef.current) {
      gsap.set(imageWrapperRef.current, { paddingBottom: "0%" });
    }
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animated]);

  return (
    <div className="hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark h-[500px]">
      <Link href={`/project_details/${id}`} className="relative block w-full">
        <div
          ref={imageWrapperRef}
          className="relative w-full"
          style={{ paddingBottom: "0%", transition: "padding-bottom 0.7s" }}
        >
          <Image src={image} alt="image" fill style={{ objectFit: "cover" }} />
        </div>
      </Link>
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <Link
            href={`/project_details/${id}`}
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-xl"
          >
            {title}
          </Link>
        </h3>
        <p className="mb-6 pb-6 text-base font-medium text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;