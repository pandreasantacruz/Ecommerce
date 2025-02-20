import React from "react";
interface CardProps {
  name: string;
  description: string;
  image: string;
  price: number;
  onClick?: () => void;
}
export const Card: React.FC<CardProps> = ({
  name,
  description,
  image,
  price,
  onClick = () => null,
}) => {
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
    </div>
  );
};
