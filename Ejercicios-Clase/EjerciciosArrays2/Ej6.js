const numeros = [4, 21, 33, 12, 9, 54];
const numerosPares = [];
numeros.forEach((num) => {
  if (num % 2 == 0) {
    numerosPares.push(num);
  }
});
console.log(numerosPares);
