let usuario = document.getElementById('usuario');
let correo = document.getElementById('correo');
let contraseña = document.getElementById('contraseña');
let enviar = document.getElementById('enviar');
let mensajes = document.getElementById('mensajes');

//Validación de email
let validarEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

let datosRegistro = JSON.parse(localStorage.getItem('datos')) || [];

function registro() {
    //Valida que los espacio no estén vacíos
    if (usuario.value && correo.value && contraseña.value !== '') {
        //Comprueba que el correo sea valido
        if (validarEmail.test(correo.value)) {
            //Un objeto para almacenar los datos ingresados por el usuario
            let datosUsuario = {
                usuario: usuario.value,
                correo: correo.value,
                contraseña: contraseña.value,
                Jwins: 0,
                CPUwins: 0,
                J1: 0,
                J2: 0,
            };
            
            //Añade el objeto a un array
            datosRegistro.push(datosUsuario);
            
            //Sube el array al localStorage como un string
            localStorage.setItem('datos', JSON.stringify(datosRegistro));
            //Muestra este mensaje al usuario
            mensajes.textContent = 'Registrado con éxito';
        } else {
            //Si el correo no es valido, muestra este mensaje
            mensajes.textContent = 'Ingrese un correo valido';
        }
    } else {
        //Si algún espacio está vacío, muestra este mensaje
        mensajes.textContent = 'Debe llenar los espacios solicitados';
    }

}

//Cuando se clickeado llama a la función registro()
enviar.addEventListener('click', registro);