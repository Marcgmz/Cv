import React from 'react';
const Educacion = () => {
  return (
    <div className="container mt-3">
        <form className="row g-3">
        <div className="col-md-4">
            <label htmlFor="institucion" className="form-label">Institución</label>
            <input type="text" className="form-control" id="institucion" />
        </div>
        <div className="col-md-4">
            <label htmlFor="titulo" className="form-label">Titulo</label>
            <input type="text" className="form-control" id="titulo" />
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
        </form>
    </div>
  );
}

export default Educacion;
