import "./Technologies.css";

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
    SiCss
} from "react-icons/si";

function Technologies() {

    const techs = [
        {
            icon: <FaJava />,
            title: "Java",
            description: "Backend Development",
            level: "95%"
        },
        {
            icon: <SiSpringboot />,
            title: "Spring Boot",
            description: "REST APIs",
            level: "90%"
        },
        {
            icon: <FaReact />,
            title: "React",
            description: "Modern Frontend",
            level: "85%"
        },
        {
            icon: <SiMysql />,
            title: "MySQL",
            description: "Database",
            level: "88%"
        },
        {
            icon: <SiJavascript />,
            title: "JavaScript",
            description: "Web Development",
            level: "85%"
        },
        {
            icon: <SiHtml5 />,
            title: "HTML5",
            description: "Markup",
            level: "95%"
        },
        {
            icon: <SiCss />,
            title: "CSS3",
            description: "Responsive Design",
            level: "90%"
        },
        {
            icon: <FaGitAlt />,
            title: "Git",
            description: "Version Control",
            level: "85%"
        }
    ];

    return (

        <section className="technologies" id="technologies">

            <div className="tech-container">

                <div className="section-header">

                    <span className="section-tag">
                        Tecnologías
                    </span>

                    <h2>
                        Herramientas con las que desarrollo
                    </h2>

                    <p>
                        Estas son las tecnologías que utilizo para crear
                        aplicaciones modernas, escalables y mantenibles.
                    </p>

                </div>

                <div className="tech-grid">

                    {techs.map((tech, index) => (

                        <div className="tech-card" key={index}>

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

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Technologies;
