import Header2 from "../components/Header2";

export default function Servicios() {
  return (
    <div>
      <Header2 />
      <hr />
      <br />
      <h1 className="text-primary text-5xl">Servicios</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h1 className="card-title">PLAN GRATUITO</h1>
            <figure className="px-10 pt-10">
              <img
                src="https://www.neit.edu/wp-content/uploads/2022/10/Cyber-Security-Icon-Concept-2-1.jpeg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <li>Nuestro software con anuncios</li>
            <li>Un estudio gratuito</li>
            <li>Limpieza profunda</li>
            <li>Incluye anuncios</li>
            <div className="card-actions">
              <button className="btn btn-primary">Consiguelo gratis</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">PLAN PREMIUM</h2>
            <figure className="px-10 pt-10">
              <img
                src="https://www.genetec.com/binaries/content/gallery/illustrationstock_cyberthreats-recolored_adobestock_422696329.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <li>Nuestro software SIN anuncios</li>
            <li>Estudio gratuito de los sistemas</li>
            <li>Limpieza profunda</li>
            <li>Limpiador de aplicaciones</li>
            <li>Antimalwrare</li>
            <li>Revisiones periodicas</li>
            <div className="card-actions">
              <button className="btn btn-primary">Comprar por 39.99 €</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">PLAN EMPRESAS</h2>
            <figure className="px-10 pt-10">
              <img
                src="https://www.technologysolutions.net/wp-content/uploads/2023/09/pros-and-cons-scaled-2560x1280.jpeg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <li>Nuestro software SIN anuncios</li>
            <li>Estudio gratuito de los sistemas y equipos de trabajo</li>
            <li>Limpieza profunda</li>
            <li>Limpiador de aplicaciones</li>
            <li>Antimalwrare</li>
            <li>Revisiones periodicas</li>
            <div className="card-actions">
              <button className="btn btn-primary">Comprar por 99.99 €</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
