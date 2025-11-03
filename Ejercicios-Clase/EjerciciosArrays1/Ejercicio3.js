const nombres = ['Taylor', 'Elias', 'Viki', 'Sole', 'Lucia'];
const edades = [24, 6, 21, 3, 21];
const mayoresDeEdad = [];

console.log(nombres);
for (const persona in nombres) {
  if (edades[persona] >= 18) {
    //mayor de edad
    //mayoresDeEdad.push(nombres[persona]);
    mayoresDeEdad[mayoresDeEdad.length] = nombres[persona];
  }
}
console.log(mayoresDeEdad);
