import React from "react";
import { Hero } from "../sections/Hero";
import { OurProducts } from "../sections/OurProducts";
import { AboutUs } from "../sections/AboutUs";
import { Footer } from "../components/Footer";

export const Home: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-15 pb-[65px] xl:pb-[0]">
      <Hero />
      <OurProducts />
      <AboutUs />
      <Footer />
    </div>
  );
};
