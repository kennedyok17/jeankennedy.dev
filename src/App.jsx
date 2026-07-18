import "./App.css";

/*npm run dev */

function App() {
  return (
    <div className="app">

      <header className="navbar">
        <h2>Jean Kennedy</h2>

        <nav>
          <a href="#">Sobre mí</a>
          <a href="#">Tecnologías</a>
          <a href="#">Proyectos</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      <main className="hero">

        <p className="small">
          Bienvenido a mi portafolio
        </p>

        <h1>
          Hola, soy
          <span> Jean Kennedy</span>
        </h1>

        <h2>
          Intento de Desarrollador 
        </h2>

        <p className="description">
          Desarrollando aplicaciones web modernas utilizando
          Java, Spring Boot, React y MySQL.
        </p>

        <div className="buttons">

          <button className="primary">
            Ver proyectos
          </button>

          <button className="secondary">
            Descargar CV
          </button>

        </div>

      </main>

    </div>
  );
}

export default App;