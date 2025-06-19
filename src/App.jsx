import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./views/Index.jsx";
import Login from "./views/Login.jsx";
import Home from "./views/Home.jsx";
import HomeAdmin from "./views/HomeAdmin.jsx";
import Password from "./views/Password.jsx";
import Register from "./views/Register.jsx";
import Verificacion from "./views/Verificacion.jsx";
import GuardaPassword from "./views/GuardaPassword.jsx";
import Reserva from "./views/Reserva.jsx";
import Historial from "./views/Historial.jsx";
import Dashboard from "./views/Dashboard.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Verificacion" element={<Verificacion />} />
          <Route path="/GuardaPassword" element={<GuardaPassword />} />
          <Route path="/HomeAdmin" element={<HomeAdmin/>} />
          <Route path="/Reserva" element={<Reserva />} />
          <Route path="/Historial" element={<Historial />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
