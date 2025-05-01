import React from 'react';
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Contáctanos</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">

          {/* Formulario de contacto */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title mb-4">Formulario de Contacto</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Mensaje</label>
                  <textarea className="form-control" id="message" rows="4"></textarea>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
              </form>
            </div>
          </div>

          {/* Preguntas frecuentes */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Preguntas Frecuentes</h5>

              <div className="accordion" id="accordionExample">
                {/* FAQ 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      ¿Cómo puedo crear una cuenta?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Para crear una cuenta, dirígete a la página de{" "}
                      <b><Link to="/login" className="text-decoration-none">Login</Link></b>. 
                      Luego, haz clic en el enlace que dice{" "}
                      <i><b><Link to="/register" className="text-decoration-none">¿No tienes una cuenta? Regístrate</Link></b></i>, 
                      introduce tus datos y crea una contraseña segura. Finalmente, haz clic en <b>Registrarse</b>.
                    </div>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      ¿Cómo procedo a realizar el pago de la suscripción?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Debes hacer clic en el botón <b>"Suscribirse"</b> desde la pantalla principal.
                      Luego, introduce tus datos de pago y selecciona el método que prefieras.
                      Finalmente, haz clic en <b>"Pagar"</b> para completar el proceso.
                    </div>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      ¿Dónde puedo encontrar más información sobre el pago vía PayPal?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Puedes encontrar más información sobre el pago vía PayPal en la sección{" "}
                      <b>"Acerca de"</b> de nuestra página web o escribiéndonos mediante este formulario de contacto.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
