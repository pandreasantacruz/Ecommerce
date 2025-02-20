import React from "react";
import Cards from "../components/card/Cards";
import { getProducts } from "../services/products";

const HomeView = async () => {
  const products = await getProducts();
  return (
    <div>
      HomeView
      <Cards list={products} />
    </div>
  );
};

export default HomeView;
