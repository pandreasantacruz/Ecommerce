import React from "react";
import Register from "../../views/Register";
import Link from "next/link";
import ButtonSecondary from "@/app/components/buttons/buttonSecondary";
const registerpage = () => {
  return (
    <div className=" font-poppins grid grid-cols-1 md:grid-cols-2 min-h-screen w-full overflow-hidden">
      <div
        className="relative flex flex-col justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat shadow-2xl border-l-4 border-grisP transform scale-105"
        style={{ backgroundImage: "url('/imagen3.jpg')" }}
      >
        <p className="text-lg mb-6 transition-transform duration-300 hover:scale-110">
          ¿Ya tienes cuenta?
        </p>
        <Link href="/auth/login">
          <ButtonSecondary>inicia Sesion</ButtonSecondary>
        </Link>
        <img
          src="/3.png"
          alt="LogoE tech"
          className=" h-40 animate-pulse transition-transform duration-300 hover:scale-110"
        ></img>
      </div>
      <div
        className="flex flex-col justify-center items-center bg-background text-foreground p-10"
        style={{ backgroundImage: "url('/etechlogos.png')" }}
      >
        <h2 className="text-4xl font-bold mb-4 transition-transform duration-300 hover:scale-110">
          Registrate
        </h2>
        <Register />
      </div>
    </div>
  );
};

export default registerpage;
