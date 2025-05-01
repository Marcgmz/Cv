import React from 'react';

const CVPreview = ({ data }) => {
  return (
    <div className="cv-preview border p-4 mt-4 bg-light">
      <h2>{data.nombre}</h2>
      <p><strong>Ubicación:</strong> {data.locationPerfil}</p>
      <p><strong>Teléfono:</strong> {data.telefono}</p>
      <p><strong>Correo:</strong> {data.correo}</p>
      <p><strong>Resumen:</strong> {data.resumen}</p>

      <hr />
      <h3>Experiencia</h3>
      <p><strong>Empresa:</strong> {data.empresa}</p>
      <p><strong>Cargo:</strong> {data.cargo}</p>
      <p><strong>Ubicación:</strong> {data.locationEmpresa}</p>
      <p><strong>Desde:</strong> {data.fechaInicioEmpresa} <strong>Hasta:</strong> {data.fechaFinEmpresa}</p>
      <p><strong>Descripción:</strong> {data.descripcionEmpresa}</p>
      <p><strong>Puntos destacados:</strong> {data.puntosDestacados}</p>

      <hr />
      <h3>Educación</h3>
      <p><strong>Institución:</strong> {data.institucion}</p>
      <p><strong>Título:</strong> {data.titulo}</p>
      <p><strong>Ubicación:</strong> {data.locationStudios}</p>
      <p><strong>Desde:</strong> {data.fechaInicioStudios} <strong>Hasta:</strong> {data.fechaFinStudios}</p>
      <p><strong>Descripción:</strong> {data.descripcionStudios}</p>

      <hr />
      <h3>Habilidades e Idiomas</h3>
      <p><strong>Habilidad:</strong> {data.habilidades}</p>
      <p><strong>Descripción:</strong> {data.descripcionHabilidades}</p>
      <p><strong>Idioma:</strong> {data.idiomas}</p>
      <p><strong>Nivel:</strong> {data.nivelIdiomas}</p>
    </div>
  );
};

export default CVPreview;
