import Ficha from "./Ficha"
import { FILAS } from "../utils/calcularGanador"

function Columna({ fichas, onElegir, desactivada, ganadoras }) {
  const fichasDibujadas = []
  for (let fila = FILAS - 1; fila >= 0; fila--) {
    fichasDibujadas.push(<Ficha key={fila} valor={fichas[fila] ?? null} ganadora={ganadoras.includes(fila)} />)
  }
  return (
    <button className="columna" onClick={onElegir} disabled={desactivada}>
      {fichasDibujadas}
    </button>
  )
}

export default Columna