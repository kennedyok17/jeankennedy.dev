import "./App.css";

function App() {
  return (
    <>
      <header>
        <h2>Jean Kennedy</h2>

        <nav>
          <a href="#about">Sobre mí</a>
          <a href="#skills">Tecnologías</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>

      <main>

        <section className="hero">

          <h1>
            Hola, soy <span>Jean Kennedy</span>
          </h1>

          <p>
            Desarrollador de Software (No quiero trabajar).
          </p>

          <button>
            Ver proyectos
          </button>

        </section>

      </main>
    </>
  );
}

export default App;