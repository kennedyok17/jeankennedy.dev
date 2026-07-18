import { useState } from "react";
import "./Projects.css";

import erpDashboard from "../../assets/images/SistemaERP/Dashboard.png";
import erpLogin from "../../assets/images/SistemaERP/login.png";
import erpInventario from "../../assets/images/SistemaERP/Inventario.png";

const projects = [
    {
        title: "Sistema ERP",
        description:
            "Sistema de gestión empresarial desarrollado para una empresa privada.",

        features: [
            "Inventario",
            "Clientes",
            "Vehículos",
            "Usuarios",
            "Roles",
            "Asistencia"
        ],

        technologies: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "Thymeleaf",
            "MySQL"
        ],

        screenshots: [
            { label: "Dashboard", src: erpDashboard },
            { label: "Login", src: erpLogin },
            { label: "Inventario", src: erpInventario }
        ]
    }
];

function ProjectCard({ project }) {

    const [currentImage, setCurrentImage] = useState(0);

    return (

        <div className="project-card">

            <div className="project-media">

                <div className="project-image">

                    <img
                        src={project.screenshots[currentImage].src}
                        alt={`${project.title} - ${project.screenshots[currentImage].label}`}
                    />

                </div>

                <div className="project-gallery">

                    {project.screenshots.map((shot, i) => (

                        <button
                            type="button"
                            key={shot.label}
                            className={i === currentImage ? "active" : ""}
                            onClick={() => setCurrentImage(i)}
                        >
                            {shot.label}
                        </button>

                    ))}

                </div>

            </div>

            <div className="project-content">

                <h3>
                    {project.title}
                </h3>

                <p>
                    {project.description}
                </p>

                <div className="project-features">

                    {project.features.map((feature) => (

                        <div key={feature}>
                            ✔ {feature}
                        </div>

                    ))}

                </div>

                <div className="project-tags">

                    {project.technologies.map((tech, i) => (

                        <span key={i}>
                            {tech}
                        </span>

                    ))}

                </div>

            </div>

        </div>

    );

}

function Projects() {

    return (

        <section className="projects" id="projects">

            <div className="projects-container">

                <div className="section-header">

                    <span className="section-tag">
                        Proyectos
                    </span>

                    <h2>
                        Algunos de mis trabajos
                    </h2>

                    <p>
                        Estos proyectos representan mi experiencia desarrollando
                        aplicaciones web modernas.
                    </p>

                </div>

                <div className="projects-grid">

                    {projects.map((project, index) => (

                        <ProjectCard project={project} key={index} />

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Projects;
