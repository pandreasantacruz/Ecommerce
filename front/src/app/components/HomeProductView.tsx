import React from "react";
import { getProducts } from "../services/products";
import ProductList from "./ProductList";

const HomeProductsView = async () => {
  const products = await getProducts();
  return <ProductList products={products} />;
};

export default HomeProductsView;
