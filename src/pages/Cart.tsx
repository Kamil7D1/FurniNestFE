import { Trash2, Heart } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";

export const Cart = () => {
  const [productQuantity, setProductQuantity] = useState<string>("0");

  return (
    <div className="flex h-screen w-full items-center justify-center p-[3px]">
      <div className="flex flex-col">
        <div className="">
          <div className="mb-5 flex w-full items-end justify-between">
            <h2>Shopping Cart</h2>
            <button className="flex">
              <Trash2 color="#374151" />
              <p className="hidden sm:block">Clear Shopping Cart</p>
            </button>
          </div>
          <ul>
            <li>
              <div className="flex w-full flex-wrap items-center justify-between gap-2 border-b-2 border-(--color-dark-gray) py-3">
                <div className="mr-[5px] flex">
                  <img
                    src="public\images\ottoman45x35.png"
                    alt="ottoman"
                    className="mr-2"
                  />
                  <h3>OTTOMAN</h3>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    min="0"
                    type="number"
                    className="w-[32px] [appearance:textfield] rounded-[2px] border-2 border-[var(--color-dark-gray)] p-[1px] text-center text-[var(--color-dark-gray)] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    onChange={(e) => {
                      const raw = e.target.value;
                      const cleaned = raw.replace(/[^0-9]/g, "");
                      setProductQuantity(cleaned);
                    }}
                    value={productQuantity}
                  />
                  <p className="text-[1.5rem]">59.00 PLN</p>
                  <Heart
                    className="fill-none text-red-500 hover:fill-red-500"
                    size={24}
                    strokeWidth={1}
                  />
                  <Trash2 size={24} color="#374151" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-[10px] rounded-[4px] bg-(--color-peach-cream) p-3">
          <ul className="flex flex-col gap-2">
            <li>
              <p>
                <strong>Subtotal: </strong> 59.00zł
              </p>
            </li>
            <li>
              <p>
                <strong>Shipping: </strong> 10.00zł
              </p>
            </li>
            <li>
              <p className="text-[1.5rem]">
                <strong>Order Total: </strong> 69.00zł
              </p>
            </li>
          </ul>
          <Button text="PROCEED TO CHECKOUT" type="button"></Button>
        </div>
      </div>
    </div>
  );
};
