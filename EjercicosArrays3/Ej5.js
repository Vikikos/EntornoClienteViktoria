let personas = new Array(['viki',22],['carlos',42],['lucia',29],['viki',22],['viki',22],['lucia',29]);
console.log(personas);

function contarOcurrencias(array) {
    const mapaPersonas = new Map();
    array.forEach(element => {
        let nombre = element[0];
        let vecesNombre=0;
        array.forEach(element => {
            if(element[0] === nombre){
                vecesNombre++;
            }
        });
        mapaPersonas.set(nombre,vecesNombre);
    });
    return mapaPersonas;
}

console.log(contarOcurrencias(personas));
