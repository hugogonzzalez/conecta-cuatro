# Respuestas · Parte 3

Nombre y apellidos: Hugo Gonzalez

## 1. ¿Por qué el tablero se guarda como un array de columnas con las fichas de abajo a arriba? ¿Qué ventajas tiene para este juego?
Las fichas caen, asi que cada columna es una lista y la nueva ficha va al final. Mira elegirColumna en Tablero.jsx: if (tablero[col].length === FILAS) comprueba si la columna está llena contando sus fichas.

## 2. tablero.slice() hace una copia "superficial". ¿Por qué hay que crear también una columna nueva? ¿Qué pasaría si usaras push sobre la columna original?
En Tablero.jsx hago const nuevoTablero = tablero.slice() y luego nuevoTablero[col] = [...tablero[col], turno]. Así la columna se copia y no toco la original, que sigue en el historial.

## 3. ¿Por qué cada columna es un botón? ¿Qué te ahorra el atributo disabled?
En Columna.jsx tengo <button className="columna" onClick={onElegir} disabled={desactivada}>. Así el navegador no deja pulsar las columnas llenas ni seguir jugando cuando hay ganador.

## 4. Explica cómo detecta tu calcularGanador un cuatro en línea. ¿Por qué no se escriben a mano todas las líneas como en el tres en raya?
En calcularGanador.js recorro todas las posiciones con for y miro las direcciones de DIRECCIONES. Dentro del bucle, if (ficha(tablero, c, f) !== color) corta si una casilla no coincide, y si las 4 coinciden devuelve { ganador: color, linea }.