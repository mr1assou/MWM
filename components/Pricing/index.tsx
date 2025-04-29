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
          title="Simple and Affordable Pricing"
          paragraph="Clear, budget-friendly pricing with no hidden fees  get the best value for your investment."
          center
          width="665px"
        />
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[30px] mt-20">Website Creation Packages</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 md:mt-40">
          <PricingBox
            packageName="Basic"
            price="3500"
            duration="3"
            subtitle="Fast, static website with unlimited pages for your business."
            center="false"
            discount=""
          >
            <OfferList text="Up to 5 pages (Home,About,etc.....)" status="active" />
            <OfferList text="Mobile responsive custom design" status="active" />
            <OfferList text="Contact form and Google analytics setup" status="active" />
            <OfferList text="1 round of revisions" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price="1500"
            duration="mo"
            subtitle="Full Website + FREE Mobile App or vice versa to your business"
            center="true"
            discount=""
          >
            <OfferList text="Up to 10 pages (all basic features,plus)" status="active" />
            <OfferList text="Blog or portfolio section" status="active" />
            <OfferList text="Social media integration" status="active" />
            <OfferList text="2 months post-launch support" status="active" />
            <OfferList text="We make your website and mobile app live to the public." status="active" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price="2700"
            duration="mo"
            subtitle="Full Website + FREE Mobile App or vice versa with free full time updates"
            center="false"
            discount=""
          >
            <OfferList text="Get free website or mobile app" status="active" />
            <OfferList text="Fully functional dynamic website and mobile app" status="active" />
            <OfferList text="All UI/UX components" status="active" />
            <OfferList text="Unlimited pages" status="active" />
            <OfferList text="We make your website and mobile app live to the public." status="active" />
            <OfferList text="Free life time updates" status="active" />
          </PricingBox>
        </div>
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[30px] mt-20">Mobile App Development Packages</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 md:mt-40">
          <PricingBox
            packageName="Basic"
            price="3500"
            duration="3"
            subtitle="Fast, static website with unlimited pages for your business."
            center="false"
            discount=""
          >
            <OfferList text="Fully developed static website" status="active" />
            <OfferList text="All UI/UX components" status="active" />
            <OfferList text="Unlimited pages" status="active" />
            <OfferList text="Responsive design (works on all devices)" status="active" />
            <OfferList text="We make your website live to the public." status="active" />
            <OfferList text="1 month free technical support" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price="1500"
            duration="mo"
            subtitle="Full Website + FREE Mobile App or vice versa to your business"
            center="true"
            discount=""
          >
            <OfferList text="Get free website or mobile app" status="active" />
            <OfferList text="Fully functional dynamic website and mobile app" status="active" />
            <OfferList text="All UI/UX components" status="active" />
            <OfferList text="Unlimited pages" status="active" />
            <OfferList text="We make your website and mobile app live to the public." status="active" />
            <OfferList text="1 year of free technical support" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price="2700"
            duration="mo"
            subtitle="Full Website + FREE Mobile App or vice versa with free full time updates"
            center="false"
            discount=""
          >
            <OfferList text="Get free website or mobile app" status="active" />
            <OfferList text="Fully functional dynamic website and mobile app" status="active" />
            <OfferList text="All UI/UX components" status="active" />
            <OfferList text="Unlimited pages" status="active" />
            <OfferList text="We make your website and mobile app live to the public." status="active" />
            <OfferList text="Free life time updates" status="active" />
          </PricingBox>
        </div>
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
