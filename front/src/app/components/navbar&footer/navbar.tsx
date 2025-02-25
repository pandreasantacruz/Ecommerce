import Link from "next/link";
import UserAuth from "./UserAuth";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">Tech E</div>

        {/* Links de navegación */}
        <div className="flex space-x-6">
          <Link href="/landing" className="hover:text-gray-300 transition">
            Landing
          </Link>
          <Link href="/inicio" className="hover:text-gray-300 transition">
            Inicio
          </Link>
          <Link href="/product" className="hover:text-gray-300 transition">
            Productos
          </Link>
          <Link href="/miperfil" className="hover:text-gray-300 transition">
            Mi Perfil
          </Link>
          <Link href="/otro" className="hover:text-gray-300 transition">
            Otro
          </Link>
        </div>
      </div>
      <UserAuth />
    </nav>
  );
};

export default Navbar;
