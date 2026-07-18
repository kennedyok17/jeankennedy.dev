import "./Navbar.css";
import logo from "../../assets/logos/logo-jk.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo JK" />
        <span>Jean Kennedy</span>
      </div>

      <nav className="nav-links">
        <a href="#about">Sobre mí</a>
        <a href="#technologies">Tecnologías</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}

export default Navbar;