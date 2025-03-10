import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";
import { Search } from "lucide-react";
import { mockData } from "../data/mockData";

export const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [searchProduct, setSearchProduct] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(event);

    setSearchProduct(
      mockData.filter((product) => product.name.toLowerCase().includes(value))
    );
  };

  useEffect(() => {
    console.log(searchProduct);
  }, [searchProduct]);

  return (
    <header className="px-4 py-4">
      <div className="flex flex-end justify-between items-end w-full">
        <Link to="/">
          <h1>FurniNest</h1>
        </Link>
        <div className="ml-2 min-w-22 h-8 border-b-1 border-(--color-dark-gray)">
          <form className="flex ">
            <input
              type="text"
              placeholder="Search..."
              className="w-full"
              onChange={handleSearch}
            />
            <button>
              <Search color="#374151" size={24} strokeWidth={1.5} />
            </button>
          </form>
          <ul>
            {searchProduct.map((product) => (
              <li>{product.name}</li>
            ))}
          </ul>
        </div>
      </div>
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </header>
  );
};
