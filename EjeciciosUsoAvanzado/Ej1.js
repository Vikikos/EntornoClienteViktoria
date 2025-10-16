let arrayNumebers = [1,5,29,0,55];
//manera anterior

let suma = 0;
for (let i = 0; i < arrayNumebers.length; i++) {
    suma += arrayNumebers[i];
}

console.log(arrayNumebers);
console.log("Suma total: " + suma)

//solucion 

function sumaRecursiva(numeros){
    if(numeros.length === 0){
        return 0;
    }
    return numero[0] + sumaRecursiva(numeros.slice(1));
}

console.log('Suma recursiva: ${sumaRecursiva(arrayNumebers)}');