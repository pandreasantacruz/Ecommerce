"use client";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { IProduct } from "../types";
import "react-toastify/dist/ReactToastify.css";

interface FavoriteContextProps {
  favoriteItems: IProduct[];
  toggleFavorite: (product: IProduct) => void;
}

const FavoriteContext = createContext<FavoriteContextProps | undefined>(
  undefined
);

export const FavoriteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoriteItems, setFavoriteItems] = useState<IProduct[]>([]);
  const isFirstRender = useRef(true);

  // ✅ Cargar favoritos solo cuando el componente esté montado en el cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Evita el error en el servidor
      try {
        const storedFavorites = localStorage.getItem("favoriteItems");
        setFavoriteItems(storedFavorites ? JSON.parse(storedFavorites) : []);
      } catch (error) {
        console.error("Error al cargar favoritos desde localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    if (!isFirstRender.current && typeof window !== "undefined") {
      localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
    }
    isFirstRender.current = false;
  }, [favoriteItems]);

  const toggleFavorite = (product: IProduct) => {
    const isAlreadyFavorite = favoriteItems.some(
      (item) => item.id === product.id
    );
    const updatedFavorites = isAlreadyFavorite
      ? favoriteItems.filter((item) => item.id !== product.id)
      : [...favoriteItems, product];

    setFavoriteItems(updatedFavorites);

    setTimeout(() => {
      if (isAlreadyFavorite) {
        toast.info(`Eliminado de favoritos: ${product.name}`, {
          autoClose: 2000,
        });
      } else {
        toast.success(`Agregado a favoritos: ${product.name}`, {
          autoClose: 2000,
        });
      }
    }, 0);
  };

  return (
    <FavoriteContext.Provider value={{ favoriteItems, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoriteProvider");
  }
  return context;
};
