"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";


const Pricing = () => {

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Affordable Pricing"
          paragraph="Our Website design & development company affordable packages with transparent pricing,providing high-quality website development at great value."
          center
          width="665px"
        />
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[30px] mt-20">Web App Creation Packages</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 md:mt-40">
          <PricingBox
            packageName="Basic"
            price="800$ - 1500"
            duration="3"
            subtitle="Ideal for: Startups, small businesses, or simple websites."
            center="false"
            discount="20"
            id="1"
          >
            <OfferList text="5-10 pages (Home,About,Services,etc.....)" status="active" />
            <OfferList text="Responsive design (mobile-friendly)" status="active" />
            <OfferList text="Contact form integration" status="active" />
            <OfferList text="1 month free technical support" status="active" />
            <OfferList text="Delivery time 1-2 weeks" status="active" />
            <OfferList text="fast and secure website" status="active" />
            <OfferList text="Website hosting with 0$" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Standard"
            price="2500$ - 5000"
            duration="mo"
            subtitle="Ideal for: Growing businesses requiring custom features."
            center="true"
            discount="25"
            id="2"
          >
            <OfferList text="10-15 pages with custom design" status="active" />
            <OfferList text="Responsive design (mobile-friendly)" status="active" />
            <OfferList text="Backend features operations with database " status="active" />
            <OfferList text="Integration with third-party tools (payment gateways)." status="active" />
            <OfferList text="3 month free technical support" status="active" />
            <OfferList text="Delivery time 6-8 weeks" status="active" />
            <OfferList text="Website hosting" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Premium"
            price="start at 5000"
            duration="mo"
            subtitle="Ideal for: Enterprises or complex projects."
            center="false"
            discount="25"
            id="3"
          >
            <OfferList text="Fully custom design and development" status="active" />
            <OfferList text="Scalable architecture (Microservices)" status="active" />
            <OfferList text="Advanced e-commerce,booking,inventory systems etc..." status="active" />
            <OfferList text="Security audits and SSL certificates" status="active" />
            <OfferList text="1 year free technical support" status="active" />
            <OfferList text="Delivery time 4-8 months" status="active" />
            <OfferList text="Website hosting" status="active" />
          </PricingBox>
        </div>
        {/* <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[30px] mt-20">Mobile App Development Packages</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 md:mt-40">
          <PricingBox
            packageName="Basic"
            price="8000"
            duration="3"
            subtitle="Ideal for: MVP or simple apps (single platform)."
            center="false"
            discount="12.5"
            id="4"
          >
            <OfferList text="Single platform either Android or Ios" status="active" />
            <OfferList text="5-10 pages with custom design" status="active" />
            <OfferList text="Core features (user login,profile,basic Ui)" status="active" />
            <OfferList text="Simple backend setup." status="active" />
            <OfferList text="Delivery time 2-3 months" status="active" />
            <OfferList text="3 months free technical support" status="active" />
            <OfferList text="Deployment of the app either App store or Play store" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price="15000"
            duration="mo"
            subtitle="Ideal for: Cross-platform apps with advanced features."
            center="true"
            discount="20"
            id="5"
          >
            <OfferList text="iOS + Android development." status="active" />
            <OfferList text="10-15 pages with custom design" status="active" />
            <OfferList text="API integration (payment gateways, etc...)." status="active" />
            <OfferList text="Strong backend setup." status="active" />
            <OfferList text="Unlimited pages" status="active" />
            <OfferList text="Delivery time 4-6 months" status="active" />
            <OfferList text="6 months free technical support" status="active" />
            <OfferList text="Deployment of the app in App store and Play store" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price="25000"
            duration="mo"
            subtitle="Full Website + FREE Mobile App or vice versa with free full time updates"
            center="false"
            discount="8"
            id="6"
          >
            <OfferList text="iOS + Android development." status="active" />
            <OfferList text="Advanced backend (Node.js, Python, microservices)." status="active" />
            <OfferList text="AI/ML features (chatbots, recommendations)." status="active" />
            <OfferList text="Real-time features (messaging, live tracking)." status="active" />
            <OfferList text="12 months free technical support" status="active" />
            <OfferList text="Deployment of the app in App store and Play store" status="active" />
          </PricingBox>
        </div> */}
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
