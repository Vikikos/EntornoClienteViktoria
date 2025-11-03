const colores = ['rojo', 'verde', 'azul', 'amarillo', 'naranja', 'violeta'];
console.log(colores);

let newArray = colores.slice(1, 5);
console.log(newArray);

colores.splice(3, 2, 'blanco ', 'negro');
console.log(colores);
