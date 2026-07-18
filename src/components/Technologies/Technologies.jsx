import { motion } from "framer-motion";

import "./Technologies.css";
import { fadeUp, staggerContainer } from "../../animations";

import {
    FaJava,
    FaReact,
    FaGitAlt
} from "react-icons/fa";

import {
    SiSpringboot,
    SiMysql,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiPhp,
    SiPython
} from "react-icons/si";

function Technologies() {

    const techs = [
        {
            icon: <FaJava />,
            title: "Java",
            description: "Backend Development",
            level: "46%"
        },
        {
            icon: <SiSpringboot />,
            title: "Spring Boot",
            description: "REST APIs",
            level: "42%"
        },
        {
            icon: <FaReact />,
            title: "React",
            description: "Modern Frontend",
            level: "50%"
        },
        {
            icon: <SiMysql />,
            title: "MySQL",
            description: "Database",
            level: "48%"
        },
        {
            icon: <SiJavascript />,
            title: "JavaScript",
            description: "Web Development",
            level: "45%"
        },
        {
            icon: <SiHtml5 />,
            title: "HTML5",
            description: "Markup",
            level: "55%"
        },
        {
            icon: <SiCss />,
            title: "CSS3",
            description: "Responsive Design",
            level: "50%"
        },
        {
            icon: <FaGitAlt />,
            title: "Git",
            description: "Version Control",
            level: "42%"
        },
        {
            icon: <SiPhp />,
            title: "PHP",
            description: "Backend Development",
            level: "35%"
        },
        {
            icon: <SiPython />,
            title: "Python",
            description: "Scripting & Datos",
            level: "35%"
        }
    ];

    return (

        <section className="technologies" id="technologies">

            <div className="tech-container">

                <div className="section-header">

                    <span className="section-tag">
                        Tecnologías
                    </span>

                    <h2 className="section-title">
                        Herramientas con las que desarrollo
                    </h2>

                    <p>
                        Estas son las tecnologías que utilizo para crear
                        aplicaciones modernas, escalables y mantenibles.
                    </p>

                </div>

                <motion.div
                    className="tech-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once:true }}
                >

                    {techs.map((tech, index) => (

                        <motion.div
                            className="tech-card"
                            variants={fadeUp}
                            key={index}
                        >

                            <div className="tech-icon">
                                {tech.icon}
                            </div>

                            <h3>{tech.title}</h3>

                            <p>{tech.description}</p>

                            <div className="progress">

                                <div
                                    className="progress-fill"
                                    style={{ width: tech.level }}
                                ></div>

                            </div>

                        </motion.div>

                    ))}

                </motion.div>

            </div>

        </section>

    );

}

export default Technologies;
