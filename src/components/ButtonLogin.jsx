// ButtonLogin.jsx
import { Link } from "react-router-dom";
import "./ButtonLogin.css";

export default function ButtonLogin() {
  return (
    <Link to="/login" className="buttonLogin">
      Inicia Sesión o Regístrate
    </Link>
  );
}
