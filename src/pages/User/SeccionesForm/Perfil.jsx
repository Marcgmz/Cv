import React from 'react';
const Perfil = () => {
  return (
    <div className="container mt-3">
        <form className="row g-3">
        <div className="col-md-6">
            <label htmlFor="name" className="form-label">Nombre Completo</label>
            <input type="text" className="form-control" id="name" />
        </div>
        <div className="col-md-6">
            <label htmlFor="location" className="form-label">Ubicación</label>
            <input type="text" className="form-control" id="location" />
        </div>
        <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Telefono</label>
            <input type="text" className="form-control" id="phone" />
        </div>
        <div className="col-md-6">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="email" />
        </div>
        <div className="col-12">
            <label htmlFor="resume" className="form-label">Resumen Profesional</label>
            <textarea className="form-control" id="resume" rows="3"></textarea>
        </div>
        </form>
    </div>
  );
}

export default Perfil;
