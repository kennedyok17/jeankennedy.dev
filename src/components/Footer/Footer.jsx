import "./Footer.css";

import {

    FaGithub,
    FaLinkedin

} from "react-icons/fa";

function Footer(){

    return(

        <footer className="footer">

            <div className="footer-container">

                <h3>
                    Jean Kennedy
                </h3>

                <p>
                    Backend Developer • Java • Spring Boot • React
                </p>

                <div className="footer-social">

                    <a
                        href="https://github.com/kennedyok17"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub/>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/kennedyook17/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin/>
                    </a>

                </div>

                <span>

                    © {new Date().getFullYear()} Jean Kennedy.
                    Todos los derechos reservados.

                </span>

            </div>

        </footer>

    );

}

export default Footer;
