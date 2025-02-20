"use client";
import { FC } from "react";
import React from "react";
import { Card } from "../components/card/Card";
interface ProductDetailProps {
  name: string;
  description: string;
  image: string;
  price: number;
  onClick?: () => void;
}
const ProductDetail: FC<ProductDetailProps> = ({
  name,
  description,
  image,
  price,
}) => {
  return (
    <div>
      <Card description={description} image={image} name={name} price={price} />
    </div>
  );
};

export default ProductDetail;
