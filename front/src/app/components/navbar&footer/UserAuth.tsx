"use client";
import Link from "next/link";
import React from "react";
import ButtonPrimary from "../buttons/buttonPrimary";
import { routes } from "@/app/routes/routes";
import { useAuth } from "@/app/context/authContext";
import { useCart } from "@/app/context/cartContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { PiHeartBold } from "react-icons/pi";

const UserAuth = () => {
  const { isAuth, resetUserData } = useAuth();
  const { total } = useCart();
  const { user } = useAuth();
  //cuando esta logueado
  if (isAuth === null) {
    return <div>loading</div>;
  }
  if (isAuth) {
    return (
      <div className="flex gap-3 items-center ">
        <Link className="hover:text-blueP transition" href={routes.favoritos}>
          <PiHeartBold />
        </Link>
        <Link
          href={routes.dashboard}
          className=" font-semibold text-foreground hover:text-blueP transition"
        >
          {user?.name || "Usuario"}
        </Link>
        <div className="hover:text-blueP transition">{total}</div>
        <Link href={routes.cart} className="hover:text-blueP transition">
          <MdOutlineShoppingCart />
        </Link>
        <Link href={routes.dashboard} className="hover:text-blueP transition">
          <FaRegUserCircle />
        </Link>
        <span onClick={resetUserData} className="hover:text-blueP transition">
          <IoIosLogOut />
        </span>
      </div>
    );
  }
  //cuando no
  return (
    <div className="flex justify-center items-center space-x-4 mx-auto pb-4 ">
      <Link href={routes.login}>
        <ButtonPrimary>Iniciar Sesión</ButtonPrimary>
      </Link>
      <Link href={routes.register}>
        <ButtonPrimary>Registrarse</ButtonPrimary>
      </Link>
    </div>
  );
};

export default UserAuth;
