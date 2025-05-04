import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/projects";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "mwm agency",
  description: "mwm agency",
 
};

export default function Home() {
  return (
    <>
      {/* <div className="w-screen h-screen bg-white fixed top-0 left-0 z-[9999]"></div>     */}
      <ScrollUp />
      <Hero />
      <Features />
      <Brands />
      <Pricing />
      <AboutSectionOne value="true"/>
      <AboutSectionTwo />
      <Blog />
      <Testimonials />
      <Contact /> 
    </>
  );
}
