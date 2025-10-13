let ulLista = document.getElementById('lista');
let arraySpan = ulLista.getElementsByTagName('span');
for (let i = 0; i < arraySpan.length; i++) {
  let textoActual = parseFloat(arraySpan[i].textContent);
  arraySpan[i].textContent = textoActual + 0.1;
}
