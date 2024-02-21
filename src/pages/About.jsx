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
        <div className="w-full md:w-1/3 font-extralight text-2xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor, nunc id ultrices tincidunt, nisl nunc tincidunt urna, vel
            tincidunt nunc nunc id nunc. Sed id semper nisl. Nulla facilisi. Sed
            nec nunc ac nunc tincidunt lacinia. Sed id semper nisl. Nulla
            facilisi. Sed nec nunc ac nunc tincidunt lacinia.
          </p>
        </div>
      </div>
    </div>
  );
}
