import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/Button";

export const ProductDetails = () => {
  const [counter, setCounter] = useState<number>(0);

  const decrement = () => setCounter((prev) => (prev > 0 ? --prev : prev));
  const increment = () => setCounter((prev) => ++prev);

  return (
    <div className="flex h-screen w-full items-center justify-center p-2">
      <div className="flex flex-col lg:flex-row">
        <img
          className="rounded-[2px] object-fill"
          src="public\images\ottoman.png"
          alt="ottoman"
        />
        <div className="mt-2 flex flex-col gap-1.5 rounded-[2px] bg-(--color-peach-cream) p-2 lg:mt-0 lg:ml-2">
          <h2>OTTOMAN</h2>
          <p className="text-[1.5rem] font-bold">59.00 PLN</p>
          <p>
            A modern sofa with soft fabric upholstery, ideal for living rooms.
          </p>
          <div className="flex">
            <Minus
              className="self-end hover:scale-125"
              color="#374151"
              size={32}
              strokeWidth={2}
              onClick={() => decrement()}
            />
            <p className="mx-3 text-[1.5rem]">{counter}</p>
            <Plus
              className="self-end hover:scale-125"
              color="#374151"
              size={32}
              strokeWidth={2}
              onClick={() => increment()}
            />
          </div>
          <div className="flex">
            <Button className="mr-2" text="Add To Cart" type="button" />
            <Button text="Add To Favourites" type="button" variant="reserved" />
          </div>
          <ul className="flex flex-col gap-1">
            <li>
              <p>
                <strong>Height: </strong> 120cm
              </p>
            </li>
            <li>
              <p>
                <strong>Width: </strong> 50cm
              </p>
            </li>
            <li>
              <p>
                <strong>Depth: </strong> 70cm
              </p>
            </li>
            <li>
              <p>
                <strong>Category: </strong> Living Room
              </p>
            </li>
            <li>
              <p>
                <strong>Delivery time: </strong>
                <em className="text-red-500 not-italic">
                  Up to 5 working days
                </em>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
