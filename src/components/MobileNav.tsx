import React from "react";
import { navItems } from "../data/navItems";
import { NavItem } from "./NavItem";
export const MobileNav: React.FC = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 flex w-full justify-evenly basis-1 py-[10px] rounded-t-lg"
      style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.15)" }}
    >
      {navItems.map((item, i) => (
        <NavItem key={i} path={item.path} label={item.label} icon={item.icon} />
      ))}
    </nav>
  );
};
