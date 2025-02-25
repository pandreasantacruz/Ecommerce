/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
//Que queremos guardar en el contexto

interface CartContextType {
  total: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cartList: any[];
  addToCart: (product: any) => void;
  removeFromCart: (product: any) => void;
  upDateQuantity: (productId: string) => void;
  resetCart: () => void;
}

const cartContext = createContext<CartContextType | undefined>(undefined);

// Un componente que recibe un children que genera otro componente y retorna nuestroi provider con el children de hijo
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartList, setCartList] = useState<CartContextType["cartList"]>([]);
  const [total, setTotal] = useState<CartContextType["total"]>(0);

  const addToCart = (items: any) => {
    console.log(items, "EstoItems");
    setCartList((statePrev) => [...statePrev, items]); //que el cart agregue al estado previo el producto
    setTotal((prevTotal) => prevTotal + 1);
  };
  const removeFromCart = (id: number) => {
    setCartList((prevCart) => prevCart.filter((p) => p.id !== id));
    setTotal((prevTotal) => {
      if (prevTotal == 0) {
        return 0;
      }
      return prevTotal - 1;
    });
  };

  const upDateQuantity = () => {};

  const resetCart = () =>
    setTimeout(() => {
      setCartList([]);
      setTotal(0);
    }, 3000);

  useEffect(() => {
    if (!cartList) {
      return;
    }
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setCartList(JSON.parse(localCart)); // Si no hay nada en localStorage, usa un array vacío
    }
    // Ahora estamos seguros de que `localCart` es una string válida
  }, []);
  return (
    <cartContext.Provider
      value={{
        cartList,
        total,
        addToCart,
        removeFromCart,
        upDateQuantity,
        resetCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};
