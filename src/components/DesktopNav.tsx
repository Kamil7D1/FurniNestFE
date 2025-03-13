import React from "react";
import { navItems } from "../data/navItems";
import { NavItem } from "./NavItem";

export const DesktopNav: React.FC = () => {
  return (
    <nav className="flex gap-8">
      {navItems.map((item, i) => (
        <NavItem key={i} path={item.path} label={item.label} icon={item.icon} />
      ))}
    </nav>
  );
};
