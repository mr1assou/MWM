// app/page.tsx
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionFour from "@/components/About/AboutSectionFour";
import Projects from "@/components/projects";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats/Stats";
import { Metadata } from "next";
import Loader from "@/components/Common/Loader";
import CookieConsent from "@/components/Common/CookieConsent";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Website Development Company Sydney,Adelaide,Brisbane,Perth",
  description: "Leading website development company in Sydney and Melbourne. Expert ecommerce website development, custom website design, and professional web development services across Australia.",
  keywords: "web development sydney, sydney web developers, website development company melbourne, custom website development melbourne, website development services, ecommerce website developer, website development agency",
};

// Content component to wrap all page content
const PageContent = () => (
  <div className="content-area">
    <ScrollUp />
    <Hero />
    <Services />
    <Pricing />
    <Brands />
    <Projects />
    <AboutSectionOne value="true"/>
    <AboutSectionTwo />
    <AboutSectionThree value="true"/>
    <AboutSectionFour/>
    <Stats />
    <Testimonials />
    <Contact />
  </div>
);

export default function Home() {
  return (
    <>
      <Loader />
      <Suspense fallback={null}>
        <PageContent />
      </Suspense>
      <CookieConsent />
    </>
  );
}