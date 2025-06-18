// ButtonLogin.jsx
import { Link } from "react-router-dom"
import "./ButtonLogin.css"

export default function ButtonLogin({ label = "Inicia Sesión o Regístrate", to }) {
  return (
    <button className="buttonLogin">
      {to ? (
        <Link to={to}>{label}</Link>
      ) : (
        <span>{label}</span>
      )}
    </button>
  )
}
