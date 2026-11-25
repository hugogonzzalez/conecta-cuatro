import Columna from "./Columna"
import Ficha from "./Ficha"
import { FILAS, calcularGanador, tableroLleno } from "../utils/calcularGanador"

function Tablero({ tablero, turno, onJugar }) {
  // Pone una ficha del turno en la columna elegida, si no está llena
  function elegirColumna(col) {
    if (tablero[col].length === FILAS) {
      return
    }
    const nuevoTablero = tablero.slice()
    nuevoTablero[col] = [...tablero[col], turno]
    onJugar(nuevoTablero)
  }

  // Comprueba si alguien ha ganado (devuelve un objeto o null)
  const resultado = calcularGanador(tablero)

  // Posiciones [col, fila] de la línea ganadora; lista vacía si no hay ganador
  const linea = resultado !== null ? resultado.linea : []

  // Devuelve las filas de la columna indice que forman parte de la línea ganadora
  function filasGanadoras(indice) {
    return linea
      .filter(([col]) => col === indice)   // solo las posiciones de esta columna
      .map(([, fila]) => fila)             // nos quedamos con el número de fila
  }

  // La partida termina si hay ganador o si el tablero está lleno
  const terminada = resultado !== null || tableroLleno(tablero)

  // Texto del estado, según el caso
  let estado
  if (resultado !== null) {
    // Hay ganador: mostramos su ficha y su color
    estado = (
      <>
        Ganador: <Ficha valor={resultado.ganador} mini />
        {resultado.ganador === 'R' ? ' Rojo' : ' Amarillo'}
      </>
    )
  } else if (tableroLleno(tablero)) {
    // Nadie ha ganado y no quedan casillas: empate
    estado = 'Empate'
  } else {
    // La partida sigue: indicamos de quién es el turno
    estado = (
      <>
        Turno de <Ficha valor={turno} mini />
        {turno === 'R' ? ' Rojo' : ' Amarillo'}
      </>
    )
  }

  return (
    <>
      <div className="estado">{estado}</div>
      <div className="tablero">
        {tablero.map((columna, indice) => (
          <Columna
            key={indice}
            fichas={columna}
            onElegir={() => elegirColumna(indice)}
            // Desactivada si la partida ha terminado o si esta columna está llena
            desactivada={terminada || columna.length === FILAS}
            // Filas de esta columna que forman la línea ganadora
            ganadoras={filasGanadoras(indice)}
          />
        ))}
      </div>
    </>
  )
}

export default Tablero