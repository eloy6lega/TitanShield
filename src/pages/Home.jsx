import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
        <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-md hover:shadow-2xl">
          <img
            src="https://i.blogs.es/c2ee2b/oig.bv0/1366_2000.jpeg"
            alt="Imagen 1"
            className="w-full h-96 object-cover rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4 mb-2">Tranquilidad</h2>
          <button
            className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
            onClick={() => (window.location.href = "/about")}
          >
            Conócenos
          </button>
        </div>

        <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-md hover:shadow-2xl">
          <img
            src="https://images4.alphacoders.com/207/20724.jpg"
            alt="Imagen 2"
            className="w-full h-96 object-cover rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4 mb-2">Innovación</h2>
          <button
            className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
            onClick={() => (window.location.href = "/servicios")}
          >
            Servicios
          </button>
        </div>

        <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-md hover:shadow-2xl">
          <img
            src="https://img.freepik.com/fotos-premium/candado-ciberseguridad-bloqueo-digital-tecnologia-fondo-proteccion-datos-red_717440-2451.jpg"
            alt="Imagen 3"
            className="w-full h-96 object-cover rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4 mb-2">Seguridad</h2>
          <button
            className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
            onClick={() => (window.location.href = "/productos")}
          >
            Nuestros Productos
          </button>
        </div>
      </section>

      <hr className="w-full mx-auto border-gray-300 mt-8" />
    </>
  );
}
