class Animal{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    emitirSonido(){
        return('sonido genérico');
    }
}
class Perro extends Animal{
    emitirSonido(){
        return('¡Guau!');
    }
}

const perro1 = new Perro('Max','5');
console.log(perro1.emitirSonido());