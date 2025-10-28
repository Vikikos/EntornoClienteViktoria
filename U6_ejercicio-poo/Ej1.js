let persona = {
    //ej 1
    nombre : 'Juan',
    edad: 30,
    profesion: 'Ingeniero',

    presentarse: function(){
        return 'Esta persona es ' +  this.nombre + ' ' + this.profesion;

    },
    //ej 2
    cumplirAnios: function(){
        this.edad++;
    }

}
//ej 1
console.log(persona.presentarse());
//ej 2
console.log(persona.edad);
persona.cumplirAnios();
console.log(persona.edad)