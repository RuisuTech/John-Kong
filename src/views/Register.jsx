import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/register.css"

export default function Register() {
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
  } 
  const navigate = useNavigate()

  const handleSuccess = () => {
    navigate("/", { state: { from: "register" } })
  }
  return (
    <>
      <div
        className="card-login-container"
        style={{ backgroundImage: "url('/ruta/de/fondo.jpg')" }}
      >
        <div className="card-login-box">
          <h5>Crear una cuenta nueva</h5>
          <p>Crea tu cuenta para comenzar. Solo te tomará un momento.</p>

          <form className="card-login-form" onSubmit={handleSubmit}>
            <div className="card-login-input">
              <input type="text" placeholder="Nombre completo" />
              <i className="fas fa-user" />
            </div>

            <div className="card-login-input">
              <input type="email" placeholder="Correo electrónico" />
              <i className="fas fa-lock" />
            </div>

            <div className="card-login-input">
              <input type="password" placeholder="Contraseña" />
              <i className="fas fa-lock" />
            </div>

            <p className="text-requirements">
              Debe tener al menos 8 caracteres y combinar letras, números o símbolos.
            </p>

            <div className="card-login-input">
              <input type="password" placeholder="Confirmar contraseña" />
              <i className="fas fa-lock" />
            </div>

            <button type="submit" className="card-login-button">
              Registrarme
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>🎉 Usuario registrado</h3>
            <p>Usted ya se encuentra registrado en este restaurante.</p>
            <button className="modal-button" onClick={() => handleSuccess()}>
              Volver al Login
            </button>
          </div>
        </div>
      )}
    </>
  )
}

