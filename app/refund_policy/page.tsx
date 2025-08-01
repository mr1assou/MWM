import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | MWM Tech",
  description: "Our commitment to fair and transparent refund policies",
};

const RefundPolicyPage = () => {
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[150px] bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-10/12">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm py-8 px-5">
                <h1 className="text-2xl md:text-4xl font-bold leading-tight text-black dark:text-white mb-8">
                  Refund Policy
                </h1>
                <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
                  At MWM Tech, we strive to ensure complete satisfaction with our services. This Refund Policy outlines the terms and conditions under which refunds may be granted for our services.
                </p>
                
                <div className="space-y-8">
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
                    <h3 className="text-lg md:text-2xl font-bold text-black dark:text-white mb-4">
                      1. Service Cancellation
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4">
                      You may cancel your service subscription at any time. The following conditions apply:
                    </p>
                    <ul className="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li className="text-sm md:text-base">
                        Monthly subscriptions: Cancellation will take effect at the end of the current billing cycle.
                      </li>
                      <li className="text-sm md:text-base">
                        Annual subscriptions: Pro-rated refunds are available for unused months.
                      </li>
                      <li className="text-sm md:text-base">
                        Custom projects: Cancellation terms are specified in individual project contracts.
                      </li>
                    </ul>
                  </div>

                  <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
                    <h3 className="text-lg md:text-2xl font-bold text-black dark:text-white mb-4">
                      2. Refund Eligibility
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4">
                      Refunds may be granted under the following circumstances:
                    </p>
                    <ul className="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li className="text-sm md:text-base">
                        Service non-delivery: If we fail to deliver the promised service.
                      </li>
                      <li className="text-sm md:text-base">
                        Technical issues: If the service is not functioning as described.
                      </li>
                      <li className="text-sm md:text-base">
                        Quality concerns: If the delivered service does not meet agreed-upon specifications.
                      </li>
                    </ul>
                  </div>

                  <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
                    <h3 className="text-lg md:text-2xl font-bold text-black dark:text-white mb-4">
                      3. Refund Process
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4">
                      To request a refund, please follow these steps:
                    </p>
                    <ul className="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li className="text-sm md:text-base">
                        Contact our support team within 14 days of the issue.
                      </li>
                      <li className="text-sm md:text-base">
                        Provide detailed information about the reason for the refund request.
                      </li>
                      <li className="text-sm md:text-base">
                        Include any relevant documentation or evidence.
                      </li>
                    </ul>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mt-4">
                      We will review your request within 5 business days and notify you of our decision.
                    </p>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mt-4">
                      For refund requests, please contact us at: contact@mwmofficiel.com
                    </p>
                  </div>

                  <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
                    <h3 className="text-lg md:text-2xl font-bold text-black dark:text-white mb-4">
                      4. Non-Refundable Items
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4">
                      The following items are generally non-refundable:
                    </p>
                    <ul className="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li className="text-sm md:text-base">
                        Custom development work that has been completed and delivered.
                      </li>
                      <li className="text-sm md:text-base">
                        Services that have been used or consumed.
                      </li>
                      <li className="text-sm md:text-base">
                        Third-party services or products that we cannot return.
                      </li>
                    </ul>
                  </div>

                  <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
                    <h3 className="text-lg md:text-2xl font-bold text-black dark:text-white mb-4">
                      5. Payment Methods
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4">
                      Refunds will be processed using the original payment method:
                    </p>
                    <ul className="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li className="text-sm md:text-base">
                        Credit/Debit Cards: Refunds will appear on your statement within 5-10 business days.
                      </li>
                      <li className="text-sm md:text-base">
                        Bank Transfers: Processing time may vary depending on your bank.
                      </li>
                      <li className="text-sm md:text-base">
                        Digital Wallets: Refunds are typically processed within 24-48 hours.
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

export default RefundPolicyPage;
