import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Error 404</h1>
      <p className="text-lg text-gray-400 mb-8">Página no encontrada</p>

      <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        <Link to="/" className=" hover:text-yellow-500">
          Volver al inicio
        </Link>
      </button>
    </div>
  );
}
