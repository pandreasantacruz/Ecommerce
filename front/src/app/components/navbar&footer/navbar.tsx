import Link from "next/link";
import UserAuth from "./UserAuth";
import { routes } from "../../routes/routes";
const Navbar = () => {
  return (
    <div className="sticky flex justify-center pt-6 ">
      <nav
        className="bg-blackP text-foreground ring-4 ring-grisP ring-opacity-100 
        w-[90%] max-w-7xl rounded-2xl shadow-xl 
      backdrop-blur-lg bg-opacity-80 font-poppins"
      >
        <div className=" max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
          <div>
            {" "}
            <Link href={routes.home}>
              <img
                src="/3.png"
                alt="logo"
                className="h-28 w-auto animate-pulse transition-transform duration-300 hover:scale-110"
              ></img>
            </Link>
          </div>

          {/* Links de navegación */}
          <div className="flex space-x-6">
            <Link href={routes.home} className="hover:text-blueP transition">
              Inicio
            </Link>
            <Link
              href={routes.products}
              className="hover:text-blueP transition"
            >
              Productos
            </Link>

            <Link
              href={routes.nosotros}
              className="hover:text-blueP transition"
            >
              Nosotros
            </Link>
          </div>
          <nav>
            <UserAuth />
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
