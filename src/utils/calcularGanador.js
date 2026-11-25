export const COLUMNAS = 7
export const FILAS = 6

// El tablero es un array de 7 columnas. Cada columna es un array con sus
// fichas de ABAJO hacia ARRIBA: tablero[col][0] es la ficha del fondo.
// Esta función ya está hecha: devuelve 'R', 'A' o null para la posición
// (col, fila). Fuera del tablero también devuelve null.
function ficha(tablero, col, fila) {
  if (col < 0 || col >= COLUMNAS || fila < 0 || fila >= FILAS) {
    return null
  }
  return tablero[col][fila] ?? null
}

// Direcciones [avance en columna, avance en fila]:
// horizontal, vertical, diagonal hacia arriba y diagonal hacia abajo
const DIRECCIONES = [
  [1, 0],
  [0, 1],
  [1, 1],
  [1, -1],
]

// TODO (paso 4): recorre todas las posiciones del tablero. Para cada ficha,
// comprueba en cada dirección si las 3 posiciones siguientes tienen el mismo
// color. Si es así, devuelve { ganador: color, linea: [[col, fila] x 4] }.
// Si no hay ganador, devuelve null.
export function calcularGanador(tablero) {
  // Recorre todas las columnas
  for (let col = 0; col < COLUMNAS; col++) {
    // Recorre todas las filas de esa columna
    for (let fila = 0; fila < FILAS; fila++) {
      // Color de esta posición ('R', 'A' o null si está vacía)
      const color = ficha(tablero, col, fila)
      if (color === null) continue

      // Prueba las 4 direcciones desde esta posición
      for (const [dc, df] of DIRECCIONES) {
        // Aquí guardamos las posiciones de la línea, si la hay
        const linea = []
        let iguales = true

        // Mira las 4 posiciones (la actual y las 3 siguientes)
        for (let k = 0; k < 4; k++) {
          const c = col + k * dc
          const f = fila + k * df

          // Si alguna no es del mismo color, esta dirección no sirve
          if (ficha(tablero, c, f) !== color) {
            iguales = false
            break
          }
          linea.push([c, f])
        }

        // Si las 4 coinciden, hay ganador
        if (iguales) {
          return { ganador: color, linea }
        }
      }
    }
  }

  // Ninguna línea de 4: no hay ganador todavía
  return null
}

// Devuelve true si todas las columnas tienen FILAS fichas (tablero lleno)
export function tableroLleno(tablero) {
  return tablero.every((columna) => columna.length === FILAS)
}
