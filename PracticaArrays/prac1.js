let numerosLoteria = new Map();
let numeros = 5;

do {
    let loteria = new Array();
    for (let i = 0; i < 6; i++) {
        //creamos numero aleatorio
        let num = Math.floor(Math.random()*49)+1;

        loteria = loteria + ' ' + num;
    }
    numerosLoteria.add(loteria);
    console.log(loteria);
} while (numeros < 5 );//50