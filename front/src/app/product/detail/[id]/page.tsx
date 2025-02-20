import { getProductbyId } from "@/app/services/products";
import ProductDetail from "@/app/views/ProductDetail";
import React from "react";

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const product = await getProductbyId(Number(id));
  if (!product) {
    return <div>No existe ese producto</div>;
  }
  return (
    <div>
      Detalle de:
      <ProductDetail {...product} />
    </div>
  );
};
export default Detail;
