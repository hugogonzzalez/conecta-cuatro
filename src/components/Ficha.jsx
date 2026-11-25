// Una ficha: un círculo rojo, amarillo o vacío
// valor: 'R' (roja), 'A' (amarilla) o null (vacía)
// mini: true para dibujarla pequeña (en el texto de turno)
// ganadora: true si forma parte de la línea ganadora (se resalta en verde)
function Ficha({ valor, mini, ganadora }) {
  // Clase base de todas las fichas
  let className = "ficha"

  // Si la ficha es roja o amarilla, añadimos su color
  if (valor === 'R') {
    className = "ficha roja"
  } else if (valor === 'A') {
    className = "ficha amarilla"
  }

  // Si es pequeña, añadimos la clase mini
  if (mini) {
    className = className + " mini"
  }

  // Si es una de las 4 ganadoras, añadimos la clase ganadora
  if (ganadora) {
    className = className + " ganadora"
  }

  return <div className={className}></div>
}

export default Ficha