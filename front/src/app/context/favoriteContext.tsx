"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { IProduct } from "../types";
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

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteItems");
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        if (Array.isArray(parsedFavorites)) {
          setFavoriteItems(parsedFavorites);
        } else {
          console.error(
            "Error: Los favoritos en localStorage no son un array válido."
          );
          localStorage.removeItem("favoriteItems"); // Limpia en caso de error
        }
      } catch (error) {
        console.error("Error al parsear favoritos:", error);
        localStorage.removeItem("favoriteItems"); // Limpia en caso de error
      }
    }
  }, []);

  const toggleFavorite = (product: IProduct) => {
    setFavoriteItems((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(
        (item) => item.id === product.id
      );

      console.log("Producto recibido en toggleFavorite:", product);
      console.log("¿Ya es favorito?", isAlreadyFavorite);

      let updatedFavorites;
      if (isAlreadyFavorite) {
        updatedFavorites = prevFavorites.filter(
          (item) => item.id !== product.id
        );
      } else {
        updatedFavorites = [...prevFavorites, product]; // Solo agrega si no existe
      }

      console.log("Guardando en localStorage:", updatedFavorites);
      localStorage.setItem("favoriteItems", JSON.stringify(updatedFavorites));

      return updatedFavorites;
    });
  };
  console.log(favoriteItems, "favoriteitem");
  return (
    <FavoriteContext.Provider value={{ favoriteItems, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);
