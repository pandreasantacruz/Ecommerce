"use client";
import React from "react";
import { useCart } from "../context/cartContext";
import CartItem from "../components/CartItem";
import { useAuth } from "../context/authContext";
import { postOrder } from "../services/orders";
import { DtoOrder } from "../services/orders";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { routes } from "../routes/routes";
import { FaHandPointDown } from "react-icons/fa";
import Link from "next/link";
import ButtonPrimary from "../components/buttons/buttonPrimary";
import usePrivate from "../hooks/usePrivate";

const CartView = () => {
  usePrivate();
  const router = useRouter();
  const { cartList, removeFromCart, total, resetCart } = useCart();
  const { token, user } = useAuth();
  const onRemove = (id: number) => {
    return removeFromCart(id);
  };
  const onByClick = async () => {
    try {
      if (!user) {
        return;
      }
      const data: DtoOrder = {
        userId: user.id,
        products: cartList.map((product) => product.id),
      };
      const order = await postOrder(data, token || "");
      toast.success(`Orden Numero ${order.id} Creada Exitosamente  `);
      resetCart();
      setTimeout(() => {
        router.push(routes.dashboard);
      }, 3000);
    } catch (error) {
      console.warn("Ocurrio un error al crear la orden", error);
      toast.error("Ocurrio un error al crear la orden");
    }
  };
  return (
    <div className="font-poppins p-4 flex flex-col items-center">
      <h2 className="text-3xl text-center font-bold transition-transform duration-300 hover:scale-110 py-2">
        Carrito de Compras
      </h2>
      <div className="pb-4">
        {total > 0 && (
          <ButtonPrimary onClick={onByClick}>Finalizar compra</ButtonPrimary>
        )}
      </div>

      {cartList?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 ">
          {cartList.map((p, index) => (
            <CartItem key={index} {...p} onRemove={() => onRemove(p.id)} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-4">
          <h3 className="text-xl text-center font-bold transition-transform duration-300 hover:scale-110">
            No hay productos en el carrito.
          </h3>
          <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-110">
            <h3 className="text-xl text-center font-bold pt-1">
              ¿Vamos de compras?
            </h3>
            <FaHandPointDown />
          </div>
          <Link href={routes.products}>
            <img
              src="/carritoCompras.png"
              alt="Carrito vacío"
              className="w-96 transition-transform duration-300 hover:scale-110"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartView;
