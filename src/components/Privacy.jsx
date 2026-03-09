import './Privacy.css'

export default function Privacy() {
    return (
        <div className="privacy">
            <div className="privacy__inner">
                <h1>Política de Privacidad</h1>
                <p className="privacy__updated">Última actualización: marzo 2026</p>

                <section>
                    <h2>1. Responsable del tratamiento</h2>
                    <p>
                        Estudio Jurídico Morales &amp; Araya, con correo electrónico de contacto{' '}
                        <a href="mailto:estudiomoralesaraya@gmail.com">estudiomoralesaraya@gmail.com</a>.
                    </p>
                </section>

                <section>
                    <h2>2. Datos que recopilamos</h2>
                    <p>A través del formulario de contacto de este sitio web recopilamos:</p>
                    <ul>
                        <li>Nombre completo</li>
                        <li>Correo electrónico</li>
                        <li>Teléfono (opcional)</li>
                        <li>Área de consulta</li>
                        <li>Mensaje o descripción del caso</li>
                    </ul>
                </section>

                <section>
                    <h2>3. Finalidad del tratamiento</h2>
                    <p>
                        Los datos recabados se utilizan exclusivamente para responder a las consultas
                        realizadas por los usuarios y para prestar los servicios jurídicos solicitados.
                        No se utilizan con fines comerciales ni se comparten con terceros, salvo
                        obligación legal.
                    </p>
                </section>

                <section>
                    <h2>4. Confidencialidad</h2>
                    <p>
                        En cumplimiento del deber de secreto profesional del abogado y de la normativa
                        vigente en Chile (Ley N° 19.628 sobre Protección de la Vida Privada), toda la
                        información que nos comparta será tratada con absoluta reserva y
                        confidencialidad.
                    </p>
                </section>

                <section>
                    <h2>5. Conservación de los datos</h2>
                    <p>
                        Los datos se conservarán durante el tiempo estrictamente necesario para atender
                        su consulta o, en caso de establecerse una relación profesional, durante el
                        tiempo que dure dicha relación y los plazos legales aplicables.
                    </p>
                </section>

                <section>
                    <h2>6. Derechos del usuario</h2>
                    <p>
                        Conforme a la Ley N° 19.628, usted tiene derecho a acceder, rectificar,
                        cancelar u oponerse al tratamiento de sus datos personales. Para ejercer estos
                        derechos, puede contactarnos a través del correo electrónico indicado en el
                        punto 1.
                    </p>
                </section>

                <section>
                    <h2>7. Servicio de envío de formularios</h2>
                    <p>
                        Los mensajes enviados a través del formulario de contacto son procesados por{' '}
                        <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noreferrer">
                            Formspree
                        </a>
                        , un servicio externo que actúa como encargado del tratamiento y que dispone de
                        sus propias políticas de privacidad.
                    </p>
                </section>

                <div className="privacy__back">
                    <a href="/" className="btn-primary">← Volver al sitio</a>
                </div>
            </div>
        </div>
    )
}
