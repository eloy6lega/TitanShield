import { useState } from "react";
import Header2 from "../components/Header2";

export default function Servicios() {
  const [showAlert, setShowAlert] = useState(false);

  const handleCompra = () => {
    setShowAlert(true);
  };

  return (
    <div>
      <Header2 />
      <hr />
      <br />
      <h1 className="text-primary text-5xl text-center">Servicios</h1>
      <div className="flex justify-center">
        <div className="flex">
          <div className="card w-80 md:w-96 bg-base-100 shadow-xl mx-4 my-4">
            <div className="card-body items-center text-center">
              <h1 className="card-title">PLAN GRATUITO</h1>
              <figure className="px-10 pt-10">
                <img
                  src="https://www.neit.edu/wp-content/uploads/2022/10/Cyber-Security-Icon-Concept-2-1.jpeg"
                  alt="Shoes"
                  className="rounded-2xl w-full h-40 object-cover"
                />
              </figure>
              <ul>
                <li>Nuestro software con anuncios</li>
                <li>Un estudio gratuito</li>
                <li>Limpieza profunda</li>
                <li>Incluye anuncios</li>
              </ul>
            </div>
            <div className="card-actions flex justify-center">
              <button className="btn btn-primary" onClick={handleCompra}>
                Consiguelo gratis
              </button>
            </div>
          </div>

          <div className="card w-80 md:w-96 bg-base-100 shadow-xl mx-4 my-4">
            <div className="card-body items-center text-center">
              <h2 className="card-title">PLAN PREMIUM</h2>
              <figure className="px-10 pt-10">
                <img
                  src="https://www.genetec.com/binaries/content/gallery/illustrationstock_cyberthreats-recolored_adobestock_422696329.jpg"
                  alt="Shoes"
                  className="rounded-xl w-full h-40 object-cover"
                />
              </figure>
              <ul>
                <li>Nuestro software SIN anuncios</li>
                <li>Estudio gratuito de los sistemas</li>
                <li>Limpieza profunda</li>
                <li>Limpiador de aplicaciones</li>
                <li>Antimalware</li>
                <li>Revisiones periódicas</li>
              </ul>
            </div>
            <div className="card-actions flex justify-center">
              <button className="btn btn-primary" onClick={handleCompra}>
                Comprar por 39.99 €
              </button>
            </div>
          </div>

          <div className="card w-80 md:w-96 bg-base-100 shadow-xl mx-4 my-4">
            <div className="card-body items-center text-center">
              <h2 className="card-title">PLAN EMPRESAS</h2>
              <figure className="px-10 pt-10">
                <img
                  src="https://www.technologysolutions.net/wp-content/uploads/2023/09/pros-and-cons-scaled-2560x1280.jpeg"
                  alt="Shoes"
                  className="rounded-xl w-full h-40 object-cover"
                />
              </figure>
              <ul>
                <li>Nuestro software SIN anuncios</li>
                <li>Estudio gratuito de los sistemas y equipos de trabajo</li>
                <li>Limpieza profunda</li>
                <li>Limpiador de aplicaciones</li>
                <li>Antimalware</li>
                <li>Revisiones periódicas</li>
              </ul>
            </div>
            <div className="card-actions flex justify-center">
              <button className="btn btn-primary" onClick={handleCompra}>
                Comprar por 99.99 €
              </button>
            </div>
          </div>
          {showAlert && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="bg-green-900 p-8 rounded-lg shadow-lg z-10 border">
                <h2 className="text-xl font-semibold mb-4">¡Atención!</h2>
                <p className="mb-4">
                  Función NO disponible, por el momento. Disculpa las molestias.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setShowAlert(false)}
                >
                  Entendido
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
