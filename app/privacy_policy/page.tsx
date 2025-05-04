import RelatedPost from "@/components/projects/RelatedPost";
import SharePost from "@/components/projects/SharePost";
import TagButton from "@/components/projects/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MWM Tech",
  description: "Our commitment to protecting your privacy and personal data",
};

const BlogSidebarPage = () => {
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[150px] bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-10/12">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                <h1 className="text-4xl font-bold leading-tight text-black dark:text-white mb-8">
                  Privacy Policy
                </h1>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
                  At MWM Tech, we value your privacy and are committed to safeguarding the personal information you share with us. This Privacy Policy outlines how we collect, use, and protect your data when you interact with our website and services.
                </p>
                
                <div className="space-y-8">
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      1. Information We Collect
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      We collect various types of information from you when you use our website, including:
                    </p>
                    <ul className="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li className="text-base">
                        Personal Information: Name, email address, phone number, and company details when you fill out forms or request services.
                      </li>
                      <li className="text-base">
                        Usage Data: Information about how you access and use our website, including browser type, pages visited, and time spent on each page.
                      </li>
                    </ul>
                  </div>

                  <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      2. How We Use Your Information
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      We use the information we collect in the following ways:
                    </p>
                    <ul className="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li className="text-base">
                        To respond to your inquiries: We use your personal information to contact you regarding your questions, quotes, or requests for services.
                      </li>
                      <li className="text-base">
                        To improve our services: We analyze user behavior on our site to improve content, user experience, and service offerings.
                      </li>
                      <li className="text-base">
                        To send promotional or service-related communications: With your consent, we may send emails about new features, services, or special offers.
                      </li>
                    </ul>
                  </div>

                  <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      3. Data Sharing and Third Parties
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      We do not sell or rent your personal data to third parties. However, we may share your information with trusted third parties for specific purposes, such as:
                    </p>
                    <ul className="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li className="text-base">
                        Payment processors: If you make a payment through our site, your payment information will be processed by secure payment gateways.
                      </li>
                      <li className="text-base">
                        Service providers: We may share your data with third-party services like email marketing tools or cloud storage providers for efficient communication and data storage.
                      </li>
                    </ul>
                  </div>

                  <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      4. Cookies and Tracking Technologies
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      We use cookies and tracking technologies to improve your browsing experience, analyze site performance, and optimize our services:
                    </p>
                    <ul className="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li className="text-base">
                        Cookies: Small files stored on your device that help us remember your preferences and actions across pages.
                      </li>
                      <li className="text-base">
                        Google Analytics: A service that tracks website usage and helps us measure website traffic and user interactions.
                      </li>
                      <li className="text-base">
                        Other Tracking Tools: We may use additional services to track metrics such as the effectiveness of our marketing campaigns.
                      </li>
                    </ul>
                  </div>

                  <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      5. Data Security
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      At MWM Tech, we prioritize the security of your personal data by employing various technical and organizational measures:
                    </p>
                    <ul className="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li className="text-base">
                        Encryption: We use industry-standard encryption to protect your data during transmission.
                      </li>
                      <li className="text-base">
                        Access Controls: Strict access controls ensure only authorized personnel can access your data.
                      </li>
                      <li className="text-base">
                        Regular Security Audits: We conduct regular security assessments to maintain the highest security standards.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      6. Your Rights and Choices
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      As a user, you have the right to:
                    </p>
                    <ul className="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li className="text-base">
                        Access: Request copies of the personal data we hold about you.
                      </li>
                      <li className="text-base">
                        Rectification: Ask us to correct any inaccurate information.
                      </li>
                      <li className="text-base">
                        Erasure: Request that we delete your personal data under certain circumstances.
                      </li>
                      <li className="text-base">
                        Objection: Object to certain types of processing of your data.
                      </li>
                    </ul>
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
