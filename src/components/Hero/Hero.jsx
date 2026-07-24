import { motion } from "framer-motion";

import "./Hero.css";
import SocialLinks from "../SocialLinks/SocialLinks";
import { fadeLeft } from "../../animations";

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
                        Desarrollador de Software | Redes Informáticas
                    </h2>

                    <p className="hero-description">
                        Soy estudiante de Ingeniería de Sistemas 
                        e Informática, apasionado por la tecnología 
                        y el aprendizaje continuo. Me interesa el desarrollo 
                        de software y las redes informáticas, áreas en las que 
                        busco fortalecer mis conocimientos para contribuir con 
                        soluciones tecnológicas eficientes e innovadoras.
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

            </div>

        </section>
    );
}

export default Hero;