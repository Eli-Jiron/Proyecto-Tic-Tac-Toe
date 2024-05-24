let casillas = document.getElementsByClassName('casillas');
let contador = document.getElementsByClassName('contadores');
let btnReinicio = document.getElementById('btnReinicio');
let estado = document.getElementById('estado');

//Llama al localStorage y lo almacena en una variable
let datosInicio = JSON.parse(localStorage.getItem('datosInicio'));
let datosRegistro = JSON.parse(localStorage.getItem('datos'));

//Vuelve el contador en el valor de esa variable
for (let i = 0; i < datosRegistro.length; i++) {
    if (datosRegistro[i].correo === datosInicio.correo && datosRegistro[i].contraseña === datosInicio.contraseña) {
        contador[0].textContent = datosRegistro[i].J1;
        contador[1].textContent = datosRegistro[i].J2;
    }
}

//Una matriz con espacios vacíos que guardará el contenido de las casillas
let tablero = [
    ['','',''],
    ['','',''],
    ['','','']
];

//Flag para controlar la ejecución de funciones
let inicio = true;

//Variables para llevar seguimiento de la cantidad de turnos y el jugador actual, respectivamente
let turnos = 0;
let jugador = 0;

function juego(fila,columna,posicion) {
    if (inicio) {
        //Valida que la casilla en la que cliquea el usuario esté vacía y el jugador actual 
        if (tablero[fila][columna] === '' && jugador === 0) {
            //Guarda el simbolo en la matriz y lo añade al html, respectivamente 
            tablero[fila][columna] = 'X';
            casillas[posicion].textContent = '🍎';
            //Indica que es el turno del siguiente jugador
            estado.textContent = 'Turno de 🍐';
            //Suma un turno
            turnos++;
            //Cambia de jugador
            jugador = 1;
        } //Valida que la casilla en la que cliquea el usuario esté vacía y el jugador actual 
        else if (tablero[fila][columna] === '' && jugador === 1) {
            //Guarda el simbolo en la matriz y lo añade al html, respectivamente 
            tablero[fila][columna] = 'O';
            casillas[posicion].textContent = '🍐';
            //Indica que es el turno del siguiente jugador
            estado.textContent = 'Turno de 🍎';
            //Suma un turno
            turnos++;
            //Cambia de jugador
            jugador = 0;
        } else {
            //En caso que cliquee una casilla ya utilizada, muestra este mensaje
            estado.textContent = 'Posición ya usada';
        }
        resultadosPartida()

    }
}

function validarVictoria() {
    //Validación horizontal
    //Un for para recorrer por las filas
    for (let f = 0; f < tablero.length; f++) {
        //Valida que el elemento de la posición 0 de cada fila no esté vacío y que este sea igual a sus otros dos elementos
        if (tablero[f][0] !== '' && tablero[f][0] === tablero[f][1] && tablero[f][0] === tablero[f][2]) {
            //Deshabilita la función juego()
            inicio = false;
            //Retorna un valor de 1
            return 1;
        }
    }
    
    //Validación vertical
    //Un for para recorrer por las columnas
    for (let c = 0; c < tablero.length; c++) {
        //Valida que el primer elemento de cada columna no esté vacío y que este sea igual a los otros dos elementos
        if (tablero[0][c] !== '' && tablero[0][c] === tablero[1][c] && tablero[0][c] === tablero[2][c]) {
            //Deshabilita la función juego()
            inicio = false;
            //Retorna un valor de 1
            return 1;
        }
    }

    //Validación diagonal
    //Valida que los elementos de las diagonales no estén vacíos y que estos sean iguales
    if (tablero[0][0] !== '' && tablero[0][0] === tablero[1][1] && tablero[0][0] === tablero[2][2]) {
        //Deshabilita la función juego()
        inicio = false;
        //Retorna un valor de 1
        return 1;
    } else if (tablero[0][2] !== '' && tablero[0][2] === tablero[1][1] && tablero[0][2] === tablero[2][0]) {
        //Deshabilita la función juego()
        inicio = false;
        //Retorna un valor de 1
        return 1;
    }

    //Validación Empate
    //En caso de ninguna de las condiciones anteriores se cumpla y que el contador sea igual 9, será un empate
    if (turnos === 9) {
        //Deshabilita la función juego()
        inicio = false;
        //Retorna un valor de 0
        return 0;
    }
}

function resultadosPartida() {
    //Recibe el valor retornado de validarVictoria() y lo compara, 1 en un gane y 0 es un empate
    let resultado = validarVictoria()
    if (resultado === 1) {
        //En caso de que jugador sea 1, el ganador es 🍎
        if (jugador === 1) {
            //Muestra este mensaje al usuario
            estado.textContent = '¡Ganó 🍎!';
            //Suma 1 a su contador de victorias y lo guarda en el localStorage
            for (let i = 0; i < datosRegistro.length; i++) {
                if (datosRegistro[i].correo === datosInicio.correo && datosRegistro[i].contraseña === datosInicio.contraseña) {
                    datosRegistro[i].J1++                   
                    contador[0].textContent = datosRegistro[i].J1;
                    localStorage.setItem('datos', JSON.stringify(datosRegistro))
                }
            }
        }//En caso de que jugador sea 0, el ganador es 🍐
        else if (jugador === 0) {
            //Muestra este mensaje al usuario
            estado.textContent = '¡Ganó 🍐!';
            //Suma 1 a su contador de victorias y lo guarda en el localStorage
            for (let i = 0; i < datosRegistro.length; i++) {
                if (datosRegistro[i].correo === datosInicio.correo && datosRegistro[i].contraseña === datosInicio.contraseña) {
                    datosRegistro[i].J2++                   
                    contador[1].textContent = datosRegistro[i].J2;
                    localStorage.setItem('datos', JSON.stringify(datosRegistro))
                }
            }
        }
    } else if (resultado === 0) {
        //En caso de empate, muestra ese mensaje
        estado.textContent = '¡Empate!';
    }
}

//Devuelve todos los valores a su valor inicial
btnReinicio.addEventListener('click', function () {
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].textContent = '';
    }
    tablero = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    inicio = true;
    turnos = 0;
    jugador = 0;
    estado.textContent = 'Turno de 🍎';
})