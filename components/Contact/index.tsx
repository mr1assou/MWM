import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section
      id="contact"
      className="overflow-hidden py-16 md:py-20 lg:py-10"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-full">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
            >
              <p className="text-base font-medium text-body-color">
                Contact Us
              </p>
              <h2 className="mt-5 text-lg font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Let’s build something great together.
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
