import './PyME.css'

const items = [
    { icon: '📋', text: 'Revisión de contratos comerciales' },
    { icon: '👥', text: 'Constitución de sociedades' },
    { icon: '⚖️', text: 'Asesoría legal continua para tu negocio' },
    { icon: '🔒', text: 'Protección a derechos del empleador' },
    { icon: '📑', text: 'Contratos laborales a medida' },
    { icon: '🏛️', text: 'Representación ante organismos públicos' },
]

export default function PyME() {
    return (
        <section id="empresas" className="pyme">
            <div className="pyme__inner">
                <div className="pyme__content">
                    <p className="section-label">Para PyMEs y Empresas</p>
                    <h2 className="section-title">¿Estás <span>emprendiendo</span> o<br />ya tienes tu empresa?</h2>
                    <div className="divider" />
                    <p className="section-subtitle">
                        El mundo empresarial trae desafíos legales únicos. Te acompañamos
                        desde la constitución de tu empresa hasta la resolución de conflictos
                        laborales, protegiendo siempre tus intereses.
                    </p>

                    <div className="pyme__list">
                        {items.map(item => (
                            <div key={item.text} className="pyme__list-item">
                                <span className="pyme__list-icon">{item.icon}</span>
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <a href="#contacto" className="btn-primary pyme__cta" id="pyme-cta">
                        <span>🚀</span> Consulta para tu Empresa
                    </a>
                </div>

                <div className="pyme__visual">
                    <div className="pyme__card glass-card">
                        <div className="pyme__card-header">
                            <span className="pyme__card-icon">🏢</span>
                            <div>
                                <strong>Consulta Empresarial</strong>
                                <p>Atención directa con las abogadas</p>
                            </div>
                        </div>
                        <div className="pyme__card-body">
                            <div className="pyme__feature">
                                <span>✓</span> Diagnóstico legal de tu situación
                            </div>
                            <div className="pyme__feature">
                                <span>✓</span> Plan de acción personalizado
                            </div>
                            <div className="pyme__feature">
                                <span>✓</span> Atención directa con las abogadas
                            </div>
                            <div className="pyme__feature">
                                <span>✓</span> Presupuesto transparente sin sorpresas
                            </div>
                        </div>
                        <a href="#contacto" className="pyme__card-btn" id="pyme-card-contact">
                            Agendar reunión →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
