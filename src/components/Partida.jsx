import Tablero from './Tablero'
import { useState } from 'react'
import { COLUMNAS } from '../utils/calcularGanador'

// Tablero vacío: una lista de columnas, cada una sin fichas
const TABLERO_VACIO = Array.from({ length: COLUMNAS }, () => [])

function Partida() {
  // Historial de todos los tableros por los que ha pasado la partida
  const [historial, setHistorial] = useState([TABLERO_VACIO])

  // En qué movimiento estamos (0 = el primero)
  const [movimientoActual, setMovimientoActual] = useState(0)

  // El tablero que se ve es el de ese movimiento
  const tableroActual = historial[movimientoActual]

  // Movimientos pares (0, 2, 4...) le tocan al rojo; impares (1, 3, 5...) al amarillo
  const turno = movimientoActual % 2 === 0 ? 'R' : 'A'

  function jugar(nuevoTablero) {
    // Quita los movimientos que quedaron por delante y añade el nuevo
    const historialNuevo = [...historial.slice(0, movimientoActual + 1), nuevoTablero]
    setHistorial(historialNuevo)

    // Nos colocamos en el último movimiento, que es el que acabamos de hacer
    setMovimientoActual(historialNuevo.length - 1)
  }

  // Vuelve a un movimiento anterior del historial
  function irA(movimiento) {
    setMovimientoActual(movimiento)
  }

  // Texto del botón de un movimiento, con la columna jugada
  function textoMovimiento(movimiento) {
    // El movimiento 0 es el tablero inicial: no hay columna que mostrar
    if (movimiento === 0) {
      return 'Inicio de la partida'
    }

    // Comparamos el tablero de antes con el de después
    const anterior = historial[movimiento - 1]
    const actual = historial[movimiento]

    // La columna jugada es la que tiene distinta longitud
    for (let col = 0; col < COLUMNAS; col++) {
      if (anterior[col].length !== actual[col].length) {
        // Sumamos 1 para mostrarla del 1 al 7
        return `Ir al movimiento #${movimiento} (columna ${col + 1})`
      }
    }

    return `Ir al movimiento #${movimiento}`
  }

  // Una línea de la lista por cada tablero del historial
  const movimientos = historial.map((tablero, movimiento) => {
    return (
      <li key={movimiento}>
        <button onClick={() => irA(movimiento)}>
          {textoMovimiento(movimiento)}
        </button>
      </li>
    )
  })

  return (
    <div className="partida">
      <div>
        {/* El turno lo calcula Partida y se lo pasamos al tablero */}
        <Tablero tablero={tableroActual} turno={turno} onJugar={jugar} />
      </div>
      <div className="historial">
        <ol>{movimientos}</ol>
      </div>
    </div>
  )
}

export default Partida