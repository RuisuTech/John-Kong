// ButtonLogin.jsx
import { Link } from "react-router-dom"
import "./ButtonLogin.css"

export default function ButtonLogin({ label = "Inicia Sesión o Regístrate", to }) {
  return (
<<<<<<< HEAD
    <Link to="/login" className="buttonLogin">
      Inicia Sesión o Regístrate
    </Link>
  );
=======
    <button className="buttonLogin">
      {to ? (
        <Link to={to}>{label}</Link>
      ) : (
        <span>{label}</span>
      )}
    </button>
  )
>>>>>>> 1e45ca89274dee8ceda6be50b6a0e90d5b182089
}
