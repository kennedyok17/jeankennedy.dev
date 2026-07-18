import "./SocialLinks.css";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import {
    MdEmail
} from "react-icons/md";

import {
    HiOutlineDocumentText
} from "react-icons/hi";

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
                href="https://www.linkedin.com/in/kennedyook17/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin />
            </a>

            <a href="mailto:jeankennedyortizvelasquez@gmail.com">
                <MdEmail />
            </a>

            <a href="#">
                <HiOutlineDocumentText />
            </a>

        </div>

    );

}

export default SocialLinks;