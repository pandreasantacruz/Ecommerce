"use client";
import { useFavorites } from "@/app/context/favoriteContext";
import { useAuth } from "@/app/context/authContext";
import { useRouter } from "next/navigation";
import { Card } from "../components/card/Card";
import { IProduct } from "../types";

const FavoritosPage: React.FC = () => {
  const { isAuth } = useAuth();
  const favoritesContext = useFavorites();
  const favoriteItems = favoritesContext?.favoriteItems || [];
  const toggleFavorite = (product: IProduct) => {
    favoritesContext?.toggleFavorite(product);
  };
  console.log("Favoritos", favoriteItems);
  const router = useRouter();

  if (!isAuth) {
    return (
      <div className="text-center py-4">
        <p className="text-xl">Debes iniciar sesión para ver tus favoritos.</p>
        <button
          onClick={() => router.push("/login")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Iniciar Sesión
        </button>
      </div>
    );
  }

  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold text-center">Mis Favoritos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-4">
        {favoriteItems.length > 0 ? (
          favoriteItems.map((product: IProduct, index: number) => (
            <Card
              key={product.id || index}
              description={product.description}
              image={product.image}
              name={product.name}
              price={product.price}
              isFavorite={true}
              toggleFavorite={toggleFavorite}
              id={product.id}
            />
          ))
        ) : (
          <p className="text-center col-span-3">
            No tienes productos favoritos aún.
          </p>
        )}
      </div>
    </div>
  );
};

export default FavoritosPage;
