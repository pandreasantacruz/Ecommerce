import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

interface CartItemProps {
  name: string;
  quantity: number;
  image: string;
  price: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  name,
  quantity,
  image,
  price,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div className="flex items-center p-4 border rounded-lg shadow-md space-x-4 w-80 ">
      <img src={image} alt={name} className="w-16 h-16 object-cover rounded" />

      <div className="flex-1">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-500">${price}</p>

        <div className="flex items-center mt-2 space-x-2">
          <button
            onClick={onDecrease}
            className="p-2 bg-blackP rounded-md hover:bg-grisP"
          >
            <FaMinus />
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            onClick={onIncrease}
            className="p-2 bg-blackP rounded-md hover:bg-blueP"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      <button onClick={onRemove} className="text-red-950 hover:text-red-700">
        <FaTrash size={20} />
      </button>
    </div>
  );
};

export default CartItem;
