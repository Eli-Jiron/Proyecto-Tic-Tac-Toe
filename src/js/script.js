let tablero = [
    ['','',''],
    ['','',''],
    ['','','']
];
console.log(tablero);

let clicks = 0;

function juego(fila,columna) {
    if (clicks === 0 && tablero[fila][columna] === '') {
        tablero[fila][columna] = 'O';
        console.log(tablero);
        clicks = 1;
    }else {
        if (clicks === 1 && tablero[fila][columna] === '') {
            tablero[fila][columna] = 'X';
            console.log(tablero);
            clicks = 0;
        } else {
            console.log('Posición ya usada');
        }
    }
}