import React from 'react';
const Habilidades = () => {
  return (
    <div className="container mt-3">
        <form className="row g-3">
          <div className="col-md-12">
              <label htmlFor="habilidad" className="form-label">Habilidad</label>
              <input type="text" className="form-control" id="habilidad" />
          </div>
          <div className="col-12">
              <label htmlFor="descripcion" className="form-label">Descripción</label>
              <textarea className="form-control" id="descripcion" rows="3"></textarea>
          </div>
        </form>
    </div>
  );
}

export default Habilidades;

