import './About.css'

const abogadas = [
    {
        name: 'Macarena Morales Gómez',
        initials: 'MM',
        role: 'Abogada — Derecho de Familia & Civil',
        bio: 'Especialista en derecho de familia con amplia experiencia en pensiones de alimentos, divorcios y posesiones efectivas. Comprometida con el bienestar de sus clientes y sus familias.',
        specialties: ['Derecho de Familia', 'Pensión de Alimentos', 'Divorcios', 'Posesiones Efectivas'],
    },
    {
        name: 'Soledad Araya Molina',
        initials: 'SA',
        role: 'Abogada — Derecho Laboral & Civil',
        bio: 'Con vasta trayectoria en derechos laborales y materia civil. Asesora a trabajadores y empresas en despidos injustificados, contratos y regularizaciones, siempre con enfoque estratégico.',
        specialties: ['Derecho Laboral', 'Escrituras Públicas', 'Arrendamiento', 'Cambio de Nombre'],
    },
]

export default function About() {
    return (
        <section id="nosotras" className="about">
            <div className="about__inner">
                <div className="about__header">
                    <p className="section-label">Quiénes somos</p>
                    <h2 className="section-title">Dos abogadas, <span>un solo compromiso</span></h2>
                    <div className="divider" />
                    <p className="section-subtitle">
                        Unidas por la convicción de que cada cliente merece atención personalizada,
                        honesta y efectiva — sin importar la complejidad del caso.
                    </p>
                </div>

                <div className="about__cards">
                    {abogadas.map((a, i) => (
                        <div key={a.name} className="about__card glass-card">
                            <div className="about__avatar">
                                <div className="about__avatar-circle">
                                    {a.initials}
                                </div>
                                <div className="about__avatar-ring" />
                            </div>

                            <div className="about__info">
                                <h3 className="about__name">{a.name}</h3>
                                <p className="about__role">{a.role}</p>
                                <p className="about__bio">{a.bio}</p>

                                <div className="about__tags">
                                    {a.specialties.map(s => (
                                        <span key={s} className="about__tag">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="about__values">
                    {[
                        { icon: '🎯', label: 'Enfoque Humano', desc: 'Cada caso es único. Te escuchamos y entendemos tu situación.' },
                        { icon: '🛡️', label: 'Confidencialidad', desc: 'Discreción total en todos los asuntos que nos confías.' },
                        { icon: '⚡', label: 'Eficiencia', desc: 'Resolvemos con agilidad, sin descuidar la calidad jurídica.' },
                    ].map(v => (
                        <div key={v.label} className="about__value">
                            <span className="about__value-icon">{v.icon}</span>
                            <div>
                                <strong>{v.label}</strong>
                                <p>{v.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
