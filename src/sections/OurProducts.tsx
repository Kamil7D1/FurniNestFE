import React from "react";
import { Product } from "../components/Product";
import { mockData } from "../data/mockData";

export const OurProducts: React.FC = () => {
  return (
    <section className="m-auto flex w-full max-w-[1350px] flex-col items-center justify-center px-10">
      <h2 className="my-10 xl:self-start">Our Products</h2>
      <div className="flex flex-wrap justify-center gap-5 xl:justify-start">
        {mockData.slice(0, 4).map((product, i) => (
          <Product
            key={i}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            currency={product.currency}
            deliveryTime={product.deliveryTime}
          />
        ))}
      </div>
    </section>
  );
};
