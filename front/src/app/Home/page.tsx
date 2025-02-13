import { Card } from "../../components/card";
import products from "./products";
const Demo: React.FC = () => {
  return (
    <div>
      <h1>Lista de Productos</h1>
      <div style={{ display: "flex", gap: "16px" }}>
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
export default Demo;
