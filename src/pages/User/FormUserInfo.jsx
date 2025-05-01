import React, { useState } from 'react';
import CVDark from '../CVs/CVDark.jsx';

const FormUserInfo = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '',
    ubicacionPerfil: '',
    telefono: '',
    correo: '',
    resumen: '',
    empresa: '',
    cargo: '',
    ubicacionEmpresa: '',
    fechaInicioEmpresa: '',
    fechaFinEmpresa: '',
    descripcionEmpresa: '',
    puntosDestacados: '',
    institucion: '',
    titulo: '',
    ubicacionEstudios: '',
    fechaInicioEstudios: '',
    fechaFinEstudios: '',
    descripcionEstudios: '',
    habilidades: [''],
    descripcionHabilidades: '',
    idiomas: '',
    nivelIdiomas: '',
    linkedin: '',
    github: '',
    portafolio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleHabilidadesChange = (index, value) => {
    const newHabilidades = [...formData.habilidades];
    newHabilidades[index] = value;
    setFormData({
      ...formData,
      habilidades: newHabilidades
    });
  };

  const handleAddHabilidad = () => {
    setFormData({
      ...formData,
      habilidades: [...formData.habilidades, '']
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado:\n' + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Aside con el formulario */}
        <aside className="col-md-6">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
                onClick={() => setActiveTab(1)}
              >
                Perfil
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
                onClick={() => setActiveTab(2)}
              >
                Experiencia
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 3 ? 'active' : ''}`}
                onClick={() => setActiveTab(3)}
              >
                Educación
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 4 ? 'active' : ''}`}
                onClick={() => setActiveTab(4)}
              >
                Habilidades
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 5 ? 'active' : ''}`}
                onClick={() => setActiveTab(5)}
              >
                Redes Sociales
              </button>
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="p-3 border border-top-0 row g-3">
            {activeTab === 1 && (
              <>
                <h4>Perfil</h4>
                <div className="mb-3 col-md-6">
                  <label className="form-label" htmlFor="nombre">Nombre</label>
                  <input
                    id="nombre"
                    type="text"
                    className="form-control"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" htmlFor="ubicacionPerfil">Ubicación</label>
                  <input
                    id="ubicacionPerfil"
                    type="text"
                    className="form-control"
                    name="ubicacionPerfil"
                    value={formData.ubicacionPerfil}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" htmlFor="telefono">Teléfono</label>
                  <input
                    id="telefono"
                    type="text"
                    className="form-control"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" htmlFor="correo">Correo Electrónico</label>
                  <input
                    id="correo"
                    type="email"
                    className="form-control"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-md-12">
                  <label className="form-label" htmlFor="resumen">Resumen Profesional</label>
                  <textarea
                    rows="3"
                    id="resumen"
                    type="text"
                    className="form-control"
                    name="resumen"
                    value={formData.resumen}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {activeTab === 2 && (
              <>
                <h4>Experiencia</h4>
                <div className="mb-3 col-md-6">
                  <label className="form-label" htmlFor="empresa">Empresa</label>
                  <input
                    id="empresa"
                    type="text"
                    className="form-control"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                  />
                </div>
                {/* Otros campos de experiencia */}
              </>
            )}
            
            {activeTab === 3 && (
              <>
                <h4>Educación</h4>
                <div className="mb-3 col-md-6">
                  <label className="form-label" htmlFor="institucion">Institución</label>
                  <input
                    id="institucion"
                    type="text"
                    className="form-control"
                    name="institucion"
                    value={formData.institucion}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" htmlFor="titulo">Título</label>
                  <input
                    id="titulo"
                    type="text"
                    className="form-control"
                    name="titulo"
                    value={formData.titulo}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" htmlFor="ubicacionEstudios">Ubicación</label>
                  <input
                    id="ubicacionEstudios"
                    type="text"
                    className="form-control"
                    name="ubicacionEstudios"
                    value={formData.ubicacionEstudios}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" htmlFor="fechaInicioEstudios">Fecha de Inicio</label>
                  <input
                    id="fechaInicioEstudios"
                    type="date"
                    className="form-control"
                    name="fechaInicioEstudios"
                    value={formData.fechaInicioEstudios}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" htmlFor="fechaFinEstudios">Fecha de Finalización</label>
                  <input
                    id="fechaFinEstudios"
                    type="date"
                    className="form-control"
                    name="fechaFinEstudios"
                    value={formData.fechaFinEstudios}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {activeTab === 4 && (
              <>
                <h4>Habilidades</h4>
                {formData.habilidades.map((habilidad, index) => (
                  <div key={index} className="col-md-6">
                    <label htmlFor={`habilidades-${index}`} className="form-label">Habilidad {index + 1}</label>
                    <input
                      type="text"
                      className="form-control"
                      id={`habilidades-${index}`}
                      name="habilidades"
                      value={habilidad}
                      onChange={(e) => handleHabilidadesChange(index, e.target.value)}
                    />
                  </div>
                ))}
                <div className="col-md-12">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleAddHabilidad}
                  >
                    Añadir Habilidad
                  </button>
                </div>
              </>
            )}

            {activeTab === 5 && (
              <>
                <h4>Redes Sociales</h4>
                <div className="mb-3 col-md-6">
                  <label className="form-label" htmlFor="linkedin">LinkedIn</label>
                  <input
                    id="linkedin"
                    type="text"
                    className="form-control"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" htmlFor="github">GitHub</label>
                  <input
                    id="github"
                    type="text"
                    className="form-control"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label" htmlFor="portafolio">Portafolio</label>
                  <input
                    id="portafolio"
                    type="text"
                    className="form-control"
                    name="portafolio"
                    value={formData.portafolio}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                {activeTab === 4 ? 'Guardar' : 'Siguiente'}
              </button>
            </div>
          </form>
        </aside>

        {/* Columna para la previsualización del CV */}
        <div className="col-md-6">
          <h4>Previsualización del CV</h4>
          <CVDark data={formData} />
        </div>
      </div>
    </div>
  );
};

export default FormUserInfo;
