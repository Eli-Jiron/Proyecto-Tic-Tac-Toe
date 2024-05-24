let usuario = document.getElementById('usuario');
let correo = document.getElementById('correo');
let contraseña = document.getElementById('contraseña');
let enviar = document.getElementById('enviar');
let mensajes = document.getElementById('mensajes');

let validarEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

let datosRegistro = JSON.parse(localStorage.getItem('datos')) || [];

function registro() {
    if (usuario.value && correo.value && contraseña.value !== '') {
        if (validarEmail.test(correo.value)) {
            let datosUsuario = {
                usuario: usuario.value,
                correo: correo.value,
                contraseña: contraseña.value,
                Jwins: 0,
                CPUwins: 0,
                J1: 0,
                J2: 0,
            };
        
            datosRegistro.push(datosUsuario);
            
            localStorage.setItem('datos', JSON.stringify(datosRegistro));
            mensajes.textContent = 'Registrado con éxito';
        } else {
            mensajes.textContent = 'Ingrese un correo valido';
        }
    } else {
        mensajes.textContent = 'Debe llenar los espacios solicitados';
    }

}

enviar.addEventListener('click', registro);