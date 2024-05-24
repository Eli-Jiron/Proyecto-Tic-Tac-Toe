let datosInicio = JSON.parse(localStorage.getItem('datosInicio'));
let datosRegistro = JSON.parse(localStorage.getItem('datos'));

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