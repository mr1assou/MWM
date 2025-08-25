"use client";

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import gsap from 'gsap';

const ContactForm = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const formRef = useRef(null);

  const [form, setForm] = useState({ firstName: "", email: "", phone_number: "", id: id , budget:""});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch('/api/submitForm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    await response.json();
    setLoading(false);
    if (response.ok) {
      router.push('/thanks');
    } else {
      console.log('Form submission failed');
    }
  };

  const changeForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form ref={formRef} className="mt-5 opacity-0" onSubmit={handleForm}>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="firstName"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Full Name *:
            </label>
            <input
              onChange={changeForm}
              type="text"
              name="firstName"
              placeholder="Enter your full name"
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
              Your Email *:
            </label>
            <input
              onChange={changeForm}
              name="email"
              type="email"
              placeholder="Enter your email"
              pattern="^(?!.*@(hotmail|yahoo)\.com$).*@.*\..*$"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              required
            />
          </div>
        </div>
             <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="budget"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Budget Range *:
            </label>
            <select
              onChange={changeForm}
              name="budget"
              required
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            >
              <option value="">Select your budget</option>
              <option value="$500 – $1,000">$500 – $1,000</option>
              <option value="$1000 – $2,000">$1000 – $2,000</option>
              <option value="2000-5000$">$2,000 – $5,000</option>
              <option value="5000$+">More than $5,000</option>
            </select>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="phone_number"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Phone Number:
            </label>
            <input
              onChange={changeForm}
              name="phone_number"
              type="text"
              placeholder="0412345678"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>
   

        <div className="w-full px-4">
          <input
            value={loading ? "Getting Started..." : "Get Started"}
            type="submit"
            className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90 disabled:opacity-50 cursor-pointer"
            disabled={loading}
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm; 