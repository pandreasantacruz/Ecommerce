import React from "react";
import Login from "../../views/Login";
import Link from "next/link";
import ButtonSecondary from "@/app/components/buttons/buttonSecondary";

const loginPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen font-poppins">
      {/* Sección izquierda con el formulario */}
      <div
        className="flex flex-col justify-center items-center bg-background text-foreground p-10"
        style={{ backgroundImage: "url('/etechlogos.png')" }}
      >
        <h2 className="text-4xl font-bold mb-4 transition-transform duration-300 hover:scale-110">
          Bienvenido
        </h2>
        <p className="text-lg mb-6 transition-transform duration-300 hover:scale-110">
          Inicia sesión para acceder a tu cuenta
        </p>
        <Login />
      </div>

      {/* Sección derecha con fondo de color */}
      <div
        className="relative flex flex-col justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat shadow-2xl border-l-4 border-grisP transform scale-105"
        style={{ backgroundImage: "url('/imagen4.jpg')" }}
      >
        <p className="text-lg mb-6 transition-transform duration-300 hover:scale-110">
          ¿No tienes cuenta con nosotros?
        </p>
        <Link href="/auth/register">
          <ButtonSecondary>Regístrate</ButtonSecondary>
        </Link>
        <img
          src="/3.png"
          alt="LogoE tech"
          className=" h-40 animate-pulse transition-transform duration-300 hover:scale-110"
        ></img>
      </div>
    </div>
  );
};

export default loginPage;
