"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useParams } from 'next/navigation'; // Changed import
import { useRouter } from 'next/navigation';


const Contact = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const contactRef = useRef(null); // Reference for the contact section
  const [isVisible, setIsVisible] = useState(false); // To track visibility
  const [form,setForm]=useState({firstName:"",lastName:"",email:"",phone_number:"",message:"",id:id});
  const [loading, setLoading] = useState(false);
  
  // Function to check if the component is in the viewport
  const checkIfInView = () => {
    if (contactRef.current) {
      const rect = contactRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true); // If the component is in view, set isVisible to true
      }
    }
  };

  // Listen for scroll events and check visibility
  useEffect(() => {
    window.addEventListener("scroll", checkIfInView);
    checkIfInView(); // Check visibility on mount

    return () => {
      window.removeEventListener("scroll", checkIfInView);
    };
  }, []);

  // Trigger GSAP animation when the component becomes visible
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        contactRef.current,
        { opacity: 0, y: 50 }, // Initial state: invisible and slightly down
        {
          opacity: 1,
          y: 0, // Final state: visible and at its original position
          duration: 1,
          ease: "power2.out", // Smooth easing
        }
      );
    }
  }, [isVisible]);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch('/api/submitForm', {method: 'POST',headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(form),
    });
    await response.json();
    setLoading(false);
    if(response.ok){
      router.push('/thanks');
    }
    else{
      console.log('not good');
    }
  }

  const changeForm = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="overflow-hidden py-16 md:py-20 lg:py-10"
      ref={contactRef} // Add the ref here
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-full">
            <div className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
            <p className=" text-base font-medium text-body-color">
              Contact Us 
              </p>
              <h2 className="mt-5 text-lg font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Boost Your Business with Our Affordable Tech Solutions
              </h2>
             
              <form className="mt-5" onSubmit={handleForm}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        First Name:
                      </label>
                      <input onChange={changeForm}
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>       
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="text"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Last Name:
                      </label>
                      <input onChange={changeForm}
                        name="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email:
                      </label>
                      <input onChange={changeForm}
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="text"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Phone Number :
                      </label>
                      <input onChange={changeForm}
                        name="phone_number"
                  
                        type="text"
                        placeholder="+61 412 345 678"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>
              
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message:
                      </label>
                      <textarea onChange={changeForm}
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      required></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <input
                      value={loading ? "Submitting..." : "Submit"}
                      type="submit"
                      className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90 disabled:opacity-50 cursor-pointer"
                      disabled={loading}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
