import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Tracta el canvi dels inputs
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Enviar el Formulari
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirigim a la pagina Principal demoment a  /templates
        navigate("/templates");
      } else {
        // Mostrar error si las credenciales son inválidas
        setErrorMessage(data.error || "Error durant el login.");
      }
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
      setErrorMessage("Hubo un problema con la conexión.");
    }
  };

  return (
    <div className="container mt-5 pt-4">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header text-center">
              <h1 className="mb-3 mt-2">Iniciar sesión</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="user" className="form-label">
                    Usuario
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="user"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">
                    Iniciar sesión
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer text-center">
              <p className="mt-3">
                ¿No tienes una cuenta?{" "}
                <Link to="/register" className="text-decoration-none">
                  Regístrate
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
