import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const ButtonPrimary = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200 transition"
      {...props}
    >
      {children}
    </button>
  );
};
export default ButtonPrimary;
