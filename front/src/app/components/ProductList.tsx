"use client";
//Va a renderizzar eñ categories FILTER
import React, { useEffect, useState } from "react";
import Cards from "./card/Cards";
import { IProduct } from "../types";
import { useSearchParams } from "next/navigation";
interface Props {
  products: IProduct[];
}
const ProductList: React.FC<Props> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] =
    useState<IProduct[]>(products);
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  useEffect(() => {
    const crrCategory = Number(categoryId);

    if (!crrCategory) {
      setFilteredProducts(products);
      return;
    }

    setFilteredProducts(() => {
      return products?.filter(
        (prod: IProduct) => prod.categoryId == crrCategory
      );
    });
  }, [categoryId]);

  return <Cards list={filteredProducts} />;
};

export default ProductList;
