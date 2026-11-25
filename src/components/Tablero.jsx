import Columna from "./Columna"
import { FILAS } from "../utils/calcularGanador"
import Ficha from "./Ficha"

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
      <div className="estado">Turno de <Ficha valor={turno} mini />
      {turno === 'R' ? ' Rojo' : ' Amarillo'}
      </div>
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