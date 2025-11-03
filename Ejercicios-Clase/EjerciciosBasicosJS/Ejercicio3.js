var mensaje = 'Hola';
if (true) {
  let mensaje = 'Adios';
  console.log(mensaje);
}
console.log(mensaje); //son distintos

//en caso de ambos ser let ambos son distintos

//en caso de ambos ser var los dos pasan a ser el mensaje "Adios"
