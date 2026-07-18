import "./About.css";

function About() {
    return (
        <section className="about" id="about">

            <div className="about-container">

                <div className="about-left">

                    <span className="section-tag">
                        Sobre mí
                    </span>

                    <h2>
                        Construyendo soluciones web modernas
                    </h2>

                    <p>
                        Soy desarrollador backend apasionado por crear
                        aplicaciones escalables utilizando Java,
                        Spring Boot, React y MySQL.
                    </p>

                    <p>
                        Disfruto aprender nuevas tecnologías,
                        resolver problemas y desarrollar proyectos
                        que aporten valor real.
                    </p>

                    <button className="btn-primary">
                        Descargar CV
                    </button>

                </div>

                <div className="about-right">

                    <div className="info-card">

                        <h3>Ubicación</h3>

                        <p>Perú 🇵🇪</p>

                    </div>

                    <div className="info-card">

                        <h3>Especialidad</h3>

                        <p>Backend Developer</p>

                    </div>

                    <div className="info-card">

                        <h3>Stack</h3>

                        <p>Java • Spring Boot • React • MySQL</p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;
