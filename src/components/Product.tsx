import React from "react";
import { Plus, Heart } from "lucide-react";

interface ProductProps {
  imageUrl: string;
  name: string;
  price: number;
  currency: string;
  deliveryTime: string;
}

export const Product: React.FC<ProductProps> = ({
  imageUrl,
  name,
  price,
  currency,
  deliveryTime,
}) => {
  return (
    <div className="group relative flex flex-col gap-1">
      <img src={imageUrl} alt={name} />
      <div className="flex justify-between">
        <div>
          <h3>{name}</h3>
          <p className="text-[1.5rem] font-bold">{price + " " + currency}</p>
          <p>Delivery time:</p>
          <p className="text-red-500">{deliveryTime}</p>
        </div>
        <Plus
          className="self-end hover:scale-125"
          color="#374151"
          size={32}
          strokeWidth={2}
        />
      </div>
      <button className="absolute top-2 right-2 block items-center justify-center rounded-[2px] bg-white p-1 group-hover:flex lg:hidden">
        <Heart
          className="self-end fill-none text-red-500 hover:fill-red-500"
          size={24}
          strokeWidth={1}
        />
      </button>
    </div>
  );
};
