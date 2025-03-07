import React from "react";
import { Link } from "react-router";
import { LucideIcon } from "lucide-react";

interface NavItemProps {
  path: string;
  label: string;
  icon: LucideIcon;
}

export const NavItem: React.FC<NavItemProps> = ({
  path,
  label,
  icon: Icon,
}) => {
  return (
    <Link
      to={path}
      className="basis-1/5 flex flex-col justify-center items-center"
    >
      <Icon size={24} strokeWidth={1.5} />
      <p>{label}</p>
    </Link>
  );
};
