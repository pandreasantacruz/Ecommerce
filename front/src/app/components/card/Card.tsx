/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useAuth } from "@/app/context/authContext";
import ButtonPrimary from "../buttons/buttonPrimary";

interface CardProps {
  name: string;
  description: string;
  image: string;
  price: number;
  onClick?: () => void;
  onCartClick?: (event: any) => void;
}
export const Card: React.FC<CardProps> = ({
  name,
  description,
  image,
  price,
  onClick = () => null,
  onCartClick = () => null,
}) => {
  const { isAuth } = useAuth();

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "16px", width: "250px" }}
      onClick={onClick}
      role="button" //Buscar
    >
      <h2>{name}</h2>
      <div>
        <img src={image} alt={name} />
      </div>
      <p>{description}</p>
      <p>
        <strong>Precio:</strong> ${price}
      </p>
      <div>
        {isAuth ? (
          <ButtonPrimary onClick={onCartClick}>Compra</ButtonPrimary>
        ) : (
          <ButtonPrimary>Inicia Sesion</ButtonPrimary>
        )}
      </div>
    </div>
  );
};
