import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const ButtonPrimary = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className=" font-poppins mt-4 px-6 py-2 bg-blackP text-foreground rounded-md hover:bg-blueP transition ring-4 ring-grisP ring-opacity-100"
      {...props}
    >
      {children}
    </button>
  );
};
export default ButtonPrimary;
