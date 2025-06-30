import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "Get in touch with our expert web design and development team. Whether you’re in Perth, Sydney, Brisbane, or Adelaide, we’re ready to help you build a powerful online presence. Contact us today for a free consultation or project quote.",
  // other metadata
};

const ContactPage = () => {
  return (
    <div className="mt-20">
      <Contact />
    </div>
  );
};

export default ContactPage;
