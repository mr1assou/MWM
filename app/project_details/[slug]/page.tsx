"use client"
import Image from "next/image";
import { useParams } from 'next/navigation';
import BlogData from "@/components/projects/BlogData";

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
  const paragraphRef = useRef(null);
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
                      className="object-contain rounded"
                    />
                  </div>

                  <p ref={paragraphRef} className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed whitespace-pre-line space-y-4">
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
                          <p className="text-sm text-body-color dark:text-body-color-dark pl-9 whitespace-pre-line space-y-4">
                            {title === "Showcase Your Digital Skills" && (
                              index === 0 ? "Sleek, modern layout tailored to showcase tech expertise.\n\n" :
                                index === 1 ? "Fully optimized for desktop, tablet, and mobile devices.\n\n" :
                                  index === 2 ? "Dynamic galleries and hover effects for better engagement.\n\n" :
                                    index === 3 ? "Fast load times and smooth, intuitive navigation.\n\n" :
                                      index === 4 ? "Easy updates to projects, blogs, and testimonials.\n\n" :
                                        "Visual style consistent with TechnoVista’s identity."
                            )}
                            {title === "Website Design for CNI" && (
                              index === 0 ? "Custom industrial-themed visuals matching CNI’s identity.\n\n" :
                                index === 1 ? "Optimized for desktop, tablet, and mobile devices.\n\n" :
                                  index === 2 ? "Comprehensive specifications for all offerings.\n\n" :
                                    index === 3 ? "Image previews and descriptions of key projects.\n\n" :
                                      index === 4 ? "Intuitive menu structure for a smooth browsing experience\n\n" :
                                        "Contact form and call-to-action buttons for fast inquiries."
                            )}
                            {title === "ERP Platform" && (
                              index === 0 ? " Centralized view of key business metrics and activities.\n\n" :
                                index === 1 ? "Optimized for use on desktop, tablet, and mobile devices.\n\n" :
                                  index === 2 ? "Separate modules for sales, HR, inventory, and finance.\n\n" :
                                    index === 3 ? "Secure login and permissions for different departments.\n\n" :
                                      index === 4 ? "Automated approvals, reminders, and task assignments.\n\n" :
                                        "Internal messaging and notifications for teams."
                            )}
                            {title === "Integrated Healthcare Management System" && (
                              index === 0 ? "Comprehensive patient records and history tracking\n\n" :
                                index === 1 ? "Automated appointment booking and reminders\n\n" :
                                  index === 2 ? "Secure and compliant electronic health records\n\n" :
                                    index === 3 ? "Automated insurance processing and billing\n\n" :
                                      index === 4 ? "Digital prescription and medication tracking\n\n" :
                                        "Secure video consultations and remote care"
                            )}
                            {title === "Advanced Learning Management System" && (
                              index === 0 ? "Comprehensive course creation and content delivery\n\n" :
                                index === 1 ? "Detailed progress monitoring and assessment tools\n\n" :
                                  index === 2 ? "Organized learning resources and materials\n\n" :
                                    index === 3 ? "Automated grading and performance analytics\n\n" :
                                      index === 4 ? "Integrated messaging and collaboration tools\n\n" :
                                        "Seamless learning experience across devices"
                            )}
                            {title === "Comprehensive Real Estate Management Platform" && (
                              index === 0 ? "Comprehensive property listing and tracking\n\n" :
                                index === 1 ? "Detailed client profiles and interaction history\n\n" :
                                  index === 2 ? "Secure storage and processing of legal documents\n\n" :
                                    index === 3 ? "End-to-end property transaction management\n\n" :
                                      index === 4 ? "Real-time market trends and property valuation\n\n" :
                                        "On-the-go property and client management"
                            )}
                          </p>
                        </div>
                      ))}
                    </div>
                    <h2 className="mt-10 text-2xl font-bold text-black dark:text-white">
                      Project Details
                    </h2>

                    {/* Service Description */}
                    <div className="mt-8 rounded-lg bg-white p-8 shadow-one dark:bg-dark">
                      <p className="mb-4 text-md font-medium leading-relaxed text-body-color whitespace-pre-line space-y-4">
                        {title === 'Showcase Your Digital Skills' &&
                          "- Centralized portfolio database for easy project management and updates\n\n" +
                          "- Dynamic project showcase with filters and interactive hover effects\n\n" +
                          "- Integrated contact form with automated email notifications\n\n" +
                          "- Real-time dashboard to track website traffic and user engagement\n\n" +
                          "- Customizable service pages to highlight offerings and expertise\n\n" +
                          "- Team member profiles with roles, bios, and achievements\n\n" +
                          "- Media gallery for images, videos, and client testimonials\n\n" +
                          "- Reporting tools for tracking project views and client inquiries\n\n" +
                          "- Mobile-friendly design for seamless access across all devices\n\n" +
                          "- Secure data handling with SSL encryption\n\n" +
                          "- Scalable architecture to support future feature expansions\n\n"
                        }
                        {title === "Website Design for CNI" &&
                          "- Centralized product catalog for easy updates and management\n\n" +
                          "- Dedicated project showcase with image galleries and descriptions\n\n" +
                        "-Integrated contact form with automated email routing\n\n" +
                        "- Mobile-optimized design for on-site access by field teams and clients\n\n" +
                        "- High-resolution imagery to highlight product quality and applications\n\n" +
                        "- Quick-access buttons for product line PDFs and technical specs\n\n" +
                        "- Search-friendly structure for improved discoverability\n\n" +
                        "- Consistent branding with industrial color palette and typography\n\n" +
                        "- Cross-browser compatibility for seamless performance\n\n" +
                        "- Secure hosting setup with SSL encryption\n\n" +
                        "- Scalable architecture to accommodate future product and project additions\n\n"
                        }
                        {title === "ERP Platform" &&
                          "- Scalable product catalog management with rich media support\n\n" +
                          "- Advanced search and filtering capabilities for enhanced product discovery\n\n" +
                          "- Secure shopping cart and streamlined checkout process\n\n" +
                          "- Multiple payment gateway integrations and currency support\n\n" +
                          "- Comprehensive order management and fulfillment system\n\n" +
                          "- Customer relationship management (CRM) features for personalized experiences\n\n" +
                          "- Marketing and promotion tools, including discounts, coupons, and loyalty programs\n\n" +
                          "- Detailed analytics and reporting for sales, customer behavior, and inventory\n\n" +
                          "- SEO-friendly architecture for improved online visibility\n\n" +
                          "- Integration with third-party systems like ERP, CRM, and accounting software\n\n" +
                          "- Mobile-responsive design for seamless shopping on any device\n\n" +
                          "- Robust security features for data protection and fraud prevention"
                        }
                        {title === "ll" &&
                          "- Centralized data storage for all business units in one secure platform\n\n" +
                          "- Real-time reporting and analytics for informed decision-making\n\n" +
                          "- Sales management module with lead tracking and order processing\n\n" +
                          "- HR management tools for employee records, attendance, and payroll\n\n" +
                          "- Inventory control with stock alerts and supplier tracking\n\n" +
                          "- Finance module for invoicing, expense management, and budget tracking\n\n" +
                          "- Customizable workflows tailored to Nova’s operational needs\n\n" +
                          "- Cloud-based hosting for accessibility from any location\n\n" +
                          "- Mobile-friendly design to support on-the-go operations\n\n" +
                          "- Data encryption and backup protocols for maximum security\n\n" +
                          "- Scalable architecture to integrate future modules without disruption\n\n"
                        }
                        {title === "Advanced Learning Management System" &&
                          "- Intuitive course creation and content management tools\n\n" +
                          "- Interactive learning modules, quizzes, and assignments\n\n" +
                          "- Progress tracking and performance analytics for students and instructors\n\n" +
                          "- Discussion forums, chat, and collaborative learning features\n\n" +
                          "- Secure user authentication and role-based access\n\n" +
                          "- Certification and badging for course completion\n\n" +
                          "- Integration with external tools and platforms (e.g., video conferencing, plagiarism checkers)\n\n" +
                          "- Mobile-responsive design for learning on the go\n\n" +
                          "- Comprehensive reporting for learner engagement and course effectiveness\n\n" +
                          "- Automated notifications and reminders for assignments and deadlines\n\n" +
                          "- Customizable branding and white-labeling options\n\n" +
                          "- Scalable infrastructure to support a large number of users and courses"
                        }
                        {title === "Comprehensive Real Estate Management Platform" &&
                          "- Centralized property listings with detailed descriptions, photos, and virtual tours\n\n" +
                          "- Client management with profiles, preferences, and communication history\n\n" +
                          "- Automated lead capture and distribution\n\n" +
                          "- Document management for contracts, agreements, and legal papers\n\n" +
                          "- Transaction management from listing to closing\n\n" +
                          "- Financial tracking, including commissions, expenses, and revenue\n\n" +
                          "- Integrated mapping and neighborhood information\n\n" +
                          "- Analytics and reporting for market trends, property performance, and agent productivity\n\n" +
                          "- Collaboration tools for agents, brokers, and clients\n\n" +
                          "- Mobile app for on-the-go property searches and client interactions\n\n" +
                          "- Secure data storage and compliance with real estate regulations\n\n" +
                          "- Customizable workflows and automation for efficiency"
                        }
                      </p>
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
