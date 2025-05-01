import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        
        {/* Menú completo a la izquierda */}
        <div className="d-flex gap-4 align-items-center flex-wrap">
          <Link className="text-white text-decoration-none fw-bold fs-4" to="/">Home</Link>
          <Link className="text-white text-decoration-none" to="/templates">Templates</Link>
          <Link className="text-white text-decoration-none" to="/payment">Payment</Link>
          <Link className="text-white text-decoration-none" to="/contact">Contact</Link>
          <Link className="text-white text-decoration-none" to="/Dashboard">Dashboard</Link>
        </div>

        {/* Login y Register a la derecha */}
        <div className="d-flex gap-3">
          <Link className="text-white text-decoration-none" to="/login">Login</Link>
          <Link className="text-white text-decoration-none" to="/register">Register</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
