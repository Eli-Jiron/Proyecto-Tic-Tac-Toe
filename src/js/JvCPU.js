let btnReinicio = document.getElementById('btnReinicio');
let resultados = document.getElementById('resultados');
let valor = document.getElementsByClassName('valor');
let contJugador = document.getElementById('contJugador');
let contBot = document.getElementById('contBot');

//Llama al localStorage y lo almacena en una variable
let vJ = localStorage.getItem('winsJ');
let vCPU = localStorage.getItem('winsCPU');

//Vuelve el contador en el valor de esa variable
contJugador.textContent = vJ;
contBot.textContent = vCPU;

//Una matriz con espacios vacíos que guardará el contenido de las casillas
let tablero = [
    ['','',''],
    ['','',''],
    ['','','']
];

//Una matriz que guarda las posiciones del getElementsByClassName
let pos = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
];

//Variables para llevar seguimiento de la cantidad de turnos y el jugador actual, respectivamente
let contador = 0;
let clicks = 0;

//Flags para controlar la ejecución de las funciones
let iniciar = true;
let iniciarBot = true;

function juegoJugador(fila,columna) {
    if (iniciar) {
        //Valida que la casilla en la que cliquea el usuario esté vacía
        if (tablero[fila][columna] === '') {
            //Guarda el simbolo en la matriz y lo añade al html, respectivamente 
            tablero[fila][columna] = 'X';
            valor[pos[fila][columna]].textContent  = '🍎';
            //Indica que es el turno del siguiente jugador
            resultados.textContent = 'Turno de 🍐';
            //Suma un turno al contador
            contador += 1;
            //Deshabilita esta función
            iniciar = false;
            clicks = 1;
            //Llama a la funcion bot() y la ejecuta con un intervalo de un segundo
            setTimeout(() => {
                bot();
              }, 1000);
        }else {
            //En caso que cliquee una casilla ya utilizada, muestra este mensaje
            resultados.textContent = 'Posición ya usada';
        }
        mostrarResultados();
    }
}

function juegoBot(fila,columna) {
    if (iniciarBot) {
        //Valida que la casilla no esté usada
        if (tablero[fila][columna] === '') {
            //Guarda el simbolo en la matriz y lo añade al html, respectivamente 
            tablero[fila][columna] = 'O';
            valor[pos[fila][columna]].textContent  = '🍐';
            //Indica que es el turno del siguiente jugador
            resultados.textContent = 'Turno de 🍎';
            //Suma un turno al contador
            contador += 1;
            //Vuelve a habilitar la funcion de juegoJugador()
            iniciar = true;
            clicks = 0;
        } else {
            //En caso de que la posición dada esté usada, vuelve a llamar la función bot()
            //para generar otro par de números. Esta vez con un intervalo menor
            setTimeout(() => {
                bot();
              }, 25);
        }
        mostrarResultados();
    }
}

function bot() {
    //Valida que la función esté habilitada y que sea su turno, respectivamente
    if (iniciarBot && clicks === 1) {
        //Genera dos números del 0 al 2 de forma aleatoria y los envía como parametros a juegoBot()
        fila = Math.floor(Math.random() * 3);
        columna = Math.floor(Math.random() * 3);
        console.log(fila, columna);
        juegoBot(fila,columna);
    }
}

function validarGane() { 
    //Validación horizontal
    //Un for para recorrer por las filas
    for (let f = 0; f < tablero.length; f++) {
         //Valida que el elemento de la posición 0 de cada fila no esté vacío y que este sea igual a sus otros dos elementos
        if (tablero[f][0] !== '' && tablero[f][0] === tablero[f][1] && tablero[f][0] === tablero[f][2]) {
            //Deshabilita las funciones juegoJugador(), juegoBot() y bot()
            iniciar = false;
            iniciarBot = false;
            //Retorna un valor de 1
            return 1;
        }
    }

    //Validación vertical
    //Un for para recorrer por las columnas
    for (let c = 0; c < tablero.length; c++) {
        //Valida que el primer elemento de cada columna no esté vacío y que este sea igual a los otros dos elementos
        if (tablero[0][c] !== '' && tablero[0][c] === tablero[1][c] && tablero[0][c] === tablero[2][c]) {
            //Deshabilita las funciones juegoJugador(), juegoBot() y bot()
            iniciar = false;
            iniciarBot = false;
            //Retorna un valor de 1
            return 1;
        }
    }

    //Validación diagonal
    //Valida que los elementos de las diagonales no estén vacíos y que estos sean iguales
    if (tablero[0][0] !== '' && tablero[0][0] === tablero[1][1] && tablero[0][0] === tablero[2][2]) {
        //Deshabilita las funciones juegoJugador(), juegoBot() y bot()
        iniciar = false;
        iniciarBot = false;
        //Retorna un valor de 1
        return 1;
    }
    
    if (tablero[0][2] !== '' && tablero[0][2] === tablero[1][1] && tablero[0][2] === tablero[2][0]) {
        //Deshabilita las funciones juegoJugador(), juegoBot() y bot()
        iniciar = false;
        iniciarBot = false;
        //Retorna un valor de 1
        return 1;
    }

    //Validación Empate
    //En caso de ninguna de las condiciones anteriores se cumpla y que el contador sea igual 9, será un empate
    if (contador === 9) {
        //Deshabilita las funciones juegoJugador(), juegoBot() y bot()
        iniciar = false;
        iniciarBot = false;
        //Retorna un valor de 0
        return 0;
    }
}

function mostrarResultados() {
    //Recibe el valor retornado de validarGane() y lo compara, 1 en un gane y 0 es un empate
    let result = validarGane();
    if (result === 1) {
        //En caso de que clicks sea 1, el ganador es 🍎
        if (clicks === 1) {
            //Muestra este mensaje al usuario
            resultados.textContent = '¡🍎 ganó!';
            //Suma 1 a su contador de victorias y lo guarda en el localStorage
            vJ++;
            localStorage.setItem('winsJ', vJ);
            contJugador.textContent = vJ;
        }
        //En caso de que clicks sea 0, el ganador es 🍐
        if (clicks === 0) {
            //Muestra este mensaje al usuario
            resultados.textContent = '¡🍐 ganó!';
            //Suma 1 a su contador de victorias y lo guarda en el localStorage
            vCPU++;
            localStorage.setItem('winsCPU', vCPU);
            contBot.textContent = vCPU;
        }
    }
    if (result === 0) {
        //En caso de empate, muestra ese mensaje
        resultados.textContent = '¡Empate!';
    }
}

//Devuelve todos los valores a su valor inicial
btnReinicio.addEventListener('click', function () {
    for (let i = 0; i < valor.length; i++) {
        valor[i].textContent = '';
    }
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