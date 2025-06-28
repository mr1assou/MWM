import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import AboutSectionFour from "@/components/About/AboutSectionFour";

export const metadata: Metadata = {
  title: "About Page ",
  description: "About page for our agency",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="We are a website development company providing custom digital solutions to businesses in  Sydney,Adelaide,Perth,Brisbane and across Australia."
      />
      <AboutSectionOne value=""/>
      <AboutSectionTwo />
      <AboutSectionThree value={true} />
      <AboutSectionFour />
    </>
  );
};

export default AboutPage;
