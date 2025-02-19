import Link from "next/link";
import ButtonPrimary from "../buttons/buttonPrimary";

const Navbar = () => {
  const isAuth = false; // Cambiar esto según la autenticación real

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
          <Link href="/productos" className="hover:text-gray-300 transition">
            Productos
          </Link>
          <Link href="/miperfil" className="hover:text-gray-300 transition">
            Mi Perfil
          </Link>
          <Link href="/otro" className="hover:text-gray-300 transition">
            Otro
          </Link>
        </div>
        <div>
          {isAuth ? (
            <div className="flex items-center space-x-4">
              <img
                src="/profile.jpg"
                alt="Perfil"
                className="w-8 h-8 rounded-full"
              />
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link href="/login">
                <ButtonPrimary>Iniciar Sesión</ButtonPrimary>
              </Link>
              <Link href="/register">
                <ButtonPrimary>Registrarse</ButtonPrimary>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
