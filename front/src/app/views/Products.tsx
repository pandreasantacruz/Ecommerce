import React from "react";
import { getProducts } from "../services/products";
import CategoriesFilter from "../components/categoriesFilter";
import { getCategories } from "../services/categories";
import ProductList from "../components/ProductList";

const ProductsView = async () => {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <div>
      <div>
        <h1>Lista de Productos</h1>
        <div>
          <h2>Categorias</h2>
          <div>
            <CategoriesFilter categories={categories} />
          </div>
        </div>
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsView;
