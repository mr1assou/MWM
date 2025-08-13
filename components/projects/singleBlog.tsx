import Image from "next/image";
import Link from "next/link";

interface Blog {
  title: string;
  image: string;
  paragraph: string;
}

interface Props {
  blog: Blog;
  id: string | number;
}

const SingleBlog = ({ blog, id }: Props) => {
  const { title, image, paragraph } = blog;

  return (
    <div className="hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark h-[500px]">
      <Link href={`/project_details/${id}`} className="relative block w-full">
        <div className="relative w-full aspect-[37/22]">
          <Image
            src={image}
            alt="Project Image"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <Link
            href={`/project_details/${id}`}
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-xl"
          >
            {title}
          </Link>
        </h3>
        <p className="mb-6 pb-6 text-base font-medium text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
