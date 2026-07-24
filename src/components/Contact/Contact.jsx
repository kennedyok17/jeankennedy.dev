import { motion } from "framer-motion";
import { toast } from "sonner";

import "./Contact.css";
import { fadeUp } from "../../animations";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaWhatsapp,
    FaPhoneAlt
} from "react-icons/fa";

const copyEmail = async () => {
    try {
        await navigator.clipboard.writeText("jean@jeankennedy.dev");
        toast.success("Correo copiado");
    } catch {
        toast.error("No se pudo copiar el correo");
    }
};

function Contact() {

    return (

        <motion.section
            className="contact"
            id="contact"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once:true }}
        >

            <div className="contact-container">

                <span className="section-tag">
                    Contacto
                </span>


                <p> <br />
                    Actualmente me encuentro desarrollando proyectos y siempre
                    estoy abierto a nuevas oportunidades, colaboraciones o
                    propuestas profesionales.
                </p>

                <div className="contact-cards">

                    <button
                        onClick={copyEmail}
                        className="contact-card"
                    >

                        <FaEnvelope />

                        <div className="contact-card-info">

                            <h3>Correo</h3>

                            <span>
                                jean@jeankennedy.dev
                            </span>

                        </div>

                    </button>

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

                    <a
                        href="https://wa.me/51920863068"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card"
                    >

                        <FaWhatsapp />

                        <div className="contact-card-info">

                            <h3>WhatsApp</h3>

                            <span>
                                +51 920 863 068
                            </span>

                        </div>

                    </a>

                    <a
                        href="tel:+51920863068"
                        className="contact-card"
                    >

                        <FaPhoneAlt />

                        <div className="contact-card-info">

                            <h3>Llamada</h3>

                            <span>
                                +51 920 863 068
                            </span>

                        </div>

                    </a>

                </div>

                <a
                    href="mailto:jean@jeankennedy.dev"
                    className="btn-primary"
                >

                    Enviar correo

                </a>

            </div>

        </motion.section>

    );

}

export default Contact;
