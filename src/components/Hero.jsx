import './Hero.css'

export default function Hero() {
    return (
        <section id="hero" className="hero">
            {/* Decorative background elements */}
            <div className="hero__bg">
                <div className="hero__bg-gradient" />
                <div className="hero__bg-grid" />
                <div className="hero__orb hero__orb--1" />
                <div className="hero__orb hero__orb--2" />
            </div>

            <div className="hero__inner">
                <div className="hero__content animate-fadeInUp">
                    <p className="section-label">Enfoque Humano · Profesional · Especializado</p>

                    <h1 className="hero__heading">
                        Protegemos tus derechos<br />
                        con <span>experiencia</span> y<br />
                        <span>compromiso</span>
                    </h1>

                    <div className="divider" />

                    <p className="hero__subtitle">
                        Asesoría jurídica integral para personas y empresas.
                        Desde derecho de familia hasta materia laboral y civil,
                        estamos aquí para acompañarte en cada paso del proceso legal.
                    </p>

                    <div className="hero__actions">
                        <a href="#contacto" className="btn-primary" id="hero-cta-primary">
                            <span>💬</span> Agendar Consulta
                        </a>
                        <a href="#servicios" className="btn-outline" id="hero-cta-services">
                            Ver Servicios
                        </a>
                    </div>

                    <div className="hero__stats">
                        <div className="hero__stat">
                            <strong>11+</strong>
                            <span>Áreas de Práctica</span>
                        </div>
                        <div className="hero__stat-divider" />
                        <div className="hero__stat">
                            <strong>2</strong>
                            <span>Abogadas Especialistas</span>
                        </div>
                        <div className="hero__stat-divider" />
                        <div className="hero__stat">
                            <strong>100%</strong>
                            <span>Compromiso Personal</span>
                        </div>
                    </div>
                </div>

                <div className="hero__visual animate-fadeInUp delay-2">
                    <div className="hero__emblem">
                        <div className="hero__emblem-ring hero__emblem-ring--outer" />
                        <div className="hero__emblem-ring hero__emblem-ring--inner" />
                        <div className="hero__emblem-icon">⚖️</div>
                    </div>
                    <div className="hero__badge hero__badge--top">
                        ✓ Asesoría Confidencial
                    </div>
                    <div className="hero__badge hero__badge--bottom">
                        ✓ Primera Consulta Gratuita
                    </div>
                </div>
            </div>

            <div className="hero__scroll-hint">
                <span>Conoce nuestros servicios</span>
                <div className="hero__scroll-arrow">↓</div>
            </div>
        </section>
    )
}
