let correo = document.getElementById('correo');
let contraseña = document.getElementById('contraseña');
let btnInicioSesion = document.getElementById('btnInicioSesion');
let mensajes = document.getElementById('mensajes');

//Validación de email
let validarEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

//Obtiene los datos del registro
let datosRegistro = JSON.parse(localStorage.getItem('datos')) || [];

function validarUsuario() {
    //Valida que los campos no estén vacíos
    if (correo.value && contraseña.value !== '') {
        //Comprueba que el correo sea valido
        if (validarEmail.test(correo.value)) {
            //Busca en el array la posición que coincida con ambos valores
            let buscar = datosRegistro.find(datosUsuario => correo.value === datosUsuario.correo && contraseña.value === datosUsuario.contraseña);
            if (buscar) {
                //Muestra este mensaje al usuario
                mensajes.textContent = 'Redireccionando...';
                //Guarda en un localStorage los datos ingresados para ser usados luego
                let inicio = {
                    correo: correo.value,
                    contraseña: contraseña.value,
                }
                localStorage.setItem('datosInicio', JSON.stringify(inicio));
                //Redirecciona a la pagina de inicio despues de un segundo
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            } else {
                //Si los datos no coinciden, muestra este mensaje
                mensajes.textContent = 'No se ha encontrado el usuario';
            }
        } else {
            //Si el correo no es valido, muestra este mensaje
            mensajes.textContent = 'Ingrese un correo valido';
        }
    } else {
        //Si hay algún espacio vacío, muestra este mensaje
        mensajes.textContent = 'Debe llenar los espacios';
    }
}

//Cuando se haga click en el botón llama a la función validarUsuario()
btnInicioSesion.addEventListener('click', validarUsuario);