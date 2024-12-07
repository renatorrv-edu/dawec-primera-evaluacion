// Almacenamos en constantes los input de la página.

const alfabeto = document.getElementById('alfabeto');
const textoDescifrar = document.getElementById('texto_descifrar');
const rotado = document.getElementById('rotado');
const enviar = document.getElementById('enviar');
const resultado = document.getElementById('resultado'); // También guardamos el contenedor en el que mostraremos el mensaje descifrado.
const contenedorResultado = document.getElementById('contenedor_resultado');

// Añadiremos un addEventListener para cuando se cambie entre los distintos idiomas. Cambiar a otro idioma hará que el valor del campo se resetee a 0 y se
// ajuste el valor máximo de la rotación.

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
  // Lo primero que haremos será vaciar el contenedor "resultado" para introducir el nuevo mensaje.
  resultado.textContent = '';
  
  // Creamos la variable textoDescifrado donde iremos almacenando el mensaje caracter a caracter.
  let textoDescifrado = '';

  // Almacenamos el alfabeto seleccionado. 
  let alfabetoSeleccionado = alfabetos[alfabeto.value];

  // Almacenamos el mensaje a descifrar en mayúsculas.
  let textoCifrado = textoDescifrar.value.toUpperCase();

  let valorRotado = parseInt(rotado.value);

  // Vamos a iterar sobre cada elemento de la cadena "textoCifrado". Almacenaremos cada paso de la iteración en una variable llamada "caracter".
  for (let caracter of textoCifrado) {
    if (alfabetoSeleccionado.includes(caracter)) {
      let i = (alfabetoSeleccionado.indexOf(caracter) - valorRotado + alfabetoSeleccionado.length) % alfabetoSeleccionado.length;
      
      /*
      A raíz de estar leyendo e investigando en Stackoverflow encontré el uso de % a la hora de iterar sobre Arrays. Esto hace que las rotaciones se vuelvan circulares.
      Es decir, que si el índice se pasa del valor máximo se ajusta al índice real. En esta línea estamos preveyendo tanto si el índice se queda en negativo como si se pasa de la longitud base.
      
      Por ejemplo, si en un array de longitud 25 tuviéramos el índice 22 + 6 nos daría un número que sobrepasa la longitud: 28. % transforma 28 a 2.
      
      De todas formas dejo aquí abajo otra versión que funciona también pero va paso a paso y maneja manualmente la correción de índices:

      // Almacenamos en una variable el índice del caracter dentro del array de su alfabeto.
      let i = alfabetoSeleccionado.indexOf(caracter);

      // A este valor le restamos el valor de rotado.
      i -= valorRotado;

      // A continuación comprobamos si el índice es menor que 0 (negativo) o mayor que la longitud del Array. Solucionaremos ambas cosas sumándole o restándole
      // la longitud del array. Por ejemplo: si tenemos un índice -2 le sumamos 25 y nos quedamos con 23.

      if (i < 0 ) {
        i += alfabetoSeleccionado.length;
      }

      // En este caso, si tenemos, por ejemplo, un índice que sea 28 le restamos 25 (la longitud del array) y tenemos 3.

      if (i > alfabetoSeleccionado.length) {
        i -= alfabetoSeleccionado.length;
      }
      */

      textoDescifrado += alfabetoSeleccionado[i];
    } else {
      // Si el caracter no está previsto en el alfabeto seleccionado, simplemente lo introduciremos tal cual.
      textoDescifrado += caracter;
    }
  }

  // Quitamos la clase d-none al contenedor del resultado, que lo mantenía oculto.
  contenedorResultado.classList.remove('d-none');

  // Añadimos al div "resultado" la cadena de texto ya descifrada.
  resultado.textContent = textoDescifrado;
})
