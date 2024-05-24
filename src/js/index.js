let datosInicio = JSON.parse(localStorage.getItem('datosInicio'));
let datosRegistro = JSON.parse(localStorage.getItem('datos'));

let reloj = document.getElementById('reloj');
let btnCerrarSesion = document.getElementById('cerrarSesion');
let JvJ = document.getElementsByClassName('JvJ');
let JvCPU = document.getElementsByClassName('JvCPU');
let nomUsuario = document.getElementById('usuario');

function victorias() {
    for (let i = 0; i < datosRegistro.length; i++) {
        //Compara los datos de cada posición con los datos dados por el usuario
        if (datosRegistro[i].correo === datosInicio.correo && datosRegistro[i].contraseña === datosInicio.contraseña) {
             //Si lo datos de la posición coinciden con los datos dados por el usuario, manipula el resto de datos de esa posición
            nomUsuario.textContent = datosRegistro[i].usuario;
            JvCPU[0].textContent = datosRegistro[i].Jwins;
            JvCPU[1].textContent = datosRegistro[i].CPUwins;
            JvJ[0].textContent = datosRegistro[i].J1;
            JvJ[1].textContent = datosRegistro[i].J2;
        }
    }
}

btnCerrarSesion.addEventListener('click', function () {
    //Redirecciona al login y borra la llave datosInicio
    window.location.href = 'login.html'
    localStorage.removeItem('datosInicio')
});

//Un reloj :3 (me lo pidió Barry)
function mostrarHora() {
    //Genera la hora actual
    let horaActual = new Date();
    //Separa las horas, minutos y segundos
    let hora = horaActual.getHours();
    let minutos = horaActual.getMinutes();
    let segundos = horaActual.getSeconds();
    //Muestra la hora en el html
    reloj.textContent = hora + ':' + minutos + ':' + segundos;

    //Vuelve a llamarse con un intervalo de un segundo
    setTimeout(() => {
        mostrarHora()
    }, 1000);
}
