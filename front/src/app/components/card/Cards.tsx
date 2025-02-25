/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import { Card } from "./Card";
import React, { useState, FC } from "react";
import { routes } from "@/app/routes/routes";
import { useCart } from "@/app/context/cartContext";

interface CardsProps {
  list: Record<string, any>[];
}
const Cards: FC<CardsProps> = ({ list }) => {
  const [items, setItems] = useState<Record<string, any>[]>(list);
  const router = useRouter();
  const { addToCart } = useCart();

  const onClickItem = (id: string) => {
    return () => {
      return router.push(routes.product_detail + "/" + id);
    };
  };
  const onCartClick = (items: any) => (event: React.MouseEvent) => {
    event.stopPropagation();

    return addToCart(items);
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div style={{ display: "flex", gap: "" }}>
        {items.map((items, idx) => (
          <Card
            key={idx}
            description={items.description}
            image={items.image}
            name={items.name}
            price={items.price}
            onClick={onClickItem(items.id)}
            onCartClick={onCartClick(items)}
          />
        ))}
      </div>
    </div>
  );
};
export default Cards;
