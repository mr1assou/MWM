import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleService";
import blogData from "./ServiceData";

const Services = () => {
  return (
    <section
      id="blog"
      className="bg-white dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Services"
          paragraph="We provide professional website design and development services across AUS to help grow your business."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} id={blog.id}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
