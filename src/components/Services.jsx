import './Services.css'

const services = [
    {
        icon: '👶',
        title: 'Pensión de Alimentos',
        desc: 'Cobro de pensiones a través de bancos y AFP. Defendemos el interés de tus hijos con firmeza.',
        category: 'Familia',
    },
    {
        icon: '💔',
        title: 'Divorcios',
        desc: 'Tramitación de divorcios de común acuerdo y unilateral. Proceso claro y sin traumas.',
        category: 'Familia',
    },
    {
        icon: '💼',
        title: 'Despidos Injustificados',
        desc: 'Protección ante despidos sin causa justa y vulneraciones de derechos laborales fundamentales.',
        category: 'Laboral',
    },
    {
        icon: '📜',
        title: 'Escrituras Públicas',
        desc: 'Redacción, revisión y tramitación de escrituras públicas para dar certeza jurídica a tus actos.',
        category: 'Civil',
    },
    {
        icon: '🏠',
        title: 'Ley de Arrendamiento',
        desc: 'Asesoría integral en contratos de arriendo, desahucios y resolución de conflictos entre partes.',
        category: 'Civil',
    },
    {
        icon: '✈️',
        title: 'Autorización Salidas del País',
        desc: 'Tramitación de autorizaciones para que los menores puedan viajar al extranjero sin complicaciones.',
        category: 'Familia',
    },
    {
        icon: '🚗',
        title: 'Vehículos en Remates',
        desc: 'Alzamientos y transferencias de vehículos obtenidos en remates judiciales o extrajudiciales.',
        category: 'Civil',
    },
    {
        icon: '🚦',
        title: 'Prescripción de Multas y TAG',
        desc: 'Cancelación de multas de tránsito y deudas de TAG mediante prescripción. Recuperá tu licencia.',
        category: 'Civil',
    },
    {
        icon: '🏡',
        title: 'Posesiones Efectivas',
        desc: 'Tramitación de herencias y posesión efectiva de bienes para regularizar el patrimonio familiar.',
        category: 'Sucesorio',
    },
    {
        icon: '🪪',
        title: 'Prescripción Permiso de Circulación',
        desc: 'Regularización de permisos de circulación vencidos mediante los mecanismos legales vigentes.',
        category: 'Civil',
    },
    {
        icon: '✍️',
        title: 'Cambios de Nombre y Apellido',
        desc: 'Asesoría y tramitación de cambios de nombre o apellido ante el Registro Civil.',
        category: 'Civil',
    },
]

const categoryColor = {
    'Familia': 'var(--clr-rose)',
    'Laboral': '#5b8fdb',
    'Civil': 'var(--clr-gold)',
    'Sucesorio': '#7db87d',
}

export default function Services() {
    return (
        <section id="servicios" className="services">
            <div className="services__inner">
                <div className="services__header">
                    <p className="section-label">Lo que ofrecemos</p>
                    <h2 className="section-title">Nuestras Áreas de <span>Práctica</span></h2>
                    <div className="divider" />
                    <p className="section-subtitle">
                        Cubrimos un amplio espectro jurídico para brindar soluciones
                        integrales tanto a personas naturales como a empresas.
                    </p>
                </div>

                <div className="services__grid">
                    {services.map((service, i) => (
                        <div
                            key={service.title}
                            className="services__card glass-card"
                            style={{ animationDelay: `${i * 0.07}s` }}
                        >
                            <div className="services__card-top">
                                <span className="services__icon">{service.icon}</span>
                                <span
                                    className="services__category"
                                    style={{ color: categoryColor[service.category] || 'var(--clr-gold)' }}
                                >
                                    {service.category}
                                </span>
                            </div>
                            <h3 className="services__card-title">{service.title}</h3>
                            <p className="services__card-desc">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
