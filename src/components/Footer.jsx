import './Footer.css'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__brand">
                    <span className="footer__brand-icon">⚖</span>
                    <div>
                        <span className="footer__brand-name">Estudio Jurídico</span>
                        <span className="footer__brand-sub">Morales & Araya Abogadas</span>
                    </div>
                </div>

                <p className="footer__tagline">
                    Enfoque Humano · Profesional · Especializado
                </p>

                <nav className="footer__links">
                    <a href="#servicios">Servicios</a>
                    <a href="#nosotras">Nosotras</a>
                    <a href="#empresas">Empresas</a>
                    <a href="#contacto">Contacto</a>
                </nav>

                <div className="footer__bottom">
                    <p>© {year} Estudio Jurídico Morales & Araya. Todos los derechos reservados.</p>
                    <p className="footer__disclaimer">
                        La información en este sitio es de carácter informativo y no constituye asesoría legal.
                    </p>
                </div>
            </div>
        </footer>
    )
}
