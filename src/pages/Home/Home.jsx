import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import '../../Css/Home.css';

function Home() {
  // Estado para el modo oscuro (por defecto será falso)
  const [darkMode, setDarkMode] = useState(false);

  // Función para cambiar el tema
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Efecto que corre al cargar la página
  useEffect(() => {
    // Detecta la preferencia del sistema operativo o navegador
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []); 

  return (
    <div className={`home-layout ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <button onClick={toggleTheme} className="theme-toggle-btn">
        {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
      </button>

      <main className="home-main">
        <div className="home-content text-center">
          <h1 className="display-4 fw-bold mb-3">CV Builder & Designer</h1>
          <p className="lead mb-4">
            Crea, personaliza y gestiona tus sitios web de forma profesional y rápida.
          </p>

          <div className="d-flex flex-column align-items-center mb-5">
            <div className="d-flex gap-3 flex-wrap justify-content-center mb-3">
              <Link to="/templates" className="btn btn-outline-primary">Plantillas de CV</Link>
              <Link to="/register" className="btn btn-outline-primary">Regístrate</Link>
            </div>
            <Link to="/display" className="btn btn-primary mt-3">Crear tu CV</Link>
          </div>

          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Diseño Personalizado</h5>
                  <p className="card-text">Crea un CV único adaptado a tu estilo y necesidades profesionales.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Fácil de Usar</h5>
                  <p className="card-text">Sin complicaciones, crea tu CV en pocos pasos con nuestra interfaz intuitiva.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Listo para Descargar</h5>
                  <p className="card-text">Una vez creado tu CV, descárgalo en formato PDF para enviarlo fácilmente.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5 mb-5">
            <img
              src="/cv.jpg"
              alt="Ejemplo de CV"
              className="img-fluid rounded shadow hover-animate"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
