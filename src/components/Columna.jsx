// TODO (paso 1): importa Ficha y la constante FILAS

// Componente: una columna completa. Es UN botón: el jugador solo elige columna.
// Props:
//   fichas      -> array de fichas de la columna (de abajo a arriba)
//   onElegir    -> función que se ejecuta al pulsar la columna (paso 2)
//   desactivada -> true si la columna está llena o la partida ha terminado (paso 2)
//   ganadoras   -> filas de esta columna que forman la línea ganadora (paso 4)
function Columna(/* TODO (paso 1): recibe las props */) {
  // TODO (paso 1): genera FILAS fichas, de la fila de arriba (5) a la de abajo (0).
  //   Cada una con su key y el valor de esa fila (o null si no hay ficha)

  return (
    <button className="columna">
      {/* TODO (paso 1): las fichas */}
      {/* TODO (paso 2): onClick y disabled */}
    </button>
  )
}

export default Columna
