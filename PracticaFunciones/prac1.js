let palabras =  pedirpalabra();

palabras.sort();//ordenamos alfabeticamente


palabras.reverse();

let caja = document.getElementById('res');
caja.textContent = palabras;
