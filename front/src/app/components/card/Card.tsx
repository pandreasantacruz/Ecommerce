/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { CiHeart } from "react-icons/ci";
import { useAuth } from "@/app/context/authContext";
import ButtonPrimary from "../buttons/buttonPrimary";
import Link from "next/link";
import { routes } from "@/app/routes/routes";
import { IProduct } from "@/app/types";

interface CardProps {
  id: number;
  name: string;
  description?: string;
  image: string;
  price: number;
  onClick?: () => void;
  onCartClick?: (event: any) => void;
  isFavorite: boolean;
  toggleFavorite: (product: IProduct) => void;
  showDescription?: boolean;
}

export const Card: React.FC<CardProps> = ({
  id,
  name,
  description,
  image,
  price,
  onClick = () => null,
  onCartClick = () => null,
  isFavorite,
  toggleFavorite,
  showDescription = false,
}) => {
  const { isAuth } = useAuth();

  return (
    <div
      onClick={onClick}
      role="button"
      className="font-poppins mx-2 w-96 px-2"
    >
      <div>
        <div className="relative bg-blackP rounded-lg shadow-md p-4 transition transform hover:scale-105">
          {isAuth && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite({
                  id,
                  name,
                  description: description || "",
                  image,
                  price,
                });
              }}
              className="absolute top-4 right-4"
            >
              <CiHeart
                className={`w-6 h-6 transition-colors duration-300 ${
                  isFavorite ? "text-red-500" : "text-gray-500"
                }`}
              />
            </button>
          )}
          <img
            src={image}
            alt={name}
            className="h-60 w-full rounded-md object-cover mb-4"
          />
          <div>
            <h3 className="text-lg font-semibold text-foreground text-center">
              {name}
            </h3>
            {showDescription && (
              <p className="text-sm text-foreground text-justify">
                {description}
              </p>
            )}
            <p className="text-lg font-bold text-foreground mt-2">$ {price}</p>
          </div>
          <div className="mt-4 ">
            {isAuth ? (
              <ButtonPrimary onClick={onCartClick}>Compra</ButtonPrimary>
            ) : (
              <Link href={routes.login}>
                <ButtonPrimary>Inicia Sesión</ButtonPrimary>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
