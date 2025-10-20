let array1 = [1,2,3,4];

//multiplicar por 2 todos los elementos

function callbackMult(num){
    return num*2;
}
function filtro(array,funcion) {
    for (const x in array) {
        array[x] = funcion(array[x]);
    }
    return array;
}
array1 = filtro(array1,callbackMult);
document.getElementById('res1').textContent = array1;

//pasar a mayuscula todos los elementos

let array2 = ['hola','que','tal'];

function callbackUppercase(texto) {
    return texto.toUpperCase();
}
function filtro2(array, funcion) {
    for (const x in array) {
        array[x] = funcion(array[x]);
    }
    return array;
}

array2 = filtro2(array2,callbackUppercase);

document.getElementById('res2').textContent = array2;

//calñcular factorial de cada elementyo del array
let array3 = [4,2,6];

function callBackFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        //calcula el factorial
        factorial *= i; 
    }  
    return factorial;
}

function filtro3(array,funcion) {
    for (const x in array) {//4
        //por cada elemento repetyimos el factorial
        if(array[x] == 0){
            array[x] = 1;
        }else{
            array[x] = funcion(array[x]);//1
        }
    }
    return array;
}
array3 = filtro3(array3,callBackFactorial);
document.getElementById('res3').textContent = array3;

