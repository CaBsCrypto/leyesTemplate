import './Navbar.css'

const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotras', href: '#nosotras' },
    { label: 'Empresas', href: '#empresas' },
    { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar__inner">
                <a href="#hero" className="navbar__brand">
                    <span className="navbar__brand-icon">⚖</span>
                    <div>
                        <span className="navbar__brand-name">Estudio Jurídico</span>
                        <span className="navbar__brand-tagline">Morales & Araya</span>
                    </div>
                </a>

                <nav className="navbar__nav">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="navbar__link">
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a href="#contacto" className="btn-primary navbar__cta" id="nav-cta">
                    Consulta Gratis
                </a>
            </div>
        </header>
    )
}
