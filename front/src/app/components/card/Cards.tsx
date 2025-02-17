"use client";
import { IProduct } from "@/app/types";
import { Card } from "./Card";
import productsSample from "../../../helpers/products";
import React, { useState } from "react";

const Cards: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products, setProducts] = useState<IProduct[]>(productsSample);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div style={{ display: "flex", gap: "16px" }}>
        {products.map((product, idx) => (
          <Card
            key={idx}
            description={product.description}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
export default Cards;
