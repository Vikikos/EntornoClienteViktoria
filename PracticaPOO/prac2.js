class Ordenador{
    constructor(marca,modelo,ram=4,discoDuro=512,pantalla = 17){
        this.marca = marca;
        this.modelo = modelo;
        this.ram = ram;
        this.discoDuro = discoDuro;
        this.pantalla = pantalla;
    }
    toString(){
        return 'Marca: '+ this.marca + ', Modelo: '+ this.modelo +  ', RAM: '+ this.ram + ', Disco Duro: ' +this.discoDuro + ', Pantalla: ' + this.pantalla;
    }
}
class Portatil extends Ordenador {
    constructor(marca,modelo,ram=4,discoDuro=256,pantalla = 12,autonomia = 4) {
        super(marca,modelo,ram,discoDuro,pantalla);
        this.autonomia = autonomia;
    }
    toString(){
        return super.toString() + ', Autornomi: ' + this.autonomia;
    }
}
const o1 = new Ordenador('Asus','TUF Gaming',32,1000,18);
const o2 = new Ordenador('Asus','TUF Gaming',32,1000);//con pantalla por defecto
const o3 = new Ordenador('Asus','TUF Gaming',32);//con pantalla y disco duro por defecto

const p1 = new Portatil('Lenovo','IdeaPad Slim',16,512,15,5);
const p2 = new Portatil('Lenovo','IdeaPad Slim',16,512,15);//con autonomia por defecto
const p3 = new Portatil('Lenovo','IdeaPad Slim',16,512);//con autonomia por defecto y pantalla por defecto

//visualizar

let cajas = document.getElementsByClassName('res');

for (const x in cajas) {
    if(x==0){
        cajas[x].innerHTML += o1.toString();
    }
    if(x==1){
        cajas[x].innerHTML += o2.toString();
    }
    if(x==2){
        cajas[x].innerHTML += o3.toString();
    }
    if(x== 3){
        cajas[x].innerHTML += p1.toString();
    }
    if(x== 4){
        cajas[x].innerHTML += p2.toString();
    }
    if(x== 5){
        cajas[x].innerHTML += p3.toString();
    }
}