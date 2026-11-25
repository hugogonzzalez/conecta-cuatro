import Ficha from "./Ficha"
import { FILAS } from "../utils/calcularGanador"

// Componente: una columna completa. Es UN botón: el jugador solo elige columna.
// TODO (paso 2): onElegir y desactivada
// TODO (paso 4): ganadoras
function Columna({ fichas }) {
  // Dibuja FILAS fichas, de la fila de arriba a la de abajo
  const fichasDibujadas = []
  for (let fila = FILAS - 1; fila >= 0; fila--) {
    fichasDibujadas.push(
      <Ficha key={fila} valor={fichas[fila] ?? null} />
    )
  }

  return (
    <button className="columna">
      {fichasDibujadas}
    </button>
  )
}

export default Columna