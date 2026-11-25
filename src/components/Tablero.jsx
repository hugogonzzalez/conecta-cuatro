import Columna from "./Columna"
import Ficha from "./Ficha"
import { FILAS } from "../utils/calcularGanador"
import { calcularGanador } from "../utils/calcularGanador"
import { tableroLleno } from "../utils/calcularGanador"

// Componente: el tablero azul con 7 columnas y el texto de estado.
// Props:
//   turno   -> 'R' o 'A' (paso 3)
//   tablero -> array de 7 columnas (paso 1)
//   onJugar -> función que recibe el tablero nuevo (paso 2)
function Tablero({tablero}) {
  // TODO (paso 4): resultado, empate y partida terminada

  // TODO (paso 2): elegirColumna(col)
  //   - si la columna está llena (o la partida ha terminado), no hace nada
  //   - copia del tablero y columna NUEVA con la ficha del turno al final
  //   - llama a onJugar con el tablero nuevo

  // TODO (paso 3): texto de estado con una ficha mini del color del turno
  //   "Turno de: (ficha) Rojo"
  // TODO (paso 4): "Ganador: (ficha) Amarillo" o "Empate"

  return (
    <>
      <div className="estado">{/* TODO (paso 3) */}</div>
      <div className="tablero">
        {tablero.map((columna, indice) => (
          <Columna key={indice} fichas={columna} />
        ))}
      </div>
    </>
  )
}

export default Tablero
