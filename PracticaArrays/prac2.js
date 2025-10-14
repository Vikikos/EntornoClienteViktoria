let vecesNumAleatorio = new Map();

for (let i = 1; i <= 10; i++) {
   vecesNumAleatorio.set(i,0);
}

for (let i = 0; i < 10000; i++) {
    //repetiremos 10.000 veces 
    let numrandom = Math.floor(Math.random()*10)+1;//del 1 al 10
    let veces = vecesNumAleatorio.get(numrandom);
    vecesNumAleatorio.set(numrandom,(veces+1));
}
console.log('Frecuencias');
for (let [numero,veces] of vecesNumAleatorio) {
    console.log('Numero ' + numero + ': ' + veces);
}