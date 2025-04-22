import Link from "next/link";
import Image from 'next/image';


const Hero = () => {
  return (
    <>
      <section
        id="home"
        className=" relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]  md:h-[100vh]
        "
      >
        <Image src="/images/hero/5.png" alt="web development agency" fill className="object-cover -z-10 brightness-50" />
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center  md:mt-20"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Innovative Tech Solutions That Drive Your Business Forward
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color-dark sm:text-lg md:text-xl">
                We design smart, scalable digital systems from idea to launch. 
                Specializing in mobile and web applications, we build with precision. 
                Driven by data, powered by creativity. 
                Let’s turn your vision into a competitive edge.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/contact"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Get Started
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
