let casillas = document.getElementsByClassName('casillas');
let tablero = [
    ['','',''],
    ['','',''],
    ['','','']
];

let inicio = true

let jugador = 0

function juego(fila,columna,posicion) {
    if (inicio) {
        if (tablero[fila][columna] === '' && jugador === 0) {
            tablero[fila][columna] = 'X'
            casillas[posicion].textContent = '🍎'
            jugador = 1
            console.log(tablero);
        } else if (tablero[fila][columna] === '' && jugador === 1) {
            tablero[fila][columna] = 'O'
            casillas[posicion].textContent = '🍐'
            jugador = 0
            console.log(tablero);
        } else {
            console.log('Posición ya usada');
        }
    }
}