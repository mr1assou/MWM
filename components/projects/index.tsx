import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./singleBlog";
import BlogData from "./BlogData";

const Projects = () => {
  return (
    <section
      id="blog"
      className="bg-white dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Latest Projects"
          paragraph="Explore our latest projects, where innovation meets excellence to deliver impactful and cutting-edge solutions."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {BlogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} id={blog.id}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
