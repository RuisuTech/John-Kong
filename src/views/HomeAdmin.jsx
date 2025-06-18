import { Link } from "react-router-dom";
import "../styles/index.css";
import "../components/ButtonLogin";

export default function HomeAdmin() {
  return (
    <>
      <div className="Usuario">
        <h1>Admin</h1>
        <Link to="/" className="cerrar">
          Cerrar Sesion
        </Link>
      </div>

      <div className="container">
        <div className="Back"></div>

        <div className="index">
          <h1>
            ¡Bienvenido a nuestro
            <br /> restaurant!
          </h1>
          <p>
            Reserva tu mesa de forma rápida y sencilla. <br /> Queremos
            ofrecerte una experiencia <br />
            gastronómica inolvidable ✨{" "}
          </p>
          <button className="buttonLogin">Panel de Control</button>
        </div>
      </div>
    </>
  );
}
