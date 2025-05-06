import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Projects";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
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
      <Services />
      <Brands />
      <Blog />
      {/* <Pricing /> */}
      <AboutSectionOne value="true"/>
      <AboutSectionTwo />
      <Testimonials />
      <Contact /> 
    </>
  );
}
