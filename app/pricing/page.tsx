import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Packages"
        description="Our competitive pricing designed to be affordable for anyone looking to start their journey. Whether you're a small business or an enterprise, we offer flexible plans to suit your needs and budget."
      />
      <Pricing />
    </>
  );
};

export default Blog;
