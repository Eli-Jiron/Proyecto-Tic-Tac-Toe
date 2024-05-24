let correo = document.getElementById('correo');
let contraseña = document.getElementById('contraseña');
let btnInicioSesion = document.getElementById('btnInicioSesion');
let mensajes = document.getElementById('mensajes');

let validarEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

let datosRegistro = JSON.parse(localStorage.getItem('datos')) || [];

function validarUsuario() {
    if (correo.value && contraseña.value !== '') {
        if (validarEmail.test(correo.value)) {
            let buscar = datosRegistro.find(datosUsuario => correo.value === datosUsuario.correo && contraseña.value === datosUsuario.contraseña);
            if (buscar) {
                mensajes.textContent = 'Redireccionando...';
                let inicio = {
                    correo: correo.value,
                    contraseña: contraseña.value,
                }
                localStorage.setItem('datosInicio', JSON.stringify(inicio));
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            } else {
                mensajes.textContent = 'No se ha encontrado el usuario';
            }
        } else {
            mensajes.textContent = 'Ingrese un correo valido';
        }
    } else {
        mensajes.textContent = 'Debe llenar los espacios';
    }
}

btnInicioSesion.addEventListener('click', validarUsuario);