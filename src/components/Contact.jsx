import { useState } from 'react'
import './Contact.css'

// ─── CONFIGURACIÓN ───────────────────────────────────────────────────────────
// 1. Creá una cuenta gratis en https://formspree.io
// 2. Creá un nuevo formulario y copiá tu endpoint aquí:
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REEMPLAZAR_CON_TU_ID'
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
    const [form, setForm] = useState({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' })
    const [status, setStatus] = useState('idle') // idle | sending | success | error

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault()
        setStatus('sending')
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    nombre: form.nombre,
                    email: form.email,
                    telefono: form.telefono || '(no indicado)',
                    asunto: form.asunto || '(sin área seleccionada)',
                    mensaje: form.mensaje,
                }),
            })
            if (res.ok) {
                setStatus('success')
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <section id="contacto" className="contact">
            <div className="contact__inner">
                <div className="contact__header">
                    <p className="section-label">Hablemos</p>
                    <h2 className="section-title">Escuchamos, orientamos, <span>actuamos</span></h2>
                    <div className="divider" />
                    <p className="section-subtitle">
                        Cuéntanos tu situación y nos pondremos en contacto contigo a la brevedad.
                        La confidencialidad está garantizada.
                    </p>
                </div>

                <div className="contact__content">
                    {/* Sidebar info */}
                    <div className="contact__info">
                        <div className="contact__info-card glass-card">
                            <h3 className="contact__info-title">Medios de Contacto</h3>

                            <div className="contact__info-items">
                                <a
                                    href="https://wa.me/56991234567"
                                    className="contact__info-item contact__info-item--whatsapp"
                                    id="contact-whatsapp"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="contact__info-item-icon">📱</span>
                                    <div>
                                        <strong>WhatsApp</strong>
                                        <span>+569 XXXX XXXX</span>
                                    </div>
                                    <span className="contact__info-arrow">→</span>
                                </a>

                                <div className="contact__info-item">
                                    <span className="contact__info-item-icon">📧</span>
                                    <div>
                                        <strong>Email</strong>
                                        <span>contacto@estudiojuridico.cl</span>
                                    </div>
                                </div>

                                <div className="contact__info-item">
                                    <span className="contact__info-item-icon">🕐</span>
                                    <div>
                                        <strong>Horario de atención</strong>
                                        <span>Lun – Vie: 09:00 – 18:00</span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact__promise">
                                <span>⭐</span>
                                <p>Respondemos en menos de 24 horas hábiles.</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="contact__form-wrapper">
                        {status === 'success' ? (
                            <div className="contact__success glass-card">
                                <span className="contact__success-icon">✅</span>
                                <h3>¡Mensaje enviado!</h3>
                                <p>Nos pondremos en contacto contigo muy pronto. Gracias por confiar en nosotras.</p>
                            </div>
                        ) : (
                            <form className="contact__form glass-card" onSubmit={handleSubmit} id="contact-form">
                                <div className="contact__form-row">
                                    <div className="contact__field">
                                        <label htmlFor="nombre">Nombre completo *</label>
                                        <input
                                            id="nombre" name="nombre" type="text" required
                                            placeholder="Ej: Juan Pérez"
                                            value={form.nombre} onChange={handleChange}
                                        />
                                    </div>
                                    <div className="contact__field">
                                        <label htmlFor="email">Email *</label>
                                        <input
                                            id="email" name="email" type="email" required
                                            placeholder="tu@email.com"
                                            value={form.email} onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="contact__form-row">
                                    <div className="contact__field">
                                        <label htmlFor="telefono">Teléfono</label>
                                        <input
                                            id="telefono" name="telefono" type="tel"
                                            placeholder="+569 XXXX XXXX"
                                            value={form.telefono} onChange={handleChange}
                                        />
                                    </div>
                                    <div className="contact__field">
                                        <label htmlFor="asunto">Área de consulta</label>
                                        <select id="asunto" name="asunto" value={form.asunto} onChange={handleChange}>
                                            <option value="">Selecciona un área</option>
                                            <option>Pensión de Alimentos</option>
                                            <option>Divorcio</option>
                                            <option>Despido Injustificado</option>
                                            <option>Escrituras Públicas</option>
                                            <option>Arrendamiento</option>
                                            <option>Posesión Efectiva</option>
                                            <option>Prescripción de Multas/TAG</option>
                                            <option>PyME / Empresa</option>
                                            <option>Otro</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="contact__field">
                                    <label htmlFor="mensaje">Cuéntanos brevemente tu situación *</label>
                                    <textarea
                                        id="mensaje" name="mensaje" rows={5} required
                                        placeholder="Describe tu caso en pocas palabras..."
                                        value={form.mensaje} onChange={handleChange}
                                    />
                                </div>

                                {status === 'error' && (
                                    <p className="contact__error">
                                        ⚠️ Hubo un error al enviar. Intenta nuevamente o contáctanos por WhatsApp.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="btn-primary contact__submit"
                                    id="contact-submit"
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending'
                                        ? <><span>⏳</span> Enviando...</>
                                        : <><span>📨</span> Enviar Consulta</>
                                    }
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
