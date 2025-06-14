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
                      className="object-cover object-top rounded"
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
                            {title === "Comprehensive Gym Management System" && (
                              index === 0 ? "Automated member registration, renewal, and access control systems\n\n" :
                                index === 1 ? "Intelligent class booking and instructor management platform\n\n" :
                                  index === 2 ? "Secure payment gateway with automated billing and invoicing\n\n" :
                                    index === 3 ? "Real-time monitoring of gym equipment usage and maintenance\n\n" :
                                      index === 4 ? "Comprehensive reporting and member engagement metrics\n\n" :
                                        "Seamless mobile experience for members and staff"
                            )}
                            {title === "Intelligent Hotel Booking Mobile Application" && (
                              index === 0 ? "Instant room availability and reservation management\n\n" :
                                index === 1 ? "Secure payment gateway with multiple currency support\n\n" :
                                  index === 2 ? "Comprehensive guest profile and preference tracking\n\n" :
                                    index === 3 ? "Automated room allocation and housekeeping coordination\n\n" :
                                      index === 4 ? "Real-time occupancy and revenue analytics\n\n" :
                                        "Streamlined digital check-in and key management"
                            )}
                            {title === "Enterprise-Grade E-Commerce Platform" && (
                              index === 0 ? "Real-time stock tracking and automated reordering\n\n" :
                                index === 1 ? "Streamlined order fulfillment and shipping integration\n\n" :
                                  index === 2 ? "Comprehensive customer profiles and purchase history\n\n" :
                                    index === 3 ? "Secure multi-currency payment processing\n\n" :
                                      index === 4 ? "Detailed sales and customer behavior analytics\n\n" :
                                        "Responsive design for seamless mobile shopping"
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
                      <p className="mb-4 text-lg font-medium leading-relaxed text-body-color whitespace-pre-line space-y-4">
                        {title === 'Comprehensive Gym Management System' &&
                          "- Centralized member database for easy management and tracking\n\n" +
                          "- Automated class scheduling, booking, and attendance tracking\n\n" +
                          "- Integrated payment gateway for secure membership fees and service payments\n\n" +
                          "- Real-time dashboard for key metrics like membership growth and revenue\n\n" +
                          "- Customizable workout plans and progress tracking for members\n\n" +
                          "- Staff management and payroll integration for streamlined operations\n\n" +
                          "- Inventory management for gym equipment and merchandise\n\n" +
                          "- Reporting and analytics for business insights and decision-making\n\n" +
                          "- Mobile app integration for member self-service and engagement\n\n" +
                          "- Secure data storage and GDPR compliance\n\n" +
                          "- Scalable architecture to support growing member bases\n\n"
                        }
                        {title === "Intelligent Hotel Booking Mobile Application" &&
                          "- Seamless search and booking experience for various hotel types\n\n" +
                          "- Real-time availability and pricing updates\n\n" +
                          "- Secure in-app payment processing with multiple options\n\n" +
                          "- Personalized recommendations based on user preferences and past bookings\n\n" +
                          "- Integrated maps and navigation for easy hotel location\n\n" +
                          "- In-app chat support and concierge services\n\n" +
                          "- Loyalty program integration for exclusive offers and rewards\n\n" +
                          "- Push notifications for booking confirmations, check-in reminders, and special deals\n\n" +
                          "- Multi-language support for global users\n\n" +
                          "- User reviews and ratings for informed decisions\n\n" +
                          "- Offline access to booking details and travel itineraries\n\n" +
                          "- Robust security measures to protect personal and payment data"
                        }
                        {title === "Enterprise-Grade E-Commerce Platform" &&
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
                        {title === "Integrated Healthcare Management System" &&
                          "- Centralized patient records, including medical history, prescriptions, and lab results\n\n" +
                          "- Automated appointment scheduling, reminders, and patient portal access\n\n" +
                          "- Electronic prescribing and medication management system\n\n" +
                          "- Secure communication tools for doctors, nurses, and patients\n\n" +
                          "- Integrated billing and insurance claim processing\n\n" +
                          "- Lab integration for seamless ordering and result delivery\n\n" +
                          "- Inventory management for medical supplies and equipment\n\n" +
                          "- Reporting and analytics for patient outcomes, resource utilization, and operational efficiency\n\n" +
                          "- Telemedicine capabilities for virtual consultations\n\n" +
                          "- Compliance with HIPAA and other healthcare regulations\n\n" +
                          "- Role-based access control for data security and privacy\n\n" +
                          "- Scalable architecture to support large healthcare organizations"
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
