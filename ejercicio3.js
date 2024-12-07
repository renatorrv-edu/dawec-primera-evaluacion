// Quitar del campo de texto descifrado el d-none de sus clases.

// Almacenamos en constantes los input de la página.

const alfabeto = document.getElementById('alfabeto');
const textoDescifrar = document.getElementById('texto_descifrar');
const rotado = document.getElementById('rotado');
const enviar = document.getElementById('enviar');
const resultado = document.getElementById('resultado'); // También guardamos el contenedor en el que mostraremos el mensaje descifrado.



alfabeto.addEventListener('change', function() {
  if (alfabeto.value == "ingles") {
    rotado.max = "25";
    rotado.value = "0";
  } else {
    rotado.max = "26";
    rotado.value = "0";
  }
})

// Vamos a usar un objeto llamado "alfabetos" que incluya entradas para cada alfabeto.
// De esta forma, se puede actualizar e incluir nuevos alfabetos de manera sencilla sin afectar al resto del código.

const alfabetos = {
  ingles: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  espanol: "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
}

// Ejecutaremos el script cuando le damos al botón "Enviar".

enviar.addEventListener('click', function() {


})
