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
    <div className="font-poppins mx-4 py-4">
      <h2 className="text-2xl font-bold text-center">Detalle</h2>
      <div className="flex justify-center">
        <ProductDetail {...product} />
      </div>
    </div>
  );
};
export default Detail;
