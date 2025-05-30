import AboutSectionOne from "@/components/about/AboutSectionOne";
import AboutSectionTwo from "@/components/about/AboutSectionTwo";
import Projects from "@/components/projects";
import Brands from "@/components/brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Services from "@/components/services";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import Stats from "@/components/stats/Stats";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development Company Sydney & Melbourne | Ecommerce Web Development",
  description: "Leading website development company in Sydney and Melbourne. Expert ecommerce website development, custom website design, and professional web development services across Australia.",
  keywords: "web development sydney, sydney web developers, website development company melbourne, custom website development melbourne, website development services, ecommerce website developer, website development agency",
};

export default function Home() {
  return (
    <>
      {/* <div className="w-screen h-screen bg-white fixed top-0 left-0 z-[9999]"></div>     */}
      <ScrollUp />
      <Hero />
      <Stats />
      <Services />
      <Brands />
      <Projects />
      <Pricing />
      <AboutSectionOne value="true"/>
      <AboutSectionTwo />
      <Testimonials />
      <Contact /> 
    </>
  );
}
