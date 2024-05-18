let tablero = [
    ['','',''],
    ['','',''],
    ['','','']
];

console.log(tablero);

let btnReinicio = document.getElementById('btnReinicio');
let resultados = document.getElementById('resultados');
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
        mostrarResultados()
    }
}

function validarGane() { 
    //Validación horizontal
    for (let f = 0; f < tablero.length; f++) {
        if (tablero[f][0] !== '' && tablero[f][0] === tablero[f][1] && tablero[f][0] === tablero[f][2]) {
            console.log('gane horizontal');
            iniciar = false;
            return 1;
        }
    }

    //Validación vertical
    for (let c = 0; c < tablero.length; c++) {
        if (tablero[0][c] !== '' && tablero[0][c] === tablero[1][c] && tablero[0][c] === tablero[2][c]) {
            console.log('gane vertical');
            iniciar = false;
            return 1;
        }
    }

    //Validación diagonal
    if (tablero[0][0] !== '' && tablero[0][0] === tablero[1][1] && tablero[0][0] === tablero[2][2]) {
        console.log('gane diagonal');
        iniciar = false;
        return 1;
    }
    
    if (tablero[0][2] !== '' && tablero[0][2] === tablero[1][1] && tablero[0][2] === tablero[2][0]) {
        console.log('gane diagonal');
        iniciar = false;
        return 1;
    }

    //Validación Empate 
    if (contador === 9) {
        console.log('empate lolol');
        iniciar = false;
        return 0;
    }
}

function mostrarResultados() {
    let result = validarGane();
    if (result === 1) {
        resultados.textContent = 'Ganó alguien lol'
    }
    if (result === 0) {
        resultados.textContent = 'Empataron jajaj'
    }
}

btnReinicio.addEventListener('click', function () {
    for (let i = 0; i < valor.length; i++) {
        valor[i].textContent = '';
    }
    tablero = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    iniciar = true;
    contador = 0;
    clicks = 0;
    resultados.textContent = ''
});
