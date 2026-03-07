import { useState } from 'react'
import './FAQ.css'

const faqs = [
    {
        q: '¿Cuánto cuesta un divorcio en Chile?',
        a: 'El costo depende del tipo de divorcio. Si es de común acuerdo entre ambas partes, el proceso es más rápido y económico. Si es unilateral, puede tomar más tiempo y requiere cumplir el plazo de cese de convivencia (3 años). Te orientamos sobre la mejor opción según tu situación sin compromiso.',
    },
    {
        q: '¿Qué pasa si no pagan la pensión de alimentos?',
        a: 'En Chile existen mecanismos coercitivos muy efectivos: el descuento por planilla desde el empleador, la retención de fondos previsionales (AFP), arresto nocturno, y la suspensión de la licencia de conducir. Actuamos rápidamente para garantizar que tus hijos reciban lo que les corresponde.',
    },
    {
        q: '¿Cuándo puedo demandar por despido injustificado?',
        a: 'Si fuiste despedido sin causa justificada o sin respetar tus derechos laborales, tienes 60 días hábiles desde el despido para presentar una demanda ante el Juzgado de Letras del Trabajo. Es fundamental actuar con prontitud para no perder este derecho.',
    },
    {
        q: '¿Qué es una escritura pública y cuándo la necesito?',
        a: 'Una escritura pública es un documento legal otorgado ante Notario que da certeza jurídica a actos importantes: compraventas, mandatos, poderes, capitulaciones matrimoniales, entre otros. Es obligatoria en muchas transacciones inmobiliarias y contratos de alto valor.',
    },
    {
        q: '¿Cómo funciona la posesión efectiva de una herencia?',
        a: 'Es el trámite legal que permite a los herederos ser reconocidos como tales y disponer de los bienes del fallecido. Si existe testamento se tramita ante un juzgado; si no hay testamento, ante el Registro Civil. Te acompañamos en todo el proceso para que sea lo más ágil posible.',
    },
    {
        q: '¿Puedo prescribir multas de tránsito y deudas de TAG?',
        a: 'Sí. En Chile, las multas de tránsito y las deudas de TAG prescriben al transcurrir cierto tiempo sin que hayan sido cobradas judicialmente. Si tenés deudas antiguas, es posible liberar tu licencia de conducir y regularizar tu situación. Consultá tu caso con nosotras.',
    },
    {
        q: '¿Es complicado cambiar el nombre o apellido en Chile?',
        a: 'Desde la Ley N° 21.334, el cambio de nombre y apellido es un trámite administrativo que se realiza ante el Registro Civil, sin necesidad de ir a un tribunal en la mayoría de los casos. Sin embargo, existen requisitos específicos y casos que sí requieren asesoría legal.',
    },
    {
        q: '¿Qué tipos de contratos de arrendamiento manejan?',
        a: 'Redactamos, revisamos y asesoramos en contratos de arrendamiento habitacional y comercial. También representamos a arrendadores o arrendatarios en casos de incumplimiento, desahucio y recuperación de inmuebles, aplicando la Ley de Arrendamiento vigente.',
    },
]

export default function FAQ() {
    const [open, setOpen] = useState(null)

    const toggle = i => setOpen(open === i ? null : i)

    return (
        <section id="faq" className="faq">
            <div className="faq__inner">
                <div className="faq__header">
                    <p className="section-label">Preguntas frecuentes</p>
                    <h2 className="section-title">Lo que la gente <span>suele preguntar</span></h2>
                    <div className="divider" />
                    <p className="section-subtitle">
                        Resolvemos tus dudas más comunes. Si tu caso no está aquí,
                        escríbenos y te respondemos a la brevedad.
                    </p>
                </div>

                <div className="faq__list">
                    {faqs.map((item, i) => (
                        <div
                            key={i}
                            className={`faq__item glass-card ${open === i ? 'faq__item--open' : ''}`}
                        >
                            <button
                                className="faq__question"
                                onClick={() => toggle(i)}
                                aria-expanded={open === i}
                                id={`faq-item-${i}`}
                            >
                                <span>{item.q}</span>
                                <span className="faq__icon" aria-hidden="true">
                                    {open === i ? '−' : '+'}
                                </span>
                            </button>
                            <div className="faq__answer">
                                <p>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq__cta">
                    <p>¿Tu consulta no está aquí?</p>
                    <a href="#contacto" className="btn-primary">Escríbenos</a>
                </div>
            </div>
        </section>
    )
}
