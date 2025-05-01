import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import '../../Css/Home.css';

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  return (
    <div className={`home-layout ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <button onClick={toggleTheme} className="theme-toggle-btn">
        {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
      </button>

      <main className="home-main">
        <div className="home-content">
          <h1 className="letter-zoom">
            {'CV Builder & Designer'.split('').map((char, i) => (
              <span key={i}>{char === ' ' ? '\u00A0' : char}</span>
            ))}
          </h1>

          <p className="lead">
            Crea, personaliza y gestiona tus sitios web de forma profesional y rápida.
          </p>

          <div className="button-group">
            <Link to="/templates" className="btn-outline-primary">Plantillas de CV</Link>
            <Link to="/display" className="btn-primary central-button">Crear tu CV</Link>
            <Link to="/register" className="btn-outline-primary">Regístrate</Link>
          </div>
        </div>

        <div className="card-container">
          <div className="custom-card">
            <h5 className="card-title">Diseño Personalizado</h5>
            <p className="card-text">Crea un CV único adaptado a tu estilo y necesidades profesionales.</p>
          </div>
          <div className="custom-card">
            <h5 className="card-title">Fácil de Usar</h5>
            <p className="card-text">Sin complicaciones, crea tu CV en pocos pasos con nuestra interfaz intuitiva.</p>
          </div>
          <div className="custom-card">
            <h5 className="card-title">Listo para Descargar</h5>
            <p className="card-text">Una vez creado tu CV, descárgalo en formato PDF para enviarlo fácilmente.</p>
          </div>
        </div>

        <div className="cv-image-row">
          <img src="/cv.jpg" alt="Ejemplo de CV 1" />
          <img src="/Cv1.jpg" alt="Ejemplo de CV 2" />
          <img src="/Cv2.jpg" alt="Ejemplo de CV 3" />
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default Home;
