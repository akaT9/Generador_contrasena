let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let mensaje = document.getElementById('mensaje');

const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!@#$%^&*()_+[]/{}|;:,.<>?';

function generar () {

    let numeroDigitado = parseInt(cantidad.value);
       console.log (numeroDigitado);

    if (numeroDigitado < 8){
        alert ("la cantidad de caracteres tiene que ser mayor que 8");
        return;
    }
    
    let password = '';
    for (let i = 0; i < numeroDigitado ; i++) {
        let caracterAleatorio = cadenaCaracteres [Math.floor (Math.random () * cadenaCaracteres.length)];
        console.log (caracterAleatorio);
        password += caracterAleatorio;
    }

    contrasena.value = password;
    console.log ("contraseña generada:", password);
    validarContrasena(password); //aqui llama a la funcion de validacion

}

function limpiarCampo () { //limpia el campo de texto
        contrasena.value = ' ';
        document.getElementById('mensaje').textContent = ' '; //limpiar el mensaje
}

function validarContrasena(contrasena) {
    const mayuscula = /[A-Z]/.test(contrasena);
    const minuscula = /[a-z]/.test(contrasena);
    const numero = /\d/.test(contrasena);
    const simbolo = /[!@#$%^&*()_+[\]{}|;:,<>?]/.test(contrasena);

    let mensaje = '';
    let claseMensaje = '';

    console.log("Validando contraseña:", contrasena); // imprime la contraseña validada
    console.log("Contiene mayúsculas:", mayuscula);
    console.log("Contiene minúsculas:", minuscula);
    console.log("Contiene números:", numero);
    console.log("Contiene símbolos:", simbolo);

    if (mayuscula && minuscula && numero && simbolo) {
        mensaje = 'La contraseña es fuerte.';
        claseMensaje = 'fuerte';
    } else {
        mensaje = 'La contraseña es débil.';
        claseMensaje = 'debil';
    }

    const mensajeElemento = document.getElementById('mensaje');
    mensajeElemento.textContent = mensaje;
    mensajeElemento.className = 'mensaje ' + claseMensaje;
}

boton.addEventListener('click', generar);










