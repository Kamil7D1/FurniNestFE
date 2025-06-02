import { Trash2 } from "lucide-react";

export const Cart = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div>
        <div>
          <div className="flex w-full items-center justify-between">
            <h1>Shopping Cart</h1>
            <button className="flex">
              <Trash2 color="#374151" />
              <p>Clear Shopping Cart</p>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
