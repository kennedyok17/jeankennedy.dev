import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

import "./About.css";
import { fadeUp } from "../../animations";

function About() {
    return (
        <motion.section
            className="about"
            id="about"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once:true }}
        >

            <div className="about-container">

                <div className="about-left">

                    <span className="section-tag">
                        Sobre mí
                    </span>

                    <h2 className="section-title">
                        Transformando ideas en soluciones
                    </h2>

                    <p>
                        Mi objetivo es seguir fortaleciendo mis habilidades
                        en desarrollo de software y redes informáticas,
                        participando en proyectos que representen nuevos
                        desafíos y me permitan contribuir con soluciones
                        tecnológicas de valor.
                    </p>

                    <button className="btn-primary">
                        Descargar CV
                    </button>

                </div>

                <div className="about-right">

                    <div className="info-card">

                        <h3>Actualmente</h3>

                        <ul className="info-list">

                            <li>Estudiante de Ingeniería de Sistemas e Informática</li>

                            <li>Desarrollando un sistema ERP</li>

                            <li>Aprendizaje continuo de nuevas tecnologías</li>

                        </ul>

                    </div>

                    <div className="info-card">

                        <h3>Ubicación</h3>

                        <p><FaMapMarkerAlt />Lima - Perú</p>

                    </div>

                    <div className="info-card">

                        <h3>Stack</h3>

                        <p>Java • Spring Boot • React • MySQL</p>

                    </div>

                </div>

            </div>

        </motion.section>
    );
}

export default About;
