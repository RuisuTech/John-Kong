import ButtonLogin from "../components/ButtonLogin";
import "../styles/home.css"

export default function Home() {
  return (
    <div className="Home">
      <h1>¡Bienvenido a nuestro<br/> restaurant!</h1>
      <p>
        Reserva tu mesa de forma rápida y sencilla. <br /> Queremos ofrecerte una
        experiencia <br />gastronómica inolvidable ✨{" "}
      </p>
      <ButtonLogin/>
    </div>
  );
}
