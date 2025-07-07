import SingleBlog from "@/components/projects/singleBlog";
import BlogData from "@/components/projects/BlogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the portfolio of MWM Tech showcasing our website development and web design projects for clients in United States.",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Projects"
        description="Explore our latest projects, where innovation meets excellence to deliver impactful and cutting-edge solutions."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {BlogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} id={blog.id}/>
            </div>
          ))}
        </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
