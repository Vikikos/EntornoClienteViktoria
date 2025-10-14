let numerosLoteria = new Set();


while (numerosLoteria.size < 5 ){
    let loteriaArray = new Array();
    for (let i = 0; i < 6; i++) {
        do {
            let num = Math.floor(Math.random()*49)+1;
            if(!loteriaArray.includes(num)){
                loteriaArray.push(num);
                break;
            }
        } while (true);
    }
    numerosLoteria.add(loteriaArray);
}

console.log('Numeros de loteria');

for (const num of numerosLoteria) {
    let imprimir = '';
    for (const e in num) {
       imprimir += ' ' + num[e];
    }
    console.log(imprimir);
}
//console.log(numerosLoteria);
