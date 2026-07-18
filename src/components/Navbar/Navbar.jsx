import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import "./Navbar.css";
import logo from "../../assets/logos/logo-jk.png";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 50);

        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>

            <div className="navbar-container">

                <div className="logo">

                    <img src={logo} alt="Logo JK" />

                    <span>Jean Kennedy</span>

                </div>

                <nav className={menuOpen ? "nav-links active" : "nav-links"}>

                    <a href="#about" onClick={() => setMenuOpen(false)}>Sobre mí</a>

                    <a href="#technologies" onClick={() => setMenuOpen(false)}>Tecnologías</a>

                    <a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a>

                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>

                </nav>

                <button
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}

                </button>

            </div>

        </header>

    );

}

export default Navbar;