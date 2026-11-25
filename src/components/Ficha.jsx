// Una ficha: un círculo rojo, amarillo o vacío
// valor: 'R' (roja), 'A' (amarilla) o null (vacía)
// mini: true para dibujarla pequeña (en el texto de turno)
function Ficha({ valor, mini }) {
  // Clase base de todas las fichas
  let className = "ficha"

  // Si la ficha es roja, añadimos la clase de color rojo
  if (valor === 'R') {
    className = "ficha roja"
  } else if (valor === 'A') {
    className = "ficha amarilla"
  }

  // Si es pequeña, añadimos la clase mini (con un espacio delante)
  if (mini) {
    className = className + " mini"
  }

  return <div className={className}></div>
}

export default Ficha