"use client"
import Image from "next/image";
import { useParams } from 'next/navigation';
import BlogData from "@/components/projects/blogData";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BlogSidebarPage = () => {
  const params = useParams();
  const matchedService = BlogData.find(service => service.id === Number(params.slug));
  const { image, title, paragraph, todoList } = matchedService;

  // Refs for animation elements
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const paragraphRef = useRef(null)
  const featuresRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Title animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        }
      }
    );

    // Image animation
    gsap.fromTo(imageRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        }
      }
    );

    // Paragraph animation
    gsap.fromTo(paragraphRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
        }
      }
    );

    // Features animation
    gsap.fromTo(featuresRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="pb-[120px] pt-[130px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-12/12">
              <div>
                <h1 ref={titleRef} className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {title}
                </h1>
                <div>
                  <div ref={imageRef} className="mb-10 w-full rounded overflow-hidden relative h-48 sm:h-[500px] 2xl:h-[600px]">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover object-top rounded"
                    />
                  </div>
                  <p ref={paragraphRef} className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {paragraph}
                  </p>

                  {/* Todo List Section */}
                  <div className="mb-10">
                    <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                      Key Features
                    </h2>
                    <div ref={featuresRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {todoList.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col space-y-3 rounded-lg bg-white p-6 shadow-one dark:bg-dark"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p className="text-base font-medium text-black dark:text-white">
                              {item.title}
                            </p>
                          </div>
                          <p className="text-sm text-body-color dark:text-body-color-dark pl-9">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;
