import { Link } from "react-router-dom";
import "./CardLogin.css";

const CardPassword = () => {
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
          <h2>Crea una nueva contraseña</h2>
          <p>
            Introduce una nueva contraseña para tu cuenta. Asegúrate de que sea
            segura y fácil de recordar.
          </p>
        </div>

        {/* Formulario */}
        <form className="card-login-form">
          <div className="card-login-input">
            <input type="password" placeholder="Nueva contraseña" />
            <i className="fas fa-user" />
            <p className="text-x">
              Debe tener al menos 8 caracteres y combinar letras, números o
              símbolos.
            </p>
            <input type="password" placeholder="Confirmar contraseña" />
            <i className="fas fa-user" />
          </div>

          <Link to="/Login" className="card-login-button">
            Guardar Contraseña
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CardPassword;
