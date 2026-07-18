import "./Hero.css";
import SocialLinks from "../SocialLinks/SocialLinks";
import profile from "../../assets/images/sinperfil.png";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-light"></div>
            <div className="hero-grid"></div>

            <div className="hero-container">

                <div className="hero-left">

                    <p className="hero-tag">
                        Bienvenido a mi portafolio
                    </p>

                    <h1>
                        Hola, soy <span>Jean Kennedy</span>
                    </h1>

                    <h2>
                        Intento de Desarrollador
                    </h2>

                    <p className="hero-description">
                        Desarrollando aplicaciones web utilizando
                        Java, Spring Boot, React y MySQL.
                    </p>

                    <div className="hero-buttons">

                        <button className="btn-primary">
                            Ver proyectos
                        </button>

                        <button className="btn-secondary">
                            Contacto
                        </button>

                    </div>

                    <SocialLinks />

                </div>

                <div className="hero-right">

                    <div className="profile-card">

                        <img
                            src={profile}
                            alt="Jean Kennedy"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;