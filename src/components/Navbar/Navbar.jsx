import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { MdVerified } from "react-icons/md";

import "./Navbar.css";
import logo from "../../assets/logos/logo-jk.png";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {

        const sections = document.querySelectorAll("section[id]");

        const handleScroll = () => {

            setScrolled(window.scrollY > 50);

            let current = "";

            sections.forEach((section) => {

                const rect = section.getBoundingClientRect();

                if (rect.top <= 120 && rect.bottom > 120) {

                    current = section.id;

                }

            });

            setActiveSection(current);

        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>

            <div className="navbar-container">

                <a
                    href="#"
                    className="logo"
                    onClick={() => setMenuOpen(false)}
                >

                    <img src={logo} alt="Logo JK" loading="lazy" decoding="async" />

                    <span>Jean Kennedy</span>

                    <MdVerified
                        className="logo-badge"
                        title="Disponible para nuevas oportunidades"
                        aria-label="Disponible para nuevas oportunidades"
                    />

                </a>

                <nav className={menuOpen ? "nav-links active" : "nav-links"}>

                    <a
                        href="#about"
                        className={activeSection === "about" ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                    >
                        Sobre mí
                    </a>

                    <a
                        href="#technologies"
                        className={activeSection === "technologies" ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                    >
                        Tecnologías
                    </a>

                    <a
                        href="#projects"
                        className={activeSection === "projects" ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                    >
                        Proyectos
                    </a>

                    <a
                        href="#contact"
                        className={activeSection === "contact" ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                    >
                        Contacto
                    </a>

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