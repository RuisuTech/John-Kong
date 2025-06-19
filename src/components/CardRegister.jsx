import { Link } from "react-router-dom";
import "./CardLogin.css";

const CardRegister = () => {
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
          <h2>Recuperemos tu contraseña</h2>
          <p>
            Ingresa tu correo electrónico y te enviaremos un código para
            continuar con el proceso.
          </p>
        </div>

        {/* Formulario */}
        <form className="card-login-form">
          <div className="card-login-input">
            <input type="email" placeholder="Correo electrónico" />
            <i className="fas fa-user" />
          </div>

          <Link to="/Verificacion" className="card-login-button">
            Enviar
          </Link>

          <Link to="/login" className="card-login-google">
            Atras
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CardRegister;
