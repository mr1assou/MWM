import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import AboutSectionFour from "@/components/About/AboutSectionFour";

export const metadata: Metadata = {
  title: "About Page ",
  description: "Learn more about our web design and development agency, proudly serving businesses in United States. We specialize in creating custom websites that drive results. With a passionate team of designers and developers, we help companies grow online through professional website development and digital strategy.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="We are a website development company providing custom digital solutions to businesses across United States."
      />
      <AboutSectionOne value=""/>
      <AboutSectionTwo />
      <AboutSectionThree value={true} />
      <AboutSectionFour />
    </>
  );
};

export default AboutPage;
