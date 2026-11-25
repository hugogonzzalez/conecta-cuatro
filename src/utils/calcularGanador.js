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
  return null
}

// TODO (paso 4): devuelve true si todas las columnas están llenas
export function tableroLleno(tablero) {
  return false
}
