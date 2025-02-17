import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Nuestra Historia</h3>
          <p className="text-gray-400">
            Somos una empresa dedicada a brindar soluciones innovadoras desde el
            año 2000. Nuestro compromiso es la excelencia y la satisfacción de
            nuestros clientes.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Acerca de Nosotros</h3>
          <p className="text-gray-400">
            Creemos en la tecnología y la creatividad como motores del cambio.
            Nuestro equipo trabaja para ofrecer productos de calidad y servicio
            excepcional.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-facebook text-2xl"></i>
            </Link>
            <Link href="#" className="hover:text-blue-500 transition">
              <i className="fab fa-twitter text-2xl"></i>
            </Link>
            <Link href="#" className="hover:text-pink-500 transition">
              <i className="fab fa-instagram text-2xl"></i>
            </Link>
            <Link href="#" className="hover:text-blue-600 transition">
              <i className="fab fa-linkedin text-2xl"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="text-center text-gray-500 mt-8 text-sm">
        © {new Date().getFullYear()} Tech E. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
