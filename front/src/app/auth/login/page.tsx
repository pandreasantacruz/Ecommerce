import React from "react";
import Login from "../../views/Login";
import Link from "next/link";

const loginPage = () => {
  return (
    <div>
      <Login />
      <Link href="/auth/register">
        <button>Registrate</button>
      </Link>
    </div>
  );
};

export default loginPage;
