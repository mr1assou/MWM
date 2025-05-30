"use client"

import Image from "next/image";
import { useParams } from 'next/navigation';
import ServiceData from '../../../components/Services/ServiceData';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BlogSidebarPage = () => {
  const params = useParams();
  const matchedService = ServiceData.find(service => service.id === Number(params.slug));
  const { image, title, todoList, paragraph } = matchedService;
  
  // Refs for animation elements
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);
  const featuresRef = useRef(null);
  const paragraphRef = useRef(null);

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

    // Description animation
    gsap.fromTo(descriptionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: descriptionRef.current,
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[130px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-11/12">
              <div>
                <h1 ref={titleRef} className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {title}
                </h1>
                <div>
                  <div ref={imageRef} className="mb-10 w-full overflow-hidden rounded">
                    <div className="mb-10 w-full rounded overflow-hidden relative h-48 sm:h-[500px] 2xl:h-[600px]">
                      <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover object-center rounded"
                      />
                    </div>
                  </div>
                  
                  {/* Todo List Section */}
                  <div className="mb-10">
                    <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                      What We Do
                    </h2>
                    
                    {/* Service Description */}
                    <div ref={descriptionRef} className="mb-8 rounded-lg bg-white p-8 shadow-one dark:bg-dark">
                      <p className="mb-4 text-lg font-medium leading-relaxed text-body-color">
                        {title === "Custom Web Development" && 
                          "We specialize in creating bespoke web solutions that perfectly align with your business goals. Our team of expert developers combines cutting-edge technologies with industry best practices to deliver websites that are not just visually appealing but also high-performing, secure, and scalable. From responsive design to advanced functionality, we ensure your web presence stands out in the digital landscape."
                        }
                        {title === "Mobile App Development" && 
                          "Our mobile app development service focuses on creating powerful, user-friendly applications that work seamlessly across all devices. Using modern frameworks like Flutter and React Native, we build apps that offer native-like performance while maintaining cross-platform compatibility. We prioritize user experience, offline functionality, and real-time features to keep your users engaged."
                        }
                        {title === "E-Commerce Platforms" && 
                          "Transform your business with our comprehensive e-commerce solutions. We build secure, scalable online stores that handle everything from product management to payment processing. Our platforms are designed to provide a seamless shopping experience while giving you complete control over your online business operations."
                        }
                        {title === "UI/UX Design" && 
                          "We create intuitive and engaging user experiences through thoughtful design. Our UI/UX process combines user research, creative design, and usability testing to deliver interfaces that not only look great but also provide exceptional user experiences. We focus on accessibility, usability, and brand consistency across all touchpoints."
                        }
                        {title === "API Development & Integration" && 
                          "Our API development service ensures seamless communication between different systems and services. We build secure, well-documented APIs that follow industry best practices and standards. Whether you need to connect existing systems or create new integrations, our team delivers robust solutions that scale with your business."
                        }
                        {title === "Maintenance & Scalability" && 
                          "Keep your digital assets running smoothly with our comprehensive maintenance and scalability services. We provide 24/7 monitoring, regular updates, and proactive maintenance to ensure your systems remain secure and performant. Our team helps you plan for growth and implement scalable solutions that grow with your business."
                        }
                      </p>
                    </div>

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
                              {item}
                            </p>
                          </div>
                          <p className="text-sm text-body-color dark:text-body-color-dark pl-9">
                            {title === "Custom Web Development" && (
                              index === 0 ? "Creating unique, brand-aligned websites with modern design principles and best practices." :
                              index === 1 ? "Ensuring your website looks and functions perfectly across all devices and screen sizes." :
                              index === 2 ? "Implementing advanced caching, code optimization, and CDN integration for lightning-fast loading." :
                              index === 3 ? "Setting up SSL certificates, implementing security headers, and protecting against common vulnerabilities." :
                              index === 4 ? "Optimizing site structure, meta tags, and content for better search engine visibility." :
                              "Integrating user-friendly CMS solutions for easy content management and updates."
                            )}
                            {title === "Mobile App Development" && (
                              index === 0 ? "Building apps that work seamlessly across iOS and Android platforms using Flutter/React Native." :
                              index === 1 ? "Developing native applications with platform-specific features and optimizations." :
                              index === 2 ? "Implementing robust offline capabilities and data synchronization." :
                              index === 3 ? "Setting up real-time notifications and alerts for better user engagement." :
                              index === 4 ? "Optimizing app store listings and metadata for better visibility and downloads." :
                              "Tracking app performance metrics and user behavior for continuous improvement."
                            )}
                            {title === "E-Commerce Platforms" && (
                              index === 0 ? "Creating a complete online store with product catalog and shopping cart functionality." :
                              index === 1 ? "Integrating secure payment gateways and multiple payment options." :
                              index === 2 ? "Setting up real-time inventory tracking and stock management." :
                              index === 3 ? "Implementing automated order processing and fulfillment workflows." :
                              index === 4 ? "Creating customer accounts with order history and saved preferences." :
                              "Setting up detailed sales reports and customer analytics dashboards."
                            )}
                            {title === "UI/UX Design" && (
                              index === 0 ? "Conducting user interviews and analyzing behavior patterns for better design decisions." :
                              index === 1 ? "Creating interactive wireframes and clickable prototypes for user testing." :
                              index === 2 ? "Designing visually appealing interfaces with attention to brand guidelines." :
                              index === 3 ? "Gathering and implementing user feedback for continuous improvement." :
                              index === 4 ? "Creating reusable design components and style guides for consistency." :
                              "Ensuring designs meet WCAG standards for better accessibility."
                            )}
                            {title === "API Development & Integration" && (
                              index === 0 ? "Building scalable and well-documented RESTful APIs following best practices." :
                              index === 1 ? "Implementing authentication, authorization, and data encryption." :
                              index === 2 ? "Connecting your systems with third-party services and platforms." :
                              index === 3 ? "Creating comprehensive API documentation with examples and usage guidelines." :
                              index === 4 ? "Optimizing API response times and implementing caching strategies." :
                              "Setting up automated testing and monitoring for API reliability."
                            )}
                            {title === "Maintenance & Scalability" && (
                              index === 0 ? "Implementing 24/7 monitoring systems with real-time alerts and notifications." :
                              index === 1 ? "Regularly updating security patches and implementing new security measures." :
                              index === 2 ? "Optimizing system performance and resource utilization." :
                              index === 3 ? "Setting up automated backup systems and disaster recovery plans." :
                              index === 4 ? "Providing round-the-clock technical support and issue resolution." :
                              "Planning and implementing infrastructure scaling for future growth."
                            )}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p ref={paragraphRef} className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {paragraph}
                  </p>
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
