// app/page.tsx (Server Component - maintains metadata)
import HomePage from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development Company Sydney & Melbourne | Ecommerce Web Development",
  description: "Leading website development company in Sydney and Melbourne. Expert ecommerce website development, custom website design, and professional web development services across Australia.",
  keywords: "web development sydney, sydney web developers, website development company melbourne, custom website development melbourne, website development services, ecommerce website developer, website development agency",
};

export default function Home() {
  return <HomePage />;
}