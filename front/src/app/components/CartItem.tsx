import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

interface CartItemProps {
  name: string;
  quantity: number;
  image: string;
  price: number;
  description: string;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  name,
  quantity,
  image,
  price,
  description,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div className="flex items-center p-4 border rounded-lg shadow-md bg-white space-x-4 w-80">
      {/* Imagen del producto */}
      <img src={image} alt={name} className="w-16 h-16 object-cover rounded" />

      {/* Información del producto */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-500">${price}</p>

        {/* Controles de cantidad */}
        <div className="flex items-center mt-2 space-x-2">
          <button
            onClick={onDecrease}
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <FaMinus />
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            onClick={onIncrease}
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <FaPlus />
          </button>
          <p>{description}</p>
        </div>
      </div>

      {/* Botón de eliminar */}
      <button onClick={onRemove} className="text-red-500 hover:text-red-700">
        <FaTrash size={20} />
      </button>
    </div>
  );
};

export default CartItem;
