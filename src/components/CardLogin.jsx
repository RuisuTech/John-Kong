import { Link } from "react-router-dom";
import "./CardLogin.css";

const CardLogin = () => {
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

        {/* Formulario */}
        <form className="card-login-form">
          <div className="card-login-input">
            <input type="email" placeholder="Correo electrónico" />
            <i className="fas fa-user" />
          </div>

          <div className="card-login-input">
            <input type="password" placeholder="Contraseña" />
            <i className="fas fa-lock" />
          </div>

          <Link to="/Password" className="card-login-forgot">
            ¿Olvidaste tu contraseña?
          </Link>

          <Link to="/Home" className="card-login-button">
            Iniciar Sesión
          </Link>

          <button type="button" className="card-login-google">
            Acceder con Google
          </button>
        </form>

        {/* Registro */}
        <p className="card-login-register">
          ¿No tienes una cuenta? <a href="#">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

export default CardLogin;
