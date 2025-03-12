import React, { useEffect, useState, ChangeEvent, useRef } from "react";
import { Link } from "react-router";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";
import { Search, X } from "lucide-react";
import { mockData, ProductCreateInput } from "../data/mockData";

export const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [searchProduct, setSearchProduct] = useState<ProductCreateInput[]>([]);
  const [isSearchVisible, setSearchVisible] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim().toLowerCase();

    if (value === "") {
      setSearchProduct([]);
      setSearchVisible(false);
      return;
    }

    setSearchProduct(
      mockData.filter((product) => product.name.toLowerCase().includes(value)),
    );
    setSearchVisible(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex-end fixed flex w-full items-end justify-between bg-white px-4 py-4">
      <Link to="/">
        <h1>FurniNest</h1>
      </Link>
      <div
        ref={searchRef}
        className="ml-10 h-8 w-full max-w-122 min-w-22 border-b-1 border-(--color-dark-gray) lg:mx-15"
      >
        <form className="flex md:relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full focus:outline-none"
            onChange={handleSearch}
            onFocus={() => setSearchVisible(true)}
          />
          {isMobile && isSearchVisible ? (
            <button type="button" onClick={() => setSearchVisible(false)}>
              <X color="#374151" size={24} strokeWidth={1.5} />
            </button>
          ) : (
            <button type="button">
              <Search color="#374151" size={24} strokeWidth={1.5} />
            </button>
          )}
          {searchProduct.length !== 0 && isSearchVisible && (
            <ul
              className="absolute inset-x-0 mx-auto my-[55px] w-full max-w-[600px] min-w-[300px] rounded-t-[2px] bg-white p-[15px] lg:min-w-[500px]"
              style={{
                boxShadow: "0px 0px 9px -4px rgba(0, 0, 0, 0.3)",
                WebkitBoxShadow: "0px 0px 9px -4px rgba(0, 0, 0, .3)",
                MozBoxShadow: "0px 0px 9px -4px rgba(0, 0, 0, .3)",
              }}
            >
              {searchProduct.map((product, i) => (
                <li
                  key={i}
                  className="my-1 flex w-full items-center justify-between"
                >
                  <div className="flex items-center">
                    <img
                      className="mr-[5px] h-[45px] w-[55px] rounded-[2px] object-cover"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                    <div className="flex flex-col">
                      <h4>{product.name}</h4>
                      <p>{product.category}</p>
                    </div>
                  </div>
                  <p className="font-semibold">
                    {product.price.toFixed(2) + " " + product.currency}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </form>
      </div>
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </header>
  );
};
