class Rectangulo {
    constructor(width,height) {
        if (width<=0) {
            this.width = 1;
        }else{
            this.width = width;
        }
        if(height<= 0){
            this.height = 1;
        }else{
            this.height = height;
        }
    }
    cambiarDimensiones(newWidth,newHeight){
        //validacion
        this.width = newWidth;
        this.height = newHeight;
    }

    calcularArea(){
        return this.width * this.height;
    }

    copia(){
        let newObject = this;
        return newObject;
    }
    comparar(rectangulo){
        let areaThis = this.calcularArea();
        let areaR1 = rectangulo.calcularArea();

        if(areaThis>areaR1){
            return 'mayor';
        }else if(areaThis<areaR1){
            return 'menor';
        }else{
            return 'igual';
        }
    }
}

const rect1 = new Rectangulo(100,200);
const rect2 = new Rectangulo(300,400);

let cajas = document.getElementsByClassName('res');

for (const x in cajas) {
    if (x == 0) {
        cajas[x].innerHTML += 'Rectangulo 1 ->Ancho: ' + rect1.width + ' Alto: ' + rect1.height;
        cajas[x].innerHTML += '<br>Rectangulo 2 ->Ancho: ' + rect2.width + ' Alto: ' + rect2.height;
    }
    if(x==1){
        rect2.cambiarDimensiones(350,500);
        cajas[x].innerHTML += 'Rectangulo 2 ->Ancho: ' + rect2.width + ' Alto: ' + rect2.height;
    }
    if(x==2){
        let areaR1 = rect1.calcularArea();
        let areaR2 = rect2.calcularArea();
        cajas[x].innerHTML += 'Rectangulo 1 ->Area: ' + areaR1 ;
        cajas[x].innerHTML += '<br>Rectangulo 2 ->Area: ' + areaR2;
    }
    if(x==3){
        var rect3 = rect1.copia();
        cajas[x].innerHTML += 'Copia de 1: Rectanglo 3 ->Ancho: ' + rect3.width + ' Alto: ' + rect3.height;
    }
    if(x==4){
        let compa1 = rect1.comparar(rect2);
        let compa2 = rect1.comparar(rect3);
        cajas[x].innerHTML += 'Rectangulo 1 es ' + compa1 + ' que Rectangulo 2';
        cajas[x].innerHTML += '<br>Rectangulo 1 es ' + compa2 + ' que Rectangulo 3';
    }
}

