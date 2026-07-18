import { motion } from "framer-motion";

import "./Hero.css";
import SocialLinks from "../SocialLinks/SocialLinks";
import profile from "../../assets/images/sinperfil.png";
import { fadeLeft, fadeRight } from "../../animations";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-light"></div>
            <div className="hero-grid"></div>

            <div className="hero-container">

                <motion.div
                    className="hero-left"
                    variants={fadeLeft}
                    initial="hidden"
                    animate="show"
                >

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

                        <a href="#projects" className="btn-primary">
                            Ver proyectos
                        </a>

                        <a href="#contact" className="btn-secondary">
                            Contacto
                        </a>

                    </div>

                    <SocialLinks />

                </motion.div>

                <motion.div
                    className="hero-right"
                    variants={fadeRight}
                    initial="hidden"
                    animate="show"
                    transition={{ delay:.2 }}
                >

                    <div className="profile-card">

                        <img
                            src={profile}
                            alt="Jean Kennedy"
                            fetchPriority="high"
                            decoding="async"
                        />

                    </div>

                </motion.div>

            </div>

        </section>
    );
}

export default Hero;