// ButtonLogin.jsx
import { Link } from "react-router-dom";
import "./ButtonLogin.css";

export default function ButtonLogin() {
  return (
    <button className="buttonLogin">
      <Link to="/login">Inicia Sesión o Regístrate</Link>
    </button>
  );
}
