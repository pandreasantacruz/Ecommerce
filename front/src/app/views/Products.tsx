import React from "react";
import Cards from "../components/card/Cards";
import { getProducts } from "../services/products";

const ProductsView = async () => {
  const products = await getProducts();
  return (
    <div>
      <Cards list={products} />
    </div>
  );
};

export default ProductsView;
