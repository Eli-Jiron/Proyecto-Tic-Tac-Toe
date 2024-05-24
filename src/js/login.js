let correo = document.getElementById('correo');
let contraseña = document.getElementById('contraseña');
let btnInicioSesion = document.getElementById('btnInicioSesion');
let mensajes = document.getElementById('mensajes');

let validarEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

let datosRegistro = JSON.parse(localStorage.getItem('datos')) || [];

function validarUsuario() {
    if (correo.value && contraseña.value !== '') {
        if (validarEmail.test(correo.value)) {
            for (let i = 0; i < datosRegistro.length; i++) {
                if (correo.value === datosRegistro[i].correo && contraseña.value === datosRegistro[i].contraseña) {
                    window.location.href = 'index.html';
                } else {
                    mensajes.textContent = 'No se ha encontrado el usuario';
                }
            }
        } else {
            mensajes.textContent = 'Ingrese un correo valido';
        }
    } else {
        mensajes.textContent = 'Debe llenar los espacios';
    }
}

btnInicioSesion.addEventListener('click', validarUsuario);