import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-900">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mt-2">Página no encontrada!!!!!</p>
      <Link
        href="/"
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
