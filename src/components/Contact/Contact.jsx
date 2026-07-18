import "./Contact.css";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";

function Contact() {

    return (

        <section className="contact" id="contact">

            <div className="contact-container">

                <span className="section-tag">
                    Contacto
                </span>


                <p>
                    Actualmente me encuentro desarrollando proyectos y siempre
                    estoy abierto a nuevas oportunidades, colaboraciones o
                    propuestas profesionales.
                </p>

                <div className="contact-cards">

                    <a
                        href="mailto:jeankennedyortizvelasquez@gmail.com"
                        className="contact-card"
                    >

                        <FaEnvelope />

                        <div className="contact-card-info">

                            <h3>Email</h3>

                            <span>
                                jeankennedyortizvelasquez@gmail.com
                            </span>

                        </div>

                    </a>

                    <a
                        href="https://www.linkedin.com/in/kennedyook17/"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card"
                    >

                        <FaLinkedin />

                        <div className="contact-card-info">

                            <h3>LinkedIn</h3>

                            <span>
                                Conectemos
                            </span>

                        </div>

                    </a>

                    <a
                        href="https://github.com/kennedyok17"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card"
                    >

                        <FaGithub />

                        <div className="contact-card-info">

                            <h3>GitHub</h3>

                            <span>
                                Ver repositorios
                            </span>

                        </div>

                    </a>

                </div>

                <a
                    href="mailto:jeankennedyortizvelasquez@gmail.com"
                    className="btn-primary"
                >

                    Enviar correo

                </a>

            </div>

        </section>

    );

}

export default Contact;
