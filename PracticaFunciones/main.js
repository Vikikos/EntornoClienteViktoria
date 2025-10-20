let pedirpalabra = () =>{
    let palabras =  new Array();
    let palabra = '';

    do {
        palabra = prompt('Dime una palabra');//el prompt no devuelve nada cuando se deja vacio
        if(palabra){//comprueba si tiene algo
            palabras.push(palabra);
        }
        /*
        if(palabra === '' || palabra === null){
            //si la palabra esta vacia o se cancela
            palabra = null;
        }else{
            //si la palabra lleva texto
            palabras.push(palabra);
        }*/

    } while (palabra);

    return palabras;
}
