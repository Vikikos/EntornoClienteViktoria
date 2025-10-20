let palabras =  pedirpalabra();

palabras = new Set(palabras);//borra los repetidos trasnformando en set
const arrayPalabras = [...palabras];//lo convertimos en array de nuevo para usar las funciones de Array
arrayPalabras.sort().reverse();//ordenamos alfabeticamente en reverse

let caja = document.getElementById('res');
caja.textContent = arrayPalabras;
