import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <p className="hero-tag">
        Bienvenido a mi portafolio
      </p>

      <h1>
        Hola, soy <span>Jean Kennedy</span>
      </h1>

      <h2>
        Intento de Desarrollador
      </h2>

      <p className="hero-description">
        Desarrollando aplicaciones web utilizando
        Java, Spring Boot, React y MySQL.
      </p>

      <div className="hero-buttons">
        <button className="btn-primary">
          Ver proyectos
        </button>

        <button className="btn-secondary">
          Descargar CV
        </button>
      </div>

    </section>
  );
}

export default Hero;