"use client";

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import gsap from 'gsap';

const ContactForm = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params as { id?: string };
  const formRef = useRef<HTMLFormElement | null>(null);

  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone_number: "",
    id: id ?? "",
    budget: "",
    companyName: "",
    softwareType: "",
    problem1: "",
  });

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

  const handleForm = async (e: React.FormEvent) => {
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

  const changeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form ref={formRef} className="mt-5 opacity-0" onSubmit={handleForm}>
      <div className="-mx-4 flex flex-wrap">
        {/* Full Name */}
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label htmlFor="firstName" className="mb-3 block text-sm font-medium text-dark dark:text-white">
              Full Name *:
            </label>
            <input
              id="firstName"
              onChange={changeForm}
              type="text"
              name="firstName"
              placeholder="Enter your full name"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
              Your Email *:
            </label>
            <input
              id="email"
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

        {/* Phone */}
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label htmlFor="phone_number" className="mb-3 block text-sm font-medium text-dark dark:text-white">
              Phone Number *:
            </label>
            <input
              id="phone_number"
              onChange={changeForm}
              required
              name="phone_number"
              type="text"
              placeholder="0412345678"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>

        {/* Company Name */}
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label htmlFor="companyName" className="mb-3 block text-sm font-medium text-dark dark:text-white">
              Company Name:
            </label>
            <input
              id="companyName"
              onChange={changeForm}
              type="text"
              name="companyName"
              placeholder="Your company or organization"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>


        {/* Software Type */}
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8 relative">
            <label
              htmlFor="softwareType"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Type of Software *:
            </label>
            <select
              id="softwareType"
              name="softwareType"
              required
              onChange={changeForm}
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none 
                 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none z-10"
            >
              <option value="">Select a type</option>
              <option value="SaaS">SaaS</option>
              <option value="Booking system">Booking system</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Marketplace">Marketplace</option>
              <option value="CRM">CRM</option>
              <option value="Web Portals">Web Portals</option>
              <option value="Enterprise Web Apps">Enterprise Web Apps</option>
              <option value="Healthcare Apps">Healthcare Apps</option>
              <option value="Education / Training">Elearning</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>



        {/* Budget */}
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label htmlFor="budget" className="mb-3 block text-sm font-medium text-dark dark:text-white">
              Budget Range *:
            </label>
            <select
              id="budget"
              onChange={changeForm}
              name="budget"
              required
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            >
              <option value="">Select your budget</option>
              <option value="$800 – $1,500">$800 – $1,500</option>
              <option value="$1500 – $3,000">$2500 – $5,000</option>
              <option value="5000$+">More than $5,000</option>
            </select>
          </div>
        </div>

        {/* Problems (end of form) */}
        <div className="w-full px-4">
          <div className="mb-6">
            <label htmlFor="problem1" className="mb-2 block text-sm font-medium text-dark dark:text-white">
              Problem you’re trying to solve *:
            </label>
            <textarea
              id="problem1"
              name="problem1"
              required
              onChange={changeForm}
              placeholder="Describe the main pain point this software should solve"
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              rows={3}
            />
          </div>
        </div>

        {/* Submit */}
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
