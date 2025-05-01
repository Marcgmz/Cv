import React from "react";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="alert alert-info text-center" role="alert">
            <h4 className="alert-heading"> Precio:</h4>
            <p className="mb-0 fs-5"><strong>10.99 € EUR</strong></p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header text-center">
              <h2 className="mb-0">Realizar Pago</h2>
            </div>
            <div className="card-body">
              <form action="/procesar_compra" method="POST">
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre del Cliente</label>
                  <input type="text" className="form-control" id="nombre" name="nombre" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="direccion" className="form-label">Dirección</label>
                  <input type="text" className="form-control" id="direccion" name="direccion" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">Teléfono</label>
                  <input type="tel" className="form-control" id="telefono" name="telefono" required />
                </div>

                {/* Aquí insertamos el botón de PayPal */}
                <div className="d-flex justify-content-center">
                  {/* Aquí debes integrar el botón de PayPal */}
                  <div id="paypal-button-container"></div>
                </div>
              </form>
            </div>
            <div className="card-footer text-center">
              <p className="mt-2 mb-0">
                ¿Necesitas ayuda?{" "}
                <Link to="/contact" className="text-decoration-none">Contáctanos</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
