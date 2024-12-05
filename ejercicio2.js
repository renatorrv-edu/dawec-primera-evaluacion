// Creamos las constantes que contendrán los elementos del formulario.
// Usamos const porque son elementos que no vamos a modificar en ningún momento.

const form = document.getElementById('form');
const apagarWindows = document.getElementById('apagar_windows');
const password = document.getElementById('password');
const repetidaPassword = document.getElementById('repetida_password');
const indicio_password = document.getElementById('indicio_password');
const privacidad = document.getElementById('privacidad');
const enviar = document.getElementById('enviar_formulario');

// Almacenamos también en constantes los inputs de mensajes de error que usaremos.

const passwordError = document.getElementById('password_error');
const repetidaPasswordError = document.getElementById('repetida_password_error');
const indicioPasswordError = document.getElementById('indicio_password_error');
const privacidadError = document.getElementById('privacidad_error');

// También almacenamos las expresiones regulares que vamos a usar para comprobar la contraseña.

const passwordExReg = RegExp();