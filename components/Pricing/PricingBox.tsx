import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  center: string;
  discount: string;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, children, center ,discount} = props;
  const boxRef = useRef(null); // Create a ref to target the element
  const [isVisible, setIsVisible] = useState(false); // To track if the component is in view

  // Function to check if the component is in the viewport
  const checkIfInView = () => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true); // If the element is in view, set the state to true
      }
    }
  };

  // Animate when the component is in view
  useEffect(() => {
    // Listen for scroll events
    window.addEventListener("scroll", checkIfInView);

    // Check the component's visibility on mount
    checkIfInView();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", checkIfInView);
    };
  }, []);

  // Trigger GSAP animation when the component becomes visible
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: 50 }, // Initial state (invisible and slightly below)
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" } // Animation to visible and original position
      );
    }
  }, [isVisible]);

  return (
    
    <div className={`w-full relative rounded-xl ${center === "true" ? "border-2 border-primary md:-translate-y-20" : "border-2 border-gray-100"}`}>
      {
        center == "true" &&
        <div className='w-full bg-primary h-[40px] absolute top-0 left-0 z-50 rounded-tl-lg rounded-tr-lg flex justify-center items-center text-xl text-white'>
          Most Popular
        </div>
      }

      <div
        ref={boxRef}
        className="wow fadeInUp shadow-three dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark relative z-10 rounded-lg bg-white px-8 py-10 hover:shadow-one h-[800px] "
        data-wow-delay=".1s"
      >
        {
          center == "true" ? <h4 className="text-lg font-bold text-dark dark:text-white mt-10">
            {packageName} </h4>: <h4 className="text-lg font-bold text-dark dark:text-white">
            {packageName} </h4> 
          
        }

        <p className="mt-2 mtext-base text-body-color text-sm">{subtitle}</p>
        <div className='flex gap-2 items-center'>
          <p className="price mt-7 text-xs font-bold text-black dark:text-white line-through">
            AU${price}
          </p>
          <p className="price mt-7 text-xs font-bold text-black dark:text-white bg-primary px-2 py-1 rounded-lg">
            Save 10 %
          </p>
        </div>
        <p className="price mt-5 text-4xl font-bold text-black dark:text-white">
          AU${parseInt(price) * 0.9}
        </p>

        <div className=" border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10 mt-10">
          <Link href="/contact" className="flex w-full items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
            Choose Plan
          </Link>
        </div>
        <div className='mt-7'>{children}</div>
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg width="179" height="158" viewBox="0 0 179 158" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z" fill="url(#paint0_linear_70:153)" />
            <path opacity="0.3" d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z" fill="url(#paint1_linear_70:153)" />
            <defs>
              <linearGradient id="paint0_linear_70:153" x1="69.6694" y1="29.9033" x2="196.108" y2="83.2919" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_70:153" x1="165.348" y1="-75.4466" x2="-3.75136" y2="103.645" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
