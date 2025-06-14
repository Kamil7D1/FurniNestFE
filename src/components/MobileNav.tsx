import React from "react";
import { navItems } from "../data/navItems";
import { NavItem } from "./NavItem";
export const MobileNav: React.FC = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 flex w-full basis-1 justify-evenly rounded-t-[2p] bg-white py-[10px]"
      style={{
        boxShadow: "0px -5px 15px -4px rgba(0, 0, 0, 0.3)",
        WebkitBoxShadow: "px -5px 15px -4px rgba(0, 0, 0, 0.3)",
        MozBoxShadow: "0px -5px 15px -4px rgba(0, 0, 0, 0.3)",
      }}
    >
      {navItems.map((item, i) => (
        <NavItem key={i} path={item.path} label={item.label} icon={item.icon} />
      ))}
    </nav>
  );
};
