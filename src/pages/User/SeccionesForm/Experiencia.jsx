import React from 'react';
const Experiencia = () => {
  return (
    <div className="container mt-3">
        <form className="row g-3">
        <div className="col-md-4">
            <label htmlFor="empresa" className="form-label">Empresa</label>
            <input type="text" className="form-control" id="empresa" />
        </div>
        <div className="col-md-4">
            <label htmlFor="cargo" className="form-label">Cargo</label>
            <input type="text" className="form-control" id="cargo" />
        </div>
        <div className="col-md-4">
            <label htmlFor="ubicacion" className="form-label">Ubicación</label>
            <input type="text" className="form-control" id="ubicacion" />
        </div>
        <div className="col-md-6">
            <label htmlFor="fechaInicio" className="form-label">Fecha de Inicio</label>
            <input type="date" className="form-control" id="fechaInicio" />
        </div>
        <div className="col-md-6">
            <label htmlFor="fechaFin" className="form-label">Fecha de Fin</label>
            <input type="date" className="form-control" id="fechaFin" />
        </div>
        <div className="col-12">
            <label htmlFor="descripcion" className="form-label">Descripción</label>
            <textarea className="form-control" id="descripcion" rows="3"></textarea>
        </div>
        <div className="col-12">
            <label htmlFor="puntosDestacados" className="form-label">Puntos destacados</label>
            <textarea className="form-control" id="puntosDestacados" rows="3"></textarea>
        </div>
        </form>
    </div>
  );
}

export default Experiencia;

