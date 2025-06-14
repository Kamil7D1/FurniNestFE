import React, { useEffect, useState } from "react";
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
  const [isLabel, setIsLabel] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLabel(window.innerWidth >= 400);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Link
      to={path}
      className="flex h-full basis-1/5 flex-col items-center justify-end"
    >
      <Icon size={24} strokeWidth={2} className="text-(--color-dark-gray)" />
      {isLabel ? (
        <p className="mt-1 leading-none font-medium">{label}</p>
      ) : null}
    </Link>
  );
};
