import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const ButtonSecondary = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className=" font-poppins mt-4 px-6 py-2 bg-blueP text-foreground rounded-md hover:bg-blackP transition ring-4 ring-offset-blue-500 ring-opacity-100"
      {...props}
    >
      {children}
    </button>
  );
};
export default ButtonSecondary;
