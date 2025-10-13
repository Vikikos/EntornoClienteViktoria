const letras =  ['a', 'b', 'c', 'd'];

letras.forEach(letra => {
    if(letra.indexOf('c') >= 0){
        //se puede usar tambien includs()
        console.log('El array contiene la letra c');
    }else if (letra.indexOf('z') >= 0) {
        console.log('El array contiene la letra z');
    } 
});
