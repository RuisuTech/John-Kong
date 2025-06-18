import React from 'react';
import '../styles/Reserva.css';

const Reserva = () => {
  // Datos de ejemplo - reemplaza con tus datos reales
  const estadisticas = {
    reservasHoy: 1,
    reservasProximas: 0,
    mesasDisponibles: 1,
    reservasCompletadas: 0
  };

  const reservasHoy = [
    {
      id: 1,
      cliente: 'JHON WICK jhong@mail.com',
      fecha: 'martes, 27 mayo 2025',
      hora: '20:00',
      mesa: 'MESA 2',
      personas: 4
    }
  ];

  const proximasReservas = [
    {
      id: 2,
      cliente: 'MARIA FEREZ han@gmail.com',
      fecha: 'martes, 27 junio 2025',
      hora: '20:00',
      mesa: 'MESA 5',
      personas: 6
    }
  ];

  // Función para manejar acciones
  const manejarAccion = (id, accion) => {
    console.log(`${accion} reserva con ID: ${id}`);
    // Aquí implementarías la lógica real
  };

  return (
    <div className="reserva-container">
      <h1 className="reserva-title">Panel - Calendario</h1>

      <div className="reserva-stats">
        <div className="stat-card">
          <h2>Reservas hoy</h2>
          <p className="stat-number">{estadisticas.reservasHoy}</p>
          <p>Reservas Próximas</p>
          <p className="stat-number">{estadisticas.reservasProximas}</p>
        </div>

        <div className="stat-card">
          <h2>Mesas Disponibles</h2>
          <p className="stat-number">{estadisticas.mesasDisponibles}</p>
          <p>Reservas Completadas</p>
          <p className="stat-number">{estadisticas.reservasCompletadas}</p>
        </div>
      </div>

      <div className="reserva-section">
        <h2>RESERVAS DE HOY</h2>
        <div className="table-responsive">
          <table className="reserva-table">
            <thead>
              <tr>
                <th>CLIENTE</th>
                <th>FECHA</th>
                <th>HORA</th>
                <th>MESA</th>
                <th>PERSONAS</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {reservasHoy.map((reserva) => (
                <tr key={reserva.id}>
                  <td>{reserva.cliente}</td>
                  <td>{reserva.fecha}</td>
                  <td>{reserva.hora}</td>
                  <td>{reserva.mesa}</td>
                  <td>{reserva.personas}</td>
                  <td className="action-buttons">
                    <button 
                      className="btn-completed"
                      onClick={() => manejarAccion(reserva.id, 'completar')}
                    >
                      COMPLETADO
                    </button>
                    <button 
                      className="btn-cancel"
                      onClick={() => manejarAccion(reserva.id, 'cancelar')}
                    >
                      CANCELAR
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="reserva-section">
        <h2>PRÓXIMAS RESERVAS</h2>
        <div className="table-responsive">
          <table className="reserva-table">
            <thead>
              <tr>
                <th>CLIENTE</th>
                <th>FECHA</th>
                <th>HORA</th>
                <th>MESA</th>
                <th>PERSONAS</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {proximasReservas.map((reserva) => (
                <tr key={reserva.id}>
                  <td>{reserva.cliente}</td>
                  <td>{reserva.fecha}</td>
                  <td>{reserva.hora}</td>
                  <td>{reserva.mesa}</td>
                  <td>{reserva.personas}</td>
                  <td className="action-buttons">
                    <button 
                      className="btn-completed"
                      onClick={() => manejarAccion(reserva.id, 'completar')}
                    >
                      COMPLETADO
                    </button>
                    <button 
                      className="btn-cancel"
                      onClick={() => manejarAccion(reserva.id, 'cancelar')}
                    >
                      CANCELAR
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reserva;