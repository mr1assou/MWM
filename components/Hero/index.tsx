import Link from "next/link";
import Image from 'next/image';
import HeroAnimations from "./HeroAnimations";

const Hero = () => {
  return (
    <>
      <HeroAnimations />
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] md:h-[100vh] h-screen"
      >
        <div
          className="hero-image-container absolute inset-0 z-[-10] overflow-hidden h-0"
        >
          <Image 
            src="/images/hero/5.png" 
            alt="Professional Website Development Company in Sydney and Melbourne" 
            fill 
            className="object-cover brightness-50" 
            priority
          />
        </div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center  2xl:mt-20"
                data-wow-delay=".2s"
              >
                <h1 className="hero-title mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight opacity-0">
                  Professional Website Design & Development Services in Australia
                </h1>
                <h2 className="hero-subtitle mb-12 text-base !leading-relaxed text-body-color-dark sm:text-lg md:text-xl opacity-0">
                  Leading website development company in Australia, specializing in custom website design, and professional web solutions for businesses in Sydney, Melbourne, Perth, and across Australia.
                </h2>
                <div className="hero-button flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 opacity-0">
                  <Link
                    href="/contact/0"
                    className="group rounded-sm bg-primary px-8 py-4 text-xs sm:text-lg font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 flex items-center gap-2"
                  >
                    Order Your Website 
                    <svg
                      className="hero-arrow h-5 w-5 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
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
