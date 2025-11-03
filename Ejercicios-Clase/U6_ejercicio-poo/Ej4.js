class Coche{
    constructor(marca,modelo,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    detalles(){
        return this.marca+ ' ' + this.modelo + ' ' + this.ano;
    }
}

const coche1 = new Coche('marca1','modelo1','2011');
console.log(coche1.detalles());
const coche2 = new Coche('marca2','modelo2','2012');
console.log(coche2.detalles());