import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 3,
  //   title: "Services",
  //   path: "/service_details/1",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Custom Web Development",
  //       path: "/service_details/1",
  //       newTab: false,
  //     },
  //     {
  //       id: 32,
  //       title: "Mobile App Development",
  //       path: "/service_details/2",
  //       newTab: false,
  //     },
  //     {
  //       id: 33,
  //       title: "E-Commerce Platforms",
  //       path: "/service_details/3",
  //       newTab: false,
  //     },
  //     {
  //       id: 33,
  //       title: "UI/UX design",
  //       path: "/service_details/4",
  //       newTab: false,
  //     },
  //     {
  //       id: 33,
  //       title: "API Development & integration",
  //       path: "/service_details/5",
  //       newTab: false,
  //     },
  //     {
  //       id: 33,
  //       title: "Maintenance & Scalability",
  //       path: "/service_details/6",
  //       newTab: false,
  //     },
  //   ],
  // },
  {
    id: 4,
    title: "Latest Projects",
    path: "/projects",
    newTab: false,
  },
  {
    id: 5,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact Us",
    path: "/contact/0",
    newTab: false,
  },
  
];
export default menuData;
