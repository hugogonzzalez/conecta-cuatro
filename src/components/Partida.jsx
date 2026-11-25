import Tablero from './Tablero'
import { useState } from 'react'
import { COLUMNAS } from '../utils/calcularGanador'

const TABLERO_VACIO = Array.from({ length: COLUMNAS }, () => [])

function Partida() {
  const [historial, setHistorial] = useState([TABLERO_VACIO])
  const tableroActual = historial[historial.length - 1]

  function jugar(nuevoTablero) {
    setHistorial([...historial, nuevoTablero])
  }

  return (
    <div className="partida">
      <div>
        <Tablero tablero={tableroActual} turno="R" onJugar={jugar} />
      </div>
      <div className="historial"></div>
    </div>
  )
}

export default Partida