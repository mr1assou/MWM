import { Blog } from "@/types/blog";

const ServiceData: Blog[] = [
  {
    id: 1,
    title: "Custom Web Development",
    paragraph:
      "Build high-performance websites tailored to your brand. We focus on speed, security, and scalability to deliver seamless digital experiences that grow with your business.",
    image: "/images/services/web_dev.jpg",
  },
  {
    id: 2,
    title: "Mobile App Development",
    paragraph:
      "We build robust mobile apps for iOS and Android using Flutter or React Native. Our apps focus on performance, offline support, and user-friendly interfaces tailored to your industry.",
    image: "/images/services/mb.jpg",
  },
  {
    id: 3,
    title: "E-Commerce Platforms",
    paragraph:
      "Custom e-commerce solutions with support for subscriptions, bulk orders, and secure payment integrations. We help businesses scale online with GST-compliant, user-friendly platforms.",
    image: "/images/services/ecom_service.jpg",
  },
  {
    id: 4,
    title: "UI/UX Design",
    paragraph:
      "We create user-centered interfaces that are both visually striking and functional. From wireframes to prototypes, we design experiences that improve engagement and usability.",
    image: "/images/services/ui_ux.jpg",
  },
  {
    id: 5,
    title: "API Development & Integration",
    paragraph:
      "We build secure, scalable APIs and ensure seamless integration with your systems. Our team prioritizes performance, documentation, and long-term maintainability.",
    image: "/images/services/api.jpg",
  },
  {
    id: 6,
    title: "Maintenance & Scalability ",
    paragraph:
      "Ensure your systems run smoothly with our 24/7 monitoring, updates, and optimization services. We help you stay compliant and ready for future growth.",
    image: "/images/services/maintenance.jpg",
  },
];

export default ServiceData;
