import React from "react";
import { getProducts } from "../services/products";
import CategoriesFilter from "../components/categoriesFilter";
import { getCategories } from "../services/categories";
import ProductList from "../components/ProductList";

const ProductsView = async () => {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <div className="py-4 font-poppins">
      <h2 className="text-3xl text-center font-bold transition-transform duration-300 hover:scale-110 ">
        Productos
      </h2>
      <div className=" font-poppins grid grid-cols-[20%_80%] gap-8 ">
        <div className="pl-6 pt-4">
          <CategoriesFilter categories={categories} />
        </div>
        <div>
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
