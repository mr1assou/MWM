"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionTitle from "../Common/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { num: 100, text: "Projects" },
  { num: 15, text: "Technologies" },
  { num: 500000, text: "Code commits" },
  { num: 80, text: "Clients" },
  { num: 30, text: "Developer" },
  { num: 12, text: "Years Of Business" },
   { num: 6, text: "Awards Won" },
  
];

const Stats = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        setStartCount(true);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-4 pb-12 xl:pt-0 xl:pb-0 my-5 md:my-10 px-5"
    >
      <SectionTitle
        title="The Results Say It All"
        paragraph="We’ve delivered hundreds of successful projects using diverse technologies, building lasting client relationships through quality, innovation, and measurable results."
        center
      />
      <div className="container mx-auto">
        {/* Mobile: 2-column grid */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-6 sm:hidden">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-left"
            >
              <div className="flex items-center text-gray-400 dark:text-white/80">
                <span className="font-black text-xl mr-1">+</span>
                {startCount ? (
                  <CountUp
                    end={item.num}
                    duration={3}
                    className="font-extrabold text-xl"
                  />
                ) : (
                  <span className="font-extrabold text-xl">0</span>
                )}
              </div>
              <p className="leading-snug text-xs mt-1 text-gray-400 dark:text-white/80">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* sm and above: flex-wrap layout */}
        <div className="hidden sm:flex flex-wrap justify-center gap-y-8 gap-x-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center 
                         basis-1/3 md:basis-1/4 xl:basis-1/6"
            >
              <div className="flex items-center justify-center text-gray-400 dark:text-white/80">
                <span className="font-black text-xl sm:text-4xl mr-1">+</span>
                {startCount ? (
                  <CountUp
                    end={item.num}
                    duration={3}
                    className="font-extrabold text-xl sm:text-4xl"
                  />
                ) : (
                  <span className="font-extrabold text-xl sm:text-4xl">0</span>
                )}
              </div>
              <p className="leading-snug text-xs sm:text-sm mt-2 text-gray-400 dark:text-white/80">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
