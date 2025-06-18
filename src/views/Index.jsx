import ButtonLogin from "../components/ButtonLogin";
import "../styles/index.css";

export default function Index() {
  return (
    <>
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
          <ButtonLogin />
        </div>
      </div>
    </>
  );
}
