// app/page.tsx (Server Component - maintains metadata)
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Projects from "@/components/projects";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats/Stats";
import { Metadata } from "next";
import Loader from "@/components/Common/Loader";

export const metadata: Metadata = {
  title: "Website Development Company Sydney & Melbourne | Ecommerce Web Development",
  description: "Leading website development company in Sydney and Melbourne. Expert ecommerce website development, custom website design, and professional web development services across Australia.",
  keywords: "web development sydney, sydney web developers, website development company melbourne, custom website development melbourne, website development services, ecommerce website developer, website development agency",
};

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollUp />
      <Hero />
      <Stats />
      <Services />
      <Brands />
      <Projects />
      <AboutSectionOne value="true"/>
      <AboutSectionTwo />
      <Testimonials />
      <Contact /> 
    </>
  );
}