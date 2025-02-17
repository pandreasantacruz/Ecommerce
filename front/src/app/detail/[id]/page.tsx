import React from "react";

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return <div>Detalle de: {id}</div>;
};
export default Detail;
