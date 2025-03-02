"use client";
import { FC } from "react";
import React from "react";
import { Card } from "../components/card/Card";
import { useFavorites } from "../context/favoriteContext";
interface ProductDetailProps {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  showDescription?: boolean;
  onClick?: () => void;
}
const ProductDetail: FC<ProductDetailProps> = ({
  id,
  name,
  description,
  image,
  price,
}) => {
  const favoriteContext = useFavorites();
  if (!favoriteContext) {
    return null; // or handle the error appropriately
  }
  const { favoriteItems, toggleFavorite } = favoriteContext;

  return (
    <div>
      <Card
        id={id}
        description={description}
        image={image}
        name={name}
        price={price}
        isFavorite={favoriteItems.some((item) => item.id === id)}
        toggleFavorite={() =>
          toggleFavorite({ id, name, description, image, price })
        }
        showDescription={true}
      />
    </div>
  );
};

export default ProductDetail;
