import React from "react";

interface ButtonProps {
  text: string;
  type: "button" | "reset" | "submit";
  variant?: "default" | "reserved" | "warning";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type,
  variant = "default",
  className,
}) => {
  let bacgroundColor = "";
  let textColor = "";

  if (variant === "default") {
    bacgroundColor = "bg-(--color-tangerine-orange)";
    textColor = "text-white";
  }

  if (variant === "reserved") {
    bacgroundColor = "bg-white";
    textColor = "text-(--color-tangerine-orange)";
  }

  if (variant === "warning") {
    bacgroundColor = "bg-(--color-tangerine-red)";
    textColor = "text-white";
  }

  return (
    <button
      type={type}
      className={`${className} rounded-[2px] border-1 border-(--color-tangerine-orange) px-6 py-3 transition ${bacgroundColor}`}
    >
      <p className={`font-medium ${textColor}`}>{text}</p>
    </button>
  );
};
