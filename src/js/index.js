let datosInicio = JSON.parse(localStorage.getItem('datosInicio'));
let datosRegistro = JSON.parse(localStorage.getItem('datos'));

let reloj = document.getElementById('reloj');
let btnCerrarSesion = document.getElementById('cerrarSesion');
let JvJ = document.getElementsByClassName('JvJ');
let JvCPU = document.getElementsByClassName('JvCPU');
let nomUsuario = document.getElementById('usuario');

function victorias() {
    for (let i = 0; i < datosRegistro.length; i++) {
        if (datosRegistro[i].correo === datosInicio.correo && datosRegistro[i].contraseña === datosInicio.contraseña) {
            nomUsuario.textContent = datosRegistro[i].usuario;
            JvCPU[0].textContent = datosRegistro[i].Jwins;
            JvCPU[1].textContent = datosRegistro[i].CPUwins;
            JvJ[0].textContent = datosRegistro[i].J1;
            JvJ[1].textContent = datosRegistro[i].J2;
        }
    }
}

btnCerrarSesion.addEventListener('click', function () {
    window.location.href = 'login.html'
    localStorage.removeItem('datosInicio')
});

function mostrarHora() {
    let horaActual = new Date();
    let hora = horaActual.getHours();
    let minutos = horaActual.getMinutes();
    let segundos = horaActual.getSeconds();
    reloj.textContent = hora + ':' + minutos + ':' + segundos;

    setTimeout(() => {
        mostrarHora()
    }, 1000);
}
