import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" font-poppins bg-blackP text-foreground py-8 ring-4 ring-grisP ring-opacity-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3 ">Nuestra Historia</h3>
          <p className="text-gray-400 text-justify">
            Somos una empresa dedicada a brindar soluciones innovadoras desde el
            año 2000. Nuestro compromiso es la excelencia y la satisfacción de
            nuestros clientes.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Acerca de Nosotros</h3>
          <p className="text-gray-400 text-justify">
            Creemos en la tecnología y la creatividad como motores del cambio.
            Nuestro equipo trabaja para ofrecer productos de calidad y servicio
            excepcional.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-center">Síguenos</h3>
          <div className="flex space-x-8 justify-center">
            <Link
              href="www.facebook.com"
              className="hover:text-blueP transition"
            >
              <FaSquareFacebook />
            </Link>
            <Link href="#" className="hover:text-blueP transition">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-blueP transition">
              <FaLinkedin />
            </Link>
            <Link href="#" className="hover:text-blueP transition">
              <MdEmail />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 text-sm">
        © {new Date().getFullYear()} Tech E. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
