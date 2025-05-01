import React, { useState } from 'react';
import Perfil from './SeccionesForm/Perfil';
import Experiencia from './SeccionesForm/Experiencia';
import Educacion from './SeccionesForm/Educ';
import Habilidades from './SeccionesForm/Habilidades';
const Nav = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div class="container mt-3">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" onClick={() => handleTabChange(1)}>Perfil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={() => handleTabChange(2)}>Experiencia</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={() => handleTabChange(3)}>Educación</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={() => handleTabChange(4)}>Habilidades</a>
        </li>
      </ul>
      {activeTab === 1 && <Perfil />}
      {activeTab === 2 && <Experiencia />}
      {activeTab === 3 && <Educacion />}
      {activeTab === 4 && <Habilidades />}
    </div>
  );
};

export default Nav;
