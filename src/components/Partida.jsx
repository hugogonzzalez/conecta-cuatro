import Tablero from './Tablero'
import { useState } from 'react'
import { COLUMNAS } from '../utils/calcularGanador'

// Tablero vacío: COLUMNAS arrays distintos, uno por columna.
// Array.from crea un array nuevo en cada vuelta.
const TABLERO_VACIO = Array.from({ length: COLUMNAS }, () => [])

// Componente principal: historial y turnos (igual que Game en la parte 1).
function Partida() {
  // Historial de tableros, empieza con el tablero vacío
  const [historial, setHistorial] = useState([TABLERO_VACIO])

  // El tablero que se muestra es el último del historial
  const tableroActual = historial[historial.length - 1]

  return (
    <div className="partida">
      <div>
        <Tablero tablero={tableroActual} />
      </div>
      <div className="historial"></div>
    </div>
  )
}

export default Partida