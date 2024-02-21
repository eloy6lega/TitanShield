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
      <h1 className="text-primary text-5xl text-center">Nuestros Cursos</h1>
      <div className="flex justify-center">
        <div className="flex">
          <div className="card w-96 md:w-96 bg-base-100 shadow-xl mx-4 my-4">
            <div className="card-body items-center text-center p-8">
              <h1 className="card-title text-lg font-semibold mb-4">
                CURSO NIVEL BÁSICO
              </h1>
              <figure className="mb-4">
                <img
                  src="https://www.xteach.es/wp-content/uploads/2021/10/herramientas-para-crear-cursos-online-scaled.jpg"
                  alt="Shoes"
                  className="rounded-2xl w-full h-60 object-cover"
                />
              </figure>
              <ul className="text-sm">
                <li>- Libro de Ciberseguridad Nivel Básico</li>
                <li>- Disponibilidad online de clases</li>
                <li>- Chatbot 24h para dudas</li>
                <li>- Pack de programas</li>
                <li>- Carnet de Estudiante</li>
                <li>
                  - Titulación Oficial en <strong>CiberPrincipiante</strong>
                </li>
              </ul>
            </div>
            <div className="card-actions flex justify-center pb-8">
              <button className="btn btn-primary" onClick={handleCompra}>
                Comprar por 7.99 €
              </button>
            </div>
          </div>

          <div className="card w-96 md:w-96 bg-base-100 shadow-xl mx-4 my-4">
            <div className="card-body items-center text-center p-8">
              <h2 className="card-title text-lg font-semibold mb-4">
                CURSO NIVEL MEDIO
              </h2>
              <figure className="mb-4">
                <img
                  src="https://afsformacion.com/wp-content/webp-express/webp-images/uploads/2023/01/cursos-online-consejos.jpg.webp"
                  alt="Shoes"
                  className="rounded-2xl w-full h-60 object-cover"
                />
              </figure>
              <ul className="text-sm">
                <li>- Libro de Ciberseguridad Nivel Medio</li>
                <li>- Disponibilidad online de clases</li>
                <li>- Chatbot 24h para dudas</li>
                <li>- Pack de programas con algunas licencias</li>
                <li>- Carnet de Estudiante</li>
                <li>
                  - Titulación Oficial en <strong>CiberUsuario</strong>
                </li>
              </ul>
            </div>
            <div className="card-actions flex justify-center pb-8">
              <button className="btn btn-primary" onClick={handleCompra}>
                Comprar por 11.99 €
              </button>
            </div>
          </div>

          <div className="card w-96 md:w-96 bg-base-100 shadow-xl mx-4 my-4">
            <div className="card-body items-center text-center p-8">
              <h2 className="card-title text-lg font-semibold mb-4">
                CURSO NIVEL AVANZADO
              </h2>
              <figure className="mb-4">
                <img
                  src="https://www.becasestudio.es/wp-content/uploads/2020/09/84.jpg"
                  alt="Shoes"
                  className="rounded-2xl w-full h-60 object-cover"
                />
              </figure>
              <ul className="text-sm">
                <li>- Libro de Ciberseguridad Nivel Avanzado</li>
                <li>- Disponibilidad online de clases</li>
                <li>- Chatbot 24h para dudas</li>
                <li>- Pack de programas con todas las licencias</li>
                <li>- Carnet de Estudiante</li>
                <li>
                  - Titulación Oficial en <strong>CiberProfesional</strong>
                </li>
              </ul>
            </div>
            <div className="card-actions flex justify-center pb-8">
              <button className="btn btn-primary" onClick={handleCompra}>
                Comprar por 14.99 €
              </button>
            </div>
          </div>
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
  );
}
