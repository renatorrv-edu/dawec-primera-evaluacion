let btnEnviar = document.getElementById('mostrar');

function esCurioso(n) {
  let numBucle = n;
  let digitos = [];

  // Con este bucle vamos a separar el número que haya en dígitos.
  while (numBucle != 0) {
    let digito = numBucle % 10;
    digitos.push(digito);

    numBucle = Math.trunc(numBucle / 10);
  }

  // El array guarda los dígitos en orden inverso. Por ejemplo, 153 se guardaría
  // como [3, 5, 1]. Igualmente, esto no influye porque queremos usar las sumas de sus cubos.
  // El orden de los dígitos no es relevante.

  let sumaCubos = 0;

  // En la variable sumaCubos iremos guardando las sumas de los cubos para luego compararlas al número recibido.
  for (let i = 0; i < digitos.length; i++) {
    sumaCubos += digitos[i] ** 3;
  }

  if (sumaCubos == n) {
    return true;
  }

  return false;
}

btnEnviar.addEventListener('click', function() {
  // En el siguiente Array iremos guardando los números curiosos para mostrarlos al usuario.
  let numerosCuriosos = [];
  
  // Como en principio no deberíamos saber cuántos números curiosos existen, hacemos un bucle que vaya comprobando todos los números hasta Infinito.
  for (let i = 1; i < Infinity; i++) {
    if (esCurioso(i)) {
      numerosCuriosos.push(i);
    }

    // Comprobamos cuantas coincidencias existen con la longitud del array. Si hemos encontrado 5 coincidencias, salimos del bucle.
    if (numerosCuriosos.length == 5) {
      break;
    }
  }
  //Creamos una cadena vacía donde iremos almacenando los números curiosos para mostrarlos de forma más legible en pantalla.
  let mensajeNumerosCuriosos = "";

  for (let i = 0; i < numerosCuriosos.length; i++) {
    mensajeNumerosCuriosos += numerosCuriosos[i].toString() + "\n";
  }

  //Por último, mostramos en un mensaje de alerta la cadena.
  alert("Números curiosos: \n" + mensajeNumerosCuriosos);
})