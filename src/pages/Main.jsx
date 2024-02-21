import "../App.css";
import classNames from "classnames";

export default function Main() {
  return (
    <>
      <div
        className={classNames(
          "container",
          "mx-auto",
          "flex flex-col items-center justify-center min-h-screen"
        )}
      >
        <a
          href="home"
          className={classNames(
            "flex",
            "justify-center",
            "items-center",
            "rounded-full",
            "mb-8",
            "transition-all duration-500 ease-in-out", // Añadir transiciones
            "transform hover:scale-110", // Añadir efecto de escala al hacer hover
            "transition hover:shadow-yellow-md" // Agregar sombra amarilla al hacer hover
          )}
        >
          <img
            src="https://i.pinimg.com/originals/f4/38/f3/f438f3600d2690018f981c66e7935b49.png"
            alt="logo"
            className={classNames(
              "w-full",
              "max-w-md",
              "object-cover",
              "mb-8",
              "transition-all duration-500 ease-in-out" // Añadir transiciones
            )}
          />
        </a>

        {/* Add styling to center text elements horizontally */}
        <div className="flex flex-col items-center">
          <h1
            className={classNames(
              "text-4xl",
              "md:text-5xl",
              "text-center",
              "font-bold",
              "mb-4",
              "text-center" // Align horizontally (if needed)
            )}
          >
            Titanshield
          </h1>

          <h1
            className={classNames(
              "text-lg",
              "md:text-xl",
              "text-center",
              "italic",
              "text-center" // Align horizontally (if needed)
            )}
          >
            Seguridad para ti y para todos
          </h1>
        </div>
      </div>
    </>
  );
}
