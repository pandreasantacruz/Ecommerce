/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import { Card } from "./Card";
import React, { useState, FC, useEffect } from "react";
import { routes } from "@/app/routes/routes";
import { useCart } from "@/app/context/cartContext";
import { useAuth } from "@/app/context/authContext";
import { useFavorites } from "@/app/context/favoriteContext";

interface CardsProps {
  list: Record<string, any>[];
}
const Cards: FC<CardsProps> = ({ list }) => {
  const [items, setItems] = useState<Record<string, any>[]>(list);
  const router = useRouter();
  const { addToCart } = useCart();
  const { favoriteItems, toggleFavorite } = useFavorites();
  const { isAuth } = useAuth();

  const onClickItem = (id: string) => {
    return () => {
      return router.push(routes.product_detail + "/" + id);
    };
  };
  const onCartClick = (items: any) => (event: React.MouseEvent) => {
    event.stopPropagation();

    return addToCart(items);
  };
  useEffect(() => {
    //lo usamos en filtro
    setItems(list);
  }, [list]);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8 font-poppins pt-4">
        {items.map((items, idx) => (
          <Card
            key={idx}
            description={items.description}
            image={items.image}
            name={items.name}
            price={items.price}
            onClick={onClickItem(items.id)}
            onCartClick={onCartClick(items)}
            isFavorite={!!favoriteItems[items.id]}
            toggleFavorite={toggleFavorite}
            showDescription={false}
            id={idx}
          />
        ))}
      </div>
      {!items?.length && <p>No hay productos en esa categoria</p>}
    </div>
  );
};
export default Cards;
