import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  path: string;
}

export const Button: React.FC<ButtonProps> = ({ text, path }) => {
  return (
    <Link to={path}>
      <button className="rounded-[2px] bg-(--color-tangerine-orange) px-6 py-3 transition">
        <p className="font-medium text-white">{text}</p>
      </button>
    </Link>
  );
};
