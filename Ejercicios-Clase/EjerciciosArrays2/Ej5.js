const edades = [25, 30, 18, 40, 25, 30];
console.log(edades);

for (let i = 0; i < edades.length; i++) {
  if (edades[i] == 30) {
    console.log('Primera posicion del 30 ' + i);
    break;
  }
}
for (let i = edades.length - 1; i > 0; i--) {
  if (edades[i] == 25) {
    console.log('ultima posicion del 25 ' + i);
    break;
  }
}
