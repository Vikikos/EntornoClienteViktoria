let numerosLoteria = new Set();

while (numerosLoteria.size < 5 ){
    let loteria = new Array();
    for (let i = 0; i < 6; i++) {
        //creamos numero aleatorio
        let num = Math.floor(Math.random()*49)+1;

        loteria = loteria + ' ' + num;
    }
    numerosLoteria.add(loteria);
    console.log(loteria);
}//50