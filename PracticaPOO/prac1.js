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
        let newObject = new Rectangulo(this);
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

let caja = document.getElementById('res1');

