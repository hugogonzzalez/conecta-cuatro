// TODO: importa useState, Tablero y COLUMNAS
import Tablero from './Tablero'

// TODO (paso 1): constante TABLERO_VACIO -> array de COLUMNAS arrays vacíos
//   Cuidado: cada columna debe ser un array distinto (no el mismo repetido)

// Componente principal: historial y turnos (igual que Game en la parte 1).
function Partida() {
  // TODO (paso 1): estado historial -> [TABLERO_VACIO]
  // TODO (paso 3): estado movimientoActual -> 0

  // TODO (paso 3): valores derivados turno ('R' en movimientos pares) y tableroActual

  // TODO (paso 2): función jugar(nuevoTablero), igual que handlePlay

  // TODO (paso 5): lista de movimientos "Ir al movimiento #N (columna C)"

  return (
    <div className="partida">
      <div>
        <Tablero />
        {/* TODO: pasa las props turno, tablero y onJugar */}
      </div>
      <div className="historial">{/* TODO (paso 5): <ol> con los movimientos */}</div>
    </div>
  )
}

export default Partida
