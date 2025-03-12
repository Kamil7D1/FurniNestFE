import React from "react";
import { Button } from "../components/Button";

export const Hero: React.FC = () => {
  return (
    <section className="flex h-screen w-full items-center justify-center overflow-hidden bg-(--color-peach-cream) text-center lg:justify-between">
      <div className="flex flex-col gap-5 px-10 lg:w-1/2 lg:items-start lg:text-start xl:px-20">
        <h1>
          Welcome to <span className="underline">FurniNest</span>
        </h1>
        <p className="">
          Your destination for exceptional furniture for every room!
        </p>
        <Button text="SHOP FURNITURE" path="/products" />
      </div>
      <div className="hidden h-full w-3/4 lg:flex">
        <img
          className="h-full w-full object-cover"
          src="/images/home.png"
          alt="home"
        />
      </div>
    </section>
  );
};
