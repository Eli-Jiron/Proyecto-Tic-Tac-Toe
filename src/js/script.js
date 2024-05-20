let btnReinicio = document.getElementById('btnReinicio');
let resultados = document.getElementById('resultados');
let valor = document.getElementsByClassName('valor');

let tablero = [
    ['','',''],
    ['','',''],
    ['','','']
];

let pos = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
];
 
resultados.textContent = 'Turno de 🍎';
let contador = 0;
let clicks = 0;
let iniciar = true;
let iniciarBot = true;

function juegoJugador(fila,columna) {
    if (iniciar) {
        if (clicks === 0 && tablero[fila][columna] === '') {
            tablero[fila][columna] = 'X';
            valor[pos[fila][columna]].textContent  = '🍎';
            resultados.textContent = 'Turno de 🍐';
            contador += 1;
            clicks = 1;
            iniciar = false;
            setTimeout(() => {
                bot();
              }, 1000);
        }else {
            resultados.textContent = 'Posición ya usada';
        }
        mostrarResultados();
    }
}

function juegoBot(fila,columna) {
    if (iniciarBot) {
        if (clicks === 1 && tablero[fila][columna] === '') {
            tablero[fila][columna] = 'O';
            valor[pos[fila][columna]].textContent  = '🍐';
            resultados.textContent = 'Turno de 🍎';
            contador += 1;
            clicks = 0;
            iniciar = true;
        } else {
            setTimeout(() => {
                bot();
              }, 30);
        }
        mostrarResultados();
    }
}

function bot() {
    if (iniciarBot && clicks === 1) {
        console.log('hola');
        let condicion = 0;
        while (condicion == 0) {
            fila = Math.floor(Math.random() * 3);
            columna = Math.floor(Math.random() * 3);
            console.log(fila, columna);
            juegoBot(fila,columna);
            condicion = 1;
        }
    }
}

function validarGane() { 
    //Validación horizontal
    for (let f = 0; f < tablero.length; f++) {
        if (tablero[f][0] !== '' && tablero[f][0] === tablero[f][1] && tablero[f][0] === tablero[f][2]) {
            iniciar = false;
            iniciarBot = false;
            return 1;
        }
    }

    //Validación vertical
    for (let c = 0; c < tablero.length; c++) {
        if (tablero[0][c] !== '' && tablero[0][c] === tablero[1][c] && tablero[0][c] === tablero[2][c]) {
            iniciar = false;
            iniciarBot = false;
            return 1;
        }
    }

    //Validación diagonal
    if (tablero[0][0] !== '' && tablero[0][0] === tablero[1][1] && tablero[0][0] === tablero[2][2]) {
        iniciar = false;
        iniciarBot = false;
        return 1;
    }
    
    if (tablero[0][2] !== '' && tablero[0][2] === tablero[1][1] && tablero[0][2] === tablero[2][0]) {
        iniciar = false;
        iniciarBot = false;
        return 1;
    }

    //Validación Empate 
    if (contador === 9) {
        iniciar = false;
        iniciarBot = false;
        return 0;
    }
}

function mostrarResultados() {
    let result = validarGane();
    if (result === 1) {
        if (clicks === 1) {
            resultados.textContent = '🍎 ganó';
        }
        if (clicks === 0) {
            resultados.textContent = '🍐 ganó';
        }
    }
    if (result === 0) {
        resultados.textContent = 'Empataron jajaj';
    }
}

btnReinicio.addEventListener('click', function () {
    for (let i = 0; i < valor.length; i++) {
        valor[i].textContent = '';
    }
    resultados.textContent = '';
    resultados.textContent = 'Turno de 🍎';
    tablero = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    iniciarBot = true;
    iniciar = true;
    contador = 0;
    clicks = 0;
});