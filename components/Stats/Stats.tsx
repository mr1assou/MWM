"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    num: 100,
    text: "Projects",
  },
  {
    num: 15,
    text: "Technologies",
  },
  {
    num: 40000,
    text: "Code commits",
  },
];

const Stats = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%", // when top of section hits 80% of viewport
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
      className="pt-4 pb-12 xl:pt-0 xl:pb-0 my-5 md:my-10"
    >
      <div className="container mx-auto">
        <div className="flex gap-6 w-full justify-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col sm:flex-row sm:gap-4 gap-1 items-center justify-center"
            >
              <div>
                <span className="font-black dark:text-white/80 text-gray-400 text-xl sm:text-5xl">+</span>
                {startCount ? (
                  <CountUp
                    end={item.num}
                    duration={3}
                    className="font-extrabold dark:text-white/80 text-gray-400 text-xl sm:text-5xl"
                  />
                ) : (
                  <span className="font-extrabold dark:text-white/80 text-gray-400 text-xl sm:text-5xl">0</span>
                )}
              </div>
              <p className="leading-snug dark:text-white/80 text-gray-400 text-xs sm:text-xl">
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
