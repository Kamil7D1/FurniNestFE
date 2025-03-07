import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";
import { Search } from "lucide-react";

export const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
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

  return (
    <header>
      <div>
        <Link to="/">
          <h1>FurniNest</h1>
        </Link>
        <div>
          <input type="text" placeholder="Search..." />
          <Search color="#374151" size={32} strokeWidth={1.5} />
        </div>
      </div>
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </header>
  );
};
