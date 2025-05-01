import React from 'react';

const CVDark = ({ data }) => {
  return (
    <div>
      <style>
        {`
        .cv-preview {
          margin: 0 auto;
          text-align: left;
          background-color: #1e1e1e;
          padding: 40px;
          border: 2px solid #6200ea;
          box-shadow: 0 0 20px rgba(98, 0, 234, 0.3);
          height: 100%;
          overflow-y: auto;
        }
        h1 {
          color: #bb86fc;
          margin-bottom: 10px;
        }
        h3 {
          color: #bb86fc;
          margin-top: 30px;
          border-left: 4px solid #bb86fc;
          padding-left: 10px;
        }
        p {
          color: #ccc;
          margin-bottom: 10px;
        }
        .section {
          margin-top: 20px;
        }
        .skills span {
          background: #bb86fc;
          color: #121212;
          padding: 5px 10px;
          margin: 4px 5px 0 0;
          display: inline-block;
          font-size: 0.9em;
        }
        .section ul {
          padding-left: 20px;
        }
        .section ul li {
          color: #ccc;
        }
        .contact-info p {
          margin: 5px 0;
        }
        `}
      </style>
      
      <div className="cv-preview">
        {/* Nombre */}
        {data.nombre && <h1>{data.nombre}</h1>}
        
        {/* Información de contacto */}
        <div className="contact-info">
          {data.telefono && <p><strong>Tel:</strong> {data.telefono}</p>}
          {data.correo && <p><strong>Email:</strong> {data.correo}</p>}
          {data.linkedin && <p><strong>LinkedIn:</strong> {data.linkedin}</p>}
          {data.github && <p><strong>GitHub:</strong> {data.github}</p>}
          {data.portafolio && <p><strong>Portafolio:</strong> {data.portafolio}</p>}
        </div>

        {/* Perfil */}
        {data.resumen && (
          <div className="section">
            <h3>Perfil</h3>
            <p>{data.resumen}</p>
          </div>
        )}

        {/* Experiencia */}
        {data.empresa && (
          <div className="section">
            <h3>Experiencia</h3>
            <ul>
              <li><strong>{data.cargo}</strong> - {data.empresa}</li>
              <li><em>{data.fechaInicioEmpresa} - {data.fechaFinEmpresa}</em></li>
              <li>{data.descripcionEmpresa}</li>
            </ul>
          </div>
        )}

        {/* Educación */}
        {data.institucion && (
          <div className="section">
            <h3>Educación</h3>
            <ul>
              <li><strong>{data.titulo}</strong> - {data.institucion}</li>
              <li><em>{data.fechaInicioEstudios} - {data.fechaFinEstudios}</em></li>
              <li>{data.descripcionEstudios}</li>
            </ul>
          </div>
        )}

        {/* Habilidades */}
        {data.habilidades && data.habilidades.length > 0 && (
          <div className="section">
            <h3>Habilidades</h3>
            <div className="skills">
              {data.habilidades.map((habilidad, index) => (
                habilidad && <span key={index}>{habilidad}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVDark;
