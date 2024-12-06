// Creamos las constantes que contendrán los elementos del formulario.
// Usamos const porque son elementos que no vamos a modificar en ningún momento.

const form = document.getElementById('form');
const apagarWindows = document.getElementById('apagar_windows');
const password = document.getElementById('password');
const repetidaPassword = document.getElementById('repetida_password');
const indicioPassword = document.getElementById('indicio_password');
const enviar = document.getElementById('enviar_formulario');

// Almacenamos también en constantes los inputs de mensajes de error que usaremos.

const passwordError = document.getElementById('password_error');
const repetidaPasswordError = document.getElementById('repetida_password_error');
const indicioPasswordError = document.getElementById('indicio_password_error');

// También almacenamos las expresiones regulares que vamos a usar para comprobar la contraseña.

const passwordExReg = RegExp(/^[A-Z][A-Za-z\d]{5,}\d$/);

// Una vez hagamos click en el botón de "Enviar", haremos las comprobaciones.

form.addEventListener('submit', function(event) {
  // Con esta línea, prevenimos que el formulario se envíe hasta que terminemos las comprobaciones.
  event.preventDefault();

  // Con esta variable vamos a ir confirmando campo por campo si cumplen los requisitos. La inicializamos en true.
  let esValido = true;

  // Con la variable primerError vamos a indicar cuál es el primer error para manejar correctamente en qué campo del formulario hacemos focus.
  let primerError = false;

  // Lo primero que haremos será comprobar que el campo no está vacío. Luego si el valor introducido en el campo cumple los requisitos usando la expresión regular anterior.
  if (!password.value) {
    passwordError.textContent = 'El campo "Contraseña" no puede estar vacío.';

    // Si aún no se ha encontrado ningún error, marcaremos a este como el primer error encontrado para no ejecutar el código en el resto de comprobaciones. Marcamos con focus y select los campos del formulario.
    if (!primerError) {
      password.focus();
      password.select();
      primerError = true;
    }

    esValido = false;
  } else if (!passwordExReg.test(password.value)) {
    passwordError.textContent = passwordError.textContent = 'La contraseña debe empezar por una letra mayúscula, tener un mínimo de 6 caracteres y contener, al menos, un dígito.';
    
    if (!primerError) {
      password.focus();
      password.select();
      primerError = true;
    }

    esValido = false;
  } else {
    // Por último, si todo está correcto, vaciaremos el mensaje de error y marcamos esValido como true.
    passwordError.textContent = '';
  }

  if (!repetidaPassword.value) {
    repetidaPasswordError.textContent = 'El campo "Vuelve a escribir la contraseña" no puede estar vacío.';
      
    if (!primerError) {
      repetidaPassword.focus();
      repetidaPassword.select();
      primerError = true;
    }

    esValido = false;
  } else if (repetidaPassword.value !== password.value) {
    repetidaPasswordError.textContent = 'Las contraseñas escritas no coinciden. Vuelve a intentarlo.';
    repetidaPassword.value = '';

    if (!primerError) {
      repetidaPassword.focus();
      repetidaPassword.select();
      primerError = true;
    }

    esValido = false;
  } else {
    repetidaPasswordError.textContent = '';
  }

  if (!indicioPassword.value) {
    indicioPasswordError.textContent = 'El campo "Indicio de contraseña" no puede estar vacío.';

    if (!primerError) {
      indicioPassword.focus();
      indicioPassword.select();
      primerError = true;
    }

    esValido = false;
  } else if (indicioPassword.value.includes(password.value)) {
    indicioPasswordError.textContent = 'El indicio de contraseña no puede contener la contraseña explícitamente.';

    if (!primerError) {
      indicioPassword.focus();
      indicioPassword.select();
      primerError = true;
    }

    esValido = false;
  } else {
    indicioPasswordError.textContent = '';
  }

  // Comprobamos si esValido sigue siendo true. En caso afirmativo, enviaremos el formulario y avisaremos con un mensaje de alerta al usuario de que todo ha salido correctamente.
  if (esValido) {
    alert('Formulario enviado correctamente.');
    form.submit();
  }
})