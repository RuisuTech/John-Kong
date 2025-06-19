import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import Password from "./views/Password.jsx";
import Register from "./views/Register.jsx";
import Reserva from "./views/Reserva.jsx";
import Historial from "./views/Historial.jsx";
import Dashboard from "./views/Dashboard.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Reserva" element={<Reserva />} />
          <Route path="/Historial" element={<Historial />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
