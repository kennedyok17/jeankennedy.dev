import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import "./Navbar.css";
import logo from "../../assets/logos/logo-jk.png";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 50);

        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    useEffect(() => {

        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        setActiveSection(entry.target.id);

                    }

                });

            },
            { rootMargin: "-40% 0px -55% 0px" }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();

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