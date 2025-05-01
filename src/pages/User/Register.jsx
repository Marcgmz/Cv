import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar los datos al backend
      const res = await axios.post("http://localhost:5000/api/register", form);
      // Si la respuesta es exitosa, mostrar el mensaje
      setMessage(res.data.message);
      setForm({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      // Manejar el error, mostrando el mensaje del backend
      if (err.response && err.response.data && err.response.data.error) {
        setMessage(err.response.data.error);  // Mostrar el error del backend
      } else {
        setMessage("Error al registrar el usuario");  // Mensaje por defecto si no se recibe un error específico
      }
      console.error("Error al registrar el usuario:", err);
    }
  };

  return (
    <div className="container mt-5 pt-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card">
            <div className="card-header text-center">
              <h2 className="mb-3 mt-2">Registro de Usuario</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Usuario</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={form.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Correo</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirmar Contraseña</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                {message && (
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                )}
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success">
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer text-center">
              <p className="mt-3">
                ¿Ya tienes cuenta?{" "}
                <Link to="/login" className="text-decoration-none">
                  Inicia sesión
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
