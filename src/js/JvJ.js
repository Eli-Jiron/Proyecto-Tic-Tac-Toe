let casillas = document.getElementsByClassName('casillas');
let tablero = [
    ['','',''],
    ['','',''],
    ['','','']
];

let inicio = true;

let jugador = 0;
let turnos = 0;

function juego(fila,columna,posicion) {
    if (inicio) {
        if (tablero[fila][columna] === '' && jugador === 0) {
            tablero[fila][columna] = 'X';
            casillas[posicion].textContent = '🍎';
            turnos++;
            jugador = 1;
            console.log(tablero);
        } else if (tablero[fila][columna] === '' && jugador === 1) {
            tablero[fila][columna] = 'O';
            casillas[posicion].textContent = '🍐';
            turnos++;
            jugador = 0;
            console.log(tablero);
        } else {
            console.log('Posición ya usada');
        }
        resultadosPartida()
    }
}

function validarVictoria() {
    for (let f = 0; f < tablero.length; f++) {
        if (tablero[f][0] !== '' && tablero[f][0] === tablero[f][1] && tablero[f][0] === tablero[f][2]) {
            inicio = false;
            return 1;
        }
    }
    
    for (let c = 0; c < tablero.length; c++) {
        if (tablero[0][c] !== '' && tablero[0][c] === tablero[1][c] && tablero[0][c] === tablero[2][c]) {
            inicio = false;
            return 1;
        }
    }

    if (tablero[0][0] !== '' && tablero[0][0] === tablero[1][1] && tablero[0][0] === tablero[2][2]) {
        inicio = false;
        return 1;
    } else if (tablero[0][2] !== '' && tablero[0][2] === tablero[1][1] && tablero[0][2] === tablero[2][0]) {
        inicio = false;
        return 1;
    }

    if (turnos === 9) {
        inicio = false;
        return 0;
    }
}

function resultadosPartida() {
    let resultado = validarVictoria()
}