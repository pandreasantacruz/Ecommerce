"use client";
import { useRouter } from "next/navigation";
import { Card } from "./Card";
import React, { useState, FC } from "react";
import { routes } from "@/app/routes/routes";

interface CardsProps {
  list: Record<string, any>[];
}
const Cards: FC<CardsProps> = ({ list }) => {
  const [items, setItems] = useState<Record<string, any>[]>(list);
  const router = useRouter();
  const onClickItem = (id: string) => {
    return () => {
      return router.push(routes.product_detail + "/" + id);
    };
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div style={{ display: "flex", gap: "16px" }}>
        {items.map((items, idx) => (
          <Card
            key={idx}
            description={items.description}
            image={items.image}
            name={items.name}
            price={items.price}
            onClick={onClickItem(items.id)}
          />
        ))}
      </div>
    </div>
  );
};
export default Cards;
