import { Link } from "react-router-dom";
import "./CardLogin.css";

const CardVerificacion = () => {
  return (
    <div
      className="card-login-container"
      style={{ backgroundImage: "url('/ruta/de/fondo.jpg')" }}
    >
      <div className="card-login-box">
        {/* Logo */}
        <div className="card-login-logo">
          <img src="/logo.png" alt="John Kong Logo" />
        </div>

        <div className="Text-Password">
          <h2>Código enviado</h2>
          <p>
            Revisa tu correo electrónico. Te hemos enviado un código de
            verificación.
          </p>
        </div>

        {/* Formulario */}
        <form className="card-login-form">
          <div className="card-login-input">
            <input type="email" placeholder="Verifica el código" />
            <i className="fas fa-user" />
          </div>

          <Link to="/GuardaPassword" className="card-login-button">
            Enviar
          </Link>

          <Link to="/Password" className="card-login-google">
            Atras
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CardVerificacion;
