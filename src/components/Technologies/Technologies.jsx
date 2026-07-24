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

    const techCategories = [
        {
            category: "Frontend",
            items: [
                {
                    icon: <FaReact />,
                    title: "React",
                    description: "Modern Frontend"
                },
                {
                    icon: <SiJavascript />,
                    title: "JavaScript",
                    description: "Web Development"
                },
                {
                    icon: <SiHtml5 />,
                    title: "HTML5",
                    description: "Markup"
                },
                {
                    icon: <SiCss />,
                    title: "CSS3",
                    description: "Responsive Design"
                }
            ]
        },
        {
            category: "Backend",
            items: [
                {
                    icon: <FaJava />,
                    title: "Java",
                    description: "Backend Development"
                },
                {
                    icon: <SiSpringboot />,
                    title: "Spring Boot",
                    description: "REST APIs"
                },
                {
                    icon: <SiPhp />,
                    title: "PHP",
                    description: "Backend Development"
                },
                {
                    icon: <SiPython />,
                    title: "Python",
                    description: "Scripting & Datos"
                }
            ]
        },
        {
            category: "Base de datos",
            items: [
                {
                    icon: <SiMysql />,
                    title: "MySQL",
                    description: "Database"
                }
            ]
        },
        {
            category: "Herramientas",
            items: [
                {
                    icon: <FaGitAlt />,
                    title: "Git",
                    description: "Version Control"
                }
            ]
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
                        Tecnologías con las que trabajé
                    </h2>

                    <p>
                        Estas son las tecnologías con las que he tenido la
                        oportunidad de trabajar, y en las que sigo aprendiendo
                        y mejorando día a día.
                    </p>

                </div>

                {techCategories.map((group) => (

                    <div className="tech-category" key={group.category}>

                        <h3 className="tech-category-title">
                            {group.category}
                        </h3>

                        <motion.div
                            className="tech-grid"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once:true }}
                        >

                            {group.items.map((tech, index) => (

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

                                </motion.div>

                            ))}

                        </motion.div>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Technologies;
