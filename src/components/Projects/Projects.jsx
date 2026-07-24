import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineX } from "react-icons/hi";

import "./Projects.css";
import { fadeUp } from "../../animations";

import erpDashboard from "../../assets/images/SistemaERP/Dashboard.png";
import erpLogin from "../../assets/images/SistemaERP/login.png";
import erpInventario from "../../assets/images/SistemaERP/Inventario.png";

const projects = [
    {
        title: "Sistema ERP",
        status: "En desarrollo",
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

        architecture: [
            { layer: "Vistas", items: ["Thymeleaf"] },
            { layer: "Backend", items: ["Java", "Spring Boot", "Spring Security"] },
            { layer: "Base de datos", items: ["MySQL"] }
        ],

        stats: [
            { value: "+6", label: "Módulos" },
            { value: "+25", label: "Tablas" },
            { value: "Java", label: "Spring Boot" }
        ],

        screenshots: [
            { label: "Dashboard", src: erpDashboard },
            { label: "Login", src: erpLogin },
            { label: "Inventario", src: erpInventario }
        ]
    }
];

function ProjectCard({ project, onOpen }) {

    return (

        <motion.div
            className="project-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once:true }}
        >

            <div className="project-image">

                <img
                    src={project.screenshots[0].src}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                />

            </div>

            <div className="project-content">

                <span className="project-status">
                    {project.status}
                </span>

                <h3>
                    {project.title}
                </h3>

                <p>
                    {project.description}
                </p>

                <button
                    type="button"
                    className="btn-primary"
                    onClick={() => onOpen(project)}
                >
                    Ver detalle
                </button>

            </div>

        </motion.div>

    );

}

function ProjectModal({ project, onClose }) {

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {

        document.body.style.overflow = "hidden";

        const handleKeyDown = (e) => {

            if (e.key === "Escape") onClose();

        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {

            document.body.style.overflow = "";

            window.removeEventListener("keydown", handleKeyDown);

        };

    }, [onClose]);

    return createPortal(

        <motion.div
            className="modal-overlay"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            onClick={onClose}
        >

            <motion.div
                className="modal-content"
                initial={{ opacity:0, scale:.95, y:20 }}
                animate={{ opacity:1, scale:1, y:0 }}
                exit={{ opacity:0, scale:.95, y:20 }}
                transition={{ duration:.25 }}
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    type="button"
                    className="modal-close"
                    onClick={onClose}
                    aria-label="Cerrar"
                >
                    <HiOutlineX />
                </button>

                <div className="project-media">

                    <div className="project-image">

                        <AnimatePresence mode="wait">

                            <motion.img
                                key={currentImage}
                                src={project.screenshots[currentImage].src}
                                alt={`${project.title} - ${project.screenshots[currentImage].label}`}
                                loading="lazy"
                                decoding="async"
                                initial={{ opacity:0, scale:.97 }}
                                animate={{ opacity:1, scale:1 }}
                                exit={{ opacity:0, scale:.97 }}
                                transition={{ duration:.35 }}
                            />

                        </AnimatePresence>

                    </div>

                    <div className="project-thumbs">

                        {project.screenshots.map((shot, i) => (

                            <button
                                type="button"
                                key={shot.label}
                                className={i === currentImage ? "active" : ""}
                                onClick={() => setCurrentImage(i)}
                                aria-label={shot.label}
                            >
                                <img src={shot.src} alt={shot.label} loading="lazy" decoding="async" />
                            </button>

                        ))}

                    </div>

                </div>

                <div className="project-content">

                    <span className="project-status">
                        {project.status}
                    </span>

                    <h3>
                        {project.title}
                    </h3>

                    <p>
                        {project.description}
                    </p>

                    <div className="project-features">

                        {project.features.map((feature) => (

                            <span className="feature-chip" key={feature}>
                                {feature}
                            </span>

                        ))}

                    </div>

                    <div className="project-architecture">

                        {project.architecture.map((layer) => (

                            <div className="arch-layer" key={layer.layer}>

                                <span className="arch-layer-name">
                                    {layer.layer}
                                </span>

                                <div className="arch-layer-items">

                                    {layer.items.map((item) => (

                                        <span key={item}>
                                            {item}
                                        </span>

                                    ))}

                                </div>

                            </div>

                        ))}

                    </div>

                    <div className="project-stats">

                        {project.stats.map((stat, i) => (

                            <div className="stat" key={i}>

                                <strong>{stat.value}</strong>

                                <span>{stat.label}</span>

                            </div>

                        ))}

                    </div>

                </div>

            </motion.div>

        </motion.div>,

        document.body

    );

}

function Projects() {

    const [selectedProject, setSelectedProject] = useState(null);

    return (

        <section className="projects" id="projects">

            <div className="projects-container">

                <div className="section-header">

                    <span className="section-tag">
                        Proyectos
                    </span>

                    <h2 className="section-title">
                        Algunos de mis trabajos
                    </h2>

                    <p>
                        Estos proyectos representan mi experiencia desarrollando
                        aplicaciones web modernas.
                    </p>

                </div>

                <div className="projects-grid">

                    {projects.map((project, index) => (

                        <ProjectCard project={project} key={index} onOpen={setSelectedProject} />

                    ))}

                </div>

            </div>

            <AnimatePresence>

                {selectedProject && (

                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />

                )}

            </AnimatePresence>

        </section>

    );

}

export default Projects;
