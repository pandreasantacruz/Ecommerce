import React from "react";
import Register from "../../views/Register";
import Link from "next/link";
const registerpage = () => {
  return (
    <div>
      <Register />
      <Link href="/auth/login">
        <button>Inicia Sesion</button>
      </Link>
    </div>
  );
};

export default registerpage;
