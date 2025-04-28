import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import SectionTitle from "../Common/SectionTitle";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <SectionTitle
          title="Technologies That Power Our Solutions"
          paragraph="We use modern, scalable, and reliable technologies to build high-performance, future-ready solutions"
          center
        />
        
        <div className="w-full px-4">
          <div className="flex overflow-x-hidden hide-scrollbar pb-4">
            <div className="flex  gap-4 animate-scroll">
              {[...brandsData,...brandsData].map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, name ,alt} = brand;

  return (
    <div className="flex-shrink-0 w-32 h-32 xl:w-48 xl:h-48 2xl:w-64 2xl:h-64 flex flex-col items-center justify-center p-4  rounded-sm">
      <div className="relative w-[70%] h-[70%]">
        <Image 
          src={image} 
          alt={alt} 
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50vw, 20vw"
          priority
        />
      </div>
      <p className="mt-5 text-sm lg:text-lg">{name}</p>
    </div>
  );
};
