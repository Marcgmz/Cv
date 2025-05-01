import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Css/App.css';
import Home from './pages/Home/Home';
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import Templates from "./pages/Website/Templates";
import Payment from "./pages/Website/Payment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Display from './pages/User/Display';
import Contact from "./pages/Website/Contact";
import Dashboard from "./pages/Dashboard/Dashboard"
import Layout from './pages/Components/Layout'; // Este es el layout con el Header
import FormUserInfo from './pages/User/FormUserInfo';

function App() {
  return (
    <Router>

      <div>
        {/* Configuramos las rutas */}
      <Routes>
          <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="templates" element={<Templates />} />
          <Route path="payment" element={<Payment />} />
          <Route path="display" element={<Display />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="/formUserInfo" element={<FormUserInfo />} /> {/* Ruta para FormUserInfo */}
        </Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
