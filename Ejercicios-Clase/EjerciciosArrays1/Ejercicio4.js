const palabras = [
  'ana',
  'radar',
  'javascript',
  'reconocer',
  'oro',
  'palindromo',
  'salas',
];

for (const palabra in palabras) {
  let iguales = false;
  for (let i = 0; i < palabras[palabra].length; i++) {
    let charDel = palabras[palabra][i];
    let charAtr = palabras[palabra][palabras[palabra].length - 1 - i];
    if (charDel != charAtr) {
      iguales = false;
      break;
    } else {
      iguales = true;
    }
  }
  if (iguales) {
    console.log(palabras[palabra]);
  }
}
