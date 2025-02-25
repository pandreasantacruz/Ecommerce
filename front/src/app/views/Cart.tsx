/* eslint-disable @typescript-eslint/no-unused-vars */
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

const CartView = () => {
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
    <div>
      <div className="flex justify-between">
        <h2>Carrito de Compras</h2>
        <button disabled={total === 0} onClick={onByClick}>
          Finalizar compra
        </button>
      </div>
      {cartList?.length ? (
        cartList.map((p, index) => (
          <CartItem key={index} {...p} onRemove={() => onRemove(p.id)} />
        ))
      ) : (
        <p>No HAY NADA EN EL CARRITO</p>
      )}
    </div>
  );
};

export default CartView;
