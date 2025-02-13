import React from "react";
import { IProduct } from "../../types";

export const Card: React.FC<IProduct> = ({
  name,
  description,
  price,
  stock,
}) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", width: "250px" }}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <strong>Precio:</strong> ${price}
      </p>
      <p>
        <strong>Stock:</strong> {stock} unidades
      </p>
    </div>
  );
};
