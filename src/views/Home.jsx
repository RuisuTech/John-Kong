<<<<<<< HEAD
import { Link } from "react-router-dom";
import "../styles/index.css";
import "../components/ButtonLogin";

export default function Home() {
  return (
    <>
      <div className="Usuario">
        <h1>Usuario</h1>
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
          <button className="buttonLogin">Reservar</button>
        </div>
      </div>
    </>
  );
}
=======
import { useLocation } from "react-router-dom"
import ButtonLogin from "../components/ButtonLogin"
import "../styles/home.css"

export default function Home() {
  const location = useLocation()

  const fromRegister = location.state?.from === "register"

  return (
    <div className="Home">
      {fromRegister ? (
        <>
          <h1>¡Hola Juan! 👋 Bienvenido a John Kong</h1>
          <p>
            Gracias por ser parte de nuestra comunidad. Aquí puedes gestionar tus reservas
            y mantener el control de tus visitas.
          </p>
          <div className="home-buttons">
            <ButtonLogin label="Ver historial de reservas" />
            <ButtonLogin label="Reservar ahora" />
          </div>
        </>
      ) : (
        <>
          <h1>¡Bienvenido a nuestro<br />restaurant!</h1>
          <p>
            Reserva tu mesa de forma rápida y sencilla. <br /> Queremos ofrecerte una
            experiencia gastronómica inolvidable ✨
          </p>
          <ButtonLogin label="Ir al login" to="/login" />

        </>
      )}
    </div>
  )
}
>>>>>>> 1e45ca89274dee8ceda6be50b6a0e90d5b182089
