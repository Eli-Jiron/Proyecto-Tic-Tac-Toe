let tablero = [
    ['','',''],
    ['','',''],
    ['','','']
];

console.log(tablero);

let valor = document.getElementsByClassName('valor');
console.log(valor);

let contador = 0;
let clicks = 0;
let iniciar = true;

function juego(fila,columna,pos) {
    if (iniciar) {
        if (clicks === 0 && tablero[fila][columna] === '') {
            tablero[fila][columna] = 5;
            valor[pos].textContent  = '🍎';
            console.log(tablero);
            contador += 1;
            clicks = 1;
        }else {
            if (clicks === 1 && tablero[fila][columna] === '') {
                tablero[fila][columna] = -5;
                valor[pos].textContent  = '🍐';
                console.log(tablero);
                contador += 1;
                clicks = 0;
            } else {
                console.log('Posición ya usada');
            }
        }
        validarGane()
    }
}

function validarGane() { 
    //Validación horizontal
    for (let f = 0; f < tablero.length; f++) {
        if (tablero[f][0] !== '' && tablero[f][0] === tablero[f][1] && tablero[f][0] === tablero[f][2]) {
            console.log('gane horizontal');
            iniciar = false;
        }
    }

    //Validación vertical
    for (let c = 0; c < tablero.length; c++) {
        if (tablero[0][c] !== '' && tablero[0][c] === tablero[1][c] && tablero[0][c] === tablero[2][c]) {
            console.log('gane vertical');
            iniciar = false;
        }
    }
}
