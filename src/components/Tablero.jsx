import Columna from "./Columna"
import { FILAS } from "../utils/calcularGanador"

function Tablero({ tablero, turno, onJugar }) {
  function elegirColumna(col) {
    if (tablero[col].length === FILAS) {
      return
    }
    const nuevoTablero = tablero.slice()
    nuevoTablero[col] = [...tablero[col], turno]
    onJugar(nuevoTablero)
  }

  return (
    <>
      <div className="estado"></div>
      <div className="tablero">
        {tablero.map((columna, indice) => (
          <Columna
            key={indice}
            fichas={columna}
            onElegir={() => elegirColumna(indice)}
            desactivada={columna.length === FILAS}
          />
        ))}
      </div>
    </>
  )
}

export default Tablero