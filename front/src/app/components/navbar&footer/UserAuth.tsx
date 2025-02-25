"use client";
import Link from "next/link";
import React from "react";
import ButtonPrimary from "../buttons/buttonPrimary";
import { routes } from "@/app/routes/routes";
import { useAuth } from "@/app/context/authContext";
import { useCart } from "@/app/context/cartContext";

const UserAuth = () => {
  const { isAuth, resetUserData } = useAuth();
  const { total } = useCart();
  //cuando esta logueado
  if (isAuth === null) {
    return <div>loading</div>;
  }
  if (isAuth) {
    return (
      <div className="flex gap-3 items-center">
        <span>Nombre de Usuario</span>
        <Link href={routes.cart}>
          <button>AquiVaCarrito</button>
        </Link>
        <Link href="/miperfil">
          <div className="rounded-full overflow-hidden">
            <img
              src="https://img.freepik.com/vector-premium/icono-perfil-usuario-estilo-plano-ilustracion-vector-avatar-miembro-sobre-fondo-aislado-concepto-negocio-signo-permiso-humano_157943-15752.jpg?w=740"
              alt="Perfil"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </Link>
        <span onClick={resetUserData}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Logout">
              <g>
                <path d="M20.968,18.448a2.577,2.577,0,0,1-2.73,2.5c-2.153.012-4.306,0-6.459,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.647A1.546,1.546,0,0,0,19,4.175a3.023,3.023,0,0,0-1.061-.095H11.779a.5.5,0,0,1,0-1c2.224,0,4.465-.085,6.687,0a2.567,2.567,0,0,1,2.5,2.67Z"></path>
                <path d="M3.176,11.663a.455.455,0,0,0-.138.311c0,.015,0,.028-.006.043s0,.027.006.041a.457.457,0,0,0,.138.312l3.669,3.669a.5.5,0,0,0,.707-.707L4.737,12.516H15.479a.5.5,0,0,0,0-1H4.737L7.552,8.7a.5.5,0,0,0-.707-.707Z"></path>
              </g>
            </g>
          </svg>
        </span>
        {total}
      </div>
    );
  }
  //cuando no
  return (
    <div className="flex space-x-4">
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
