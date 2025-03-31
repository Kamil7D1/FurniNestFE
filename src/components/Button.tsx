import React from "react";

interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="rounded-[2px] bg-(--color-tangerine-orange) px-6 py-3 transition">
      <p className="font-medium text-white">{text}</p>
    </button>
  );
};
