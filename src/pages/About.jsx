import Header2 from "../components/Header2";

export default function About() {
  return (
    <div>
      <Header2 />
      <hr />
      <br />
      <h1 className="text-primary text-5xl text-center">Sobre Nosotros</h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div
          className="flex flex-col gap-7 w-full md:w-1/2"
          style={{ padding: "30px", margin: "20px" }}
        >
          <h1 className="font-extralight text-2xl">Contáctanos!</h1>
          <div>
            <label className="input input-bordered input-success flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Nombre" />
            </label>
          </div>
          <div>
            <select className="flex items-center gap-2 select select-success w-full">
              <option disabled selected>
                Tema
              </option>
              <option>Mejora de la web</option>
              <option>Crítica constructiva</option>
              <option>Comentario</option>
            </select>
          </div>
          <textarea
            className="textarea textarea-success"
            placeholder="Mensaje"
          ></textarea>

          <div className="flex items-center gap-2 rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <p>(Doble Clic)</p>
          </div>
          <button className="btn btn-outline btn-info w-full md:w-auto">
            Enviar
          </button>
        </div>
        <div className="w-full md:w-1/3 font-extralight text-l">
          <br />
          <br />
          <p>
            <strong>Misión: </strong>
            Somos una empresa global que ofrece cursos de ciberseguridad a
            empresas de diversos sectores. Nuestra misión es capacitar a los
            trabajadores para proteger la información y los activos digitales de
            sus organizaciones mediante formación especializada y práctica,
            destacándonos por nuestra constante actualización, calidad de
            formación y servicios complementarios de seguridad digital.
          </p>
          <br />
          <p>
            <strong>Visión: </strong>
            Nuestra visión es liderar el mercado global de ciberseguridad,
            ofreciendo soluciones integrales y formación de vanguardia para
            empresas de todos los sectores. Buscamos expandir nuestra presencia
            geográfica y desarrollar un equipo altamente capacitado,
            manteniéndonos a la vanguardia de la tecnología y colaborando
            estrechamente con líderes en el campo.
          </p>
          <br />
          <p>
            <strong>Valores: </strong>
            Nuestros valores se centran en la excelencia, la integridad, el
            empoderamiento a través del conocimiento, la innovación, la
            colaboración y la adaptabilidad. Buscamos la excelencia en todo lo
            que hacemos, actuamos con integridad, capacitamos a empresas y
            empleados, innovamos constantemente, colaboramos estrechamente y nos
            adaptamos ágilmente a los cambios en la ciberseguridad.
          </p>
        </div>
      </div>
    </div>
  );
}
