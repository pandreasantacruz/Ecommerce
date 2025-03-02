import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" font-poppins flex flex-col items-center justify-center h-screen bg-background text-foreground">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mt-2">Página no encontrada</p>

      <img
        src="/Imagenerror.png"
        alt="Imagen pagina no existe"
        className=" h-40 object-cover transition-transform duration-300 hover:scale-110"
      ></img>
      <Link
        href="/"
        className="mt-4 px-6 py-2 bg-blackP text-foreground rounded-md hover:bg-blueP ring-4 ring-color_4 ring-opacity-100 transition-transform duration-300 hover:scale-110 "
      >
        Volver al inicio
      </Link>
    </div>
  );
}
