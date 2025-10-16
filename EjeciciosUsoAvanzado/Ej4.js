const arrayNumebers = [1,5,29,0,55];
console.log(arrayNumebers);

let sumaTotal = arrayNumebers.reduce((suma,valor) => suma+ valor, 0);

console.log("Suma total del array: " + sumaTotal);