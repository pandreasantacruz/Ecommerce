import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">Tech E</div>

        <div className="flex space-x-6">
          <Link href={"/landing"} className="hover:text-gray-300 transtion">
            {" "}
            Landing
          </Link>
          <Link href={"/inicio"} className="hover:text-gray-300 transtion">
            {" "}
            Inicio
          </Link>
          <Link href={"/productos"} className="hover:text-gray-300 transtion">
            {" "}
            Productos
          </Link>
          <Link href={"miperfil"} className="hover:text-gray-300 transtion">
            {" "}
            Mi Perfil
          </Link>

          <Link href={"/Otro"} className="hover:text-gray-300 transtion">
            {" "}
            Otro
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
