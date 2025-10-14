let numPar = (num) =>{
    if(num%2 == 0){
        return true;
    }else{
        return false;
    }
}
//manera mas optima - codigo
//const esPar = (numero) => numero % 2 === 0;

console.log('El 3 es par? ' + numPar(3));
console.log('El 6 es par? ' + numPar(6));