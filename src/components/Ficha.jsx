// Componente: un hueco del tablero.
// Props:
//   valor    -> 'R' (rojo), 'A' (amarillo) o null (vacío)
//   ganadora -> true si forma parte de la línea ganadora (paso 4)
//   mini     -> true para la ficha pequeña del texto de estado (paso 3)
//
// Clases CSS disponibles: "ficha", "roja", "amarilla", "ganadora", "mini"
function Ficha({valor}) {
  let className = "ficha"
  if(valor === 'R'){
    className="ficha roja"
  } else if(valor === "A"){
    className="ficha amarilla"
  }
  return <div className={className}></div>
}

export default Ficha
