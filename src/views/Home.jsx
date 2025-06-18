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