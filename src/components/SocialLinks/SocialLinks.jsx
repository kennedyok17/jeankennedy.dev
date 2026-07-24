import "./SocialLinks.css";

import {
    FaGithub,
    FaLinkedin,
    FaFilePdf,
} from "react-icons/fa";

import {
    MdEmail
} from "react-icons/md";

import { toast } from "sonner";

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText("jean@jeankennedy.dev");
    toast.success("Correo copiado");
  } catch {
    toast.error("No se pudo copiar el correo");
  }
};

function SocialLinks() {

    return (

        <div className="social-links">

            <a
                href="https://github.com/kennedyok17"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub />
            </a>

            <a
                href="https://www.linkedin.com/in/jkennedyok17/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin />
            </a>

            <button
                onClick={copyEmail}
                aria-label="Copiar correo"
            >
                <MdEmail />
            </button>

            <a
                href="/cv/CV_Jean_KennedyV2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver CV"
            >
                <FaFilePdf />
            </a>

        </div>

    );

}

export default SocialLinks;